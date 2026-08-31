import { useEffect, useRef, useState } from "react";
import PropertyCreative from "./PropertyCreative";
import { downloadNodeAsPng } from "../utils/downloadImage";
import "../styles/PreviewPanel.css";

export default function PreviewPanel({ generatedData, isGenerating, photoUrl }) {
  const stageRef = useRef(null);
  const creativeRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadDone, setDownloadDone] = useState(false);

  // Keep the 1080x1350 creative scaled to fit the visible preview box
  useEffect(() => {
    function updateScale() {
      if (stageRef.current) {
        const width = stageRef.current.offsetWidth;
        setScale(width / 1080);
      }
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [generatedData]);

  async function handleDownload() {
    if (!creativeRef.current) return;
    setIsDownloading(true);
    setDownloadDone(false);
    try {
      const safeName = (generatedData?.propertyType || "property-post")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
        .slice(0, 60);
      await downloadNodeAsPng(creativeRef.current, `${safeName || "property-post"}.png`);
      setDownloadDone(true);
    } catch (err) {
      console.error("Failed to download image:", err);
      alert("Something went wrong while generating the image. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <div className="preview-panel">
      <div className="preview-toolbar">
        <h2>Preview</h2>
      </div>

      <div className="preview-stage" ref={stageRef} data-empty={!generatedData}>
        {!generatedData ? (
          <div className="empty-state-wrap preview-stage is-empty" style={{ position: "absolute", inset: 0 }}>
            <div className="empty-state">
              <div className="empty-icon">🏡</div>
              <p>Fill in the property details and click "Generate Property Post" to see your creative here.</p>
            </div>
          </div>
        ) : (
          <div
            className="preview-scale-wrap"
            style={{ transform: `scale(${scale})` }}
          >
            <PropertyCreative
              ref={creativeRef}
              propertyType={generatedData.propertyType}
              location={generatedData.location}
              price={generatedData.price}
              highlights={generatedData.highlights}
              bedrooms={generatedData.bedrooms}
              bathrooms={generatedData.bathrooms}
              area={generatedData.area}
              propertyPhotoUrl={generatedData.propertyPhotoUrl}
            />
          </div>
        )}

        {isGenerating && (
          <div className="loading-overlay">
            <div className="big-spinner" />
            <p>Generating your creative...</p>
          </div>
        )}
      </div>

      {generatedData && (
        <div className="download-row">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <span className="spinner" /> Preparing PNG...
              </>
            ) : (
              "⬇ Download Post"
            )}
          </button>
          {downloadDone && <p className="download-success">✓ Downloaded successfully!</p>}
        </div>
      )}
    </div>
  );
}

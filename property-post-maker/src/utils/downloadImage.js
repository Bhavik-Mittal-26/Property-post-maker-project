import { toPng } from "html-to-image";

// Renders the target DOM node to a PNG and triggers a browser download.
// The node should be sized to the exact creative dimensions (1080x1350)
// so the exported PNG contains only the creative, not surrounding UI.
export async function downloadNodeAsPng(node, filename = "property-post.png") {
  if (!node) throw new Error("No node provided for image export.");

  // Render at native resolution (node is already 1080x1350 in the DOM,
  // pixelRatio 1 keeps exact output dimensions).
  const dataUrl = await toPng(node, {
    cacheBust: true,
    pixelRatio: 1,
    width: 1080,
    height: 1350,
    style: {
      transform: "none",
      margin: "0",
    },
  });

  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  return dataUrl;
}

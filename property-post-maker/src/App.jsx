import { useState } from "react";
import FormPanel from "./components/FormPanel";
import PreviewPanel from "./components/PreviewPanel";
import brandConfig from "./config/brandConfig";
import sampleData from "./config/sampleData";
import { validateFields } from "./utils/validate";
import "./styles/App.css";

const EMPTY_FIELDS = {
  propertyType: "",
  location: "",
  price: "",
  highlights: "",
  bedrooms: "",
  bathrooms: "",
  area: "",
  propertyPhoto: null,
  propertyPhotoUrl: "",
};

function App() {
  const [fields, setFields] = useState(EMPTY_FIELDS);
  const [errors, setErrors] = useState({});
  const [generatedData, setGeneratedData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  function handleChange(key, value) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function handleUseSampleData() {
    setFields({ ...sampleData });
    setErrors({});
  }

  function handleReset() {
    setFields(EMPTY_FIELDS);
    setErrors({});
    setGeneratedData(null);
  }

  function handlePhotoChange(file, url) {
    setFields((prev) => ({
      ...prev,
      propertyPhoto: file,
      propertyPhotoUrl: url,
    }));
    if (errors.propertyPhoto) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.propertyPhoto;
        return next;
      });
    }
  }

  function handleGenerate() {
    const { isValid, errors: fieldErrors } = validateFields(fields);
    setErrors(fieldErrors);

    if (!isValid) {
      return;
    }

    setIsGenerating(true);
    setGeneratedData(null);

    // Small delay gives the "generating" state a natural feel and
    // ensures the preview node is freshly mounted before export.
    setTimeout(() => {
      setGeneratedData({ ...fields });
      setIsGenerating(false);
    }, 700);
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <span className="eyebrow">🏠 {brandConfig.brandName}</span>
        <h1>{brandConfig.appName}</h1>
        <p className="subtitle">{brandConfig.appTagline}</p>
      </header>

      <main className="app-main">
        <FormPanel
          fields={fields}
          errors={errors}
          isGenerating={isGenerating}
          onChange={handleChange}
          onPhotoChange={handlePhotoChange}
          onUseSampleData={handleUseSampleData}
          onGenerate={handleGenerate}
          onReset={handleReset}
        />
        <PreviewPanel generatedData={generatedData} isGenerating={isGenerating} photoUrl={fields.propertyPhotoUrl} />
      </main>

      <footer className="app-footer">
        <p>
          Built with <strong>{brandConfig.appName}</strong> · Created by{" "}
          <strong>{brandConfig.creatorName}</strong>
        </p>
      </footer>
    </div>
  );
}

export default App;

import "../styles/FormPanel.css";

const FIELD_META = [
  {
    key: "propertyType",
    label: "Property & Type",
    placeholder: "e.g. 4 BHK Luxury Villa, Ansal Golf City",
    type: "input",
  },
  {
    key: "location",
    label: "Location",
    placeholder: "e.g. Sushant Golf City, Lucknow",
    type: "input",
  },
  {
    key: "price",
    label: "Price",
    placeholder: "e.g. ₹2.5 Cr onwards",
    type: "input",
  },
  {
    key: "bedrooms",
    label: "Bedrooms",
    placeholder: "e.g. 4",
    type: "input",
  },
  {
    key: "bathrooms",
    label: "Bathrooms",
    placeholder: "e.g. 3",
    type: "input",
  },
  {
    key: "area",
    label: "Area (sq.ft)",
    placeholder: "e.g. 3000",
    type: "input",
  },
  {
    key: "highlights",
    label: "Highlights",
    placeholder: "e.g. Corner plot · Ready to move · Swimming pool",
    type: "textarea",
    hint: "Separate multiple highlights with · or a comma.",
  },
];

export default function FormPanel({
  fields,
  errors,
  isGenerating,
  onChange,
  onPhotoChange,
  onUseSampleData,
  onGenerate,
  onReset,
}) {
  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onPhotoChange(file, event.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-panel">
      <h2>Property Details</h2>
      <p className="form-subtitle">Fill in the details below to generate your creative.</p>

      {/* Photo Upload Section */}
      <div className="photo-upload-section">
        <div className="field-group">
          <label htmlFor="propertyPhoto">
            Property Photo
            <span className="required-star">*</span>
          </label>
          <div className="photo-upload-wrapper">
            <input
              id="propertyPhoto"
              type="file"
              accept="image/*"
              className={`photo-input ${errors.propertyPhoto ? "has-error" : ""}`}
              onChange={handlePhotoUpload}
            />
            <div className="photo-input-label">
              {fields.propertyPhotoUrl ? (
                <>
                  <div className="photo-preview-small">
                    <img src={fields.propertyPhotoUrl} alt="Property" />
                  </div>
                  <span className="photo-input-text">✓ Photo selected</span>
                </>
              ) : (
                <>
                  <span className="photo-icon">📷</span>
                  <span className="photo-input-text">Click to upload property photo</span>
                </>
              )}
            </div>
          </div>
          {errors.propertyPhoto ? (
            <p className="field-error">{errors.propertyPhoto}</p>
          ) : (
            <p className="field-hint">Upload a clear, high-quality photo of the property</p>
          )}
        </div>
      </div>

      {/* Other Fields */}
      {FIELD_META.map((meta) => (
        <div className="field-group" key={meta.key}>
          <label htmlFor={meta.key}>
            {meta.label}
            <span className="required-star">*</span>
          </label>
          {meta.type === "textarea" ? (
            <textarea
              id={meta.key}
              value={fields[meta.key]}
              placeholder={meta.placeholder}
              className={errors[meta.key] ? "has-error" : ""}
              onChange={(e) => onChange(meta.key, e.target.value)}
            />
          ) : (
            <input
              id={meta.key}
              type="text"
              value={fields[meta.key]}
              placeholder={meta.placeholder}
              className={errors[meta.key] ? "has-error" : ""}
              onChange={(e) => onChange(meta.key, e.target.value)}
            />
          )}
          {errors[meta.key] ? (
            <p className="field-error">{errors[meta.key]}</p>
          ) : meta.hint ? (
            <p className="field-hint">{meta.hint}</p>
          ) : null}
        </div>
      ))}

      <div className="button-row">
        <button type="button" className="btn btn-secondary" onClick={onUseSampleData}>
          ✨ Use Sample Data
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <span className="spinner" /> Generating...
            </>
          ) : (
            "🎨 Generate Property Post"
          )}
        </button>
        <button type="button" className="btn btn-ghost" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

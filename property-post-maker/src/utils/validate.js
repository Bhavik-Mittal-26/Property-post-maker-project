export function validateFields(fields) {
  const errors = {};

  if (!fields.propertyType || !fields.propertyType.trim()) {
    errors.propertyType = "Property & Type is required.";
  }
  if (!fields.location || !fields.location.trim()) {
    errors.location = "Location is required.";
  }
  if (!fields.price || !fields.price.trim()) {
    errors.price = "Price is required.";
  }
  if (!fields.bedrooms || !fields.bedrooms.trim()) {
    errors.bedrooms = "Bedrooms is required.";
  }
  if (!fields.bathrooms || !fields.bathrooms.trim()) {
    errors.bathrooms = "Bathrooms is required.";
  }
  if (!fields.area || !fields.area.trim()) {
    errors.area = "Area is required.";
  }
  if (!fields.highlights || !fields.highlights.trim()) {
    errors.highlights = "Highlights are required.";
  }
  if (!fields.propertyPhotoUrl) {
    errors.propertyPhoto = "Property photo is required.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Splits a highlights string like "3000 sq.ft · Corner plot · Ready to move"
// into an array of individual badge strings. Supports ·, |, , and • separators.
export function parseHighlights(highlightsString) {
  if (!highlightsString) return [];
  return highlightsString
    .split(/[·•|]|(?:,\s)/g)
    .map((item) => item.trim())
    .filter(Boolean);
}

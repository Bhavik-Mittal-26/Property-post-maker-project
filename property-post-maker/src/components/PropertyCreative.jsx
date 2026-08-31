import { forwardRef } from "react";
import brandConfig from "../config/brandConfig";
import { parseHighlights } from "../utils/validate";
import "../styles/PropertyCreative.css";

// The actual downloadable creative. Forwarded ref points to the exact
// 1080x1350 node that gets exported to PNG — nothing else is included.
const PropertyCreative = forwardRef(function PropertyCreative(
  { propertyType, location, price, highlights, bedrooms, bathrooms, area, propertyPhotoUrl },
  ref
) {
  const highlightItems = parseHighlights(highlights);

  return (
    <div className="creative-card" ref={ref}>
      <div className="creative-bg-glow" />

      {/* Brand strip */}
      <div className="brand-strip">
        <div className="brand-mark">
          <div className="brand-logo-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 11L12 3L21 11"
                stroke="#0b1f3a"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 10V20H19V10"
                stroke="#0b1f3a"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="10" y="13" width="4" height="7" fill="#0b1f3a" />
            </svg>
          </div>
          <div className="brand-name-block">
            <span className="brand-name">{brandConfig.brandName}</span>
            <span className="brand-tagline">{brandConfig.brandTagline}</span>
          </div>
        </div>
        <div className="premium-badge">Premium Listing</div>
      </div>

      {/* Property photo */}
      <div className="property-image-container">
        {propertyPhotoUrl ? (
          <img src={propertyPhotoUrl} alt={propertyType} className="property-image" />
        ) : (
          <div className="property-image-placeholder">No Image</div>
        )}
        <div className="for-sale-tag">For Sale</div>
      </div>

      {/* Title, location, price, highlights */}
      <div className="content-block">
        <h1 className="property-title">{propertyType}</h1>

        <div className="property-location">
          <svg
            className="pin-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span>{location}</span>
        </div>

        <div className="price-block">
          <span className="price-label">Price</span>
          <span className="price-value">{price}</span>
        </div>

        {/* Property specs */}
        <div className="specs-row">
          {bedrooms && (
            <div className="spec-item">
              <span className="spec-icon">🛏️</span>
              <span className="spec-value">{bedrooms} BHK</span>
            </div>
          )}
          {bathrooms && (
            <div className="spec-item">
              <span className="spec-icon">🚿</span>
              <span className="spec-value">{bathrooms} Bath</span>
            </div>
          )}
          {area && (
            <div className="spec-item">
              <span className="spec-icon">📐</span>
              <span className="spec-value">{area} sq.ft</span>
            </div>
          )}
        </div>

        <div className="highlights-row">
          {highlightItems.map((item, idx) => (
            <div className="highlight-badge" key={idx}>
              <span className="badge-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: CTA + contact + creator */}
      <div className="creative-footer">
        <div className="cta-row">
          <div className="cta-button">{brandConfig.cta}</div>
          <div className="contact-block">
            <span className="contact-label">Call Now</span>
            <span className="contact-number">{brandConfig.contactNumber}</span>
          </div>
        </div>
        <div className="creator-row">
          <span>
            Created by <span className="creator-name">{brandConfig.creatorName}</span>
          </span>
          <span className="brand-footer-name">{brandConfig.brandName}</span>
        </div>
      </div>
    </div>
  );
});

export default PropertyCreative;

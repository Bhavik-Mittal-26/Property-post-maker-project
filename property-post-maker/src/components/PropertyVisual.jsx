// A self-contained, no-dependency SVG illustration representing a
// premium property. Purely decorative — no external images/APIs needed.
export default function PropertyVisual() {
  return (
    <svg viewBox="0 0 1080 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a4d7f" />
          <stop offset="100%" stopColor="#0e2544" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e5c876" />
          <stop offset="100%" stopColor="#c9a24b" />
        </linearGradient>
        <linearGradient id="buildingGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a5a8a" />
          <stop offset="100%" stopColor="#1c3a63" />
        </linearGradient>
      </defs>

      <rect width="1080" height="360" fill="url(#skyGrad)" />

      {/* Sun / moon accent */}
      <circle cx="900" cy="80" r="60" fill="url(#goldGrad)" opacity="0.85" />
      <circle cx="900" cy="80" r="90" fill="url(#goldGrad)" opacity="0.15" />

      {/* Skyline silhouette, back layer */}
      <g opacity="0.35">
        <rect x="60" y="180" width="70" height="140" fill="#0e2544" />
        <rect x="150" y="140" width="55" height="180" fill="#0e2544" />
        <rect x="960" y="160" width="65" height="160" fill="#0e2544" />
      </g>

      {/* Main villa illustration */}
      <g transform="translate(300,120)">
        {/* Ground shadow */}
        <ellipse cx="240" cy="228" rx="280" ry="18" fill="#050f1e" opacity="0.5" />

        {/* Main house body */}
        <rect x="60" y="90" width="360" height="140" rx="6" fill="url(#buildingGrad)" />
        {/* Roof */}
        <polygon points="40,90 240,10 440,90" fill="url(#goldGrad)" />
        {/* Second wing */}
        <rect x="0" y="140" width="90" height="90" rx="6" fill="#2a4d7f" />

        {/* Windows grid */}
        <g fill="#e5c876" opacity="0.85">
          <rect x="95" y="115" width="34" height="34" rx="3" />
          <rect x="145" y="115" width="34" height="34" rx="3" />
          <rect x="305" y="115" width="34" height="34" rx="3" />
          <rect x="355" y="115" width="34" height="34" rx="3" />
          <rect x="95" y="165" width="34" height="34" rx="3" />
          <rect x="355" y="165" width="34" height="34" rx="3" />
        </g>

        {/* Door */}
        <rect x="215" y="160" width="50" height="70" rx="4" fill="#0e2544" />
        <rect x="215" y="160" width="50" height="70" rx="4" fill="none" stroke="#e5c876" strokeWidth="2" />

        {/* Columns */}
        <rect x="185" y="150" width="10" height="80" fill="#e5c876" opacity="0.6" />
        <rect x="285" y="150" width="10" height="80" fill="#e5c876" opacity="0.6" />

        {/* Steps */}
        <rect x="195" y="228" width="90" height="8" fill="#e5c876" opacity="0.5" />
        <rect x="185" y="236" width="110" height="8" fill="#e5c876" opacity="0.35" />

        {/* Trees */}
        <g transform="translate(-40,150)">
          <rect x="18" y="40" width="8" height="30" fill="#5a3a22" />
          <circle cx="22" cy="30" r="26" fill="#2f6b4f" />
        </g>
        <g transform="translate(470,150)">
          <rect x="18" y="40" width="8" height="30" fill="#5a3a22" />
          <circle cx="22" cy="30" r="26" fill="#2f6b4f" />
        </g>
      </g>

      {/* Bottom fade so it blends into the card background */}
      <rect x="0" y="300" width="1080" height="60" fill="url(#skyGrad)" opacity="0.0" />
    </svg>
  );
}

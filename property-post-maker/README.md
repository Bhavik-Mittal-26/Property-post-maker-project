# 🏠 Property Post Maker

**Create professional real-estate property creatives in seconds.**

Property Post Maker is a client-side web app that turns four simple property
details into a polished, ready-to-share marketing creative (1080×1350 PNG) —
branded, formatted, and complete with contact info and a call-to-action.
No backend, no API keys, no external services required.

Built for **Urban Nest Realty** · Created by **Bhavik Mittal**

---

## ✨ Features

- **Four simple inputs**: Property & Type, Location, Price, Highlights
- **One-click sample data** to instantly try the app
- **Automatic branding** — brand name, logo mark, contact number, creator
  name, and CTA are injected automatically; the user never types them
- **Premium generated creative** — a 1080×1350 portrait-format image ideal
  for WhatsApp, Instagram, and Facebook, with:
  - Brand/logo strip
  - Architectural SVG property illustration (no external images needed)
  - Large property title & location
  - Prominent price section
  - Highlight badges (auto-parsed from your highlights text)
  - CTA button, contact number, and "Created by" credit
- **Client-side PNG export** using `html-to-image` — the download contains
  only the creative, never the surrounding app UI
- **Full validation** on all four required fields, with clear inline errors
- **Responsive UI** — works on desktop, laptop, and mobile
- **Handles long text, Unicode, and the ₹ symbol** gracefully with proper
  wrapping — nothing overflows the creative

---

## 🧱 Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- Plain CSS (custom design system, no framework dependency)
- [`html-to-image`](https://github.com/bubkoo/html-to-image) for client-side
  PNG generation
- No backend, no database, no paid APIs, no API keys

---

## 📦 Project Structure

```
property-post-maker/
├── src/
│   ├── components/
│   │   ├── FormPanel.jsx          # Input form + action buttons
│   │   ├── PreviewPanel.jsx       # Preview stage + download logic
│   │   ├── PropertyCreative.jsx   # The generated creative (exported to PNG)
│   │   └── PropertyVisual.jsx     # Decorative SVG architectural illustration
│   ├── config/
│   │   ├── brandConfig.js         # ⭐ All branding lives here
│   │   └── sampleData.js          # "Use Sample Data" values
│   ├── utils/
│   │   ├── validate.js            # Field validation + highlight parsing
│   │   └── downloadImage.js       # PNG export logic
│   ├── styles/                    # Component-scoped CSS
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  # Global reset & design tokens
├── public/
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml                   # Netlify deployment config
├── vercel.json                    # Vercel deployment config
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

### 3. Build for production

```bash
npm run build
```

Output is written to the `dist/` folder.

### 4. Preview the production build locally

```bash
npm run preview
```

---

## 🖼️ How Image Generation Works

1. The generated creative is rendered as a real, hidden-in-plain-sight DOM
   node sized to exactly **1080×1350px** (`PropertyCreative.jsx`).
2. When you click **Download Post**, `html-to-image`'s `toPng()` function
   rasterizes *only that node* — not the surrounding form or preview
   chrome — into a PNG data URL.
3. The PNG is triggered as a browser download automatically.

This means everything happens **entirely in the browser**. No image is
uploaded anywhere, no API key is required, and no server-side rendering is
involved.

The architectural illustration on the creative is a hand-built inline SVG
(`PropertyVisual.jsx`) — no external image APIs, stock photo services, or
API keys needed.

---

## 🎨 Where to Change Branding

Everything brand-related lives in **one file**:

```
src/config/brandConfig.js
```

```js
const brandConfig = {
  brandName: "URBAN NEST REALTY",
  brandTagline: "Find Your Perfect Address",
  contactNumber: "+91 98765 43210",
  creatorName: "Bhavik Mittal",
  cta: "Schedule a Visit",
  appName: "Property Post Maker",
  appTagline: "Create professional property creatives in seconds",
};
```

| To change...          | Edit...                          |
|------------------------|-----------------------------------|
| Brand name / logo text | `brandConfig.brandName`          |
| Contact number         | `brandConfig.contactNumber`      |
| Creator name           | `brandConfig.creatorName`        |
| Call-to-action text    | `brandConfig.cta`                |
| App title/tagline      | `brandConfig.appName` / `appTagline` |

Changes here automatically apply to **both** the app UI and every
generated property creative.

---

## 🧪 Sample Data

Clicking **"Use Sample Data"** fills the form with:

| Field           | Value                                              |
|------------------|-----------------------------------------------------|
| Property & Type  | 4 BHK Luxury Villa, Ansal Golf City                 |
| Location         | Sushant Golf City, Lucknow                          |
| Price            | ₹2.5 Cr onwards                                     |
| Highlights       | 3000 sq.ft · Corner plot · Ready to move            |

Edit `src/config/sampleData.js` to change these defaults.

---

## 🎬 Demo Instructions

1. Run `npm run dev` and open the app.
2. Click **"Use Sample Data"**.
3. Click **"Generate Property Post"** — watch the short generating state,
   then the creative appears in the preview.
4. Click **"Download Post"** to save the 1080×1350 PNG.
5. Try entering your own long property name / location / highlights to see
   the layout gracefully wrap without overflowing.
6. Resize your browser or open on mobile to see the responsive layout.

This flow is ideal for a short screen recording: sample data → generate →
download, in under 30 seconds.

---

## ☁️ Deployment

This is a static site (output of `npm run build` = the `dist/` folder), so
it can be deployed anywhere that serves static files. No backend needed.

### Option A — Vercel (recommended, simplest)

1. Push this project to a GitHub repo (or use Vercel's CLI/drag-and-drop).
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Vercel auto-detects Vite. Build command: `npm run build`, output
   directory: `dist` (already configured in `vercel.json`).
4. Click **Deploy**. You'll get a live URL in ~1 minute.

### Option B — Netlify

1. Push this project to a GitHub repo, or drag-and-drop the `dist/` folder
   at [app.netlify.com/drop](https://app.netlify.com/drop) after running
   `npm run build` locally.
2. If deploying from Git: build command `npm run build`, publish directory
   `dist` (already configured in `netlify.toml`).
3. Click **Deploy site**.

### Option C — GitHub Pages

1. Run `npm run build`.
2. Push the contents of `dist/` to a `gh-pages` branch (you can use the
   `gh-pages` npm package, or GitHub Actions).
3. If deploying to a project page (`https://username.github.io/repo-name/`),
   set `base: "/repo-name/"` in `vite.config.js` before building.
4. Enable GitHub Pages in the repo settings, pointing to the `gh-pages`
   branch.

---

## ✅ Quality Checklist

- [x] `npm install` completes without errors
- [x] `npm run dev` starts the app successfully
- [x] `npm run build` completes with no errors
- [x] "Use Sample Data" populates all four fields
- [x] All four inputs are editable and required
- [x] "Generate Property Post" validates empty fields with clear messages
- [x] Generated creative includes property type, location, price, and
      highlights exactly as entered
- [x] Branding (Urban Nest Realty), contact number, and "Bhavik Mittal"
      appear automatically without user input
- [x] "Download Post" saves a clean PNG (creative only, no app UI)
- [x] Long text, Unicode, and ₹ wrap correctly without overflowing
- [x] Layout is responsive on desktop and mobile
- [x] No required paid APIs, API keys, or backend

---

## 📝 License

This project was built as a demo/assignment deliverable. Feel free to reuse
and modify it.

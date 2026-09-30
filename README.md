# aMaoso Website Rebuild (Lagos Amaoso Solar Technology Co., Ltd.)

A modern, high-performance, engineering-grade web application built to replace the legacy WordPress site at `amaoso.com`. Designed specifically for African municipal contractors, estate developers, commercial facility managers, and direct distributor procurement.

## 🚀 Key Upgrades & Features

1. **Lightning-Fast Architecture**:
   - Built on React 19 + TypeScript + Vite 8 + Tailwind CSS v4.
   - Ultra-lean production bundle (~96 kB gzipped JS, ~8.8 kB CSS) vs. 2.5MB+ legacy WordPress bloat.
   - Fully compliant with modern web standards: `text-wrap: balance` for headings, `text-wrap: pretty` for paragraphs, and `fetchpriority="high"` for hero LCP optimization.

2. **Commercial & Engineering Tools**:
   - **Interactive Product Catalog**: Real-time category filtering (Solar Street Lights, Commercial Floodlights, Industrial High Bays, Smart IoT & Hybrid), wattage search, and comprehensive technical datasheet modal.
   - **Solar Lighting Sizing & Wattage Estimator**: Allows engineers and contractors to choose road type, corridor distance, pole height, and rainy day autonomy to calculate exact pole spacing, required luminaire units, battery requirements, and diesel fuel savings.
   - **Instant RFQ (Request For Quote) Wizard**: Multi-step quote generation pre-filled with selected product specs or sizing calculations.
   - **Direct WhatsApp Engineering Integration**: Direct WhatsApp links with pre-formatted inquiry text tailored for Nigerian and West African B2B commerce.
   - **OEM & ODM Factory Showcase**: Deep dive into in-house tooling (70+ molds), 100+ patents, dedicated battery/panel sub-factories, 3D Dialux simulations, and 5,000–10,000 daily capacity.
   - **Lagos & Warri Distribution Locator**: Direct phone lines and maps for Maryland Lagos HQ and Effurun Warri regional logistics hub.

---

## 🛠️ Project Structure

```
C:\Users\Dell\Desktop\amaoso\
├── index.html                 # Main HTML with SEO meta tags, Google Fonts & icons
├── vite.config.ts             # Vite configuration with React and Tailwind v4 plugins
├── tsconfig.json              # TypeScript compiler configuration
├── package.json               # Dependencies and scripts
└── src/
    ├── main.tsx               # Application entrypoint
    ├── App.tsx                # App layout & global modal state
    ├── index.css              # Tailwind v4 styles, custom scrollbars & glassmorphism
    ├── vite-env.d.ts          # Environment types
    ├── data/
    │   └── products.ts        # Comprehensive lighting product line & company specs
    └── components/
        ├── Navbar.tsx         # Sticky glassmorphism header & mobile navigation drawer
        ├── Hero.tsx           # High-impact industrial hero with LCP image optimization
        ├── StatsBanner.tsx    # 17+ Years, 100+ Patents, 5K-10K Units/Day metrics
        ├── ProductCatalog.tsx # Filterable catalog with technical datasheet modal
        ├── SolarCalculator.tsx# Interactive solar sizing & fuel savings calculator
        ├── OEMFactory.tsx     # 6-step manufacturing workflow & testing workshop
        ├── EngineeringProjects.tsx # Case studies (Lekki, Ikeja, Warri)
        ├── AboutSection.tsx   # Company history, ISO 9001:2015 & international certifications
        ├── ContactSection.tsx # Lagos HQ & Warri depot cards with dual inquiry form
        ├── RFQModal.tsx       # Multi-step proforma quote request modal
        └── Footer.tsx         # B2B footer with floating WhatsApp quick connect
```

---

## 💻 Development Commands

```bash
# Start local development server
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment Options

The project compiles to pure static HTML/JS/CSS inside the `dist/` directory, ready to deploy instantly to:
- **Vercel**: Run `npx vercel` inside the folder.
- **Netlify**: Run `npx netlify deploy --prod --dir=dist`.
- **Firebase Hosting**: Run `firebase init hosting` and set public directory to `dist`.
- **cPanel / Custom Host**: Upload the contents of `dist/` directly to `public_html`.

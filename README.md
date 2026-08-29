# Maherukh Islam — Portfolio

Personal portfolio of **Md. Maherukh Islam** — student web developer in Dhaka, Bangladesh. Five live platforms, 1,000+ users: membership portals, treasury systems, and sites that work on any phone.

## Tech stack

- **Next.js** (App Router, static export) + React 19 + TypeScript
- **Tailwind CSS v4** — dark, typography-first brutalist design system
- **Framer Motion** — page transitions, reveals and micro-interactions
- **GitHub Pages** — deployed automatically via GitHub Actions

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build     # static export → ./out
npm run start     # preview the production export locally
```

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages (enable it once under **Settings → Pages → Source: GitHub Actions**).

- **Project site** (`<user>.github.io/<repo>/`): the workflow sets `NEXT_PUBLIC_BASE_PATH` from the repo name automatically — no config needed.
- **User site or custom domain** (`<user>.github.io`): delete the *Set base path* step in the workflow.

## Project structure

```
src/
├── app/                # App Router: layout, page, global styles
└── components/
    └── portfolio/      # hero, about, showcase, background, contact, welcome screen
public/                 # static assets (hero portrait, logo, robots.txt)
scripts/                # asset tooling (crop-hero-portrait.ps1)
```

---

© Md. Maherukh Islam

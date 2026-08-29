# Maherukh Islam - Portfolio

Personal portfolio of **Md. Maherukh Islam** - student web developer in Dhaka, Bangladesh. Five live platforms, 1,000+ users: membership portals, treasury systems, and sites that work on any phone.

## Tech stack

- **Next.js** (App Router, static export) + React 19 + TypeScript
- **Tailwind CSS v4** - dark, typography-first brutalist design system
- **Framer Motion** - page transitions, reveals and micro-interactions
- **GitHub Pages** - deployed automatically via GitHub Actions

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build     # static export -> ./out
npm run start     # preview the production export locally
```

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages (enable it once under **Settings -> Pages -> Source: GitHub Actions**).

This repo is a **user site** (`<user>.github.io`), so Pages serves it from the domain root and no base path configuration is needed. If the site ever moves to a **project site** (`<user>.github.io/<repo>/`), set `NEXT_PUBLIC_BASE_PATH=/<repo-name>` at build time (next.config.ts already reads it).

## Project structure

```
src/
├── app/                # App Router: layout, page, global styles
└── components/
    └── portfolio/      # hero, about, showcase, background, contact, welcome screen
public/                 # static assets (hero portrait, og-image, robots.txt)
scripts/                # asset tooling (crop-hero-portrait.ps1)
```

---

© Md. Maherukh Islam

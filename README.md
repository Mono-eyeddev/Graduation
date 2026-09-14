# Sajaad Iqbal — Graduation Celebration 2026

A premium, cinematic single-page event site. Built with React, Vite, Tailwind CSS,
Framer Motion and Lucide icons — fully static, no backend.

Live URL (GitHub Pages): https://mono-eyeddev.github.io/graduation/

## Editing content

Almost everything on the site is driven from one file:

```
src/data/event.js
```

Update it to change:
- Name, date, time, hero image path
- Welcome and thank-you messages
- Venue name, address and Google Maps link
- Programme timeline (the `programme` array)
- Gallery image list
- Contact / RSVP details (email, phone, WhatsApp link)

## Adding real photos

Drop your images into `public/images/` using these filenames (or update the
paths in `src/data/event.js`):

- `graduation.jpg` — hero background
- `gallery-1.jpg` through `gallery-6.jpg` — gallery section

Keep photos web-optimized (roughly under 500KB, ~1600px on the long edge) so
the site stays fast when guests open it from the QR code on mobile data.

## Local development

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

This repo is configured for `https://mono-eyeddev.github.io/graduation/`
(see `base` in `vite.config.js` and `homepage` in `package.json`).

Option A — using the included script:

```bash
npm run deploy
```

This builds the site and pushes `dist/` to the `gh-pages` branch. Then, in
the repository's Settings → Pages, set the source to the `gh-pages` branch.

Option B — GitHub Actions: if you'd prefer an automatic deploy on every push
to `main`, this can be added as a follow-up.

## Tech

- React 19 + Vite
- Tailwind CSS
- Framer Motion (entrance + scroll-reveal animations, respects
  `prefers-reduced-motion`)
- Lucide React icons
- No backend, no database, no authentication

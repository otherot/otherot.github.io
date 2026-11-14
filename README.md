# Anton Cherkasov — Portfolio

Personal portfolio website built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools — works as static files on GitHub Pages.

## Features

- **Bilingual** (RU / EN) with language toggle in the header; preference saved to `localStorage`
- **Dark theme** with teal accent colors, plus a print stylesheet that flattens the page to a black-on-white CV
- **Responsive** design, mobile-first
- **Scroll animations** via Intersection Observer, respecting `prefers-reduced-motion`
- **SEO**: canonical URL, Open Graph / Twitter cards, `Person` JSON-LD, `sitemap.xml`, `robots.txt`
- Custom `404.html`, also bilingual

## Layout

```
index.html      the whole site — CSS, markup and JS in one file
404.html        not-found page
og/             HTML template for the Open Graph card
scripts/        generate-og.js — renders og/*.html to images/ via Playwright
resume/         CV in PDF (the .docx source is gitignored)
icons/ images/  SVG icons and raster assets
```

## Local Development

Open `index.html` directly in your browser — no server required:

```bash
# Or use a local server for a cleaner URL
python3 -m http.server 8080
# Then visit http://localhost:8080
```

Regenerating the Open Graph card (needs `npm install` once, for Playwright):

```bash
npm run og
```

## Deployment

The site is published by GitHub Pages at `https://otherot.github.io/` from the `main` branch root.

Every push to `main` also runs `.github/workflows/deploy.yml`, which rsyncs the published files to a VPS mirror at `https://otherot.site/` (`/var/www/otherot.site`, nginx). Canonical URLs point to otherot.github.io. The workflow needs three repository secrets: `DEPLOY_HOST`, `DEPLOY_SSH_KEY`, `DEPLOY_KNOWN_HOSTS`.

# Anton Cherkasov — Portfolio

Personal portfolio website built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools — works as static files on GitHub Pages.

## Features

- **Bilingual** (RU / EN) with language toggle in the header
- **Dark theme** with teal accent colors
- **Responsive** design, mobile-first
- **Scroll animations** via Intersection Observer
- Language preference saved to `localStorage`

## Enabling GitHub Pages

1. Go to your repository on GitHub: `https://github.com/otherot/otherot.github.io`
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Build and deployment" → **Source**: select **Deploy from a branch**
4. Under **Branch**, select `main` and choose the `/ (root)` folder
5. Click **Save**

Your site will be published at `https://otherot.github.io/` within 1-2 minutes.

## Local Development

Open `index.html` directly in your browser — no server required:

```bash
# Or use a local server for a cleaner URL
python3 -m http.server 8080
# Then visit http://localhost:8080
```

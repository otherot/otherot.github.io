# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal single-page portfolio site (Anton Cherkasov — Lead DevOps / SRE), deployed via GitHub Pages at `https://otherot.github.io/`. Pure HTML/CSS/vanilla JS — no frameworks, no build tools, no package.json, no dependencies.

## Architecture

Everything lives in one file: `index.html`. It has three parts, in order:
1. **`<style>`** — all CSS, using custom properties defined in `:root` (colors, radius, font). BEM-ish class names grouped by section with comment headers (`/* ── Header ── */`, etc.).
2. **HTML body** — sections in document order: header/nav → hero → about → experience (timeline) → skills → education/certificates → footer.
3. **`<script>`** — a single inline script containing the i18n dictionary and small DOM logic (language switching, scroll-reveal via `IntersectionObserver`, mobile nav toggle).

### Bilingual content (RU/EN)

- Every user-facing string is duplicated in a JS object `i18n = { ru: {...}, en: {...} }` near the top of the `<script>` block, keyed by short identifiers (e.g. `exp1_b3`, `skl_orch_title`).
- HTML elements reference these keys via `data-i18n="<key>"`. `applyLang(lang)` walks all `[data-i18n]` elements and sets `textContent` from the dictionary.
- Certificate links are the exception: they're not driven by `data-i18n`. Instead there are two parallel `<ul>` lists, `#certs-ru` and `#certs-en`, and `applyLang` toggles their `display` based on the active language.
- Language preference persists in `localStorage` under key `portfolio-lang`; default is `en` when unset. The header flag icon swaps between `icons/us.svg` and `icons/ru.svg` to indicate the language you'd switch *to*.
- **When adding or editing any visible text**, update both the `ru` and `en` entries in the `i18n` object (and both cert lists if applicable), not just the HTML.

### Adding a new experience/timeline entry

Follow the existing `.tl-item` pattern in the `#experience` section: a `.tl-dot`, `.tl-header` (role + company + period), `.tl-bullets` list, and an optional `.tl-highlights` block for standout achievements. Each text node needs a fresh `data-i18n` key added to *both* language dictionaries.

## Local development

No build step. Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8080
```

## Deployment

Static hosting via GitHub Pages, deployed from the `main` branch root (`/`). Pushing to `main` is the deploy — there is no CI/build pipeline.

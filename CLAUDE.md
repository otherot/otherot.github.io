# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal single-page portfolio site (Anton Cherkasov — SRE / Team Lead), deployed via GitHub Pages at `https://otherot.github.io/`. Pure HTML/CSS/vanilla JS — no frameworks, no build step. The one dev dependency (Playwright) exists only to render the Open Graph cards offline.

## Architecture

The site lives in one file: `index.html`. It has three parts, in order:
1. **`<style>`** — all CSS, using custom properties defined in `:root` (colors, radius, font). BEM-ish class names grouped by section with comment headers (`/* ── Header ── */`, etc.). The `@media print` block at the end flattens the page into a printable CV.
2. **HTML body** — header/nav, then `<main id="main">` wrapping: hero → about → experience (timeline) → skills → education, then footer.
3. **`<script>`** — a single inline script: the i18n dictionary plus small DOM logic (language switching, scroll-reveal via `IntersectionObserver`, scrollspy, mobile nav toggle, cursor glow).

Other files: `404.html` (standalone, its own copy of the tokens and a small RU/EN dictionary), `og/` + `scripts/generate-og.js` (`npm run og` renders the OG card template to `images/`).

### Section backgrounds

Alternating section backgrounds come from an explicit `.section--alt` class, **not** `:nth-child`. When inserting a section, set the class so the light/dark alternation still reads top to bottom.

### Bilingual content (RU/EN)

- Every user-facing string is duplicated in a JS object `i18n = { ru: {...}, en: {...} }` near the top of the `<script>` block, keyed by short identifiers (e.g. `exp1_b3`, `skl_orch_title`).
- HTML elements reference these keys via `data-i18n="<key>"`. `applyLang(lang)` walks all `[data-i18n]` elements and sets `textContent` from the dictionary.
- Language preference persists in `localStorage` under key `portfolio-lang`; default is `en` when unset. `404.html` reads the same key. The header flag icon swaps between `icons/us.svg` and `icons/ru.svg` to indicate the language you'd switch *to*.
- **When adding or editing any visible text**, update both the `ru` and `en` entries — and keep them equivalent in substance, not just present. The two versions drifting apart (EN detailed, RU terse) is a recurring problem here.
- To verify after editing, check that the `ru` and `en` key sets match and that every `data-i18n` key exists in both.

### Adding a new experience/timeline entry

Follow the existing `.tl-item` pattern in the `#experience` section: a `.tl-dot`, `.tl-header` (role + company + period), `.tl-bullets` list, and an optional `.tl-highlights` block for standout achievements. Each text node needs a fresh `data-i18n` key added to *both* language dictionaries.

## Accessibility

Keep these when editing: visible `:focus-visible` outlines, the skip link, `aria-label` on icon-only links and buttons (their `<img>` stays `alt=""`), and the `prefers-reduced-motion` block.

## Local development

No build step. Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8080
```

## Deployment

Static hosting via GitHub Pages, deployed from the `main` branch root (`/`). Pushing to `main` is the deploy — there is no CI/build pipeline.

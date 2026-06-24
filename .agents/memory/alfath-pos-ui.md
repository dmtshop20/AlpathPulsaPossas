---
name: AlfathPOS frontend UI conventions
description: Durable, non-obvious UI/styling constraints for the alfath-pos frontend (giant single-file App.tsx).
---

# AlfathPOS frontend UI conventions

## Palette / dark mode is fragile — refine tokens, don't bulk-reskin
`index.css` drives theming with CSS-var tokens (`:root` + `.dark`) PLUS many hardcoded
slate/blue `!important` overrides keyed to specific tailwind utility classes (e.g.
`.dark .bg-white`, `.dark .text-slate-900`). Light mode uses tailwind utilities directly
in JSX (bg-white, slate-*, blue-*).
**Why:** a wholesale palette swap would require editing thousands of inline class usages
AND keeping the override map in sync — high regression risk. The owner is risk-averse.
**How to apply:** for palette tweaks, change the CSS-var token values (cascades safely in
dark mode) and accept tailwind utility colors as the light-mode palette. Don't try to
re-skin via class find/replace.

### Accent recolor: remap the tailwind color ramp in `@theme` (best lever)
The app's single accent is tailwind `blue-*` (bg-blue-600/text-blue-600/ring-blue-500 used
directly in JSX). To shift the WHOLE accent cohesively (e.g. blue → indigo) WITHOUT editing
the 9k-line App.tsx, override the ramp in the existing `@theme {}` block:
`--color-blue-50 … --color-blue-900: <indigo hex>`. Tailwind v4 utilities compile to
`var(--color-blue-NNN)`, so every bg/text/border/ring/gradient using that step shifts at once.
**Why:** zero JSX edits, fully reversible (delete the block), and dark-mode stays correct
because `.dark .text-blue-*` / `.dark .bg-blue-*` overrides use HARDCODED hex at higher
specificity — they win in dark mode. Caveat: that means dark-mode accent keeps the OLD hue
unless you also update those hardcoded hexes (separate small pass).

### "Kaku" (stiff) feel = over-wide UPPERCASE tracking; soften globally
Root cause of the stiff look: `tracking-widest` (used ~277x) + pervasive `uppercase` on
microlabels, plus cramped `tracking-tighter` headings. Fix centrally in index.css by
overriding `.tracking-widest`/`.tracking-wider`/`.tracking-tighter` letter-spacing with
`!important` (e.g. 0.045em / 0.025em / -0.02em). Keeps capitalization + layout; only relaxes
spacing. Reversible.

## Popups: native alert() is overridden to an in-app toast; confirm() is NOT
`window.alert` is monkey-patched (~App.tsx 558-574) to route into the `globalAlerts` toast
system (success keyword => green; else amber "Informasi Sistem"). So existing alert() calls
already render as premium toasts. `window.confirm` stays the native browser dialog (an unused
async confirm modal exists but call sites use native confirm).
**How to apply:** don't add Sonner/another toast lib — use the existing globalAlerts. Leave
confirm() native; converting to async is high-risk.

## Mobile tables: opt-in `.mobile-cards` CSS pattern, list-style tables ONLY
`index.css` defines `@media (max-width:640px) table.mobile-cards { ... }` that turns rows into
labelled cards via `td::before { content: attr(data-label) }`. To convert a table: add class
`mobile-cards`, give each `<td>` a `data-label="..."`, and mark the primary cell with
`data-card-title` (full-width, no label). Preserves all JS/row logic (no markup duplication).
**Why:** lowest-risk way to get card views without rewriting row rendering.
**How to apply:** ONLY for list-style tables (one record per row). Do NOT apply to the
matrix-style stock table (branches × products) — horizontal scroll is the correct UX there.

## Tooling
ImageMagick is available as `magick`/`convert` (NOT `sharp`) for icon cropping/resizing.
Frontend uses a base path: reference public assets in React via `import.meta.env.BASE_URL`
and use relative (no leading slash) paths in the PWA manifest / index.html icon links.

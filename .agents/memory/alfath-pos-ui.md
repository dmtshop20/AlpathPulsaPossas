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

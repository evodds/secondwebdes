# Agent Guide (Cursor / Codex)

## Run
- Node 20+.  
- Dev: `npm run dev`  
- Build: `npm run build`  
- Lint (if present): `npm run lint`

## Tech contract
- **Framework**: Next.js App Router (in `/apps/web`) + **Tailwind**.
- **Shared UI**: `/packages/ui` (buttons, inputs, cards, drawer, header, etc).
- **Design tokens**: `/design/tokens.json` → compiled to Tailwind theme + CSS vars.
- **Figma mapping**: `/design/components.md` + `/design/ui-map.md`.

## Do / Don’t
- **DO**: reuse components from `/packages/ui`.  
- **DO**: use tokens (no hardcoded hex/pixel when a token exists).  
- **DO**: maintain a11y: focus-visible, ≥44×44 tap targets, contrast ≥4.5:1.  
- **DON’T**: generate div-soup or add deps without a note in PR.

## Figma via MCP
- Use the Figma MCP tools to read frames, variables, and component metadata.  
- Only generate **code that composes our existing components**.  
- If a needed UI primitive is missing, add a small component under `/packages/ui` and export it.

## PR quality gates (blocking)
- `npm run build` success.  
- Tokens audit: no raw hex/pixel when tokens exist.  
- a11y checks applied.  
- Before/After screenshots in the PR (MCP screenshot + local preview).  
- Short **What/Why** description and page route listed.

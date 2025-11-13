# Second Web Design - Next.js Monorepo

## Overview
This is a Next.js 14 monorepo project featuring a modern e-commerce/design studio website. The project uses workspace configuration with a main web app and shared UI components, implementing design tokens and Tailwind CSS v4.

## Project Architecture

### Technology Stack
- **Framework**: Next.js 14.2.33 with App Router
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **Language**: TypeScript
- **Package Manager**: npm with workspaces
- **Node Version**: 20.x
- **Deployment**: Configured for Replit autoscale deployment

### Monorepo Structure
```
.
├── apps/
│   └── web/              # Main Next.js application
│       ├── app/          # Next.js App Router pages
│       ├── components/   # React components
│       ├── public/       # Static assets
│       └── package.json  # Web app dependencies
├── packages/
│   └── ui/               # Shared UI component library
│       └── src/          # Reusable components
├── design/
│   ├── tokens.json       # Design system tokens
│   ├── components.md     # Component documentation
│   └── ui-map.md         # UI mapping guide
├── content/
│   └── promo.json        # Promotional content data
└── package.json          # Root workspace configuration
```

## Recent Changes
- **2025-11-13**: Next.js monorepo setup from GitHub import
  - Discovered existing Next.js 14 monorepo structure
  - Installed Tailwind CSS v4 dependencies (@tailwindcss/postcss, postcss, autoprefixer)
  - Fixed Tailwind CSS v4 configuration for Next.js compatibility
  - Added @reference directive to globals.css for @apply support
  - Converted custom spacing utilities to standard Tailwind values
  - Configured workflow to run Next.js dev server on port 5000
  - Set up workspace scripts for dev/build/start commands
  - Configured autoscale deployment with build and run commands
  - Server successfully compiling and running with hot reload

## Server Configuration
- **Host**: 0.0.0.0 (required for Replit preview)
- **Port**: 5000 in Replit (via PORT env var), defaults to 3000 locally
  - Scripts use `${PORT:-3000}` fallback for cross-environment compatibility
  - Replit sets PORT=5000 for webview preview
  - Local development defaults to 3000 when PORT is unset
- **Environment**: Development mode with hot module replacement
- **Telemetry**: Disabled (NEXT_TELEMETRY_DISABLED=1)

## Workspace Commands
Run these from the project root:

- `npm run dev` - Start Next.js development server (port 5000)
- `npm run build` - Build Next.js app for production
- `npm run start` - Start production server
- `npm install --workspaces` - Install all workspace dependencies

## Development Notes
- **Tailwind CSS v4**: Uses @tailwindcss/postcss plugin (not the old tailwindcss plugin)
- **@reference directive**: Required in globals.css for @apply with custom utilities
- **Design Tokens**: Centralized in design/tokens.json for colors, spacing, typography
- **Shared UI**: packages/ui contains reusable components (Button, Chip, ProductCard, etc.)
- **Hot Reload**: Next.js Fast Refresh enabled for instant updates
- **Image Optimization**: Next.js Image component used throughout

## Known Issues
- Minor React hydration warnings on countdown timer (server/client time mismatch)
- TypeScript LSP warning in tailwind.config.ts (moduleResolution suggestion - non-critical)

## Deployment
Project is configured for autoscale deployment with:
- Build command: `npm install --workspaces && npm run build -w apps/web`
- Run command: `npm run start -w apps/web`

Click the deploy button in Replit to publish the production build.

## Design System
The project uses a custom design system with:
- **Colors**: Accent primary (pink), text strong/muted, surface base/subtle
- **Spacing**: xs, sm, md, lg, xl, 2xl (0.25rem to 2rem)
- **Typography**: Display, H2, Body with responsive clamp() sizing
- **Radius**: sm, md, xl, pill
- **Shadows**: Card and elevated variants

## Component Library (packages/ui)
Shared components available for import:
- Button (multiple sizes and variants)
- Chip (pill-shaped badges)
- ProductCard (e-commerce product display)
- TestimonialCard (customer testimonials)
- PromoBanner (promotional countdown banners)

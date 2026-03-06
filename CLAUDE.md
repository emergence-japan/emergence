# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for **Emergence-Japan LLC** (エマージェンス・ジャパン合同会社) — an AI/DX consulting company. The site is built with Next.js (App Router) and deployed to Vercel.

## Development Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm test         # Run Jest tests (use CI=true to avoid watch mode)
```

## Architecture

### Page Structure (App Router)
- `src/app/page.tsx` — Homepage composed of section components
- `src/app/services/[slug]/page.tsx` — Dynamic service detail pages (SSG)
- `src/app/school-application/page.tsx` — AI bootcamp application form
- `src/app/api/contact/route.ts` — Contact form API (proxies to Google Apps Script)
- `src/app/api/school-application/route.ts` — School application API (proxies to GAS)

### Key Data File
`src/lib/services.ts` — Single source of truth for all service content. Service slugs: `ai`, `web`, `dx`, `training`, `school`, `publishing`. The `ServiceData` type and `ServiceSlug` type are exported from here. When adding new services or updating service content, edit this file.

### Component Pattern
All page sections are in `src/components/`. The homepage assembles: `HeroScene` (Three.js 3D background) → `ServicesSection` → `AboutSection` → `WorksSection` → `ContactSection` → `NewsSection`.

### API Routes / External Integrations
Both API routes proxy form submissions to Google Apps Script (GAS) endpoints. The contact route sends JSON; the school-application route sends `application/x-www-form-urlencoded`. GAS endpoints are hardcoded in the route files.

### Environment Variables
- `NEXT_PUBLIC_GA_ID` — Google Analytics ID (optional; GA only loads if set)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Google Search Console verification

## TypeScript Style (from `conductor/code_styleguides/typescript.md`)
- Named exports only — no default exports
- `const`/`let` only — no `var`
- Single quotes for strings
- Explicit semicolons
- Avoid `any` — use `unknown` or specific types
- No `#private` fields — use TypeScript `private`
- `UpperCamelCase` for types/interfaces/classes, `lowerCamelCase` for variables/functions, `CONSTANT_CASE` for global constants

## Workflow (from `conductor/workflow.md`)
- Track tasks in `conductor/` plan files
- Changes to the tech stack must be documented in `conductor/tech-stack.md` before implementation
- Run tests with `CI=true npm test` to avoid watch mode
- Aim for >80% code coverage for new modules

## Visual Identity
- Dark-mode first: deep dark background (`#0A0A0A` range)
- Accent color: neon cyan (`text-accent`, used with glow shadow `drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]`)
- Animations via Framer Motion; 3D elements via React Three Fiber/Three.js
- All UI copy is in Japanese

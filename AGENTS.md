# AGENTS.md

## Project

React 19 + TypeScript + Vite 8 starter with shadcn/ui, Tailwind CSS 4, React Router 7, React Hook Form + Zod.

## Commands

```bash
npm run dev      # Vite dev server (http://localhost:5173)
npm run build    # tsc -b && vite build
npm run lint     # ESLint on .ts/.tsx (ignores dist/)
npm run preview  # Preview production build
```

## Architecture

| Path                 | Purpose                               |
| -------------------- | ------------------------------------- |
| `src/app.tsx`        | Main app with React Router 7 routing  |
| `src/main.tsx`       | React DOM entry point                 |
| `src/pages/`         | Route pages (lazy-loaded)             |
| `src/components/ui/` | shadcn/ui components                  |
| `src/theme/`         | Theme provider, toggle, useTheme hook |

Routes: `/` (Home), `/login` (Login), `/*` (NotFound).

## Key Conventions

- **Path alias**: Use `@/` for all imports from `src/` (configured in vite.config.ts and tsconfig.json)
- **Import order**: React/deps → Components → Utils/hooks → Types
- **Build runs typecheck first**: `tsc -b` (project references) before `vite build`
- **ESLint flat config**: Uses `eslint.config.js`, ignores `dist/`

## Code Style

- TypeScript strict mode, ESM, no `any`
- Functional components, explicit props types
- `cn()` from `@/lib/utils` for Tailwind class merging
- `cva()` for component variants (see `components/ui/button.tsx`)
- No console.log in production, no inline styles

## Tailwind CSS 4

Uses `@tailwindcss/vite` plugin (not postcss). Dark mode via `class` strategy.

## Adding Components

```bash
npx shadcn@latest add <component>
```

## What NOT To Do

- Don't commit `node_modules/`, `dist/`, or `.env*`
- Don't use relative imports (use `@/` alias)
- Don't create new CSS files (extend Tailwind)

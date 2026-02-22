# React + Vite Starter

A modern React + Vite + TypeScript starter pack with shadcn/ui components, Tailwind CSS 4, React Router 7, and React Hook Form validation.

![React version](https://img.shields.io/github/package-json/dependency-version/xdeoxyz/vite-react-starter/react?logo=react&labelColor=0a0a0a&color=0a0a0a)
![Vite version](https://img.shields.io/github/package-json/dependency-version/xdeoxyz/vite-react-starter/dev/vite?logo=vite&labelColor=0a0a0a&color=0a0a0a)
![TypeScript version](https://img.shields.io/github/package-json/dependency-version/xdeoxyz/vite-react-starter/dev/typescript?logo=typescript&labelColor=0a0a0a&color=0a0a0a)
![License](https://img.shields.io/github/license/xdeoxyz/vite-react-starter?labelColor=0a0a0a&color=0a0a0a)

## Features

- **[React 19](https://react.dev/)** with [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **[Vite 7](https://vite.dev/)** for lightning-fast development and optimized production builds
- **[shadcn/ui](https://ui.shadcn.com/)** component library built on Radix UI primitives
- **[Tailwind CSS 4](https://tailwindcss.com/)** with Vite plugin for styling
- **[React Router 7](https://reactrouter.com/)** for client-side routing
- **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** for form validation
- **Dark/Light theme** support with system preference detection
- **Error Boundary** for graceful error handling
- **[ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)** for code quality

## Installation

```bash
npm install
```

## Quick Start

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start Vite dev server    |
| `npm run build`   | Type-check and build     |
| `npm run lint`    | Run ESLint on all files  |
| `npm run preview` | Preview production build |

## Project Structure

```text
vite-react-starter/
├── src/
│   ├── app.tsx                     # Main app with routing configuration
│   ├── main.tsx                    # React DOM entry point
│   ├── index.css                   # Global styles and Tailwind
│   ├── components/
│   │   ├── error-boundary.tsx      # Error boundary component
│   │   └── ui/                     # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── field.tsx
│   │       ├── label.tsx
│   │       ├── separator.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── code-block.tsx
│   │       └── sonner.tsx
│   ├── lib/
│   │   └── utils.ts                # cn() utility for class merging
│   ├── pages/
│   │   ├── home.tsx                # Home/landing page
│   │   ├── login.tsx               # Login form page
│   │   └── not-found.tsx           # 404 page
│   └── theme/
│       ├── provider.tsx            # Theme provider component
│       ├── toggle.tsx              # Theme toggle button
│       ├── hook.ts                 # useTheme() hook
│       └── context.ts              # Theme context types
├── public/                         # Static assets
├── index.html                      # HTML entry point
├── package.json                    # Dependencies and scripts
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
└── eslint.config.js                # ESLint configuration
```

## Routing

The application uses React Router 7 with lazy-loaded pages:

| Path     | Component    | Description   |
| -------- | ------------ | ------------- |
| `/`      | HomePage     | Landing page  |
| `/login` | LoginPage    | Login form    |
| `/*`     | NotFoundPage | 404 catch-all |

## Configuration

### Path Aliases

The `@/` alias is configured to point to `./src` for cleaner imports:

```typescript
// vite.config.ts
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
```

### TypeScript

Strict mode is enabled with ES2022 target and DOM types.

### Tailwind CSS

Tailwind CSS 4 uses the Vite plugin with:

- Custom CSS variables for design tokens
- Class-based dark mode strategy

## Theme System

The app includes a complete theme system:

- **ThemeProvider**: Wraps the app to provide theme context
- **ThemeToggle**: Dropdown button to switch between light/dark/system
- **useTheme()**: Hook to access and modify the current theme

Themes are persisted to localStorage with the key `ui-theme`.

## Form Handling

The login page demonstrates form validation with:

- **React Hook Form** for form state management
- **Zod** for schema validation
- **@hookform/resolvers** for Zod integration
- **Controlled components** with error display

## License

ISC

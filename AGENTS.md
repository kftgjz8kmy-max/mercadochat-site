# Repository Guidelines

## Project Structure & Module Organization

This repository contains the merchat marketing landing page. The Next/Vinext App Router entry points are in `app/` (`page.tsx`, `layout.tsx`, and global styles). Shared product copy and navigation live in `config/landing.ts` and `config/site.ts`; update those files instead of scattering marketing text through components. Static assets are under `public/`, with design references in `References/`. The Cloudflare Worker adapter is `worker/index.ts`. Tests are in `tests/`.

Generated output such as `.next/`, `dist/`, `build/`, `.vinext/`, and `.wrangler/` should not be edited or committed.

## Build, Test, and Development Commands

Use Node.js 22.13 or newer.

```bash
npm install                  # install locked dependencies
npm run dev                  # start the local Vinext development server
npm run lint                 # run ESLint across the repository
npm run build                # produce the Vinext/Cloudflare production build
npx tsc --noEmit             # run TypeScript type-checking
node --test tests/*.test.mjs # run the Node test files (build first when required)
```

Run linting and type-checking before submitting UI or configuration changes. Run the production build when changing routing, deployment, or worker code.

## Coding Style & Naming Conventions

Use TypeScript/TSX with strict typing, two-space indentation, semicolons, and double-quoted imports/strings, matching the existing code and ESLint configuration. Use `PascalCase` for React components and `camelCase` for functions, variables, and configuration fields. Prefer semantic HTML, accessible labels, and descriptive asset names such as `hero-workspace-plant.png`. Keep reusable content in `config/` and avoid unnecessary dependencies or inline duplicated copy.

## Testing Guidelines

Tests use Node’s built-in `node:test` and `node:assert/strict`. Name files `*.test.mjs`; test descriptions should state the behavior being verified. The rendered-HTML test checks the generated Cloudflare Worker response; run the production build before testing it.

## Commit & Pull Request Guidelines

Write concise imperative commits, for example `Update landing page pricing copy` or `Fix worker image handling`. Pull requests should explain the user-visible change, identify affected routes/configuration, include validation commands and results, and attach screenshots or recordings for visual changes. Keep unrelated generated files and refactors out of the change.

## Security & Configuration Tips

Do not commit credentials, OAuth tokens, or local environment files. Treat `config/site.ts` and deployment configuration as public-facing code; verify links and environment-specific bindings before deploying. Preserve the existing image-optimization security behavior when changing `worker/index.ts`.

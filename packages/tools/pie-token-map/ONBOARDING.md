# Onboarding Guide — pie-token-map

Get up and running with `@justeattakeaway/pie-token-map` in under 10 minutes.

---

## Prerequisites

Before you start, make sure you have:

- **Node.js** 18 or later
- **Yarn** (the PIE monorepo uses Yarn workspaces)
- **Git** access to the PIE monorepo at `https://github.com/justeattakeaway/pie.git`

---

## Step 1 — Clone the monorepo

```bash
git clone https://github.com/justeattakeaway/pie.git
cd pie
```

---

## Step 2 — Install dependencies

From the repo root, install all workspace dependencies:

```bash
yarn
```

This installs everything for every package in the monorepo, including `@justeat/pie-design-tokens` which `pie-token-map` depends on.

---

## Step 3 — Navigate to the package

```bash
cd packages/tools/pie-token-map
```

---

## Step 4 — Generate the token maps

The token maps in `src/generated/` are created from the design tokens JSON file. Regenerate them to make sure they are up to date:

```bash
yarn generate
```

You should see output like:

```
Generating token maps...
  Generated .../src/generated/color-map.ts
  Generated .../src/generated/typography-map.ts
  Generated .../src/generated/radius-map.ts
  ...
Done.
```

---

## Step 5 — Build the package

```bash
yarn build
```

This runs the generator and then bundles the library into `dist/` as an ES module with TypeScript declarations.

---

## Step 6 — Run the tests

```bash
yarn test
```

All tests should pass. The test suite covers every getter function, completeness against the source `tokens.json`, and the structure of typography tokens.

---

## Step 7 — Try it out

Open a Node REPL or create a quick test file:

```ts
// test-it.ts
import { getColor, getSpacing, getTypography, hasToken, tokenMap } from './src/index.js';

console.log(getColor('background-default'));
// → var(--dt-color-background-default)

console.log(getSpacing('d'));
// → var(--dt-spacing-d)

console.log(getTypography('heading-m'));
// → { family: 'var(--dt-font-heading-m-family)', weight: '...', ... }

console.log(hasToken('zIndex', 'modal'));
// → true

console.log(tokenMap.version);
// → 7.11.1
```

---

## Step 8 — Understand the file structure

```
pie-token-map/
├── scripts/
│   └── generate-token-map.ts   # Reads tokens.json, writes src/generated/
├── src/
│   ├── generated/               # Auto-generated files (do not edit by hand)
│   │   ├── color-map.ts
│   │   ├── typography-map.ts
│   │   ├── radius-map.ts
│   │   ├── spacing-map.ts
│   │   ├── elevation-map.ts
│   │   ├── gradient-map.ts
│   │   ├── motion-map.ts
│   │   ├── breakpoint-map.ts
│   │   ├── z-index-map.ts
│   │   └── version.ts
│   ├── types.ts                 # Shared types (CssVarRef, TokenCategory, etc.)
│   └── index.ts                 # Public API — getter functions and exports
├── test/
│   └── unit/
│       └── token-map.spec.ts    # Unit tests (Vitest)
├── dist/                        # Built output (ES module + .d.ts)
├── package.json
├── tsconfig.json
└── vite.config.ts
```

**Key rule:** never edit files inside `src/generated/` directly. If you need to change what gets generated, edit `scripts/generate-token-map.ts` and run `yarn generate`.

---

## Step 9 — Make a change

Here is a simple exercise to confirm your setup works end to end:

1. Open `scripts/generate-token-map.ts`.
2. Find the `generateZIndexMap` function. The z-index token names are hard-coded there.
3. Add a temporary name to the array (e.g., `'test-layer'`).
4. Run `yarn generate` — check that `src/generated/z-index-map.ts` now includes `'test-layer'`.
5. Run `yarn test` — some completeness tests will fail because the test expects exactly 10 z-index tokens. This confirms the tests are catching real issues.
6. Revert your change and run `yarn test` again to see everything pass.

---

## Step 10 — Next steps

- Read `API-DOCS.md` for the full API reference.
- Read `README.md` for integration examples with `pie-css` and web components.
- Run `yarn lint:scripts` to check your code against the project's ESLint rules.
- Run `yarn watch` during development for automatic rebuilds on file changes.
- When bumping the `@justeat/pie-design-tokens` version in `package.json`, always run `yarn generate` and commit the updated generated files.

---

You are now ready to work on `pie-token-map`.

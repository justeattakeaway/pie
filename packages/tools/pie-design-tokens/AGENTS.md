# AGENTS.md - PIE Design Tokens

This document provides guidance for AI agents working with the pie-design-token codebase such as how to update tokens, metadata or adding changelogs. 

## Project Overview

PIE Design Tokens (`@justeat/pie-design-tokens`) is Just Eat Takeaway's global design token package. This repo contains:
- **Token Definitions** — All design tokens (colors, typography, spacing, elevation, etc.) defined in a single JSONC source file
- **Build Pipeline** — Node.js compile scripts that transform tokens into CSS, SCSS, JSON, and XML outputs for web, iOS, and Android
- **Platform Overrides** — Platform-specific token values (e.g. font weight as numeric `700` for web vs string `"Bold"` for iOS/Android)
- **Token Metadata** — Descriptions and categorisation used by documentation and tooling

### Tech Stack
- **Runtime**: Node.js (>= 16)
- **Package Manager**: Yarn (>= 1)
- **Testing**: Jest (version `26.3.0`, defined in `package.json` `devDependencies.jest`)
- **Linting**: ESLint (version `8.57.0`, using `@justeattakeaway/eslint-config-pie`)
- **JSONC Parsing**: `jsonc-parser` (parses the token source file with comment support)
- **Build**: Custom Node.js compile scripts (no external build tool — `node index.js` orchestrates all compilation)

## Repository Structure

```
pie-design-tokens/
├── pie-design-tokens.jsonc   # Source of truth for all tokens
├── index.js                  # Build orchestrator
├── package.json              # Package config (v7.11.1)
├── CHANGELOG.md              # Manual changelog (semver)
├── build/                    # Compilation scripts
│   ├── compileToCss.js       # → dist/jet.css, dist/jet-hsl-colors.css
│   ├── compileToScss.js      # → dist/jet.scss
│   ├── compileToJson.js      # → dist/tokens.json
│   ├── compileToXml.js       # → dist/colors.xml
│   ├── helpers.js            # Shared utilities (color conversion, formatting)
│   └── tests/                # Unit & snapshot tests
├── metadata/
│   ├── tokensMetadata.json   # Token descriptions — must mirror source
│   └── tokenCategories.json  # Category structure & display names
├── platform/
│   ├── web.jsonc             # Web-specific overrides (numeric font weights)
│   ├── ios.jsonc             # iOS-specific overrides (string font weights)
│   └── android.jsonc         # Android-specific overrides
└── dist/                     # Compiled output (generated)
    ├── jet.css               # CSS custom properties
    ├── jet-hsl-colors.css    # HSL color values
    ├── jet.scss              # SCSS variables
    ├── tokens.json           # Flat JSON (alias → resolved value)
    └── colors.xml            # Android XML color resources
```

## Token Categories

| Category | Examples |
|----------|----------|
| **Colors** | Global palettes (orange, blue, red, green, etc.), alias tokens (backgrounds, borders, content, interactive states, feedback, brand) |
| **Typography** | Font families, weights, sizes, line heights, styles, text decorations |
| **Spacing** | Layout spacing values |
| **Radius** | Border radius values |
| **Elevation** | Box shadows (with dark mode variants) |
| **Gradients** | Gradient definitions (with dark mode variants) |
| **Other** | Blur, timing, breakpoints, paragraph spacing |


## Build and Test

```bash
yarn install        # Install dependencies
yarn build          # Compile tokens to dist/
yarn test           # Run unit tests
yarn test:output -u # Run output snapshot tests (update snapshots)
yarn lint           # Run ESLint
```

## Making Changes

### Every token change requires all of the following:
1. Edit `pie-design-tokens.jsonc`
2. Run `yarn build` and verify `dist/` output
3. Mirror changes in `metadata/tokensMetadata.json`
4. Add a changelog entry in `CHANGELOG.md` (format: `### Added` / `### Changed` / `### Fixed`)
5. Bump the version in `package.json` (semver)
6. Run `yarn test && yarn test:output -u` — all tests must pass

### If changes affect token structure:
Update the relevant compile scripts in `build/` (`compileToCss.js`, `compileToJson.js`, `compileToScss.js`, `compileToXml.js`).

## Conventions

### Branch naming
`dsw-{ticketId}-{feature}` — e.g. `dsw-123-add-color-token`

### Commit messages
Prefix with the package version — e.g. `v7.11.1 add new background token`

### PR title
Start with the package version number. Copy the changelog entry into the PR description.

## Dark Mode

Compiled CSS/SCSS output includes two dark mode rule sets:
- **Primary**: `html[data-color-mode="dark"]` — explicit activation
- **Fallback**: `@media (prefers-color-scheme: dark)` with `html[data-darkmode-system]:not([data-color-mode])` — system preference when no explicit override

Token categories with dark variants: colors, elevation (box shadows), gradients.

## Testing

| Test | What it covers |
|------|----------------|
| `build/tests/compileToCss.spec.js` | CSS output, variable naming, dark mode rules |
| `build/tests/compileToScss.spec.js` | SCSS output, variable prefixes, unit conversion |
| `build/tests/compileToJson.spec.js` | JSON alias-to-value resolution, opacity handling |
| `build/tests/compileToXml.spec.js` | Android XML color generation |
| `build/tests/helpers.spec.js` | Utility functions (color conversion, formatting) |
| `build/tests/output/distOutput.spec.js` | Snapshot tests comparing generated `dist/` files |

## Publishing

NPM publishing is handled via GitHub Actions (`workflow_dispatch` only). Regular pushes and PRs do **not** publish.

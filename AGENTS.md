# AGENTS.md - PIE Design System Coding Guide

This guide provides essential information for AI coding agents working in the PIE (Principles for Interfaces and Experiences) Design System monorepo.

## Project Overview

**Project Type:** Web Components Design System Monorepo
**Organization:** Just Eat Takeaway.com
**Tech Stack:** Lit 3.2.0, TypeScript 5.9.3, Vite 5.4.19, Turborepo 1.10.6
**Package Manager:** Yarn 3.8.1 with workspaces
**Node Version:** ^22 || ^24 (managed by Volta)

## Repository Structure

```
pie/
├── apps/                          # Applications (pie-docs, pie-storybook)
├── packages/
│   ├── components/                # ~35 web components (pie-button, pie-modal, etc.)
│   │   ├── pie-webc-core/        # Base classes, mixins, decorators
│   │   └── pie-webc-testing/     # Testing utilities
│   └── tools/                     # eslint-config-pie, pie-icons, pie-wrapper-react, etc.
└── configs/pie-components-config/ # Shared build/test configs
```

## Build, Lint, and Test Commands

### Root Level Commands

```bash
# Development
yarn build                  # Build all packages (uses Turborepo caching)
yarn build:dev              # Development build
yarn watch                  # Watch mode for all packages
yarn dev                    # Run all in dev mode

# Testing
yarn test                   # Run all unit tests (Vitest)
yarn test:ci                # CI-optimized unit tests
yarn test:watch             # Unit tests in watch mode
yarn test:browsers          # Run all Playwright component tests
yarn test:browsers:webc     # Web component browser tests only
yarn test:browsers:react    # React wrapper browser tests only
yarn test:visual            # Percy visual regression tests
yarn test:visual:ci         # CI visual tests

# Linting
yarn lint:scripts           # ESLint all packages
yarn lint:scripts:fix       # ESLint with auto-fix
yarn lint:style             # Stylelint all packages
yarn lint:style:fix         # Stylelint with auto-fix

# Other
yarn clean                  # Clean all build artifacts
yarn changeset              # Create changeset for versioning
```

### Component Level Commands (e.g., in packages/components/pie-button)

```bash
# Build
yarn build                  # Vite build
yarn watch                  # Watch mode
yarn build:react-wrapper    # Generate React wrapper

# Test - Single Component
yarn test:browsers          # All Playwright tests for this component
yarn test:visual            # Percy visual tests for this component

# Test - Single Test File
npx playwright test -c ./playwright-lit.config.ts test/component/pie-button.spec.ts
npx playwright test -c ./playwright-lit.config.ts test/accessibility/pie-button.spec.ts
npx playwright test -c ./playwright-lit-visual.config.ts test/visual/pie-button.spec.ts

# Test - Specific Test by Name
npx playwright test -c ./playwright-lit.config.ts -g "should correctly work with native click events"

# Lint
yarn lint:scripts           # ESLint
yarn lint:scripts:fix       # ESLint with auto-fix
yarn lint:style             # Stylelint
yarn lint:style:fix         # Stylelint with auto-fix
```

## Creating new components
Use `yarn build --filter=generator-pie-component --force`
then `npx yo @justeattakeaway/pie-component` to scaffold.
An interactive prompt should now be displayed asking for a component name and some yes/no questions.

## Code Style Guidelines

### TypeScript Configuration

- **Target:** ES2021
- **Module:** ESNext
- **Strict Mode:** Enabled (`strict: true`)
- **Compiler Options:**
  - `noUnusedLocals: true`
  - `noUnusedParameters: true`
  - `noImplicitReturns: true`
  - `noImplicitAny: true`
  - `experimentalDecorators: true` (required for Lit)
  - `allowImportingTsExtensions: true`
  - `moduleResolution: "bundler"`

### Import Guidelines

**Import Order (follows Airbnb style):**
1. External dependencies (e.g., `lit`, `lit/directives/*`)
2. Internal dependencies from other packages (e.g., `@justeattakeaway/pie-webc-core`)
3. Local imports (e.g., `./defs`, `./button.scss?inline`)

**Examples:**
```typescript
// External
import { html, unsafeCSS, nothing, type PropertyValues } from 'lit';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';

// Internal
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { validPropertyValues, FormControlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';

// Local
import { type ButtonProps, defaultProps } from './defs';
import styles from './button.scss?inline';
```

**Import Conventions:**
- Use `.js` extensions for Lit imports (e.g., `lit/directives/class-map.js`)
- Use `.ts` extensions for local imports (e.g., `./defs.ts`, `../../src/index.ts`)
- Import types with `type` keyword (e.g., `type PropertyValues`)
- Import styles as `?inline` (e.g., `./button.scss?inline`)

### Formatting and Spacing

- **Indentation:** 4 spaces for JS/TS/CSS/HTML (enforced by EditorConfig)
- **Indentation:** 2 spaces for config files (JSON, YAML)
- **Line Endings:** LF (Unix-style)
- **Charset:** UTF-8
- **Final Newline:** Required
- **Trailing Whitespace:** Trimmed

### Naming Conventions

- **Components:** PascalCase (e.g., `PieButton`, `PieModal`)
- **Custom Elements:** kebab-case (e.g., `pie-button`, `pie-modal`)
- **Properties/Variables:** camelCase (e.g., `isLoading`, `iconPlacement`)
- **Constants:** camelCase for defaultProps, SCREAMING_SNAKE_CASE for true constants
- **Types/Interfaces:** PascalCase with descriptive suffixes (e.g., `ButtonProps`, `FormInput`)
- **Private Methods:** Prefix with underscore (e.g., `_handleFormKeyDown`)

### Component Architecture

**Lit Component Pattern:**
```typescript
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement, FormControlMixin, DelegatesFocusMixin } from '@justeattakeaway/pie-webc-core';

@safeCustomElement('pie-component-name')
export class PieComponentName extends DelegatesFocusMixin(FormControlMixin(PieElement)) implements ComponentProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, values, defaultProps.value)
    public propertyName = defaultProps.propertyName;

    // Lifecycle methods
    connectedCallback() { super.connectedCallback(); }
    disconnectedCallback() { super.disconnectedCallback(); }
    updated(changedProperties: PropertyValues<this>): void { }

    render() {
        return html`...`;
    }
}
```

**Key Patterns:**
- Extend `PieElement` (never raw `LitElement`)
- Use mixins for shared functionality (FormControlMixin, DelegatesFocusMixin, RTLMixin)
- Use `@safeCustomElement` decorator (not `@customElement`)
- Use `@validPropertyValues` for property validation
- Define props/types in separate `defs.ts` file
- Implement component-specific interface (e.g., `implements ButtonProps`)

### Error Handling

- Let native HTML form validation handle form errors where applicable
- Use Lit's `ifDefined` directive for optional attributes
- Validate props with `@validPropertyValues` decorator
- Add event listeners in `connectedCallback`, remove in `disconnectedCallback`
- Handle cleanup in `disconnectedCallback` to prevent memory leaks

### Testing Guidelines

**Test Structure:**
- `test/component/` - Functional tests
- `test/accessibility/` - A11y tests with Axe
- `test/visual/` - Visual regression with Percy
- `test/helpers/page-object/` - Page Object Models

**Test Patterns:**
```typescript
// Use Page Object Model pattern
import { test, expect } from '@playwright/test';
import { ButtonDefaultPage } from '../helpers/page-object/pie-button-default.page.ts';

test('should correctly work with native click events', async ({ page }) => {
    // Arrange
    const buttonDefaultPage = new ButtonDefaultPage(page);
    await buttonDefaultPage.load();

    // Act
    await buttonDefaultPage.clickButtonWithText('Label');

    // Assert
    expect(consoleMessages).toContain('Button clicked!');
});
```

## Git Commit Standards

**Commit Format:** `<type>(<scope>): <ticket> <subject>`

**Example:** `feat(pie-button): DSP-1234 Add loading state`

**Valid Types:**
- `feat` - New feature/functionality
- `fix` - Bug fix
- `chore` - Build/dependency changes
- `ci` - CI configuration
- `docs` - Documentation
- `format` - Code formatting/linting
- `performance` - Performance improvements
- `refactor` - Code refactoring
- `test` - Adding tests
- `cosmetic` - UI styling changes

**Requirements:**
- Ticket number is required (format: `ABC-1234`)
- Scope must match a package name (e.g., `pie-button`, `pie-modal`)
- Use imperative mood for subject (e.g., "Add" not "Added")
- Commits validated by Commitizen + commitlint via Husky hooks

**Creating Commits:**
```bash
yarn cz  # Interactive commit creation (recommended)
```

## Additional Notes

- **No Prettier:** Formatting handled by ESLint/Stylelint only
- **Polyfills:** Use `element-internals-polyfill` for form-associated custom elements
- **Styles:** SCSS files imported as inline strings
- **React Wrappers:** Auto-generated from `custom-elements.json` via `@justeattakeaway/pie-wrapper-react`
- **Versioning:** Uses Changesets for independent package versioning
- **Publishing:** All packages published to npm under `@justeattakeaway` scope

## Active Technologies
- CSS3, SCSS (Dart Sass), TypeScript 5.9.3 (for build scripts only) (001-pie-radio-css-classes)
- N/A (CSS files only) (001-pie-radio-css-classes)

## Recent Changes
- 001-pie-radio-css-classes: Added CSS3, SCSS (Dart Sass), TypeScript 5.9.3 (for build scripts only)

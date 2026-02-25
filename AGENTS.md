# AGENTS.md - PIE Design System

This document provides guidance for AI agents working with the PIE (Principles for Interfaces and Experiences) Design System codebase.

## Project Overview

PIE is Just Eat Takeaway's global design system. This monorepo contains:
- **Web Components** - Framework-agnostic components built with Lit 3
- **Documentation** - The pie.design documentation site
- **Storybook** - Component playground, web engineering documentation and testing environment
- **Tools** - Shared tooling packages for component development

## Repository Structure

```
pie/
├── apps/
│   ├── pie-docs/          # Documentation site (pie.design)
│   └── pie-storybook/     # Storybook playground (webc.pie.design)
├── packages/
│   ├── components/        # Web Component packages (pie-button, pie-modal, etc.)
│   │   ├── pie-webc/      # Umbrella package that re-exports all components
│   │   └── pie-webc-core/ # Shared base class, mixins, decorators, and utilities
│   └── tools/             # Shared tooling (pie-css, pie-icons, etc.)
├── configs/               # Shared configuration packages (vite, playwright, cem)
└── .changeset/            # Changeset files for versioning
```

## Technology Stack

- **Runtime**: Node.js 22 or 24 (specified in `package.json` engines). Versions are pinned via **Volta** (see `"volta"` field in root `package.json`). Install Volta to have node/yarn versions switched automatically.
- **Package Manager**: Yarn 3.x (exact version pinned in root `package.json` via `packageManager` and `volta.yarn`)
- **Monorepo**: Turborepo
- **Build Tool**: Vite
- **Web Components**: Lit 3.x (exact version pinned in root `package.json` `resolutions.lit`)
- **TypeScript**: TypeScript 5.x (exact version defined in root `package.json` `devDependencies.typescript`)
- **Testing**:
  - Playwright (browser tests)
  - Vitest (unit tests)
  - Percy (visual regression)
  - Chromatic (additional visual regression / Storybook snapshots)

## Component Structure

Each component follows this structure:

```
component-name/
├── dist/                          # Built output
├── src/
│   ├── component-name.scss        # Component styles
│   ├── defs.ts                    # TypeScript type definitions
│   ├── defs-react.ts              # React-specific types
│   └── index.ts                   # Component entry point
├── test/
│   ├── accessibility/             # Accessibility tests
│   ├── component/                 # Browser tests (Playwright)
│   ├── helpers/page-object/       # Page object test helpers
│   └── visual/                    # Visual regression tests
├── package.json
├── tsconfig.json
├── vite.config.js
├── playwright-lit.config.ts        # Playwright config (browser/a11y tests)
├── playwright-lit-visual.config.ts # Playwright config (visual regression tests)
└── custom-elements-manifest.config.mjs
```

## Key Conventions

### Component Development

1. **Use Lit 3** - All components extend `PieElement` from `@justeattakeaway/pie-webc-core`
2. **Type Safety** - Define types in `defs.ts`, use TypeScript strictly
3. **Styling** - Use SCSS files imported as `?inline` in component files
4. **Design Tokens** - Use `@justeattakeaway/pie-design-tokens` for colors, spacing, etc.
5. **Mixins** - Use mixins from `pie-webc-core` (e.g., `FormControlMixin`, `RtlMixin`, `DelegatesFocusMixin`)

### Testing Philosophy

**Primary Testing Strategy: Browser Tests**
- Test components in **real browsers** using Playwright, not jsdom
- Test user-facing behavior, not implementation details
- Use Storybook stories as test fixtures
- Focus on accessibility, form behavior, and user interactions

**Test Types:**
- **Browser Tests** (`test/component/*.spec.ts`) - Primary testing method
- **Accessibility Tests** (`test/accessibility/*.spec.ts`) - A11y checks via axe-core
- **Visual Tests** (`test/visual/*.spec.ts`) - Percy visual regression
- **Unit Tests** - Only for small utilities, not components

**Test Naming:**
- Use `test.describe` blocks: Component name → Feature → Specific behavior
- Test names: `should [do something]`, `should [do something] when [condition]`
- Example: `should submit form when Enter key is pressed`

### Git Workflow

**Branch Naming:**
```
dsw-123-my-feature
```
Where `dsw-123` is the Jira ticket ID.

**Commit Messages:**
The repo follows committizen standards for commits. Make sure to follow this format:

Format:
```
type(scope): DSW-123 your message
```

**Commit Types:**
- `feat` - New feature or functionality
- `fix` - Bug fix
- `chore` - Build/dependency changes (e.g. webpack, eslint, package.json)
- `ci` - CI configuration changes
- `docs` - Documentation only changes
- `format` - Code formatting / linting fixes (no logic change)
- `performance` - Performance improvements
- `refactor` - Code refactoring (neither a fix nor a feature)
- `release` - Version release
- `revert` - Reverting a previous commit
- `cosmetic` - UI styling changes (design tokens, Sass, SVGs)
- `test` - Adding missing tests
- `wip` - Work in progress (use for incomplete commits)

**Commit scope**
The scope part of each commit message should be the package name changed. e.g. `pie-button`

**Pull Requests:**
- Use the PR template in `.github/pull_request_template.md`
- The PR title must follow the same `type(scope): TICKET-123 title` format as commit messages — this is validated automatically by Danger JS
- Include changeset for consumer-facing changes
- Test in PIE Aperture before merging
- Get reviews from #help-designsystem Slack channel

### Automated PR Checks (Danger JS)

A `dangerfile.js` runs automatically on every PR and will **fail** it if any of the following are violated. Be aware of these before raising a PR:

- **PR title format** — must match `type(scope): TICKET-123 title` (ticket ID cannot be all zeros)
- **Changeset format** — entries must follow `[Category] - {Description}` (e.g. `[Fixed] - Corrected focus ring colour`)
- **README structure** — component READMEs must contain all of the following sections:
  - npm badge (`https://img.shields.io/npm/v/@justeattakeaway/...`)
  - `## Table of Contents`
  - `## Documentation` with sub-sections: `### Properties`, `### Slots`, `### Events`, `### CSS Variables`
  - `## Usage Examples`
  - `## Questions and Support`
  - `## Contributing`
- **PR checklist** — all Author Checklist items must be checked (or explicitly moved to the "Not-applicable Checklist items" section). Leaving unchecked boxes elsewhere will fail the PR.

### Versioning & Changesets

**When to create a changeset:**
- Any change that affects consumers of the package
- New features, bug fixes, breaking changes
- Run: `yarn changeset`

**Changeset Format:**
Entries must be prefixed with a category in square brackets, followed by a dash and a description:
```
[Added] - New `isLoading` prop on pie-button
[Changed] - Renamed `size` prop values
[Fixed] - Corrected focus ring colour in high contrast mode
[Removed] - Dropped deprecated `outline-inverse` variant
```

**Snapshot Releases:**
- Comment `/snapit` on PR to trigger snapshot release
- Or `/test-aperture` to create Aperture PR automatically

## Common Commands

### Development
- Install dependencies: `yarn install`
- Watch a component during development: `yarn watch --filter=@justeattakeaway/pie-{component-name}`
- Run Storybook: `yarn dev --filter=@justeattakeaway/pie-storybook`
- Build all packages: `yarn build`

### Testing
- Run once before browser tests (or after Playwright config changes): `yarn test:browsers-setup --filter=@justeattakeaway/pie-{component-name}`
- Run browser tests for a component: `yarn test:browsers --filter=@justeattakeaway/pie-{component-name}`
- Run all tests: `yarn test`
- Run visual tests: `yarn test:visual --filter=@justeattakeaway/pie-{component-name}`

### Linting
- Lint JS/TS scripts: `yarn lint:scripts`
- Lint styles: `yarn lint:style`
- Fix JS/TS lint issues: `yarn lint:scripts:fix`
- Fix style linting issues: `yarn lint:style:fix`

## Code Style Guidelines

### TypeScript
- Use strict TypeScript
- Define component props in `defs.ts`
- Use `@property` decorators for Lit properties
- Use `@validPropertyValues` for prop validation
- Use `@requiredProperty` for props that must always be provided
- Export types from `defs.ts` for consumers

### Web Components
- Extend `PieElement` from `@justeattakeaway/pie-webc-core`
- Use `@safeCustomElement` decorator
- Implement proper lifecycle methods (`connectedCallback`, `disconnectedCallback`, `updated`)
- Use `FormControlMixin` for form components
- Use `DelegatesFocusMixin` when the component needs to delegate focus to an internal element
- Ensure all components support RTL; use `RtlMixin` when programmatic JS awareness of direction changes is needed
- Handle events properly using the event utilities from `pie-webc-core` (see [Event Handling](#event-handling))
- For public type exports, see TypeScript guidelines.

### Styling
- Use SCSS with design tokens (CSS variables where possible)
  - Design tokens are defined in the `@justeattakeaway/pie-design-tokens` package
  - DON'T invent token names
- Follow BEM-like naming: `c-componentName--modifier`
  - Components are prefixed: `.c-`
  - Descriptors in a classname use camel-case if more than one word (e.g. `c-myComponentName`)
  - Child elements use `-` (e.g. `.c-form-controlGroup`)
  - Modifiers use `--` (e.g. `.c-button--primary`)
  - Utility classes use `.u-` prefix (e.g. `.u-showAboveMid`)
  - State classes use `.is-` or `.has-` prefix (e.g. `.is-active`, `.has-error`)
- Use logical properties (e.g. `margin-inline-start` not `margin-left`)
- Import styles as `?inline` in component files

### Accessibility
- Use semantic HTML
- Support keyboard navigation
- Include ARIA attributes where needed
- Test with screen readers
- Follow WCAG guidelines

## Important Notes

### Dependencies
- **Lit**: 3.x (exact version pinned in root `package.json` `resolutions.lit`)
- **pie-webc-core**: Provides shared base class, mixins, decorators, and utility functions
- **pie-webc**: Umbrella package — consumers install this to get all components at once
- **pie-design-tokens**: Design system tokens
- **pie-css**: Shared CSS utilities and reset styles
- **element-internals-polyfill**: Required for form-associated components; include as a dependency in any component using `FormControlMixin`

### Monorepo Management
- Use Turborepo for task orchestration
- Tasks are defined in `turbo.json`
- Use `--filter` flag to target specific packages
- Build dependencies are handled automatically

### Turborepo Pipeline

Tasks in `turbo.json` have defined dependencies that run automatically. Key relationships to be aware of:

- `build` depends on `^build` (all upstream packages) and `build:react-wrapper`
- `build:react-wrapper` depends on `create:manifest` (the custom elements manifest must exist first)
- `test:browsers` depends on `build` (component must be built before tests run)
- `test:browsers-setup` must be run manually the first time or after config changes; it copies Playwright fixture files into the component directory

This means you generally only need to run the top-level command (e.g. `yarn test:browsers`) and Turborepo will handle the dependency chain. However, `test:browsers-setup` is a prerequisite that must be run at least once.

### Event Handling

Prefer native platform events where possible (for example `Event`/`InputEvent`) and avoid custom events unless there is a concrete requirement for a custom payload shape or cross-boundary behavior.

- If a native event is sufficient, dispatch/forward the native event.
- If you need a PIE custom event API, use **`dispatchCustomEvent(element, 'pie-event-name', detail)`** from `pie-webc-core` rather than constructing `CustomEvent` manually.
- If you need to forward a non-composed native event out of shadow DOM, use **`wrapNativeEvent(event)`** from `pie-webc-core`.

### React Wrappers
- React wrappers are auto-generated during build (`build:react-wrapper`)
- Generated files are in `src/react.ts` (untracked)
- Uses `@justeattakeaway/pie-wrapper-react`

## Resources

- **Documentation**: https://pie.design/
- **Storybook**: https://webc.pie.design/
- **Contributing Guide**: https://webc.pie.design/?path=/docs/contribution-overview--docs
- **Slack**: #help-designsystem
- **GitHub**: https://github.com/justeattakeaway/pie

## When Making Changes

1. **Check existing patterns** - Look at similar components (e.g., `pie-button`)
2. **Follow the structure** - Use `generator-pie-component` (or copy from existing components)
3. **Test in Storybook** - Verify visually before writing tests
4. **Prioritize browser tests** - Browser tests are primary, not unit tests
5. **Use page objects** - Follow the `BasePage` / `[Component]Page` / `[Component]Component` pattern
6. **Create changeset** - If change affects consumers, using the `[Category] - description` format
7. **Update README** - Component README becomes the Storybook overview and must meet the required structure enforced by Danger JS
8. **Test in Aperture** - Use `/test-aperture` command on PR

## Avoid

- Don't use jsdom for component tests - use real browsers
- Don't skip browser tests in favor of unit tests
- Don't change component status without approval
- Don't use a commit message that does not match `type(scope): TICKET-123 your message`
- Don't skip changesets for consumer-facing changes
- Don't create components manually - use the generator
- Don't dispatch custom events manually with `new CustomEvent(...)` - use `dispatchCustomEvent` from `pie-webc-core`
- Don't write a README without all required sections - Danger JS will fail the PR
- Don't leave unchecked PR checklist items outside the "Not-applicable" section - Danger JS will fail the PR
- Don't run browser tests without first running `test:browsers-setup`

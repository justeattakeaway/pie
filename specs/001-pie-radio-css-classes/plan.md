# Implementation Plan: PIE Radio CSS Mixins and Classes

**Branch**: `001-pie-radio-css-classes` | **Date**: 2026-02-20 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-pie-radio-css-classes/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Provide radio button styling as SASS mixins in the pie-css helpers directory, following the same pattern as typography CSS. Deliver both:
1. **SASS Mixins** for build-time consumers who want granular control and smaller bundles
2. **Generated CSS Classes** for runtime consumers who need ready-to-use styles without build tools

The mixins will cover all radio states (base, checked, disabled, error, hover, active, focus) and support parent container interactions (e.g., `.card:hover .radio`). A generated CSS file will expose these as classes (`.c-radio-static`, `.c-radio-static--hover`, etc.) mirroring the typography pattern in `dist/helpers/typography.css`.

## Technical Context

**Language/Version**: TypeScript 5.9.3 (for build scripts only), SCSS (Dart Sass), CSS3  
**Primary Dependencies**: 
- `@justeat/pie-design-tokens@7.10.2` (design tokens)
- `sass` (SCSS compilation)
- `postcss@8.4.32` + `postcss-import@15.1.0` (CSS processing)
- `@justeattakeaway/pie-webc-core` (for Storybook examples)

**Storage**: N/A (CSS files only)  
**Testing**: Vitest (unit tests for build scripts), Stylelint (style linting), Visual regression via Storybook examples  
**Target Platform**: Web (all modern browsers: Chrome, Firefox, Safari, Edge latest versions)  
**Project Type**: Monorepo package (tools) - SCSS library with generated CSS output  
**Performance Goals**: 
- Generated CSS file <3KB (uncompressed)
- Mixin-only bundles 40% smaller than full CSS classes
- SCSS compilation time <500ms

**Constraints**: 
- Must follow existing pie-css patterns (typography as reference)
- Must maintain visual parity (±1px) with pie-radio Web Component
- No breaking changes to existing pie-css consumers
- Must support native `<input type="radio">` elements only

**Scale/Scope**: 
- 7 mixins (base + 6 state modifiers)
- ~7 corresponding CSS classes
- 2 Storybook examples
- Integration with existing pie-css build pipeline

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Core Principles Compliance

✅ **I. Component-First Architecture** - NOT APPLICABLE (this is CSS/SCSS library code, not a Web Component)

✅ **II. Type Safety** - COMPLIANT
- Build scripts use TypeScript 5.9.3 with strict mode
- No component code to type-check (only SCSS)

✅ **III. Test-First Development** - COMPLIANT
- Will include Stylelint validation for SCSS
- Visual regression via Storybook examples
- Unit tests for build process if needed

✅ **IV. Accessibility** - NOT APPLICABLE (CSS-only, no behavioral changes)

✅ **V. Monorepo Discipline** - COMPLIANT
- Located in `packages/tools/pie-css` (correct location for styling library)
- No new package dependencies
- Uses existing Turborepo build orchestration
- Follows Changesets versioning

✅ **VI. Code Style Consistency** - COMPLIANT
- 4 spaces for SCSS (enforced by Stylelint)
- Follows existing pie-css naming conventions (`.c-*` for components, mixin names)
- Uses same import patterns as typography

✅ **VII. Git Commit Standards** - COMPLIANT
- Branch follows numbered format: `001-pie-radio-css-classes`
- Commits will follow: `feat(pie-css): <ticket> <subject>` format

### Technology Standards Compliance

✅ **Core Stack** - COMPLIANT
- Uses Dart Sass (via `sass` package)
- TypeScript 5.9.3 for build scripts
- Yarn 3.8.1 workspaces
- Turborepo for orchestration

✅ **Build & Lint Tools** - COMPLIANT
- Stylelint for SCSS linting
- Existing `buildCss.ts` script for CSS processing
- No Prettier usage

### Complexity Tracking

No violations identified. This feature:
- Follows established typography pattern
- Adds no new dependencies
- Maintains existing architecture
- Requires no constitutional amendments

## Project Structure

### Documentation (this feature)

```text
specs/001-pie-radio-css-classes/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
│   └── mixins-api.md   # Mixin signatures and parameters
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
packages/tools/pie-css/
├── scss/
│   ├── _internal/
│   │   └── radio.scss           # NEW: Internal SCSS that generates classes
│   ├── helpers/
│   │   ├── index.scss           # EXISTING: Already imports _radio
│   │   └── _radio.scss          # MODIFIED: Convert from placeholders to mixins
│   └── mixins/
│       └── index.scss           # OPTIONAL: May add radio mixins to main mixins export
│
├── dist/
│   └── helpers/
│       └── radio.css            # NEW: Generated CSS file with classes
│
├── buildCss.ts                  # EXISTING: May need modification for radio compilation
├── package.json                 # MODIFIED: Add radio.css build script
└── README.md                    # MODIFIED: Document mixin usage

apps/pie-storybook/
└── stories/
    ├── pie-css-radio-static.stories.ts        # MODIFIED: Update examples
    └── pie-css-radio-static-demo.scss         # NEW: Demo SCSS showing mixin usage
```

**Structure Decision**: 

This follows the **monorepo tools package** structure. The feature adds styling utilities to the existing `pie-css` package (`packages/tools/pie-css`), which is the correct location per Constitution Principle V.

**Key Files**:
1. **`scss/helpers/_radio.scss`** - SCSS helper file containing mixin definitions (existing file to be refactored)
2. **`scss/_internal/radio.scss`** - Internal SCSS that calls mixins to generate CSS classes (new file, mirrors `_internal/typography.scss`)
3. **`dist/helpers/radio.css`** - Generated CSS output file (new file, mirrors `dist/helpers/typography.css`)
4. **Storybook stories** - Documentation and interactive examples

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No violations identified. This section is not applicable.

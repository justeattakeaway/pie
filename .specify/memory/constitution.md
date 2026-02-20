<!--
SYNC IMPACT REPORT
==================
Version Change: [UNVERSIONED] → 1.0.0
Rationale: Initial constitution establishment for PIE Design System

Modified Principles: None (initial creation)
Added Sections:
  - Core Principles (7 principles)
  - Technology Standards
  - Development Workflow
  - Governance

Removed Sections: None

Templates Requiring Updates:
  ✅ .specify/templates/plan-template.md - Constitution Check section aligns with new principles
  ✅ .specify/templates/spec-template.md - Requirements sections align with functional requirements principle
  ✅ .specify/templates/tasks-template.md - Task categorization supports test-first and component architecture principles

Follow-up TODOs:
  - RATIFICATION_DATE: Set to project decision date when constitution is formally adopted by team
  - Monitor compliance during first sprint cycle and adjust if principles prove unworkable
-->

# PIE Design System Constitution

## Core Principles

### I. Component-First Architecture

Every UI feature MUST be built as a reusable Web Component using Lit 3.2+. Components MUST:
- Extend `PieElement` (never raw `LitElement`)
- Be independently testable and documented
- Have clear, single responsibility
- Follow the naming convention: `pie-[component-name]` (kebab-case for custom elements)
- Export class in PascalCase (e.g., `PieButton`, `PieModal`)

**Rationale**: Ensures consistency, reusability, and maintainability across Just Eat Takeaway.com's design system. Component isolation enables parallel development and independent testing.

### II. Type Safety (NON-NEGOTIABLE)

All code MUST be written in TypeScript with strict mode enabled. No implicit `any` types permitted. All TypeScript compiler options MUST be enforced:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noImplicitReturns: true`
- `noImplicitAny: true`

**Rationale**: Type safety prevents runtime errors, improves developer experience with IntelliSense, and ensures API contracts are honored across the monorepo's 35+ components.

### III. Test-First Development

Testing MUST follow this hierarchy:
1. **Functional tests** (Playwright) - Component behavior validation in `test/component/`
2. **Accessibility tests** (Axe) - WCAG compliance validation in `test/accessibility/`
3. **Visual regression tests** (Percy) - UI consistency validation in `test/visual/`
4. **Unit tests** (Vitest) - Logic validation where applicable

Tests MUST use Page Object Model pattern. Components cannot be merged without passing all three test types.

**Rationale**: Multiple test layers ensure components are functionally correct, accessible to all users, and visually consistent across browsers. TDD approach prevents regressions.

### IV. Accessibility (NON-NEGOTIABLE)

All components MUST meet WCAG 2.1 Level AA standards. Every component MUST:
- Include automated Axe accessibility tests
- Support keyboard navigation
- Provide proper ARIA labels and roles
- Work with screen readers
- Maintain proper focus management

**Rationale**: Just Eat Takeaway.com serves diverse users globally. Accessibility is both a legal requirement and moral obligation to ensure inclusive experiences.

### V. Monorepo Discipline

The monorepo structure MUST be respected:
```
pie/
├── apps/                  # Applications only (pie-docs, pie-storybook)
├── packages/
│   ├── components/        # Web components (pie-button, pie-modal, etc.)
│   │   ├── pie-webc-core/ # Shared base classes, mixins, decorators
│   │   └── pie-webc-testing/ # Testing utilities
│   └── tools/             # Build tools, configs, wrappers
└── configs/               # Shared configurations
```

Components MUST use Yarn 3.8.1 workspaces, Turborepo for builds, and Changesets for versioning. Dependencies MUST be hoisted when possible. Circular dependencies are PROHIBITED.

**Rationale**: Maintains clear separation of concerns, enables efficient builds via Turborepo caching, and ensures independent component versioning via Changesets.

### VI. Code Style Consistency

Formatting MUST follow these rules (enforced by ESLint/Stylelint, NOT Prettier):
- **Indentation**: 4 spaces for TS/JS/CSS/HTML, 2 spaces for config files (JSON, YAML)
- **Import order**: External → Internal packages → Local imports (Airbnb style)
- **Naming**: PascalCase for classes/types, camelCase for properties/variables, kebab-case for custom elements
- **Line endings**: LF (Unix-style)
- **Extensions**: `.js` for Lit imports, `.ts` for local imports, `?inline` for SCSS imports

**Rationale**: Consistent code style reduces cognitive load, simplifies code reviews, and prevents formatting debates. ESLint/Stylelint rules are enforced in CI.

### VII. Git Commit Standards (NON-NEGOTIABLE)

All commits MUST follow Conventional Commits format:
```
<type>(<scope>): <ticket> <subject>
```

**Example**: `feat(pie-button): DSP-1234 Add loading state`

**Valid types**: feat, fix, chore, ci, docs, format, performance, refactor, test, cosmetic

**Requirements**:
- Ticket number MUST be present (format: `ABC-1234`)
- Scope MUST match a package name (e.g., `pie-button`, `pie-modal`)
- Subject MUST use imperative mood (e.g., "Add" not "Added")
- Commits validated by Commitizen + commitlint via Husky pre-commit hooks

**Rationale**: Structured commits enable automated changelog generation, simplified git history navigation, and clear traceability to Jira tickets. Husky hooks prevent non-compliant commits from being pushed.

## Technology Standards

### Core Stack (NON-NEGOTIABLE)

- **Framework**: Lit 3.2.0+ (Web Components standard)
- **Language**: TypeScript 5.9.3+ (ES2021 target, ESNext module)
- **Build**: Vite 5.4.19+ for components, Turborepo 1.10.6+ for orchestration
- **Package Manager**: Yarn 3.8.1 with workspaces
- **Node Version**: ^22 || ^24 (managed by Volta)

### Testing Stack (NON-NEGOTIABLE)

- **Unit Tests**: Vitest
- **Browser Tests**: Playwright with multiple configs (`playwright-lit.config.ts`, `playwright-lit-visual.config.ts`)
- **Accessibility**: Axe via Playwright
- **Visual Regression**: Percy
- **Test Pattern**: Page Object Model (POM) mandatory

### Build & Lint Tools

- **Linting**: ESLint (scripts), Stylelint (styles) - NO Prettier
- **Bundling**: Vite (per-component builds)
- **React Wrappers**: Auto-generated via `@justeattakeaway/pie-wrapper-react` from `custom-elements.json`
- **Versioning**: Changesets (independent package versioning)
- **Publishing**: npm under `@justeattakeaway` scope

### Polyfills & Dependencies

- **Form Elements**: `element-internals-polyfill` (for form-associated custom elements)
- **Styles**: SCSS imported as inline strings (e.g., `import styles from './button.scss?inline'`)
- **Base Classes**: All components MUST extend `PieElement` from `@justeattakeaway/pie-webc-core`

## Development Workflow

### Component Creation

1. **Scaffold**: Use `yarn build --filter=generator-pie-component --force` then `npx yo @justeattakeaway/pie-component`
2. **Structure**: Follow pattern from AGENTS.md (PieElement base, mixins, decorators)
3. **Tests**: Write functional, accessibility, and visual tests BEFORE implementation
4. **Review**: PR MUST pass all CI checks (lint, test, build) before merge

### Component Architecture Pattern

```typescript
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement, FormControlMixin, DelegatesFocusMixin } from '@justeattakeaway/pie-webc-core';

@safeCustomElement('pie-component-name')
export class PieComponentName extends DelegatesFocusMixin(FormControlMixin(PieElement)) implements ComponentProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, values, defaultProps.value)
    public propertyName = defaultProps.propertyName;

    connectedCallback() { super.connectedCallback(); }
    disconnectedCallback() { super.disconnectedCallback(); }

    render() {
        return html`...`;
    }
}
```

### Versioning & Publishing

1. **Changesets**: Use `yarn changeset` to create version bump intent
2. **Versioning**: Semantic versioning (MAJOR.MINOR.PATCH) per package
3. **Publishing**: Automated via `yarn changeset:publish` after PR merge
4. **React Wrappers**: Auto-generated on build via `yarn build:react-wrapper`

### Error Handling

- Use native HTML form validation where applicable
- Use Lit's `ifDefined` directive for optional attributes
- Validate props with `@validPropertyValues` decorator
- Add event listeners in `connectedCallback`, remove in `disconnectedCallback`
- Handle cleanup in `disconnectedCallback` to prevent memory leaks

## Governance

### Constitutional Authority

This constitution supersedes all other development practices. When conflicts arise between this document and other guidelines (README, wiki, Storybook docs), this constitution takes precedence.

### Amendment Process

1. **Proposal**: Document proposed change with rationale in GitHub issue
2. **Review**: Design System team reviews impact on existing components
3. **Approval**: Requires majority approval from Design System core team
4. **Migration**: Create migration plan for affected components before adopting change
5. **Version Bump**: Increment constitution version according to semantic versioning:
   - **MAJOR**: Backward incompatible changes (e.g., removing a principle, changing tech stack)
   - **MINOR**: New principles or materially expanded guidance
   - **PATCH**: Clarifications, typo fixes, non-semantic refinements

### Compliance Review

- All PRs MUST verify compliance with Core Principles (automated via CI + manual review)
- Component complexity MUST be justified in PR description when it violates simplicity principles
- Use AGENTS.md for detailed runtime development guidance (this constitution for governance)

### Enforcement

- **Pre-commit**: Husky hooks enforce commit format, linting
- **CI**: GitHub Actions enforce all tests, builds, and type checks
- **Code Review**: Human reviewers verify accessibility, component architecture, test coverage
- **Blocking**: PRs that violate NON-NEGOTIABLE principles MUST NOT be merged

**Version**: 1.0.0 | **Ratified**: 2026-02-19 | **Last Amended**: 2026-02-19

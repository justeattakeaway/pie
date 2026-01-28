# PIE Web Component Development Tenets

This document outlines the core principles, patterns, and requirements for building web components in the PIE Design System. These tenets ensure consistency, quality, and maintainability across all components.

---

## Summary

These tenets guide every decision in PIE component development:

1. [**Controlled components**](#controlled-components) — State flows down, events flow up
2. [**SSR compatible**](#ssr-compatibility) — No browser APIs during render
3. [**Native APIs first**](#native-browser-apis-first) — Browser APIs over custom implementations
4. [**Framework agnostic**](#framework-agnostic) — Web standards over framework abstractions
5. [**Consistent APIs**](#property-naming-consistency) — Same names for same concepts
6. [**Boolean naming**](#boolean-property-naming) — Use `is`/`has` prefixes for booleans
7. [**Event conventions**](#event-conventions) — Prefix custom events with `pie-`
8. [**Design tokens**](#design-token-usage) — Use tokens, not hardcoded values
9. [**CSS variable overrides**](#css-variable-overrides) — Override variables, not properties
10. [**CSS over JavaScript**](#css-over-javascript) — Prefer declarative CSS solutions
11. [**Logical CSS properties**](#logical-css-properties) — Use logical properties for RTL support
12. [**Reduced motion**](#reduced-motion-support) — Respect `prefers-reduced-motion`
13. [**PIE icons only**](#icons-from-pie-icons-webc-only) — Use `pie-icons-webc`, nothing else
14. [**Limited customisation**](#limited-style-customisation) — Consistency over flexibility
15. [**Use the generator**](#use-the-component-generator) — Always scaffold new components with the generator
16. [**Composition via mixins**](#mixin-based-composition) — Lean components, shared behaviours
17. [**Reusable decorators**](#custom-decorators) — Extract property-level logic into decorators
18. [**Bundle size awareness**](#bundle-size-awareness) — Monitor size, justify increases
19. [**Semantic HTML**](#semantic-valid-html) — Valid, meaningful markup even inside shadow DOM
20. [**JSDoc for slots/events**](#jsdoc-for-slots-and-events) — Required for manifest and React type generation
21. [**Clean up listeners**](#event-listener-cleanup) — Use AbortController for event listener removal
22. [**React types verified**](#react-integration) — Generated React interfaces must be inspected
23. [**Browser-tested**](#browser-based-testing) — Real browsers, not simulated environments
24. [**User-focused testing**](#user-focused-testing) — Test behaviour, not implementation
25. [**Accessible by default**](#accessibility-testing) — WCAG 2.1 AA compliance
26. [**Visual regression**](#visual-regression-testing) — Percy tests for visual changes
27. [**Fully documented**](#storybook-documentation) — Storybook and README for every component
28. [**Integration proven**](#integration-testing-pie-aperture) — Validated in pie-aperture across frameworks

---

## Core Philosophy

### Controlled Components

Components in PIE do not manage their own state. They are "views" of state provided by the consuming application.

**The principle:** A component receives its state through properties and emits events to signal user intent. It never mutates its own state in response to user actions.

**Example — Modal:**
```typescript
// The modal receives `isOpen` as a property
<pie-modal isOpen="true">...</pie-modal>

// When the user clicks the close button, the modal emits an event
// but does NOT close itself
this.dispatchEvent(new CustomEvent('pie-modal-close'));

// The consumer handles the event and updates the state
modal.addEventListener('pie-modal-close', () => {
  this.isModalOpen = false; // Consumer controls the state
});
```

**Why this matters:**
- **Predictability:** State changes are explicit and traceable. There's no hidden internal state that can get out of sync with your application.
- **Testability:** Tests control component state directly via properties and assert outputs. No need to simulate complex interaction sequences to reach a particular state.
- **Framework integration:** Works naturally with React, Vue, Angular, and other frameworks' state management patterns. The component doesn't fight against unidirectional data flow.
- **Debugging:** When something goes wrong, the state flow is clear. The component shows what it's told to show.

**Internal UI state exception:** Purely visual, non-semantic state (hover effects, focus rings, animation progress) can be managed internally as it doesn't affect the component's "value" or semantic state.

---

### SSR Compatibility

Every component must work with server-side rendering. Components must not rely on browser APIs during initial render.

**The principle:** Components should render meaningful output on the server without access to `window`, `document`, `localStorage`, or other browser-only APIs.

**Why this matters:**
- PIE components are used in Next.js, Nuxt, and other SSR frameworks
- Server-rendered pages improve performance and SEO
- Hydration errors occur when server and client output differ

**Guidelines:**
- Never access browser APIs at the module level or during construction
- Guard browser API usage behind lifecycle callbacks (`connectedCallback`, `firstUpdated`) or environment checks
- Avoid side effects during property initialization

```typescript
// ❌ Bad: Browser API at construction
constructor() {
  super();
  this.viewportWidth = window.innerWidth;
}

// ✅ Good: Browser API in lifecycle callback
connectedCallback() {
  super.connectedCallback();
  if (typeof window !== 'undefined') {
    this.viewportWidth = window.innerWidth;
  }
}
```

---

### Native Browser APIs First

When implementing component behaviour, prioritise native browser APIs over custom implementations.

**The principle:** The browser provides well-tested, accessible, and performant APIs for many common behaviours. Custom implementations should only be used when native APIs are insufficient.

**Examples:**

| Behavior | Prefer | Avoid |
|----------|--------|-------|
| Form submission | `ElementInternals` API via `FormControlMixin` | Custom form handling |
| Focus management | Native `focus()`, `tabindex`, `delegatesFocus` | Custom focus tracking |
| Dialogs | `<dialog>` element with `showModal()` | Custom overlay with focus traps |
| Validation | Constraint Validation API | Custom validation state management |
| Click outside | `CloseWatcher` API (where supported) | Custom document click listeners |

**Why this matters:**
- **Accessibility:** Native APIs have built-in accessibility that custom implementations must manually replicate
- **User expectations:** Native behaviours work as users expect (keyboard shortcuts, screen reader announcements)
- **Maintenance:** Less code to maintain; browser vendors handle edge cases and bugs
- **Performance:** Native implementations are optimised at the engine level
- **Future-proofing:** Native APIs improve over time without requiring component updates

**When to use custom behaviour:**
- The native API doesn't exist or has insufficient browser support
- The native API doesn't meet specific UX requirements after careful evaluation
- Polyfilling is required for browser support, but still following the native API shape

```typescript
// ✅ Good: Using native dialog element
render() {
  return html`
    <dialog @close=${this.handleClose}>
      <slot></slot>
    </dialog>
  `;
}

// ❌ Avoid: Custom overlay without native dialog benefits
render() {
  return html`
    <div class="overlay" role="dialog" aria-modal="true">
      <slot></slot>
    </div>
  `;
}
```

---

### Framework Agnostic

PIE components are built as native web components using Lit. They work with any framework or no framework at all.

**The principle:** Web components are a web standard. By building on standards rather than framework-specific abstractions, PIE components work everywhere HTML works.

**What this enables:**
- Use in React, Vue, Angular, Svelte, or vanilla JavaScript
- No framework lock-in for consuming applications
- Future-proof against framework churn
- React wrappers are generated automatically for improved DX in React applications

---

## API Design

### Property Naming Consistency

Use identical property names for identical concepts across all components. When a consumer learns one PIE component, they should be able to predict the API of others.

**The principle:** A shared vocabulary reduces cognitive load. Before naming a property, check existing components for precedent.

**Standard property names:**

| Property | Usage | Components |
|----------|-------|------------|
| `variant` | Visual style variation | button, icon-button, chip, tag, notification |
| `size` | Size variation | button, input, avatar |
| `disabled` | Disabled state | All interactive components |
| `isOpen` | Open/closed state | modal, dropdown, drawer |
| `isLoading` | Loading state | button, card |

**When adding a new component:** Review existing components for similar properties. If an established name exists for your concept, use it.

---

### Boolean Property Naming

Boolean properties use `is` or `has` prefixes to make their purpose immediately clear.

**The principle:** Boolean properties should read as questions that can be answered with yes/no.

**Conventions:**
- **`is` prefix:** For state or condition — `isOpen`, `isLoading`, `isExpanded`, `isFullWidth`
- **`has` prefix:** For presence or feature enablement — `hasCloseButton`, `hasBackdrop`, `hasIcon`

**Exception:** `disabled` does not use the `is` prefix. This aligns with the native HTML `disabled` attribute and maintains familiarity for developers.

```typescript
// ✅ Good
isOpen: boolean
hasCloseButton: boolean
disabled: boolean

// ❌ Bad
open: boolean
closeButton: boolean
isDisabled: boolean
```

---

### Event Conventions

Components emit events prefixed with `pie-` to signal user intent or state change requests.

**The principle:** Events communicate intent from component to consumer. The consumer decides how to respond.

**Guidelines:**
- Prefer native events when they bubble naturally and suit the use case
- Use events for component-specific behaviours or when native events don't bubble through shadow DOM
- Events should be prefixed with `pie-` followed by the component name or action
- Events signal intent, not completed actions (aligns with controlled component philosophy)
- Use `new Event()` rather than `new CustomEvent()` unless you need to pass data via `detail`

```typescript
// ✅ Good: Simple Event (preferred)
this.dispatchEvent(new Event('pie-modal-close', {
  bubbles: true,
  composed: true
}));

// ✅ Also fine: CustomEvent when you need to pass data
this.dispatchEvent(new CustomEvent('pie-input-change', {
  bubbles: true,
  composed: true,
  detail: { value: this.value }
}));
```

---

## Styling

### Design Token Usage

All visual properties must use PIE design tokens. Hardcoded values break theming and brand consistency.

**The principle:** Design tokens are the single source of truth for colours, spacing, typography, and other visual properties. They enable theming, dark mode, and brand consistency.

**Usage:**
```scss
// ✅ Good: Using design tokens
.c-button {
  background-color: var(--dt-color-interactive-brand);
  padding: var(--dt-spacing-b);
  font-family: var(--dt-font-body-l-family);
}

// ❌ Bad: Hardcoded values
.c-button {
  background-color: #ff6900;
  padding: 8px;
  font-family: Arial, sans-serif;
}
```

---

### CSS Variable Overrides

When a property changes based on state, variant, or context, define the property once using a CSS variable, then override the variable value — not the property itself.

**The principle:** Write each CSS property declaration once. Control variations by changing variable values, not by redeclaring properties.

**Example:**

```scss
// ✅ Good: Property defined once, variable overridden
.c-button {
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);

  // Default values
  --btn-bg-color: var(--dt-color-interactive-brand);
  --btn-text-color: var(--dt-color-content-interactive-primary);

  // Variants override the variables
  &--secondary {
    --btn-bg-color: var(--dt-color-interactive-secondary);
  }

  &:hover {
    --btn-bg-color: var(--dt-color-interactive-brand-hover);
  }

  &:disabled {
    --btn-bg-color: var(--dt-color-disabled-01);
    --btn-text-color: var(--dt-color-content-disabled);
  }
}

// ❌ Bad: Property redeclared multiple times
.c-button {
  background-color: var(--dt-color-interactive-brand);
  color: var(--dt-color-content-interactive-primary);

  &--secondary {
    background-color: var(--dt-color-interactive-secondary);
  }

  &:hover {
    background-color: var(--dt-color-interactive-brand-hover);
  }

  &:disabled {
    background-color: var(--dt-color-disabled-01);
    color: var(--dt-color-content-disabled);
  }
}
```

**Why this matters:**
- **Single source of truth:** Each property is declared in one place, making it easier to understand and modify
- **Reduced specificity battles:** Variable overrides don't increase specificity, avoiding cascade conflicts
- **Easier debugging:** When something looks wrong, you only need to check variable values, not hunt for property redeclarations
- **Smaller bundle size:** Less repetition means smaller CSS output
- **Maintainability:** Adding a new variant only requires setting variable values, not remembering every property to override

**When to apply:** Any property that changes based on state (`:hover`, `:focus`, `:disabled`), variant (`--primary`, `--secondary`), or context (RTL, responsive).

---

### CSS Over JavaScript

When a solution can be achieved with CSS or JavaScript, prefer CSS.

**The principle:** CSS is declarative, performant, and handled by the browser's rendering engine. JavaScript solutions for layout and styling add complexity, bundle size, and potential for bugs.

**Examples:**

| Requirement | Prefer (CSS) | Avoid (JS) |
|-------------|--------------|------------|
| Responsive layout | Media queries, container queries | `ResizeObserver` + class toggling |
| Show/hide content | `:empty`, `[hidden]`, media queries | Conditional rendering based on viewport |
| Hover/focus states | `:hover`, `:focus-visible` | Mouse/focus event listeners |
| Dark mode | `prefers-color-scheme` media query | JS theme detection |
| Animations | CSS transitions, `@keyframes` | JavaScript animation libraries |
| Truncation | `text-overflow: ellipsis` | JS string truncation |

**Why CSS is preferred:**
- **Performance:** CSS is GPU-accelerated and doesn't block the main thread
- **No JavaScript required:** Works even if JS fails or is delayed
- **Less code:** Declarative rules vs imperative logic
- **Browser-optimised:** Browsers are highly optimised for CSS processing
- **SSR-friendly:** CSS works immediately; JS-based solutions may flash or shift

**When JavaScript is appropriate:**
- The CSS solution has insufficient browser support
- Complex logic that CSS cannot express (e.g., intersection-based behaviours)
- User interactions that require programmatic responses
- When you need to coordinate with component state

```scss
// ✅ Good: CSS media query
.c-modal__sidebar {
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
}

// ❌ Avoid: JS-based responsive logic
// (unless there's a specific reason CSS won't work)
```

---

### Logical CSS Properties

Use logical CSS properties instead of directional properties. This ensures components work correctly in both left-to-right (LTR) and right-to-left (RTL) layouts.

**The principle:** Logical properties adapt automatically to text direction. Directional properties don't.

**Mapping:**

| Directional (avoid) | Logical (prefer) |
|---------------------|------------------|
| `padding-left` | `padding-inline-start` |
| `padding-right` | `padding-inline-end` |
| `margin-left` | `margin-inline-start` |
| `margin-right` | `margin-inline-end` |
| `border-left` | `border-inline-start` |
| `text-align: left` | `text-align: start` |
| `left` / `right` (positioning) | `inset-inline-start` / `inset-inline-end` |

**Important:** Avoid shorthand logical properties (`padding-inline`, `margin-block`) due to Safari 14/15 support issues. Use the long-form equivalents instead.

```scss
// ✅ Good: Logical properties (long-form)
.c-input {
  padding-inline-start: var(--input-padding);
  padding-inline-end: var(--input-padding);
  margin-block-start: var(--input-margin);
  margin-block-end: var(--input-margin);
}

// ❌ Bad: Directional properties
.c-input {
  padding-left: var(--input-padding);
  padding-right: var(--input-padding);
}

// ❌ Bad: Shorthand logical properties (Safari issues)
.c-input {
  padding-inline: var(--input-padding);
  margin-block: var(--input-margin);
}
```

**Why this matters:**
- Components automatically adapt to RTL languages (Arabic, Hebrew, etc.)
- No separate RTL stylesheets needed
- Enforced by Stylelint rules

---

### Reduced Motion Support

All animations and transitions must respect the user's motion preferences. Users who experience motion sickness or vestibular disorders can enable reduced motion in their operating system.

**The principle:** Animations are an enhancement, not a requirement. When a user prefers reduced motion, honour that preference.

**Implementation:**

```scss
// ✅ Good: Animation respects user preference
.c-modal {
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--dt-motion-timing-200) var(--dt-motion-easing-out);
  }
}

// ❌ Bad: Animation ignores user preference
.c-modal {
  transition: transform 200ms ease-out;
}
```

**Guidelines:**
- Wrap all animations and transitions in `@media (prefers-reduced-motion: no-preference)`
- Use design tokens for timing (`--dt-motion-timing-*`) and easing (`--dt-motion-easing-*`)
- Exit transitions should be faster than entrance transitions (100ms vs 200ms)
- Consider disabling animations entirely rather than just reducing them

**Why this matters:**
- **Accessibility:** Motion can cause nausea, dizziness, or seizures for some users
- **User respect:** Users explicitly requested reduced motion; honour it
- **WCAG compliance:** Relates to WCAG 2.1 Success Criterion 2.3.3

---

### Icons from pie-icons-webc Only

All icons used in components must come from `@justeattakeaway/pie-icons-webc`. Do not use SVGs directly, icon fonts, or third-party icon libraries.

**The principle:** A single icon source ensures visual consistency, proper sizing, and alignment with the design system.

**Usage:**

```typescript
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';

render() {
  return html`
    <button>
      <icon-close></icon-close>
      Close
    </button>
  `;
}
```

**Icon sizing:**
- Small icons: `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`
- Large icons: multiples of 8 starting from 32 (`32`, `40`, `48`, etc.)
- Within components, use `--icon-size-override` CSS variable to control sizing

**Why this matters:**
- **Consistency:** All icons share the same visual style and weight
- **Accessibility:** PIE icons include proper ARIA attributes
- **Maintenance:** Icon updates are centralised in one package
- **Bundle efficiency:** Tree-shaking works correctly with the webc package

**The rule:** If an icon doesn't exist in `pie-icons-webc`, request it from the design team. Don't use alternatives.

---

### Limited Style Customisation

PIE components intentionally limit style customisation to maintain brand consistency across all consuming applications.

**The principle:** A design system's value lies in consistency. Excessive customisation options lead to off-brand implementations and undermine the purpose of having a shared component library.

**Customisation hierarchy (in order of preference):**

1. **Properties first:** Visual variations should be controlled via component properties (e.g., `variant="primary"`, `size="large"`). This is the preferred approach as it keeps customisation within designed boundaries.

2. **CSS slots (rare):** For targeted override points where property-based control isn't sufficient. These are intentional extension points, not arbitrary styling hooks.

3. **CSS custom properties (rare):** Exposed variables for specific, justified overrides. These should be documented and used sparingly.

**Why we limit customisation:**
- Ensures brand consistency across all JET products
- Reduces visual bugs and accessibility issues
- Simplifies component maintenance
- Shadow DOM encapsulation is a feature, not a limitation to work around

---

## Composition & Architecture

### Use the Component Generator

Always use the component generator when creating new components. Never scaffold a component manually.

**The principle:** The generator ensures every component starts with the correct structure, configuration, and boilerplate. Manual setup leads to inconsistencies and missed configuration.

**How to use:**

```bash
yarn generate:component
```

**What the generator provides:**
- Correct directory structure (`src/`, `test/`, config files)
- Pre-configured `package.json` with correct metadata
- TypeScript setup (`defs.ts`, `defs-react.ts`, `index.ts`)
- Test scaffolding (component, accessibility, visual)
- Build configuration (Vite, Playwright, TypeScript)
- README template with standard sections
- Storybook story template

**Why this matters:**
- **Consistency:** Every component follows the same structure
- **Completeness:** Nothing is forgotten (tests, configs, documentation)
- **Speed:** New components are ready for development immediately
- **Correctness:** Build and test configurations are correct from the start

**The rule:** If you're creating a new component, run the generator first. Customise from there.

---

### Mixin-Based Composition

Reusable behaviours are extracted into mixins. Components stay lean and compose the behaviours they need.

**The principle:** When you find yourself implementing the same behaviour in multiple components, extract it to a mixin. This follows composition over inheritance and allows components to inherit multiple behaviours.

**Core mixins:**

| Mixin | Purpose |
|-------|---------|
| `RtlMixin` | Right-to-left text direction support. Provides `isRTL` property and direction-aware rendering. |
| `FormControlMixin` | Form-associated custom element behaviour using the ElementInternals API. Enables components to participate in native form submission. |
| `DelegatesFocusMixin` | Delegates focus to the first focusable element within the shadow DOM. Essential for components wrapping native interactive elements. |

**Usage pattern:**
```typescript
// Components compose multiple mixins as needed
export class PieButton extends DelegatesFocusMixin(FormControlMixin(PieElement)) {
  // Component-specific implementation
}
```

**When to create a mixin:**
- The behaviour applies to multiple components
- The behaviour is self-contained and doesn't require component-specific knowledge
- The behaviour can be cleanly composed with other behaviours

---

### Custom Decorators

Reusable property-level logic is extracted into custom decorators. Like mixins, decorators enable code reuse without duplication.

**The principle:** When you find yourself writing the same property-related logic across components (validation, transformation, logging), extract it into a decorator. This keeps component code focused on its unique behaviour.

**Core decorators:**

| Decorator | Purpose |
|-----------|---------|
| `@safeCustomElement(tagName)` | Registers the custom element, handling duplicate registration gracefully. Prevents errors when components are loaded multiple times. |
| `@validPropertyValues(componentName, validValues[], defaultValue)` | Validates property values at runtime. Logs warnings for invalid values and falls back to the default. |
| `@requiredProperty(componentName)` | Marks a property as required. Logs an error if the property is not provided. |

**Usage pattern:**
```typescript
import { validPropertyValues, requiredProperty } from '@justeattakeaway/pie-webc-core';

export class PieButton extends PieElement {
  @property({ type: String })
  @validPropertyValues('pie-button', variants, 'primary')
  variant: Variant = 'primary';

  @property({ type: String })
  @requiredProperty('pie-button')
  label!: string;
}
```

**Why decorators over inline logic:**
- **Consistency:** Validation and error messages are uniform across all components
- **Maintainability:** Fix a bug once, fix it everywhere
- **Readability:** Component code stays focused on its unique behaviour
- **Discoverability:** Developers can see at a glance what behaviours a property has

**When to create a decorator:**
- The logic applies to individual properties (not whole components — use mixins for that)
- The logic is reusable across multiple components
- The logic involves cross-cutting concerns (validation, logging, transformation)

---

### Type Definitions Structure

Every component follows a consistent type definition pattern using a three-file approach.

**The principle:** Separating type definitions from implementation improves code organisation and enables better tree-shaking and IDE support.

**File structure:**
- `defs.ts` — Main TypeScript interfaces, prop types, and valid value constants
- `defs-react.ts` — React-specific wrapper types
- `index.ts` — Component implementation

**Pattern for valid values:**
```typescript
// defs.ts

// Define valid values as const array (enables runtime validation)
export const variants = ['primary', 'secondary', 'outline', 'ghost'] as const;

// Create union type from the array (enables compile-time type checking)
export type Variant = typeof variants[number];

// Define props interface
export interface ButtonProps {
  variant: Variant;
  disabled: boolean;
  isLoading: boolean;
}

// Define defaults
export const defaultProps: ButtonProps = {
  variant: 'primary',
  disabled: false,
  isLoading: false,
};
```

---

## Testing Requirements

### Browser-Based Testing

All component tests run in real browsers using Playwright, not simulated environments like jsdom.

**The principle:** Web components rely on browser APIs and behaviours that jsdom doesn't accurately simulate. Testing in real browsers catches issues that simulated environments miss.

**What this means:**
- Component tests use `@playwright/experimental-ct-web` for mounting components
- Tests run against real browser engines (Chromium, Firefox, WebKit)
- Shadow DOM, CSS, and browser APIs work as they do in production

---

### User-Focused Testing

Tests should validate behaviour that matters to users, not implementation details or exhaustive prop permutations.

**The principle:** Test what users do with components. A user doesn't care about internal state management — they care that clicking a button submits a form.

**Good tests verify:**
- User interactions produce expected outcomes
- Form submission works correctly
- Keyboard navigation functions properly
- Events fire when expected
- Accessibility requirements are met

**Avoid:**
- Testing every prop combination in isolation
- Testing internal implementation details
- Testing Lit/framework behaviour (that's their job)

---

### Accessibility Testing

Every component must pass automated accessibility testing against WCAG 2.1 Level A and AA standards.

**The principle:** Accessibility is not optional. Automated testing catches common issues; manual testing catches what automation misses.

**Automated testing:**
- axe-core integration via `@axe-core/playwright`
- Tests run against Storybook stories
- Tested rulesets: `wcag21a`, `wcag21aa`, `wcag143`, `cat.color`, `cat.aria`

**Implementation requirements:**
- Use semantic HTML elements where appropriate
- Provide proper ARIA attributes for custom interactive elements
- Ensure keyboard navigability
- Maintain sufficient colour contrast
- Support screen readers

---

### Visual Regression Testing

Components include Percy visual regression tests to catch unintended visual changes.

**The principle:** Visual bugs are real bugs. Automated visual testing catches CSS regressions that unit tests miss.

**Requirements:**
- Visual tests cover key component states
- Both LTR and RTL layouts are tested
- Tests use dedicated `.test.stories.ts` files when needed

---

### Integration Testing (pie-aperture)

Every component must be integrated into and tested in pie-aperture, the sandbox application.

**The principle:** Components must work correctly across the frameworks our consumers use. pie-aperture validates real-world integration.

**Frameworks tested:**
- React
- Vue
- Next.js (SSR)
- Nuxt (SSR)

**Why this matters:**
- Catches framework-specific issues
- Validates SSR compatibility in practice
- Ensures consistent behaviour across environments
- Reveals integration issues that isolated tests miss

---

## Documentation Requirements

### Storybook Documentation

Every component requires comprehensive Storybook documentation. This is the primary reference for consumers.

**The principle:** Good documentation is part of the component. A component without documentation is incomplete.

**Structure:**
- **Overview page:** Sourced from the component's `README.md` file
- **Interactive stories:** Demonstrate component variants and states
- **Controls:** Allow real-time prop manipulation

---

### README Requirements

Every component's README serves as its comprehensive documentation and must cover:

**Required sections:**
1. **Description:** What the component is and when to use it
2. **Props:** All properties with types, defaults, and descriptions
3. **Slots:** Named slots with their purpose
4. **Events:** Custom events emitted by the component
5. **Usage examples:** Code samples for common use cases
6. **Notable information:** Accessibility considerations, browser support notes, or other important details

**The README is imported directly into Storybook** as the overview page, so it should be written for that context — comprehensive but scannable.

---

## Technical Standards

### TypeScript

All components are written in TypeScript with strict type checking enabled.

**The principle:** Type safety catches errors at compile time, improves IDE support, and serves as documentation.

**Requirements:**
- All props are typed via interfaces in `defs.ts`
- Public methods and events are typed
- No `any` types without justification

---

### JSDoc for Slots and Events

Every slot and event must be documented using JSDoc comments at the top of the component's `index.ts` file.

**The principle:** Custom Elements Manifest generation and React interface generation both rely on JSDoc annotations. Without proper JSDoc, these tools cannot discover slots and events.

**Why this matters:**
- **Custom Elements Manifest:** The manifest is auto-generated from JSDoc and provides metadata for tooling, IDE support, and documentation
- **React interfaces:** Event JSDoc is required for generating correct React callback props
- **IDE support:** JSDoc enables autocomplete and inline documentation in consuming applications
- **Storybook:** Uses the manifest for controls and documentation

**Required format:**

```typescript
/**
 * @slot - The default slot for the modal content
 * @slot header - Content for the modal header
 * @slot footer - Content for the modal footer area
 *
 * @event {CustomEvent} pie-modal-close - Fired when the user requests to close the modal
 * @event {CustomEvent} pie-modal-open - Fired when the modal opens
 */
@safeCustomElement('pie-modal')
export class PieModal extends PieElement {
  // ...
}
```

**JSDoc conventions:**
- `@slot` — Use `-` for the default (unnamed) slot, otherwise provide the slot name
- `@event` — Include the event type (`CustomEvent`) and a description of when it fires
- Place JSDoc block immediately before the class declaration
- Keep descriptions concise but clear

**The rule:** If a component has slots or emits events, they must be documented in JSDoc. The build will generate manifests and React types from these annotations.

---

### Lit Framework

Components extend `PieElement` (which extends `LitElement`) and use Lit's reactive property system.

**Lit decorators:**
- `@property()` — Reactive properties that trigger re-render on change
- `@state()` — Internal reactive state (not exposed as attributes)

**PIE custom decorators** (see "Custom Decorators" section):
- `@safeCustomElement()` — Safe element registration
- `@validPropertyValues()` — Runtime property validation
- `@requiredProperty()` — Required property enforcement

---

### Event Listener Cleanup

When components add event listeners, they must be properly removed using an `AbortController` when the component is destroyed.

**The principle:** Event listeners that outlive their component cause memory leaks and unexpected behaviour. Using `AbortController` provides a clean, reliable pattern for cleanup.

**Why AbortController:**
- Single point of cleanup — one `abort()` call removes all associated listeners
- Works with multiple listeners without tracking each individually
- Native browser API (aligns with "Native APIs First")
- Cleaner than manual `removeEventListener` bookkeeping

**Implementation pattern:**

```typescript
export class PieExample extends PieElement {
  private abortController!: AbortController;

  connectedCallback() {
    super.connectedCallback();
    // Create controller when component connects
    this.abortController = new AbortController();

    // Pass signal to all event listeners
    window.addEventListener('resize', this.handleResize, {
      signal: this.abortController.signal
    });

    document.addEventListener('keydown', this.handleKeydown, {
      signal: this.abortController.signal
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Single call removes all listeners using this signal
    this.abortController.abort();
  }

  private handleResize = () => { /* ... */ };
  private handleKeydown = () => { /* ... */ };
}
```

**Why this matters:**
- **Memory leaks:** Listeners referencing destroyed components prevent garbage collection
- **Ghost behaviour:** Handlers firing on unmounted components cause bugs
- **Performance:** Accumulated orphaned listeners degrade performance over time

**The rule:** If you add a listener in `connectedCallback`, remove it in `disconnectedCallback` via `AbortController`.

---

### React Integration

Every component includes a React-specific interface (`defs-react.ts`) that enables proper TypeScript support in JSX.

**The principle:** React/JSX expects events as callback props (`onClose`) rather than event listeners (`@close`). We generate React interfaces to bridge this gap and provide a first-class developer experience for React consumers.

**How it works:**
- During build, React wrapper types are generated automatically
- Custom events are transformed to React callback prop naming conventions
- The `defs-react.ts` file contains these React-specific interfaces

**Event naming transformation:**

| Web Component Event | React Prop |
|---------------------|------------|
| `pie-modal-close` | `onPieModalClose` |
| `pie-switch-changed` | `onPieSwitchChanged` |

**Requirements:**
- React interfaces are generated automatically but **must be inspected** after changes
- Ensure event names transform correctly to idiomatic React props
- Verify the generated types are accurate for all props and events

```typescript
// defs-react.ts (generated)
import type { EventProps } from '@justeattakeaway/pie-webc-core/react';

// React interface includes callback props for events
export interface ModalReactProps extends ModalProps {
  onPieModalClose?: (event: CustomEvent) => void;
}
```

**Why this matters:**
- React is widely used by PIE consumers
- Proper TypeScript support improves developer experience
- Incorrect types lead to runtime bugs that TypeScript should have caught

---

### Shadow DOM

All components use Shadow DOM for style and DOM encapsulation.

**The principle:** Encapsulation prevents style leakage in both directions — component styles don't affect the page, and page styles don't break components.

**Benefits:**
- Predictable styling regardless of consuming application's CSS
- DOM encapsulation prevents external scripts from breaking components
- Scoped CSS without naming convention overhead

---

### Bundle Size Awareness

Every component's bundle size is monitored, and changes must be thoughtfully considered.

**The principle:** We don't enforce strict byte limits, but we do require awareness. Bundle size changes should be intentional, not accidental.

**How we monitor:**
- **Bundlewatch** tracks bundle sizes for every component
- CI reports size changes on pull requests
- Significant increases require justification in the PR

**Why this matters:**
- PIE components are downloaded by millions of users across JET platforms
- Small increases multiply across many components and many page loads
- Mobile users on slow connections are disproportionately affected
- Performance is a feature; bloat is a bug

**Guidelines:**
- Review bundlewatch reports on every PR
- Question unexpected size increases — did a new dependency slip in?
- Consider lazy-loading for heavy optional features
- Prefer native browser APIs over libraries (aligns with "Native APIs First")
- When size increases are justified (new features, accessibility improvements), document why

**What requires justification:**
- New dependencies
- Significant size increases (use judgment based on the component's baseline)
- Changes that affect multiple components (core packages, shared utilities)

The goal isn't to hit a number — it's to ensure every byte we ship earns its place.

---

### Semantic, Valid HTML

Even though Shadow DOM encapsulates our templates, the markup inside must always be semantic and valid HTML.

**The principle:** Encapsulation is not an excuse for poor markup. The HTML inside a component's shadow root should be as well-structured as any public-facing HTML.

**Why this matters:**
- **Accessibility:** Screen readers and assistive technologies traverse the shadow DOM. Semantic elements provide meaning and context that `<div>` and `<span>` cannot. A `<button>` announces as a button; a `<div @click>` does not.
- **Browser behaviour:** Semantic elements come with built-in behaviours — `<button>` handles keyboard activation, `<a>` handles navigation, `<form>` handles submission. Using the right element means less code and fewer bugs.
- **Maintainability:** Semantic markup is self-documenting. Future developers (and AI assistants) can understand the structure's intent at a glance.
- **Debugging:** Browser DevTools, accessibility inspectors, and testing tools all work better with semantic HTML.

**Guidelines:**

```html
<!-- ✅ Good: Semantic elements with clear purpose -->
<button type="button" class="c-modal__close">
  <pie-icon-close></pie-icon-close>
  <span class="sr-only">Close modal</span>
</button>

<nav aria-label="Pagination">
  <ul class="c-pagination__list">
    <li><a href="#" aria-current="page">1</a></li>
    <li><a href="#">2</a></li>
  </ul>
</nav>

<!-- ❌ Bad: Div soup with ARIA bolted on -->
<div class="close-btn" role="button" tabindex="0" @click=${this.close}>
  <pie-icon-close></pie-icon-close>
</div>

<div class="pagination" role="navigation">
  <div class="pagination-list" role="list">
    <div role="listitem"><div role="link">1</div></div>
  </div>
</div>
```

**The rule of thumb:** If a native HTML element exists for your purpose, use it. Only reach for ARIA roles when there is no semantic equivalent.

---

When in doubt, refer back to these principles. They exist to ensure PIE components are reliable, consistent, and maintainable.

# Feature Specification: PIE Radio CSS Mixins and Classes

**Feature Branch**: `001-pie-radio-css-classes`  
**Created**: 2026-02-19  
**Updated**: 2026-02-20  
**Status**: Draft  
**Input**: User description: "Provide all radio CSS as mixins in the helpers SCSS. PIE-CSS should provide these mixins, and also a generated CSS file that turns it all into exported CSS classes, so users have both options. Similar to how typography CSS works in the same package. Include native input example and parent interactions example (using mixins for setting radio hover/active states when parent is interacted with) in static radio stories."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Static Radio Markup Using CSS Classes (Priority: P1)

A developer needs to display a read-only radio button in a confirmation screen, receipt, or summary view where no interaction is required. They want to use native `<input type="radio">` elements styled with pre-generated CSS classes without needing SASS/SCSS compilation.

**Why this priority**: This is the core MVP requirement - providing visual-only radio representation without JavaScript overhead for static/read-only contexts. Pre-generated CSS classes enable usage without a build step.

**Independent Test**: Can be fully tested by applying CSS classes to native radio inputs and verifying visual match with pie-radio component in both unchecked and checked states.

**Acceptance Scenarios**:

1. **Given** a native input with `.c-radio-static` class, **When** rendered on page, **Then** it should visually match the unchecked pie-radio component
2. **Given** a native input with `.c-radio-static` class in checked state, **When** rendered on page, **Then** it should visually match the checked pie-radio component
3. **Given** a static radio element in documentation, **When** viewed, **Then** it should use the same design tokens as the pie-radio Web Component
4. **Given** a developer without SASS/SCSS build setup, **When** importing generated CSS file, **Then** they can use radio classes immediately

---

### User Story 2 - SASS/SCSS Mixins for Build-Time Consumers (Priority: P1)

A developer with a SASS/SCSS build pipeline wants to use mixins to include radio styles in their custom components, allowing for greater flexibility and smaller bundle sizes by only including the styles they need.

**Why this priority**: Co-equal with P1 as it serves the primary SASS/SCSS consumer base. Mixins are the preferred pattern in the PIE design system (matching typography approach) and enable efficient styling without class bloat.

**Independent Test**: Can be tested by importing mixins in a SASS file, calling them, and verifying compiled output matches expected styles.

**Acceptance Scenarios**:

1. **Given** a SASS file importing radio mixins, **When** `@include radio-static()` is called, **Then** compiled CSS should contain base radio styles
2. **Given** a developer needs only checked state styles, **When** they include only specific mixins, **Then** bundle should not contain unused state styles
3. **Given** a custom component using radio mixins, **When** compiled, **Then** styles should use the same design tokens as pie-radio component
4. **Given** documentation for mixins, **When** reviewed, **Then** all available mixins and their parameters should be documented

A developer needs to show disabled radio buttons in static mockups, form previews, or documentation without requiring the full Web Component.

**Why this priority**: Important for completeness but secondary to the basic checked/unchecked states. Disabled states are common in form previews and design documentation.

**Independent Test**: Can be tested independently by applying disabled CSS class modifier and verifying opacity and cursor changes match the Web Component's disabled state.

**Acceptance Scenarios**:

1. **Given** a static radio with disabled CSS class, **When** rendered, **Then** it should display with reduced opacity matching pie-radio disabled state
2. **Given** a disabled static radio, **When** hovered, **Then** cursor should show not-allowed state

---

### User Story 3 - Disabled State Representation (Priority: P2)

A developer needs to show disabled radio buttons in static mockups, form previews, or documentation without requiring the full Web Component.

**Why this priority**: Important for completeness but secondary to the basic checked/unchecked states. Disabled states are common in form previews and design documentation.

**Independent Test**: Can be tested independently by using disabled state mixin or CSS class modifier and verifying opacity and cursor changes match the Web Component's disabled state.

**Acceptance Scenarios**:

1. **Given** a static radio with disabled CSS class, **When** rendered, **Then** it should display with reduced opacity matching pie-radio disabled state
2. **Given** a SASS consumer using `@include radio-static-disabled()`, **When** compiled, **Then** disabled styles should match pie-radio component
3. **Given** a disabled static radio, **When** hovered, **Then** cursor should show not-allowed state

A developer building a form validation summary needs to show radio buttons in error state alongside validation messages, using only CSS without component JavaScript.

**Why this priority**: Nice-to-have for comprehensive state coverage. Error states are less common in static displays since errors typically occur in interactive contexts.

**Independent Test**: Can be tested by applying error CSS class modifier and verifying red border color matches the Web Component's error state.

**Acceptance Scenarios**:

1. **Given** a static radio with error CSS class, **When** rendered, **Then** it should display with error border color (red) matching pie-radio error state
2. **Given** an error state static radio, **When** displayed alongside validation text, **Then** colors should maintain proper contrast ratios

---

### User Story 4 - Error State for Form Validation Displays (Priority: P3)

A developer building a form validation summary needs to show radio buttons in error state alongside validation messages, using either mixins or CSS classes without component JavaScript.

**Why this priority**: Nice-to-have for comprehensive state coverage. Error states are less common in static displays since errors typically occur in interactive contexts.

**Independent Test**: Can be tested by applying error mixin or CSS class modifier and verifying red border color matches the Web Component's error state.

**Acceptance Scenarios**:

1. **Given** a static radio with `.c-radio-static--error` class, **When** rendered, **Then** it should display with error border color matching pie-radio error state
2. **Given** a SASS consumer using `@include radio-static-error()`, **When** compiled, **Then** error styles should match pie-radio component
3. **Given** an error state static radio, **When** displayed alongside validation text, **Then** colors should maintain proper contrast ratios

---

### User Story 5 - Interactive State Mixins for Parent Container Interactions (Priority: P2)

A developer building an interactive card component wants the radio button inside to visually respond when the parent card is hovered or focused, without making the radio itself interactive. They want to use SASS mixins to apply radio hover/focus/active styles when the parent container is interacted with.

**Why this priority**: Enables advanced UI patterns where non-interactive radios visually respond to parent container interactions, common in card-based selection interfaces. Secondary to basic static display but important for modern UI patterns.

**Independent Test**: Can be tested by using mixins in parent selector context and verifying visual appearance matches pie-radio interactive states.

**Acceptance Scenarios**:

1. **Given** a SASS file with `.card:hover .radio { @include radio-static-hover(); }`, **When** compiled and card is hovered, **Then** radio should display hover appearance matching pie-radio
2. **Given** a SASS file with `.card:active .radio { @include radio-static-active(); }`, **When** compiled and card is active, **Then** radio should display active appearance matching pie-radio
3. **Given** a SASS file with `.card:focus .radio { @include radio-static-focus(); }`, **When** compiled and card is focused, **Then** radio should display focus ring matching pie-radio
4. **Given** a CSS class user applying `.c-radio-static--hover` to a radio, **When** rendered, **Then** it should display hover state (for scenarios without build step)
5. **Given** a card with hover state using mixin, **When** card is hovered and radio is disabled, **Then** interactive styles should be suppressed

---

### User Story 6 - Storybook Examples for Both Approaches (Priority: P2)

A developer learning the PIE design system wants to see working examples of both the native input approach (using pre-generated CSS classes) and the parent interaction approach (using SASS mixins) in Storybook documentation.

**Why this priority**: Documentation and examples are critical for adoption but secondary to the implementation itself. Clear examples accelerate developer onboarding.

**Independent Test**: Can be tested by viewing Storybook stories and verifying both examples work correctly and demonstrate the intended patterns.

**Acceptance Scenarios**:

1. **Given** a Storybook story for "Native Input Example", **When** viewed, **Then** it should show radio buttons using only CSS classes with various states
2. **Given** a Storybook story for "Parent Interactions Example", **When** viewed, **Then** it should show a card component where hovering/focusing the card triggers radio state changes
3. **Given** the Parent Interactions example code, **When** reviewed, **Then** it should demonstrate SASS mixin usage for parent-triggered states
4. **Given** both Storybook examples, **When** interacted with, **Then** they should clearly show when to use each approach

---

### Edge Cases

- How does the CSS handle browser differences in how pseudo-elements render on input elements?
- What happens if design tokens are not loaded but CSS classes or mixins are used?
- How do the classes and mixins behave with different font sizes or container constraints?
- Will RTL (right-to-left) layouts work correctly with native input elements?
- Can interactive modifier classes/mixins be combined with checked/disabled/error states?
- Do interactive modifiers work correctly when applied to disabled radios (should they be suppressed)?
- What happens if a developer tries to use both a CSS class and a mixin for the same element?
- How does bundle size compare between using mixins (with tree-shaking) vs. pre-generated CSS classes?
- Can developers use mixins without importing the entire design token set?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide SASS mixins that replicate the unchecked visual state of pie-radio component
- **FR-002**: System MUST provide SASS mixins that replicate the checked visual state of pie-radio component
- **FR-003**: System MUST provide a generated CSS file with classes that consume these mixins for users without build tools
- **FR-004**: Mixins and generated CSS classes MUST use the same design tokens as the pie-radio Web Component for visual consistency
- **FR-005**: System MUST provide disabled state support via mixin and generated CSS class (using native `:disabled` pseudo-class)
- **FR-006**: System MUST provide error state mixin and generated CSS modifier class
- **FR-007**: Mixins and CSS classes MUST work on native `<input type="radio">` elements
- **FR-008**: Mixins MUST be exported from pie-css package helpers directory (not pie-radio component)
- **FR-009**: Generated CSS classes MUST be exported from pie-css package (separate compiled file)
- **FR-010**: CSS classes MUST follow existing naming conventions (`.c-*` prefix for components)
- **FR-011**: Base mixin MUST NOT include interactive behaviors (hover, focus, active) by default
- **FR-012**: System MUST provide separate mixin for hover state (`@mixin radio-static-hover()`)
- **FR-013**: System MUST provide separate mixin for active state (`@mixin radio-static-active()`)
- **FR-014**: System MUST provide separate mixin for focus state (`@mixin radio-static-focus()`)
- **FR-015**: Interactive state mixins MUST replicate the visual appearance of pie-radio interactive states
- **FR-016**: Interactive modifiers MUST NOT apply to disabled radios (suppressed when `:disabled` is present)
- **FR-017**: Interactive modifiers MUST work in combination with checked, disabled, and error states
- **FR-018**: Generated CSS classes MUST provide the same states as mixins (hover, active, focus modifiers: `.c-radio-static--hover`, etc.)
- **FR-019**: Mixins and CSS classes MUST maintain visual consistency across browsers that support modern CSS
- **FR-020**: System MUST follow the same pattern as typography mixins/classes in pie-css (mixin definitions + generated CSS file)
- **FR-021**: System MUST include documentation showing HTML structure and mixin usage
- **FR-022**: System MUST include documentation showing generated CSS class usage
- **FR-023**: System MUST include Storybook example showing native input with CSS classes
- **FR-024**: System MUST include Storybook example showing parent interactions using mixins
- **FR-025**: Generated CSS classes MUST be included in the compiled pie-css distribution files
- **FR-026**: Mixins MUST be importable individually to support tree-shaking and smaller bundle sizes

### Key Entities *(include if feature involves data)*

- **SASS Mixin Set**: Collection of SASS mixins for radio styling
  - Base mixin for radio input styling (`@mixin radio-static()`)
  - Checked state mixin (handles `:checked` pseudo-class internally)
  - Disabled state mixin (`@mixin radio-static-disabled()`, uses `:disabled` pseudo-class)
  - Error state mixin (`@mixin radio-static-error()`)
  - Hover state mixin (`@mixin radio-static-hover()`)
  - Active state mixin (`@mixin radio-static-active()`)
  - Focus state mixin (`@mixin radio-static-focus()`)
  
- **Generated CSS Class Set**: Pre-compiled CSS classes for non-build consumers
  - Base class for radio input styling (`.c-radio-static`)
  - Checked state support via `:checked` pseudo-class
  - Disabled state support via `:disabled` pseudo-class
  - Error state modifier class (`.c-radio-static--error`)
  - Hover state modifier class (`.c-radio-static--hover`)
  - Active state modifier class (`.c-radio-static--active`)
  - Focus state modifier class (`.c-radio-static--focus`)
  
- **HTML Structure Pattern**: Recommended markup pattern for applying CSS classes or using with mixins
  - Native `<input type="radio">` element
  - Required CSS class application (for CSS approach) or custom class (for mixin approach)
  - Optional interactive modifier classes for parent-triggered interactions

- **SASS Mixin Usage Pattern**: Pattern for using mixins in parent container contexts
  - Parent selector with pseudo-class (e.g., `.card:hover`)
  - Child selector targeting radio (e.g., `.card:hover .radio`)
  - `@include` directive applying interactive mixin (e.g., `@include radio-static-hover()`)
  
- **Build Artifact Structure**: How mixins and classes are distributed
  - Helpers SCSS file with mixin definitions (e.g., `scss/helpers/_radio.scss`)
  - Generated CSS file with classes (e.g., `dist/helpers/radio.css`)
  - Main index files importing/exporting appropriately

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Developers can create a visually identical radio button using only HTML and CSS classes in under 30 seconds
- **SC-002**: Developers can create a visually identical radio button using SASS mixins in under 60 seconds (including build step)
- **SC-003**: Generated CSS classes render with pixel-perfect accuracy (±1px) compared to pie-radio Web Component in checked and unchecked states
- **SC-004**: Mixin-generated styles render with pixel-perfect accuracy (±1px) compared to pie-radio Web Component in all states
- **SC-005**: Interactive modifier classes and mixins render with pixel-perfect accuracy (±1px) compared to pie-radio Web Component hover/active/focus states
- **SC-006**: CSS classes and mixins work consistently across Chrome, Firefox, Safari, and Edge (latest versions)
- **SC-007**: Bundle size impact is minimal (<3KB for generated CSS file with all radio classes including interactive modifiers)
- **SC-008**: Using only needed mixins results in at least 40% smaller bundle size compared to including all generated CSS classes
- **SC-009**: Documentation includes at least 6 usage examples (CSS classes: unchecked, checked, disabled, error; Mixins: basic usage, parent interaction pattern)
- **SC-010**: CSS classes and mixins successfully integrate with existing pie-css build process without breaking changes
- **SC-011**: Visual regression tests show no unintended differences between static CSS version, mixin version, and Web Component
- **SC-012**: SASS mixin compilation succeeds without errors for all interactive state mixins
- **SC-013**: Interactive modifiers are correctly suppressed on disabled radios (no visual change when disabled)
- **SC-014**: Storybook includes 2 working examples: native input with classes, and parent interaction with mixins
- **SC-015**: Generated CSS file structure matches typography CSS pattern (helpers subdirectory, naming conventions)

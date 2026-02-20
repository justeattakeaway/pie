# Research: PIE Radio CSS Mixins and Classes

**Feature**: 001-pie-radio-css-classes  
**Date**: 2026-02-20  
**Status**: Complete (Amended for Mixin Architecture)

## Research Questions

This document resolves technical approach questions for implementing radio button styling as SASS mixins with generated CSS classes, following the typography pattern established in pie-css.

---

## 1. Mixin-First Architecture (not `@extend` with placeholders)

### Decision: Use `@mixin` / `@include` Pattern

**Rationale**:
- Matches existing typography pattern in `scss/_internal/typography.scss` (uses `@mixin font-theme()`)
- Mixins provide better control for consumers - they can include only what they need
- Avoids CSS bloat from `@extend` which can create complex selector chains
- Enables tree-shaking - consumers using mixins directly get smaller bundles
- Better DX: `@include radio-static()` is more explicit than `@extend %c-radio-static`

**Chosen Pattern** (from typography):
```scss
// In helpers/_radio.scss - Define mixins
@mixin radio-static() {
    /* base styles */
}

@mixin radio-static-hover() {
    /* hover styles */
}
// etc.

// In _internal/radio.scss - Generate classes
.c-radio-static {
    @include radio-static();
}

.c-radio-static--hover {
    @include radio-static-hover();
}
```

**Alternatives Considered**:
- **`@extend` with placeholders** - Original approach in existing code, but:
  - Creates selector coupling (all extends share same output)
  - Cannot parameterize (mixins can accept parameters if needed later)
  - Typography CSS doesn't use this pattern
  - Harder to tree-shake unused styles
- **CSS classes only** - Too limiting:
  - No flexibility for SASS consumers
  - Forces everyone to load all states even if unused
  - Can't customize styles at compile time

**References**:
- Existing file: `packages/tools/pie-css/scss/_internal/typography.scss` (lines 12-16)
- Typography uses: `@mixin font-theme($token-name)` + loop to generate classes

---

---

## 2. HTML Structure for Native Input Elements

### Decision: Use Native `<input type="radio">` with Single Class

**Rationale**:
- The existing `helpers/_radio.scss` already implements styles for native radio inputs using `appearance: none`
- Mixins will work on native `<input type="radio">` elements (not div/span wrappers)
- Pseudo-elements (`:before`, `:after`) work on inputs in modern browsers
- Checked state uses native `:checked` pseudo-class (no manual class management)
- Disabled state uses native `:disabled` pseudo-class

**Chosen Structure**:
```html
<!-- For CSS class users -->
<input type="radio" class="c-radio-static" name="example">
<input type="radio" class="c-radio-static" name="example" checked>
<input type="radio" class="c-radio-static" name="example" disabled>

<!-- For SASS mixin users -->
<input type="radio" class="my-custom-radio" name="example">
```

```scss
// Consumer's SCSS
.my-custom-radio {
    @include radio-static();
}

// Parent interaction pattern
.my-card {
    &:hover .my-custom-radio {
        @include radio-static-hover();
    }
}
```

**Key Benefits**:
- Single element (simpler than two-element structure)
- Native form functionality preserved (if needed for examples)
- `:checked` and `:disabled` work automatically
- Matches existing implementation in `helpers/_radio.scss` (lines 8-80)

**Alternatives Considered**:
- **Two-element structure (div + span)** - More complex, loses native semantics, not needed for modern browsers
- **Custom element wrapper** - Would require Web Component, defeats purpose of CSS-only solution

---

## 3. Mixin Structure and State Handling

### Decision: Base Mixin + Separate State Mixins

**Rationale**:
- Base mixin includes checked/disabled pseudo-classes internally (always needed)
- Interactive states (hover/active/focus) are separate mixins (optional, for parent interactions)
- Error state is separate mixin (optional modifier)

**Mixin Inventory**:

1. **`@mixin radio-static()`** - Base styles
   - Includes `:checked` and `:disabled` pseudo-class handling
   - Sets up CSS custom properties
   - Creates border circle, filled circle (`:before`), and center dot (`:after`)

2. **`@mixin radio-static-error()`** - Error state
   - Overrides color variables for error appearance

3. **`@mixin radio-static-hover()`** - Hover appearance
   - For parent interaction pattern: `.card:hover .radio { @include radio-static-hover(); }`
   - Does NOT apply to `:disabled` radios

4. **`@mixin radio-static-active()`** - Active/pressed appearance
   - For parent interaction pattern: `.card:active .radio { @include radio-static-active(); }`

5. **`@mixin radio-static-focus()`** - Focus ring appearance
   - For parent interaction pattern: `.card:focus .radio { @include radio-static-focus(); }`

**Why Separate Interactive Mixins?**
- Enables pattern: `.card:hover .radio { @include radio-static-hover(); }`
- Prevents unintended interactive behavior on static radios
- CSS consumers can use modifier classes: `.c-radio-static.c-radio-static--hover`
- Matches requirement FR-011: "Base mixin MUST NOT include interactive behaviors by default"

**Example Usage**:
```scss
// Basic usage
.my-radio {
    @include radio-static();
}

// Parent interaction pattern (from Storybook example)
.my-card {
    .my-radio {
        @include radio-static();
    }
    
    &:hover .my-radio {
        @include radio-static-hover();
    }
    
    &:active .my-radio {
        @include radio-static-active();
    }
    
    &:focus .my-radio {
        @include radio-static-focus();
    }
}
```

---

**Rationale**:
The pie-radio Web Component uses pseudo-elements on the `<input>` element:
- `:before` → Filled background circle (scales from 0 to 1 when checked)
- `:after` → Center dot (scales from 0 to 1 when checked)

For static CSS classes, we replicate this on the `.c-radio-static__input` element.

**Implementation Details**:

```css
.c-radio-static__input {
    /* Base circle with border */
    display: block;
    width: var(--radio-size);
    height: var(--radio-size);
    border: var(--radio-border-width) solid var(--radio-border-color);
    border-radius: 50%;
    position: relative;
    background-color: var(--radio-bg-color);
}

.c-radio-static__input:before {
    /* Filled background circle */
    content: '';
    display: block;
    position: absolute;
    inset: calc(var(--radio-border-width) * -1);
    border-radius: inherit;
    background-color: var(--radio-bg-color--checked);
    transform: scale(0); /* Hidden by default */
}

.c-radio-static--checked .c-radio-static__input:before {
    transform: scale(1); /* Visible when checked */
}

.c-radio-static__input:after {
    /* Center dot */
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--radio-dot-size);
    height: var(--radio-dot-size);
    background-color: var(--radio-dot-bg-color);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0); /* Hidden by default */
}

.c-radio-static--checked .c-radio-static__input:after {
    transform: translate(-50%, -50%) scale(1); /* Visible when checked */
}
```

**Key Techniques**:
1. **`transform: scale(0/1)`** - Hide/show pseudo-elements (matches Web Component behavior)
2. **`inset: calc(var(--radio-border-width) * -1)`** - Position filled circle to overlap border
3. **`translate(-50%, -50%)`** - Center the dot absolutely
4. **`border-radius: inherit`** - Ensure perfect circles

**Browser Compatibility**:
- `:before` and `:after` - Supported in all modern browsers
- CSS custom properties - Supported in all modern browsers (IE11+ with fallbacks if needed)
- `inset` property - Supported in Chrome 87+, Firefox 66+, Safari 14.1+ (acceptable for modern browser target)
- `transform: scale()` - Universal support

**Alternatives Considered**:

| Approach | Pros | Cons | Verdict |
|----------|------|------|---------|
| Use SVG as background-image | Single element possible | Loses design token flexibility, harder to maintain | **REJECTED** |
| Use gradient backgrounds | Single element possible | Complex, brittle, poor browser support for advanced gradients | **REJECTED** |
| Pseudo-elements on container | Less nested CSS | Cannot target checked state easily with modifiers | **REJECTED** |
| Pseudo-elements on inner element | Matches Web Component structure, clean state management | Requires nested element | **ACCEPTED** |

---

## 3. Design Token Mapping and CSS Variable Usage

### Decision: Direct Reference to Design Tokens with CSS Custom Properties

**Rationale**:
- The pie-css package already imports design tokens: `@import '@justeat/pie-design-tokens/dist/jet.css';`
- All design token CSS variables are available globally (e.g., `--dt-color-interactive-brand`)
- The pie-radio Web Component defines component-scoped CSS variables that reference design tokens
- Static CSS classes should follow the same pattern for maintainability

**Design Token Mapping**:

| Visual Element | CSS Variable | Design Token Reference | Purpose |
|----------------|--------------|------------------------|---------|
| Border color (default) | `--radio-border-color` | `var(--dt-color-border-form)` | Outer circle border |
| Border color (error) | `--radio-border-color` | `var(--dt-color-support-error)` | Error state override |
| Background (unchecked) | `--radio-bg-color` | `transparent` | No fill when unchecked |
| Background (checked) | `--radio-bg-color--checked` | `var(--dt-color-interactive-brand)` | Filled circle color |
| Background (checked, error) | `--radio-bg-color--checked` | `var(--dt-color-support-error)` | Error state override |
| Center dot color | `--radio-dot-bg-color` | `var(--dt-color-content-interactive-primary)` | White dot in center |
| Background (disabled) | `--radio-bg-color` | `var(--dt-color-disabled-01)` | Greyed out appearance |
| Border (disabled) | `--radio-border-color` | `var(--dt-color-border-default)` | Lighter border |
| Dot (disabled, checked) | `--radio-dot-bg-color` | `var(--dt-color-content-disabled)` | Greyed dot |
| Sizing (circle) | `--radio-size` | `24px` | Standard PIE size |
| Sizing (dot) | `--radio-dot-size` | `8px` | Center dot size |
| Border width | `--radio-border-width` | `1px` | Consistent border |

**Implementation Strategy**:

```css
.c-radio-static {
    /* Define component-scoped CSS variables */
    --radio-dot-bg-color: var(--dt-color-content-interactive-primary);
    --radio-bg-color: transparent;
    --radio-bg-color--checked: var(--dt-color-interactive-brand);
    --radio-border-color: var(--dt-color-border-form);
    --radio-size: 24px;
    --radio-dot-size: 8px;
    --radio-border-width: 1px;
}

.c-radio-static--error {
    /* Override for error state */
    --radio-bg-color--checked: var(--dt-color-support-error);
    --radio-border-color: var(--dt-color-support-error);
}

.c-radio-static--disabled {
    /* Override for disabled state */
    --radio-bg-color: var(--dt-color-disabled-01);
    --radio-border-color: var(--dt-color-border-default);
}

.c-radio-static--checked.c-radio-static--disabled {
    /* Override for checked + disabled state */
    --radio-dot-bg-color: var(--dt-color-content-disabled);
    --radio-bg-color--checked: var(--dt-color-disabled-01);
}
```

**Benefits**:
1. **Maintainability**: Design token changes automatically propagate to static CSS classes
2. **Consistency**: Same visual appearance as pie-radio Web Component
3. **Flexibility**: Consumers can override CSS variables if needed (advanced use case)
4. **Themability**: Future theme changes handled at design token level

**No Hardcoded Values**: All colors, sizes, and spacing reference design tokens exclusively.

---

## 4. Class Naming Convention and Modifier Pattern

### Decision: BEM Methodology with `.c-` Component Prefix

**Rationale**:
- PIE Design System uses BEM (Block Element Modifier) for CSS class naming
- Existing pattern: `.c-*` prefix for component classes (`.c-radio`, `.c-checkbox-tick`)
- BEM provides clear hierarchy and avoids naming collisions
- Must differentiate from Web Component classes to avoid confusion

**Naming Structure**:

```
Block:    .c-radio-static
Element:  .c-radio-static__input
Modifier: .c-radio-static--checked
          .c-radio-static--disabled
          .c-radio-static--error
```

**Complete Class Inventory**:

| Class Name | Type | Purpose |
|------------|------|---------|
| `.c-radio-static` | Block | Container element (outer wrapper) |
| `.c-radio-static__input` | Element | Visual circle element (contains pseudo-elements) |
| `.c-radio-static--checked` | Modifier | Checked state (shows filled circle + dot) |
| `.c-radio-static--disabled` | Modifier | Disabled state (greyed out) |
| `.c-radio-static--error` | Modifier | Error state (red border/fill) |

**Modifier Combinations**:
- `.c-radio-static--checked.c-radio-static--disabled` - Checked + Disabled
- `.c-radio-static--checked.c-radio-static--error` - Checked + Error
- Error and disabled together: Not applicable (errors don't apply to disabled fields)

**Why "c-radio-static" Instead of "c-radio"**:
1. **Differentiation**: Clear distinction from Web Component classes (`.c-radio`)
2. **Intent Communication**: "static" signals non-interactive nature
3. **Avoid Conflicts**: Prevents CSS specificity issues if both are used on same page
4. **Clarity**: Developers immediately understand this is for display-only use

**Alternatives Considered**:

| Naming Approach | Example | Pros | Cons | Verdict |
|-----------------|---------|------|------|---------|
| Reuse `.c-radio` | `.c-radio` | Consistent with Web Component | Conflicts with Web Component CSS, confusing intent | **REJECTED** |
| Utility prefix `.u-` | `.u-radio` | Aligns with utilities | Not a utility (has structure), misleading | **REJECTED** |
| Component prefix + "display" | `.c-radio-display` | Clear intent | Verbose, "display" is vague | **REJECTED** |
| Component prefix + "static" | `.c-radio-static` | Clear intent, concise, non-interactive implied | Slightly longer | **ACCEPTED** |

---

## 5. Build Process Integration Approach

### Decision: Add CSS File to Existing PostCSS Pipeline

**Rationale**:
- The pie-css package uses PostCSS with `postcss-import` plugin for CSS bundling
- Build script (`buildCss.ts`) processes `css/input.css` and outputs `dist/index.css`
- Existing pattern: Animations are in `css/helpers/animations.css` and imported in `input.css`
- Radio CSS classes should follow the same pattern for consistency

**Integration Steps**:

1. **Create CSS File**: `packages/tools/pie-css/css/helpers/radio.css`
   - Contains all static radio CSS classes
   - Uses BEM naming convention
   - References design tokens via CSS variables
   - Fully self-contained (no external dependencies beyond design tokens)

2. **Update Import File**: `packages/tools/pie-css/css/input.css`
   ```css
   @import '@justeat/pie-design-tokens/dist/jet.css';
   @import '@justeat/pie-design-tokens/dist/jet-hsl-colors.css';
   @import './helpers/animations.css';
   @import './helpers/radio.css'; /* NEW */
   ```

3. **Build Process** (no changes needed):
   - `yarn build` in pie-css package
   - `buildCss.ts` runs: `postcss().use(atImport()).process(css, { from: 'css/input.css' })`
   - PostCSS resolves `@import` statements and bundles into `dist/index.css`
   - Result: Radio CSS classes included in main distribution file

4. **Versioning**:
   - Use Changesets: `yarn changeset`
   - Type: MINOR version bump (new feature, backward compatible)
   - Changeset message: "Add static radio CSS classes for non-interactive displays"

5. **Testing Integration**:
   - Existing Vitest tests in pie-css ensure build completes without errors
   - Add CSS validation test to ensure radio classes compile correctly
   - Visual regression tests in pie-radio package to compare static CSS vs Web Component

**Build Script Changes**: NONE REQUIRED
- Current `buildCss.ts` already handles `@import` resolution
- No new dependencies needed
- No configuration changes needed

**Distribution**:
- Radio CSS classes automatically included in `dist/index.css` (main entry point)
- Consumers import: `@import '@justeattakeaway/pie-css/dist/index.css';`
- Classes available globally (no separate import needed)

**File Size Impact**:
- Estimated: ~1.5-2KB for radio CSS classes (uncompressed)
- Gzipped: ~600-800 bytes
- Impact: Negligible (<1% increase to pie-css bundle)

**Alternatives Considered**:

| Approach | Pros | Cons | Verdict |
|----------|------|------|---------|
| Separate distribution file (e.g., `dist/components/radio.css`) | Opt-in loading | Breaks existing import pattern, requires separate import, adds complexity | **REJECTED** |
| SCSS file in `scss/` directory | Reusable via mixins | Pie-css consumers primarily use CSS, SCSS is for Web Components | **REJECTED** |
| Inline in `input.css` | No new file | Poor organization, harder to maintain | **REJECTED** |
| New file in `css/helpers/` + import in `input.css` | Organized, matches existing pattern, automatic bundling | Requires new file | **ACCEPTED** |

---

## 6. Interactive States: To Include or Exclude?

### Decision: EXCLUDE All Interactive States (Hover, Focus, Active)

**Rationale**:
- **Purpose**: Static CSS classes are for **non-interactive, display-only** contexts
- **Use Cases**: Receipts, confirmations, summaries, documentation, design previews
- **Accessibility**: Interactive states on non-focusable elements create false affordances
- **Consistency**: Static elements should not appear interactive to avoid user confusion

**What This Means**:
- ❌ **NO** `:hover` states (no color changes on mouse over)
- ❌ **NO** `:focus` states (elements are not focusable)
- ❌ **NO** `:active` states (no click/press feedback)
- ❌ **NO** `cursor: pointer` (default cursor, not pointer)
- ✅ **YES** to state modifiers (checked, disabled, error) for static representation

**If Developers Need Interactive Radios**:
→ Use the **pie-radio Web Component** instead

**Documentation Requirement**:
Must clearly document in quickstart.md:
> ⚠️ **Important**: These CSS classes create visual-only representations and should NOT be used for functional form inputs. For interactive radio buttons, use the `<pie-radio>` Web Component.

**Alternatives Considered**:

| Approach | Pros | Cons | Verdict |
|----------|------|------|---------|
| Include hover/focus states | More complete visual replication | Violates accessibility principles (false affordances), increases CSS size, contradicts non-interactive purpose | **REJECTED** |
| Include only hover (no focus) | Partial interactivity | Still creates false affordances, inconsistent | **REJECTED** |
| Exclude all interactive states | Clear non-interactive intent, accessible, smaller CSS | Doesn't replicate full Web Component behavior | **ACCEPTED** - Aligns with purpose |

---

## 7. Animation Support

### Decision: EXCLUDE Animations (No Transitions)

**Rationale**:
- The pie-radio Web Component includes optional animations via `.c-radio--allow-animation` class
- Animations: Scale transitions for `:before` (filled circle) and `:after` (dot) pseudo-elements
- **Static CSS classes are for display-only contexts** where animations are unnecessary
- Reducing CSS size and complexity

**What This Means**:
- ❌ **NO** transition animations for checked/unchecked state changes
- ❌ **NO** `.c-radio-static--allow-animation` modifier class
- ✅ States (checked/unchecked) render **instantly** via `transform: scale(0/1)`

**Justification**:
1. Static displays don't change state dynamically (no user interaction)
2. Animations add CSS complexity and bytes for no functional benefit
3. Simplifies implementation and maintenance
4. If animation is needed, developer should use the Web Component

**Future Consideration**:
If use cases emerge where static radios need animations (e.g., JavaScript-driven state changes in documentation), this could be added as a MINOR version enhancement with an opt-in modifier class.

**Alternatives Considered**:

| Approach | Pros | Cons | Verdict |
|----------|------|------|---------|
| Include animations (match Web Component) | Full visual parity | Unnecessary complexity, larger CSS, no use case for static elements | **REJECTED** |
| Include animations as opt-in modifier | Flexibility for edge cases | Adds complexity without current need | **REJECTED** - Can add later if needed |
| Exclude animations | Simpler, smaller CSS, faster rendering | Less feature parity with Web Component | **ACCEPTED** - Aligns with static purpose |

---

## 8. RTL (Right-to-Left) Support

### Decision: IMPLICIT RTL Support (No Special Handling Required)

**Rationale**:
- Radio button visuals are **symmetrical** (circle, centered dot)
- No directional elements (arrows, alignment, text flow dependencies)
- CSS uses logical properties where applicable (`inline-size`, `block-size`) - though not critical for circles
- Design tokens handle any directional concerns at global level

**Implementation**:
- No RTL-specific CSS classes needed
- Radio circles render identically in LTR and RTL contexts
- If container includes text (labels), that's the developer's responsibility (outside scope of CSS classes)

**Testing**:
- Visual regression tests should include RTL context to verify symmetry
- No expected differences between LTR and RTL rendering

**Alternatives Considered**:

| Approach | Pros | Cons | Verdict |
|----------|------|------|---------|
| Add explicit RTL class modifiers | Future-proof | Unnecessary for symmetrical elements, adds complexity | **REJECTED** |
| Use CSS logical properties throughout | Modern best practice | Overkill for circles, no practical benefit | **PARTIALLY USED** - Where applicable |
| No special RTL handling | Simplest, sufficient for symmetrical elements | Could miss edge cases | **ACCEPTED** - Validated via testing |

---

## Summary of Key Decisions

| Decision Area | Chosen Approach | Rationale |
|--------------|-----------------|-----------|
| **Architecture** | Mixin-first (not `@extend`) | Matches typography pattern, better tree-shaking, more flexible |
| **HTML Structure** | Native `<input type="radio">` with single class | Simpler, uses native `:checked`/`:disabled`, modern browser support |
| **Mixin Structure** | Base mixin + 4 state mixins (error, hover, active, focus) | Granular control, supports parent interaction patterns |
| **Dual Output** | SASS mixins + generated CSS classes | Serves both build-time and runtime consumers |
| **Design Tokens** | CSS custom properties referencing design tokens | Maintainability, consistency with pie-radio component |
| **Build Process** | New `scss/_internal/radio.scss` + sass compilation script | Mirrors typography pattern, minimal changes |
| **Interactive States** | Separate mixins (not in base) | Enables parent interaction patterns, prevents false affordances |

---

## Build Process Integration

### Decision: Mirror Typography CSS Build Pattern

**Implementation**:

1. **Mixin Definitions** (`scss/helpers/_radio.scss`):
   - Refactor existing placeholder selectors (`%c-radio-static`) to mixins (`@mixin radio-static()`)
   - Keep same CSS logic, just change delivery mechanism

2. **Class Generation** (`scss/_internal/radio.scss` - NEW FILE):
   ```scss
   @use '../helpers/radio' as *;
   
   .c-radio-static {
       @include radio-static();
   }
   
   .c-radio-static--error {
       @include radio-static();
       @include radio-static-error();
   }
   
   .c-radio-static--hover {
       @include radio-static-hover();
   }
   
   .c-radio-static--active {
       @include radio-static-active();
   }
   
   .c-radio-static--focus {
       @include radio-static-focus();
   }
   ```

3. **Build Script Update** (`package.json`):
   ```json
   "build": "run -T ts-node ./buildCss.ts && run -T sass --load-path=../../../node_modules scss/_internal/typography.scss dist/helpers/typography.css --no-source-map && run -T sass --load-path=../../../node_modules scss/_internal/radio.scss dist/helpers/radio.css --no-source-map"
   ```

**Output Files**:
- `scss/helpers/_radio.scss` - Mixins for SASS consumers
- `dist/helpers/radio.css` - Generated classes for CSS consumers

---

## Storybook Examples Structure

### Decision: Two Separate Stories

1. **Native Input Example**:
   - Shows `<input type="radio" class="c-radio-static">` with various states
   - No custom SCSS needed
   - Demonstrates drop-in CSS class usage

2. **Parent Interactions Example**:
   - Shows card component with hover/focus triggering radio state changes
   - Demonstrates SASS mixin usage for parent-triggered states
   - Requires `pie-css-radio-static-demo.scss` with mixin calls

---

## Open Questions & Next Steps

### Resolved Questions
- ✅ Mixin vs extend architecture
- ✅ HTML structure (native input)
- ✅ Build process integration
- ✅ State handling approach
- ✅ Storybook example structure

### Phase 1 Next Steps

1. **Data Model** (`data-model.md`):
   - CSS custom property definitions
   - Mixin signatures and parameters
   - State transition matrix

2. **Contracts** (`contracts/mixins-api.md`):
   - Mixin API specification
   - Generated class API specification
   - Usage examples

3. **Quickstart** (`quickstart.md`):
   - Quick reference for both mixin and class usage
   - Parent interaction pattern examples

4. **Agent Context Update**:
   - Run `.specify/scripts/bash/update-agent-context.sh opencode`

---

**Research Status**: ✅ COMPLETE (Amended for Mixin Architecture)  
**Gate Status**: ✅ APPROVED TO PROCEED TO PHASE 1

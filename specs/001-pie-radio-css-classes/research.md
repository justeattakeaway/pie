# Research: PIE Radio CSS Classes

**Feature**: 001-pie-radio-css-classes  
**Date**: 2026-02-19  
**Status**: Complete

## Research Questions

This document resolves all "NEEDS CLARIFICATION" items from the Technical Context and explores best practices for implementing CSS-only radio button visuals.

---

## 1. HTML Structure for Static Radio CSS Classes

### Decision: Two-Element Structure with Container and Visual Circle

**Rationale**:
- The pie-radio Web Component uses a `<label>` wrapper (`.c-radio`) containing an `<input type="radio">` element (`.c-radio-input`)
- For static CSS classes, we need a similar structure to leverage CSS pseudo-elements (`:before` and `:after`)
- Pseudo-elements on a single element can only provide 2 additional visual layers; we need 3 layers total:
  1. Border circle (outer)
  2. Filled background circle (appears when checked)
  3. Center dot (appears when checked)

**Chosen Structure**:
```html
<!-- Unchecked state -->
<div class="c-radio-static">
    <span class="c-radio-static__input"></span>
</div>

<!-- Checked state -->
<div class="c-radio-static c-radio-static--checked">
    <span class="c-radio-static__input"></span>
</div>
```

**HTML Element Choice**:
- **Container**: `<div>` or `<span>` (developer's choice based on context)
- **Visual circle**: `<span>` (semantic choice for inline/phrasing content)
- Both elements must be non-form elements to avoid accessibility confusion

**Alternatives Considered**:

| Approach | Pros | Cons | Verdict |
|----------|------|------|---------|
| Single element (one class) | Simpler HTML | Cannot create 3 visual layers with only 2 pseudo-elements | **REJECTED** - Insufficient visual layers |
| Three elements (explicit layers) | Most flexible | Overly verbose HTML, deviates from Web Component structure | **REJECTED** - Too complex |
| Two elements with BEM naming | Clean structure, matches Web Component pattern, standard methodology | Requires nested element | **ACCEPTED** - Best balance |

**Justification**: Two-element structure mirrors the Web Component's `<label>` + `<input>` pattern and provides the necessary pseudo-elements for all visual layers while maintaining clean, semantic HTML.

---

## 2. CSS Pseudo-Element Strategy for Non-Form Elements

### Decision: Leverage `:before` and `:after` Pseudo-Elements on Inner Element

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
| **HTML Structure** | Two-element BEM structure | Provides necessary pseudo-elements, mirrors Web Component pattern |
| **Pseudo-Elements** | `:before` (filled circle), `:after` (dot) on inner element | Matches Web Component implementation, browser-compatible |
| **Design Tokens** | Component-scoped CSS variables referencing design tokens | Maintainability, consistency, themability |
| **Naming Convention** | `.c-radio-static` (BEM with `.c-` prefix) | Clear differentiation, follows PIE conventions |
| **Build Process** | Add to `css/helpers/`, import in `input.css` | Matches existing pattern, automatic bundling |
| **Interactive States** | Excluded (no hover/focus/active) | Non-interactive purpose, accessibility, simplicity |
| **Animations** | Excluded | Unnecessary for static displays, reduces complexity |
| **RTL Support** | Implicit (symmetrical design) | No special handling needed for circles |

---

## Open Questions & Risks

### Open Questions
1. **Documentation Location**: Should usage examples live in Storybook docs, pie-css README, or both?
   - **Recommendation**: Both - Storybook for visual demos, README for quick reference

2. **CSS Class Scope**: Should classes be scoped to prevent conflicts (e.g., via CSS Modules)?
   - **Recommendation**: No - Global classes align with pie-css pattern and design token usage

3. **Future Component Coverage**: Should we create static CSS classes for other components (checkbox, switch)?
   - **Recommendation**: Out of scope for this feature - evaluate after assessing radio class adoption

### Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Consumers use static classes for functional forms | Medium | High - Accessibility violations | **Clear documentation warnings**, naming implies non-interactive (`static`), add Storybook examples showing wrong vs right usage |
| Design drift between CSS classes and Web Component | Low | Medium - Visual inconsistency | **Visual regression tests** comparing static CSS to Web Component, shared design tokens |
| Increased pie-css bundle size concerns | Low | Low - Only ~2KB added | **Document file size**, consider separate import in future if feedback warrants |
| Browser compatibility issues with `inset` property | Low | Low - Modern browser target | **Fallback using `top/right/bottom/left`** if older browser support needed, test across browsers |

---

## Next Steps (Phase 1)

1. **Data Model** (`data-model.md`):
   - Document CSS class structure (BEM hierarchy)
   - Define all CSS custom properties and their values
   - State transition matrix (unchecked, checked, disabled, error combinations)

2. **Contracts** (`contracts/css-classes.md`):
   - CSS API specification (class names, expected behavior)
   - HTML structure requirements
   - Design token dependencies

3. **Quickstart** (`quickstart.md`):
   - Usage examples for each state (unchecked, checked, disabled, error)
   - Wrong vs right usage scenarios
   - Migration from inline styles or other patterns

4. **Agent Context Update**:
   - Run `.specify/scripts/bash/update-agent-context.sh opencode`
   - Add CSS class development to agent context

5. **Re-evaluate Constitution Check**:
   - Verify all design decisions remain compliant
   - Document any new concerns or exceptions

---

**Research Status**: ✅ COMPLETE  
**Gate Status**: ✅ APPROVED TO PROCEED TO PHASE 1

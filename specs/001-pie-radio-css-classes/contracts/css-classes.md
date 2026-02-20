# CSS Classes Contract: PIE Radio Static

**Feature**: 001-pie-radio-css-classes  
**Date**: 2026-02-19  
**Updated**: 2026-02-20  
**Phase**: 1 - Design & Contracts  
**Version**: 1.1.0

## Contract Overview

This document specifies the public API contract for the static radio CSS classes provided by the `@justeattakeaway/pie-css` package. It defines class names, expected behavior, HTML requirements, and guarantees for consumers. Includes optional interactive state modifier classes for SASS/SCSS consumers.

---

## Package Distribution

### Import Path
```css
@import '@justeattakeaway/pie-css/dist/index.css';
```

### Availability
- **Package**: `@justeattakeaway/pie-css`
- **Version**: 0.27.0+ (MINOR version bump)
- **File**: `dist/index.css` (bundled with all pie-css utilities)
- **CDN**: Available via pie-css CDN (same as existing pie-css distribution)

### File Size
- **Uncompressed**: ~2.5-3KB (includes interactive modifiers)
- **Gzipped**: ~1-1.2KB
- **Total pie-css impact**: <2% increase

---

## Public CSS Classes

### 1. `.c-radio-static` (Base)

**Description**: Base class for static radio button visual  
**Purpose**: Styles native input elements to match pie-radio appearance  
**HTML Element**: `<input type="radio">`

**Expected Behavior**:
- Removes native browser styling (appearance: none)
- Displays as inline-block element
- Defines component-scoped CSS variables
- Renders circular border (24px diameter by default)
- Contains `:before` pseudo-element (filled background circle, hidden by default)
- Contains `:after` pseudo-element (center dot, hidden by default)
- Visibility of pseudo-elements controlled by `:checked` pseudo-class

**CSS Custom Properties Defined**:
```css
--radio-dot-bg-color: var(--dt-color-content-interactive-primary)
--radio-bg-color: transparent
--radio-bg-color--checked: var(--dt-color-interactive-brand)
--radio-border-color: var(--dt-color-border-form)
--radio-size: 24px
--radio-dot-size: 8px
--radio-border-width: 1px
```

**Visual Layers**:
1. **Element itself**: Border circle
2. **`:before`**: Filled background circle (scales 0→1 when checked)
3. **`:after`**: Center dot (scales 0→1 when checked)

**Dependencies**:
- Requires design tokens from `@justeat/pie-design-tokens` (automatically imported via pie-css)

**Example**:
```html
<input type="radio" class="c-radio-static" />
```

---

### 2. Native `:checked` Pseudo-Class

**Description**: Checked state using native browser pseudo-class  
**Purpose**: Reveals filled background circle and center dot  
**Applied To**: `<input type="radio">` with `.c-radio-static`

**Expected Behavior**:
- Automatically applied when input's `checked` attribute is set
- Scales `.c-radio-static:before` from 0 to 1 (filled background appears)
- Scales `.c-radio-static:after` from 0 to 1 (center dot appears)
- State change is instant (no animation)
- Can combine with `:disabled` or `.c-radio-static--error` modifier

**Visual Result**:
- Filled blue circle (brand color) with white center dot

**Example**:
```html
<input type="radio" class="c-radio-static" checked />
```

---

### 3. Native `:disabled` Pseudo-Class

**Description**: Disabled state using native browser pseudo-class  
**Purpose**: Displays greyed-out appearance for inactive/disabled context  
**Applied To**: `<input type="radio">` with `.c-radio-static`

**Expected Behavior**:
- Automatically applied when input's `disabled` attribute is set
- Overrides CSS custom properties to use disabled design tokens
- Changes background to light grey
- Changes border to lighter grey
- When combined with `:checked`, center dot becomes dark grey
- No cursor changes (static element, not interactive)

**Visual Result** (unchecked):
- Light grey background, light border, empty circle

**Visual Result** (checked + disabled):
- Light grey background, light grey filled circle, dark grey center dot

**Example (unchecked disabled)**:
```html
<input type="radio" class="c-radio-static" disabled />
```

**Example (checked disabled)**:
```html
<input type="radio" class="c-radio-static" checked disabled />
```

---

### 4. `.c-radio-static--error` (Modifier)

**Description**: Error state modifier  
**Purpose**: Displays error appearance for validation context  
**Applied To**: `<input type="radio">` with `.c-radio-static`

**Expected Behavior**:
- Overrides CSS custom properties to use error design tokens
- Changes border color to red
- Changes filled background color to red (when checked)
- Center dot remains white (when checked)
- Should be accompanied by error message (developer's responsibility)

**Visual Result** (unchecked error):
- Empty circle with red border

**Visual Result** (checked error):
- Red filled circle with white center dot

**Example (unchecked error)**:
```html
<input type="radio" class="c-radio-static c-radio-static--error" />
```

**Example (checked error)**:
```html
<input type="radio" class="c-radio-static c-radio-static--error" checked />
```

---

### 5. `.c-radio-static--hover` (Interactive Modifier)

**Description**: Hover state modifier for parent-triggered interactions  
**Purpose**: Applies hover appearance when parent container is interacted with  
**Applied To**: `<input type="radio">` with `.c-radio-static`  
**Primary Use Case**: SASS/SCSS `@extend` for parent container hover states

**Expected Behavior**:
- Unchecked: Applies semi-transparent background overlay (matches pie-radio hover)
- Checked: Darkens the filled circle color slightly
- Checked + Error: Darkens the red filled circle color slightly
- Automatically suppressed on disabled radios (`:disabled` takes precedence)
- Uses `color-mix()` for modern browsers, falls back to HSL alpha

**Visual Result** (unchecked hover):
- Semi-transparent dark overlay on empty circle

**Visual Result** (checked hover):
- Slightly darker blue filled circle with white dot

**Visual Result** (checked + error hover):
- Slightly darker red filled circle with white dot

**Example (direct application)**:
```html
<input type="radio" class="c-radio-static c-radio-static--hover" />
```

**Example (SASS @extend)**:
```scss
.interactive-card:hover .c-radio-static {
    @extend .c-radio-static--hover;
}
```

**Example (plain CSS)**:
```css
.interactive-card:hover .c-radio-static:not(:checked, :disabled) {
    --radio-bg-color: color-mix(in srgb, var(--dt-color-hover-01-bg) var(--dt-color-hover-01), transparent);
}

.interactive-card:hover .c-radio-static:checked:not(:disabled):before {
    --radio-bg-color--checked: color-mix(in srgb, var(--dt-color-hover-01-bg) var(--dt-color-hover-01), var(--dt-color-interactive-brand));
}
```

---

### 6. `.c-radio-static--active` (Interactive Modifier)

**Description**: Active/pressed state modifier for parent-triggered interactions  
**Purpose**: Applies active appearance when parent container is pressed  
**Applied To**: `<input type="radio">` with `.c-radio-static`  
**Primary Use Case**: SASS/SCSS `@extend` for parent container active states

**Expected Behavior**:
- Similar to hover but with stronger opacity/darker colors
- Unchecked: Applies stronger semi-transparent background overlay
- Checked: Darkens the filled circle color more than hover
- Checked + Error: Darkens the red filled circle color more than hover
- Automatically suppressed on disabled radios

**Visual Result** (unchecked active):
- Stronger semi-transparent dark overlay on empty circle

**Visual Result** (checked active):
- Darker blue filled circle with white dot (more than hover)

**Example (SASS @extend)**:
```scss
.interactive-card:active .c-radio-static {
    @extend .c-radio-static--active;
}
```

---

### 7. `.c-radio-static--focus` (Interactive Modifier)

**Description**: Focus state modifier for parent-triggered interactions  
**Purpose**: Applies focus ring when parent container receives focus  
**Applied To**: `<input type="radio">` with `.c-radio-static`  
**Primary Use Case**: SASS/SCSS `@extend` for parent container focus states

**Expected Behavior**:
- Adds focus ring using `box-shadow` (matches pie-radio focus)
- Requires `--dt-color-focus-inner` and `--dt-color-focus-outer` design tokens
- Two-layer shadow: inner and outer ring colors
- Automatically suppressed on disabled radios

**Visual Result**:
- Radio with 2px inner focus ring and 4px outer focus ring

**Example (SASS @extend)**:
```scss
.interactive-card:focus-visible .c-radio-static {
    @extend .c-radio-static--focus;
}
```

**Example (plain CSS)**:
```css
.interactive-card:focus-visible .c-radio-static:not(:disabled) {
    box-shadow: 0 0 0 2px var(--dt-color-focus-inner), 0 0 0 4px var(--dt-color-focus-outer);
}
```

---

## Valid State Combinations

### Base States

| HTML | Visual Result | Use Case |
|------|---------------|----------|
| `<input type="radio" class="c-radio-static">` | Empty circle, grey border | Default unchecked state |
| `<input type="radio" class="c-radio-static" checked>` | Blue filled circle, white dot | Checked state |
| `<input type="radio" class="c-radio-static" disabled>` | Light grey background, light border | Disabled unchecked |
| `<input type="radio" class="c-radio-static" checked disabled>` | Light grey circle, dark grey dot | Disabled checked |
| `<input type="radio" class="c-radio-static c-radio-static--error">` | Empty circle, red border | Error unchecked |
| `<input type="radio" class="c-radio-static c-radio-static--error" checked>` | Red filled circle, white dot | Error checked |

### Interactive Modifier States

| HTML | Visual Result | Use Case |
|------|---------------|----------|
| `<input type="radio" class="c-radio-static c-radio-static--hover">` | Unchecked with hover overlay | Parent container hover state |
| `<input type="radio" class="c-radio-static c-radio-static--hover" checked>` | Darker blue filled circle | Parent container hover (checked) |
| `<input type="radio" class="c-radio-static c-radio-static--active">` | Unchecked with active overlay | Parent container active state |
| `<input type="radio" class="c-radio-static c-radio-static--active" checked>` | Even darker blue filled circle | Parent container active (checked) |
| `<input type="radio" class="c-radio-static c-radio-static--focus">` | Unchecked with focus ring | Parent container focus state |
| `<input type="radio" class="c-radio-static c-radio-static--focus" checked>` | Checked with focus ring | Parent container focus (checked) |
| `<input type="radio" class="c-radio-static c-radio-static--hover c-radio-static--error" checked>` | Darker red filled circle | Parent hover + error state |

---

## Invalid State Combinations

### ❌ Disabled + Error (Together)

**Why Invalid**: Errors don't apply to disabled fields (semantic conflict)

```html
<!-- INVALID: Do not combine disabled and --error -->
<input type="radio" class="c-radio-static c-radio-static--error" disabled />
```

**Resolution**: Choose either `disabled` OR `.c-radio-static--error`, not both.

---

### ❌ Using Non-Input Elements

**Why Invalid**: The CSS is designed specifically for native radio inputs

```html
<!-- INVALID: Using div instead of input -->
<div class="c-radio-static"></div>
```

**Resolution**: Always use `<input type="radio">` with the `.c-radio-static` class.

---

### ❌ Interactive Modifiers on Disabled Radios

**Why Invalid**: Interactive states don't apply to disabled elements

```html
<!-- INVALID: Interactive modifier with disabled attribute -->
<input type="radio" class="c-radio-static c-radio-static--hover" disabled />
```

**Note**: The CSS automatically suppresses interactive modifiers on disabled radios, but developers should avoid this combination logically.

---

## SCSS Helpers (Advanced Usage)

### Import Path
```scss
@use '@justeattakeaway/pie-css/scss/helpers/radio';
```

### Extendable Placeholders

For SASS/SCSS consumers, the radio classes are also available as extendable placeholders (using `%` prefix) in addition to the concrete CSS classes. This allows for cleaner, more maintainable code when applying interactive states to parent containers.

#### Available Placeholders

| Placeholder | CSS Class Equivalent | Purpose |
|-------------|---------------------|---------|
| `%c-radio-static` | `.c-radio-static` | Base radio styles |
| `%c-radio-static--error` | `.c-radio-static--error` | Error state |
| `%c-radio-static--hover` | `.c-radio-static--hover` | Hover state modifier |
| `%c-radio-static--active` | `.c-radio-static--active` | Active state modifier |
| `%c-radio-static--focus` | `.c-radio-static--focus` | Focus state modifier |

#### Example: Interactive Card Pattern

```scss
@use '@justeattakeaway/pie-css/scss/helpers/radio';

.interactive-card {
    // Card styling...
    border: 2px solid var(--dt-color-border-subtle);
    padding: 20px;
    cursor: pointer;

    // Apply hover state to nested radio when card is hovered
    &:hover .c-radio-static {
        @extend %c-radio-static--hover;
    }

    // Apply active state when card is pressed
    &:active .c-radio-static {
        @extend %c-radio-static--active;
    }

    // Apply focus ring when card receives focus
    &:focus-visible .c-radio-static {
        @extend %c-radio-static--focus;
    }
}
```

#### Benefits of SCSS Helpers

1. **No CSS Duplication**: SASS `@extend` generates optimized CSS without duplicating properties
2. **Type Safety**: SASS compiler will error if placeholder doesn't exist (catches typos)
3. **Maintainable**: When design tokens update, all extended styles automatically update
4. **Performance**: Results in smaller compiled CSS compared to inline styles or utility classes
5. **Developer Experience**: IDE autocomplete and linting work with imported SCSS modules

#### When to Use SCSS Helpers vs CSS Classes

**Use SCSS Helpers (`@extend`) when**:
- Building complex interactive parent-child patterns (cards, list items, etc.)
- Need compile-time guarantees and type checking
- Working in a SASS/SCSS build pipeline
- Want optimal CSS output size

**Use CSS Classes directly when**:
- Building simple static UI
- Working without a SASS build step
- Need runtime class manipulation via JavaScript
- Prefer vanilla CSS approaches

---

## HTML Structure Requirements

### Minimal Valid Structure

```html
<input type="radio" class="c-radio-static" />
```

**Requirements**:
1. MUST be a native `<input type="radio">` element
2. MUST include `.c-radio-static` class
3. State management uses native `checked` and `disabled` attributes
4. Error state uses `.c-radio-static--error` modifier class

### Checked State

```html
<input type="radio" class="c-radio-static" checked />
```

### Disabled State

```html
<input type="radio" class="c-radio-static" disabled />
```

### Error State

```html
<input type="radio" class="c-radio-static c-radio-static--error" />
```

### With Text Label (Optional)

```html
<label style="display: flex; align-items: center; gap: 8px;">
    <input type="radio" class="c-radio-static" checked />
    <span>Option Label</span>
</label>
```

**Note**: Layout styling (flexbox, gap, text alignment) is the developer's responsibility. The CSS classes only handle the radio visual.

### With Parent Container Interaction (SASS Example)

**SASS/SCSS Implementation**:
```scss
.interactive-card {
    display: flex;
    padding: 16px;
    border: 2px solid #ccc;
    cursor: pointer;
    
    &:hover .c-radio-static {
        @extend .c-radio-static--hover;
    }
    
    &:active .c-radio-static {
        @extend .c-radio-static--active;
    }
    
    &:focus-visible .c-radio-static {
        @extend .c-radio-static--focus;
    }
}
```

**Plain CSS Alternative** (without @extend):
```css
.interactive-card:hover .c-radio-static:not(:checked, :disabled) {
    --radio-bg-color: color-mix(in srgb, var(--dt-color-hover-01-bg) var(--dt-color-hover-01), transparent);
}

.interactive-card:hover .c-radio-static:checked:not(:disabled):before {
    --radio-bg-color--checked: color-mix(in srgb, var(--dt-color-hover-01-bg) var(--dt-color-hover-01), var(--dt-color-interactive-brand));
}
```

**HTML**:
```html
<div class="interactive-card">
    <input type="radio" class="c-radio-static" name="options" />
    <span>Option 1</span>
</div>
```

---

## Design Token Dependencies

### Required Design Tokens

These design tokens MUST be available in the document (automatically provided by pie-css):

| Token | Purpose |
|-------|---------|
| `--dt-color-content-interactive-primary` | Center dot color (white) |
| `--dt-color-interactive-brand` | Checked fill color (blue) |
| `--dt-color-border-form` | Default border color (grey) |
| `--dt-color-support-error` | Error state color (red) |
| `--dt-color-disabled-01` | Disabled background (light grey) |
| `--dt-color-border-default` | Disabled border (lighter grey) |
| `--dt-color-content-disabled` | Disabled dot color (dark grey) |
| `--dt-color-hover-01` | Hover state opacity value |
| `--dt-color-hover-01-bg` | Hover state background color |
| `--dt-color-active-01` | Active state opacity value |
| `--dt-color-active-01-bg` | Active state background color |
| `--dt-color-focus-inner` | Focus ring inner color |
| `--dt-color-focus-outer` | Focus ring outer color |
| `--dt-color-interactive-brand-h` | Brand color HSL hue |
| `--dt-color-interactive-brand-s` | Brand color HSL saturation |
| `--dt-color-interactive-brand-l` | Brand color HSL lightness |
| `--dt-color-support-error-h` | Error color HSL hue |
| `--dt-color-support-error-s` | Error color HSL saturation |
| `--dt-color-support-error-l` | Error color HSL lightness |
| `--dt-color-black-h` | Black color HSL hue |
| `--dt-color-black-s` | Black color HSL saturation |
| `--dt-color-black-l` | Black color HSL lightness |

**Guarantee**: All design tokens are included in `pie-css/dist/index.css` (no separate import needed).

---

## Behavioral Guarantees

### ✅ Guaranteed Behavior

1. **Visual Parity**: Static CSS classes match pie-radio Web Component visuals (±1px tolerance)
2. **Interactive Visual Parity**: Interactive modifier classes match pie-radio Web Component hover/active/focus states (±1px tolerance)
3. **Design Token Sync**: Color and sizing changes in design tokens propagate to static classes automatically
4. **Browser Support**: Works in latest versions of Chrome, Firefox, Safari, Edge (2024+)
5. **No JavaScript Required**: Pure CSS, zero runtime dependencies
6. **Bundle Size**: <3KB uncompressed, <1.2KB gzipped (including interactive modifiers)
7. **Instant State Changes**: No animations or transitions (by design)
8. **Modifier Flexibility**: Modifiers can be added/removed via class manipulation
9. **SASS Compatibility**: Interactive modifiers work with `@extend` directive
10. **Disabled Suppression**: Interactive modifiers automatically suppressed on disabled radios

### ❌ Non-Guaranteed Behavior (Out of Scope)

1. **Automatic Interactivity**: No automatic hover/focus/active (must be applied via modifier classes or parent selectors)
2. **Form Integration**: Does not submit values or participate in forms (static display only)
3. **Accessibility**: No ARIA attributes, keyboard navigation, or screen reader support (not semantic form controls)
4. **Animations**: No transitions or animations when state changes
5. **Label Layout**: No built-in label positioning or layout (developer's responsibility)
6. **Older Browser Support**: Not tested for IE11 or older browsers
7. **SASS Compilation**: SASS `@extend` compilation is the consumer's responsibility

---

## Breaking Change Policy

### What Constitutes a Breaking Change

1. **Renaming classes** (e.g., `.c-radio-static` → `.c-radio-display`)
2. **Removing classes** (e.g., removing `--error` modifier)
3. **Changing required HTML structure** (e.g., requiring 3 elements instead of 2)
4. **Changing CSS custom property names** (e.g., `--radio-size` → `--radio-diameter`)
5. **Removing design token dependencies** that consumers may rely on

### Non-Breaking Changes

1. **Adding new modifiers** (e.g., `.c-radio-static--small`)
2. **Adding new CSS custom properties** (e.g., `--radio-animation-duration`)
3. **Internal CSS implementation changes** (as long as visual appearance unchanged)
4. **Design token value changes** (consumers expect tokens to evolve)

### Versioning

- **Major Version**: Breaking changes (see above)
- **Minor Version**: New features, new modifiers, backward-compatible additions
- **Patch Version**: Bug fixes, internal optimizations, documentation updates

---

## Migration Path (Future)

If breaking changes are needed in the future:

1. **Deprecation Notice**: 6 months advance notice in CHANGELOG
2. **Dual Support**: Old and new classes coexist for 1 major version
3. **Codemod**: Automated migration script provided (if feasible)
4. **Documentation**: Migration guide with before/after examples

---

## Testing Guarantees

### Visual Regression Tests

- **Tool**: Percy (visual diff testing)
- **Coverage**: All state combinations compared against pie-radio Web Component
- **Browsers**: Chrome, Firefox, Safari, Edge (latest)
- **Tolerance**: ±1px difference allowed for rendering variations

### Browser Compatibility Tests

- **Tool**: Playwright (cross-browser component tests)
- **Coverage**: Rendering on native input elements across browsers
- **Tests**: Structure validation, class application, pseudo-element rendering, native pseudo-class states

---

## Consumer Customization

### Allowed Customizations

Consumers MAY override CSS custom properties for advanced theming:

```css
.my-custom-radio {
    --radio-size: 32px; /* Larger size */
    --radio-dot-size: 12px; /* Proportionally larger dot */
    --radio-bg-color--checked: var(--my-brand-color); /* Custom brand color */
}
```

**Caution**: Overriding design tokens breaks visual consistency with PIE Design System. Use sparingly.

### Disallowed Customizations

Consumers MUST NOT:
- Modify pseudo-element styles directly (`:before`, `:after` on `.c-radio-static`)
- Add conflicting styles that break circular shape (e.g., changing `border-radius`)
- Override critical structural properties (e.g., `position`, `display`)

---

## Support & Compatibility

### Supported Use Cases

✅ **Static displays**: Receipts, summaries, confirmations  
✅ **Documentation**: Design system demos, Storybook examples  
✅ **Read-only previews**: Form review screens, print layouts  
✅ **Mockups**: Non-functional prototypes  
✅ **Interactive card patterns**: Cards/containers that trigger radio visual states on hover/focus  
✅ **SASS/SCSS projects**: Using `@extend` for parent-triggered interactive states

### Unsupported Use Cases

❌ **Form inputs**: Use `<pie-radio>` Web Component instead  
❌ **Fully interactive radios**: Use `<pie-radio>` Web Component instead  
❌ **Keyboard navigation**: Not applicable to static elements  
❌ **Screen reader content**: Not semantic radio buttons (unless part of accessible parent container)  

---

## Changelog Commitment

All changes to the CSS classes contract will be documented in:

1. **CHANGELOG.md**: Package-level changelog with version history
2. **GitHub Releases**: Tagged releases with migration notes (if applicable)
3. **Storybook Docs**: Updated usage examples and notes

---

## Summary

This contract guarantees:

- ✅ **1 CSS base class** (`.c-radio-static`)
- ✅ **4 CSS modifiers** (`.c-radio-static--error`, `.c-radio-static--hover`, `.c-radio-static--active`, `.c-radio-static--focus`)
- ✅ **2 native pseudo-classes** (`:checked`, `:disabled`)
- ✅ **7 base CSS custom properties** (overridable for advanced theming)
- ✅ **9 valid state combinations** (6 base + 3 interactive)
- ✅ **Visual parity** with pie-radio Web Component (±1px)
- ✅ **Interactive state parity** with pie-radio hover/active/focus (±1px)
- ✅ **Design token integration** (automatic theme propagation)
- ✅ **Zero JavaScript** (pure CSS, static display)
- ✅ **Browser compatibility** (modern browsers 2024+)
- ✅ **SASS/SCSS @extend support** (for interactive modifiers)
- ✅ **Semantic versioning** (MAJOR for breaking changes, MINOR for new features)

**Next**: Generate quickstart.md (usage examples and developer guide)

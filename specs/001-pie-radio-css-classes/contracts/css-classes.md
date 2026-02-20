# CSS Classes Contract: PIE Radio Static

**Feature**: 001-pie-radio-css-classes  
**Date**: 2026-02-19  
**Phase**: 1 - Design & Contracts  
**Version**: 1.0.0

## Contract Overview

This document specifies the public API contract for the static radio CSS classes provided by the `@justeattakeaway/pie-css` package. It defines class names, expected behavior, HTML requirements, and guarantees for consumers.

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
- **Uncompressed**: ~1.5-2KB
- **Gzipped**: ~600-800 bytes
- **Total pie-css impact**: <1% increase

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

## Valid State Combinations

| HTML | Visual Result | Use Case |
|------|---------------|----------|
| `<input type="radio" class="c-radio-static">` | Empty circle, grey border | Default unchecked state |
| `<input type="radio" class="c-radio-static" checked>` | Blue filled circle, white dot | Checked state |
| `<input type="radio" class="c-radio-static" disabled>` | Light grey background, light border | Disabled unchecked |
| `<input type="radio" class="c-radio-static" checked disabled>` | Light grey circle, dark grey dot | Disabled checked |
| `<input type="radio" class="c-radio-static c-radio-static--error">` | Empty circle, red border | Error unchecked |
| `<input type="radio" class="c-radio-static c-radio-static--error" checked>` | Red filled circle, white dot | Error checked |

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

**Guarantee**: All design tokens are included in `pie-css/dist/index.css` (no separate import needed).

---

## Behavioral Guarantees

### ✅ Guaranteed Behavior

1. **Visual Parity**: Static CSS classes match pie-radio Web Component visuals (±1px tolerance)
2. **Design Token Sync**: Color and sizing changes in design tokens propagate to static classes automatically
3. **Browser Support**: Works in latest versions of Chrome, Firefox, Safari, Edge (2024+)
4. **No JavaScript Required**: Pure CSS, zero runtime dependencies
5. **Bundle Size**: <2KB uncompressed, <1KB gzipped
6. **Instant State Changes**: No animations or transitions (by design)
7. **Modifier Flexibility**: Modifiers can be added/removed via class manipulation

### ❌ Non-Guaranteed Behavior (Out of Scope)

1. **Interactivity**: No hover, focus, or active states (use pie-radio Web Component for interactive radios)
2. **Form Integration**: Does not submit values or participate in forms (static display only)
3. **Accessibility**: No ARIA attributes, keyboard navigation, or screen reader support (not semantic form controls)
4. **Animations**: No transitions or animations when state changes
5. **Label Layout**: No built-in label positioning or layout (developer's responsibility)
6. **Older Browser Support**: Not tested for IE11 or older browsers

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

### Unsupported Use Cases

❌ **Form inputs**: Use `<pie-radio>` Web Component instead  
❌ **Interactive elements**: Use `<pie-radio>` Web Component instead  
❌ **Keyboard navigation**: Not applicable to static elements  
❌ **Screen reader content**: Not semantic radio buttons  

---

## Changelog Commitment

All changes to the CSS classes contract will be documented in:

1. **CHANGELOG.md**: Package-level changelog with version history
2. **GitHub Releases**: Tagged releases with migration notes (if applicable)
3. **Storybook Docs**: Updated usage examples and notes

---

## Summary

This contract guarantees:

- ✅ **1 CSS class** (`.c-radio-static` base)
- ✅ **1 CSS modifier** (`.c-radio-static--error`)
- ✅ **2 native pseudo-classes** (`:checked`, `:disabled`)
- ✅ **7 CSS custom properties** (overridable for advanced theming)
- ✅ **6 valid state combinations** (unchecked, checked, disabled, error, checked+disabled, checked+error)
- ✅ **Visual parity** with pie-radio Web Component (±1px)
- ✅ **Design token integration** (automatic theme propagation)
- ✅ **Zero JavaScript** (pure CSS, static display)
- ✅ **Browser compatibility** (modern browsers 2024+)
- ✅ **Semantic versioning** (MAJOR for breaking changes, MINOR for new features)

**Next**: Generate quickstart.md (usage examples and developer guide)

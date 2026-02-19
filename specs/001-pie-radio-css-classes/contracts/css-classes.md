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

### 1. `.c-radio-static` (Block)

**Description**: Container class for static radio button visual  
**Purpose**: Defines component context and CSS custom properties  
**HTML Element**: `<div>`, `<span>`, or similar non-form element

**Expected Behavior**:
- Displays as inline-block by default
- Defines component-scoped CSS variables
- Provides context for child element and modifier classes
- No visual appearance on its own (requires child `.c-radio-static__input`)

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

**Dependencies**:
- Requires design tokens from `@justeat/pie-design-tokens` (automatically imported via pie-css)

**Example**:
```html
<div class="c-radio-static">
    <span class="c-radio-static__input"></span>
</div>
```

---

### 2. `.c-radio-static__input` (Element)

**Description**: Visual circle element with border, filled background, and center dot  
**Purpose**: Renders the radio button appearance using pseudo-elements  
**HTML Element**: `<span>` (recommended, but any non-form element works)

**Expected Behavior**:
- Displays as block element
- Renders circular border (24px diameter by default)
- Contains `:before` pseudo-element (filled background circle, hidden by default)
- Contains `:after` pseudo-element (center dot, hidden by default)
- Visibility of pseudo-elements controlled by parent modifiers

**Visual Layers**:
1. **Element itself**: Border circle
2. **`:before`**: Filled background circle (scales 0→1 when checked)
3. **`:after`**: Center dot (scales 0→1 when checked)

**Requirements**:
- MUST be direct child of `.c-radio-static`
- MUST be empty (no text content or child elements)
- MUST NOT be a form element (`<input>`, `<button>`, etc.)

**Example**:
```html
<span class="c-radio-static__input"></span>
```

---

### 3. `.c-radio-static--checked` (Modifier)

**Description**: Checked state modifier  
**Purpose**: Reveals filled background circle and center dot  
**Applied To**: `.c-radio-static` (block level)

**Expected Behavior**:
- Scales `.c-radio-static__input:before` from 0 to 1 (filled background appears)
- Scales `.c-radio-static__input:after` from 0 to 1 (center dot appears)
- State change is instant (no animation)
- Can combine with `--disabled` or `--error` modifiers

**Visual Result**:
- Filled blue circle (brand color) with white center dot

**Example**:
```html
<div class="c-radio-static c-radio-static--checked">
    <span class="c-radio-static__input"></span>
</div>
```

---

### 4. `.c-radio-static--disabled` (Modifier)

**Description**: Disabled state modifier  
**Purpose**: Displays greyed-out appearance for inactive/disabled context  
**Applied To**: `.c-radio-static` (block level)

**Expected Behavior**:
- Overrides CSS custom properties to use disabled design tokens
- Changes background to light grey
- Changes border to lighter grey
- When combined with `--checked`, center dot becomes dark grey
- No cursor changes (static element, not interactive)

**Visual Result** (unchecked):
- Light grey background, light border, empty circle

**Visual Result** (checked + disabled):
- Light grey background, light grey filled circle, dark grey center dot

**Example (unchecked disabled)**:
```html
<div class="c-radio-static c-radio-static--disabled">
    <span class="c-radio-static__input"></span>
</div>
```

**Example (checked disabled)**:
```html
<div class="c-radio-static c-radio-static--checked c-radio-static--disabled">
    <span class="c-radio-static__input"></span>
</div>
```

---

### 5. `.c-radio-static--error` (Modifier)

**Description**: Error state modifier  
**Purpose**: Displays error appearance for validation context  
**Applied To**: `.c-radio-static` (block level)

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
<div class="c-radio-static c-radio-static--error">
    <span class="c-radio-static__input"></span>
</div>
```

**Example (checked error)**:
```html
<div class="c-radio-static c-radio-static--checked c-radio-static--error">
    <span class="c-radio-static__input"></span>
</div>
```

---

## Valid State Combinations

| Classes | Visual Result | Use Case |
|---------|---------------|----------|
| `.c-radio-static` | Empty circle, grey border | Default unchecked state |
| `.c-radio-static .c-radio-static--checked` | Blue filled circle, white dot | Checked state |
| `.c-radio-static .c-radio-static--disabled` | Light grey background, light border | Disabled unchecked |
| `.c-radio-static .c-radio-static--checked .c-radio-static--disabled` | Light grey circle, dark grey dot | Disabled checked |
| `.c-radio-static .c-radio-static--error` | Empty circle, red border | Error unchecked |
| `.c-radio-static .c-radio-static--checked .c-radio-static--error` | Red filled circle, white dot | Error checked |

---

## Invalid State Combinations

### ❌ Disabled + Error (Together)

**Why Invalid**: Errors don't apply to disabled fields (semantic conflict)

```html
<!-- INVALID: Do not combine --disabled and --error -->
<div class="c-radio-static c-radio-static--disabled c-radio-static--error">
    <span class="c-radio-static__input"></span>
</div>
```

**Resolution**: Choose either `--disabled` OR `--error`, not both.

---

### ❌ Modifier Without Block

**Why Invalid**: Modifiers require `.c-radio-static` context

```html
<!-- INVALID: Modifier without block class -->
<div class="c-radio-static--checked">
    <span class="c-radio-static__input"></span>
</div>
```

**Resolution**: Always include `.c-radio-static` on the same element as modifiers.

---

### ❌ Missing `.c-radio-static__input` Child

**Why Invalid**: Visual appearance requires the input element

```html
<!-- INVALID: No child element -->
<div class="c-radio-static c-radio-static--checked"></div>
```

**Resolution**: Always include `<span class="c-radio-static__input"></span>` as child.

---

## HTML Structure Requirements

### Minimal Valid Structure

```html
<div class="c-radio-static">
    <span class="c-radio-static__input"></span>
</div>
```

**Requirements**:
1. Container element with `.c-radio-static` class
2. Exactly one child element with `.c-radio-static__input` class
3. Both elements MUST be non-form elements (not `<input>`, `<button>`, etc.)
4. Input element MUST be empty (no content or children)

### With Text Label (Optional)

```html
<div class="c-radio-static c-radio-static--checked">
    <span class="c-radio-static__input"></span>
    <span>Option Label</span>
</div>
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
- **Coverage**: Rendering on div and span elements across browsers
- **Tests**: Structure validation, class application, pseudo-element rendering

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
- Modify pseudo-element styles directly (`:before`, `:after` on `.c-radio-static__input`)
- Add conflicting styles that break circular shape (e.g., changing `border-radius`)
- Override critical structural properties (e.g., `position`, `display` on input element)

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

- ✅ **5 CSS classes** (1 block, 1 element, 3 modifiers)
- ✅ **7 CSS custom properties** (overridable for advanced theming)
- ✅ **6 valid state combinations** (unchecked, checked, disabled, error, checked+disabled, checked+error)
- ✅ **Visual parity** with pie-radio Web Component (±1px)
- ✅ **Design token integration** (automatic theme propagation)
- ✅ **Zero JavaScript** (pure CSS, static display)
- ✅ **Browser compatibility** (modern browsers 2024+)
- ✅ **Semantic versioning** (MAJOR for breaking changes, MINOR for new features)

**Next**: Generate quickstart.md (usage examples and developer guide)

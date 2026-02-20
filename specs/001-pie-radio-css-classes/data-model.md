# Data Model: PIE Radio CSS Classes

**Feature**: 001-pie-radio-css-classes  
**Date**: 2026-02-19  
**Phase**: 1 - Design & Contracts

## Overview

This document defines the structure, relationships, and state management for the static radio CSS classes. Unlike traditional data models for backend systems, this "data model" describes the CSS class architecture, state combinations, and CSS custom property (variable) schema.

---

## CSS Class Hierarchy

### BEM Structure

```
Block: .c-radio-static
├── Element: .c-radio-static__input
├── Modifier: .c-radio-static--checked
├── Modifier: .c-radio-static--disabled
└── Modifier: .c-radio-static--error
```

### Class Entity Definitions

#### 1. Block: `.c-radio-static`

**Purpose**: Container element for the static radio button visual  
**HTML Element**: `<div>` or `<span>` (developer's choice)  
**Responsibility**: 
- Defines component-scoped CSS custom properties
- Provides context for BEM element and modifiers
- Sets up layout (if combined with text/labels)

**CSS Properties**:
```css
.c-radio-static {
    /* Component-scoped CSS variables (design token references) */
    --radio-dot-bg-color: var(--dt-color-content-interactive-primary);
    --radio-bg-color: transparent;
    --radio-bg-color--checked: var(--dt-color-interactive-brand);
    --radio-border-color: var(--dt-color-border-form);
    --radio-size: 24px;
    --radio-dot-size: 8px;
    --radio-border-width: 1px;
    
    /* Layout (optional - developer may override) */
    display: inline-block; /* Allows inline placement */
}
```

**Validation Rules**:
- MUST be applied to a non-form element (not `<input>`, `<button>`, etc.)
- MUST contain exactly one `.c-radio-static__input` child element
- MAY contain text/labels as siblings to the input element (developer's responsibility)

---

#### 2. Element: `.c-radio-static__input`

**Purpose**: Visual circle representation (border, filled background, center dot)  
**HTML Element**: `<span>` (recommended)  
**Responsibility**:
- Renders the outer border circle
- Provides pseudo-elements for filled background and center dot
- Inherits CSS custom properties from parent `.c-radio-static`

**CSS Properties**:
```css
.c-radio-static__input {
    /* Visual structure */
    display: block;
    width: var(--radio-size);
    height: var(--radio-size);
    border: var(--radio-border-width) solid var(--radio-border-color);
    border-radius: 50%;
    background-color: var(--radio-bg-color);
    position: relative;
    flex-shrink: 0; /* Prevents squashing if in flexbox */
}

/* Pseudo-element: Filled background circle */
.c-radio-static__input:before {
    content: '';
    display: block;
    position: absolute;
    inset: calc(var(--radio-border-width) * -1);
    border-radius: inherit;
    background-color: var(--radio-bg-color--checked);
    transform: scale(0); /* Hidden by default */
}

/* Pseudo-element: Center dot */
.c-radio-static__input:after {
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
```

**Validation Rules**:
- MUST be a direct child of `.c-radio-static`
- MUST be empty (no text content or child elements)
- Relies on `:before` and `:after` pseudo-elements for visuals

---

#### 3. Modifier: `.c-radio-static--checked`

**Purpose**: Represents the checked state (filled circle + center dot visible)  
**Applied To**: `.c-radio-static` (block level)  
**Effect**: Reveals `:before` and `:after` pseudo-elements on `.c-radio-static__input`

**CSS Properties**:
```css
.c-radio-static--checked .c-radio-static__input:before {
    transform: scale(1); /* Show filled background circle */
}

.c-radio-static--checked .c-radio-static__input:after {
    transform: translate(-50%, -50%) scale(1); /* Show center dot */
}
```

**State Transition**: Unchecked → Checked (instant, no animation)

**Validation Rules**:
- Applied alongside other modifiers (can combine with `--disabled` or `--error`)
- Mutually exclusive with unchecked state (presence indicates checked)

---

#### 4. Modifier: `.c-radio-static--disabled`

**Purpose**: Represents the disabled/inactive state (greyed out)  
**Applied To**: `.c-radio-static` (block level)  
**Effect**: Overrides CSS custom properties to use disabled design tokens

**CSS Properties**:
```css
.c-radio-static--disabled {
    /* Override CSS variables for disabled appearance */
    --radio-bg-color: var(--dt-color-disabled-01);
    --radio-border-color: var(--dt-color-border-default);
}

/* Special case: Checked + Disabled */
.c-radio-static--checked.c-radio-static--disabled {
    --radio-dot-bg-color: var(--dt-color-content-disabled);
    --radio-bg-color--checked: var(--dt-color-disabled-01);
}
```

**State Combinations**:
- Can combine with `--checked` (disabled AND checked)
- Cannot meaningfully combine with `--error` (errors don't apply to disabled fields)

**Validation Rules**:
- Applied alongside `--checked` for disabled checked state
- Should NOT be combined with `--error` (semantically invalid)

---

#### 5. Modifier: `.c-radio-static--error`

**Purpose**: Represents the error/invalid state (red border and fill)  
**Applied To**: `.c-radio-static` (block level)  
**Effect**: Overrides CSS custom properties to use error design tokens

**CSS Properties**:
```css
.c-radio-static--error {
    /* Override CSS variables for error appearance */
    --radio-bg-color--checked: var(--dt-color-support-error);
    --radio-border-color: var(--dt-color-support-error);
}
```

**State Combinations**:
- Can combine with `--checked` (error AND checked)
- Should NOT combine with `--disabled` (errors don't apply to disabled fields)

**Validation Rules**:
- Applied alongside `--checked` for error checked state
- Typically accompanied by visible error message (developer's responsibility)

---

## CSS Custom Properties Schema

### Component-Scoped Variables

| Variable Name | Default Value | Design Token Reference | Overridden By | Purpose |
|---------------|---------------|------------------------|---------------|---------|
| `--radio-dot-bg-color` | `var(--dt-color-content-interactive-primary)` | White color | `--disabled` + `--checked` | Center dot color |
| `--radio-bg-color` | `transparent` | N/A (transparent) | `--disabled` | Unchecked background |
| `--radio-bg-color--checked` | `var(--dt-color-interactive-brand)` | Brand blue | `--error`, `--disabled` + `--checked` | Filled circle color |
| `--radio-border-color` | `var(--dt-color-border-form)` | Form border gray | `--error`, `--disabled` | Outer circle border |
| `--radio-size` | `24px` | Fixed size | (Not overridden) | Circle diameter |
| `--radio-dot-size` | `8px` | Fixed size | (Not overridden) | Dot diameter |
| `--radio-border-width` | `1px` | Fixed width | (Not overridden) | Border thickness |

### Design Token Dependencies

**Color Tokens**:
- `--dt-color-content-interactive-primary` (white) - Center dot
- `--dt-color-interactive-brand` (blue) - Checked fill
- `--dt-color-border-form` (gray) - Default border
- `--dt-color-support-error` (red) - Error border/fill
- `--dt-color-disabled-01` (light gray) - Disabled background
- `--dt-color-border-default` (lighter gray) - Disabled border
- `--dt-color-content-disabled` (dark gray) - Disabled dot

**Size/Spacing Tokens**:
- No design token spacing used (fixed pixel sizes for consistency)
- Future enhancement: Could reference `--dt-spacing-*` tokens if radio size variations needed

---

## State Transition Matrix

### Valid State Combinations

| Unchecked | Checked | Disabled | Error | CSS Classes | Visual Description |
|-----------|---------|----------|-------|-------------|-------------------|
| ✅ | ❌ | ❌ | ❌ | `.c-radio-static` | Empty circle, gray border |
| ❌ | ✅ | ❌ | ❌ | `.c-radio-static .c-radio-static--checked` | Filled blue circle, white dot |
| ✅ | ❌ | ✅ | ❌ | `.c-radio-static .c-radio-static--disabled` | Empty circle, light gray fill, light border |
| ❌ | ✅ | ✅ | ❌ | `.c-radio-static .c-radio-static--checked .c-radio-static--disabled` | Light gray circle, dark gray dot |
| ✅ | ❌ | ❌ | ✅ | `.c-radio-static .c-radio-static--error` | Empty circle, red border |
| ❌ | ✅ | ❌ | ✅ | `.c-radio-static .c-radio-static--checked .c-radio-static--error` | Filled red circle, white dot |

### Invalid State Combinations

| Combination | Why Invalid | Guidance |
|-------------|-------------|----------|
| `--disabled` + `--error` | Errors don't apply to disabled fields (semantic conflict) | Remove `--error` or `--disabled` |
| `--checked` without parent `.c-radio-static` | Modifier requires block context | Apply `--checked` to same element as `.c-radio-static` |
| Multiple `.c-radio-static__input` in one `.c-radio-static` | Violates BEM structure | Use only one input element per block |

---

## HTML Structure Requirements

### Minimal Valid Structure (Unchecked)

```html
<div class="c-radio-static">
    <span class="c-radio-static__input"></span>
</div>
```

### Minimal Valid Structure (Checked)

```html
<div class="c-radio-static c-radio-static--checked">
    <span class="c-radio-static__input"></span>
</div>
```

### With Text Label (Developer's Responsibility)

```html
<div class="c-radio-static c-radio-static--checked">
    <span class="c-radio-static__input"></span>
    <span>Option Label</span>
</div>
```

**Note**: Layout styling (flexbox, gap, alignment) is the developer's responsibility. The CSS classes only handle the radio visual.

---

## Validation Rules Summary

### Block (`.c-radio-static`)

| Rule | Type | Description |
|------|------|-------------|
| MUST contain `.c-radio-static__input` | Structure | Exactly one child element with this class |
| MUST be non-form element | Semantic | Not `<input>`, `<button>`, etc. |
| MAY contain additional content | Flexibility | Text labels, icons (developer's responsibility) |
| Modifiers apply at block level | BEM Convention | `--checked`, `--disabled`, `--error` on this element |

### Element (`.c-radio-static__input`)

| Rule | Type | Description |
|------|------|-------------|
| MUST be direct child | Structure | Immediate child of `.c-radio-static` |
| MUST be empty | Content | No text or child elements |
| SHOULD be `<span>` | Semantic | Recommended element type |
| Relies on pseudo-elements | Implementation | `:before` and `:after` provide visuals |

### Modifiers

| Rule | Type | Description |
|------|------|-------------|
| Applied at block level | BEM Convention | Not on `.c-radio-static__input` |
| Can combine (except disabled + error) | Flexibility | Multiple modifiers allowed where logical |
| Instant state changes | Behavior | No transitions/animations |

---

## Browser Compatibility Requirements

### CSS Features Used

| Feature | Chrome | Firefox | Safari | Edge | Fallback Needed? |
|---------|--------|---------|--------|------|------------------|
| CSS Custom Properties | 49+ | 31+ | 9.1+ | 15+ | ❌ No (modern browsers) |
| `transform: scale()` | 4+ | 3.5+ | 3.1+ | 9+ | ❌ No (universal) |
| `border-radius: 50%` | 4+ | 4+ | 5+ | 9+ | ❌ No (universal) |
| Pseudo-elements (`:before`, `:after`) | All | All | All | All | ❌ No (universal) |
| `inset` property | 87+ | 66+ | 14.1+ | 87+ | ⚠️ Optional (use `top/right/bottom/left` if older support needed) |
| `flex-shrink` | 29+ | 28+ | 9+ | 12+ | ❌ No (modern browsers) |

**Target Browser Support**: Latest versions of Chrome, Firefox, Safari, Edge (2024+)

**Fallback for `inset` (if older browsers needed)**:
```css
/* Instead of: inset: calc(var(--radio-border-width) * -1); */
top: calc(var(--radio-border-width) * -1);
right: calc(var(--radio-border-width) * -1);
bottom: calc(var(--radio-border-width) * -1);
left: calc(var(--radio-border-width) * -1);
```

---

## Performance Considerations

### Rendering Performance
- **Repaints**: Minimal - Only when class changes (state transitions)
- **Reflows**: None - Fixed sizing, no layout shifts
- **GPU Acceleration**: `transform` properties are GPU-accelerated (efficient)

### File Size Impact
- **Uncompressed CSS**: ~1.5-2KB
- **Gzipped**: ~600-800 bytes
- **Impact on pie-css bundle**: <1% increase

### Optimization Notes
- No complex selectors (low specificity overhead)
- Uses CSS custom properties (efficient for theming)
- No animations (no animation frame overhead)

---

## Extensibility & Customization

### Consumer Overrides (Advanced)

Developers can override CSS custom properties for custom theming:

```css
.my-custom-radio {
    --radio-size: 32px; /* Larger radio */
    --radio-dot-size: 12px; /* Larger dot */
    --radio-bg-color--checked: var(--my-custom-brand-color); /* Custom color */
}
```

**Use Case**: Product-specific branding that deviates from design tokens

**Caution**: Overriding design tokens breaks visual consistency with PIE Design System

---

## Future Enhancements (Out of Scope)

1. **Size Variations**: Small (16px), Medium (24px, default), Large (32px)
   - Implementation: Modifier classes like `.c-radio-static--small`
   
2. **Animation Support**: Optional transitions for JavaScript-driven state changes
   - Implementation: `.c-radio-static--animated` modifier with CSS transitions
   
3. **Theme Variants**: Light mode, dark mode, high contrast
   - Implementation: Relies on design token updates (automatic)

4. **Label Integration**: Built-in label layout options
   - Implementation: Additional element like `.c-radio-static__label` with flexbox

---

## Related Components

- **pie-radio (Web Component)**: Interactive radio button for forms (primary use case)
- **pie-checkbox (Web Component)**: Similar structure, may benefit from CSS-only classes in future

---

## Summary

This data model defines:
- ✅ 5 CSS classes (1 block, 1 element, 3 modifiers)
- ✅ 7 CSS custom properties (component-scoped variables)
- ✅ 6 valid state combinations (unchecked, checked, disabled, error, checked+disabled, checked+error)
- ✅ 3 invalid combinations (disabled+error, structural violations)
- ✅ HTML structure requirements (2 elements minimum)
- ✅ Validation rules (BEM compliance, semantic constraints)
- ✅ Browser compatibility (modern browsers, optional fallbacks)

**Next**: Generate contracts/css-classes.md (CSS API specification)

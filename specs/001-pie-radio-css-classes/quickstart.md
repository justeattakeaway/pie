# Quickstart Guide: PIE Radio Static CSS Classes

**Feature**: 001-pie-radio-css-classes  
**Date**: 2026-02-19  
**Phase**: 1 - Design & Contracts

## Table of Contents

1. [Installation](#installation)
2. [Basic Usage](#basic-usage)
3. [All State Examples](#all-state-examples)
4. [Common Patterns](#common-patterns)
5. [When to Use (and When NOT to Use)](#when-to-use-and-when-not-to-use)
6. [Customization](#customization)
7. [Troubleshooting](#troubleshooting)

---

## Installation

### Prerequisites

Ensure you have `@justeattakeaway/pie-css` installed in your project:

```bash
npm install @justeattakeaway/pie-css
# or
yarn add @justeattakeaway/pie-css
```

### Import CSS

Import the pie-css stylesheet in your HTML or application entry point:

```html
<!-- HTML -->
<link rel="stylesheet" href="node_modules/@justeattakeaway/pie-css/dist/index.css">
```

```css
/* CSS */
@import '@justeattakeaway/pie-css/dist/index.css';
```

```javascript
// JavaScript (Webpack, Vite, etc.)
import '@justeattakeaway/pie-css/dist/index.css';
```

**Note**: Design tokens are automatically included with pie-css (no separate import needed).

---

## Basic Usage

### Unchecked Radio (Default)

The simplest form - an empty radio button circle:

```html
<div class="c-radio-static">
    <span class="c-radio-static__input"></span>
</div>
```

**Visual Result**: Empty circle with grey border (24px diameter)

---

### Checked Radio

Add the `--checked` modifier to show the filled state:

```html
<div class="c-radio-static c-radio-static--checked">
    <span class="c-radio-static__input"></span>
</div>
```

**Visual Result**: Blue filled circle with white center dot

---

## All State Examples

### 1. Unchecked (Default State)

```html
<div class="c-radio-static">
    <span class="c-radio-static__input"></span>
</div>
```

**Use Case**: Default unselected state in summaries, previews

---

### 2. Checked

```html
<div class="c-radio-static c-radio-static--checked">
    <span class="c-radio-static__input"></span>
</div>
```

**Use Case**: Selected option in confirmation screens, receipts

---

### 3. Disabled (Unchecked)

```html
<div class="c-radio-static c-radio-static--disabled">
    <span class="c-radio-static__input"></span>
</div>
```

**Use Case**: Unavailable options in static displays

**Visual Result**: Light grey background, light border

---

### 4. Disabled (Checked)

```html
<div class="c-radio-static c-radio-static--checked c-radio-static--disabled">
    <span class="c-radio-static__input"></span>
</div>
```

**Use Case**: Previously selected but now unavailable option

**Visual Result**: Light grey filled circle, dark grey center dot

---

### 5. Error (Unchecked)

```html
<div class="c-radio-static c-radio-static--error">
    <span class="c-radio-static__input"></span>
</div>
```

**Use Case**: Validation error states in form previews

**Visual Result**: Empty circle with red border

---

### 6. Error (Checked)

```html
<div class="c-radio-static c-radio-static--checked c-radio-static--error">
    <span class="c-radio-static__input"></span>
</div>
```

**Use Case**: Selected option with validation error

**Visual Result**: Red filled circle with white center dot

---

## Common Patterns

### Radio with Label (Inline)

Use flexbox to align the radio with text:

```html
<div style="display: flex; align-items: center; gap: 12px;">
    <div class="c-radio-static c-radio-static--checked">
        <span class="c-radio-static__input"></span>
    </div>
    <span>Delivery Option: Express Shipping</span>
</div>
```

**Tip**: Use `gap: var(--dt-spacing-b)` for PIE Design System spacing consistency.

---

### Radio Group (Vertical List)

Display multiple options in a list:

```html
<div style="display: flex; flex-direction: column; gap: 16px;">
    <!-- Option 1: Selected -->
    <div style="display: flex; align-items: center; gap: 12px;">
        <div class="c-radio-static c-radio-static--checked">
            <span class="c-radio-static__input"></span>
        </div>
        <span>Standard Delivery (3-5 days)</span>
    </div>
    
    <!-- Option 2: Not selected -->
    <div style="display: flex; align-items: center; gap: 12px;">
        <div class="c-radio-static">
            <span class="c-radio-static__input"></span>
        </div>
        <span>Express Delivery (1-2 days)</span>
    </div>
    
    <!-- Option 3: Unavailable -->
    <div style="display: flex; align-items: center; gap: 12px;">
        <div class="c-radio-static c-radio-static--disabled">
            <span class="c-radio-static__input"></span>
        </div>
        <span style="color: var(--dt-color-content-disabled);">Next-Day Delivery (Unavailable)</span>
    </div>
</div>
```

---

### Confirmation Screen (Receipt Style)

Show selected options in a summary view:

```html
<div style="padding: 20px; border: 1px solid var(--dt-color-border-default); border-radius: 8px;">
    <h3>Order Summary</h3>
    
    <div style="margin-top: 16px;">
        <strong>Payment Method:</strong>
        <div style="display: flex; align-items: center; gap: 12px; margin-top: 8px;">
            <div class="c-radio-static c-radio-static--checked">
                <span class="c-radio-static__input"></span>
            </div>
            <span>Credit Card ending in 1234</span>
        </div>
    </div>
    
    <div style="margin-top: 16px;">
        <strong>Delivery Option:</strong>
        <div style="display: flex; align-items: center; gap: 12px; margin-top: 8px;">
            <div class="c-radio-static c-radio-static--checked">
                <span class="c-radio-static__input"></span>
            </div>
            <span>Standard Delivery (3-5 days)</span>
        </div>
    </div>
</div>
```

---

### Error State with Message

Combine error radio with validation message:

```html
<div style="display: flex; flex-direction: column; gap: 8px;">
    <div style="display: flex; align-items: center; gap: 12px;">
        <div class="c-radio-static c-radio-static--checked c-radio-static--error">
            <span class="c-radio-static__input"></span>
        </div>
        <span>Age: Under 18</span>
    </div>
    <span style="color: var(--dt-color-support-error); font-size: 14px; margin-left: 36px;">
        You must be 18 or older to continue
    </span>
</div>
```

---

### Documentation / Design System Demo

Show all states in a comparison table:

```html
<table style="border-collapse: collapse; width: 100%;">
    <thead>
        <tr>
            <th style="text-align: left; padding: 8px;">State</th>
            <th style="text-align: left; padding: 8px;">Visual</th>
            <th style="text-align: left; padding: 8px;">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 8px;">Unchecked</td>
            <td style="padding: 8px;">
                <div class="c-radio-static">
                    <span class="c-radio-static__input"></span>
                </div>
            </td>
            <td style="padding: 8px;">Default state</td>
        </tr>
        <tr>
            <td style="padding: 8px;">Checked</td>
            <td style="padding: 8px;">
                <div class="c-radio-static c-radio-static--checked">
                    <span class="c-radio-static__input"></span>
                </div>
            </td>
            <td style="padding: 8px;">Selected state</td>
        </tr>
        <tr>
            <td style="padding: 8px;">Disabled</td>
            <td style="padding: 8px;">
                <div class="c-radio-static c-radio-static--disabled">
                    <span class="c-radio-static__input"></span>
                </div>
            </td>
            <td style="padding: 8px;">Unavailable option</td>
        </tr>
    </tbody>
</table>
```

---

## When to Use (and When NOT to Use)

### ✅ Use Static Radio CSS Classes For:

1. **Read-Only Displays**
   - Confirmation screens (order summaries, checkout reviews)
   - Receipts and invoices
   - Email templates (static HTML)
   - Print layouts
   
2. **Documentation**
   - Design system style guides
   - Storybook examples
   - Component documentation
   
3. **Non-Interactive Previews**
   - Form review screens
   - Static mockups
   - Screenshot generation

4. **Performance-Critical Contexts**
   - Lightweight static pages
   - Avoiding Web Component overhead for display-only needs

---

### ❌ Do NOT Use Static Radio CSS Classes For:

1. **Functional Forms**
   - User input forms
   - Interactive surveys
   - Settings pages
   - **Use instead**: `<pie-radio>` Web Component
   
2. **Keyboard Navigation Requirements**
   - Accessible forms requiring tab navigation
   - **Use instead**: `<pie-radio>` Web Component
   
3. **Screen Reader Content**
   - Semantic radio buttons for assistive technology
   - **Use instead**: `<pie-radio>` Web Component
   
4. **Interactive State Changes**
   - Hover effects
   - Focus management
   - Click handlers
   - **Use instead**: `<pie-radio>` Web Component

---

### Migration Example: Wrong vs Right

#### ❌ WRONG: Using Static CSS for Form Input

```html
<!-- WRONG: This is not a functional form input -->
<form>
    <label>
        <div class="c-radio-static c-radio-static--checked">
            <span class="c-radio-static__input"></span>
        </div>
        Option 1
    </label>
    <button type="submit">Submit</button>
</form>
```

**Problem**: Static CSS classes do not submit form values or participate in form validation.

#### ✅ RIGHT: Use Web Component for Forms

```html
<!-- RIGHT: Functional form with pie-radio Web Component -->
<form>
    <pie-radio name="option" value="1" checked>
        Option 1
    </pie-radio>
    <button type="submit">Submit</button>
</form>
```

---

#### ✅ RIGHT: Use Static CSS for Display

```html
<!-- RIGHT: Static display of selected option -->
<div style="padding: 16px; background: var(--dt-color-background-subtle);">
    <p><strong>Your Selection:</strong></p>
    <div style="display: flex; align-items: center; gap: 12px; margin-top: 8px;">
        <div class="c-radio-static c-radio-static--checked">
            <span class="c-radio-static__input"></span>
        </div>
        <span>Option 1</span>
    </div>
</div>
```

---

## Customization

### Overriding CSS Variables (Advanced)

You can customize radio appearance by overriding CSS custom properties:

```html
<style>
    .my-large-radio {
        --radio-size: 32px;
        --radio-dot-size: 12px;
    }
    
    .my-custom-color-radio {
        --radio-bg-color--checked: #8A2BE2; /* Purple */
        --radio-border-color: #8A2BE2;
    }
</style>

<!-- Large radio -->
<div class="c-radio-static c-radio-static--checked my-large-radio">
    <span class="c-radio-static__input"></span>
</div>

<!-- Custom color radio -->
<div class="c-radio-static c-radio-static--checked my-custom-color-radio">
    <span class="c-radio-static__input"></span>
</div>
```

**Caution**: Overriding design tokens breaks visual consistency with the PIE Design System. Use sparingly for product-specific branding needs.

---

### Available CSS Variables for Override

| Variable | Default Value | Purpose |
|----------|---------------|---------|
| `--radio-size` | `24px` | Circle diameter |
| `--radio-dot-size` | `8px` | Center dot diameter |
| `--radio-border-width` | `1px` | Border thickness |
| `--radio-border-color` | Design token | Border color |
| `--radio-bg-color` | `transparent` | Unchecked background |
| `--radio-bg-color--checked` | Design token | Checked fill color |
| `--radio-dot-bg-color` | Design token | Dot color |

---

## Troubleshooting

### Radio circle is not visible

**Problem**: You only see the container, no circle appears.

**Solution**: Ensure you included the `.c-radio-static__input` child element:

```html
<!-- Missing child element -->
<div class="c-radio-static c-radio-static--checked"></div>

<!-- Fixed: Add input element -->
<div class="c-radio-static c-radio-static--checked">
    <span class="c-radio-static__input"></span>
</div>
```

---

### Checked state is not showing

**Problem**: Radio looks unchecked even with `--checked` modifier.

**Checklist**:
1. ✅ Is `--checked` applied to `.c-radio-static` (block), not `.c-radio-static__input`?
2. ✅ Is `.c-radio-static__input` empty (no text content)?
3. ✅ Are design tokens loaded? (Should be automatic with pie-css import)

**Solution**: Apply modifier to the container:

```html
<!-- Wrong: Modifier on input element -->
<div class="c-radio-static">
    <span class="c-radio-static__input c-radio-static--checked"></span>
</div>

<!-- Right: Modifier on container -->
<div class="c-radio-static c-radio-static--checked">
    <span class="c-radio-static__input"></span>
</div>
```

---

### Radio looks squashed or misaligned

**Problem**: Radio circle is not perfectly round or is distorted.

**Solutions**:
1. Ensure parent container doesn't have conflicting styles (e.g., `width: 100%` on `.c-radio-static`)
2. Add `flex-shrink: 0` to `.c-radio-static__input` (already included in CSS)
3. Avoid setting explicit width/height on `.c-radio-static` container

---

### Colors look different from pie-radio Web Component

**Problem**: Static CSS classes don't match Web Component colors.

**Diagnosis**:
- **Likely cause**: Design tokens not loaded or overridden
- **Check**: Ensure `@import '@justeattakeaway/pie-css/dist/index.css';` is imported
- **Verify**: Inspect element and check computed values of `--dt-color-*` variables

**Solution**: Ensure pie-css is imported before any custom stylesheets that might override tokens.

---

### Radio is clickable (but shouldn't be)

**Problem**: User expects radio to be interactive when clicking.

**Solution**: This is by design - static CSS classes are for **display only**. If you need interactivity:
1. Use `<pie-radio>` Web Component instead
2. Add visual indication that element is non-interactive (e.g., surrounding context, "read-only" label)

---

## Browser Compatibility

**Supported Browsers** (Latest Versions, 2024+):
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

**Unsupported Browsers**:
- ❌ Internet Explorer 11 and older

**Known Issues**:
- Older browsers may not support `inset` property (fallback uses `top/right/bottom/left`)
- CSS custom properties require modern browser (no IE11 support)

---

## Related Resources

- **pie-radio Web Component**: For interactive radio buttons in forms  
  [Documentation](https://webc.pie.design/?path=/docs/radio)
  
- **PIE Design Tokens**: Color and spacing tokens used by static CSS classes  
  [Documentation](https://webc.pie.design/?path=/docs/design-tokens)
  
- **pie-css Package**: Full CSS utility library  
  [Documentation](https://webc.pie.design/?path=/docs/additional-libraries-pie-css--docs)

---

## Quick Reference

### State Modifiers

| Modifier | Purpose | Combine With |
|----------|---------|--------------|
| `--checked` | Show filled circle + dot | `--disabled`, `--error` |
| `--disabled` | Grey out appearance | `--checked` |
| `--error` | Red error appearance | `--checked` |

### HTML Template

```html
<!-- Copy-paste starting point -->
<div class="c-radio-static c-radio-static--checked">
    <span class="c-radio-static__input"></span>
</div>
```

**Modify**:
- Remove `--checked` for unchecked state
- Add `--disabled` for disabled state
- Add `--error` for error state

---

## Summary

✅ **Simple**: Two-element HTML structure  
✅ **Flexible**: Combine modifiers for different states  
✅ **Consistent**: Uses PIE design tokens automatically  
✅ **Lightweight**: Pure CSS, no JavaScript  
❌ **Static only**: Not for interactive forms (use `<pie-radio>` instead)

**Next Steps**:
1. Copy the HTML template above
2. Add modifier classes for your desired state
3. Style the surrounding layout as needed (labels, spacing, containers)
4. Refer to [contracts/css-classes.md](./contracts/css-classes.md) for detailed API documentation

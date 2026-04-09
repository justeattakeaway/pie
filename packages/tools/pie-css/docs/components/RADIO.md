# PIE CSS Radio Component Styles

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-css) | [NPM Package](https://www.npmjs.com/package/@justeattakeaway/pie-css)

Style native HTML `<input type="radio">` elements with PIE design system styling.

## Table of Contents

- [Why?](#why)
- [Installation](#installation)
- [Importing](#importing)
- [Basic Usage](#basic-usage)
- [Available Classes](#available-classes)
- [Visual States](#visual-states)
- [Accessibility](#accessibility)

## Why?

The PIE CSS Radio Component Styles are designed to provide the PIE visual styling to native HTML radio inputs. This is needed when
your designs use radio buttons in more complex ways than simple lists of options. For example complex radio button-based card components.

## Installation

The radio component styles are included as part of the `@justeattakeaway/pie-css` package:

```bash
# Using Yarn
yarn add @justeattakeaway/pie-css

# Using NPM
npm install @justeattakeaway/pie-css
```

## Importing

### CSS Import (JavaScript/Framework)

Import the pre-compiled CSS file in your JavaScript/TypeScript application:

```javascript
import '@justeattakeaway/pie-css/dist/components/radio.css';
```

**React Example:**

```jsx
import '@justeattakeaway/pie-css/dist/components/radio.css';

function MyForm() {
  return (
    <label>
      <input type="radio" className="c-radio" name="option" value="1" />
      Option 1
    </label>
  );
}
```

**Vue Example:**

```html
<script setup>
import '@justeattakeaway/pie-css/dist/components/radio.css';
</script>

<template>
  <label>
    <input type="radio" class="c-radio" name="option" value="1" />
    Option 1
  </label>
</template>
```

## Basic Usage

Apply the `c-radio` class to a native radio input:

```html
<!-- Basic radio -->
<input type="radio" class="c-radio" name="option" value="1">

<!-- With label -->
<label>
  <input type="radio" class="c-radio" name="option" value="2" checked>
  Option 2
</label>

<!-- Error state -->
<input type="radio" class="c-radio has-error" name="option" value="3">
```

## Available Classes

| Class | Description |
|-------|-------------|
| `.c-radio` | Base radio input styling with all default states |
| `.has-error` | Error state styling |

**Note:** All other visual states (`:checked`, `:disabled`, `:hover`, `:active`, `:focus-visible`) are handled automatically by CSS pseudo-classes.

## Visual States

All states are applied automatically via CSS pseudo-classes, except for error which is applied with a class.

| State | CSS Selector | Appearance | When Applied |
|-------|--------------|------------|--------------|
| **Error** | `.has-error` | Error border color | Add `has-error` class |
| **Unchecked** | `.c-radio` | Empty circle with border | Default state |
| **Checked** | `.c-radio:checked` | Filled circle with center dot | When selected |
| **Disabled** | `.c-radio:disabled` | Faded, not-allowed cursor | When `disabled` attribute is present |
| **Hover** | `.c-radio:hover` | Darkened background overlay | Mouse hover (not disabled) |
| **Active** | `.c-radio:active` | Further darkened overlay | Mouse press (not disabled) |
| **Focus** | `.c-radio:focus-visible` | Focus ring | Keyboard navigation only |

The focus ring is applied automatically on `:focus-visible` (keyboard navigation only) and will not show on mouse clicks.

### State Combinations

The radio input supports multiple state combinations:

- **Checked + Disabled**: Faded with dot visible
- **Error + Checked**: Error color with dot visible
- **Error + Disabled**: Faded (disabled takes precedence)


## Accessibility

When using native HTML radio inputs with the `c-radio` class, please follow the best practices found in the [MDN Web Docs on Radio Buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio).



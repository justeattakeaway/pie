# PIE CSS General Utility Classes

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-css) | [NPM Package](https://www.npmjs.com/package/@justeattakeaway/pie-css)

`@justeattakeaway/pie-css` provides a set of general display and visibility utility classes. For spacing, responsive, and typography utilities, see [spacing-utility-classes.md](./spacing-utility-classes.md), [rwd-utility-classes.md](./rwd-utility-classes.md), and [typography-utility-classes.md](./typography-utility-classes.md) respectively.

## Table of Contents

- [Why?](#why)
- [Installation](#installation)
- [Available Classes](#available-classes)
- [Usage Examples](#usage-examples)
- [Troubleshooting](#troubleshooting)

## Why?

Sometimes you need to hide or visually suppress an element without writing a dedicated CSS class. These utilities provide a lightweight way to do that whilst maintaining accessibility — `.is-visuallyHidden` keeps content available to screen readers even when visually hidden, ensuring users of assistive technology aren't excluded.

The PIE general utility classes offer the following benefits:

- **Accessibility-first**: `.is-visuallyHidden` follows best-practice screen reader patterns (clipped, 1×1px, non-focusable)
- **JS-friendly**: `.is-hidden` is designed to be toggled dynamically via JavaScript
- **No side effects**: These are narrow, single-purpose utilities — they do one thing and do it with `!important` to win specificity battles

## Installation

The general utilities are included as part of the `@justeattakeaway/pie-css` package. If you haven't already installed it:

```bash
# Using Yarn
yarn add @justeattakeaway/pie-css

# Using NPM
npm install @justeattakeaway/pie-css
```

### Importing

#### JavaScript/Framework Import (via bundler)

```javascript
import '@justeattakeaway/pie-css/dist/utilities/utilities.css';
```

#### SCSS/Sass Import

```scss
@use '@justeattakeaway/pie-css/dist/utilities/utilities.css' as pie-utilities;
```

> **Note:** These utilities are **not** included in `dist/index.css` — they must be imported explicitly.

## Available Classes

| Class | Description |
| --- | --- |
| `.is-hidden` | `display: none !important` — removes the element from layout and hides it from screen readers. Designed to be toggled by JavaScript. |
| `.is-visuallyHidden` | Hides the element visually whilst keeping it accessible to screen readers (position absolute, 1×1px, clipped). Use for screen-reader-only labels on interactive elements. |

## Usage Examples

### Toggling visibility with JavaScript

```html
<!-- Hidden by default, shown by JS -->
<div id="panel" class="is-hidden">Hidden panel content</div>
```

```javascript
document.getElementById('panel').classList.remove('is-hidden');
```

### Screen reader-only text

```html
<!-- Visually hidden label for an icon-only button -->
<button>
    <svg aria-hidden="true">…</svg>
    <span class="is-visuallyHidden">Close navigation</span>
</button>
```

## Troubleshooting

### Classes Not Applying

1. Ensure you have imported `@justeattakeaway/pie-css/dist/utilities/utilities.css`
2. Check your build process is including the CSS file in the output bundle
3. Inspect the element in browser DevTools to confirm the class is present and the rule is being applied

### `.is-visuallyHidden` element is still interactive

Visually hidden elements remain in the tab order by default. If you want to hide an element from both sight and keyboard navigation, use `.is-hidden` instead, or add `tabindex="-1"` to the element alongside `.is-visuallyHidden`.

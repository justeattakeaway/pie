# PIE CSS General Utility Classes

`@justeattakeaway/pie-css` provides a set of opt-in utility CSS files. This guide covers the general display and visibility helpers. For spacing and responsive utilities, see [spacing-utility-classes.md](./spacing-utility-classes.md) and [rwd-utility-classes.md](./rwd-utility-classes.md) respectively.

## Import

```scss
@use '@justeattakeaway/pie-css/dist/utilities/utilities.css' as pie-utilities;
```

```js
import '@justeattakeaway/pie-css/dist/utilities/utilities.css';
```

These utilities are **not** included in `dist/index.css` — they must be imported explicitly.

## Available classes

| Class | Description |
|---|---|
| `.is-hidden` | `display: none !important` — removes the element from layout and hides it from screen readers. Designed to be toggled by JavaScript. |
| `.is-visuallyHidden` | Hides the element visually while keeping it accessible to screen readers (position absolute, 1×1px, clipped). Use for screen-reader-only labels on interactive elements. |

## Usage examples

```html
<!-- JS-toggled panel -->
<div id="panel" class="is-hidden">Hidden content</div>

<!-- Screen reader-only label -->
<span class="is-visuallyHidden">Close navigation</span>
```

> **Note:** `.is-hidden` is designed to be toggled by JavaScript. If you want to permanently hide something from all users (including screen readers), use `display: none` in your own CSS instead.

# PIE CSS Responsive Utility Classes

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-css) | [NPM Package](https://www.npmjs.com/package/@justeattakeaway/pie-css)

`@justeattakeaway/pie-css` provides a set of responsive show/hide utility classes based on PIE breakpoint tokens.

## Import

```scss
@use '@justeattakeaway/pie-css/dist/utilities/rwd.css';
```

```js
import '@justeattakeaway/pie-css/dist/utilities/rwd.css';
```

These utilities are **not** included in `dist/index.css` — they must be imported explicitly.

## Naming convention

```
.u-showAbove{Breakpoint}   — hidden below the breakpoint, visible at it and above
.u-showBelow{Breakpoint}   — hidden at the breakpoint and above, visible below it
```

## Available breakpoints

| Breakpoint suffix | Pixel value |
|---|---|
| `Small` | 600px |
| `Mid` | 768px |
| `Large` | 1024px |
| `XLarge` | 1280px |
| `XXLarge` | 1440px |

`XSmall` (320px) is excluded — hiding below the smallest breakpoint would always hide or always show the element.

## Usage examples

```html
<!-- Only visible at Mid (768px) and above -->
<nav class="u-showAboveMid">Desktop navigation</nav>

<!-- Only visible below Mid (768px) -->
<button class="u-showBelowMid">Open menu</button>
```

## Notes

- All classes use `display: none !important` — they will override other display declarations
- Classes are generated from the PIE design token breakpoints; run `yarn generate:token-names` if breakpoints change

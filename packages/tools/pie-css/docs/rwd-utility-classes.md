# PIE CSS Responsive Utility Classes

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-css) | [NPM Package](https://www.npmjs.com/package/@justeattakeaway/pie-css)

`@justeattakeaway/pie-css` provides a set of responsive show/hide utility classes based on PIE breakpoint tokens.

> **Note:** Only use these utilities when you always want an element shown or hidden at a given breakpoint. These utilities apply `display: none !important` and will override other display declarations.

## Table of Contents

- [Why?](#why)
- [Installation](#installation)
- [Naming Convention](#naming-convention)
- [Available Breakpoints](#available-breakpoints)
- [Usage Examples](#usage-examples)
- [Troubleshooting](#troubleshooting)

## Why?

It's common to need to show or hide an element at a particular breakpoint. These utilities provide a lightweight way to do that using the PIE breakpoint tokens directly.

## Installation

The responsive utilities are included as part of the `@justeattakeaway/pie-css` package. If you haven't already installed it:

```bash
# Using Yarn
yarn add @justeattakeaway/pie-css

# Using NPM
npm install @justeattakeaway/pie-css
```

### Importing

#### JavaScript/Framework Import (via bundler)

```javascript
import '@justeattakeaway/pie-css/dist/utilities/rwd.css';
```

#### SCSS/Sass Import

```scss
@use '@justeattakeaway/pie-css/dist/utilities/rwd.css';
```

> **Note:** These utilities are **not** included in `dist/index.css` — they must be imported explicitly.

## Naming Convention

Classes follow this pattern:

```
u-showAbove{Breakpoint}   — hidden below the breakpoint, visible at it and above
u-showBelow{Breakpoint}   — hidden at the breakpoint and above, visible below it
```

For example:
- `u-showAboveMid` → hidden below 768px, visible at 768px and above
- `u-showBelowMid` → hidden at 768px and above, visible below 768px

## Available Breakpoints

| Breakpoint suffix | Pixel value |
| --- | --- |
| `Small` | 600px |
| `Mid` | 768px |
| `Large` | 1024px |
| `XLarge` | 1280px |
| `XXLarge` | 1440px |

`XSmall` (320px) is excluded from both sets — hiding below the smallest breakpoint would always hide or always show the element regardless of viewport size.

## Usage Examples

### Basic Usage

```html
<!-- Only visible at Mid (768px) and above -->
<nav class="u-showAboveMid">Desktop navigation</nav>

<!-- Only visible below Mid (768px) -->
<button class="u-showBelowMid">Open menu</button>
```

### Combining Classes

You can combine classes from different breakpoints, but be careful not to create contradictory rules on the same element:

```html
<!-- Visible only between Mid and Large -->
<div class="u-showAboveMid u-showBelowLarge">Tablet-only content</div>
```

## Troubleshooting

### Utilities Not Applying

1. Ensure you have imported `@justeattakeaway/pie-css/dist/utilities/rwd.css`
2. Check your build process is including the CSS file in the output bundle
3. Inspect the element in browser DevTools to confirm the class is present and the media query is firing at the expected breakpoint

### Element Still Visible / Hidden at Wrong Breakpoint

Verify you are using the correct breakpoint suffix. Breakpoints use title-case — `Mid` not `mid`, `XLarge` not `xlarge`. An incorrect class name will be silently ignored by the browser.

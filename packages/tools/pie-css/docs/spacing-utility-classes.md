# PIE CSS Spacing Utility Classes

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-css) | [NPM Package](https://www.npmjs.com/package/@justeattakeaway/pie-css)

`@justeattakeaway/pie-css` provides a set of spacing utility classes that apply margin values using the PIE design token spacing scale.

These utilities use logical properties for full RTL compatibility.

> **Note:** Only use spacing utility classes when you always want the margin to be set to that size across **all** device breakpoints. These utilities override other style declarations and are most useful when you want to control margin on an HTML element without writing a dedicated classname hook.

## Table of Contents

- [Why?](#why)
- [Installation](#installation)
- [Naming Convention](#naming-convention)
- [Available Directions](#available-directions)
- [Available Scale](#available-scale)
- [Usage Examples](#usage-examples)
- [Troubleshooting](#troubleshooting)

## Why?

It's common to need to just apply a margin to an HTML element, where perhaps no other styling is even needed. In these instances, having to add a classname hook, alongside potentially an extra SCSS/CSS modules or component file, is quite heavy handed. For these usecases, margin utility classes provide a lightweight way of adding (or removing) margins to an element.

The PIE Spacing utility classes offer several other benefits:

- **Consistency**: Every margin value comes directly from the PIE spacing scale — no magic numbers
- **RTL Compatible**: Uses logical properties (`margin-block-start`, `margin-inline-end`, etc.) so layouts flip correctly in right-to-left contexts
- **Token Integration**: Values are driven by `--dt-spacing-*` CSS custom properties, so spacing updates propagate automatically

## Installation

The spacing utilities are included as part of the `@justeattakeaway/pie-css` package. If you haven't already installed it:

```bash
# Using Yarn
yarn add @justeattakeaway/pie-css

# Using NPM
npm install @justeattakeaway/pie-css
```

### Importing

#### JavaScript/Framework Import (via bundler)

```javascript
import '@justeattakeaway/pie-css/dist/utilities/spacing.css';
```

#### SCSS/Sass Import

```scss
@use '@justeattakeaway/pie-css/dist/utilities/spacing.css';
```

> **Note:** Make sure you have also imported the base `@justeattakeaway/pie-css` package (or equivalent design token CSS variables), as the spacing utilities depend on the `--dt-spacing-*` custom properties defined there.

## Naming Convention

Classes follow this pattern:

```
u-margin-{direction}--{scale}
u-margin--{scale}              (all four sides — no direction)
```

For example:
- `u-margin-blockStart--e` → `margin-block-start: var(--dt-spacing-e)` (24px)
- `u-margin-inline--b` → `margin-inline: var(--dt-spacing-b)` (8px)
- `u-margin--d` → `margin: var(--dt-spacing-d)` (16px)

## Available Directions

| Direction | Logical Property | Physical Equivalent |
| --- | --- | --- |
| *(none)* | `margin` | All four sides |
| `blockStart` | `margin-block-start` | `margin-top` |
| `blockEnd` | `margin-block-end` | `margin-bottom` |
| `inlineStart` | `margin-inline-start` | `margin-left` |
| `inlineEnd` | `margin-inline-end` | `margin-right` |
| `inline` | `margin-inline` | `margin-left` + `margin-right` |
| `block` | `margin-block` | `margin-top` + `margin-bottom` |

## Available Scale

| Scale suffix | Token | Value |
| --- | --- | --- |
| `--none` | `--dt-spacing-none` | 0px |
| `--a-small` | `--dt-spacing-a-small` | 2px |
| `--a` | `--dt-spacing-a` | 4px |
| `--b` | `--dt-spacing-b` | 8px |
| `--c` | `--dt-spacing-c` | 12px |
| `--d` | `--dt-spacing-d` | 16px |
| `--e` | `--dt-spacing-e` | 24px |
| `--f` | `--dt-spacing-f` | 32px |
| `--g` | `--dt-spacing-g` | 40px |
| `--h` | `--dt-spacing-h` | 56px |
| `--i` | `--dt-spacing-i` | 64px |
| `--j` | `--dt-spacing-j` | 80px |

Each scale entry is available in all six directions plus the all-sides shorthand, giving 84 utility classes in total (12 scale values × 7 variants).

## Usage Examples

### Basic Usage

```html
<!-- Add spacing-e design token above an element -->
<div class="u-margin-blockStart--e">Section heading</div>

<!-- Add spacing-b design token below an element -->
<p class="u-margin-blockEnd--b">Short description</p>

<!-- Use spacing tokens for fixed gutters -->
<div class="u-margin-inline--d">Content with spacing-d side margins</div>

<!-- Apply spacing-d on all four sides -->
<div class="u-margin--d">Card with uniform margin</div>
```

### Combining Directions

You can apply multiple utility classes to the same element:

```html
<!-- 24px block-start, 8px block-end -->
<section class="u-margin-blockStart--e u-margin-blockEnd--b">
    Card content
</section>
```

### Removing Existing Margin

Use the `none` scale to explicitly zero out a margin:

```html
<h2 class="u-margin-blockStart--none">Heading flush to the top</h2>
```

## Troubleshooting

### Utilities Not Applying

1. Ensure you have imported `@justeattakeaway/pie-css/dist/utilities/spacing.css`
2. Verify the base `@justeattakeaway/pie-css` package (or design token variables) is loaded — the `--dt-spacing-*` custom properties must be defined before the utility classes are applied
3. Check your build process is including the CSS file in the output bundle
4. Inspect the element in browser DevTools to confirm the class is present and the `margin` rule is being applied

### Values Not Resolving

If the margin values appear as `0` or are missing, the `--dt-spacing-*` CSS custom properties are not yet in scope. Import the base stylesheet first:

```javascript
import '@justeattakeaway/pie-css'; // design tokens — must come first
import '@justeattakeaway/pie-css/dist/utilities/spacing.css';
```

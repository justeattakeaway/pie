# @justeattakeaway/pie-skeleton
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-skeleton) | [Design Documentation](https://pie.design/components/skeleton) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-skeleton)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-skeleton">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-skeleton.svg">
  </a>
</p>

`@justeattakeaway/pie-skeleton` is a Web Component built using the Lit library. It offers a simple and accessible `skeleton` component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Usage Examples](#usage-examples)
- [Avoiding layout shift](#avoiding-layout-shift)
- [Animation](#animation)
  - [Reduced motion](#reduced-motion)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties

A skeleton is a placeholder shape shown while content loads. It reserves the space of the real content, so the page doesn't shift when the content arrives, and shows that something is loading. The consumer decides when to replace the skeleton with the real content.

| Prop | Options | Description | Default |
|------|---------|-------------|---------|
| `variant` | `"box"`, `"circle"`, `"pill"`, `"text"`, `"star"` | The shape the skeleton draws. | `"box"` |
| `backgroundColor` | `"default"`, `"strong"`, `"subtle"` | The background colour. `"strong"` is darker (for nested levels) and `"subtle"` is lighter (for nested levels or darker surfaces). | `"default"` |
| `width` | An absolute value (e.g. `"120px"`) or a percentage of the container (e.g. `"50%"`) | The width of the skeleton. Ignored by the `circle` and `star` variants. | — |
| `height` | Depends on the variant (see below) | The height of the skeleton. | — |
| `lines` | A number between 1 and 10 | The number of text lines to draw. Applies to the `text` variant only. Values outside the range are clamped, and non-numeric values fall back to `1`. | `1` |
| `stars` | A number between 1 and 10 | The number of stars to draw. Applies to the `star` variant only. Values outside the range are clamped, and non-numeric values fall back to `1`. | `1` |
| `borderRadius` | `"radius-rounded-none"`, `"radius-rounded-a"` to `"radius-rounded-g"` | The corner radius of the `box` variant, as a radius token identifier. Ignored by the other variants. | `"radius-rounded-b"` |
| `aspectRatio` | `"1by1"`, `"4by3"`, `"16by9"`, `"3by4"`, `"9by16"` | The aspect ratio of the `box` variant. Ignored when both `width` and `height` are set. | `"1by1"` |
| `isResponsive` | `true`, `false` | When true, a `pill` with a `button-*` height switches to the wide button height above the `md` breakpoint, like `pie-button`. Ignored otherwise by other skeleton variants. | `false` |

#### `height`

The accepted `height` values depend on the variant:

| `variant` | Accepted `height` values | Examples |
|-----------|--------------------------|----------|
| `box` | Absolute, percentage, spacing identifier | `"40px"`, `"50%"`, `"spacing-e"` |
| `circle` | Absolute, percentage, spacing identifier | `"80px"`, `"spacing-i"` |
| `pill` | Absolute, spacing identifier, `pie-button` size | `"48px"`, `"spacing-e"`, `"button-medium"` |
| `text` | Typography identifier only | `"font-body-l"` |
| `star` | Absolute, spacing identifier | `"24px"`, `"spacing-e"` |

- **Spacing identifiers** are the lettered spacing tokens written without the `--dt-` prefix, e.g. `"spacing-e"` for `--dt-spacing-e`.
- **Typography identifiers** are the meaningful part of a typography token, e.g. `"font-body-l"` for `--dt-font-body-l-size`. The gap between lines comes from the token's line height, so the skeleton matches the real text.
- **`button-*` sizes** match the equivalent `pie-button` size: `"button-xsmall"`, `"button-small-productive"`, `"button-small-expressive"`, `"button-medium"` and `"button-large"`.

When `height` is missing, or is a value the variant doesn't accept, the variant falls back to a default:

| `variant` | Default height |
|-----------|----------------|
| `box` | `width: 100%` with a 1:1 ratio |
| `circle` | `width: 100%` with a 1:1 ratio |
| `pill` | `"button-medium"` |
| `star` | `"spacing-e"` (24px) |
| `text` | `"font-body-l"` |

### Slots

This component does not expose any slots.

### CSS Variables

This component does not expose any CSS variables for style overrides.

### Events

This component does not emit any custom events.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/skeleton.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-skeleton variant="box" height="200px"></pie-skeleton>
<pie-skeleton variant="text" height="font-body-l" lines="3"></pie-skeleton>
<pie-skeleton variant="star" stars="5"></pie-skeleton>
<pie-skeleton variant="pill" height="button-medium"></pie-skeleton>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/skeleton.js';

<pie-skeleton variant="box" height="200px"></pie-skeleton>
```

**For React Applications:**

```jsx
import { PieSkeleton } from '@justeattakeaway/pie-webc/react/skeleton.js';

<PieSkeleton variant="box" height="200px"></PieSkeleton>
```

## Avoiding layout shift

A skeleton's job is to reserve the space of the content it stands in for, so the page doesn't shift when the content arrives. Cumulative Layout Shift (CLS) is measured when that space changes, so matching it exactly matters.

- **Match heights as close as possible.** A height mismatch pushes all content below the skeleton when it is replaced. Width matters much less, except in rows (flex/inline) where a wider element can wrap.
- **Use typography identifiers for text.** Setting `height` to the same identifier as the real text (e.g. `height="font-body-l"`) makes each line take the same vertical space as the real text (font size plus line gap), including the narrow/wide changes for headings and subheadings.
- **Control the number of lines.** Text of varying length can wrap to more lines than the skeleton shows. Cap the real text (e.g. with `line-clamp`) or reserve a `min-height` on the container.
- **Reserve space for images.** Give a `box` skeleton the same size or aspect ratio as the image, and keep that space reserved on the image itself.
- **Reserve space on the container.** A fixed or minimum height (or aspect ratio) on the container stops small differences inside it from moving content outside it.
- **Small mismatches add up.** One 4px difference is negligible (around 0.003 CLS), but the same difference repeated across a list of 10 cards can reach around 0.04 — almost half of the 0.1 "good" threshold.

## Animation

A skeleton plays a shimmer animation to representa that content is loading.

In a right-to-left layout (`dir="rtl"`), the band moves right to left, following the reading direction.

Skeletons that are rendered at the same time share the same animation timing, so the wave lines up across a group of skeletons. A skeleton added to the page later starts its own animation.

### Reduced motion

When the user has requested reduced motion (`prefers-reduced-motion: reduce`), the shimmer animation is removed and the skeleton is shown as a static placeholder.

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

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
- [Accessibility](#accessibility)
  - [Reduced motion](#reduced-motion)
  - [Best practices](#best-practices)
  - [Accessible skeleton and loading region example](#accessible-skeleton-and-loading-region-example)
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

## Accessibility

A skeleton is a visual placeholder with no meaning on its own. To keep the loading state clear for everyone, `pie-skeleton`:

- **Is hidden from assistive technology**. (`aria-hidden="true"`) is set for every variant. A single shape (a line, a box, a circle) has no meaning on its own, so if each one were announced as "loading", a card with five skeletons would announce "loading" five times. The loading state is announced once by the container that owns the content, not by the shapes. Treating every variant the same way also keeps the behaviour predictable: no shape is ever announced, rather than only some.
- **Is not focusable and does not handle keyboard events**. There is nothing to act on, and a focusable element hidden from assistive technology would create an empty focus stop for keyboard and screen reader users.
- **Disables pointer events**. (`pointer-events: none`) is set, so a placeholder can't be clicked by mistake and clicks are ignored.
- **Removes the shimmer animation** when the user requests reduced motion (`prefers-reduced-motion: reduce`), showing a static placeholder instead. The static shape is still a clear cue that content is loading.

### Reduced motion

When the user has requested reduced motion (`prefers-reduced-motion: reduce`), the shimmer animation is removed and the skeleton is shown as a static placeholder.

### Best practices

Follow these practices when you use skeletons, so the loading state is clear to everyone:

- **Provide one loading message per loading region.** Add a single visually hidden, localised message (e.g. "Loading restaurants") inside the container that holds the skeletons, rather than relying on the skeletons themselves. One message per region avoids repeated announcements, and you can translate it.
- **Mark the loading region with `aria-busy="true"`, and set it to `false` once everything has loaded.** This applies to tables, cards or any container where several skeletons load together. When loading finishes, remove (or hide) the skeletons so stale placeholders don't stay on the page.
- **Put the polite live region (`aria-live="polite"`) on the loading message itself, not on the container that carries `aria-busy`.** A live region on a busy container can have its announcements deferred until the region is no longer busy, which can delay or drop the loading message. Use one live region per loading region, not one per skeleton, and test the announcement with real screen readers.
- **Don't show skeletons indefinitely.** Always provide an end state: loaded content, an error, or a timeout message.
- **Avoid semantic heading markup when you use a skeleton as a heading placeholder.** An empty heading still appears in a screen reader's heading list, which confuses users who navigate by headings.

### Accessible skeleton and loading region example

A loading region owns the skeletons, announces the loading state once with a visually hidden message, is marked busy while loading, and announces when the content has arrived. The skeletons inside it stay hidden from assistive technology.

```html
<!-- The container owns the loading state: one localised message, marked busy while loading. The
     polite live region is on the message itself, not on the busy container, so the busy state does
     not defer the announcement. -->
<section id="restaurants" aria-busy="true" aria-label="Restaurants">
  <!-- `.is-visuallyHidden` is a utility class from @justeattakeaway/pie-css.
       It keeps the message available to screen readers without showing it. -->
  <p class="is-visuallyHidden" aria-live="polite">Loading restaurants</p>

  <div class="restaurant">
    <pie-skeleton variant="circle" height="40px"></pie-skeleton>
    <pie-skeleton variant="text" height="font-body-l" lines="2"></pie-skeleton>
  </div>
</section>
```

```js
import '@justeattakeaway/pie-webc/components/skeleton.js';

// Call this once data has arrived.
function showRestaurants (restaurants) {
  const region = document.getElementById('restaurants');
  
  // Replace the skeletons with the real content.
  // Application particular logic has priority over this simple example.
  region.querySelector('.restaurant').replaceWith(restaurantContent);

  // Update the live region so screen readers announce that loading has finished, then clear the busy state.
  region.querySelector('.is-visuallyHidden').textContent = 'Restaurants loaded';
  region.setAttribute('aria-busy', 'false');
}
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

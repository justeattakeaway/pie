# @justeattakeaway/pie-list
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-list) | [Design Documentation](https://pie.design/components/list) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-list)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-list">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-list.svg">
  </a>
</p>

`@justeattakeaway/pie-list` is a Web Component built using the Lit library. It provides a simple, accessible list built from two elements: a `pie-list` container and one or more `pie-list-item` children.

> [!NOTE]
> This component is still growing. More properties, slots and sub-components will be added over time. This documentation covers what is currently supported.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Accessibility](#accessibility)
- [Usage Examples](#usage-examples)
- [Usage Notes and Rules](#usage-notes-and-rules)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

`pie-list` is a compound component. The `pie-list` element is the container (it applies the `list` role and renders the dividers between items), and each row is a `pie-list-item` (which applies the `listitem` role).

> [!IMPORTANT]
> Because `pie-list` uses the `list` role, you **must always give it an accessible name** using either `aria-label` or `aria-labelledby`. Without one, screen reader users get no context for what the list contains. See [Accessibility](#accessibility).

### Properties

#### `pie-list`

`pie-list` currently has no configurable properties. It acts as the semantic container for `pie-list-item` children.

#### `pie-list-item`

| Prop | Options | Description | Default |
|---|---|---|---|
| `primaryText` | Any string | **Required.** The main text of the item, providing an overview of the content. | `undefined` |
| `secondaryText` | Any string | Optional additional detail, rendered on a second line beneath the primary text. | `undefined` |
| `metaText` | Any string | Optional supporting information about the item's context, status or attributes. Rendered as a trailing text string. **Mutually exclusive with the `trailing` slot**: if `metaText` is set, the `trailing` slot is not rendered. | `undefined` |
| `isCompact` | `true`, `false` | Decreases the item height to save vertical space. See the [rules](#usage-notes-and-rules) below. | `false` |
| `isBold` | `true`, `false` | Sets the primary text to a bold font-weight. | `false` |
| `hasMedia` | `true`, `false` | **Required whenever you slot a media element (e.g. `pie-thumbnail`) into the item.** Reduces the block padding so single-line media sits correctly (this padding adjustment has no effect when `secondaryText` is set, but you should still set `hasMedia`). | `false` |

### Slots

Slots are provided by `pie-list-item`.

| Slot | Description |
|---|---|
| `leading` | Content displayed at the start of the item, before the text. Intended for a small icon or a media element (e.g. `pie-thumbnail`). If slotting `pie-thumbnail`, it MUST use `size="40"`; this is the only size that fits the list-item layout correctly. |
| `trailing` | Content displayed at the end of the item, after the text. Intended for a small icon, a `pie-tag`, etc. Not rendered when `metaText` is set. |

The permitted slotted elements are: a PIE WEBC icon, `pie-tag`, `pie-thumbnail`, `pie-avatar`*, `pie-switch`, and native HTML radio/checkbox inputs.
Some slotted content is designed with specific properties being used. So please read the entire readme to understand correct slot usage.

> Slotted PIE icons are always sized by `pie-list-item` (24px). Consumers cannot override this size.

> \* `pie-avatar` is a permitted slot element but is not covered by usage examples here yet, as it is not ready for use in lists.

### CSS Variables

These custom properties can be set on a `pie-list-item` (or on `pie-list` to affect all items) to override the defaults.

| Variable | Description | Accepted values |
|---|---|---|
| `--list-item-inline-padding-override` | Overrides the inline (start and end) padding of the item. | Any PIE spacing token (e.g. `var(--dt-spacing-f)`) or `0` |
| `--list-item-alignment-override` | Overrides the vertical alignment of the item's content. | Only `center` is recommended |

### Events

This component does not emit any custom events. To listen for interactions, treat slotted interactive elements like native HTML elements in your application.

## Accessibility

`pie-list` renders with `role="list"` and each `pie-list-item` with `role="listitem"`.

> [!IMPORTANT]
> **Always provide an accessible name for `pie-list`** via `aria-label` or `aria-labelledby`. A list with the `list` role has no inherent name, so without one a screen reader announces "list" with no indication of what it contains.

- Use **`aria-label`** when there is no visible heading for the list:

  ```html
  <pie-list aria-label="Payment methods">
    <pie-list-item primaryText="Credit card"></pie-list-item>
    <pie-list-item primaryText="PayPal"></pie-list-item>
  </pie-list>
  ```

- Use **`aria-labelledby`** to reference a visible heading (preferred when one exists, so the visible and accessible names stay in sync):

  ```html
  <h2 id="payment-methods-heading">Payment methods</h2>
  <pie-list aria-labelledby="payment-methods-heading">
    <pie-list-item primaryText="Credit card"></pie-list-item>
    <pie-list-item primaryText="PayPal"></pie-list-item>
  </pie-list>
  ```

## Usage Examples

**For HTML:**

```js
// import as modules into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
```

A basic list with primary, secondary and meta text (note the required `aria-label`):

```html
<pie-list aria-label="Recent orders">
  <pie-list-item
    primaryText="Primary text"
    secondaryText="Secondary text"
    metaText="Meta text"></pie-list-item>
  <pie-list-item
    primaryText="Primary text"
    secondaryText="Secondary text"></pie-list-item>
  <pie-list-item primaryText="Primary text"></pie-list-item>
</pie-list>
<script type="module" src="/main.js"></script>
```

**Leading and trailing content (icons):**

```js
import '@justeattakeaway/pie-icons-webc/dist/IconChevronRight.js';
```

```html
<pie-list>
  <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
    <icon-placeholder slot="leading"></icon-placeholder>
    <icon-chevron-right slot="trailing"></icon-chevron-right>
  </pie-list-item>
</pie-list>
```

**Trailing `pie-tag`:**

```js
import '@justeattakeaway/pie-webc/components/tag.js';
```

```html
<pie-list>
  <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
    <pie-tag slot="trailing">Label</pie-tag>
  </pie-list-item>
</pie-list>
```

**Meta text** (renders as trailing text; do not combine with the `trailing` slot):

```html
<pie-list>
  <pie-list-item
    primaryText="Primary text"
    secondaryText="Secondary text"
    metaText="Meta text"></pie-list-item>
</pie-list>
```

**Bold primary text:**

```html
<pie-list>
  <pie-list-item is-bold primaryText="Primary text"></pie-list-item>
</pie-list>
```

**Compact list** (reduced height, see [rules](#usage-notes-and-rules)):

```html
<pie-list>
  <pie-list-item is-compact primaryText="Primary text">
    <icon-chevron-right slot="trailing"></icon-chevron-right>
  </pie-list-item>
  <pie-list-item is-compact primaryText="Primary text">
    <icon-chevron-right slot="trailing"></icon-chevron-right>
  </pie-list-item>
</pie-list>
```

**Media (`pie-thumbnail`) in the leading slot:**

```js
import '@justeattakeaway/pie-webc/components/thumbnail.js';
```

```html
<!-- `has-media` is REQUIRED whenever you slot a thumbnail. Without it the
     block padding will be incorrect. -->
<pie-list aria-label="Restaurants">
  <pie-list-item has-media primaryText="Primary text">
    <pie-thumbnail slot="leading" size="40"></pie-thumbnail>
  </pie-list-item>
</pie-list>

<!-- Still set `has-media` when there is secondary text. The padding is unchanged
     in this case, but you should still set it. -->
<pie-list aria-label="Restaurants">
  <pie-list-item has-media primaryText="Primary text" secondaryText="Secondary text">
    <pie-thumbnail slot="leading" size="40"></pie-thumbnail>
  </pie-list-item>
</pie-list>
```

**Overriding alignment and padding** (via CSS variables):

```html
<!-- Vertically centre the content of every item in the list -->
<pie-list style="--list-item-alignment-override: center;">
  <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
    <icon-chevron-right slot="trailing"></icon-chevron-right>
  </pie-list-item>
</pie-list>

<!-- Remove the inline padding -->
<pie-list style="--list-item-inline-padding-override: 0;">
  <pie-list-item primaryText="Primary text"></pie-list-item>
</pie-list>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';

<pie-list>
  <pie-list-item primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
</pie-list>
```

**For React Applications:**

```jsx
import { PieList } from '@justeattakeaway/pie-webc/react/list.js';
import { PieListItem } from '@justeattakeaway/pie-webc/react/list-item.js';

<PieList>
  <PieListItem primaryText="Primary text" secondaryText="Secondary text">
    <PieThumbnail slot="leading" size={40} />
  </PieListItem>
</PieList>
```

## Usage Notes and Rules

To keep lists consistent and correct, follow these rules:

- **Always give `pie-list` an accessible name** with `aria-label` or `aria-labelledby` (use `aria-labelledby` when a visible heading exists). This is required for screen reader users to understand the list. See [Accessibility](#accessibility).
- **`primaryText` is required** on every `pie-list-item`. An item with no primary text will not render.
- **`metaText` and the `trailing` slot are mutually exclusive.** If `metaText` is set, any `trailing` slot content is ignored. Choose one.
- **Slotted `pie-thumbnail` must use `size="40"`.** This is the only size that fits the list-item layout correctly.
- **Always set `has-media` when slotting media** (`pie-thumbnail`, and `pie-avatar` in future), whether or not the item has `secondaryText`. This guarantees the item has the correct block padding.
- **Do not combine `is-compact` with `secondaryText` or with slotted media.** Compact items are single-line and too short for these.
- **Only use `center` for `--list-item-alignment-override`.** Other values are not supported.
- **`pie-avatar` is not yet ready** for use in lists. Prefer `pie-thumbnail` for media for now.

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

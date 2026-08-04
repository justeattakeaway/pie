# @justeattakeaway/pie-list
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-list) | [Design Documentation](https://pie.design/components/list) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-list)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-list">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-list.svg">
  </a>
</p>

`@justeattakeaway/pie-list` is a Web Component built using the Lit library. It provides a simple, accessible list built from two elements: a `pie-list` container and one or more `pie-list-item` children.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Accessibility](#accessibility)
  - [You never set ARIA on a list item or its slotted content](#you-never-set-aria-on-a-list-item-or-its-slotted-content)
  - [How the naming is derived](#how-the-naming-is-derived)
- [Usage Examples](#usage-examples)
  - [Basic list](#basic-list)
  - [Leading and trailing content](#leading-and-trailing-content)
  - [Trailing tag](#trailing-tag)
  - [Meta text](#meta-text)
  - [Bold primary text](#bold-primary-text)
  - [Compact list](#compact-list)
  - [Media](#media)
  - [Overriding alignment and padding](#overriding-alignment-and-padding)
  - [Selectable lists](#selectable-lists)
    - [Single-select (radios)](#single-select-radios)
    - [Multi-select (checkboxes)](#multi-select-checkboxes)
    - [Independent toggles (switches)](#independent-toggles-switches)
  - [Link items](#link-items)
    - [Indicating the current page](#indicating-the-current-page)
  - [Button items](#button-items)
  - [Framework variants](#framework-variants)
- [Usage Notes and Rules](#usage-notes-and-rules)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

`pie-list` is a compound component. The `pie-list` element is the container (it applies the `list` role), and each row is a `pie-list-item` (which applies the `listitem` role).

> [!IMPORTANT]
> Because `pie-list` uses the `list` role, you **must always give it an accessible name** using either `aria-label` or `aria-labelledby`. Without one, screen reader users get no context for what the list contains. See [Accessibility](#accessibility).

### Properties

#### `pie-list`

`pie-list` currently has no configurable properties. It acts as the semantic container for `pie-list-item` children.

#### `pie-list-item`

| Prop | Options | Description | Default |
|---|---|---|---|
| `primaryText` | Any string | The main text of the item, providing an overview of the content. | `undefined` |
| `secondaryText` | Any string | Optional additional detail, rendered on a second line beneath the primary text. | `undefined` |
| `metaText` | Any string | Optional supporting information about the item's context, status or attributes. Rendered as a trailing text string. **Mutually exclusive with the `trailing` slot**: if `metaText` is set, the `trailing` slot is not rendered. | `undefined` |
| `isCompact` | `true`, `false` | Decreases the item height to save vertical space. See the [rules](#usage-notes-and-rules) below. | `false` |
| `isBold` | `true`, `false` | Sets the primary text to a bold font-weight. | `false` |
| `hasMedia` | `true`, `false` | **Required whenever you slot a media element (e.g. `pie-thumbnail`) into the item.** Reduces the block padding so single-line media sits correctly (this padding adjustment has no effect when `secondaryText` is set, but you should still set `hasMedia`). | `false` |
| `interactionType` | `"none"`, `"radio"`, `"checkbox"`, `"switch"`, `"link"`, `"button"` | Declares how the **whole row** behaves, and drives its role, accessible naming, click forwarding and interactive states from this one prop. `"none"` is a static item; `"radio"`/`"checkbox"`/`"switch"` host the matching control in the `leading`/`trailing` slot; `"link"` turns the row into a single navigation link (slot an empty `<a slot="link" href="...">`); `"button"` turns the row into a single button for an in-page action (the item renders the button for you - listen for `click`). See [Selectable lists](#selectable-lists), [Link items](#link-items) and [Button items](#button-items). | `"none"` |
| `disabled` | `true`, `false` | Marks the row as disabled: it takes the disabled styling and stops forwarding row clicks to its control. Set it alongside the slotted control's own `disabled` (the control still governs its own interactivity). No visible effect on a non-selectable (static) item. | `false` |
| `hasDivider` | `true`, `false` | Renders a bottom divider on the item. Dividers are opt-in: set this on every item that should have one. Typically all items in a group except the last. | `false` |
| `aria` | `{ button?: { haspopup?: "menu" \| "listbox" \| "tree" \| "grid" \| "dialog" \| "true" } }` | Additional ARIA properties that the item cannot derive from its text props. `button.haspopup` only applies when `interactionType="button"` and is forwarded to the internal `<button>` element. Set it when the button row triggers a popup such as a dialog or menu. | `undefined` |

### Slots

Slots are provided by `pie-list-item`.

| Slot | Description |
|---|---|
| `leading` | Content displayed at the start of the item, before the text. Intended for a small icon or a media element (e.g. `pie-thumbnail`). If slotting `pie-thumbnail`, it MUST use `size="40"`; this is the only size that fits the list-item layout correctly. |
| `trailing` | Content displayed at the end of the item, after the text. Intended for a small icon, a `pie-tag`, etc. Not rendered when `metaText` is set. |
| `link` | Only rendered when `interactionType="link"`. Slot a single **empty** anchor (`<a slot="link" href="...">`) here. It is stretched over the whole row so the entire item becomes the navigation target. The item supplies the anchor's accessible name and description from its text, so the anchor must contain no text of its own; apply any native anchor attributes you need (`href`, `target`, `rel`, and so on). See [Link items](#link-items). |

The permitted slotted elements are: a PIE WEBC icon, `pie-tag`, `pie-thumbnail`, `pie-avatar`*, `pie-switch`, and native HTML radio/checkbox inputs.
Some slotted content is designed with specific properties being used. So please read the entire readme to understand correct slot usage.

> [!NOTE]
> `pie-list` is a **static** container: it has no selection state or keyboard behaviour. For a **selectable** list, do not slot the controls into `pie-list`. Place `pie-list-item`s inside a [`pie-radio-group`](https://webc.pie.design/?path=/docs/components-radio-group--overview) (single-select) or a [`pie-checkbox-group`](https://webc.pie.design/?path=/docs/components-checkbox-group--overview) (multi-select) instead. See [Selectable lists](#selectable-lists) below.

> Slotted PIE icons are always sized by `pie-list-item` (24px). Consumers cannot override this size.

> \* `pie-avatar` is a permitted slot element but is not covered by usage examples here yet, as it is not ready for use in lists.

### CSS Variables

These custom properties can be set on a `pie-list-item` (or on `pie-list` to affect all items) to override the defaults.

| Variable | Description | Accepted values |
|---|---|---|
| `--list-item-inline-padding` | Sets the inline (start and end) padding of the item. Defaults to `var(--dt-spacing-d)`. **Must be set on the `pie-list-item`** (directly or via a rule targeting it), not on `pie-list` — the default lives on the item's host, so an inherited value from `pie-list` will not override it. | Any PIE spacing token (e.g. `var(--dt-spacing-f)`) or `0` |
| `--list-item-alignment` | Sets the vertical alignment of the item's content. Defaults to `flex-start`. **Must be set on the `pie-list-item`** (directly or via a rule targeting it), not on `pie-list` — the default lives on the item's host, so an inherited value from `pie-list` will not override it. | Only `center` is recommended |

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

### You never set ARIA on a list item or its slotted content

> [!IMPORTANT]
> You do **not** add any ARIA attributes to a `pie-list-item`, nor to the control, anchor, icon or media you slot into it. The item manages all of that for you, driven entirely by the `primaryText`, `secondaryText` and `metaText` props (and the `interactionType`). Just provide the text and slot the element in.

Specifically, for **every** interaction type the item takes care of:

- the **role** on the item itself (`listitem`, or `presentation` for radio/checkbox rows so the group owns the control directly) - you never write `role="..."`;
- the **accessible name and description** of whatever it hosts - you never write `aria-label`, `aria-labelledby`, `aria-description` or `aria-describedby` on the control, anchor or button;
- **hiding the duplicated visible text** from assistive technology (the item `aria-hidden`s its own text once the name/description have been mirrored onto the interactive element), so nothing is announced twice.

The one accessibility attribute you **do** own is the accessible name of the `pie-list` container itself (`aria-label` / `aria-labelledby`), because only you know what the list represents. See the note above.

### How the naming is derived

When a `pie-list-item` hosts an interactive element (a slotted control set via `interactionType="radio" | "checkbox" | "switch"`, a slotted link anchor via `interactionType="link"`, or the button it renders for `interactionType="button"`) it generates that element's accessibility naming from its own text:

- `primaryText` becomes the element's **accessible name**;
- `secondaryText` and `metaText` become its **accessible description** (combined with a full stop when both are present);
- the visible text rendered inside the item is `aria-hidden`, so a screen reader announces the name and description once (via the interactive element) rather than twice.

How the naming reaches the element differs by type, but this is entirely internal - you never do it yourself. Selection controls receive it through a shared context and each applies it to the element that carries its role: `pie-radio` names its host, while `pie-checkbox` and `pie-switch` name their internal `input` (their host is role-less). A link anchor is a plain light-DOM element you slot (not a PIE control), so `pie-list-item` sets `aria-label` and `aria-description` on it directly. A `button` row's button is one the item renders itself, so it is named the same way from within the item.

**For slotted elements, anything you set yourself wins.** If a slotted control already has its own name (its `label` or `aria` prop), or the slotted link anchor already has an `aria-label`/`aria-labelledby` (or `aria-description`/`aria-describedby`), the item leaves it untouched and does not overwrite it. This is an escape hatch for the rare case that needs it, not something you normally reach for. (A `button` row's button is rendered and named by the item, so there is nothing for you to set.)

## Usage Examples

The examples below use HTML. For framework-specific syntax, see [Framework variants](#framework-variants).

### Basic list

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

### Leading and trailing content

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

### Trailing tag

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

### Meta text

Renders as trailing text; do not combine with the `trailing` slot:

```html
<pie-list>
  <pie-list-item
    primaryText="Primary text"
    secondaryText="Secondary text"
    metaText="Meta text"></pie-list-item>
</pie-list>
```

### Bold primary text

```html
<pie-list>
  <pie-list-item isBold primaryText="Primary text"></pie-list-item>
</pie-list>
```

### Compact list

Reduced height, see [rules](#usage-notes-and-rules):

```html
<pie-list>
  <pie-list-item isCompact primaryText="Primary text">
    <icon-chevron-right slot="trailing"></icon-chevron-right>
  </pie-list-item>
  <pie-list-item isCompact primaryText="Primary text">
    <icon-chevron-right slot="trailing"></icon-chevron-right>
  </pie-list-item>
</pie-list>
```

### Media

Slot larger media such as `pie-thumbnail` into the `leading` slot:

```js
import '@justeattakeaway/pie-webc/components/thumbnail.js';
```

```html
<!-- `hasMedia` is REQUIRED whenever you slot a thumbnail. Without it the
     block padding will be incorrect. -->
<pie-list aria-label="Restaurants">
  <pie-list-item hasMedia primaryText="Primary text">
    <pie-thumbnail slot="leading" size="40"></pie-thumbnail>
  </pie-list-item>
</pie-list>

<!-- Still set `hasMedia` when there is secondary text. The padding is unchanged
     in this case, but you should still set it. -->
<pie-list aria-label="Restaurants">
  <pie-list-item hasMedia primaryText="Primary text" secondaryText="Secondary text">
    <pie-thumbnail slot="leading" size="40"></pie-thumbnail>
  </pie-list-item>
</pie-list>
```

### Overriding alignment and padding

Via CSS variables:

```html
<!-- Vertically centre the content of the items. `--list-item-alignment` must be set on the
     `pie-list-item` (here via a rule targeting every item), not on `pie-list`. -->
<style>pie-list-item { --list-item-alignment: center; }</style>
<pie-list>
  <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
    <icon-chevron-right slot="trailing"></icon-chevron-right>
  </pie-list-item>
</pie-list>

<!-- Remove the inline padding. `--list-item-inline-padding` must be set on the `pie-list-item`
     (its default lives on the item's host, so a value on `pie-list` will not override it). -->
<pie-list>
  <pie-list-item style="--list-item-inline-padding: 0;" primaryText="Primary text"></pie-list-item>
</pie-list>
```

### Selectable lists

`pie-list` itself is a static container with no selection or keyboard behaviour. To build a **selectable** list, do **not** put the controls in `pie-list`. Instead, place `pie-list-item`s inside a [`pie-radio-group`](https://webc.pie.design/?path=/docs/components-radio-group--overview) (single-select) or a [`pie-checkbox-group`](https://webc.pie.design/?path=/docs/components-checkbox-group--overview) (multi-select), set each item's `interactionType`, and slot the control into the item's `leading` (or `trailing`) slot. Switches have no group, so `interactionType="switch"` rows go directly in a `pie-list`.

#### The `interactionType` prop

`interactionType` (set to `"radio"`, `"checkbox"` or `"switch"`) is what makes a row selectable. Setting it drives the item to:

- take the correct **role** — `presentation` for `radio`/`checkbox` (so the group owns the controls directly), `listitem` for `switch` and `none`;
- provide its `primaryText`, `secondaryText` and `metaText` as the slotted control's **accessible name and description** (and `aria-hidden` the now-duplicated visible text);
- **forward a click** anywhere on the row to the control, so the whole row is a hit target;
- show **hover and active** states on the row (suppressed when the control is disabled, or when its group is disabled; switches have no group, so only per-row and per-switch disable applies).

Provide the label through the item's `primaryText` — not as the control's own content. The group still owns the group-level semantics (its own role, shared `name`, selection coordination and group-disable); `interactionType` only governs the item. See the [`pie-radio-group`](https://webc.pie.design/?path=/docs/components-radio-group--overview) and [`pie-checkbox-group`](https://webc.pie.design/?path=/docs/components-checkbox-group--overview) docs for the group behaviour.

You do not add any ARIA to the item or the slotted control - `pie-list-item` derives the control's accessible name and description from your `primaryText`, `secondaryText` and `metaText`. See [Accessibility](#accessibility).

#### Single-select (radios)

```js
import '@justeattakeaway/pie-webc/components/radio-group.js';
import '@justeattakeaway/pie-webc/components/radio.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
```

```html
<!-- `interactionType="radio"` makes each row selectable. `value` on the group selects the matching
     radio (here, Express). Set `hasDivider` on every item except the last. -->
<pie-radio-group name="delivery" value="express">
  <pie-list-item hasDivider interactionType="radio" primaryText="Standard delivery" secondaryText="3 to 5 working days" metaText="Free">
    <pie-radio slot="leading" value="standard"></pie-radio>
  </pie-list-item>
  <pie-list-item interactionType="radio" primaryText="Express delivery" secondaryText="Next working day" metaText="£4.99">
    <pie-radio slot="leading" value="express"></pie-radio>
  </pie-list-item>
</pie-radio-group>
```

#### Multi-select (checkboxes)

```js
import '@justeattakeaway/pie-webc/components/checkbox-group.js';
import '@justeattakeaway/pie-webc/components/checkbox.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
```

```html
<!-- Set `hasDivider` on every item except the last. -->
<pie-checkbox-group>
  <pie-list-item hasDivider interactionType="checkbox" primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
    <pie-checkbox slot="leading" name="cheese"></pie-checkbox>
  </pie-list-item>
  <pie-list-item interactionType="checkbox" primaryText="Pepperoni" secondaryText="Spicy">
    <pie-checkbox slot="leading" name="pepperoni"></pie-checkbox>
  </pie-list-item>
</pie-checkbox-group>
```

#### Independent toggles (switches)

There is no group, so the rows go in a `pie-list` (which needs its own accessible name), and the switch sits in the `trailing` slot. Set `disabled` on the `pie-list-item` alongside any disabled `pie-switch`:

```js
import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
import '@justeattakeaway/pie-webc/components/switch.js';
```

```html
<pie-list aria-label="Notification settings">
  <pie-list-item hasDivider interactionType="switch" primaryText="Email" secondaryText="Order updates and receipts">
    <pie-switch slot="trailing"></pie-switch>
  </pie-list-item>
  <pie-list-item hasDivider interactionType="switch" primaryText="Push notifications">
    <pie-switch slot="trailing"></pie-switch>
  </pie-list-item>
  <pie-list-item interactionType="switch" primaryText="SMS" disabled>
    <pie-switch slot="trailing" disabled></pie-switch>
  </pie-list-item>
</pie-list>
```

Each `pie-switch` manages its own state and emits a native `change` event when toggled. Listen on the switch itself, or on the `pie-list` since the event bubbles. Set a switch's initial state with its `checked` prop. There is no group coordinating them, so each switch is independent.

### Link items

Set `interactionType="link"` and slot a single **empty** anchor into the `link` slot to turn the whole row into one navigation link. The anchor is stretched over the entire item (`position: absolute; inset: 0`), so a click or tap anywhere on the row follows the link, and keyboard focus lands on the row as a whole (the focus ring hugs the row).

Because the anchor is empty, `pie-list-item` names it from its own text: `primaryText` becomes the anchor's `aria-label` and `secondaryText`/`metaText` its `aria-description`, and the visible text is hidden from assistive technology so nothing is announced twice (see [You never set ARIA on a list item or its slotted content](#you-never-set-aria-on-a-list-item-or-its-slotted-content)). If you set your own `aria-label`/`aria-labelledby` (or `aria-description`/`aria-describedby`) on the anchor, that wins and the item leaves it untouched. Apply whatever native anchor attributes you need (`href`, `target`, `rel`, `download`, and so on); the only requirement is that the anchor **contains no text** (it must stay empty for the naming to work). Give the `pie-list` its own accessible name (e.g. `aria-label`).

```js
import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
```

```html
<pie-list aria-label="Manage your restaurant">
  <pie-list-item hasDivider interactionType="link" primaryText="Orders" secondaryText="View and manage live orders" metaText="12 active">
    <a slot="link" href="/orders"></a>
  </pie-list-item>
  <pie-list-item interactionType="link" primaryText="Menu" secondaryText="Edit items, prices and photos">
    <a slot="link" href="/menu"></a>
  </pie-list-item>
</pie-list>
```

You are not limited to a raw `<a>`. Any component that renders an anchor and forwards the `slot` attribute works the same way, so in **Next.js you can slot the `next/link` `<Link>` component** (and in Nuxt, `<NuxtLink>`). Slot it into `link`, keep it empty, and `pie-list-item` names it exactly as it names a raw anchor:

```jsx
// Next.js
import Link from 'next/link';
import { PieListItem } from '@justeattakeaway/pie-webc/react/list-item.js';

<PieListItem interactionType="link" primaryText="Orders" secondaryText="View and manage live orders">
  <Link slot="link" href="/orders" />
</PieListItem>
```

#### Indicating the current page

To highlight the active link in a navigation list, combine `isBold` on the `pie-list-item` with `aria-current="page"` on the slotted anchor. `isBold` gives the active item a heavier weight visually; `aria-current="page"` communicates the current page to assistive technology. `pie-list-item` only manages the anchor's `aria-label` and `aria-description`, so `aria-current` does not conflict with the item's naming logic and is safe to set yourself.

You can also slot a tick icon into the `trailing` slot of the active item as an additional visual indicator. PIE icons render with `role="presentation"` on their SVG, so they are already hidden from assistive technology and no extra `aria-hidden` is needed.

```js
import '@justeattakeaway/pie-icons-webc/dist/IconCheck.js';
```

```html
<pie-list aria-label="Account navigation">
  <pie-list-item hasDivider interactionType="link" primaryText="Overview">
    <a slot="link" href="/account"></a>
  </pie-list-item>
  <pie-list-item hasDivider interactionType="link" isBold primaryText="Orders">
    <a slot="link" href="/account/orders" aria-current="page"></a>
    <icon-check slot="trailing"></icon-check>
  </pie-list-item>
  <pie-list-item hasDivider interactionType="link" primaryText="Payment methods">
    <a slot="link" href="/account/payment"></a>
  </pie-list-item>
  <pie-list-item interactionType="link" primaryText="Addresses">
    <a slot="link" href="/account/addresses"></a>
  </pie-list-item>
</pie-list>
```

In React, pass `isBold` as a prop and `aria-current="page"` directly to the `<Link>` component (or raw anchor):

```jsx
import { IconCheck } from '@justeattakeaway/pie-icons-webc/dist/IconCheck.js';

<PieListItem interactionType="link" isBold primaryText="Orders">
  <Link slot="link" href="/account/orders" aria-current="page" />
  <IconCheck slot="trailing" />
</PieListItem>
```

### Button items

Set `interactionType="button"` to turn the whole row into one button. Use this for an **in-page action** (opening a dialog, running a command); use [`link`](#link-items) when the row navigates to another page. Unlike a link, **you do not slot anything** - the item renders the interactive element for you: an invisible, row-sized native `<button type="button">` stretched over the row. A click or tap anywhere on the row activates it, and keyboard focus lands on the row as a whole (the focus ring hugs the row). It is just an action trigger, **not a form control** - it is `type="button"`, so it never submits a form, and it carries no value.

The item names the button from its own text: `primaryText` becomes the button's `aria-label` and `secondaryText`/`metaText` its `aria-description`, and the visible text is hidden from assistive technology so nothing is announced twice (see [You never set ARIA on a list item or its slotted content](#you-never-set-aria-on-a-list-item-or-its-slotted-content)).

**Handle activation by listening for `click`** on the `pie-list-item` (or on the `pie-list`, since the event bubbles). Because it is a real `<button>`, activation is native: both pointer taps and keyboard (Enter, and Space) fire a `click`, so a single `click` listener covers every input. The row shows a pressed tint while it is pressed - by pointer, or while Space is held on the focused row - and the focus ring on keyboard focus. Give the `pie-list` its own accessible name (e.g. `aria-label`).

**When the button opens a popup (dialog, menu, etc.)**, pass the `aria` prop with `button.haspopup` set to the popup type. This is forwarded to the internal `<button>` so assistive technology announces it correctly:

```html
<!-- A row that opens a dialog -->
<pie-list-item
  interactionType="button"
  primaryText="Delete account"
  secondaryText="Permanently remove your account"
  .aria=${{ button: { haspopup: 'dialog' } }}>
</pie-list-item>
```

In React:

```jsx
<PieListItem
  interactionType="button"
  primaryText="Delete account"
  secondaryText="Permanently remove your account"
  aria={{ button: { haspopup: 'dialog' } }}
  onClick={openConfirmDialog}
/>
```

```js
import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
```

```html
<pie-list aria-label="Account actions">
  <pie-list-item hasDivider interactionType="button" primaryText="Edit profile" secondaryText="Update your name and photo"></pie-list-item>
  <pie-list-item interactionType="button" primaryText="Sign out" secondaryText="End your session on this device"></pie-list-item>
</pie-list>

<script type="module">
  document.querySelector('pie-list').addEventListener('click', (event) => {
    const item = event.target.closest('pie-list-item');
    if (item) runActionFor(item.primaryText);
  });
</script>
```

In React, attach an `onClick` to the item:

```jsx
import { PieListItem } from '@justeattakeaway/pie-webc/react/list-item.js';

<PieListItem interactionType="button" primaryText="Edit profile" secondaryText="Update your name and photo" onClick={openProfileEditor} />
```

### Framework variants

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
- **Provide `primaryText`** on every `pie-list-item`; it is the item's main line of content.
- **Set `hasDivider` on every item that should show a bottom divider**, typically all but the last. Dividers are opt-in per item; the container does not add them automatically.
- **For selectable lists, use `pie-list-item` inside `pie-radio-group` or `pie-checkbox-group`, not `pie-list`.** `pie-list` is a static container with no selection or keyboard behaviour. See [Selectable lists](#selectable-lists).
- **`metaText` and the `trailing` slot are mutually exclusive.** If `metaText` is set, any `trailing` slot content is ignored. Choose one.
- **Slotted `pie-thumbnail` must use `size="40"`.** This is the only size that fits the list-item layout correctly.
- **Always set `hasMedia` when slotting media** (`pie-thumbnail`, and `pie-avatar` in future), whether or not the item has `secondaryText`. This guarantees the item has the correct block padding.
- **Do not combine `isCompact` with `secondaryText` or with slotted media.** Compact items are single-line and too short for these.
- **Only use `center` for `--list-item-alignment`.** Other values are not supported.
- **`pie-avatar` is not yet ready** for use in lists. Prefer `pie-thumbnail` for media for now.

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

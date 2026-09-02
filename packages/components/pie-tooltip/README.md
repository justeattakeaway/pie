# @justeattakeaway/pie-tooltip
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-tooltip) | [Design Documentation](https://pie.design/components/tooltip) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-tooltip)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-tooltip">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-tooltip.svg">
  </a>
</p>

`@justeattakeaway/pie-tooltip` is a Web Component built using the Lit library. It provides an accessible panel that is anchored to a trigger elsewhere on the page.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Controlled component](#controlled-component)
  - [Properties](#properties)
  - [Slots](#slots)
  - [Events](#events)
  - [CSS Variables](#css-variables)
- [Positioning](#positioning)
- [Sizing](#sizing)
- [Accessibility](#accessibility)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Controlled component

`pie-tooltip` is a controlled component. It never writes to its own `isOpen`.

1. You own `isOpen`.
2. You listen for `pie-tooltip-close`.
3. You pass the value back.

### Properties

| Prop | Options | Description | Default |
|---|---|---|---|
| `trigger` | Any string | The `id` of the element the panel is anchored to. The trigger lives elsewhere in the DOM and is never slotted into the tooltip. | `undefined` |
| `isOpen` | `true`, `false` | When true, the panel is visible. The component never writes to this property. | `false` |
| `position` | `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end` | The side of the trigger the panel sits on, and its alignment along the cross axis. | `top` |
| `size` | `default`, `fit-to-content`, `fill-container` | How the panel sizes itself. `default` is a fixed 280px and wraps, `fit-to-content` is as wide as its content, and `fill-container` matches the inline size of the trigger's parent element. Not applied when `type` is `icon`. | `default` |
| `variant` | `default`, `inverse` | The colour treatment of the panel. `default` is the dark panel, `inverse` the light one. | `default` |
| `type` | `default`, `icon` | The presentation of the panel. `icon` is the compact treatment intended for icon triggers: it has no arrow and is always as wide as its content, so `size` and `--tooltip-width` have no effect on it. | `default` |
| `isDismissible` | `true`, `false` | When true, a close button is rendered inside the panel. | `false` |
| `heading` | Any string | The text to display in the panel's heading. In dialog mode this also provides the panel's accessible name. | `undefined` |
| `headingLevel` | `h2`, `h3`, `h4`, `h5`, `h6` | The HTML heading tag to use for the panel's heading. | `h2` |
| `aria` | `{ close?: string, label?: string }` | `close` names the close button. `label` names the panel in dialog mode when no `heading` is provided. | `undefined` |

### Slots

| Slot | Description |
|---|---|
| `content` | The descriptive content of the panel. Must not contain focusable elements. |
| `action` | Designed for using `pie-button`. Filling this slot switches the panel from a tooltip to a non-modal dialog. When using `pie-button` always set the size to `xsmall`.|

### Events

| Event | Type | Description |
|---|---|---|
| `pie-tooltip-close` | `Event` | Emitted when the close button is clicked. Set `isOpen` to `false` in response. Bubbles and is composed. |

### CSS Variables

| Variable | Description | Default |
|---|---|---|
| `--tooltip-offset` | The gap between the trigger and the arrow's tip, or between the trigger and the panel edge when `type` is `icon`. | `var(--dt-spacing-a)` |
| `--tooltip-width` | Sets the panel's inline size directly, overriding whatever `size` would have produced. Accepts any length. Ignored when `type` is `icon`. | Unset |

Set both on the `pie-tooltip` element itself.

```html
<pie-tooltip style="--tooltip-offset: 16px;" trigger="delivery-info"></pie-tooltip>
```

## Positioning

The component projects itself over the trigger's box and places the panel against that box in CSS. The trigger is found by `id`, so `pie-tooltip` can sit anywhere in the DOM, but reading and tab order follow DOM order, so place it immediately after its trigger.

`position` names a side and, optionally, an alignment along the opposite axis:

```
top      top-start      top-end
bottom   bottom-start   bottom-end
left     left-start     left-end
right    right-start    right-end
```

In right-to-left languages, everything on the inline axis mirrors. The alignments follow the reading direction, so `top-start` aligns against the right-hand edge, and `left` and `right` swap: a panel asked for on the left appears on the right. The `-start` and `-end` alignments of `left` and `right` are on the block axis, which has no direction to mirror, so only the side moves. None of this needs configuration or any JavaScript awareness of direction.

## Sizing

| `size` | Behaviour |
|---|---|
| `default` | The panel is always 280px wide. Longer content wraps. |
| `fit-to-content` | The panel is as wide as its content, up to the width of the viewport. |
| `fill-container` | The panel's inline size matches the inline size of the trigger's parent element, whatever the content. |

`--tooltip-width` overrides all three.

## Accessibility

### The two modes

The panel presents as one of two patterns, inferred from the `action` slot contents. They carry different obligations.

| | `action` slot empty | `action` slot filled |
|---|---|---|
| Panel role | `tooltip` | `dialog` |
| Contains focusable content | No | Yes |
| Accessible name on panel | None | Required, from `heading` or `aria.label` |
| In the accessibility tree while closed | Yes, as the trigger's description | No |

A close button does not make the panel a dialog. Only the `action` slot does.

### What the component does

- Sets `role="tooltip"` or `role="dialog"` from the `action` slot, resolved on the client before the first paint.
- Names the dialog panel from `heading`, falling back to `aria.label`.
- Removes the dialog panel from the accessibility tree while closed. In tooltip mode the content stays in the DOM so that a description referring to it still resolves.
- Names the close button from `aria.close` and places it in the tab sequence inside the panel.
- Keeps the panel clear of the trigger at every placement, so the panel cannot obscure a focused trigger (WCAG 2.4.11).
- Wraps content.

### What you need to do

- **Give the trigger its own accessible name.** The tooltip is a description and never supplies a name. An icon-only trigger must set its own label; `pie-icon-button` already requires `aria.label`.
- **Use a natively interactive element as the trigger**, a button or a link, so focus and click behave correctly.
- **Own `isOpen`.** Listen for `pie-tooltip-close` and set `isOpen` to `false` in response.
- **Keep focusable content out of the `content` slot.** Interactive content belongs in the `action` slot, which switches the panel to a dialog.
- **Place `<pie-tooltip>` immediately after its trigger in the DOM.** The component anchors by `id` and can sit anywhere, but reading and tab order follow DOM order.
- **In dialog mode, provide `heading` or `aria.label`** so the dialog has an accessible name.
- **Provide a translated `aria.close`** whenever `isDismissible` is set.
- **Keep tooltip-mode content short and supplementary.** Anything essential or interactive belongs in dialog mode, or inline in the page.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/tooltip.js'
```

```html
<!-- pass js file into <script> tag -->

<script type="module" src="/main.js"></script>
```

```html
<pie-button id="delivery-info">Delivery times</pie-button>

<pie-tooltip trigger="delivery-info" isOpen isDismissible>
  <span slot="content">Orders placed before 6pm arrive today.</span>
</pie-tooltip>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/tooltip.js'
```

```html
<template>
  <pie-button id="delivery-info">Delivery times</pie-button>

  <pie-tooltip
    trigger="delivery-info"
    :isOpen="isOpen"
    isDismissible
    :aria="{ close: 'Close' }"
    @pie-tooltip-close="isOpen = false">
    <span slot="content">Orders placed before 6pm arrive today.</span>
  </pie-tooltip>
</template>
```

**For React Applications:**

```jsx
import { useState } from 'react';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieTooltip } from '@justeattakeaway/pie-webc/react/tooltip.js';

export function DeliveryTimes () {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <PieButton id="delivery-info">Delivery times</PieButton>

      <PieTooltip
        trigger="delivery-info"
        isOpen={isOpen}
        isDismissible
        aria={{ close: 'Close' }}
        onPieTooltipClose={() => setIsOpen(false)}>
        <span slot="content">Orders placed before 6pm arrive today.</span>
      </PieTooltip>
    </>
  );
}
```

**A dialog panel:**

Filling the `action` slot switches the panel to a non-modal dialog, which then needs an accessible name.

```html
<pie-tooltip trigger="delivery-info" isOpen heading="Delivery times">
  <span slot="content">Orders placed before 6pm arrive today.</span>
  <pie-button slot="action" size="xsmall">Next</pie-button>
</pie-tooltip>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

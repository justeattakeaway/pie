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
  - [Methods](#methods)
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

`pie-tooltip` is a controlled component. It never writes to its own `isOpen`, and it never opens or closes itself.

1. You own `isOpen`.
2. You listen for `pie-tooltip-open` and `pie-tooltip-close`.
3. You pass the value back to open/close the tooltip.

### Properties

| Prop | Options | Description | Default |
|---|---|---|---|
| `trigger` | Any string | The `id` of the element the panel is anchored to. The trigger lives elsewhere in the DOM and is never slotted into the tooltip. | `undefined` |
| `isOpen` | `true`, `false` | When true, the panel is visible. The component never writes to this property. | `false` |
| `position` | `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end` | The preferred side of the trigger the panel sits on, and its alignment along the cross axis. The panel repositions itself when this would collide with the viewport or a clipping scroll container. | `top` |
| `size` | `default`, `fit-to-content`, `fill-container` | How the panel sizes itself. `default` is a fixed 280px and wraps, `fit-to-content` is as wide as its content, and `fill-container` matches the inline size of the trigger's parent element. Not applied when `type` is `icon`. | `default` |
| `variant` | `default`, `inverse` | The colour treatment of the panel. `default` is the dark panel, `inverse` the light one. | `default` |
| `type` | `default`, `icon` | The presentation of the panel. `icon` is the compact treatment intended for icon triggers: it has no arrow and is always as wide as its content, so `size` and `--tooltip-width` have no effect on it. | `default` |
| `isDismissible` | `true`, `false` | When true, a close button is rendered inside the panel, and the panel presents as a non-modal dialog, so it needs `heading` or `aria.label` for its accessible name. | `false` |
| `heading` | Any string | The text to display in the panel's heading. In dialog mode this also provides the panel's accessible name. | `undefined` |
| `headingLevel` | `h2`, `h3`, `h4`, `h5`, `h6` | The HTML heading tag to use for the panel's heading. | `h2` |
| `aria` | `{ close?: string, label?: string }` | `close` names the close button. `label` names the panel in dialog mode when no `heading` is provided. | `undefined` |
| `triggers` | Array of `hover`, `focus`, `click` | Which interactions request that the panel opens and closes. A configured interaction emits an event; it never changes the panel's state on its own. Empty by default, so no interaction is watched at all. Configure `hover` and `focus` together for keyboard reachability. | `[]` |

### Methods

| Method | Returns | Description |
|---|---|---|
| `focusPanel()` | `Promise<boolean>` | Moves focus to the panel's content in dialog mode, so screen readers announce the content, followed by the dialog's name and role, once each. Only needed when the panel contains interactive elements, such as a close button or an action button, which make it a dialog. Call it straight after setting `isOpen`: it waits for the panel's opening update to commit, then retries the focus move until it lands. Resolves `true` once focus is in place, or `false` if the panel is closed or in tooltip mode. The content is `tabindex="-1"`, so it is never reached by Tab. See [Managing focus](#managing-focus). |

### Slots

| Slot | Description |
|---|---|
| `content` | The descriptive content of the panel. Must not contain focusable elements. |
| `action` | Designed for using `pie-button`. Filling this slot switches the panel from a tooltip to a non-modal dialog. When using `pie-button` always set the size to `xsmall`.|

### Events

| Event | Type | Description |
|---|---|---|
| `pie-tooltip-open` | `Event` | Emitted when a configured trigger asks for the panel. Set `isOpen` to `true` in response. Bubbles and is composed. |
| `pie-tooltip-close` | `Event` | Emitted when the close button is clicked, Escape is pressed, or a configured trigger asks to dismiss the panel. Set `isOpen` to `false` in response. Bubbles and is composed. |

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

Place the tooltip next to its trigger element in the DOM for the best accessibility practice. The `position` property will place the tooltip near to the trigger based on which value is provided.

`position` names a side and, optionally, an alignment along the opposite axis:

```
top      top-start      top-end
bottom   bottom-start   bottom-end
left     left-start     left-end
right    right-start    right-end
```

In right-to-left languages, everything on the inline axis mirrors. The alignments follow the reading direction, so `top-start` aligns against the right-hand edge, and `left` and `right` swap: a panel asked for on the left appears on the right. The `-start` and `-end` alignments of `left` and `right` are on the block axis, which has no direction to mirror, so only the side moves.

### Collision detection

`position` is a preference, not a guarantee. Before the panel is shown, and on every scroll, resize or direction change while it is open, the component measures the panel against the space available and repositions it if the preferred position would collide.

- It flips to the opposite side first: `top` to `bottom`, and so on.
- It then tries the remaining sides.
- Within a side, it shifts the alignment (for example `top-start` to `top-end`) so the panel stays fully in view.
- If no position fits entirely, it uses whichever position shows the most of the panel.

The available space is the viewport, narrowed by any ancestor that clips the panel. Collision detection is always on and cannot be disabled.

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

| | `action` slot empty and not dismissible | `action` slot filled or `isDismissible` |
|---|---|---|
| Panel role | `tooltip` | `dialog` |
| Contains focusable content | No | Yes |
| Accessible name on panel | None | Required, from `heading` or `aria.label` |
| In the accessibility tree while closed | Yes, as the trigger's description | No |

A close button makes the panel a dialog: it invites the user inside, and a panel the user enters is announced through focus, not through a description. The same applies to any panel toggled by a click or a tap, so use the `action` slot there. Tooltip mode is for hover- and focus-followed panels only.

### What the component does

- Sets `role="tooltip"` or `role="dialog"` from the `action` slot and `isDismissible`, resolved on the client before the first paint.
- Names the dialog panel from `heading`, falling back to `aria.label`.
- Exposes `focusPanel()` for dialog mode, which moves focus to the panel's content so the content, followed by the dialog's name and role, are announced once each on every screen reader. The panel carries no `aria-describedby`; see [Managing focus](#managing-focus).
- Removes the dialog panel from the accessibility tree while closed. In tooltip mode the panel stays in the DOM, so a description referring to the tooltip still resolves.
- Names the close button from `aria.close` and places it in the tab sequence inside the panel.
- Keeps the panel clear of the trigger at every placement, so the panel cannot obscure a focused trigger (WCAG 2.4.11).
- Wraps content.

It does not touch the trigger, and it does not move focus on its own; `focusPanel()` moves it only when you call it. The component never writes attributes to the element named by `trigger`. See [Wiring the trigger](#wiring-the-trigger) and [Managing focus](#managing-focus).

### What you need to do

- **Wire the trigger yourself.** The ARIA attributes that connect the trigger to the panel are yours to set. See [Wiring the trigger](#wiring-the-trigger) for what to set and when.
- **Move focus yourself in dialog mode.** The panel holds focusable content, so opening it should move focus in and closing it should put focus back. See [Managing focus](#managing-focus).
- **Give the trigger its own accessible name.** The tooltip is a description and never supplies a name. An icon-only trigger must set its own label; `pie-icon-button` already requires `aria.label`.
- **Use a natively interactive element as the trigger**, a button or a link, so focus and click behave correctly.
- **Own `isOpen`.** Listen for `pie-tooltip-close` and set `isOpen` to `false` in response.
- **Keep focusable content out of the `content` slot.** Interactive content belongs in the `action` slot, which switches the panel to a dialog.
- **Make click-toggled or dismissible panels dialogs.** A panel opened by a click or a tap appears with no focus change, so screen readers stay silent; a close button puts the user inside the panel. Both are dialog interactions, so fill the `action` slot and follow [Managing focus](#managing-focus).
- **Place `<pie-tooltip>` immediately after its trigger in the DOM.** The component anchors by `id` and can sit anywhere, but reading and tab order follow DOM order.
- **In dialog mode, provide `heading` or `aria.label`** so the dialog has an accessible name. This includes every dismissible panel, which is a dialog.
- **Provide a translated `aria.close`** whenever `isDismissible` is set.
- **Keep tooltip-mode content short and supplementary.** Anything essential or interactive belongs in dialog mode, or inline in the page.

### Wiring the trigger

The trigger lives outside the tooltip and the component leaves it untouched, so you declare the relationship. What to set depends on the mode.

> The [Screen readers stories](https://webc.pie.design/?path=/story/components-tooltip-screen-readers--docs) show every wiring in this section as live, runnable examples.

| ARIA | Set it when | Value |
|---|---|---|
| `haspopup` | Dialog mode, so the trigger announces that it opens a dialog | `dialog` |
| `expanded` | You toggle the panel from the trigger with a click or a tap | Your `isOpen` value |
| `describedby` | Tooltip mode, and the trigger is a plain HTML element | The `id` of the `pie-tooltip` element itself |

Leave `expanded` off a hover-only or focus-only panel. Nothing is being toggled, so it has nothing to describe. There is no `controls` in the table because it adds nothing here: the description already carries the relationship, and support for it is patchy.

#### Point the description at the tooltip itself

In tooltip mode, give the `<pie-tooltip>` element an `id` and set `aria-describedby` on the trigger to that `id`. The tooltip and a plain HTML trigger live in the same tree, so the reference resolves, and the browser reads the panel's text through the tooltip's shadow root. No `id` is needed on the element in the `content` slot.

```html
<button id="delivery-info" aria-describedby="delivery-panel">Delivery times</button>

<pie-tooltip id="delivery-panel" trigger="delivery-info">
  <span slot="content">Orders placed before 6pm arrive today.</span>
</pie-tooltip>
```

#### A description cannot cross a shadow boundary

`aria-describedby` takes an `id`, and an `id` only resolves inside the tree of the element that references it. The `<button>` inside `pie-icon-button` lives in the component's shadow root, so it cannot see the tooltip's `id` in your document, and `aria.describedby` is unusable for this purpose even though the property exists.

There is no way around this from outside the component. When the trigger is a PIE component, pass the panel's text as the trigger's own description instead. `pie-button` and `pie-icon-button` accept an `aria.description`, which they render as an `aria-description` attribute on their internal element, and a string crosses the shadow boundary where an IDREF cannot:

```js
trigger.aria = {
    label: 'Delivery times',
    description: 'Orders placed before 6pm arrive today.',
};
```

Keep the name short and let the description carry the panel's text. As with `aria-describedby`, the description must stay in step with the content in the `content` slot.

Dialog mode is unaffected: the panel's content is announced when focus moves into it, so it needs no trigger-side description at all.

Dialog mode is unaffected: the panel's content is announced when focus moves into it, so it needs no trigger-side description at all.

#### A tooltip panel on an icon trigger

`hover` and `focus` together give the panel to both pointer and keyboard users. Nothing is toggled, so there is no `expanded`. The trigger is a PIE component, so a description cannot cross the shadow boundary by `id`, so the panel's text travels in the trigger's `aria.description` instead (see [A description cannot cross a shadow boundary](#a-description-cannot-cross-a-shadow-boundary)).

```js
// main.js
import '@justeattakeaway/pie-webc/components/tooltip.js';
import '@justeattakeaway/pie-webc/components/icon-button.js';
import '@justeattakeaway/pie-icons-webc/dist/IconInfoCircle.js';

const trigger = document.querySelector('#delivery-info');
const panel = document.querySelector('#delivery-panel');

trigger.aria = {
    label: 'Delivery times',
    description: 'Orders placed before 6pm arrive today.',
};
panel.triggers = ['hover', 'focus'];

panel.addEventListener('pie-tooltip-open', () => { panel.isOpen = true; });
panel.addEventListener('pie-tooltip-close', () => { panel.isOpen = false; });
```

```html
<script type="module" src="/main.js"></script>

<pie-icon-button id="delivery-info" variant="outline">
  <icon-info-circle></icon-info-circle>
</pie-icon-button>

<pie-tooltip id="delivery-panel" trigger="delivery-info" type="icon">
  <span slot="content">Orders placed before 6pm arrive today.</span>
</pie-tooltip>
```

The two handlers are the whole contract. Without them the panel never opens, because the component only ever asks.

#### A dialog panel toggled from the trigger

Filling the `action` slot makes the panel a dialog, so the trigger gets `haspopup` and, because a click toggles it, `expanded`. Both track the same state you already own.

```jsx
import { useRef, useState } from 'react';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieIconButton } from '@justeattakeaway/pie-webc/react/icon-button.js';
import { PieTooltip } from '@justeattakeaway/pie-webc/react/tooltip.js';
import { IconInfoCircle } from '@justeattakeaway/pie-icons-webc/dist/react/IconInfoCircle.js';

export function DeliveryTimes () {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);

  const open = () => {
    setIsOpen(true);
    // `focusPanel()` waits for the panel's opening update to commit, then moves focus to
    // the content so screen readers announce it with the dialog's name and role.
    tooltipRef.current?.focusPanel();
  };

  const close = () => {
    // Only reclaim focus if it is still inside the panel. Closing on a hover-away or a
    // click elsewhere must not yank focus from whatever the user has moved on to.
    const panelHadFocus = document.activeElement?.closest('pie-tooltip');

    setIsOpen(false);

    if (panelHadFocus) {
      triggerRef.current?.focus({ preventScroll: true });
    }
  };

  return (
    <>
      <PieIconButton
        id="delivery-info"
        ref={triggerRef}
        variant="outline"
        aria={{
          label: 'Delivery times',
          haspopup: 'dialog',
          expanded: isOpen,
        }}>
        <IconInfoCircle />
      </PieIconButton>

      <PieTooltip
        ref={tooltipRef}
        trigger="delivery-info"
        heading="Delivery times"
        isOpen={isOpen}
        isDismissible
        aria={{ close: 'Close' }}
        triggers={['click']}
        onPieTooltipOpen={open}
        onPieTooltipClose={close}>
        <span slot="content">Orders placed before 6pm arrive today.</span>
        <PieButton slot="action" size="xsmall" onClick={close}>
          Got it
        </PieButton>
      </PieTooltip>
    </>
  );
}
```

`isDismissible` and Escape both route through `onPieTooltipClose`, so a single `close` covers the close button, Escape, a click outside and the action button.

The `closest('pie-tooltip')` check works because `document.activeElement` reports the outermost shadow host, so focus on the close button inside the panel's shadow root reads as the `pie-tooltip` element itself. Focus on your slotted action button reports that button, whose `closest` finds the same panel. One check covers both. See [Managing focus](#managing-focus).

#### Driving the panel without `triggers`

Leave `triggers` unset when the panel's timing is not an interaction with its trigger, such as a step in an onboarding tour. Nothing is watched, so `pie-tooltip-open` never fires and `expanded` has nothing to describe. The close button and Escape still emit `pie-tooltip-close`.

```html
<template>
  <pie-icon-button
    id="delivery-info"
    variant="outline"
    :aria="{ label: 'Delivery times' }">
    <icon-info-circle />
  </pie-icon-button>

  <pie-tooltip
    trigger="delivery-info"
    heading="Delivery times"
    :isOpen="isOpen"
    isDismissible
    :aria="{ close: 'Close' }"
    @pie-tooltip-close="isOpen = false">
    <span slot="content">Orders placed before 6pm arrive today.</span>
  </pie-tooltip>
</template>
```

### Managing focus

In tooltip mode there is nothing to do. A tooltip must not take focus, and a panel that is dismissible or click-toggled is not a tooltip, so it is a dialog and the focus contract below applies to it.

In dialog mode you own two moments:

- **On open, call `focusPanel()`.** It moves focus to the content carrying the panel's descriptive text, so screen readers announce the content, followed by the dialog's name and role. It waits for the panel's opening update to commit, then retries the focus move until it lands, and resolves to `true` once focus is in place, or `false` if the panel is closed or in tooltip mode. No waiting on your side is needed: call it straight after setting `isOpen`. Only needed when the panel contains interactive elements, such as a close button or an action button, which make it a dialog.

    The heading names the panel through `aria-labelledby`; the content is announced by the focus move itself. The panel carries no `aria-describedby`: VoiceOver never announces a dialog's description on focus entry ([WebKit bug 282773](https://bugs.webkit.org/show_bug.cgi?id=282773)), and NVDA and JAWS announce it in addition to the focused content, so a description either does nothing or says the content twice. This follows the [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#keyboard-interaction)'s static-text focus recommendation: the content is `tabindex="-1"`, never reached by Tab, and the panel's own controls stay next in the tab sequence. If you move focus anywhere else, the content is not announced on open, though it stays readable inside the dialog.

- **On close, put focus back**, but only if focus was still inside the panel. Closing on a hover-away or a click elsewhere must not pull focus away from whatever the user has moved on to.

## Usage Examples

> The examples below are for illustration only and are not production ready. They are kept deliberately minimal: wire up error handling, state management and focus behaviour as your application requires.

**For HTML:**

The trigger below is a plain HTML button, so the wiring is the trigger's own `aria-describedby` pointing at the tooltip's `id`.

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/tooltip.js'
```

```html
<!-- pass js file into <script> tag -->

<script type="module" src="/main.js"></script>
```

```html
<button id="delivery-info" aria-describedby="delivery-panel">Delivery times</button>

<pie-tooltip id="delivery-panel" trigger="delivery-info" isOpen isDismissible>
  <span slot="content">Orders placed before 6pm arrive today.</span>
</pie-tooltip>
```

When the trigger is a PIE component such as `pie-button`, an IDREF cannot cross its shadow boundary, so pass the text through the trigger's `aria` property with `description` instead.

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/tooltip.js'
```

```html
<template>
  <pie-button
    id="delivery-info"
    :aria="{ label: 'Delivery times', description: 'Orders placed before 6pm arrive today.' }">
    Delivery times
  </pie-button>

  <pie-tooltip
    id="delivery-panel"
    trigger="delivery-info"
    :isOpen="isOpen"
    isDismissible
    :aria="{ close: 'Close' }"
    @pie-tooltip-close="isOpen = false">
    <span slot="content">Orders placed before 6pm arrive today.</span>
  </pie-tooltip>
</template>
```

The trigger is a PIE component, so the text travels in its `aria.description` rather than `aria-describedby` (see [A description cannot cross a shadow boundary](#a-description-cannot-cross-a-shadow-boundary)).

**For React Applications:**

```jsx
import { useState } from 'react';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieTooltip } from '@justeattakeaway/pie-webc/react/tooltip.js';

export function DeliveryTimes () {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* A PIE component trigger carries the text in its description, not `aria-describedby`. */}
      <PieButton
        id="delivery-info"
        aria={{ label: 'Delivery times', description: 'Orders placed before 6pm arrive today.' }}>
        Delivery times
      </PieButton>

      <PieTooltip
        id="delivery-panel"
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

```js
document.querySelector('#delivery-info').aria = {
  label: 'Delivery times',
  haspopup: 'dialog',
  expanded: true,
};
```

```html
<pie-icon-button id="delivery-info" variant="outline">
  <icon-info-circle></icon-info-circle>
</pie-icon-button>

<pie-tooltip id="delivery-panel" trigger="delivery-info" isOpen heading="Delivery times">
  <span slot="content">Orders placed before 6pm arrive today.</span>
  <pie-button slot="action" size="xsmall">Next</pie-button>
</pie-tooltip>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

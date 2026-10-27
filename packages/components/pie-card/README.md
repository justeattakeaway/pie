# @justeattakeaway/pie-card
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-card) | [Design Documentation](https://pie.design/components/card) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-card)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-card">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-card.svg">
  </a>
</p>

`@justeattakeaway/pie-card` is a Web Component built using the Lit library. It offers a simple and accessible interactive card component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties
| Prop         | Options                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                              | Default     |
|--------------|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `tag`        | `"a"`, `"button"`                                                       | Which HTML tag to use for the card.                                                                                                                                                                                                                                                                                                                                                      | `"button"`  |
| `variant`    | `"default"`, `"outline"`, `"inverse"`, `"outline-inverse"`              | Which variant of the card to use.                                                                                                                                                                                                                                                                                                                                                         | `"default"` |
| `href`       | —                                                                       | The `href` attribute to apply when `tag` is set to `"button"`.                                                                                                                                                                                                                                                                                                                           | `undefined` |
| `target`     | —                                                                       | The `target` attribute to apply when `tag` is set to `"button"`.                                                                                                                                                                                                                                                                                                                         | `undefined` |
| `rel`        | —                                                                       | The `rel` attribute to apply when `tag` is set to `"button"`.                                                                                                                                                                                                                                                                                                                            | `undefined` |
| `disabled`   | `true`, `false`                                                         | Whether or not the card should be disabled. This applies disabled styles and turns off interactivity. <br /> If the card is used as a link, the `href` attribute will be removed so the link can no longer be navigated.                                                                                                                                                                 | `false`     |
| `aria`       | `{ label?: string }`, `{ description?: string }`, `{ haspopup?: boolean \| "menu" \| "listbox" \| "tree" \| "grid" \| "dialog" }`, `{ expanded?: boolean }` | ARIA attributes applied to the card's interactive element (the overlay button when `tag` is `"button"`, otherwise the anchor). `label` should be provided when `tag` is `"button"` because the overlay button has no text content of its own. `description` is applied as an `aria-description` attribute, so the text travels as a string and is not bound by IDREF resolution. `haspopup` announces that the card opens a popup, such as a dialog. `expanded` announces the toggle state for cards that open and close a panel. | `undefined` |
| `isDraggable`| `true`, `false`                                                         | Whether the card is draggable or not. Styling and pointer changes only. Implementation is left to the consuming application.                                                                                                                                                                                                                                                              | `false`     |
| `padding`    | `a-g`                                                                   | Which spacing token(s) to use for the card's padding. Pass two (comma-separated) values for different vertical and horizontal padding, or one value to pad all sides evenly, e.g., `"a"` or `"a,b"`.                                                                                                                                                                                       | `undefined` |

### Slots
| Slot     | Description                                                       |
|----------|-------------------------------------------------------------------|
| `default`| The default slot is used to pass content into the card component. |

### CSS Variables
| Variable | Description | Default |
|----------|-------------|---------|
| `--card-overlay-z-index` | The `z-index` of the invisible overlay button used when `tag` is `"button"`. Slotted interactive controls can sit above it by setting `z-index: calc(var(--card-overlay-z-index) + 1)` (plus `position: relative`), without needing to know the underlying value. Overriding the variable also adjusts the overlay itself. | `1` |
| `--card-border-width` | Controls the width of the card's border. | `1px` |
| `--card-border-color` | Controls the colour of the card's border. | `var(--dt-color-border-strong)` (`outline`), `var(--dt-color-border-inverse)` (`outline-inverse`) |
| `--card-box-shadow` | Controls the box shadow of the card. | `var(--dt-elevation-below-10)` (`default`), `var(--dt-elevation-inverse-below-10)` (`inverse`) |

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

When `tag` is `"button"`, the card renders an invisible `<button>` overlay that covers its full surface, so a native `click` event is emitted on the `<pie-card>` element when the card is activated (by pointer or keyboard). You can listen for it on the host element:

```html
<pie-card tag="button" .aria="${ { label: 'View restaurant' } }">…</pie-card>
```

```js
document.querySelector('pie-card').addEventListener('click', () => { /* … */ });
```

Clicks on slotted content bubble to the `<pie-card>` host, like any nested element. If a slotted interactive control (e.g. a button inside the card that has been raised above the overlay) should not also activate the card, call `event.stopPropagation()` in that control's click handler, so the card action and the slotted controls remain independent.

Note: because the overlay covers the card surface, text inside the card cannot be selected.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/card.js';
```

```html
<pie-card
    tag="a"
    href="https://www.example.com"
    target="_blank"
    padding="d">
    Take me to example.com!
</pie-card>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/card.js';

<pie-card tag="a" href="https://www.example.com" target="_blank" padding="d">
  Take me to example.com!
</pie-card>
```

**For React Applications:**

```jsx
import { PieCard } from '@justeattakeaway/pie-webc/react/card.js';

<PieCard tag="a" href="https://www.example.com" target="_blank" padding="d">
    Take me to example.com!
</PieCard>
```

**Card with slotted interactive controls (`tag="button"`):**

When the card is clickable but also contains its own controls (a button, a link, a switch…), keep `tag` as `"button"` and raise the slotted controls above the card's invisible overlay using the exposed CSS variable. Clicks on the card surface trigger the card's `click` event. Clicks on the raised controls also bubble to the card, so call `event.stopPropagation()` in the control's handler when it should not activate the card too:

```html
<pie-card
    tag="button"
    padding="d"
    .aria="${ { label: 'View restaurant', description: 'Opens the restaurant details', haspopup: 'dialog' } }">
    <h2>Restaurant name</h2>
    <p>Rating, cuisine and distance.</p>
    <button
        style="position: relative; z-index: calc(var(--card-overlay-z-index) + 1);"
        onclick="event.stopPropagation()">
        Add to order
    </button>
</pie-card>
```

Note: slotted controls need a `position` (e.g. `relative`) for their `z-index` to apply.

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

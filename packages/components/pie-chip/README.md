# @justeattakeaway/pie-chip

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-chip) | [Design Documentation](https://pie.design/components/chip) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-chip)
<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-chip">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-chip.svg">
  </a>
</p>

`@justeattakeaway/pie-chip` is a Web Component built using the Lit library. It offers a simple and accessible chip component for web applications.

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

| Prop           | Options                                              | Description                                                                                                  | Default     |
|----------------|------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|-------------|
| `type`         | `"button"`, `"checkbox"`                            | Sets the functional type of the chip.                                                                                   | `"button"`|
| `variant`      | `"default"`, `"outline"`, `"ghost"`                 | Sets the variant of the chip.                                                                                | `"default"` |
| `disabled`     | `true`, `false`                                     | If true, disables the chip.                                                                                  | `false`     |
| `isSelected`   | `true`, `false`                                     | If true, the chip component will apply the selected styles and be selected to screen readers.                                                  | `false`     |
| `isDismissible`| `true`, `false`                                     | If true, displays a close icon. Can be only used if `isSelected` is set to true. When true, the chip itself will not be interactive. Only the close icon will be.                            | `false`     |
| `isLoading`    | `true`, `false`                                     | If true, displays a loading indicator inside the chip. It is advised to provide an appropriate `aria.label` value during and after loading.                                                       | `false`     |
| `aria`         | `{ label?: string, close?: string, haspopup?: "menu" \| "listbox" \| "tree" \| "grid" \| "dialog" \| "true" \| "false", expanded?: boolean }`               | Accessibility properties for the chip. Use `haspopup` and `expanded` for chips that trigger a popup like a menu or dialog.                                             | `undefined` |

### Slots

| Slot      | Description                                               |
|-----------|-----------------------------------------------------------|
| `default` | The default slot is used to pass text into the chip component. |
| `icon`    | Used to pass an icon into the chip component.             |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events

| Event             | Type          | Description                                         |
|-------------------|---------------|-----------------------------------------------------|
| `change`  | `Event` | Triggered when the user clicks on the chip. When a chip is clicked, it will toggle the `isSelected` state and emit this event. Will not occur if the chip is disabled or loading.       |
| `pie-chip-close`  | `CustomEvent` | Triggered when the user interacts with the close icon. |

Visit  [Chip | PIE Design System](https://pie.design/components/chip) to view more information on this component.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/chip.js'
```

```html
<pie-chip>String</pie-chip>

<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/chip.js';

<pie-chip>String</pie-chip>
```

**For React Applications:**

```jsx
import { PieChip } from '@justeattakeaway/pie-webc/react/chip.js';

<PieChip>String</PieChip>
```

### Groups of chips
When setting the `type` to `checkbox`, they can be grouped together to act as a set of options. For accessibility, it is recommended to wrap the group in a `<fieldset>`.

```html
<fieldset>
  <legend>Filter by dietary requirements</legend>
  <pie-chip type="checkbox">Vegan</pie-chip>
  <pie-chip type="checkbox" isSelected>Vegetarian</pie-chip>
  <pie-chip type="checkbox">Gluten Free</pie-chip>
</fieldset>
```

### Icons

We recommend using [@justeattakeaway/pie-icons-webc](https://www.npmjs.com/package/@justeattakeaway/pie-icons-webc) when using the `icon` slot. Here is an example of how you would do this:

```html
<!--
  Note that pie-chip and the icons that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-chip>
    <icon-vegan slot="icon"></icon-vegan>
    String
</pie-chip>
```


## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

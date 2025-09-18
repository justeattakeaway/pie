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
| `isSelected`   | `true`, `false`                                     | If true, the chip component will apply the selected styles. **This is a controlled property, meaning you are responsible for updating its value in response to user interaction events.** | `false`     |
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
| `change`  | `Event`       | **Emitted when a `type="checkbox"` chip is interacted with.** The component will not change its own `isSelected` state. You should use this event to toggle the `isSelected` property in your application's state. |
| `close`           | `Event`       | Triggered when the user interacts with the close icon on a dismissible chip. |

Visit  [Chip | PIE Design System](https://pie.design/components/chip) to view more information on this component.

## Usage Examples

`pie-chip` is a controlled component. This means you are responsible for listening to events (`change` or `click`) and updating the `isSelected` property. This gives you full control over the component's state and behaviour.

**For HTML:**
### Basic Example (Checkbox)

Here is how you would manage the state of a single checkbox-type chip.

```html
<pie-chip type="checkbox" id="my-checkbox-chip">Enable notifications</pie-chip>

<script>
  const checkboxChip = document.getElementById('pie-chip');
  checkboxChip.addEventListener('change', () => {
    // As a controlled component, we update the `isSelected` property ourselves
    checkboxChip.isSelected = !checkboxChip.isSelected;
    console.log('Notification chip is now:', checkboxChip.isSelected ? 'selected' : 'deselected');
  });
</script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**
### Interactive Chip Groups (Button)

You can easily create interactive groups, such as a single-select group where only one chip can be active at a time. For accessibility, it is recommended to wrap functional groups in a `<fieldset>` or give them a `role="group"`.

```html
<div id="single-select-group" role="group" aria-label="Choose a size">
  <pie-chip type="button">Small</pie-chip>
  <pie-chip type="button" isSelected>Medium</pie-chip>
  <pie-chip type="button">Large</pie-chip>
</div>

<script>
  const chipGroup = document.getElementById('single-select-group');

  chipGroup.addEventListener('click', (event) => {
    const clickedChip = event.target.closest('pie-chip');

    // Ensure a chip was actually clicked
    if (!clickedChip) return;

    const wasSelected = clickedChip.isSelected;
    const allChips = chipGroup.querySelectorAll('pie-chip');

    // 1. Deselect all chips in the group
    allChips.forEach(chip => chip.isSelected = false);

    // 2. Toggle the clicked chip
    // This allows a user to deselect a chip by clicking it again
    clickedChip.isSelected = !wasSelected;
  });
</script>
```

**For React Applications:**

```jsx
import { PieChip } from '@justeattakeaway/pie-webc/react/chip.js';
import { useState } from 'react';

export default function ChipExample () {
    const [isSelected, setIsSelected] = useState(false);

    // For checkbox chips, use the `onChange` event
    const handleOnChange = () => {
        setIsSelected(!isSelected);
    }

    return (
        <PieChip
            type="checkbox"
            isSelected={isSelected}
            onChange={handleOnChange}>
            Enable notifications
        </PieChip>
    );
}
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
    Vegan
</pie-chip>
```


## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

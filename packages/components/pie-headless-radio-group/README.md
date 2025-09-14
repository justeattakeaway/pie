# @justeattakeaway/pie-headless-radio-group
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-headless-radio-group) | [Design Documentation](https://pie.design/components/headless-radio-group) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-headless-radio-group)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-headless-radio-group">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-headless-radio-group.svg">
  </a>
</p>

`@justeattakeaway/pie-headless-radio-group` is a set of "headless" Web Components built using the Lit library. It provides all the necessary logic, accessibility, and form integration for a fully-featured radio group, while allowing consumers to provide their own custom UI and styling via slots.

This package includes two components:

* `pie-headless-radio-group`: The main container that manages state, keyboard navigation, and disabled states.

* `pie-headless-radio-button`: The individual radio options within the group.

## Table of Contents

* [Installation](#installation)
* [Documentation](#documentation)
  * [Properties](#properties)
  * [Slots](#slots)
  * [Events](#events)
  * [Accessibility](#accessibility)
  * [Form Integration](#form-integration)
* [Usage Examples](#usage-examples)
* [Questions and Support](#questions-and-support)
* [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties

#### `pie-headless-radio-group`

| Prop | Type | Description | Default |
 | ----- | ----- | ----- | ----- |
| `value` | `string` | The value of the currently selected `pie-headless-radio-button` within the group. This value is also submitted with form data. | `''` |
| `label` | `string` | An optional, visually hidden label for the radio group. This is highly recommended for accessibility, as it provides a name for the group that can be announced by screen readers (via `aria-label`). | `''` |
| `disabled` | `boolean` | When `true`, the entire radio group is disabled, preventing all user interactions. This state is passed down to all child radio buttons. | `false` |

#### `pie-headless-radio-button`

| Prop | Type | Description | Default |
 | ----- | ----- | ----- | ----- |
| `value` | `string` | The value of this radio button. This is used by the parent group to identify the selected option. | `''` |
| `checked` | `boolean` | When `true`, this radio button is the currently selected option in the group. This is managed by the parent group based on its `value` property. | `false` |
| `disabled` | `boolean` | When `true`, the radio button cannot be selected or focused. It will be skipped during keyboard navigation. This can be set individually or be inherited from the parent group. | `false` |

### Slots

| Component | Slot | Description |
 | ----- | ----- | ----- |
| `pie-headless-radio-group` | default | This slot should contain one or more `pie-headless-radio-button` elements. |
| `pie-headless-radio-button` | default | This slot is for your custom presentational markup. You can place any HTML here, such as a styled `<span>`, an image, or a complex card layout. Clicks on this slotted content will correctly select the radio button. |

### Events

| Component | Event | Type | Description |
 | ----- | ----- | ----- | ----- |
| `pie-headless-radio-group` | `change` | `Event` | Dispatched whenever a new radio button is selected by the user, either via a click or keyboard interaction. |

### Accessibility

The components are designed with accessibility in mind, providing the following features out of the box:

* **Screen Reader Support**: Use the `label` property on `pie-headless-radio-group` to provide an accessible name for the group (e.g., "T-Shirt Size"), which is announced by screen readers.

* **Keyboard Navigation**: Full keyboard support is included, following ARIA best practices:

  * `Up`/`Left` Arrows: Move to the previous radio button.

  * `Down`/`Right` Arrows: Move to the next radio button.

  * The behaviour of `Left` and `Right` arrows is automatically inverted in Right-to-Left (RTL) layouts.

  * `Spacebar`: Selects the currently focused radio button if it is not already selected.

* **Focus Management**: The component uses a "roving tabindex" approach, where only the currently selected radio button is in the tab order. This allows users to easily tab into and out of the group. If the currently focusable radio button becomes disabled, the group will automatically make the next available, enabled radio button focusable, ensuring the group always remains reachable.

### Form Integration

The `pie-headless-radio-group` component is form-associated, meaning it works just like a native input within an HTML `<form>`:

* **Form Submission**: The `name` attribute of the group and the `value` of the selected option are automatically included in form submissions.

* **Form Reset**: The component correctly responds to a form's `reset` event, reverting to its initial value and disabled state, as well as the initial disabled states of all child radio buttons.

## Usage Examples

The key to using these headless components is to place `pie-headless-radio-button` elements inside a `pie-headless-radio-group` and then fill the button's default slot with your own styled markup.

```html
<!-- Example of a simple, styled radio group -->
<pie-headless-radio-group value="m" label="T-Shirt Size" name="tshirt-size">
    <pie-headless-radio-button value="s">
        <!-- Your custom UI goes here -->
        <span class="radio-label">Small</span>
    </pie-headless-radio-button>

    <pie-headless-radio-button value="m">
        <span class="radio-label">Medium</span>
    </pie-headless-radio-button>

    <pie-headless-radio-button value="l">
        <span class="radio-label">Large</span>
    </pie-headless-radio-button>

    <pie-headless-radio-button value="xl" disabled>
        <span class="radio-label">X-Large (disabled)</span>
    </pie-headless-radio-button>
</pie-headless-radio-group>

<!-- Example of a fully disabled group -->
<pie-headless-radio-group value="m" label="T-Shirt Size" name="tshirt-size-disabled" disabled>
    <pie-headless-radio-button value="s">
        <span class="radio-label">Small</span>
    </pie-headless-radio-button>
    <pie-headless-radio-button value="m">
        <span class="radio-label">Medium</span>
    </pie-headless-radio-button>
</pie-headless-radio-group>


<style>
  /* Example of how you might style the slotted content */
  .radio-label {
    padding: 8px;
    border: 2px solid lightgrey;
    border-radius: 4px;
  }

  pie-headless-radio-button[checked] .radio-label {
    border-color: blue;
    background-color: lightblue;
  }

  pie-headless-radio-group[disabled],
  pie-headless-radio-button[disabled] .radio-label {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
```

**For React Applications:**

The generated React wrapper can be used as follows:

```jsx
import { PieHeadlessRadioGroup, PieHeadlessRadioButton } from '@justeattakeaway/pie-webc/react/headless-radio-group.js';

const MyRadioGroup = () => (
    <PieHeadlessRadioGroup value="m" label="T-Shirt Size" name="tshirt-size">
        <PieHeadlessRadioButton value="s">
            <span className="radio-label">Small</span>
        </PieHeadlessRadioButton>
        <PieHeadlessRadioButton value="m">
            <span className="radio-label">Medium</span>
        </PieHeadlessRadioButton>
    </PieHeadlessRadioGroup>
);
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

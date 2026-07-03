# @justeattakeaway/pie-checkbox-group
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-checkbox-group) | [Design Documentation](https://pie.design/components/checkbox) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-checkbox-group)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-checkbox-group">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-checkbox-group.svg">
  </a>
</p>

`@justeattakeaway/pie-checkbox-group` is a Web Component built using the Lit library. It offers a simple and accessible checkbox group component for web applications.

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

| **Prop**         | **Options**                          | **Description**                                                                                                                                 | **Default**  |
|------------------|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| `name`           | -                                    | The name associated with the group.                                                                                                             | -            |
| `disabled`       | -                                    | Same as the HTML `disabled` attribute – indicates whether or not the checkbox group is disabled.                                               | `false`      |
| `assistiveText`  | -                                    | Allows assistive text to be displayed below the checkbox group.                                                                                | -            |
| `isInline`       | -                                    | Inline (horizontal) positioning of checkbox items.                                                                                              | `false`      |
| `status`         | `"default"`, `"error"`, `"success"`  | The status of the checkbox group / assistive text. If you use `status`, you must provide an `assistiveText` prop value for accessibility.     | `"default"`  |

### Slots

| **Slot**     | **Description**                                                                 |
|--------------|----------------------------------------------------------------------------------|
| `default`    | Either `pie-checkbox` components, or [`pie-list-item`](https://webc.pie.design/?path=/docs/components-list--overview) components that each slot a `pie-checkbox` for a list-style layout (see [List items in a checkbox group](#list-items-in-a-checkbox-group)). Do not add other HTML. |
| `label`      | Pass `PieFormLabel` to render the checkbox group label.                         |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events
This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/checkbox-group.js';
import '@justeattakeaway/pie-webc/components/checkbox.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
```

```html
<pie-checkbox-group>
  <pie-form-label slot="label">Choose the way we can contact you:</pie-form-label>
  <pie-checkbox name="my-checkbox-one">Checkbox Label 1</pie-checkbox>
  <pie-checkbox name="my-checkbox-two">Checkbox Label 2</pie-checkbox>
  <pie-checkbox name="my-checkbox-three">Checkbox Label 3</pie-checkbox>
</pie-checkbox-group>

<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// import as module into a js file that will be loaded on the page where the component is used.
import '@justeattakeaway/pie-webc/components/checkbox-group.js';
import '@justeattakeaway/pie-webc/components/checkbox.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
```

```html
<pie-checkbox-group>
  <pie-form-label slot="label">Choose the way we can contact you:</pie-form-label>
  <pie-checkbox name="my-checkbox-one">Checkbox Label 1</pie-checkbox>
  <pie-checkbox name="my-checkbox-two">Checkbox Label 2</pie-checkbox>
  <pie-checkbox name="my-checkbox-three">Checkbox Label 3</pie-checkbox>
</pie-checkbox-group>
```

**For React Applications:**

```jsx
import { PieCheckboxGroup } from '@justeattakeaway/pie-webc/react/checkbox-group.js';
import { PieCheckbox } from '@justeattakeaway/pie-webc/react/checkbox.js';
import { PieFormLabel } from '@justeattakeaway/pie-webc/react/form-label.js';

<PieCheckboxGroup>
  <PieFormLabel slot="label">Choose the way we can contact you:</PieFormLabel>
  <PieCheckbox name="my-checkbox-one">Checkbox Label 1</PieCheckbox>
  <PieCheckbox name="my-checkbox-two">Checkbox Label 2</PieCheckbox>
  <PieCheckbox name="my-checkbox-three">Checkbox Label 3</PieCheckbox>
</PieCheckboxGroup>
```

### List items in a checkbox group

For a list-style layout (each option on its own row with primary and secondary text, and dividers between rows), wrap each `pie-checkbox` in a [`pie-list-item`](https://webc.pie.design/?path=/docs/components-list--overview) and place them inside the group. The checkbox goes in the item's `leading` (or `trailing`) slot, and you provide the label through the item's `primaryText` rather than as the checkbox's content.

When the group detects `pie-list-item` children it renders as a single divided list and takes over the item semantics:

- each `pie-list-item` is given a `presentation` role, so the group still owns its checkbox descendants directly;
- the item's `primaryText` becomes the checkbox's accessible name, and its `secondaryText` and `metaText` its description, so you do not pass label text to the checkbox itself;
- the visible item text is hidden from assistive technology so it is not announced twice;
- clicking anywhere on a row toggles that row's checkbox.

Selection is independent per checkbox, exactly as in a standard checkbox group.

```js
import '@justeattakeaway/pie-webc/components/checkbox-group.js';
import '@justeattakeaway/pie-webc/components/checkbox.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
```

```html
<pie-checkbox-group>
  <pie-list-item primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
    <pie-checkbox slot="leading" name="cheese"></pie-checkbox>
  </pie-list-item>
  <pie-list-item primaryText="Pepperoni" secondaryText="Spicy">
    <pie-checkbox slot="leading" name="pepperoni"></pie-checkbox>
  </pie-list-item>
  <pie-list-item primaryText="Mushrooms">
    <pie-checkbox slot="leading" name="mushrooms" disabled></pie-checkbox>
  </pie-list-item>
  <pie-list-item primaryText="Olives" metaText="£0.50">
    <pie-checkbox slot="leading" name="olives"></pie-checkbox>
  </pie-list-item>
</pie-checkbox-group>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

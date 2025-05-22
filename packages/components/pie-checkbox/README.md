# @justeattakeaway/pie-checkbox

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-checkbox">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-checkbox.svg">
  </a>
</p>

`@justeattakeaway/pie-checkbox` is a Web Component built using the Lit library. It offers a simple and accessible checkbox component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Forms Usage](#forms-usage)
  - [Validation](#validation)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties

| Prop            | Options                               | Description                                                                                                                                                                                                                                                                                                                                                                      | Default     |
|------------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `name`           | `-`                                    | The name of the checkbox (used as a key/value pair with `value`). This is required in order to work properly with forms.                                                                                                                                                                                                                                                         | `-`         |
| `value`          | `-`                                    | The value of the input (used as a key/value pair in HTML forms with name). If not passed falls back to the html default value `"on"`.                                                                                                                                                                                                                                            | `"on"`      |
| `required`       | `-`                                    | If true, the checkbox is required to be checked before submitting the form. If it is not in checked state, the component validity state will be invalid.                                                                                                                                                                                                                         | `false`     |
| `disabled`       | `-`                                    | Indicates whether or not the checkbox is disabled.                                                                                                                                                                                                                                                                                                                               | `false`     |
| `checked`        | `-`                                    | Controls whether or not the checkbox is checked.                                                                                                                                                                                                                                                                                                                                 | `false`     |
| `defaultChecked` | `-`                                    | Sets the default checked state for the checkbox. This does not directly set the initial checked state when the page loads, use `checked` for that. If the checkbox is inside a form which is reset, the `checked` state will be updated to match `defaultChecked`.                                                                                                                | `false`     |
| `indeterminate`  | `-`                                    | Indicates whether the checkbox visually shows a horizontal line in the box instead of a check/tick. It has no impact on whether the checkbox's value is used in a form submission. That is decided by the checked state, regardless of the indeterminate state.                                                                          | `false`     |
| `assistiveText`  | `-`                                    | Allows assistive text to be displayed below the checkbox element.                                                                                                                                                                                                                                                                                                                | `-`         |
| `status`         | `"default"`, `"error"`, `"success"`    | The status of the checkbox component / assistive text. If you use `status` you must provide an `assistiveText` prop value for accessibility purposes.                                                                                                                                                                                                                            | `"default"` |

### Slots

| Slot     | Description                                                  |
|----------|--------------------------------------------------------------|
| `default`| The default, unnamed slot is used to pass in text to the component. |


### Events

| Event     | Type          | Description                                                  |
|-----------|---------------|--------------------------------------------------------------|
| `change`  | `CustomEvent` | Triggered after the checked state of a checkbox changes.     |

## Forms Usage

### Validation
The checkbox component utilizes the [constraint validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) to provide a queryable validity state for consumers. This means that the component's validity can be checked via a `validity` getter.

#### Example:

```js
const checkbox = document.querySelector('pie-checkbox');
console.log(checkbox.validity.valid);
```

This getter can be useful for reducing the amount of validation code in your application. For example, if you want to create a checkbox that requires attention, you can set the `required` property on the component. You can then check the validity of the input in your application code:

```html
<pie-checkbox id="my-checkbox" required></pie-checkbox>
```

```js
const checkbox = document.querySelector('pie-checkbox');
const isValid = checkbox.validity.valid;

// We could use this to drive the status and assistiveText properties on our checkbox (this would likely be inside a submit event handler in a real application)
if (!isValid) {
  checkbox.status = 'error';
  checkbox.assistiveText = 'This checkbox is required';
}
```

These concepts work just as well inside a Vue or React application.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/checkbox.js'
```

```html
<pie-checkbox name="mycheckbox">Label</pie-checkbox>

<!-- Always use aria-label if you are not passing a label -->
<pie-checkbox name="mycheckbox" aria-label="Label"></pie-checkbox>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// import as module into a js file that will be loaded on the page where the component is used.
import '@justeattakeaway/pie-webc/components/checkbox.js';
```

```html
<pie-checkbox name="mycheckbox">Label</pie-checkbox>

<!-- Always use aria-label if you are not passing a label -->
<pie-checkbox name="mycheckbox" aria-label="Label"></pie-checkbox>
```

**For React Applications:**

```jsx
import { PieCheckbox } from '@justeattakeaway/pie-webc/react/checkbox.js';

<PieCheckbox name="mycheckbox">Label</PieCheckbox>

// Always use aria-label if you are not passing a label
<PieCheckbox name="mycheckbox" aria-label="Label"></PieCheckbox>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

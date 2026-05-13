# @justeattakeaway/pie-textarea
<p align="center">
  <a href="https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-textarea">
    <img alt="Source code" src="https://img.shields.io/badge/Source%20code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
  <a href="https://pie.design/components/text-area">
    <img alt="Design Documentation" src="https://img.shields.io/badge/Design%20Documentation-pie.design-ff8000?style=for-the-badge&logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjAgMjYwIiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTE0OS41IDM1LjZsLTExLjYgMTEuNSA4LjcgOWM0LjggNC45IDkuMyA4LjkgOS45IDguOSAxLjggMCAzMC42LTI5IDI5LjktMzAuMS0xLjEtMS44LTIxLjUtMTAuOS0yNC4zLTEwLjktLjUgMC02LjIgNS4yLTEyLjYgMTEuNnpNOTMgMjUuN2MtNi41IDIuNC0yMC4yIDkuNi0yMC43IDEwLjgtLjMgMSA1LjYgNy42IDE4LjIgMjAuMSAxOC41IDE4LjQgMTguNiAxOC42IDE2LjggMjAuNi0zLjggNC40LTMzLjcgMzMuOC0zNC4yIDMzLjgtLjQgMC04LjctOC4xLTE4LjYtMTgtOS45LTkuOS0xOC41LTE4LTE5LjItMTgtMS40IDAtNy4xIDExLjctOS44IDE5LjlsLTEuNyA1LjMgMTQuNiAxNC43YzggOCAxNC42IDE1LjEgMTQuNiAxNS42IDAgLjYtNi41IDcuNS0xNC40IDE1LjRsLTE0LjQgMTQuNCAxLjUgNS4xYzEuNiA1LjIgNy43IDE4LjMgOS40IDIwLjEuNi42IDE3LjgtMTUuOSA0Ni45LTQ1IDQxLjktNDEuOCA0Ni4xLTQ1LjcgNDcuNy00NC40IDIuMSAxLjcgMjkuOSAyOS41IDMyLjcgMzIuN2wxLjkgMi4yLTExLjQgMTEuNGMtNi4zIDYuMi0xMi4yIDEyLjMtMTMuMyAxMy40LTEuOCAyLjEtMS44IDIuMiA3LjEgMTEuMiA1IDQuOSA5LjMgOSA5LjYgOSAuOSAwIDc5LjctNzguNiA3OS43LTc5LjQgMC0yLjYtOC44LTIxLjUtMTEuMS0yNC4xLS42LS42LTguNSA2LjYtMjAuOCAxOC45LTEyLjkgMTIuOC0yMC4zIDE5LjYtMjEuMSAxOS4xLS43LS40LTIwLjMtMTkuNy00My42LTQzLTIzLjQtMjMuMS00My00Mi4yLTQzLjctNDIuMy0uNi0uMS0xLjkuMS0yLjcuNHpNOTEuNSAxNDVsLTguOSA5IDEzLjMgMTMuMyAxMy4zIDEzLjQtMTguMSAxOC4xYy0xMCAxMC0xOC4xIDE4LjgtMTcuOSAxOS40LjQgMS4zIDE3LjkgMTAuMyAyMS45IDExLjIgMi4yLjYgNC4zLTEuMiAxNy44LTE0LjZsMTUuMi0xNS4yIDQuNiA0LjRjMi41IDIuNCA5LjYgOS41IDE1LjkgMTUuOGwxMS40IDExLjQgNC4zLTEuM2M3LjEtMi4zIDIwLjctOC44IDIwLjctMTAgMC0xLjEtODIuOS04NC04NC04NC0uMyAwLTQuNiA0LjEtOS41IDkuMXpNMjAyLjMgMTQ0LjZjLTQuNiA0LjYtOC4zIDguOC04LjMgOS4zIDAgMS40IDI4IDI5LjEgMjkuNSAyOS4xIDEuNCAwIDcuOS0xMS43IDEwLjUtMTkuM2wxLjgtNS0xMS41LTExLjNjLTYuMy02LjMtMTItMTEuNC0xMi42LTExLjMtLjcgMC00LjkgMy44LTkuNCA4LjV6Ii8+PC9zdmc+">
  </a>
  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-textarea">
    <img alt="npm version" src="https://img.shields.io/npm/v/@justeattakeaway/pie-textarea?style=for-the-badge&color=ff8000&logo=npm&logoColor=white&label=npm">
  </a>
  <a href="https://github.com/justeattakeaway/pie/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/npm/l/@justeattakeaway/pie-textarea?style=for-the-badge">
  </a>
</p>

`@justeattakeaway/pie-textarea` is a Web Component built using the Lit library. It offers a simple and accessible textarea component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Forms Usage](#forms-usage)
  - [Validation](#validation)
    - [Example](#example)
    - [Displaying error messages](#displaying-error-messages)
- [Usage Examples](#usage-examples)
- [Pitfalls](#pitfalls)
  - [Controlled input values](#controlled-input-values)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties
| Prop           | Options                                                      | Description                                                                                                                                                                                                                                        | Default     |
|----------------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `assistiveText`| `string`                                                     | Allows assistive text to be displayed below the textarea. Must be provided if using a non-default status.                                                                                                                                        | `undefined` |
| `autocomplete` | `string`                                                     | Allows enabling or disabling autocomplete. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for values.                                                                                                      | `undefined` |
| `autoFocus`    | `true`, `false`                                              | If true, focuses the textarea on first render. Only one element should have `autofocus`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus).                                                              | `false`     |
| `defaultValue` | `string`                                                     | Value used during a form reset to replace the current value.                                                                                                                                                                                     | `undefined` |
| `disabled`     | `true`, `false`                                              | When true, the user cannot edit or interact with the textarea.                                                                                                                                                                                   | `false`     |
| `name`         | `string`                                                     | Name of the textarea (used in form key/value pairs).                                                                                                                                                                                             | `undefined` |
| `placeholder`  | `string`                                                     | Placeholder text shown when textarea is empty.                                                                                                                                                                                                   | `""`        |
| `readonly`     | `true`, `false`                                              | When true, the user cannot edit the textarea. Not the same as disabled. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).                                                                                       | `false`     |
| `required`     | `true`, `false`                                              | If true, textarea must have a value for valid form submission. Does not block form submission by itself.                                                                                                                                         | `false`     |
| `resize`       | `"auto"`, `"manual"`                                         | Controls resizing behavior. `auto` resizes vertically as needed; `manual` allows user resizing but no auto resizing.                                                                                                                             | `"auto"`    |
| `size`         | `"small"`, `"medium"`, `"large"`                             | Sets the visual size of the textarea.                                                                                                                                                                                                            | `"medium"`  |
| `status`       | `"default"`, `"error"`, `"success"`                          | Status of the component. If not `default`, `assistiveText` must be provided for accessibility.                                                                                                                                                   | `"default"` |
| `value`        | `string`                                                     | Value of the textarea (used in form key/value pairs).                                                                                                                                                                                            | `""`        |

### Slots
This component does not have any slots. All content is controlled through properties.

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events
| Event    | Description                                                               |
|----------|---------------------------------------------------------------------------|
| `change` | Fires when the textarea loses focus after the value has been changed.     |
| `input`  | Fires when the textarea value is changed.                                 |

## Forms Usage
It is essential that when using the textarea inside the form, you provide a `name` attribute. HTML forms create key/value pairs for textarea data based on the `name` attribute, which is crucial for native form submission.

### Validation
The textarea component utilizes the [constraint validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) to provide a queryable validity state for consumers. This means that the component's validity can be checked via a `validity` getter.

#### Example:
```js
const textarea = document.querySelector('pie-textarea');
console.log(textarea.validity.valid);
```

This getter can be useful for reducing the amount of validation code in your application. For example, if you want to create a textarea that requires attention, you can set the `required` property on the component. You can then check the validity of the input in your application code:

```html
<pie-textarea
  id="my-textarea"
  required>
</pie-textarea>
```

```js
const textarea = document.querySelector('pie-textarea');
const isValid = textarea.validity.valid;

// We could use this to drive the status and assistiveText properties on our textarea (this would likely be inside a submit event handler in a real application)
if (!isValid) {
  textarea.status = 'error';
  textarea.assistiveText = 'This textarea is required';
}
```

These concepts work just as well inside a Vue or React application.

> Using the constraint validation API we provide is completely optional. Feel free to use whatever form of validation best suits your application's needs. The validity state of a textarea will not interfere with the form submission or page behaviour.

#### Displaying error messages
As mentioned earlier, we suggest consumers disable native HTML validation using the `novalidate` attribute on the form element. This will prevent the browser from displaying its own validation messages, allowing you to control the validation experience for your users.

To display validation messages, you can use the `assistiveText` and `status` properties on the textarea component. The `assistiveText` property is used to display a message below the textarea, and the `status` property is used to set the visual state of the textarea. The `status` property can be set to `error` or `success`, or you can omit providing a `status` to display the `assistiveText` in a neutral state.

```html
<pie-textarea
  name="details"
  assistiveText="Please provide more details"
  status="error">
</pie-textarea>
```

Displaying success messages works in the same way, but with the `status` property set to `success`.

```html
<pie-textarea
  name="details"
  assistiveText="Please provide more details"
  status="success">
</pie-textarea>
```

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/textarea.js';
```

```html
<pie-textarea
    name="my-textarea"
    placeholder="Please enter a value"
    autocomplete="on"
    value=""
    autoFocus
    readonly>
</pie-textarea>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/textarea.js';

<pie-textarea
    name="my-textarea"
    placeholder="Please enter a value"
    autocomplete="on"
    value=""
    autoFocus
    readonly>
</pie-textarea>
```

**For React Applications:**

```jsx
import { PieTextarea } from '@justeattakeaway/pie-webc/react/textarea.js';

<PieTextarea
    name="my-textarea"
    placeholder="Please enter a value"
    autocomplete="on"
    value=""
    autoFocus
    readonly>
</PieTextarea>
```

## Pitfalls

### Controlled input values

If we want to add a constraint to what the user can input, then on input/change we perform the condition check and if it succeeds, update the input value. If it fails, then manually assign event.target.value to the last known valid input to prevent it from updating.

> This will need to be done regardless of application framework used.

Example:

```js
const onInput = (event) => {
  // For example, users can type only uppercase letters
  const value = event.target.value
  if (value === value.toUpperCase()) {
    inputValue.value = value
  } else {
    event.target.value = inputValue.value
  }
}
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

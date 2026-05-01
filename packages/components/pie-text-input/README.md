# @justeattakeaway/pie-text-input
<p align="center">
  <a href="https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-text-input">
    <img alt="Source code" src="https://img.shields.io/badge/Source%20code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
  <a href="https://pie.design/components/text-input">
    <img alt="Design Documentation" src="https://img.shields.io/badge/Design%20Documentation-pie.design-ff8000?style=for-the-badge&logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjAgMjYwIiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTE0OS41IDM1LjZsLTExLjYgMTEuNSA4LjcgOWM0LjggNC45IDkuMyA4LjkgOS45IDguOSAxLjggMCAzMC42LTI5IDI5LjktMzAuMS0xLjEtMS44LTIxLjUtMTAuOS0yNC4zLTEwLjktLjUgMC02LjIgNS4yLTEyLjYgMTEuNnpNOTMgMjUuN2MtNi41IDIuNC0yMC4yIDkuNi0yMC43IDEwLjgtLjMgMSA1LjYgNy42IDE4LjIgMjAuMSAxOC41IDE4LjQgMTguNiAxOC42IDE2LjggMjAuNi0zLjggNC40LTMzLjcgMzMuOC0zNC4yIDMzLjgtLjQgMC04LjctOC4xLTE4LjYtMTgtOS45LTkuOS0xOC41LTE4LTE5LjItMTgtMS40IDAtNy4xIDExLjctOS44IDE5LjlsLTEuNyA1LjMgMTQuNiAxNC43YzggOCAxNC42IDE1LjEgMTQuNiAxNS42IDAgLjYtNi41IDcuNS0xNC40IDE1LjRsLTE0LjQgMTQuNCAxLjUgNS4xYzEuNiA1LjIgNy43IDE4LjMgOS40IDIwLjEuNi42IDE3LjgtMTUuOSA0Ni45LTQ1IDQxLjktNDEuOCA0Ni4xLTQ1LjcgNDcuNy00NC40IDIuMSAxLjcgMjkuOSAyOS41IDMyLjcgMzIuN2wxLjkgMi4yLTExLjQgMTEuNGMtNi4zIDYuMi0xMi4yIDEyLjMtMTMuMyAxMy40LTEuOCAyLjEtMS44IDIuMiA3LjEgMTEuMiA1IDQuOSA5LjMgOSA5LjYgOSAuOSAwIDc5LjctNzguNiA3OS43LTc5LjQgMC0yLjYtOC44LTIxLjUtMTEuMS0yNC4xLS42LS42LTguNSA2LjYtMjAuOCAxOC45LTEyLjkgMTIuOC0yMC4zIDE5LjYtMjEuMSAxOS4xLS43LS40LTIwLjMtMTkuNy00My42LTQzLTIzLjQtMjMuMS00My00Mi4yLTQzLjctNDIuMy0uNi0uMS0xLjkuMS0yLjcuNHpNOTEuNSAxNDVsLTguOSA5IDEzLjMgMTMuMyAxMy4zIDEzLjQtMTguMSAxOC4xYy0xMCAxMC0xOC4xIDE4LjgtMTcuOSAxOS40LjQgMS4zIDE3LjkgMTAuMyAyMS45IDExLjIgMi4yLjYgNC4zLTEuMiAxNy44LTE0LjZsMTUuMi0xNS4yIDQuNiA0LjRjMi41IDIuNCA5LjYgOS41IDE1LjkgMTUuOGwxMS40IDExLjQgNC4zLTEuM2M3LjEtMi4zIDIwLjctOC44IDIwLjctMTAgMC0xLjEtODIuOS04NC04NC04NC0uMyAwLTQuNiA0LjEtOS41IDkuMXpNMjAyLjMgMTQ0LjZjLTQuNiA0LjYtOC4zIDguOC04LjMgOS4zIDAgMS40IDI4IDI5LjEgMjkuNSAyOS4xIDEuNCAwIDcuOS0xMS43IDEwLjUtMTkuM2wxLjgtNS0xMS41LTExLjNjLTYuMy02LjMtMTItMTEuNC0xMi42LTExLjMtLjcgMC00LjkgMy44LTkuNCA4LjV6Ii8+PC9zdmc+">
  </a>
  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-text-input">
    <img alt="npm version" src="https://img.shields.io/npm/v/@justeattakeaway/pie-text-input?style=for-the-badge&color=ff8000&logo=npm&logoColor=white&label=npm">
  </a>
  <a href="https://github.com/justeattakeaway/pie/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/npm/l/@justeattakeaway/pie-text-input?style=for-the-badge">
  </a>
</p>

`@justeattakeaway/pie-text-input` is a Web Component built using the Lit library. It offers a simple and accessible interactive text input component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Forms Usage](#forms-usage)
  - [Validation](#validation)
  - [Displaying error messages](#displaying-error-messages)
  - [Labelling](#labelling)
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
| Prop           | Options                                                                                     | Description                                                                                                                                                                                                                                  | Default     |
|----------------|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `assistiveText`| `string`                                                                                    | Allows assistive text to be displayed below the input element. Must be provided if using a non-default status.                                                                                                                              | `undefined` |
| `autoFocus`    | `true`, `false`                                                                             | If true, the input will be focused on the first render. Only one element should have `autofocus`.                                                                                                                                            | `false`     |
| `autocomplete` | `string`                                                                                    | Allows the user to enable or disable autocomplete functionality. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for more.                                                                             | `undefined` |
| `defaultValue` | `string`                                                                                    | During a form reset, the default value will replace the current value. This prop is not normally needed.                                                                                                                                    | `undefined` |
| `disabled`     | `true`, `false`                                                                             | When true, the user cannot edit or interact with the control.                                                                                                                                                                               | `false`     |
| `inputmode`    | `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, `"search"`       | Hint to browsers for the type of virtual keyboard to use. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#inputmode).                                                                                             | `undefined` |
| `max`          | `number`                                                                                    | The maximum value (only for type `number`). If exceeded, the input is invalid.                                                                                                                                                              | `undefined` |
| `maxlength`    | `number`                                                                                    | Maximum number of characters allowed (for text, url, tel, email, and password types).                                                                                                                                                        | `undefined` |
| `min`          | `number`                                                                                    | The minimum value (only for type `number`). If below this, the input is invalid.                                                                                                                                                             | `undefined` |
| `minlength`    | `number`                                                                                    | Minimum number of characters required (for text, url, tel, email, and password types).                                                                                                                                                       | `undefined` |
| `name`         | `string`                                                                                    | Name of the input (used in form key/value pairs).                                                                                                                                                                                            | `undefined` |
| `pattern`      | `string`                                                                                    | Regular expression that the input value should match.                                                                                                                                                                                        | `undefined` |
| `placeholder`  | `string`                                                                                    | Placeholder text when input is empty (for text, url, tel, email, and password types).                                                                                                                                                        | `undefined` |
| `readonly`     | `true`, `false`                                                                             | When true, the input is not editable (but not disabled). See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly).                                                                                                  | `false`     |
| `required`     | `true`, `false`                                                                             | If true, input must have a value to pass validation. Does not prevent form submission by itself.                                                                                                                                            | `false`     |
| `size`         | `"small"`, `"medium"`, `"large"`                                                            | The size of the input field.                                                                                                                                                                                                                 | `"medium"`  |
| `status`       | `"default"`, `"error"`, `"success"`                                                         | The status of the input. If not `default`, `assistiveText` must be provided for accessibility.                                                                                                                                              | `"default"` |
| `step`         | `number`                                                                                    | Amount by which value changes when using up/down arrows (only for type `number`).                                                                                                                                                            | `undefined` |
| `type`         | `"text"`, `"number"`, `"password"`, `"url"`, `"email"`, `"tel"`                              | The type of HTML input to render.                                                                                                                                                                                                            | `"text"`    |
| `value`        | `string`                                                                                    | The value of the input (used in form key/value pairs).                                                                                                                                                                                       | `""`        |

### Slots
| Slot           | Description                                                                                         |
|----------------|-----------------------------------------------------------------------------------------------------|
| `leadingIcon`  | An icon to display at the start of the input.<br>Do not use at the same time as `leadingText`.     |
| `leadingText`  | Short text to display at the start of the input.<br>Wrap the text in a `<span>`.<br>Do not use at the same time as `leadingIcon`. |
| `trailingIcon` | An icon to display at the end of the input.<br>Do not use at the same time as `trailingText`.      |
| `trailingText` | Short text to display at the end of the input.<br>Wrap the text in a `<span>`.<br>Do not use at the same time as `trailingIcon`. |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events

| Event    | Description                                                           |
|----------|-----------------------------------------------------------------------|
| `change` | Fires when the input loses focus after the value has been changed.    |
| `input`  | Fires when the input value is changed.                                |

## Forms Usage

It is essential that when using the text input inside of a form, you provide a `name` attribute. HTML forms create key/value pairs for input data based on the `name` attribute, which is crucial for native form submission.

### Validation
The text input component utilizes the [constraint validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) to provide a queryable validity state for consumers. This means that the component's validity can be checked via a `validity` getter.

#### Example:
```js
const textInput = document.querySelector('pie-text-input');
console.log(textInput.validity.valid);
```

This getter can be useful for reducing the amount of validation code in your application. For example, if you want to create a text input that should be at least 2 characters long, at most 5 characters long, and requires a value, you can set the `minlength`, `maxlength`, and `required` properties on the component. You can then check the validity of the input in your application code:

```html
<pie-text-input
  id="my-input"
  name="my-input"
  minlength="2"
  maxlength="5"
  required></pie-text-input>
```

```js
const textInput = document.querySelector('pie-text-input');
const isValid = textInput.validity.valid;

// We could use this to drive the status and assistiveText properties on our input (this would likely be inside a submit event handler in a real application)
if (!isValid) {
  textInput.status = 'error';
  textInput.assistiveText = 'Please enter a value between 2 and 5 characters long';
}
```

These concepts work just as well inside a Vue or React application. Below is a similar implementation for validating a number input in a React application.

> Using the constraint validation API we provide is completely optional. Feel free to use whatever form of validation best suits your application's needs. The validity state of an input will not interfere with the form submission or page behaviour.

```js
// Very simplified example
const [favouriteNumber, setFavouriteNumber] = useState('');
const [favouriteNumberValidationMessage, setFavouriteNumberValidationMessage] = useState('');

const favouriteNumberRef = useRef<HTMLInputElement>(null);

const handleFavouriteNumberInput = (event: InputEvent) => {
    setFavouriteNumber((event.target as HTMLInputElement).value);
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let validationMessage = '';
    const inputElement = favouriteNumberRef.current;

    if (inputElement) {
        if (inputElement.validity.rangeUnderflow) {
            validationMessage = 'The favourite number is too low. Please pick a number between -5 and 200.';
        } else if (inputElement.validity.rangeOverflow) {
            validationMessage = 'The favourite number is too high. Please pick a number between -5 and 200.';
        }
    }

    setFavouriteNumberValidationMessage(validationMessage);
};
```
```tsx
// Very simplified example
<form id="testForm" onSubmit={handleSubmit} novalidate>
  <PieFormLabel id="favouriteNumberLabel" for="favouriteNumber">
      Favourite Number:
  </PieFormLabel>
  <PieTextInput
      aria-labelledby="favouriteNumberLabel"
      id="favouriteNumber"
      data-test-id="favouriteNumber"
      name="favouriteNumber"
      min={-5}
      max={200}
      value={favouriteNumber}
      onInput={handleFavouriteNumberInput as any}
      type="number"
      ref={favouriteNumberRef}
      assistiveText={favouriteNumberValidationMessage}
      status={favouriteNumberValidationMessage ? 'error' : 'success'}>
      <IconNumberSymbol slot="leadingIcon"></IconNumberSymbol>
  </PieTextInput>

  <PieButton data-test-id="submit-btn" type="submit">Submit</PieButton>
</form>
```

#### Displaying error messages
As mentioned earlier, we suggest consumers disable native HTML validation using the `novalidate` attribute on the form element. This will prevent the browser from displaying its own validation messages, allowing you to control the validation experience for your users.

To display validation messages, you can use the `assistiveText` and `status` properties on the text input component. The `assistiveText` property is used to display a message below the input, and the `status` property is used to set the visual state of the input. The `status` property can be set to `error` or `success`, or you can omit providing a status to display the assistive text in a neutral state.

```html
<pie-text-input
  name="firstName"
  assistiveText="Please provide a first name"
  status="error">
</pie-text-input>
```

Displaying success messages works in the same way, but with the `status` property set to `success`.

```html
<pie-text-input
  name="firstName"
  assistiveText="First name provided"
  status="success">
</pie-text-input>
```

### Labelling
Please use the [form label](https://webc.pie.design/?path=/docs/components-form-label) component for adding a label to the text input. Similar to native HTML, the label should be a sibling of the input component and reference the input's `id` attribute using the `for` attribute.

The usage of `aria-labelledby` is very important so that screen readers will announce the label when the input is focused. This is especially important for users who rely on screen readers to navigate the web.

```html
<pie-form-label id="first-name-label" for="first-name">First name:</pie-form-label>
<pie-text-input aria-labelledby="first-name-label" id="first-name" name="first-name"></pie-text-input>
```

If you do not need to use a visual label, you must still provide an `aria-label` attribute to the text input. This is important for screen reader users as it will announce the purpose of the input when it is focused, even if a visual label is not used.

```html
<pie-text-input aria-label="First name" name="first-name"></pie-text-input>
```

## Usage Examples

> When using icons, we recommend using [@justeattakeaway/pie-icons-webc](https://www.npmjs.com/package/@justeattakeaway/pie-icons-webc) to ensure consistency with the rest of the design system.

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/card.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';
```

```html
<pie-text-input
    autocomplete="on"
    autoFocus
    inputmode="text"
    maxlength="8"
    minlength="4"
    name="myinput"
    pattern="[a-z]{4,8}"
    placeholder="Please enter a value"
    readonly
    type="text"
    value="">
  <icon-placeholder slot="leadingIcon"></icon-placeholder>
</pie-text-input>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/text-input.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';

<pie-text-input
    autocomplete="on"
    autoFocus
    inputmode="text"
    maxlength="8"
    minlength="4"
    name="myinput"
    pattern="[a-z]{4,8}"
    placeholder="Please enter a value"
    readonly
    type="text"
    value="">
  <icon-placeholder slot="leadingIcon"></icon-placeholder>
</pie-text-input>
```

**For React Applications:**

```jsx
import { PieTextInput } from '@justeattakeaway/pie-webc/react/text-input.js';
import { IconPlaceholder } from '@justeattakeaway/pie-icons-webc/dist/react/IconPlaceholder.js';

<PieTextInput
    autocomplete="on"
    autoFocus
    inputmode="text"
    maxlength="8"
    minlength="4"
    name="myinput"
    pattern="[a-z]{4,8}"
    placeholder="Please enter a value"
    readonly
    type="text"
    value="">
  <IconPlaceholder slot="leadingIcon"></IconPlaceholder>
</PieTextInput>
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

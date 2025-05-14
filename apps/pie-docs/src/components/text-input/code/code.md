---
eleventyNavigation:
    key: Code
    parent: Text Input
    order: 2
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
    events: "{% include './events.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-text-input" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-text-input.svg?label=pie-text-input">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-text-input` is a Web Component built with [Lit](https://lit.dev/), providing a simple and accessible text input for web applications.

This component integrates easily with various frontend frameworks and can be customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/components-text-input) instance!"
} %}

## Installation

To install `pie-text-input` in your application via `npm` or `yarn`:

```shell
npm i @justeattakeaway/pie-webc
```

```shell
yarn add @justeattakeaway/pie-webc
```

{% componentCodeMoreInformationNotification %}

## Props

{% componentDetailsTable {
  tableData: props
} %}

## Slots

{% componentDetailsTable {
  tableData: slots
} %}

## Events

{% notification {
  type: "warning",
  message: "In React, the change event is similar to the input event. Our components adhere to the web standards definition of the change event, which means it is triggered when the element loses focus after its value has been changed. [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)"
} %}

{% componentDetailsTable {
  tableData: events
} %}

## Importing and usage in templates
For HTML and Vue:

```js
// import as module into a js file that will be loaded on the page where the component is used.
import '@justeattakeaway/pie-webc/components/text-input.js';
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
</pie-text-input>
```

For React Applications:

```jsx
import { PieTextInput } from '@justeattakeaway/pie-webc/react/text-input.js';

<PieTextInput
    autocomplete="on"
    autoFocus
    inputmode="text"
    maxlength={8}
    minlength={4}
    name="myinput"
    pattern="[a-z]{4,8}"
    placeholder="Please enter a value"
    readonly
    type="text"
    value="">
</PieTextInput>
```

## Types
The text input accepts various values for the `type` property, allowing control over input behaviour. These are mostly standard HTML input types. For most use cases, the default type of `text` will suffice. It is important to note that setting the type to `number` does not guarantee the prevention of non-numeric characters being entered. This behaviour, which is consistent with native HTML inputs, allows some non-numeric characters such as `e`,`+`, `-`, and `.`.

While different types can influence the virtual keyboard on mobile devices, this can also be controlled using the `inputmode` property.

If your application requires specific formatting and needs to control which characters can be entered, or if you need to provide auto-formatting (such as adding spaces to a credit card number), you will need to handle this in your application code. You can listen to the `input` and `change` events emitted by the text input component to manage these requirements.

## Slots usage

You can provide icons or text to sit before or after the input value. When using the `leadingText` or `trailingText` slots, wrap the text in a `<span>` and limit it to 2-3 characters at most. Do not use `leadingText` with `leadingIcon` or `trailingText` with `trailingIcon` simultaneously.

For icons in the `leadingIcon` or `trailingIcon` slots, ensure you use the icon components from our web component [icon library](https://www.npmjs.com/package/@justeattakeaway/pie-icons-webc). Other icons are not guaranteed to work and will not be supported.

#### HTML
```html
<pie-text-input
  class="form-field"
  id="username"
  data-test-id="username"
  name="username"
  type="text">
  <icon-user slot="leadingIcon"></icon-user>
  <span slot="trailingText">##</span>
</pie-text-input>
```
#### Vue
```html
<pie-text-input
  :value="username"
  @input="username = $event.target.value"
  class="form-field"
  id="username"
  data-test-id="username"
  name="username"
  type="text">
  <icon-user slot="leadingIcon"></icon-user>
  <span slot="trailingText">##</span>
</pie-text-input>
```
#### React
```jsx
<PieTextInput
  className="form-field"
  id="username"
  data-test-id="username"
  name="username"
  value={username}
  onInput={handleUsernameInput as any}
  type="text">
  <IconUser slot="leadingIcon"></IconUser>
  <span slot="trailingText">##</span>
</PieTextInput>
```

## Forms usage
{% notification {
  type: "information",
  iconName: "link",
  message: "For general guidance on using our web components within forms, see [our wiki page](https://github.com/justeattakeaway/pie/wiki/Form-Controls#pie-forms-usage)."
} %}

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

{% notification {
  type: "information",
  message: "Using the constraint validation API we provide is completely optional. Feel free to use whatever form of validation best suits your application's needs. The validity state of an input will not interfere with the form submission or page behaviour."
} %}

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
Please use the [form label](/components/form-label/) component for adding a label to the text input. Similar to native HTML, the label should be a sibling of the input component and reference the input's `id` attribute using the `for` attribute.

The usage of `aria-labelledby` is very important so that screen readers will announce the label when the input is focused. This is especially important for users who rely on screen readers to navigate the web.

```html
<pie-form-label id="first-name-label" for="first-name">First name:</pie-form-label>
<pie-text-input aria-labelledby="first-name-label" id="first-name" name="first-name"></pie-text-input>
```

If you do not need to use a visual label, you must still provide an `aria-label` attribute to the text input. This is important for screen reader users as it will announce the purpose of the input when it is focused, even if a visual label is not used.

```html
<pie-text-input aria-label="First name" name="first-name"></pie-text-input>
```


## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-text-input/CHANGELOG.md)."
} %}

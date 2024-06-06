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
  <a href="https://www.npmjs.com/@justeattakeaway/pie-text-input">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-text-input.svg">
  </a>
</p>


`pie-text-input` is a Web Component built using the Lit library. It offers a simple and accessible text input component for web applications.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-text-input` in your application, run the following on your command line:

```shell
npm i @justeattakeaway/pie-text-input
```

```shell
yarn add @justeattakeaway/pie-text-input
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide.](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

## Playground

 <iframe
  src="https://webc.pie.design/?path=/story/text-input--default&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="600px"
  style="border: none; margin-top: var(--dt-spacing-f);"
></iframe>

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
  message: "In React, the change event is similar to the input event. Our components follow the web standards definition of the change event, meaning it is fired when the element loses focus after its value has been changed. [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)"
} %}

{% componentDetailsTable {
  tableData: events
} %}

## Importing and usage in templates
For HTML and Vue:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-text-input';
```

```html
<!-- Native HTML -->
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

For JS Frameworks such as Angular:
```jsx
import { PieTextInput } from '@justeattakeaway/pie-text-input';

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

For React Applications:

```jsx
// React templates (using Next 13)
import { PieTextInput } from '@justeattakeaway/pie-text-input/dist/react';

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

## Slots usage

You can provide icons or text to sit before or after the input value. If using the `leadingText` or `trailingText` slots, wrap the text in a `<span>` and do not add more than 2-3 characters at most. Do not use `leadingText` with `leadingIcon` or `trailingText` with `trailingIcon` at the same time.

When providing icons to the `leadingIcon` or `trailingIcon` slots, ensure you are using the icon components from our web component [icon library](https://www.npmjs.com/package/@justeattakeaway/pie-icons-webc). Any other icons are not guaranteed to work, nor will they be supported.

{% componentDetailsTable {
  tableData: slots
} %}

#### HTML
```html
<pie-text-input
  class="form-field"
  id="username"
  data-test-id="username"
  name="username"
  type="text">
  <icon-user slot="leadingIcon"></icon-user>
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
</PieTextInput>
```

## Forms usage
{% notification {
  type: "information",
  iconName: "link",
  message: "For general guidance on using our web components within forms, see [our wiki page](https://github.com/justeattakeaway/pie/wiki/Form-Controls#pie-forms-usage)."
} %}

It is essential that when using the text input inside of a form that you provide a `name` attribute. HTML forms create key/value pairs for input data based on the `name` attribute. This is essential for native form submission.

### Validation
The text input component utilises the [constraint validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) to provide a queryable validity state for consumers. This means that the component's validity can be checked via a `validity` getter.

#### Example:
```js
const textInput = document.querySelector('pie-text-input');
console.log(textInput.validity.valid);
```

This getter can be useful for reducing the amount of validation code in your application. For example, say we want to create a text input that should be at least 2 characters long, at most 5 characters long and requires a value. We can set the `minlength`, `maxlength` and `required` attributes on the component and then check the validity of the input in our application code:

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

These concepts work just as well inside of a Vue or React application. Below is a similar implementation for validating a number input in a React application.


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
  <PieFormLabel htmlFor="favouriteNumber">
      Favourite Number:
  </PieFormLabel>
  <PieTextInput
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
Please use the [form label](/components/form-label/) component for adding a label to the text input.


## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-text-input/CHANGELOG.md)."
} %}

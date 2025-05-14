---
eleventyNavigation:
    key: Code
    parent: Textarea
    order: 2
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    events: "{% include './events.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-textarea" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-textarea.svg?label=pie-textarea">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-textarea` is a Web Component built with [Lit](https://lit.dev/), providing users with a larger input space for writing and editing text that requires more than one line.

This component integrates easily with various frontend frameworks and can be customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/components-textarea) instance!"
} %}

## Installation

To install `pie-textarea` in your application via `npm` or `yarn`:

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

## Events

{% componentDetailsTable {
  tableData: events
} %}

## Importing and usage in templates
For HTML and Vue:

```js
// import as module into a js file that will be loaded on the page where the component is used.
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
```

For React Applications:

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

## Forms usage
{% notification {
  type: "information",
  iconName: "link",
  message: "For general guidance on using our web components within forms, see [our wiki page](https://github.com/justeattakeaway/pie/wiki/Form-Controls#pie-forms-usage)."
} %}

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

{% notification {
  type: "information",
  message: "Using the constraint validation API we provide is completely optional. Feel free to use whatever form of validation best suits your application's needs. The validity state of a textarea will not interfere with the form submission or page behaviour."
} %}

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

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-textarea/CHANGELOG.md)."
} %}

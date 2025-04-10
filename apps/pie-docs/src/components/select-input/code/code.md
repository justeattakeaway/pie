---
eleventyNavigation:
    key: Code
    parent: Select Input
    order: 2
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
    events: "{% include './events.json' %}"
    optionProps: "{% include './option-props.json' %}"
    optgroupProps: "{% include './optgroup-props.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-select" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-select.svg?label=pie-select">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-select` is a Web Component built with [Lit](https://lit.dev/), providing a simple and accessible select input for web applications. It allows users to choose a single option from a predefined list.

This component integrates easily with various frontend frameworks and can be customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/story/select--default) instance!"
} %}

## Installation

To install `pie-select` in your application via `npm` or `yarn`:

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

### Using the `options` prop

The `options` prop accepts an array of option objects or option group objects:

#### Option objects

{% componentDetailsTable {
  tableData: optionProps
} %}

#### Option group objects

{% componentDetailsTable {
  tableData: optgroupProps
} %}

#### Example
```javascript
const selectOptions = [
  { tag: 'option', text: 'Select an option', disabled: true, selected: true },
  {
    tag: 'optgroup',
    label: 'Fruits',
    options: [
      { tag: 'option', text: 'Apple', value: 'apple' },
      { tag: 'option', text: 'Banana', value: 'banana' }
    ]
  }
];
```

## Slots

{% componentDetailsTable {
  tableData: slots
} %}

### Using `pie-icons-webc` with the `pie-select` icon slot

We recommend using `pie-icons-webc` when using the `icon` slot. Here is an example of how you would do this:

```html
<!--
  Note that pie-select and the icons that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-select>
    <icon-vegan slot="leadingIcon"></icon-vegan>
</pie-select>
```

## Events

{% componentDetailsTable {
  tableData: events
} %}

## Importing and usage in templates
For HTML and Vue:

```js
// import as module into a js file that will be loaded on the page where the component is used.
import '@justeattakeaway/pie-webc/components/select.js';
```

```html
<pie-select
    name="my-select"
    :options="[
      { tag: 'option', text: 'Select an option' },
      { tag: 'option', text: 'Option 1', value: 'option1' }
    ]">
</pie-select>
```

For React Applications:

```jsx
import { PieSelect } from '@justeattakeaway/pie-webc/react/select.js';

<PieSelect
    name="my-select"
    options={[
      { tag: 'option', text: 'Select an option' },
      { tag: 'option', text: 'Option 1', value: 'option1' }
    ]}>
</PieSelect>
```

## Forms usage
{% notification {
  type: "information",
  iconName: "link",
  message: "For general guidance on using our web components within forms, see [our wiki page](https://github.com/justeattakeaway/pie/wiki/Form-Controls#pie-forms-usage)."
} %}

It is essential that when using the select component inside a form, you provide a `name` attribute. HTML forms create key/value pairs for select data based on the `name` attribute, which is crucial for native form submission.

### Validation
The select component utilizes the [constraint validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) to provide a queryable validity state for consumers. This means that the component's validity can be checked via a `validity` getter.

#### Example:
```js
const select = document.querySelector('pie-select');
console.log(select.validity.valid);
```

This getter can be useful for reducing the amount of validation code in your application. For example, if you want to create a select that requires attention, you can set the `required` property on the component. You can then check the validity of the input in your application code:

```html
<pie-select
  id="my-select"
  required>
</pie-select>
```

```js
const select = document.querySelector('pie-select');
const isValid = select.validity.valid;

// We could use this to drive the status and assistiveText properties on our select (this would likely be inside a submit event handler in a real application)
if (!isValid) {
  select.status = 'error';
  select.assistiveText = 'Please select an option';
}
```

These concepts work just as well inside a Vue or React application.

{% notification {
  type: "information",
  message: "Using the constraint validation API we provide is completely optional. Feel free to use whatever form of validation best suits your application's needs. The validity state of a select will not interfere with the form submission or page behaviour."
} %}

#### Displaying error messages
To display validation messages, you can use the `assistiveText` and `status` properties on the select component. The `assistiveText` property is used to display a message below the select, and the `status` property is used to set the visual state of the select. The `status` property can be set to `error`, or you can omit providing a `status` to display the `assistiveText` in a neutral state.

```html
<pie-select
  name="details"
  assistiveText="Please select an option"
  status="error">
</pie-select>
```

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-select/CHANGELOG.md)."
} %}
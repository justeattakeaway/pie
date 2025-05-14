---
eleventyNavigation:
    key: Code
    parent: Checkbox
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
    events: "{% include './events.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-checkbox" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-checkbox.svg?label=pie-checkbox">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-checkbox` is a Web Component built using [Lit](https://lit.dev/).

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/story/components-checkbox) instance!"
} %}

## Installation

To install `pie-checkbox` in your application, run the following on your command line:

```shell
npm i @justeattakeaway/pie-webc
```

```shell
yarn add @justeattakeaway/pie-webc
```

### Peer Dependencies

When using `pie-checkbox`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

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

{% componentDetailsTable {
  tableData: events
} %}

## Importing and usage in templates

For Native JS Applications:
```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/checkbox.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-checkbox name="mycheckbox">Label</pie-checkbox>
<script type="module" src="/main.js"></script>
```

For Vue Applications:

```js
// import as module into a js file that will be loaded on the page where the component is used.
import '@justeattakeaway/pie-webc/components/checkbox.js';
```

```html
<pie-checkbox name="mycheckbox">Label</pie-checkbox>
```

For React Applications:

```jsx
import { PieCheckbox } from '@justeattakeaway/pie-webc/react/checkbox.js';

<PieCheckbox name="mycheckbox">Label</PieCheckbox>
```

Examples with and without a label:

```jsx
<!-- Native HTML -->
<pie-checkbox name="mycheckbox">Label</pie-checkbox>

<!-- Without a label it is necessary to pass aria-label or aria-labelledby attributes to the component  -->
<pie-checkbox name="mycheckbox" aria-label="Label"></pie-checkbox>

<!-- JSX -->
<PieCheckbox name="mycheckbox">Label</PieCheckbox>
<PieCheckbox name="mycheckbox" aria-label="Label"></PieCheckbox>
```
### Validation
The checkbox component utilizes the [constraint validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) to provide a queryable validity state for consumers. This means that the component's validity can be checked via a `validity` getter.

#### Example:
```js
const checkbox = document.querySelector('pie-checkbox');
console.log(checkbox.validity.valid);
```

This getter can be useful for reducing the amount of validation code in your application. For example, if you want to create a checkbox that requires attention, you can set the `required` property on the component. You can then check the validity of the input in your application code:

```html
<pie-checkbox
  id="my-checkbox"
  required></pie-checkbox>
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

{% notification {
type: "information",
message: "Using the constraint validation API we provide is completely optional. Feel free to use whatever form of validation best suits your application's needs. The validity state of an input will not interfere with the form submission or page behaviour."
} %}

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-checkbox/CHANGELOG.md)."
} %}

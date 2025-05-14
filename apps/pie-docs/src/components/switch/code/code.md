---
eleventyNavigation:
    key: Code
    parent: Switch
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-switch" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-switch.svg?label=pie-switch">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-switch` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible switch component for web applications.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/story/components-switch) instance!"
} %}

## Installation

To install `pie-switch` in your application, run the following on your command line:

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

This component emits the `change` event when toggled. This allows you to treat it like a native checkbox (`<input type="checkbox" />`) element when listening for events.

For examples of how to add an event listener, see the [Examples](#examples) section below.

## Examples

### HTML and native JS

#### main.js

Register the component in JavaScript:
```js
import '@justeattakeaway/pie-webc/components/switch.js';
```

#### index.html
Then, having imported `main.js` into your HTML file, you can use the component:
```html
<pie-switch id="switch" checked label="Label" labelPlacement="trailing"></pie-switch>

<script>
document.querySelector('#switch').addEventListener('change', (event) => {
    console.log(event.target.checked);
});
</script>
```

or, instead of using a script tag, you can use an event attribute (note the `on` prefix):

```html
<pie-switch
  label="Label"
  onchange="(event) => {
    console.log(event.target.checked);
  }">
</pie-switch>
```

{% notification {
  type: "information",
  iconName: "info-circle",
  message: "To access the checkbox state in TypeScript you may need to cast the target: `(event.target as HTMLInputElement).checked`"
} %}

### Vue, Angular, Svelte, etc.

The general approach is similar here: import the component (to register it in the browser as a custom element) then use it in an HTML template.

Note that as the component has already been registered in the browser, you don't need to declare the web component like you would when importing a component written in your chosen framework; i.e. you can treat it like a native HTML element.

```html
<script>
  import '@justeattakeaway/pie-webc/components/switch.js';
</script>

<template>
  <pie-switch checked label="Label" labelPlacement="trailing" @change="handleChange"></pie-switch>
</template>
```

### React
```jsx
import { PieSwitch } from '@justeattakeaway/pie-webc/react/switch.js';

<PieSwitch checked label="Label" labelPlacement="trailing" onChange={handleChange}></PieSwitch>
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more examples, see [here](https://github.com/justeattakeaway/pie-aperture/tree/main)."
} %}

### Form integration
The `pie-switch` component can be integrated into HTML forms similarly to native HTML input elements. The component will associate itself with any form it is placed inside. As long as you provide a `name` attribute, the component will be included in the form's submission payload. A `value` attribute can also be provided, but if not then it will have a default value of `on`.

```html
<form action="/default-endpoint" method="POST">
  <pie-switch name="switch" value="someValue" label="Click me"></pie-switch>
  <button type="submit">Submit</button>
</form>
```

#### Form Validation
To make `pie-switch` a required form field, simply add the `required` attribute to the component markup. This will prevent the form from being submitted if the switch is not toggled and will trigger native HTML form validation.

Currently this defaults to browser styling, but this may be updated in the future.

```html
<form action="/default-endpoint" method="POST">
  <pie-switch name="switch" value="someValue" label="Click me" required></pie-switch>
  <button type="submit">Submit</button>
</form>
```

To set a custom validation message, please call the `setCustomValidity` method exposed by the component. This will allow you to set a custom message that will be displayed when the form is submitted without the switch being toggled.

This behaviour is consistent with native HTML input elements. We may revisit this to provide a prop to set the custom validation message in the future.

```js
const switch = document.querySelector('pie-switch');
switch.setCustomValidity('Please toggle the switch');
```

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-switch/CHANGELOG.md)."
} %}

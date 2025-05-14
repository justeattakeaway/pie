---
eleventyNavigation:
    key: Code
    parent: Button
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-button" style="text-decoration: none">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-button.svg?label=pie-button">
  </a>

  <a href="https://www.npmjs.com/package/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg?label=pie-webc">
  </a>
</p>

`pie-button` is a Web Component built using [Lit](https://lit.dev/). It offers a simple and accessible button component for web applications.

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/docs/components-button) instance!"
} %}

## Installation

To install `pie-button` in your application, run the following on your command line:

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

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Forms Usage

The `pie-button` web component is designed to integrate with standard HTML forms just like a native HTML button. When positioned inside a form, the component will automatically associate itself, enabling it to directly interact with the form context.

### Button Attributes

The `pie-button` provides a set of attributes to customise its behaviour within forms:

- `type`: Determines the button's function. Set to `submit` for form submissions or `reset` to clear form fields.
- `formaction`: Designates an alternative URL for form data submission when this specific button is clicked.
- `formenctype`: Specifies the form data encoding type during submission via this button.
- `formmethod`: Sets the HTTP method (e.g., GET or POST) for form data when initiated by this button.
- `formnovalidate`: If present, ensures the form is submitted without validation checks.
- `formtarget`: Dictates where to display the response after form submission.


{% notification {
  type: "neutral",
  iconName: "link",
  message: "Please see the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes) for more information on these attributes."
} %}

### Integration Example

```html
<form action="/default-endpoint" method="post">
    <input type="text" name="username" required>
    <pie-button
        type="submit"
        formaction="/alternate-endpoint"
        formenctype="multipart/form-data"
        formmethod="post"
        formnovalidate
        formtarget="_blank">
        Submit
    </pie-button>
</form>
```

In this example:

- The pie-button, when clicked, will send the form data to /alternate-endpoint instead of the form's default /default-endpoint.
- It uses the multipart/form-data encoding type for form submission.
- The form will submit using the POST method.
- No validation will be performed during submission, thanks to formnovalidate.
- The form's submission response will be opened in a new browser tab/window because of the formtarget="_blank" attribute.

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/button.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-button type="reset" isFullWidth="true" onclick="e => console.log(e)">Click me!</pie-button>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/button.js';

<pie-button @click="handleClick" size="large" type="button" variant="secondary">Click me!</pie-button>
```

For React Applications:

```jsx
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';

<PieButton onClick={handleClick}>increment</PieButton>
```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more examples, see [here](https://github.com/justeattakeaway/pie-aperture/tree/main)."
} %}


## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-button/CHANGELOG.md)."
} %}

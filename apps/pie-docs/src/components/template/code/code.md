---
eleventyNavigation:
    key: Code
    parent: Template
    order: 4
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    slots: "{% include './slots.json' %}"
---

## Overview

`pie-button` is a Web Component built using the Lit library. It offers a simple and accessible button component for web applications.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-button` in your application, run the following on your command line:

```shell
# npm
$ npm i @justeattakeaway/pie-button
```

```shell
# yarn
$ yarn add @justeattakeaway/pie-button
```
## Playground

 <iframe
  src="http://localhost:6006/?path=/docs/button--pie-button-playground&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="800px"
  style="border: none; margin-top: 24px;"
></iframe>

## Variants

 <iframe
  src="http://localhost:6006/?path=/docs/button--documentation&viewMode=story&shortcuts=true&singleStory=true"
  width="100%"
  height="800px"
  style="border: none; background-color: #fcfcfc; margin-top: 24px;"
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

This component does not use any custom event handlers. In order to add event listening to this component, you can treat it like a native HTML element in your application.

For example, to add a click handler in various templates:

## Forms Usage

The `pie-button` web component is designed to integrate with standard HTML forms just like a native HTML button. When positioned inside a form, the component will automatically associate itself, enabling it to directly interact with the form context.

### Button Attributes

The `pie-button` provides a set of attributes to customize its behavior within forms:

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

```html
<!-- import '@justeattakeaway/pie-button' as a module in the script tag  -->
<pie-button type="reset" isFullWidth="true" onclick="e => console.log(e)">Click me!</pie-button>
```

For Native JS Applications, Vue, Angular, Svelte etc.: 

```js
// Vue templates (using Nuxt 3)
import { PieButton } from '@justeattakeaway/pie-button';

<pie-button @click="handleClick" size="large" type="button" variant="secondary">Click me!</pie-button>
```

For React Applications. When using the React version of the component, please make sure you also include React as a dependency in your project as well. See Peer Dependencies section.

```js
// React templates (using Next 13)
import { PieButton } from '@justeattakeaway/pie-button/dist/react';

<PieButton onClick={handleClick}>increment</PieButton>

```

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more examples, see [here](https://github.com/justeattakeaway/pie-aperture/tree/main)."
} %}


## Peer Dependencies

When using `pie-button`, you will also need to include a couple of dependencies to ensure the component renders as expected.

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See the [PIE Wiki](https://github.com/justeattakeaway/pie-aperture/tree/main) for more information on peer dependencies."
} %}

## Changelog

{% notification {
  type: "neutral",
  iconName: "link",
  message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-button/CHANGELOG.md)."
} %}
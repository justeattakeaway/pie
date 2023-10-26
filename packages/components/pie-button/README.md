<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-button">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-button.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-button)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Events](#events)
   - [HTML example](#html)
   - [Vue example (using Nuxt 3)](#vue-templates-using-nuxt-3)
   - [React example (using Next 13)](#react-templates-using-next-13)
7. [Forms usage](#forms-usage)
8. [Contributing](#contributing)


## pie-button

`pie-button` is a Web Component built using the Lit library. It offers a simple and accessible button component for web applications.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-button` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-button

# yarn
$ yarn add @justeattakeaway/pie-button
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

```js
// Default – for Native JS Applications, Vue, Angular, Svelte etc.
import { PieButton } from '@justeattakeaway/pie-button';

// React
// For React, you will need to import our React specific component build
// Which wraps the web component using the @lit-labs/react package

// Note: When using the React version of the component, please make sure
// you also include React as a dependency in your project as well. See Peer Dependencies section.

import { PieButton } from '@justeattakeaway/pie-button/dist/react';
```


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-button`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki for more information and how to include these in your application](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies).


## Props

| Property       | Type      | Default    | Description                                                                                                          |
|----------------|-----------|------------|----------------------------------------------------------------------------------------------------------------------|
| size           | `String`  | `medium`   | Size of the button, one of `sizes` – `xsmall`, `small-expressive`, `small-productive`, `medium`, `large`             |
| type           | `String`  | `submit`   | Type of the button, one of `types` – `submit`, `button`, `reset`. [Read further on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)|
| variant        | `String`  | `primary`  | Variant of the button, one of `variants` – `primary`, `secondary`, `outline`, `ghost`, `destructive`, `destructive-ghost`, `inverse`, `ghost-inverse`, `outline-inverse` |
| disabled       | `Boolean` | `false`    | If `true`, disables the button.                                                                                      |
| isFullWidth    | `Boolean` | `false`    | If `true`, sets the button width to 100% of its container.                                                          |
| isLoading      | `Boolean` | `false`    | If `true`, displays a loading indicator inside the button.                                                           |
| iconPlacement  | `String`  | `leading`  | Icon placements of the icon slot, if provided, one of `iconPlacements` - `leading`, `trailing`                       |
| name           | `String`  | `undefined`| The name of the button, to be submitted with form data. [Read further on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-name) |
| value          | `String`  | `undefined`| The value of the button, to be submitted with form data. [Read further on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-value) |
| formaction     | `String`  | `undefined`| Designates an alternative URL for form data submission. [Read further on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction) |
| formenctype    | `String`  | `undefined`| Specifies the form data encoding type. [Read further on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formenctype) |
| formmethod     | `String`  | `undefined`| Sets the HTTP method for form data. [Read further on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formmethod) |
| formnovalidate | `Boolean` | `undefined`    | Ensures the form is submitted without native HTML validation. [Read further on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formnovalidate) |
| formtarget     | `String`  | `undefined`| Dictates where to display the response after form submission. [Read further on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formtarget) |


In your markup or JSX, you can then use these to set the properties for the `pie-button` component:

```html
<!-- Native HTML -->
<pie-button size='medium' type='button' variant='primary'>Click me!</pie-button>

<!-- JSX -->
<PieButton size='medium' type='button' variant='primary'>Click me!</PieButton>
```


## Slots

| Slot          | Description                                                                                                                        |
|---------------|------------------------------------------------------------------------------------------------------------------------------------|
| Default slot  | The default slot is used to pass text into the button component.                                                                   |
| icon         | Used to pass in an icon to the button component. The icon placement can be controlled via the `iconPlacement` prop and we recommend using `pie-icons-webc` for defining this icon, but this can also accept an SVG icon. |

### Using `pie-icons-webc` with `pie-button` icon slot

We recommend using `pie-icons-webc` when using the `icon` slot. Here is an example of how you would do this:

```html
<!--
  Note that pie-button and the icon that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-button>
    <icon-plus-circle slot="icon"></icon-plus-circle>
    Search
</pie-button>
```


## Events

This component does not use any custom event handlers. In order to add event listening to this component, you can treat it like a native HTML element in your application.

For example, to add a click handler in various templates:

### HTML

```html
<!-- Other attributes omitted for clarity -->
<pie-button onclick="e => console.log(e)">Click me!</pie-button>
```

### Vue templates (using Nuxt 3)

```html
<!-- Other attributes omitted for clarity -->
<pie-button @click="handleClick">Click me!</pie-button>
```

### React templates (using Next 13)

```html
<!-- Other attributes omitted for clarity -->
<PieButton onClick={handleClick}>increment</PieButton>

```

## Forms usage

The `pie-button` web component is designed to integrate with standard HTML forms just like a native HTML button. When positioned inside a form, the component will automatically associate itself, enabling it to directly interact with the form context.

### Button Attributes

The `pie-button` provides a set of attributes to customize its behavior within forms:

- `type`: Determines the button's function. Set to `submit` for form submissions or `reset` to clear form fields.
- `formaction`: Designates an alternative URL for form data submission when this specific button is clicked.
- `formenctype`: Specifies the form data encoding type during submission via this button.
- `formmethod`: Sets the HTTP method (e.g., GET or POST) for form data when initiated by this button.
- `formnovalidate`: If present, ensures the form is submitted without validation checks.
- `formtarget`: Dictates where to display the response after form submission.

Please see the [MDN docs]((https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)) for more information on these attributes.

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

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
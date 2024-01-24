<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-input">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-input.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-input)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Events](#events)
7. [Contributing](#contributing)

## pie-input

`pie-input` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-input` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-input

# yarn
$ yarn add @justeattakeaway/pie-input
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieInput } from '@justeattakeaway/pie-input';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-input';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using ​@lit/react
import { PieInput } from '@justeattakeaway/pie-input/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-input`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.


## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `autocomplete` | `string` | - | Allows the user to enable or disable autocomplete functionality on the input field. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for more information and values. |
| `autoFocus` | `boolean` | - | If true, the input will be focused on the first render. No more than one element in the document or dialog may have the autofocus attribute. If applied to multiple elements the first one will receive focus. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus) for more information. |
| `inputmode` | `'none'`, `'text'`, `'tel'`, `'url'`, `'email'`, `'numeric'`, `'decimal'`, `'search'` | - | Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#inputmode) for more information. |
| `maxlength` | `number` | - | Maximum length (number of characters) of value. Only applies to types: `text`, `url`, `tel`, `email`, and `password`. |
| `minlength` | `number` | - | Minimum length (number of characters) of value. Only applies to types: `text`, `url`, `tel`, `email`, and `password`. |
| `name` | `string` | - | The name of the input (used as a key/value pair with `value`). This is required in order to work properly with forms. |
| `pattern` | `string` | - | Specifies a regular expression the form control's value should match. |
| `placeholder` | `string` | - | The placeholder text to display when the input is empty. Only applies to types: `text`, `url`, `tel`, `email`, and `password`. |
| `readonly` | `boolean` | - | When true, the user cannot edit the control. Not the same as disabled. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information. |
| `type` | `'text'`, `'number'`, `'password'`, `'url'`, `'email'`, `'tel'` | `text` | The type of HTML input to render. |
| `value` | `string` | `''` | The value of the input (used as a key/value pair in HTML forms with `name`). |


In your markup or JSX, you can then use these to set the properties for the `pie-input` component:

```html
<!-- Native HTML -->
<pie-input
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
</pie-input>

<!-- JSX -->
<PieInput
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
</PieInput>
```

## Events
| Event | Type | Description |
|-------|------|-------------|
| `change` | `CustomEvent` | Triggered when the input loses focus after it's value has changed. |
| `input` | `InputEvent` | Triggered when the input value is changed. |

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

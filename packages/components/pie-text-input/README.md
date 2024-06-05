<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-text-input">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-text-input.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-text-input)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Events](#events)
7. [Slots](#slots)
8. [Contributing](#contributing)

## pie-text-input

`pie-text-input` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-text-input` in your application, run the following on your command line:

_Note: Versions of this component prior to v0.19.0 were named `pie-input`._

```bash
# npm
$ npm i @justeattakeaway/pie-text-input

# yarn
$ yarn add @justeattakeaway/pie-text-input
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieTextInput } from '@justeattakeaway/pie-text-input';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-text-input';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using ​@lit/react
import { PieTextInput } from '@justeattakeaway/pie-text-input/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-text-input`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.


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
| `disabled` | `boolean` | - | When true, the user cannot edit or interact with the control.|
| `type` | `'text'`, `'number'`, `'password'`, `'url'`, `'email'`, `'tel'` | `text` | The type of HTML input to render. |
| `value` | `string` | `''` | The value of the input (used as a key/value pair in HTML forms with `name`). |
| `assistiveText` | `string` | `''` | Allows assistive text to be displayed below the input element. |
| `status` | `'error'`, `'success'` | `undefined` | The status of the input component / assistive text. If you use `status` you must provide an `assistiveText` prop value for accessibility purposes. |
| `step` | `number` | - | An optional amount that value should be incremented or decremented by when using the up and down arrows in the input. Only applies when type is `number`. |
| `min` | `number` | - | The minimum value of the input. Only applies when type is `number`. If the value provided is lower, the input is invalid. |
| `max` | `number` | - | The maximum value of the input. Only applies when type is `number`. If the value provided is higher, the input is invalid. |
| `size` | `'small'`, `'medium'`, `'large'` | `medium` | The size of the input field. Can be `small`, `medium`, or `large`. Defaults to `medium`. |
| `required` | `boolean` | `false` | If true, the input is required to have a value before submitting the form. If there is no value, then the component validity state will be invalid. Important note: This will not prevent the form submission. |
| `defaultValue` | `string` | - | During a form reset, the default value will replace the current value. |

In your markup or JSX, you can then use these to set the properties for the `pie-text-input` component:

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

<!-- JSX -->
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

## Events
| Event | Type | Description |
|-------|------|-------------|
| `change` | `CustomEvent` | Triggered when the input loses focus after it's value has changed. |
| `input` | `InputEvent` | Triggered when the input value is changed. |

## Slots
| Slot | Description |
|------|-------------|
| `leadingText` | Short text to display at the start of the input. Wrap the text in a `<span>`. Do not use with `leadingIcon` at the same time. |
| `leadingIcon` | An icon to display at the start of the input. Do not use with `leadingText` at the same time. |
| `trailingText` | Short text to display at the end of the input. Wrap the text in a `<span>`. Do not use with `trailingIcon` at the same time. |
| `trailingIcon` | An icon to display at the end of the input. Do not use with `trailingText` at the same time. |

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

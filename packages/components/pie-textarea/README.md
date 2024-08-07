<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-textarea">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-textarea.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-textarea)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Contributing](#contributing)

## pie-textarea

`pie-textarea` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-textarea` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-textarea

# yarn
$ yarn add @justeattakeaway/pie-textarea
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieTextarea } from '@justeattakeaway/pie-textarea';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-textarea';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using ​@lit/react
import { PieTextarea } from '@justeattakeaway/pie-textarea/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-textarea`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.


## Props

| Property | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false`| Indicates whether or not the textarea is disabled. |
| `size` | `'small'`, `'medium'`, `'large'` | `'medium'` | The size of the textarea field. |
| `resize` | `'auto'`, `'manual'` | `'auto'` | Controls the resizing behaviour of the textarea. |
| `value` | `string` | `''` | The value of the textarea (used as a key/value pair in HTML forms with `name`). |
| `name` | `string` | `''` | The name of the textarea (used as a key/value pair with `value`). This is required in order to work properly with forms. |
| `autocomplete` | `string` | `''` | Allows the user to enable or disable autocomplete functionality on the textarea field. |
| `autoFocus` | `boolean` | `false` | If true, the textarea will be focused on the first render. |
| `readonly` | `boolean` | `false` | When true, the user cannot edit the control. Not the same as disabled. |
| `required` | `boolean` | `false` | If true, the textarea is required to have a value before submitting the form. If there is no value, then the component validity state will be invalid. |

In your markup or JSX, you can then use these to set the properties for the `pie-textarea` component:

```html
<!-- Native HTML -->
<pie-textarea></pie-textarea>

<!-- JSX -->
<PieTextarea></PieTextarea>
```

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-form-label">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-form-label.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-form-label)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Contributing](#contributing)

## pie-form-label

`pie-form-label` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-form-label` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-form-label

# yarn
$ yarn add @justeattakeaway/pie-form-label
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieFormLabel } from '@justeattakeaway/pie-form-label';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-form-label';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using ​@lit/react
import { PieFormLabel } from '@justeattakeaway/pie-form-label/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-form-label`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

## Props

| Property | Type | Default | Description |
|---|---|---|---|
| for | `String` | `undefined` | Analog to the native html `for` attribute, it defines the association of the PIE Form Label with another PIE Web Component |
| optional | `String` | `undefined` | Sets an optional text to be placed next to the main label |
| trailing | `String` | `undefined` | Sets a trailing text at the end of the label component  |

In your markup or JSX, you can then use these to set the properties for the `pie-form-label` component:

```html
<!-- Native HTML -->
<pie-form-label for="username">Label</pie-form-label>
<pie-input id="username" name="username" type="text"></pie-input>


<!-- JSX -->
<PieFormLabel for="username">Label</PieFormLabel>
<PieInput id="username" name="username" type="text"></PieInput>
```

Note that the `for` prop should match the `id` of the input element you want to associate the label with.

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

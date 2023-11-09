<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-divider">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-divider.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-divider)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Contributing](#contributing)


## pie-divider

`pie-divider` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-divider` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-divider

# yarn
$ yarn add @justeattakeaway/pie-divider
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieDivider } from '@justeattakeaway/pie-divider';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-divider';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using @lit-labs/react
import { PieDivider } from '@justeattakeaway/pie-divider/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-divider`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

## Props

| Property | Type | Default | Description |
|---|---|---|---|
| variant | `String` | `default` | Variant of the divider, one of variants – default, inverse |
| orientation | `String` | `horizontal` | Orientation of the divider, one of – horizontal, vertical |

In your markup or JSX, you can then use these to set the properties for the `pie-divider` component:

```html
<!-- Native HTML -->
<pie-divider />

<!-- JSX -->
<PieDivider />
```

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
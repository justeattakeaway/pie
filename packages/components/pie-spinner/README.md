<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-spinner">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-spinner.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-spinner)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Contributing](#contributing)

## pie-spinner

`pie-spinner` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-spinner` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-spinner

# yarn
$ yarn add @justeattakeaway/pie-spinner
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

```js
// default
import { PieSpinner } from '@justeattakeaway/pie-spinner';

// react
import { PieSpinner } from '@justeattakeaway/pie-spinner/dist/react';
```


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-spinner`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.


## Props

| Property | Type | Default | Description |
|---|---|---|---|
| size | `String` | `m` | Size of the spinner, one of `sizes` – `xs`, `s`, `m`, `l`, `xl` |
| variant | `String` | `brand` | Variant of the spinner, one of `variants` – `brand`, `secondary`, `inverse` |
| aria  | `Object`  | `undefined`  | An object representing the aria attributes such as label;

In your markup or JSX, you can then use these to set the properties for the `pie-spinner` component:

```html
<!-- Native HTML -->
<pie-spinner></pie-spinner>

<!-- JSX -->
<PieSpinner></PieSpinner>
```

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
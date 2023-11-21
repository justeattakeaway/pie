<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-card">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-card.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-card)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Contributing](#contributing)

## pie-card

`pie-card` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-card` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-card

# yarn
$ yarn add @justeattakeaway/pie-card
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieCard } from '@justeattakeaway/pie-card';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-card';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using ​@lit/react
import { PieCard } from '@justeattakeaway/pie-card/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-card`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

## Props

| Property        | Type      | Default     | Description                                                                                                                                                                                                                                                         |
|---|---|-------------|------------------------------------------------------------------------------------------------------------------------------|
| tag | `String`  | `button`      | What HTML element the card should be such as a or button
| variant         | `string`  | `default`   | What style variant the card should be such as default, outline, inverse or outline-inverse                                                                                                                                                                          |
| disabled        | `boolean` | `false`     | When true, the card is disabled.                                                                                                                                                                                                                          |
| href            | `string`  | `undefined` | The URL that the card should point to (this will not take effect unless the card is a link).                                                                                                                                                                        |
| target          | `string`  | `undefined` | Where to display the linked URL such as _self, _blank, _parent or _top (this will not take effect unless the card is a link).                                                                                                                                       |
| rel             | `string`  | `undefined` | What the relationship of the linked URL is (this will not take effect unless the card is a link).                                                                                                                                                                   |
| aria            | `object`  | `undefined` | The ARIA labels used for various parts of the card.                                                                                                                                                                                                                 |
| isDraggable     | `boolean` | `false`     | Sets a grab/grabbing cursor when set to true. **Note:** the actual dragging capabilities should be implemented by the consuming application.                                                                                                                            |
| padding         | `String`  | `undefined` | Sets the padding of the card. Can be either a single value or two values separated by commas. Setting a single value adds padding to all sides of the card, whereas setting two values will set the "topBottom, leftRight" padding. e.g `'a'` or `'a, b'` |


In your markup or JSX, you can then use these to set the properties for the `pie-card` component:

```html
<!-- Native HTML -->
<pie-card disabled href="/foo/bar" rel="noopener" target="_blank"></pie-card>

<!-- JSX -->
<PieCard disabled href="/foo/bar" rel="noopener" target="_blank"></PieCard>
```

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
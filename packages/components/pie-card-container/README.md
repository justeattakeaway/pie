<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-card-container">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-card-container.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-card-container)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Contributing](#contributing)

## pie-card-container

`pie-card-container` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-card-container` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-card-container

# yarn
$ yarn add @justeattakeaway/pie-card-container
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

```js
// default
import { PieCardContainer } from '@justeattakeaway/pie-card-container';

// react
import { PieCardContainer } from '@justeattakeaway/pie-card-container/dist/react';
```


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-card-container`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

## Props

| Property        | Type      | Default     | Description                                                                                                                                                                                                                                                         |
|---|---|-------------|------------------------------------------------------------------------------------------------------------------------------|
| tag | `String`  | `button`      | What HTML element the card should be such as a or button
| variant         | `string`  | `default`   | What style variant the card should be such as default, outline, inverse or outline-inverse                                                                                                                                                                          |
| disabled        | `boolean` | `false`     | When true, the card container is disabled.                                                                                                                                                                                                                          |
| href            | `string`  | `undefined` | The URL that the card should point to (this will not take effect unless the card is a link).                                                                                                                                                                        |
| target          | `string`  | `undefined` | Where to display the linked URL such as _self, _blank, _parent or _top (this will not take effect unless the card is a link).                                                                                                                                       |
| rel             | `string`  | `undefined` | What the relationship of the linked URL is (this will not take effect unless the card is a link).                                                                                                                                                                   |
| aria            | `object`  | `undefined` | The ARIA labels used for various parts of the card.                                                                                                                                                                                                                 |
| isDraggable     | `boolean` | `false`     | Sets a grab/grabbing cursor when set to true. **Note:** the actual dragging capabilities should be implemented by the consuming application.                                                                                                                            |
| padding         | `String`  | `undefined` | Sets the padding of the card container. Can be either a single value or two values separated by commas. Setting a single value adds padding to all sides of the card, whereas setting two values will set the "topBottom, leftRight" padding. e.g `'a'` or `'a, b'` |


In your markup or JSX, you can then use these to set the properties for the `pie-card-container` component:

```html
<!-- Native HTML -->
<pie-card-container disabled href="/foo/bar" rel="noopener" target="_blank"></pie-card-container>

<!-- JSX -->
<PieCardContainer disabled href="/foo/bar" rel="noopener" target="_blank"></PieCardContainer>
```

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
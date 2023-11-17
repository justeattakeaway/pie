<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-link">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-link.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-link)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Contributing](#contributing)

## pie-link

`pie-link` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-link` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-link

# yarn
$ yarn add @justeattakeaway/pie-link
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieLink } from '@justeattakeaway/pie-link';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-link';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using @lit/react
import { PieLink } from '@justeattakeaway/pie-link/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-link`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

## Props

| Property      | Type      | Default     | Description                                                                                          |
| ------------- | --------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| tag           | `String`  | `a`         | The rendered HTML element of the link, one of `tags` – `a`, `button`                        |
| variant       | `String`  | `default`   | Variant of the link, one of `variants` – `default`, `high-visibility`, `inverse`         |
| size          | `String`  | `medium`    | Size of the link, one of `sizes` – `medium`, `small`                                          |
| underline     | `String`  | `default`   | The underline behaviour of the link, one of `underlineTypes` – `default`, `reversed`. The `reverse` type can only be used if `isStandalone` is set to `true`                                          |
| href          | `String`  | `undefined` | Native html `href` attribute                                                                       |
| rel           | `String`  | `undefined` | Native html `rel` attribute                                                                        |
| target        | `String`  | `undefined` | Native html `target` attribute                                                                     |
| type          | `String`  | `submit`    | Native html `type` attribute if the tag is set to `button`                                       |
| isBold        | `Boolean` | `false`     | If `true`, sets the link text bold                                                                 |
| isStandalone  | `Boolean` | `false`     | If `true`, sets the link as a block element                                                        |
| hasVisited    | `Boolean` | `false`     | If `true`, the link will apply the styles for the visited state                                    |
| iconPlacement | `String`  | `leading`   | Icon placements of the icon slot, if provided, one of `iconPlacements` - `leading`, `trailing`. Can only be used if `isStandalone` is `true` |
| aria          | `object`  | `undefined` | The ARIA labels used for the link. |

In your markup or JSX, you can then use these to set the properties for the `pie-link` component:

```html
<!-- Native HTML -->
<pie-link></pie-link>

<!-- JSX -->
<PieLink></PieLink>
```

## Slots

| Slot         | Description                                                                                                                                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default slot | The default slot is used to pass text into the link component.                                                                                                                                                             |
| icon         | Used to pass in an icon to the link component. The icon placement can be controlled via the `iconPlacement` prop and we recommend using `pie-icons-webc` for defining this icon, but this can also accept an SVG icon. |

### Using `pie-icons-webc` with the `pie-link` icon slot

We recommend using `pie-icons-webc` when using the `icon` slot. Here is an example of how you would do this:

```html
<!--
  Note that pie-link and the icons that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-link>
    <icon-plus-circle slot="icon"></icon-plus-circle>
    Search
</pie-link>
```

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
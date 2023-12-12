<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-tag">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-tag.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-tag)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Contributing](#contributing)

## pie-tag

`pie-tag` is a Web Component built using the Lit library. A tag is a small visual element used to represent and categorize information within a user interface. 

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-tag` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-tag

# yarn
$ yarn add @justeattakeaway/pie-tag
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieTag } from '@justeattakeaway/pie-tag';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-tag';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using ​@lit/react
import { PieTag } from '@justeattakeaway/pie-tag/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-tag`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.


## Props

| Property | Type | Default | Description |
|---|---|---|---|
| size | `String` | `large` | Size of the tag. Can be either `large` or `small` |
| variant | `String` | `neutral` | Variant of the tag, one of `variants` - `neutral-alternative`, `neutral`, `outline`, `ghost`, `blue`, `green`, `yellow`, `red`, `brand` |
| isStrong | `Boolean` | `false` | If `true`, displays strong tag styles for `green`, `yellow`, `red`, `blue` and `neutral` variants'|

Since the component is not interactive it doesn't have a disabled property. To give the Tag a disabled look please use `--tag-opacity` css variable. Recommended opacity level for disabled tag is 0.5.

In your markup or JSX, you can then use these to set the properties for the `pie-tag` component:

```html
<!-- Native HTML -->
<pie-tag>Label</pie-tag>

<!-- JSX -->
<PieTag>Label</PieTag>
```
## Slots

| Slot | Description |
| Default slot | Used to pass text into the tag component. |
| icon | Used to pass in an icon to the tag component. We recommend using `pie-icons-webc` for defining this icon, but this can also accept an SVG icon. |

### Using `pie-icons-webc` with `pie-tag` icon slot

We recommend using `pie-icons-webc` when using the `icon` slot. Here is an example of how you would do this:

```html
<!--
  Note that pie-tag and the icon that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-tag>
    <icon-vegan slot="icon"></icon-vegan>
    Vegan
</pie-tag>
```

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
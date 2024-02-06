<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-chip">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-chip.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-chip)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Contributing](#contributing)

## pie-chip

`pie-chip` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-chip` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-chip

# yarn
$ yarn add @justeattakeaway/pie-chip
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieChip } from '@justeattakeaway/pie-chip';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-chip';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using ​@lit/react
import { PieChip } from '@justeattakeaway/pie-chip/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-chip`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.


## Props

| Property | Type | Default | Description |
|---|---|---|---|
| variant | `String` | `default` | Variant of the chip, one of `variants` - `default`, `outline`, ``ghost |
| isSelected | `Boolean` | `false` | If `true`, applies the selected styles |
| isLoading | `Boolean` | `false` | If `true`, displays a loading indicator inside the chip |
| isDismissible | `Boolean` | `false` | If `true`, displays a close icon to dismiss the chip component. Can be only used if `isSelected` is set to true |
| disabled | `Boolean` | `false` | If `true`, disables the chip component |

In your markup or JSX, you can then use these to set the properties for the `pie-chip` component:

```html
<!-- Native HTML -->
<pie-chip>Label</pie-chip>

<!-- JSX -->
<PieChip>Label</PieChip>
```

## Slots

| Slot | Description |
| Default slot | Used to pass text into the chip component. |
| icon | Used to pass in an icon to the chip component. We recommend using `pie-icons-webc` for defining this icon, but this can also accept an SVG icon. |

### Using `pie-icons-webc` with `pie-chip` icon slot

We recommend using `pie-icons-webc` when using the `icon` slot. Here is an example of how you would do this:

```html
<!--
  Note that pie-chip and the icon that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-chip>
    <icon-vegan slot="icon"></icon-vegan>
    Label
</pie-chip>
```

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
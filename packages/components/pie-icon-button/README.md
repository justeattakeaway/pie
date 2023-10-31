<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-icon-button">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-icon-button.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-icon-button)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Events](#events)
   - [HTML example](#html)
   - [Vue example (using Nuxt 3)](#vue-templates-using-nuxt-3)
   - [React example (using Next 13)](#react-templates-using-next-13)
7. [Contributing](#contributing)


## `pie-icon-button`

`pie-icon-button` is a Web Component built using the Lit library. It offers a simple and accessible icon button component for web applications.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-icon-button` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-icon-button

# yarn
$ yarn add @justeattakeaway/pie-icon-button
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieIconButton } from '@justeattakeaway/pie-icon-button';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-icon-button';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using @lit-labs/react
import { PieIconButton } from '@justeattakeaway/pie-icon-button/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-icon-button`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

## Importing Icons

We recommend using the `pie-icon-button` component alongside the `pie-icons-webc` package. This package contains all of the PIE iconset as importable web components and are built to work alongside our other PIE components.

`pie-icon-button` provides a slot into which you can pass your chosen icon, and it will automatically size it to the correct dimensions depending on the `size` of the `pie-icon-button` component.

### Importing an icon with `pie-icons-webc`

To import an icon using `pie-icons-webc`, you should import the icon that you would like to use alongside the `pie-icon-button` component:

```js
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-icons-webc/icons/IconClose';
```

Then, in your markup, you would implement the component like this:

```html
<pie-icon-button><icon-close /></pie-icon-button>
```

> [!WARNING]
> Usually, icons imported from `pie-icons-webc` can be resized by specifying the `size` prop (such as `<icon-close size="xl" />`).
> These size props will have no effect when used alongside the `pie-icon-button` component, as the icon is resized with respect to the size of the `pie-icon-button`.


## Props

| Property    | Type      | Default         | Description                                                          |
|-------------|-----------|-----------------|----------------------------------------------------------------------|
| size        | `String`  | `medium`        | Size of the Icon Button, one of `sizes` – `xsmall`, `small`, `medium`, `large` |
| variant     | `String`  | `primary`       | Variant of the button, one of `variants` – `primary`, `secondary`, `outline`, `ghost`, `ghost-secondary` |
| disabled    | `Boolean` | `false`         | If `true`, disables the button.                                      |

In your HTML markup or JSX, you can then use these to set the properties for the `pie-icon-button` component, like so:

```html
<!-- Native HTML -->
<pie-icon-button size='small' type='button' variant='secondary'><icon-close /></pie-icon-button>

<!-- JSX -->
<PieIconButton size='small' type='button' variant='secondary'><icon-close /></PieIconButton>
```

## Events

This component does not use any custom event handlers. In order to add event listening to this component, you can treat it like a native HTML element in your application.

For example, to add a click handler in various templates:


### HTML

```html
<!-- Other attributes omitted for clarity -->
<pie-icon-button onclick="e => console.log(e)"><icon-close /></pie-icon-button>
```

### Vue templates (using Nuxt 3)

```html
<!-- Other attributes omitted for clarity -->
<pie-icon-button @click="handleClick"><icon-close /></pie-icon-button>
```

### React templates (using Next 13)

```html
<!-- Other attributes omitted for clarity -->
<PieIconButton onClick={handleClick}><icon-close /></PieIconButton>

```

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-notification">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-notification.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-notification)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Contributing](#contributing)

## pie-notification

`pie-notification` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-notification` in your application, run the following on your command line:

```bash
npm i @justeattakeaway/pie-notification

yarn add @justeattakeaway/pie-notification
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieNotification } from '@justeattakeaway/pie-notification';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-notification';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using ​@lit/react
import { PieNotification } from '@justeattakeaway/pie-notification/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-notification`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

## Props

| Property | Type | Default | Description |
|---|---|---|---|
| isOpen | `Boolean` | true | When true, the notification is set to be open and visible |
| variant | `String`| neutral | Set the variant of the notification. Available variants: `neutral`, `neutral-alternative`, `info`, `success`, `warning`, `error` |
| compact | `Boolean` | false | When true, the footer aligns to the header and icons which makes the component compact. |
| heading | `String` | - | The text to display in the notification\'s heading. |
| headingLevel | `String` | h2 | The HTML heading tag to use for the notification\'s heading. Can from h2 to h6. The font size is kept the same for all heading levels. Available heading levels: `h2`,`h3`,`h4`,`h5`,`h6` |
| hideIcon | `Boolean` | false | Option to hide the icon regardless its variant or if user provided an icon. |

In your markup or JSX, you can then use these to set the properties for the `pie-notification` component:

```html
<!-- Native HTML -->
<pie-notification></pie-notification>

<!-- JSX -->
<PieNotification></PieNotification>
```

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

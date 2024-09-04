<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-lottie-player">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-lottie-player.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-lottie-player)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Contributing](#contributing)

## pie-lottie-player

`pie-lottie-player` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-lottie-player` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-lottie-player

# yarn
$ yarn add @justeattakeaway/pie-lottie-player
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).

### Importing the component

#### JavaScript

```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieLottiePlayer } from '@justeattakeaway/pie-lottie-player';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-lottie-player';
```

#### React

```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using ​@lit/react
import { PieLottiePlayer } from '@justeattakeaway/pie-lottie-player/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.

## Peer Dependencies

> [!IMPORTANT]
> When using `pie-lottie-player`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

## Props

| Property         | Type      | Default | Description                                                                                                                  |
| ---------------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| animationSrc | `String` | - | Lottie animation JSON file URL or relative path. animationSrc and animationData are mutually exclusive. |
| animationData | `Object` | - | Object with Lottie animation data. animationSrc and animationData are mutually exclusive. |
| loopDisabled | `Boolean` | false | By the default animations loop, setting this prop as true will prevent such behaviour. |
| autoPlayDisabled | `Boolean` | false | By default animations start playing as soon as its data is available, setting this prop as true will prevent such behaviour. |
| speed | `Number` | 1 | Determines the animation reproduction speed. 1 is the regular speed, 2 is twice as fast. |
| direction | `String` | forward | Sets the animation reproduction direction. |

In your markup or JSX, you can then use these to set the properties for the `pie-lottie-player` component:

```html
<!-- Native HTML -->
<pie-lottie-player animationSrc="./animation-file.json"></pie-lottie-player>

<!-- JSX -->
<PieLottiePlayer animationSrc="./animation-file.json"></PieLottiePlayer>
```

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

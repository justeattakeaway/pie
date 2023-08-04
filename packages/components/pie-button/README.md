<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-button">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-button.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-button)
2. [Local Development](#local-development)
3. [Props](#props)
4. [Events](#events)
   - [HTML example](#html)
   - [Vue example (using Nuxt 3)](#vue-templates-using-nuxt-3)
   - [React example (using Next 13)](#react-templates-using-next-13)
5. [Testing](#testing)
   - [Browser Tests](#browser-tests)
   - [Visual Tests](#visual-tests)


## `pie-button`

`pie-button` is a Web Component built using the Lit library. It offers a simple and accessible button component for web applications.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Local development

Install the dependencies. Note that this, and the following commands below, should be run from the **root of the monorepo**:

```bash
yarn
```

To build the `pie-button` package, run the following command:

```bash
yarn build --filter=pie-button
```

If you'd like to develop using the component storybook, then you should build the component in `watch` mode, and run storybook in a separate terminal tab:

```bash
yarn watch --filter=pie-button

# in a separate terminal tab, run
yarn dev --filter=pie-storybook
```

### Importing the component

```js
// Default – for Native JS Applications, Vue, Angular, Svelte etc.
import { PieButton } from '@justeattakeaway/pie-button';

// React
// For React, you will need to import our React specific component build
// Which wraps the web component using the @lit-labs/react package
import { PieButton } from '@justeattakeaway/pie-button/dist/react';
```

## Props

| Property    | Type      | Default   | Description                                                                                                       |
|-------------|-----------|-----------|-------------------------------------------------------------------------------------------------------------------|
| size        | `String`  | `medium`  | Size of the button, one of `sizes` – `xsmall`, `small-expressive`, `small-productive`, `medium`, `large`          |
| type        | `String`  | `submit`  | Type of the button, one of `types` – `submit`, `button`, `reset`, `menu`                                          |
| variant     | `String`  | `primary` | Variant of the button, one of `variants` – `primary`, `secondary`, `outline`, `ghost`, `destructive`, `destructive-ghost`, `inverse`, `ghost-inverse` |
| disabled    | `Boolean` | `false`   | If `true`, disables the button.                                                                                   |
| isFullWidth | `Boolean` | `false`   | If `true`, sets the button width to 100% of its container.                                                       |
| isLoading   | `Boolean` | `false`   | If `true`, displays a loading indicator inside the button.                                                        |

In your markup or JSX, you can then use these to set the properties for the `pie-button` component:

```html
<!-- Native HTML -->
<pie-button size='medium' type='button' variant='primary'>Click me!</pie-button>

<!-- JSX -->
<PieButton size='medium' type='button' variant='primary'>Click me!</PieButton>
```

## Slots

| Slot          | Description                                                                                                                        |
|---------------|------------------------------------------------------------------------------------------------------------------------------------|
| Default slot  | The default slot is used to pass text into the button component.                                                                   |
| icon-leading  | Used to pass in a leading icon. We recommend using `pie-icons-webc` for defining this icon, but this can also accept an SVG icon.  |
| icon-trailing | Used to pass in a trailing icon. We recommend using `pie-icons-webc` for defining this icon, but this can also accept an SVG icon. |

### Using `pie-icons-webc` with `pie-button`icon slots

We recommend using `pie-icons-webc` when using the `icon-leading` and `icon-trailing` slots. Here is an example of how you would do this:

```html
<!--
  Note that pie-button and the icons that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-button>
    <icon-plus-circle slot="icon-leading"></icon-plus-circle>
    Search
    <icon-chevron-down slot="icon-trailing"></icon-chevron-down>
</pie-button>
```


## Events

This component does not use any custom event handlers. In order to add event listening to this component, you can treat it like a native HTML element in your application.

For example, to add a click handler in various templates:

### HTML

```html
<!-- Other attributes omitted for clarity -->
<pie-button onclick="e => console.log(e)">Click me!</pie-button>
```

### Vue templates (using Nuxt 3)

```html
<!-- Other attributes omitted for clarity -->
<pie-button @click="handleClick">Click me!</pie-button>
```

### React templates (using Next 13)

```html
<!-- Other attributes omitted for clarity -->
<PieButton onClick={handleClick}>increment</PieButton>

```

## Testing

### Browser tests

To run the browser tests, run the following command from the root of the monorepo:

```bash
yarn test:browsers --filter=pie-button
```

### Visual tests

To run the visual regression tests, run the following command from the root of the monorepo:

```bash
yarn test:visual --filter=pie-button
```

Note: To run these locally, you will need to ensure that any environment variables required are set up on your machine to mirror those on CI (such as Percy tokens). How you achieve this will differ between operating systems.

#### Setup via bash

```bash
export PERCY_TOKEN_PIE_BUTTON=abcde
```

#### Setup via package.json

Under scripts `test:visual` replace the environment variable with the below:

```bash
PERCY_TOKEN_PIE_BUTTON=abcde
```

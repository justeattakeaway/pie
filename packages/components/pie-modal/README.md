<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-modal">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-modal.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-modal)
2. [Local Development](#local-development)
3. [Importing the component](#importing-the-component)
4. [Props](#props)
5. [Testing](#testing)

# pie-modal

`pie-modal` is a Web Component built using the Lit library. It offers a simple and accessible modal component for web applications, which uses the native HTML `dialog` element under the hood.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Local development

Install the dependencies. Note that this, and the following commands below, should be run from the **root of the monorepo**:

```bash
yarn
```

To build the `pie-modal` package, run the following command:

```bash
yarn build --filter=pie-modal
```

If you'd like to develop using the component storybook, then you should build the component in `watch` mode, and run storybook in a separate terminal tab:

```bash
yarn watch --filter=pie-modal

# in a separate terminal tab, run
yarn dev --filter=pie-storybook
```

### Importing the component

```js
// default
import { PieModal } from '@justeattakeaway/pie-modal';

// react
import { PieModal } from '@justeattakeaway/pie-modal/dist/react';
```

## Props

| Property       | Type      | Default | Description                                           |
|----------------|-----------|---------|-------------------------------------------------------|
| isOpen         | `Boolean` | `false` | Controls if the modal element is open or closed       |
| heading*       | `String`  | -       | Sets the heading of the modal                         |
| headingLevel   | `String`  | `h2`    | Allows you to set the heading tag (from `h1` to `h6`) |


In your markup or JSX, you can then use these to set the properties for the `pie-modal` component:

```html
<!-- Native HTML -->
<pie-modal heading='My Awesome Heading' headingLevel='h3'>Click me!</pie-modal>

<!-- JSX -->
<PieModal heading='My Awesome Heading' headingLevel='h3'>Click me!</PieModal>
```

## Testing

### Browser tests

To run the browser tests, run the following command from the root of the monorepo:

```bash
yarn test:browsers --filter=pie-modal
```

### Visual tests

To run the visual regression tests, run the following command from the root of the monorepo:

```bash
yarn test:visual --filter=pie-modal
```

Note: To run these locally, you will need to ensure that any environment variables required are set up on your machine to mirror those on CI (such as Percy tokens). How you achieve this will differ between operating systems.

#### Setup via bash

```bash
export PERCY_TOKEN_PIE_MODAL=abcde
```

#### Setup via package.json

Under scripts `test:visual` replace the environment variable with the below:

```bash
PERCY_TOKEN_PIE_MODAL=abcde
```

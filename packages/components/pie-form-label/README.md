<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-form-label">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-form-label.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-form-label)
2. [Local Development](#local-development)
3. [Importing the component](#importing-the-component)
4. [Props](#props)
5. [Testing](#testing)

# pie-form-label

`pie-form-label` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Local development

Install the dependencies. Note that this, and the following commands below, should be run from the **root of the monorepo**:

```bash
yarn
```

To build the `pie-form-label` package, run the following command:

```bash
yarn build --filter=pie-form-label
```

If you'd like to develop using the component storybook, then you should build the component in `watch` mode, and run storybook in a separate terminal tab:

```bash
yarn watch --filter=pie-form-label

# in a separate terminal tab, run
yarn dev --filter=pie-storybook
```

### Importing the component

```js
// default
import { PieFormLabel } from '@justeattakeaway/pie-form-label';

// react
import { PieFormLabel } from '@justeattakeaway/pie-form-label/dist/react';
```

## Props

| Property | Type | Default | Description |
|---|---|---|---|
| for | `String` | `undefined` | Native html `for` attribute |
| optional | `String` | `undefined` | Sets an optional text to be placed next to the main label |
| trailing | `String` | `undefined` | Sets a trailing text at the end of the label component  |

In your markup or JSX, you can then use these to set the properties for the `pie-form-label` component:

```html
<!-- Native HTML -->
<pie-form-label>Label</pie-form-label>

<!-- JSX -->
<PieFormLabel>Label</PieFormLabel>
```

## Testing

### Browser tests

To run the browser tests, run the following command from the root of the monorepo:

```bash
yarn test:browsers --filter=pie-form-label
```

### Visual tests

To run the visual regression tests, run the following command from the root of the monorepo:

```bash
yarn test:visual --filter=pie-form-label
```

Note: To run these locally, you will need to ensure that any environment variables required are set up on your machine to mirror those on CI (such as Percy tokens). How you achieve this will differ between operating systems.

#### Setup via bash

```bash
export PERCY_TOKEN_PIE_FORM_LABEL=abcde
```

#### Setup via package.json

Under scripts `test:visual` replace the environment variable with the below:

```bash
PERCY_TOKEN_PIE_FORM_LABEL=abcde
```
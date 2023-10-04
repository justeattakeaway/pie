<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-divider">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-divider.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-divider)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Local Development](#local-development)
5. [Peer Dependencies](#peer-dependencies)
6. [Props](#props)
7. [Testing](#testing)


## pie-divider

`pie-divider` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-divider` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-divider

# yarn
$ yarn add @justeattakeaway/pie-divider
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

```js
// default
import { PieDivider } from '@justeattakeaway/pie-divider';

// react
import { PieDivider } from '@justeattakeaway/pie-divider/dist/react';
```


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-divider`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki for more information and how to include these in your application](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies).


## Local development

Install the dependencies. Note that this, and the following commands below, should be run from the **root of the monorepo**:

```bash
yarn
```

To build the `pie-divider` package, run the following command:

```bash
yarn build --filter=pie-divider
```

If you'd like to develop using the component storybook, then you should build the component in `watch` mode, and run storybook in a separate terminal tab:

```bash
yarn watch --filter=pie-divider

# in a separate terminal tab, run
yarn dev --filter=pie-storybook
```


## Props

| Property | Type | Default | Description |
|---|---|---|---|
| variant | `String` | `default` | Variant of the divider, one of variants – default, inverse |
| orientation | `String` | `horizontal` | Orientation of the divider, one of – horizontal, vertical |

In your markup or JSX, you can then use these to set the properties for the `pie-divider` component:

```html
<!-- Native HTML -->
<pie-divider />

<!-- JSX -->
<PieDivider />
```

## Testing

### Browser tests

To run the browser tests, run the following command from the root of the monorepo:

```bash
yarn test:browsers --filter=pie-divider
```

### Visual tests

To run the visual regression tests, run the following command from the root of the monorepo:

```bash
yarn test:visual --filter=pie-divider
```

Note: To run these locally, you will need to ensure that any environment variables required are set up on your machine to mirror those on CI (such as Percy tokens). How you achieve this will differ between operating systems.

#### Setup via bash

```bash
export PERCY_TOKEN_PIE_DIVIDER=abcde
```

#### Setup via package.json

Under scripts `test:visual` replace the environment variable with the below:

```bash
PERCY_TOKEN_PIE_DIVIDER=abcde
```

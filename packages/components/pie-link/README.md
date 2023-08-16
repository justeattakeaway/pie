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
2. [Local Development](#local-development)
3. [Importing the component](#importing-the-component)
4. [Props](#props)
5. [Testing](#testing)

# pie-link

`pie-link` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Local development

Install the dependencies. Note that this, and the following commands below, should be run from the **root of the monorepo**:

```bash
yarn
```

To build the `pie-link` package, run the following command:

```bash
yarn build --filter=pie-link
```

If you'd like to develop using the component storybook, then you should build the component in `watch` mode, and run storybook in a separate terminal tab:

```bash
yarn watch --filter=pie-link

# in a separate terminal tab, run
yarn dev --filter=pie-storybook
```

### Importing the component

```js
// default
import { PieLink } from '@justeattakeaway/pie-link';

// react
import { PieLink } from '@justeattakeaway/pie-link/dist/react';
```

## Props

| Property     | Type        | Default       | Description                                                                 |
| ------------ | ----------- | ------------- | --------------------------------------------------------------------------- |
| variant      | `String`  | `default`   | Variant of the link, one of variants – default, high-visibility or inverse |
| size         | `String`  | `medium`    | Size of the link, one of `sizes` – `medium`, `small`                 |
| href         | `String`  | `undefined` | Native html `href` attribute                                              |
| rel          | `String`  | `undefined` | Native html `rel` attribute                                               |
| target       | `String`  | `undefined` | Native html `target` attribute                                            |
| isBold       | `Boolean` | `false`     | If `true`, sets the link text bold                                        |
| isStandalone | `Boolean` | `false`     | If `true`, sets the link as a block element                               |

In your markup or JSX, you can then use these to set the properties for the `pie-link` component:

```html
<!-- Native HTML -->
<pie-link></pie-link>

<!-- JSX -->
<PieLink></PieLink>
```

## Slots

| Slot          | Description                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Default slot  | The default slot is used to pass text into the link component.                                                                       |
| icon-leading  | Used to pass in a leading icon. We recommend using `pie-icons-webc` for defining this icon, but this can also accept an SVG icon.  |
| icon-trailing | Used to pass in a trailing icon. We recommend using `pie-icons-webc` for defining this icon, but this can also accept an SVG icon. |

You should only provide either a leading or a trailing icon, but not both, in a single instance.

### Using `pie-icons-webc` with `pie-link` icon slots

We recommend using `pie-icons-webc` when using the `icon-leading` and `icon-trailing` slots. Here is an example of how you would do this:

```html
<!--
  Note that pie-link and the icons that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-link>
    <icon-plus-circle slot="icon-leading"></icon-plus-circle>
    Search
</pie-link>
```

## Testing

### Browser tests

To run the browser tests, run the following command from the root of the monorepo:

```bash
yarn test:browsers --filter=pie-link
```

### Visual tests

To run the visual regression tests, run the following command from the root of the monorepo:

```bash
yarn test:visual --filter=pie-link
```

Note: To run these locally, you will need to ensure that any environment variables required are set up on your machine to mirror those on CI (such as Percy tokens). How you achieve this will differ between operating systems.

#### Setup via bash

```bash
export PERCY_TOKEN_PIE_LINK=abcde
```

#### Setup via package.json

Under scripts `test:visual` replace the environment variable with the below:

```bash
PERCY_TOKEN_PIE_LINK=abcde
```

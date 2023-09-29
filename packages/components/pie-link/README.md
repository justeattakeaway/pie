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

| Property      | Type        | Default       | Description                                                                                          |
| ------------- | ----------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| tag           | `String`  | `a`         | The rendered HTML element of the link, one of `tags` – `a`, `button`                        |
| variant       | `String`  | `default`   | Variant of the link, one of `variants` – `default`, `high-visibility`, `inverse`         |
| size          | `String`  | `medium`    | Size of the link, one of `sizes` – `medium`, `small`                                          |
| underline          | `String`  | `default`    | The underline behavior of the link, one of `underlineTypes` – `default`, `reversed`. The `reverse` type can only be used if `isStandalone` is set to `true`                                          |
| href          | `String`  | `undefined` | Native html `href` attribute                                                                       |
| rel           | `String`  | `undefined` | Native html `rel` attribute                                                                        |
| target        | `String`  | `undefined` | Native html `target` attribute                                                                     |
| type          | `String`  | `submit`    | Native html `type` attribute if the tag is set to `button`                                       |
| isBold        | `Boolean` | `false`     | If `true`, sets the link text bold                                                                 |
| isStandalone  | `Boolean` | `false`     | If `true`, sets the link as a block element                                                        |
| hasVisited    | `Boolean` | `false`     | If `true`, the link will apply the styles for the visited state                                    |
| iconPlacement | `String`  | `leading`   | Icon placements of the icon slot, if provided, one of `iconPlacements` - `leading`, `trailing`. Can only be used if `isStandalone` is `true` |
| aria | `object` | `undefined` | The ARIA labels used for the link. |

In your markup or JSX, you can then use these to set the properties for the `pie-link` component:

```html
<!-- Native HTML -->
<pie-link></pie-link>

<!-- JSX -->
<PieLink></PieLink>
```

## Slots

| Slot         | Description                                                                                                                                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default slot | The default slot is used to pass text into the link component.                                                                                                                                                             |
| icon         | Used to pass in an icon to the link component. The icon placement can be controlled via the `iconPlacement` prop and we recommend using `pie-icons-webc` for defining this icon, but this can also accept an SVG icon. |

### Using `pie-icons-webc` with the `pie-link` icon slot

We recommend using `pie-icons-webc` when using the `icon` slot. Here is an example of how you would do this:

```html
<!--
  Note that pie-link and the icons that you want to use will need to be imported as components into your application.
  See the `pie-icons-webc` README for more info on importing these icons.
-->
<pie-link>
    <icon-plus-circle slot="icon"></icon-plus-circle>
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

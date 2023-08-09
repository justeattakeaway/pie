<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-toggle-switch">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-toggle-switch.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-toggle-switch)
2. [Local Development](#local-development)
3. [Importing the component](#importing-the-component)
4. [Props](#props)
5. [Testing](#testing)

# pie-toggle-switch

`pie-toggle-switch` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Local development

Install the dependencies. Note that this, and the following commands below, should be run from the **root of the monorepo**:

```bash
yarn
```

To build the `pie-toggle-switch` package, run the following command:

```bash
yarn build --filter=pie-toggle-switch
```

If you'd like to develop using the component storybook, then you should build the component in `watch` mode, and run storybook in a separate terminal tab:

```bash
yarn watch --filter=pie-toggle-switch

# in a separate terminal tab, run
yarn dev --filter=pie-storybook
```

### Importing the component

```js
// default
import { PieToggleSwitch } from '@justeattakeaway/pie-toggle-switch';

// react
import { PieToggleSwitch } from '@justeattakeaway/pie-toggle-switch/dist/react';
```

## Props

| Property | Type | Default | Description |
|---|---|---|---|
| isChecked  | `Boolean` | false | Indicates whether the switch is on or off |
| isDisabled | `Boolean` | false | Indicates whether the switch is disabled or not |
| label      | `Object`  | `undefined` | Provides a label for the component. You can set the label position using options: `leading` | `trailing` e.g object: `label: { text: 'Label', position: 'leading' }` |

In your markup or JSX, you can then use these to set the properties for the `pie-toggle-switch` component:

```html
<!-- Native HTML -->
<pie-toggle-switch></pie-toggle-switch>

<!-- JSX -->
<PieToggleSwitch></PieToggleSwitch>
```

## Testing

### Browser tests

To run the browser tests, run the following command from the root of the monorepo:

```bash
yarn test:browsers --filter=pie-toggle-switch
```

### Visual tests

To run the visual regression tests, run the following command from the root of the monorepo:

```bash
yarn test:visual --filter=pie-toggle-switch
```

Note: To run these locally, you will need to ensure that any environment variables required are set up on your machine to mirror those on CI (such as Percy tokens). How you achieve this will differ between operating systems.

#### Setup via bash

```bash
export PERCY_TOKEN_PIE_TOGGLE_SWITCH=abcde
```

#### Setup via package.json

Under scripts `test:visual` replace the environment variable with the below:

```bash
PERCY_TOKEN_PIE_TOGGLE_SWITCH=abcde
```

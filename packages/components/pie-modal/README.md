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

| Property                      | Type | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-------------------------------|---|---|---|
| heading                       | `String` | n/a (Required) | The heading text of the modal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| headingLevel                  | `String` | `h2` | The HTML tag to use for the modal's heading (can be `h1`-`h6`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| isDismissible                 | `Boolean` | `false` | If true, the modal includes a close button and can be dismissed by clicking on the backdrop or pressing the Esc key                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| hasBackButton                 | `Boolean` | `false` | If true, the modal includes a back button which closes the modal when clicked                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| isFullWidthBelowMid           | `Boolean` | `false` | If true and the page is narrower than the mid breakpoint, a **medium-sized** modal will take up the full width of the screen.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| isOpen                        | `Boolean` | `false` | Controls if the modal element is open or closed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| isLoading                     | `Boolean` | `false` | When true, displays a loading spinner in the modal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| isFooterPinned                | `Boolean` | `true` | When false, the modal footer will scroll with the content inside the modal body.                                                                                   |
| size                          | `String` | `medium` | Determines the maximum width of the modal. Large modals will expand to fill the entire page width at narrow viewports. Can be `small`, `medium` or `large`.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| position                      | `String` | `center` | The position of the modal; this controls where it will appear on the page. Can be `top` or `center`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| returnFocusAfterCloseSelector | `String` | `undefined` | If provided, focus will be sent to the first element that matches this selector when the modal is closed. If not provided, the `dialog` element will return focus to the element that opened the modal.                                                                                                                                                                                                                                                                                                                                                                               |
| leadingAction                 | `Object` | `undefined` | An object representing the leading action of the modal. It has the following properties:<br>- text (required): The text to display on the leading action button.<br>- variant: The variant of the leading action button. Please see [pie-button](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-button/README.md#props) for options. Defaults to primary if not provided.<br>- ariaLabel: The ARIA label for the leading action button. Example: `leadingAction = { text: "Example Text", variant: "secondary", ariaLabel: "Example Aria Label" }`          |
| supportingAction              | `Object` | `undefined` | An object representing the supporting action of the modal. It has the following properties:<br>- text (required): The text to display on the supporting action button.<br>- variant: The variant of the supporting action button. Please see [pie-button](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-button/README.md#props) for options. Defaults to ghost if not provided.<br>- ariaLabel: The ARIA label for the supporting action button. Example: `supportingAction = { text: "Example Text", variant: "ghost", ariaLabel: "Example Aria Label" }` |
| aria                          | `Object` | `undefined` | An object representing the aria labels for the `close` & `back` buttons within the modal as well as the `isLoading` state labels (`aria-label` & `aria-busy`).                                                                                                                                                                                                                                                                                                                                                                                                                        |

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

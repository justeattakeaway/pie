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
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Local Development](#local-development)
6. [Props](#props)
7. [Testing](#testing)
8. [Legacy browser support](#legacy-browser-support)


## pie-modal

`pie-modal` is a Web Component built using the Lit library. It offers a simple and accessible modal component for web applications, which uses the native HTML `dialog` element under the hood.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-modal` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-modal

# yarn
$ yarn add @justeattakeaway/pie-modal
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

```js
// default
import { PieModal } from '@justeattakeaway/pie-modal';

// react
import { PieModal } from '@justeattakeaway/pie-modal/dist/react';
```


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-modal`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.


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


## Props

| Property                      | Type      | Default        | Description |
|-------------------------------|-----------|----------------|-------------|
| aria                          | `Object`  | `undefined`    | An object representing the aria labels for the `close` & `back` buttons within the modal as well as the `isLoading` state labels (`aria-label` & `aria-busy`). |
| hasBackButton                 | `Boolean` | `false`        | If true, the modal includes a back button which closes the modal when clicked. |
| hasStackedActions             | `Boolean` | `false`        | If true, the action buttons will be stacked (full width) at narrow breakpoints. |
| heading                       | `String`  | n/a (Required) | The heading text of the modal. |
| headingLevel                  | `String`  | `h2`           | The HTML tag to use for the modal's heading (can be `h1`-`h6`). |
| isDismissible                 | `Boolean` | `false`        | If true, the modal includes a close button and can be dismissed by clicking on the backdrop or pressing the `Esc` key. |
| isFooterPinned                | `Boolean` | `true` | When false, the modal footer will scroll with the content inside the modal body. |
| isFullWidthBelowMid           | `Boolean` | `false`        | If true and the page is narrower than the mid breakpoint, a **medium-sized** modal will take up the full width of the screen. |
| isLoading                     | `Boolean` | `false`        | When true, displays a loading spinner in the modal |
| isOpen                        | `Boolean` | `false`        | Controls if the modal element is open or closed |
| leadingAction                 | `Object`  | `undefined`    | An object representing the leading action of the modal. It has the following properties:<br>- text (required): The text to display on the leading action button.<br>- variant: The variant of the leading action button. Please see [pie-button](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-button/README.md#props) for options. Defaults to primary if not provided.<br>- ariaLabel: The ARIA label for the leading action button. Example: `leadingAction = { text: "Example Text", variant: "secondary", ariaLabel: "Example Aria Label" }` |
| position                      | `String`  | `center`       | The position of the modal; this controls where it will appear on the page. Can be `top` or `center`. |
| returnFocusAfterCloseSelector | `String`  | `undefined`    | If provided, focus will be sent to the first element that matches this selector when the modal is closed. If not provided, the `dialog` element will return focus to the element that opened the modal. |
| size                          | `String`  | `medium`       | Determines the maximum width of the modal. Large modals will expand to fill the entire page width at narrow viewports. Can be `small`, `medium` or `large`. |
| supportingAction              | `Object`  | `undefined`    | An object representing the supporting action of the modal. It has the following properties:<br>- text (required): The text to display on the supporting action button.<br>- variant: The variant of the supporting action button. Please see [pie-button](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-button/README.md#props) for options. Defaults to ghost if not provided.<br>- ariaLabel: The ARIA label for the supporting action button. Example: `supportingAction = { text: "Example Text", variant: "ghost", ariaLabel: "Example Aria Label" }` |

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

## Legacy browser support

`pie-modal` uses the Dialog element which might not be supported by legacy browsers.

To support them, `pie-modal` uses the [dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill) package. It works automatically and doesn't need any setup.

The polyfill comes with a few limitations, as noted on its [documentation page](https://github.com/GoogleChrome/dialog-polyfill#limitations):
- Dialogs should not be contained by parents that create a stacking context
- The browser's chrome may not always be accessible via the tab key
- Changes to the CSS top/bottom values while open aren't retained

For more details, check the package documentation mentioned above.

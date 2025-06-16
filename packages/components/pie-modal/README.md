# @justeattakeaway/pie-modal

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-modal) | [Design Documentation](https://pie.design/components/link) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-modal)
<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-modal">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-modal.svg">
  </a>
</p>

`@justeattakeaway/pie-modal` is a Web Component built using the Lit library. It offers a simple and accessible modal component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Legacy browser support](#legacy-browser-support)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties
| Prop                             | Options                                           | Description                                                                                                                                                                                                                         | Default     |
|----------------------------------|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `aria`                           | —                                                 | An object representing the aria labels for the `close` and `back` buttons within the modal as well as the `isLoading` state labels (`aria-label` & `aria-busy`).                                                                  | —           |
| `hasBackButton`                  | `true`, `false`                                   | If true, the modal includes a back button which closes the modal when clicked.                                                                                                               | `false`     |
| `hasStackedActions`              | `true`, `false`                                   | If true, the action buttons will be stacked (full width) at narrow breakpoints.                                                                                                              | `false`     |
| `heading`                        | —                                                 | The heading text of the modal.                                                                                                                                                                                                      | —           |
| `headingLevel`                   | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`                 | The HTML tag to use for the modal's heading.                                                                                                                                                                                        | `h2`        |
| `isDismissible`                  | `true`, `false`                                   | If true, the modal includes a close button and can be dismissed by clicking on the backdrop or pressing the `Esc` key.                                                                                                              | `false`     |
| `isFooterPinned`                 | `true`, `false`                                   | When false, the modal footer will scroll with the content inside the modal body.                                                                                                                                                    | `true`      |
| `isFullWidthBelowMid`           | `true`, `false`                                   | If true and the page is narrower than the mid breakpoint, a **medium-sized** modal will take up the full width of the screen.                                                                                                      | `false`     |
| `isLoading`                      | `true`, `false`                                   | When true, displays a loading spinner in the modal.                                                                                                                                                                                 | `false`     |
| `isOpen`                         | `true`, `false`                                   | Controls if the modal element is open or closed.                                                                                                                                                                                    | `false`     |
| `leadingAction.text`            | —                                                 | The text to display inside the leading action button. The button won't render without this.                                                                                                                                         | —           |
| `leadingAction.variant`         | See pie-button's variants                         | The variant of the leading action button.                                                                                                                                                                                           | `"primary"` |
| `supportingAction.text`         | —                                                 | The text to display inside the supporting action button. The button won't render without this.                                                                                                                                      | —           |
| `supportingAction.variant`      | See pie-button's variants                         | The variant of the supporting action button.                                                                                                                                                                                        | `"ghost"`   |
| `position`                       | `"center"`, `"top"`                               | The position of the modal; this controls where it will appear on the page.                                                                                                                                                          | `"center"`  |
| `returnFocusAfterCloseSelector` | —                                                 | If provided, focus will be sent to the first element that matches this selector when the modal is closed. If not provided, the `dialog` element will return focus to the element that opened the modal.                            | —           |
| `size`                           | `"small"`, `"medium"`, `"large"`                  | Determines the maximum width of the modal. Large modals will expand to fill the entire page at narrow viewports.                                                                                                                    | `"medium"`  |


### Slots
| Slot      | Description                                                        |
|-----------|--------------------------------------------------------------------|
| `default` | The default slot is used to pass content into the modal component. |
| `footer`  | Used to pass optional content to the modal component footer area.  |

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events
| Event                                 | Type          | Description                                               |
|---------------------------------------|---------------|-----------------------------------------------------------|
| `pie-modal-open`                      | `CustomEvent` | Triggered when the modal is opened.                       |
| `pie-modal-close`                     | `CustomEvent` | Triggered when the modal is closed.                       |
| `pie-modal-back`                      | `CustomEvent` | Triggered when the modal back button is clicked.          |
| `pie-modal-leading-action-click`     | `CustomEvent` | Triggered when the modal leading action is clicked.       |
| `pie-modal-supporting-action-click`  | `CustomEvent` | Triggered when the modal supporting action is clicked.    |


## Legacy browser support

`pie-modal` uses the Dialog element which might not be supported by legacy browsers.

To support them, `pie-modal` uses the [dialog-polyfill](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-modal/README.md#:~:text=modal%20uses%20the-,dialog%2Dpolyfill,-package.%20It%20works) package. It works automatically and doesn't need any setup.

The polyfill comes with a few limitations, as noted on its [documentation page](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-modal/README.md#:~:text=noted%20on%20its-,documentation%20page,-%3A):

Dialogs should not be contained by parents that create a stacking context
 - The browser's chrome may not always be accessible via the tab key
 - Changes to the CSS top/bottom values while open aren't retained
 - For more details, check the package documentation mentioned above.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/modal.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-modal heading='My Awesome Heading' headingLevel='h3'>Click me!</pie-modal>
<script type="module" src="/main.js"></script>
```

With a custom footer slot:

```html
<pie-modal heading='My Awesome Heading' headingLevel='h3'>
  <p>Click me!</p>
  <div slot="footer">
    <p>Custom footer content!</p>
  </div>
</pie-modal>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/modal.js';

<pie-modal heading="My Awesome Heading" headingLevel="h3">Click me!</pie-modal>
```

**For React Applications:**

```jsx
import { PieModal } from '@justeattakeaway/pie-webc/react/modal.js';

<PieModal heading='My Awesome Heading' headingLevel='h3'>Click me!</PieModal>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

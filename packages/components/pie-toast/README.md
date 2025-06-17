# @justeattakeaway/pie-toast
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-toast) | [Design Documentation](https://pie.design/components/toast) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-toast)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-toast">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-toast.svg">
  </a>
</p>

`@justeattakeaway/pie-toast` is a Web Component built using the Lit library. It offers a simple and accessible toast component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties

| Prop            | Options                                                                   | Description                                                                                                                                                              | Default     |
|------------------|---------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `isOpen`         | `true`, `false`                                                           | When true, the toast is set to be open and visible.                                                                                                                      | `false`     |
| `variant`        | `"neutral"`, `"info"`, `"warning"`, `"success"`, `"error"`               | Sets the variant of the toast.                                                                                                                                           | `"neutral"` |
| `isStrong`       | `true`, `false`                                                           | When true, the toast is displayed with a strong visual style.                                                                                                            | `false`     |
| `isDismissible`  | `true`, `false`                                                           | When true, allows dismissing the toast by clicking on the close button.                                                                                                  | `false`     |
| `message`        | `string`                                                                  | The message content of the toast.                                                                                                                                        | `""`        |
| `isMultiline`    | `true`, `false`                                                           | Allows the message content to be displayed as multiline, limited to three rows.                                                                                          | `false`     |
| `leadingAction`  | `{ text: string, ariaLabel?: string }`                                    | The leading action for the toast.                                                                                                                                        | `undefined` |
| `duration`       | `number`, `null`                                                          | Sets the duration of the toast in milliseconds before it auto-dismisses. `null` disables auto-dismiss. Defaults to 5 seconds if not specified.                          | `5000`      |
| `position`       | `"default"`, `"bottom-left"`, `"bottom-right"`, `"bottom-center"`        | Sets the position of the toast. When set to `default`, the toast will be positioned at bottom-left for RTL languages and bottom-right for LTR languages.                | `"default"` |

### Slots
This component does not have any slots. All content is controlled through properties.

### CSS Variables

| Name                     | Description                                                   | Default Value                                |
|--------------------------|---------------------------------------------------------------|-----------------------------------------|
| `--toast-z-index`        | Controls the z-index of the toast                             | `var(--dt-z-index-toast)`               |
| `--toast-offset`         | Controls the spacing between the toast and the viewport edge  | `var(--dt-spacing-d)` (mobile), `var(--dt-spacing-e)` (desktop) |

### Events

| Event                             | Type          | Description                                                                                      |
|-----------------------------------|---------------|--------------------------------------------------------------------------------------------------|
| `pie-toast-close`                | `CustomEvent` | Triggered when the user interacts with the close icon or when the toast auto dismiss.           |
| `pie-toast-open`                 | `CustomEvent` | Triggered when the toast is opened.                                                              |
| `pie-toast-leading-action-click`| `CustomEvent` | Triggered when the user interacts with the leading action.                                       |

## Usage Examples

> ⚠️ By default, the toast will auto-dismiss in five seconds. To disable the auto-dismiss functionality, you must set the `duration` property to `null`.

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/toast.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-toast message="Message"></pie-toast>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/toast.js';

<pie-toast message="Message"></pie-toast>
// or with duration set to null to disable auto-dismiss
<pie-toast message="Message" duration={null}></pie-toast>
```

**For React Applications:**

```jsx
import { PieToast } from '@justeattakeaway/pie-webc/react/toast.js';

<PieToast message="Message"></PieToast>
// or with duration set to null to disable auto-dismiss
<PieToast message="Message" duration={null}></PieToast>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

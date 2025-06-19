# @justeattakeaway/pie-toast-provider
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-toast-provider) | [Design Documentation](https://pie.design/components/toast) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-toast-provider)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-toast-provider">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-toast-provider.svg">
  </a>
</p>

`@justeattakeaway/pie-toast-provider` is a Web Component built using the Lit library. It offers a simple and accessible toast provider component for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Usage Examples](#usage-examples)
  - [Creating Toasts with `toaster`](#creating-toasts-with-toaster)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties

| Prop     | Options | Description                                                                                       | Default |
|----------|---------|---------------------------------------------------------------------------------------------------|---------|
| options  | `{}`    | Default options for all toasts; accepts all toast [props](https://webc.pie.design/?path=/story/components-toast).        | `{}`    |

### Slots
This component does not have any slots. All content is controlled through properties.

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events

| Event                              | Description                                      |
|-----------------------------------|--------------------------------------------------|
| `pie-toast-provider-queue-update` | Triggered when a toast is added or removed from the queue. |

## Usage Examples

The usage guideline is:

- Place `pie-toast-provider` at the root level of your application or page.
- Use the `toaster` utility from any where in your app to dynamically create toasts.

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/toast-provider.js'
```

```html
<!-- pass js file into <script> tag -->
<pie-toast-provider></pie-toast-provider>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/toast-provider.js';

<pie-toast-provider></pie-toast-provider>
```

**For React Applications:**

```jsx
import { PieToastProvider } from '@justeattakeaway/pie-webc/react/toast-provider.js';

<PieToastProvider></PieToastProvider>
```

### Creating Toasts with `toaster`
The `toaster` utility dynamically creates toasts. It can be imported and called from any file or component in your application.

```js
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';

toaster.create({
  message: 'This is a success toast!',
  variant: 'success',
  isDismissible: true,
});

```

To clear all active and queued toasts:

```js
toaster.clearToasts();
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

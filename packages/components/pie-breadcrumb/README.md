# @justeattakeaway/pie-breadcrumb

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-breadcrumb) | [Design Documentation](https://pie.design/components/breadcrumb) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-breadcrumb)
<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-breadcrumb">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-breadcrumb.svg">
  </a>
</p>

`@justeattakeaway/pie-breadcrumb` is a Web Component built using the Lit library. It offers a simple and accessible breadcrumb navigation component for web applications. The component exports a sub-component called `pie-breadcrumb-item` which is used to create individual items within the breadcrumb.

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

#### `pie-breadcrumb` Properties

| Prop | Options | Description | Default |
|------|---------|-------------|--------|
| `variant` | `"default"`, `"scrim"` | Sets the variant of the breadcrumb. | `"default"` |
| `isCompact` | `true`, `false` | If true, renders a compact variation of the breadcrumb. | `false` |
| `hideCurrentPage` | `true`, `false` | If true, hides the current page of the breadcrumb (last item). | `false` |

#### `pie-breadcrumb-item` Properties

| Prop | Options | Description | Default |
|------|---------|-------------|--------|
| `href` | `string` | The URL that the breadcrumb item links to. | `undefined` |
| `target` | `string` | Where to display the linked URL such as `"_self"`, `"_blank"`, `"_parent"`, or `"_top"`. | `undefined` |

### Slots

| Component | Slot | Description |
|-----------|------|-------------|
| `pie-breadcrumb` | `default` | The default slot is used to pass `pie-breadcrumb-item` elements into the breadcrumb component. |
| `pie-breadcrumb-item` | `default` | The default slot is used to pass text into the breadcrumb item. |

### CSS Variables

This component does not expose any CSS variables for style overrides.

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/breadcrumb.js'
import '@justeattakeaway/pie-webc/components/breadcrumb-item.js'
```

```html
<pie-breadcrumb>
  <pie-breadcrumb-item href="/">Home</pie-breadcrumb-item>
  <pie-breadcrumb-item href="/category">Category</pie-breadcrumb-item>
  <pie-breadcrumb-item>Current Page</pie-breadcrumb-item>
</pie-breadcrumb>

<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/breadcrumb.js';
import '@justeattakeaway/pie-webc/components/breadcrumb-item.js';

<pie-breadcrumb>
  <pie-breadcrumb-item href="/">Home</pie-breadcrumb-item>
  <pie-breadcrumb-item href="/category">Category</pie-breadcrumb-item>
  <pie-breadcrumb-item>Current Page</pie-breadcrumb-item>
</pie-breadcrumb>
```

**For React Applications:**

```jsx
import { PieBreadcrumb } from '@justeattakeaway/pie-webc/react/breadcrumb.js';
import { PieBreadcrumbItem } from '@justeattakeaway/pie-webc/react/breadcrumb-item.js';

<PieBreadcrumb>
  <PieBreadcrumbItem href="/">Home</PieBreadcrumbItem>
  <PieBreadcrumbItem href="/category">Category</PieBreadcrumbItem>
  <PieBreadcrumbItem>Current Page</PieBreadcrumbItem>
</PieBreadcrumb>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
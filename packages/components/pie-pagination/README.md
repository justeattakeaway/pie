# @justeattakeaway/pie-pagination
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-pagination) | [Design Documentation](https://pie.design/components/pagination) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-pagination)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-pagination">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-pagination.svg">
  </a>
</p>

`@justeattakeaway/pie-pagination` is a Web Component built using the Lit library. It offers a simple and accessible `pagination` component for web applications.

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
| Prop          | Options | Description                                                                                                                                                                                                    | Default |
|---------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `currentPage` | `number`| The currently active page (1-based). This component is fully controlled, so it never updates this value itself; the consumer is responsible for updating it in response to the `pie-pagination-page-change` event. | `1`     |
| `totalPages`  | `number`| The total number of pages to render.                                                                                                                                                                            | `1`     |
| `disabled`    | `boolean`| When true, all pagination controls are disabled.                                                                                                                                                               | `false` |
| `aria`        | `object`| The ARIA attributes for the pagination landmark. Offers a `label` used for the `aria-label` of the wrapping `<nav>` element.                                                                                      | `undefined` |

### Slots
This component does not use any slots.

### CSS Variables
This component does not expose any CSS variables.

### Events
| Event                         | Type          | Description                                                                                                                                                            |
|-------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `pie-pagination-page-change`  | `CustomEvent` | Fired when the user interacts with any pagination control. The event detail contains `{ currentPage }`, the page the user wants to navigate to. |
| `pie-pagination-prev`         | `CustomEvent` | Fired when the user clicks the "previous" control. The event detail contains `{ currentPage }`. This event fires **in addition to** `pie-pagination-page-change`. |
| `pie-pagination-next`         | `CustomEvent` | Fired when the user clicks the "next" control. The event detail contains `{ currentPage }`. This event fires **in addition to** `pie-pagination-page-change`. |

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/pagination.js'
```

```html
<!-- pass js file into <script> tag -->

<script type="module" src="/main.js"></script>
```

```html
<pie-pagination currentPage="2" totalPages="10"></pie-pagination>

<script>
  const pagination = document.querySelector('pie-pagination');

  pagination.addEventListener('pie-pagination-page-change', (event) => {
    // The component is controlled — update the prop yourself
    pagination.currentPage = event.detail.currentPage;
  });
</script>
```

The `pie-pagination-prev` and `pie-pagination-next` events let you hook into the previous/next controls specifically. They fire in addition to `pie-pagination-page-change`, so you can use either one:

```html
<pie-pagination currentPage="2" totalPages="10"></pie-pagination>

<script>
  const pagination = document.querySelector('pie-pagination');

  pagination.addEventListener('pie-pagination-prev', (event) => {
    console.log('previous clicked, requested page:', event.detail.currentPage);
    pagination.currentPage = event.detail.currentPage;
  });

  pagination.addEventListener('pie-pagination-next', (event) => {
    console.log('next clicked, requested page:', event.detail.currentPage);
    pagination.currentPage = event.detail.currentPage;
  });
</script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/pagination.js'
```

**For React Applications:**

```jsx
import { PiePagination } from '@justeattakeaway/pie-webc/react/pagination.js';

<PiePagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPiePaginationPageChange={(event) => setCurrentPage(event.detail.currentPage)}
/>
```

The `pie-pagination-prev` and `pie-pagination-next` events are exposed as `onPiePaginationPrev` and `onPiePaginationNext`:

```jsx
<PiePagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPiePaginationPrev={(event) => setCurrentPage(event.detail.currentPage)}
  onPiePaginationNext={(event) => setCurrentPage(event.detail.currentPage)}
/>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

---
eleventyNavigation:
    key: Code
    parent: 'Spinner'
    order: 3

eleventyComputed:
    code: "{% include './code.json'
    %}"
---
## Installation

To install any of our web components in your application, we would suggest following the [getting started](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) guide to set up your project.

Ideally, you should install the component using the @justeattakeaway/pie-webc package, which includes all of the components. Or you can install the individual component package.

---
## Documentation

### Properties

{% componentDetailsTable {
  tableData: code
} %}

### Slots 

This component does not have any slots. All content is controlled through properties.

### CSS Variables

This component does not expose any CSS variables for style overrides.

### Events

This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

---
## Usage examples

### For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/spinner.js';
```

```html
<pie-spinner size="medium" variant="brand" aria="{ label: 'Loading' }"></pie-spinner>

<script type="module" src="/main.js"></script>
```

### For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/spinner.js';
<pie-spinner size="medium" variant="brand" aria="{ label: 'Loading' }"></pie-spinner>
```

### For React Applications:
{% raw %}
```jsx
import { PieSpinner } from '@justeattakeaway/pie-webc/react/spinner.js';

<PieSpinner size="medium" variant="brand" aria={{ label: 'Loading' }} />
```
{% endraw %}

---
## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on #help-designsystem. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

---
## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on local development and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).








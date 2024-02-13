
# pie-icons-webc

Shared PIE Icon Components built using [Lit Web Components](https://lit.dev/docs/).

This package provides the PIE iconset as importable Web Components, to ensure icons are used to PIE guidelines for sizing.

The base [pie-icons](https://www.npmjs.com/package/@justeattakeaway/pie-icons) package is used to provide the SVGs that are compiled into Lit web components that can be imported into any application.

---

[![npm version](https://img.shields.io/npm/v/@justeattakeaway/pie-icons-webc.svg)](https://img.shields.io/npm/v/@justeattakeaway/pie-icons-webc.svg)

---
## Usage

### Installation

Add the module to your project

```bash
yarn add @justeattakeaway/pie-icons-webc
```


### Usage

#### Vanilla Javascript

1. Import a specific icon from its entry point (recommended)
```js
// Importing a specific icon directly from its entry point (recommended for tree-shaking benefits)
import { IconCalendarFilledLarge } from '@justeattakeaway/pie-icons-webc/IconCalendarFilledLarge';

function renderIcon() {
    // Using the imported icon
    const iconElement = new IconCalendarFilledLarge();
    document.body.appendChild(iconElement);
}
```

2. Import a specific icon from its entry point without a reference (recommended)
```js
// Importing a specific icon without keeping a reference from its entry point
import '@justeattakeaway/pie-icons-webc/IconCalendarFilledLarge';

// Rest of code does not directly reference IconCalendarFilledLarge however the web component has been registered in the browser

// In some HTML:
// <div>
//   <icon-calendar-filled-large></icon-calendar-filled-large>
// <div>
```

3. Importing all icons at once (not recommended)
```js
// Importing all icons from the library (not recommended)
import * as icons from '@justeattakeaway/pie-icons-webc';

function renderIcon() {
    // Using a specific icon
    const iconElement = new icons.IconCalendarFilledLarge();
    document.body.appendChild(iconElement);
}
```


> [!WARNING]
> While it is also possible to import individual components from the overall bundle, we don't recommend this because
> it is likely that the import will be tree-shaken unless you are referencing the imported object in your code.

```js
// Not recommended -  Webpack v4+ or Rollup should treeshake but be careful
import { IconAppRestaurant } from '@justeattakeaway/pie-icons-webc';
// Not recommended
import { IconAppRestaurant } from '@justeattakeaway/pie-icons-webc';
```

#### Lit Components
```js
import '@justeattakeaway/pie-icons-webc/IconAppRestaurant';

export class MyAmazingComponent extends LitElement {
  render () {
    return html`
      <h2>
        This is a heading
        <icon-app-restaurant size="xl" />
      </h2>`;
  }
}
```

#### React

To import from the package root:

```tsx
// Please note we include /dist/ in the path only for React exports. This is due to how we have setup React exports to work with frameworks such as NextJS.
import { IconAlertTriangleLarge, IconCalendar } from "@justeattakeaway/pie-icons-webc/dist/react";

// If your app can support the exports set in the package.json, you can also import like so (exclude 'dist'):
import { IconAlertTriangleLarge, IconCalendar } from "@justeattakeaway/pie-icons-webc/react";

export default function App() {
  return (
    <div className="App">
      <IconCalendar />
      <IconAlertTriangleLarge fill={PIE_ALIAS_COLOR_TOKEN} />
    </div>
  );
}
```
To import a single icon:

```tsx
// Please note we include /dist/ in the path only for React exports. This is due to how we have setup React exports to work with frameworks such as NextJS
import { IconCalendar } from "@justeattakeaway/pie-icons-webc/dist/react/IconCalendar";

// If your app can support the exports set in the package.json, you can also import like so (exclude 'dist'):
import { IconCalendar } from "@justeattakeaway/pie-icons-webc/react/IconCalendar";

export default function App() {
  return (
    <div className="App">
      <IconCalendar />
    </div>
  );
}
```

#### Vue

This package requires Node 18+, therefore, if you are using a lower version of Node please use our native Vue component package – [pie-icons-vue](https://www.npmjs.com/package/@justeattakeaway/pie-icons-vue).

To import from the package root:

```tsx
import { IconAlertTriangleLarge, IconCalendar } from "@justeattakeaway/pie-icons-webc";

export default function App() {
  return (
    <div className="App">
      <icon-calendar />
      <icon-alert-triangle-large />
    </div>
  );
}
```


### Props

Icons accept any standard attribute, except for `width` and `height` since those are set implicitly by using the `size` prop.


##### `size`

Icons are made available in different size variants:
- regular
- large, when its name has the `Large` suffix

Regular icons default size is `xs` and can use one of the following pre-determined values for `size`: `xs`, `s`, `m`, `l`, `xl`, and `xxl`. You can learn more about regular icon sizes [here](https://www.pie.design/foundations/iconography/overview/#:~:text=Sizes%20for%20the%20Small%20icon%20set).

Large icons `size` default and minimum value is `32`. Values larger than the minimum must be multiples of `8`, otherwise will be automatically rounded. You can learn more about large icon sizes [here](https://www.pie.design/foundations/iconography/overview/#:~:text=Sizes%20for%20the%20Large%20icon%20set).

Example:

```js
<icon-alert-triangle size="s" />
<icon-alert-triangle-large size="80" />
```

### Tree shaking

By using ES imports like `import { IconCalendar } from '@justeattakeaway/pie-icons-webc'` with Webpack v4+ or Rollup, unused exports in this module will be automatically eliminated.

If you can't use a tree-shaking compatible build tool, then you can use the per-file icons from the [`/icons`](https://unpkg.com/@justeattakeaway/pie-icons-vue/) directory, e.g. `import IconCalendar from '@justeattakeaway/pie-icons-webc/IconCalendar'`.


### Browser Support

The component extends [@justeattakeaway/browserslist-config-pie](https://github.com/justeattakeaway/pie/tree/main/packages/tools/browserslist-config-pie) package for the list of browsers to support.


## Contributing

Before starting please read our [contributing guide](https://pie.design/engineers/contributing/)

### Adding new icons

Icons should be added as SVGs to the main pie-icons package and published, before simply incrementing the dependency of `pie-icons` in the `pie-icons-webc` package, to generate the new set of Web Components.

The PIE iconset is managed by our PIE design team and new icon requests should go through them to ensure that they are designed in-line with our standards and guildelines. Please reach out to PIE design system team using #help-designsystem slack channel.

### Building the Module

Run `yarn build --filter=pie-icons-webc` from the project level or `yarn turbo run build --filter=pie-icons-webc` from the root level to compile the module.

## Icon list

You can check the list of all the icons on our [documentation site](https://pie.design/foundations/iconography/library/).

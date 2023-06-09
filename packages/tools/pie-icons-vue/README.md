
# pie-icons-vue

Shared PIE Icon Components for Vue.js.

This package generates an iconset for Vue.js applications using the base [pie-icons](https://www.npmjs.com/package/@justeattakeaway/pie-icons) package. The SVGs in pie-icons are compiled into single file components that can be imported into Vue applications.

The package is tested and is fully compatible with Vue 2. To use these icon components in Vue 3, you would need to ensure you run your applications using the [`vue/compat` migration build](https://www.npmjs.com/package/@vue/compat).

---

[![npm version](https://img.shields.io/npm/v/@justeattakeaway/pie-icons-vue.svg)](https://img.shields.io/npm/v/@justeattakeaway/pie-icons-vue.svg)

---
## Usage

### Installation

Add the module to your project

```bash
yarn add @justeattakeaway/pie-icons-vue
```

### Vue Applications

```js
// Only import what you need!
import { IconCalendar, IconAlertTriangleLarge, ... } from '@justeattakeaway/pie-icons-vue'
```

Within the context of a Vue app, that will look like:

  ```js
  <template>
      <icon-calendar />
      <icon-alert-triangle-large fill={PIE_ALIAS_COLOR_TOKEN} />
  </template>

  <script>
  import { IconCalendar, IconAlertTriangleLarge, ... } from '@justeattakeaway/pie-icons-vue';

  export default {
      components: {
          IconCalendar,
          IconAlertTriangleLarge
      }
  };
  </script>
  ```

#### Props

Icons accept any standard attribute, except for `width` and `height` since those are set implicitly by using the `iconSize` prop.

##### `iconSize`

Icons are made available in different size variants:
- small
- large, when its name has the `Large` suffix

Small icons default size is `xs` and can use one of the following pre-determined values for `iconSize`: `xs`, `s`, `m`, `l`, `xl`, and `xxl`. You can learn more about small icon sizes [here](https://www.pie.design/foundations/iconography/overview/#:~:text=Sizes%20for%20the%20Small%20icon%20set).

Large icons `iconSize` default and minimum value is `32`. Values larger than the minimum must be multiples of `8`, otherwise will be automatically rounded. You can learn more about large icon sizes [here](https://www.pie.design/foundations/iconography/overview/#:~:text=Sizes%20for%20the%20Large%20icon%20set).

Example:

```js
<icon-alert-triangle iconSize="l" />
<icon-alert-triangle-large iconSize="40" />
```

### Tree shaking

By using ES imports like `import { IconCalendar } from '@justeattakeaway/pie-icons-vue'` with Webpack v4+ or Rollup, unused exports in this module will be automatically eliminated.

If you can't use a tree-shaking compatible build tool, then you can use the per-file icons from the [`/icons`](https://unpkg.com/@justeattakeaway/pie-icons-vue/icons/) directory, e.g. `import IconCalendar from '@justeattakeaway/pie-icons-vue/icons/IconCalendar'`.


### Browser Support

The component extends [@justeat/browserslist-config-fozzie](https://github.com/justeat/browserslist-config-fozzie) package for the list of browsers to support.


## Contributing

Before starting please read our [contributing guide](https://pie.design/engineers/contributing/)

### Adding new icons

Icons should be added as SVGs to the main pie-icons package and published, before simply incrementing the dependency of `pie-icons` in the `pie-icons-vue` package, to generate the new set of Vue components.

The PIE iconset is managed by our PIE design team and new icon requests should go through them to ensure that they are designed inline with our standards and guildelines. Please reach out to PIE design system team using #help-designsystem slack channel.

### Building the Module

Run `yarn build --filter=pie-icons-vue` from the project level or `yarn turbo run build --filter=pie-icons-vue` from the root level to compile the module.

## Icon list

You can check the list of all the icons on our [documentation site](https://pie.design/foundations/iconography/library/).

## Credits

This package was heavily inspired by the excellent [`vue-feather-icons`](https://github.com/egoist/vue-feather-icons) package.

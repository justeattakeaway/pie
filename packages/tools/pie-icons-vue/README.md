
# pie-icons-vue

Shared PIE Icon Components for Vue.js.

This package generates an iconset for Vue.js applications using the base [pie-icons](https://www.npmjs.com/package/@justeattakeaway/pie-icons) package. The SVGs in pie-icons are compiled into single file components that can be imported into Vue applications.

The package is tested and is fully compatible with Vue 2. To use these icon components in Vue 3, you would need to ensure you run your applications using the [`vue/compat` migration build](https://www.npmjs.com/package/@vue/compat).

---

[![npm version](https://badge.fury.io/js/%40justeattakeaway%2Fpie-icons-vue.svg)](https://badge.fury.io/js/%40justeattakeaway%2Fpie-icons-vue)
[![CircleCI](https://circleci.com/gh/justeat/pie-project.svg?style=svg)](https://circleci.com/gh/justeat/workflows/pie-project)


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
import { CalendarIcon, MenuExpandIcon, ... } from '@justeattakeaway/pie-icons-vue'
```

Within the context of a Vue app, that will look like:

  ```js
  <template>
      <calendar-icon />
      <menu-expand-icon />
  </template>


  <script>
  import { CalendarIcon, MenuExpandIcon, ... } from '@justeattakeaway/pie-icons-vue';

  export default {
      components: {
          CalendarIcon,
          MenuExpandIcon
      }
  };
  </script>
  ```

### Tree shaking

By using ES imports like `import { CalendarIcon } from '@justeattakeaway/pie-icons-vue'` with Webpack v4+ or Rollup, unused exports in this module will be automatically eliminated.

If you can't use a tree-shaking compatible build tool, then you can use the per-file icons from the [`/icons`](https://unpkg.com/@justeattakeaway/pie-icons-vue/icons/) directory, e.g. `import CalendarIcon from '@justeattakeaway/pie-icons-vue/icons/CalendarIcon'`.


### Browser Support

The component extends [@justeat/browserslist-config-fozzie](https://github.com/justeat/browserslist-config-fozzie) package for the list of browsers to support.


## Contributing

Before starting please read our [contributing guide](https://vue.pie.design/?path=/story/documentation-getting-started-contributing--page)

### Adding new icons

Icons should be added as SVGs to the main pie-icons package and published, before simply incrementing the dependency of `pie-icons` in the `pie-icons-vue` package, to generate the new set of Vue components.

The PIE iconset is managed by our PIE design team and new icon requests should go through them to ensure that they are designed inline with our standards and guildelines. Please reach out to the #proj-pie-design-system team who can help with these requests.

### Building the Module

Run `yarn build` to compile the module.

## Icon list

You can check the list of all the icons in our [Storybook](https://vue.pie.design/?path=/story/components-atoms--icons).


## Credits

This package was heavily inspired by the excellent [`vue-feather-icons`](https://github.com/egoist/vue-feather-icons) package.

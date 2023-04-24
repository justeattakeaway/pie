# pie-icons-react

Shared PIE Icon Components for ReactJS.

This package generates an iconset for React applications using the base [pie-icons](https://www.npmjs.com/package/@justeattakeaway/pie-icons) package. The SVGs in pie-icons are compiled into single file components that can be imported into Vue applications.

The icons are bundled in CommonJS and ES Modules, to be more easily adopted for modern React Applications.

---

## Usage

### Installation

Add the module to your project

```bash
yarn add @justeattakeaway/pie-icons-react
```

### React Applications

```tsx
import { IconAlertTriangleLarge, IconCalendar } from "@justeattakeaway/pie-icons-react";

export default function App() {
  return (
    <div className="App">
      <IconCalendar />
      <IconAlertTriangleLarge fill="lightgrey" />
    </div>
  );
}
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

```tsx
<IconAlertTriangle iconSize="l" />
<IconAlertTriangleLarge iconSize={40} />
```

### Tree shaking

By using ES imports like `import { IconCalendar } from '@justeattakeaway/pie-icons-react'` with Webpack v4+ or Rollup, unused exports in this module will be automatically eliminated.

If your application doesn't support ES Modules, you can still consume this library as a CommonJS module, but you will lose the tree-shaking capability. If so, you can use the per-file icons from the `/dist` folder:

```tsx
import AlertTriangle from "@justeattakeaway/pie-icons-react/dist/AlertTriangle";
```

## Contributing

Before starting please read our [contributing guide](https://vue.pie.design/?path=/story/documentation-getting-started-contributing--page)

### Adding new icons

Icons should be added as SVGs to the main pie-icons package and published, before simply incrementing the dependency of `pie-icons` in the `pie-icons-react` package, to generate the new set of Vue components.

The PIE iconset is managed by our PIE design team and new icon requests should go through them to ensure that they are designed inline with our standards and guildelines. Please reach out to the #proj-pie-design-system team who can help with these requests.

### Building the Module

Run `yarn build` to compile the module.

## Icon list

You can check the list of all the icons in our [Storybook](https://react.pie.design/?path=/story/design-pie-icons--icons-story).

## Credits

This package was heavily inspired by the excellent [`vue-feather-icons`](https://github.com/egoist/vue-feather-icons) package.

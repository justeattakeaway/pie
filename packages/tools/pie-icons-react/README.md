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
import { Alcohol, AlertTriangle } from "@justeattakeaway/pie-icons-react";

export default function App() {
  return (
    <div className="App">
      <Alcohol />
      <AlertTriangle fill="lightgrey" width={300} height={400} />
    </div>
  );
}
```

### Tree shaking

By using ES imports like `import { CalendarIcon } from '@justeattakeaway/pie-icons-react'` with Webpack v4+ or Rollup, unused exports in this module will be automatically eliminated.

If your application doesn't support ES Modules, you can still consume this library as a CommonJS module, but you will lose the tree-shaking capability. If so, you can use the per-file icons from from the `/dist` folder:

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

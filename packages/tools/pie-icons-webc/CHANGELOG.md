# @justeattakeaway/pie-icons-webc

## 0.17.1

### Patch Changes

- Updated dependencies [[`918593afd`](https://github.com/justeattakeaway/pie/commit/918593afd939e8c911542235a5d861680ceba2d0)]:
  - @justeattakeaway/pie-webc-core@0.17.0

## 0.17.0

### Minor Changes

- [Changed] - Added `@justeattakeaway/pie-wrapper-react` as a devDependency as `build` now relies on the publish `add-react-wrapper` executable ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

### Patch Changes

- Updated dependencies [[`320ee9d4b`](https://github.com/justeattakeaway/pie/commit/320ee9d4b53df60d2e69256c5a64c7abfbfbae16), [`4c65a8176`](https://github.com/justeattakeaway/pie/commit/4c65a8176273f3883dc2be2d0c8a33aef56f8993), [`320ee9d4b`](https://github.com/justeattakeaway/pie/commit/320ee9d4b53df60d2e69256c5a64c7abfbfbae16)]:
  - @justeattakeaway/pie-webc-core@0.16.0

## 0.16.2

### Patch Changes

- Updated dependencies [[`687bdd904`](https://github.com/justeattakeaway/pie/commit/687bdd90475fef58a492c980a7f7d9261ee94eb9)]:
  - @justeattakeaway/pie-webc-core@0.15.0

## 0.16.1

### Patch Changes

- Updated dependencies [[`c4b78bf9a`](https://github.com/justeattakeaway/pie/commit/c4b78bf9a42e165c8feed20197fbe7d5875a9dd4), [`c4b78bf9a`](https://github.com/justeattakeaway/pie/commit/c4b78bf9a42e165c8feed20197fbe7d5875a9dd4)]:
  - @justeattakeaway/pie-webc-core@0.14.0

## 0.16.0

### Minor Changes

- [Fixed] - Remove `:host-context` usage for icon sizing ([#1107](https://github.com/justeattakeaway/pie/pull/1107)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- [Changed] - `--btn-icon-size` and `--btn-icon-display` to `--icon-display-override` and `--icon-size-override` variable for display, width and height icon styles for `:host svg` ([#1127](https://github.com/justeattakeaway/pie/pull/1127)) by [@dandel10n](https://github.com/dandel10n)

## 0.15.0

### Minor Changes

- [Changed] - add two new fallback export entry points for react apps that include /dist in the path. This allows for better integration with frameworks such as NextJS ([#1077](https://github.com/justeattakeaway/pie/pull/1077)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.14.0

### Minor Changes

- [Changed] - mark pie-webc-core as an external dependency ([#1070](https://github.com/justeattakeaway/pie/pull/1070)) by [@raoufswe](https://github.com/raoufswe)

## 0.13.0

### Minor Changes

- [Added] - React entry point to the library that allows consumers to import individual or all icons either from /react/icon path or entire /react folder ([#1072](https://github.com/justeattakeaway/pie/pull/1072)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.12.0

### Minor Changes

- [Removed] - lit dependency in favour of pie-webc-core ([#1037](https://github.com/justeattakeaway/pie/pull/1037)) by [@xander-marjoram](https://github.com/xander-marjoram)

### Patch Changes

- Updated dependencies [[`9a3a1db82`](https://github.com/justeattakeaway/pie/commit/9a3a1db82ffd69e9583721b703cd85ac1d34e1f3), [`9a3a1db82`](https://github.com/justeattakeaway/pie/commit/9a3a1db82ffd69e9583721b703cd85ac1d34e1f3)]:
  - @justeattakeaway/pie-webc-core@0.13.0

## 0.11.1

### Patch Changes

- [Changed] - Moved test packages from dependencies to dev dependencies to prevent consumers from needing to install them ([#911](https://github.com/justeattakeaway/pie/pull/911)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.11.0

### Minor Changes

- [Added] - jsdoc @tagname comment to generated icon typescript classes and new defineCustomElement function to define the components ([#905](https://github.com/justeattakeaway/pie/pull/905)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.10.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.9.0

### Minor Changes

- [Changed] - Replace `@justeat/browserslist-config-fozzie` with `@justeattakeaway/browserslist-config-pie` ([#855](https://github.com/justeattakeaway/pie/pull/855)) by [@xander-marjoram](https://github.com/xander-marjoram)

### Patch Changes

- [Added] - icons directory to eslintignore file ([#855](https://github.com/justeattakeaway/pie/pull/855)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.8.1

### Patch Changes

- [Changed] - use latest pie-icons ([#823](https://github.com/justeattakeaway/pie/pull/823)) by [@dandel10n](https://github.com/dandel10n)

## 0.8.0

### Minor Changes

- [Changed] - Removed the DependantMap type and replaced all references with Lit's own PropertyValues helper. This provides exactly the same strongly typed map for a component's properties which makes our own type a little redundant. [Reference](https://lit.dev/docs/components/lifecycle/#typescript-types-for-changedproperties) ([#818](https://github.com/justeattakeaway/pie/pull/818)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.7.0

### Minor Changes

- [Changed] - switch from Rollup to Vite and remove Lit from configs.js bundle output. Also remote vite-dts-plugin and use tsc to generate icon type declaration files ([#815](https://github.com/justeattakeaway/pie/pull/815)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.6.0

### Minor Changes

- [Changed] - use latest pie-icons ([#797](https://github.com/justeattakeaway/pie/pull/797)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.5.1

### Patch Changes

- [Changed] - add missing peer dependencies ([#784](https://github.com/justeattakeaway/pie/pull/784)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - update packages, including `@babel/core` and `@justeat/pie-design-tokens`

## 0.5.0

### Minor Changes

- [Fixed] - Prevent tree-shaking of components in storybook ([#667](https://github.com/justeattakeaway/pie/pull/667)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Removed] - Built webc icons from source control
  [Added] - Type declaration files for components
  [Added] - Types for pie-icons
  [Added] - TS version of pie-icons-configs/config.js (Will be used after DSW-1025)
  [Added] - Webc icon tests for width, height and base classes
  [Changed] - Update pie-icons-webc build to generate a slightly different template for regular and large icons (using different types, etc.)
  [Changed] - Update pie-icons-webc rollup config to remove commonjs build
  [Changed] - Use `just-kebab-case` and `just-pascal-case` instead of `kebab-case` and `pascal-case` to simplify usage (and they're more recently maintained)

## 0.4.0

### Minor Changes

- [Added] - host-context for pie-button icons and display property for the generated svgs ([#631](https://github.com/justeattakeaway/pie/pull/631)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.3.0

### Minor Changes

- [Changed] - Ensure size only gets set when it hasn't already been generated and `:host-context` styles are added for contextual styling ([#604](https://github.com/justeattakeaway/pie/pull/604)) by [@ashleynolan](https://github.com/ashleynolan)

  This change adds `:host-context` styles to each webc icon, so that if the icon is used
  inside pie-icon-button, then it will apply width/height according to the custom properties
  set by that component.

## 0.2.0

### Minor Changes

- [Changed] - icon name changes reflected by recompile ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

- [Changed] - using shared normalizeIconName function in pie-icons-configs ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

- [Fixed] - Adding TS declaration and linting ignore ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.1.0

### Minor Changes

- [Added] - `pie-icons-webc` package for compiling SVGs as web components ([#585](https://github.com/justeattakeaway/pie/pull/585)) by [@LTurns](https://github.com/LTurns)

# @justeattakeaway/pie-wrapper-react

## 0.13.0

### Minor Changes

- [Changed] - React Wrapper script adding the workaround for the bug that sets all props as optional in React and TS ([#1164](https://github.com/justeattakeaway/pie/pull/1164)) by [@fernandofranca](https://github.com/fernandofranca)

  [Changed] - Added workaround for missing callback props in React and TS
  [Changed] - Updated documentation README file regarding the addition of ReactBaseType
  [Changed] - unit tests snapshots to reflect the changes
  [Added] - `test:ci` npm script

- [Changed] - Updated the React Wrapper to read and include the React base type declaration ([#1164](https://github.com/justeattakeaway/pie/pull/1164)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.12.0

### Minor Changes

- [Changed] - Refactored `add-react-wrapper.js` to be executable via npx. ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - `fs-extra` to a dependency so that script execution doesn't fail outside the monorepo.
  [Changed] - Refactored `add-react-wrapper.js` to create unique `custom-elements.json` for each component in the directory where `npx build-react-wrapper` is executed.

- [Changed] - Added `@justeattakeaway/pie-wrapper-react` as a devDependency as `build` now relies on the publish `add-react-wrapper` executable ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

## 0.11.1

### Patch Changes

- [Fixed] - Trailing whitespace linting error ([#1115](https://github.com/justeattakeaway/pie/pull/1115)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.11.0

### Minor Changes

- [Changed] - `@lit-labs/react` dependency to `@lit/react` and updated any references. ([#1027](https://github.com/justeattakeaway/pie/pull/1027)) by [@raoufswe](https://github.com/raoufswe)

## 0.11.0-next.0

### Minor Changes

- [Changed] - `@lit-labs/react` dependency to `@lit/react` and updated any references. ([#1025](https://github.com/justeattakeaway/pie/pull/1025)) by [@raoufswe](https://github.com/raoufswe)

## 0.10.2

### Patch Changes

- [Changed] - Align author field for all packages ([#852](https://github.com/justeattakeaway/pie/pull/852)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.10.1

### Patch Changes

- [Changed] - add missing peer dependencies ([#784](https://github.com/justeattakeaway/pie/pull/784)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - update packages, including `@babel/core` and `@justeat/pie-design-tokens`

## 0.10.0

### Minor Changes

- [Updated] - Export all of `defs.ts` file from component `index.ts` files ([#722](https://github.com/justeattakeaway/pie/pull/722)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Fixed] - Correctly set up types and export for react component outputs ([#722](https://github.com/justeattakeaway/pie/pull/722)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Fixed] - Remove custom-elements.json from Git cache (was already ignored but still tracked) ([#724](https://github.com/justeattakeaway/pie/pull/724)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.9.2

### Patch Changes

- [Added] - destructive and destructive-ghost button variants ([#686](https://github.com/justeattakeaway/pie/pull/686)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Fixed] - hover and active colours for ghost-inverse variant
  [Added] - mixin for reassigning button spinner HSL custom properties

## 0.9.1

### Patch Changes

- [Added] - New ActionProps type for modal leading/supporting actions ([#670](https://github.com/justeattakeaway/pie/pull/670)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.9.0

### Minor Changes

- [Added] - Created package skeleton for pie-toggle-switch component ([#658](https://github.com/justeattakeaway/pie/pull/658)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Add js/ts linting and fix errors ([#653](https://github.com/justeattakeaway/pie/pull/653)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.8.2

### Patch Changes

- [Added] - prop for `leadingAction` to pie-modal ([#632](https://github.com/justeattakeaway/pie/pull/632)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.8.1

### Patch Changes

- [Added] - Default modal footer ([#619](https://github.com/justeattakeaway/pie/pull/619)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Added] - Height styles for the different sizes
  [Removed] - Unnecessary `:focus-visible` outline for the modal
  [Fixed] - Modal width should be able to exceed 600px for `isFullWidthBelowMid`

## 0.8.0

### Minor Changes

- [Fixed] - Correctly handle event casing and their descriptions in react wrappers ([#612](https://github.com/justeattakeaway/pie/pull/612)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - ensure onEventName format used for react wrapper callbacks ([#617](https://github.com/justeattakeaway/pie/pull/617)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.7.0

### Minor Changes

- [Added] - Use the LitElement flag for the CEM analyser to handle Lit specific syntax ([#615](https://github.com/justeattakeaway/pie/pull/615)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Ensure size only gets set when it hasn't already been generated and `:host-context` styles are added for contextual styling ([#604](https://github.com/justeattakeaway/pie/pull/604)) by [@ashleynolan](https://github.com/ashleynolan)

  This change adds `:host-context` styles to each webc icon, so that if the icon is used
  inside pie-icon-button, then it will apply width/height according to the custom properties
  set by that component.

## 0.6.2

### Patch Changes

- [Added] - Add returnFocusAfterCloseSelector prop ([#599](https://github.com/justeattakeaway/pie/pull/599)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Extract `renderTestPieModal` into test helper file so it can be used for component tests too
  [Added] - Add README documentation for new props

## 0.6.1

### Patch Changes

- [Added] - New size prop for pie-modal ([#572](https://github.com/justeattakeaway/pie/pull/572)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Added] - Visual regression test for each size
  [Changed] - Modal story to include new size prop

## 0.6.0

### Minor Changes

- [Added] Order by length to custom-elements.json to prevent reordering ([#565](https://github.com/justeattakeaway/pie/pull/565)) by [@LTurns](https://github.com/LTurns)

## 0.5.0

### Minor Changes

- [Added] - `size` prop added to pie-icon-button ([#557](https://github.com/justeattakeaway/pie/pull/557)) by [@ashleynolan](https://github.com/ashleynolan)

### Patch Changes

- [Fixed] - Ignore temporary manifest file `pie-wrapper-react` ([#536](https://github.com/justeattakeaway/pie/pull/536)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.4.1

### Patch Changes

- [Fixed] - Ignore temporary manifest file `pie-wrapper-react` ([#524](https://github.com/justeattakeaway/pie/pull/524)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.4.0

### Minor Changes

- [Fixed] - React wrapper points to the wrong value when a variable is used to define custom elements ([#530](https://github.com/justeattakeaway/pie/pull/530)) by [@raoufswe](https://github.com/raoufswe)

- [Changed] - Custom Element Definitions ([#513](https://github.com/justeattakeaway/pie/pull/513)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.3.0

### Minor Changes

- [Added] - content about constructing tag name in README ([#507](https://github.com/justeattakeaway/pie/pull/507)) by [@LTurns](https://github.com/LTurns)

## 0.2.0

### Minor Changes

- [Added] - React wrappers package for wrapping lit components ([#426](https://github.com/justeattakeaway/pie/pull/426)) by [@LTurns](https://github.com/LTurns)

  [Added] - Scripts for adding `createComponent` wrapper
  [Added] - `custom-elements.json` and `custom-elements-manifest.config.js` for converting custom-elements into JSON
  [Added] - `cem-plugin-module-file-extensions` and `@custom-elements-manifest/analyzer` to package.json

- [Added] - further documentation on `custom-elements.json` ([#504](https://github.com/justeattakeaway/pie/pull/504)) by [@LTurns](https://github.com/LTurns)

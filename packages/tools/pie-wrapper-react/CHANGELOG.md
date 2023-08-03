# @justeattakeaway/pie-wrapper-react

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

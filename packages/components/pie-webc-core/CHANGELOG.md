# Changelog

## 4.0.0

### Patch Changes

- Updated dependencies [[`36c972d`](https://github.com/justeattakeaway/pie/commit/36c972d9996848bb9529f20cda4367c23a916f9d)]:
  - @justeattakeaway/pie-css@0.24.0

## 3.0.2

### Patch Changes

- Updated dependencies [[`9250d39`](https://github.com/justeattakeaway/pie/commit/9250d390b1b5c4e6a7a3d68f928b369930b66af3)]:
  - @justeattakeaway/pie-css@0.23.2

## 3.0.1

### Patch Changes

- Updated dependencies [[`da89aa6`](https://github.com/justeattakeaway/pie/commit/da89aa6010281bc7f37560cabfcd2c7fb70c86df)]:
  - @justeattakeaway/pie-css@0.23.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`e41ea88`](https://github.com/justeattakeaway/pie/commit/e41ea88f6f40e2b166d044ddb54180f10fee5835)]:
  - @justeattakeaway/pie-css@0.23.0

## 2.0.0

### Minor Changes

- [Added] - DelegatesFocusMixin for components that need to pass focus to the first focusable element in the template ([#2561](https://github.com/justeattakeaway/pie/pull/2561)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - mark pie-css as a peer-dependency ([#2556](https://github.com/justeattakeaway/pie/pull/2556)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`e68681a`](https://github.com/justeattakeaway/pie/commit/e68681ac1b3242e88240a65446164522d048c26e)]:
  - @justeattakeaway/pie-css@0.22.0

## 1.1.0

### Minor Changes

- [Updated] - use the :dir() pseudo-class for RTL styling instead of the RTL mixin to ensure proper support during SSR. ([#2518](https://github.com/justeattakeaway/pie/pull/2518)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- [Fixed] - ensure the RTL mixin respects the dir attribute value set on the document after server-side rendering. ([#2518](https://github.com/justeattakeaway/pie/pull/2518)) by [@raoufswe](https://github.com/raoufswe)

## 1.0.0

### Major Changes

- [Changed] - Removed the defineCustomElement function and use a decorator for all custom elements to register them ([#2386](https://github.com/justeattakeaway/pie/pull/2386)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.26.0

### Minor Changes

- [Added] - decorator that wraps the lit customElement decorator with error handling ([#2286](https://github.com/justeattakeaway/pie/pull/2286)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.25.1

### Patch Changes

- [Changed] - use a centralised TS declaration file for common duplicated declares ([#2303](https://github.com/justeattakeaway/pie/pull/2303)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.25.0

### Minor Changes

- [Changed] - Add a v property to all components using vite to bake the version number into the code ([#2301](https://github.com/justeattakeaway/pie/pull/2301)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.24.2

### Patch Changes

- [Fixed] - Imports to align with new linting rule ([#1622](https://github.com/justeattakeaway/pie/pull/1622)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Removed] - Empty lines at the start of some files

## 0.24.1

### Patch Changes

- [Changed] - Suggested package updates for security ([#1953](https://github.com/justeattakeaway/pie/pull/1953)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.24.0

### Minor Changes

- [Changed] - Update default props generic helper type to include all props by default ([#1582](https://github.com/justeattakeaway/pie/pull/1582)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Naming of generic type
  [Added] - JSDoc comment

## 0.23.0

### Minor Changes

- [Added] - Generic type for components default props ([#1451](https://github.com/justeattakeaway/pie/pull/1451)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.22.0

### Minor Changes

- [Changed] - Updated Lit from 3.1.2 to 3.1.3 ([#1427](https://github.com/justeattakeaway/pie/pull/1427)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.21.1

### Patch Changes

- [Removed] - Unneeded `bundledJetDeps` array (patch versions are required because pie-components-config is a dev dependency) ([#1378](https://github.com/justeattakeaway/pie/pull/1378)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.21.0

### Minor Changes

- [Added] - Bundle visualiser that runs during build for webc icons, webc core and our components ([#1391](https://github.com/justeattakeaway/pie/pull/1391)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.20.0

### Minor Changes

- [Changed] - Update tsconfig target to es2021 ([#1341](https://github.com/justeattakeaway/pie/pull/1341)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.19.1

### Patch Changes

- [Changed] - Updated lit to `3.1.2` ([#1300](https://github.com/justeattakeaway/pie/pull/1300)) by [@renovate](https://github.com/apps/renovate)

## 0.19.0

### Minor Changes

- [Added] - dispatchCustomEvent helper function. ([#1272](https://github.com/justeattakeaway/pie/pull/1272)) by [@dandel10n](https://github.com/dandel10n)

## 0.18.0

### Minor Changes

- [Added] - PIEInputElement interface ([#1257](https://github.com/justeattakeaway/pie/pull/1257)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.17.1

### Patch Changes

- [Changed] - Updated Lit to 3.1.1 ([#1178](https://github.com/justeattakeaway/pie/pull/1178)) by [@renovate](https://github.com/apps/renovate)

## 0.17.0

### Minor Changes

- [Added] - new wrapNativeEvent function to standardise how we structure custom versions of native browser events such as 'change' ([#1173](https://github.com/justeattakeaway/pie/pull/1173)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.16.0

### Minor Changes

- [Removed] - unused LitElementMixin type as we do not need it anywhere ([#1145](https://github.com/justeattakeaway/pie/pull/1145)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Added `@justeattakeaway/pie-wrapper-react` as a devDependency as `build` now relies on the publish `add-react-wrapper` executable ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

- [Changed] - Use proper interface keyword for RTLmixin interface. Was using a class before which is incorrect. ([#1145](https://github.com/justeattakeaway/pie/pull/1145)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.15.0

### Minor Changes

- [Changed] - Updated LitElement imports where it is only used as a type to include the 'type' keyword (fixes a TS error in some consumers) ([#1143](https://github.com/justeattakeaway/pie/pull/1143)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.14.0

### Minor Changes

- [Added] - Form Control Mixin for adding native form association behaviour to web components ([#1142](https://github.com/justeattakeaway/pie/pull/1142)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Re organised test structure and added playwright testing ([#1142](https://github.com/justeattakeaway/pie/pull/1142)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.13.0

### Minor Changes

- [Added] - Build webc-core using vite ([#1037](https://github.com/justeattakeaway/pie/pull/1037)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Changed] - Move lit dependency from storybook to webc-core ([#1037](https://github.com/justeattakeaway/pie/pull/1037)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.12.0

### Minor Changes

- [Changed] - `@validPropertyValues` and `@requiredProperty` decorators to support Lit 3. ([#1027](https://github.com/justeattakeaway/pie/pull/1027)) by [@raoufswe](https://github.com/raoufswe)

## 0.12.0-next.0

### Minor Changes

- [Changed] - `@validPropertyValues` and `@requiredProperty` decorators to support Lit 3. ([#1025](https://github.com/justeattakeaway/pie/pull/1025)) by [@raoufswe](https://github.com/raoufswe)

## 0.11.0

### Minor Changes

- [Added] - defineCustomElement helper function to protect against duplicate component registration errors ([#905](https://github.com/justeattakeaway/pie/pull/905)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.10.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.9.1

### Patch Changes

- [Changed] - Align author field for all packages ([#852](https://github.com/justeattakeaway/pie/pull/852)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.9.0

### Minor Changes

- [Changed] - Rewrite RTL mixin to remove the dir property. The LitElement base class is a subclass of HTMLElement, so a Lit component inherits all of the standard HTMLElement properties and methods. This means that the dir property is already available on the component and we don't need to add it again. [Reference](https://lit.dev/docs/components/defining/#a-lit-component-is-an-html-element). During SSR, if no dir is provided, it will be inferred from the document.documentElement once it's instantiated on the client. ([#818](https://github.com/justeattakeaway/pie/pull/818)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Removed the DependantMap type and replaced all references with Lit's own PropertyValues helper. This provides exactly the same strongly typed map for a component's properties which makes our own type a little redundant. [Reference](https://lit.dev/docs/components/lifecycle/#typescript-types-for-changedproperties) ([#818](https://github.com/justeattakeaway/pie/pull/818)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.8.0

### Minor Changes

- [Changed] - Update RTL mixin to infer dir by default and document ([#745](https://github.com/justeattakeaway/pie/pull/745)) by [@raoufswe](https://github.com/raoufswe)

## 0.7.0

### Minor Changes

- [Changed] - Add js/ts linting and fix errors ([#653](https://github.com/justeattakeaway/pie/pull/653)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.6.0

### Minor Changes

- [Changed] - Improve TS typings in RTL mixin and provde extendable prop interface for components ([#623](https://github.com/justeattakeaway/pie/pull/623)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.5.0

### Minor Changes

- [Removed] - Function for CSS loading in Safari visual tests due to fix on Percy side. ([#575](https://github.com/justeattakeaway/pie/pull/575)) by [@JoshuaNg2332](https://github.com/JoshuaNg2332)

## 0.4.0

### Minor Changes

- [Added] - New function to fix CSS loading in Safari Percy tests ([#534](https://github.com/justeattakeaway/pie/pull/534)) by [@siggerzz](https://github.com/siggerzz)

## 0.3.0

### Minor Changes

- [Added] - new WebComponentTestWrapper test component for adding labels to visual tests ([#519](https://github.com/justeattakeaway/pie/pull/519)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - a helper module to generate all prop variants of a given component ([#499](https://github.com/justeattakeaway/pie/pull/499)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - `required` property decorator ([#530](https://github.com/justeattakeaway/pie/pull/530)) by [@raoufswe](https://github.com/raoufswe)

- [Changed] - Make pie-webc-core public ([#523](https://github.com/justeattakeaway/pie/pull/523)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.2.0

### Minor Changes

- [Added] - Property validation decorator ([#491](https://github.com/justeattakeaway/pie/pull/491)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.1.0

### Minor Changes

- [Added] - RTL Mixin and base project ([#478](https://github.com/justeattakeaway/pie/pull/478)) by [@jamieomaguire](https://github.com/jamieomaguire)

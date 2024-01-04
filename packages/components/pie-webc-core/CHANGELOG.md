# Changelog

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

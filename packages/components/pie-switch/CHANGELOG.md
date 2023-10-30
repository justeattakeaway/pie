# @justeattakeaway/pie-switch

## 0.15.0

### Minor Changes

- [Removed] - pie-monorepo specific content from Web Component READMES ([#904](https://github.com/justeattakeaway/pie/pull/904)) by [@LTurns](https://github.com/LTurns)

## 0.14.0

### Minor Changes

- [Added] - @tagname jsdoc comment to top of component class and use new defineCustomElement function to define the components ([#905](https://github.com/justeattakeaway/pie/pull/905)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.13.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.12.0

### Minor Changes

- [Fixed] - The label should have the same cursor as the control itself ([#849](https://github.com/justeattakeaway/pie/pull/849)) by [@raoufswe](https://github.com/raoufswe)

  [Fixed]- The cursor should be disabled, following the same pattern as the Button

## 0.11.0

### Minor Changes

- [Added] - set sideEffects package.json property to correctly communicate to bundlers such as webpack that js files in the component dist folders contain side effects and should therefore not be treeshaken when the entire library is imported. [Reference](https://cube.dev/blog/how-to-build-tree-shakeable-javascript-libraries) ([#854](https://github.com/justeattakeaway/pie/pull/854)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Changed] - Align author field for all packages ([#852](https://github.com/justeattakeaway/pie/pull/852)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.10.0

### Minor Changes

- [Changed] - use `isRTL` attribute provided by the `RTLMixin` rather than `dir` for rtl scss styles ([#818](https://github.com/justeattakeaway/pie/pull/818)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.9.0

### Minor Changes

- [Changed] - use newer webc icon import paths ([#815](https://github.com/justeattakeaway/pie/pull/815)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.8.0

### Minor Changes

- [Fixed] Safari ios checkbox disabled visual issue ([#794](https://github.com/justeattakeaway/pie/pull/794)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.7.0

### Minor Changes

- [Fixed] Safari bug with toggle placement ([#787](https://github.com/justeattakeaway/pie/pull/787)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- [Changed] - add missing peer dependencies ([#784](https://github.com/justeattakeaway/pie/pull/784)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - update packages, including `@babel/core` and `@justeat/pie-design-tokens`

## 0.6.0

### Minor Changes

- [Added] add modal content and toggles ([#772](https://github.com/justeattakeaway/pie/pull/772)) by [@raoufswe](https://github.com/raoufswe)

## 0.5.0

### Minor Changes

- [Added] - label toggling support ([#744](https://github.com/justeattakeaway/pie/pull/744)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.4.0

### Minor Changes

- [Updated] - Export all of `defs.ts` file from component `index.ts` files ([#722](https://github.com/justeattakeaway/pie/pull/722)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.3.0

### Minor Changes

- [Added] - Label Prop ([#719](https://github.com/justeattakeaway/pie/pull/719)) by [@raoufswe](https://github.com/raoufswe)

- [Changed] extend ts config using relative paths ([#704](https://github.com/justeattakeaway/pie/pull/704)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - aria props ([#696](https://github.com/justeattakeaway/pie/pull/696)) by [@FayeCarter](https://github.com/FayeCarter)

## 0.2.0

### Minor Changes

- [Added] - component styles ([#672](https://github.com/justeattakeaway/pie/pull/672)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

  [Added] - component functionality
  [Added] - `isChecked` and `isDisabled` prop
  [Added] - `pie-toggle-switch` story
  [Updated] - README

## 0.1.0

### Minor Changes

- [Added] - Created package skeleton for pie-toggle-switch component ([#658](https://github.com/justeattakeaway/pie/pull/658)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`716af9b90`](https://github.com/justeattakeaway/pie/commit/716af9b90f9e6a0cdaca7ef75198403d2ac5bbd3)]:
  - @justeattakeaway/pie-webc-core@0.7.0

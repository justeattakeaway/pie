# @justeattakeaway/pie-card-container

## 0.12.0

### Minor Changes

- [Removed] - pie-monorepo specific content from Web Component READMES ([#904](https://github.com/justeattakeaway/pie/pull/904)) by [@LTurns](https://github.com/LTurns)

## 0.11.0

### Minor Changes

- [Added] - @tagname jsdoc comment to top of component class and use new defineCustomElement function to define the components ([#905](https://github.com/justeattakeaway/pie/pull/905)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`4cab049d1`](https://github.com/justeattakeaway/pie/commit/4cab049d1e78196bcd4411efba8d82d86f7a4f06)]:
  - @justeattakeaway/pie-webc-core@0.11.0

## 0.10.0

### Minor Changes

- [Added] - validate the padding prop ([#875](https://github.com/justeattakeaway/pie/pull/875)) by [@raoufswe](https://github.com/raoufswe)

## 0.9.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- Updated dependencies [[`e50b0fe60`](https://github.com/justeattakeaway/pie/commit/e50b0fe60d1be37ac48923316bef8e5c181c7d9e)]:
  - @justeattakeaway/pie-webc-core@0.10.0

## 0.8.0

### Minor Changes

- [Added] - set sideEffects package.json property to correctly communicate to bundlers such as webpack that js files in the component dist folders contain side effects and should therefore not be treeshaken when the entire library is imported. [Reference](https://cube.dev/blog/how-to-build-tree-shakeable-javascript-libraries) ([#854](https://github.com/justeattakeaway/pie/pull/854)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Card container padding props ([#829](https://github.com/justeattakeaway/pie/pull/829)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- [Changed] - Align author field for all packages ([#852](https://github.com/justeattakeaway/pie/pull/852)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`8c03d23f3`](https://github.com/justeattakeaway/pie/commit/8c03d23f3790744be56ed4a5b87da885108a26ab)]:
  - @justeattakeaway/pie-webc-core@0.9.1

## 0.7.0

### Minor Changes

- [Changed] - `dependency` references in package.json to use version number instead of `workspace:*` syntax. This should fix resolution errors in repos that consume packages outside of the PIE monorepo ([#824](https://github.com/justeattakeaway/pie/pull/824)) by [@siggerzz](https://github.com/siggerzz)

- [Changed] - Use pie-css to handle focus styling ([#836](https://github.com/justeattakeaway/pie/pull/836)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.6.1

### Patch Changes

- Updated dependencies [[`9d689eb08`](https://github.com/justeattakeaway/pie/commit/9d689eb0818c4d686d93b5cdd9d708115a066c1e), [`9d689eb08`](https://github.com/justeattakeaway/pie/commit/9d689eb0818c4d686d93b5cdd9d708115a066c1e)]:
  - @justeattakeaway/pie-webc-core@0.9.0

## 0.6.0

### Minor Changes

- [Added] - link state styles ([#812](https://github.com/justeattakeaway/pie/pull/812)) by [@raoufswe](https://github.com/raoufswe)

- [Added] aria labels to the pie link ([#813](https://github.com/justeattakeaway/pie/pull/813)) by [@raoufswe](https://github.com/raoufswe)

## 0.5.0

### Minor Changes

- [Added] - pie-css helper class and modified card container to accept draggable prop ([#801](https://github.com/justeattakeaway/pie/pull/801)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.4.0

### Minor Changes

- [Added] Button and Link behaviour to the card container ([#791](https://github.com/justeattakeaway/pie/pull/791)) by [@raoufswe](https://github.com/raoufswe)

## 0.3.0

### Minor Changes

- [Added] - support outline, inverse and outline-inverse variants ([#789](https://github.com/justeattakeaway/pie/pull/789)) by [@raoufswe](https://github.com/raoufswe)

## 0.2.1

### Patch Changes

- [Changed] - add missing peer dependencies ([#784](https://github.com/justeattakeaway/pie/pull/784)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - update packages, including `@babel/core` and `@justeat/pie-design-tokens`

## 0.2.0

### Minor Changes

- [Added] - Base markup, styles and interactive states for the card in it's Link implementation ([#780](https://github.com/justeattakeaway/pie/pull/780)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.1.0

### Minor Changes

- [Added] - Initial generated code for the new component ([#766](https://github.com/justeattakeaway/pie/pull/766)) by [@jamieomaguire](https://github.com/jamieomaguire)

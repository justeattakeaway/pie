# @justeattakeaway/pie-form-label

## 0.3.0

### Minor Changes

- [Added] - set sideEffects package.json property to correctly communicate to bundlers such as webpack that js files in the component dist folders contain side effects and should therefore not be treeshaken when the entire library is imported. [Reference](https://cube.dev/blog/how-to-build-tree-shakeable-javascript-libraries) ([#854](https://github.com/justeattakeaway/pie/pull/854)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Changed] - Align author field for all packages ([#852](https://github.com/justeattakeaway/pie/pull/852)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`8c03d23f3`](https://github.com/justeattakeaway/pie/commit/8c03d23f3790744be56ed4a5b87da885108a26ab)]:
  - @justeattakeaway/pie-webc-core@0.9.1

## 0.2.0

### Minor Changes

- [Changed] - `dependency` references in package.json to use version number instead of `workspace:*` syntax. This should fix resolution errors in repos that consume packages outside of the PIE monorepo ([#824](https://github.com/justeattakeaway/pie/pull/824)) by [@siggerzz](https://github.com/siggerzz)

## 0.1.0

### Minor Changes

- [Added] - Build the Pie Form Label web component ([#820](https://github.com/justeattakeaway/pie/pull/820)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`9d689eb08`](https://github.com/justeattakeaway/pie/commit/9d689eb0818c4d686d93b5cdd9d708115a066c1e), [`9d689eb08`](https://github.com/justeattakeaway/pie/commit/9d689eb0818c4d686d93b5cdd9d708115a066c1e)]:
  - @justeattakeaway/pie-webc-core@0.9.0

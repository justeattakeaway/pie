# @justeattakeaway/pie-divider

## 0.9.2-next.0

### Patch Changes

- Updated dependencies [[`fdd981eb7`](https://github.com/justeattakeaway/pie/commit/fdd981eb739db0ff1eda27f56f3a4eca97f34652)]:
  - @justeattakeaway/pie-webc-core@0.12.0-next.0

## 0.9.1

### Patch Changes

- [Changed] - Add missing imports for dependent components ([#949](https://github.com/justeattakeaway/pie/pull/949)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Update component import section of READMEs

## 0.9.0

### Minor Changes

- [Removed] - pie-monorepo specific content from Web Component READMES ([#904](https://github.com/justeattakeaway/pie/pull/904)) by [@LTurns](https://github.com/LTurns)

## 0.8.0

### Minor Changes

- [Added] - @tagname jsdoc comment to top of component class and use new defineCustomElement function to define the components ([#905](https://github.com/justeattakeaway/pie/pull/905)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`4cab049d1`](https://github.com/justeattakeaway/pie/commit/4cab049d1e78196bcd4411efba8d82d86f7a4f06)]:
  - @justeattakeaway/pie-webc-core@0.11.0

## 0.7.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- Updated dependencies [[`e50b0fe60`](https://github.com/justeattakeaway/pie/commit/e50b0fe60d1be37ac48923316bef8e5c181c7d9e)]:
  - @justeattakeaway/pie-webc-core@0.10.0

## 0.6.0

### Minor Changes

- [Added] - set sideEffects package.json property to correctly communicate to bundlers such as webpack that js files in the component dist folders contain side effects and should therefore not be treeshaken when the entire library is imported. [Reference](https://cube.dev/blog/how-to-build-tree-shakeable-javascript-libraries) ([#854](https://github.com/justeattakeaway/pie/pull/854)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Changed] - Align author field for all packages ([#852](https://github.com/justeattakeaway/pie/pull/852)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`8c03d23f3`](https://github.com/justeattakeaway/pie/commit/8c03d23f3790744be56ed4a5b87da885108a26ab)]:
  - @justeattakeaway/pie-webc-core@0.9.1

## 0.5.0

### Minor Changes

- [Changed] - `dependency` references in package.json to use version number instead of `workspace:*` syntax. This should fix resolution errors in repos that consume packages outside of the PIE monorepo ([#824](https://github.com/justeattakeaway/pie/pull/824)) by [@siggerzz](https://github.com/siggerzz)

## 0.4.1

### Patch Changes

- Updated dependencies [[`9d689eb08`](https://github.com/justeattakeaway/pie/commit/9d689eb0818c4d686d93b5cdd9d708115a066c1e), [`9d689eb08`](https://github.com/justeattakeaway/pie/commit/9d689eb0818c4d686d93b5cdd9d708115a066c1e)]:
  - @justeattakeaway/pie-webc-core@0.9.0

## 0.4.0

### Minor Changes

- [Added] - allow the link component to behave like a button ([#748](https://github.com/justeattakeaway/pie/pull/748)) by [@raoufswe](https://github.com/raoufswe)

  [Changed] - fixed visual tests for the link and divider components

### Patch Changes

- Updated dependencies [[`ebd324485`](https://github.com/justeattakeaway/pie/commit/ebd3244852a76339d49f50d413197dbc683aef83)]:
  - @justeattakeaway/pie-webc-core@0.8.0

## 0.3.0

### Minor Changes

- [Updated] - Export all of `defs.ts` file from component `index.ts` files ([#722](https://github.com/justeattakeaway/pie/pull/722)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.2.0

### Minor Changes

- [Added] pie divider component ([#704](https://github.com/justeattakeaway/pie/pull/704)) by [@raoufswe](https://github.com/raoufswe)

- [Changed] - skip visual tests ([#709](https://github.com/justeattakeaway/pie/pull/709)) by [@raoufswe](https://github.com/raoufswe)

- [Changed] extend ts config using relative paths ([#704](https://github.com/justeattakeaway/pie/pull/704)) by [@raoufswe](https://github.com/raoufswe)

## 0.1.0

### Minor Changes

- [Added] - Create a skeleton divider web component using our component generator ([#693](https://github.com/justeattakeaway/pie/pull/693)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - init pie link ([#707](https://github.com/justeattakeaway/pie/pull/707)) by [@raoufswe](https://github.com/raoufswe)

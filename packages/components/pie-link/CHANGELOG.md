# @justeattakeaway/pie-link

## 0.11.2-next.0

### Patch Changes

- Updated dependencies [[`81436ce3c`](https://github.com/justeattakeaway/pie/commit/81436ce3c0625534703dcddbd97d4a571c44013e)]:
  - @justeattakeaway/pie-webc-core@0.12.0-next.0

## 0.11.1

### Patch Changes

- [Changed] - Add missing imports for dependent components ([#949](https://github.com/justeattakeaway/pie/pull/949)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Update component import section of READMEs

## 0.11.0

### Minor Changes

- [Removed] - pie-monorepo specific content from Web Component READMES ([#904](https://github.com/justeattakeaway/pie/pull/904)) by [@LTurns](https://github.com/LTurns)

## 0.10.0

### Minor Changes

- [Added] - @tagname jsdoc comment to top of component class and use new defineCustomElement function to define the components ([#905](https://github.com/justeattakeaway/pie/pull/905)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`4cab049d1`](https://github.com/justeattakeaway/pie/commit/4cab049d1e78196bcd4411efba8d82d86f7a4f06)]:
  - @justeattakeaway/pie-webc-core@0.11.0

## 0.9.0

### Minor Changes

- [Fixed] - Hide `underline` and `iconPlacement` props when `isStandalone` is set to false in storybook ([#885](https://github.com/justeattakeaway/pie/pull/885)) by [@raoufswe](https://github.com/raoufswe)

  [Fixed] - The touch target area is much larger than the text when `isStandalone` is set to true

## 0.8.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- Updated dependencies [[`e50b0fe60`](https://github.com/justeattakeaway/pie/commit/e50b0fe60d1be37ac48923316bef8e5c181c7d9e)]:
  - @justeattakeaway/pie-webc-core@0.10.0

## 0.7.0

### Minor Changes

- [Added] - set sideEffects package.json property to correctly communicate to bundlers such as webpack that js files in the component dist folders contain side effects and should therefore not be treeshaken when the entire library is imported. [Reference](https://cube.dev/blog/how-to-build-tree-shakeable-javascript-libraries) ([#854](https://github.com/justeattakeaway/pie/pull/854)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Changed] - Align author field for all packages ([#852](https://github.com/justeattakeaway/pie/pull/852)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`8c03d23f3`](https://github.com/justeattakeaway/pie/commit/8c03d23f3790744be56ed4a5b87da885108a26ab)]:
  - @justeattakeaway/pie-webc-core@0.9.1

## 0.6.0

### Minor Changes

- [Fixed] - The `reverse` value of the `underline` prop can only be used if `isStandalone` is set to `true` ([#834](https://github.com/justeattakeaway/pie/pull/834)) by [@raoufswe](https://github.com/raoufswe)

  [Fixed] - When the `isStandalone` prop is `false`, icon's cannot be shown.

  [Fixed] - When the link is small, the icon doesn't seem to be vertically centered with the text.

  [Fixed] - The spacing between the text and icon should be fixed / hugging the length of the text.

  [Fixed] - focus styles for the link component

- [Changed] - `dependency` references in package.json to use version number instead of `workspace:*` syntax. This should fix resolution errors in repos that consume packages outside of the PIE monorepo ([#824](https://github.com/justeattakeaway/pie/pull/824)) by [@siggerzz](https://github.com/siggerzz)

## 0.5.0

### Minor Changes

- [Added] - Build the Pie Form Label web component ([#820](https://github.com/justeattakeaway/pie/pull/820)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`9d689eb08`](https://github.com/justeattakeaway/pie/commit/9d689eb0818c4d686d93b5cdd9d708115a066c1e), [`9d689eb08`](https://github.com/justeattakeaway/pie/commit/9d689eb0818c4d686d93b5cdd9d708115a066c1e)]:
  - @justeattakeaway/pie-webc-core@0.9.0

## 0.4.0

### Minor Changes

- [Added] - link state styles ([#812](https://github.com/justeattakeaway/pie/pull/812)) by [@raoufswe](https://github.com/raoufswe)

- [Added] aria labels to the pie link ([#813](https://github.com/justeattakeaway/pie/pull/813)) by [@raoufswe](https://github.com/raoufswe)

## 0.3.0

### Minor Changes

- [Added] - allow the link component to behave like a button ([#748](https://github.com/justeattakeaway/pie/pull/748)) by [@raoufswe](https://github.com/raoufswe)

  [Changed] - fixed visual tests for the link and divider components

- [Changed] - Update RTL mixin to infer dir by default and document ([#745](https://github.com/justeattakeaway/pie/pull/745)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - an icon slot to pie link ([#727](https://github.com/justeattakeaway/pie/pull/727)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`ebd324485`](https://github.com/justeattakeaway/pie/commit/ebd3244852a76339d49f50d413197dbc683aef83)]:
  - @justeattakeaway/pie-webc-core@0.8.0

## 0.2.0

### Minor Changes

- [Updated] - Export all of `defs.ts` file from component `index.ts` files ([#722](https://github.com/justeattakeaway/pie/pull/722)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.1.0

### Minor Changes

- [Changed] - skip visual tests ([#709](https://github.com/justeattakeaway/pie/pull/709)) by [@raoufswe](https://github.com/raoufswe)

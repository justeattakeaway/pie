# @justeattakeaway/pie-form-label

## 0.12.0

### Minor Changes

- [Added] - focusing logic using `focusTarget` ([#1257](https://github.com/justeattakeaway/pie/pull/1257)) by [@fernandofranca](https://github.com/fernandofranca)

### Patch Changes

- Updated dependencies [[`86791bd11`](https://github.com/justeattakeaway/pie/commit/86791bd11b7b5e53f171b212699831a79ec4e2d2)]:
  - @justeattakeaway/pie-webc-core@0.18.0

## 0.11.0

### Minor Changes

- [Changed] - Visual tests to only take screenshots in 375px ([#1188](https://github.com/justeattakeaway/pie/pull/1188)) by [@JoshuaNg2332](https://github.com/JoshuaNg2332)

### Patch Changes

- [Fixed] - Components props consistency issues ([#1141](https://github.com/justeattakeaway/pie/pull/1141)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.10.1

### Patch Changes

- [Removed] - custom-elements.json not needed in source control ([#1181](https://github.com/justeattakeaway/pie/pull/1181)) by [@ashleynolan](https://github.com/ashleynolan)

- Updated dependencies [[`2763c522a`](https://github.com/justeattakeaway/pie/commit/2763c522a9d8df376c0353c3ba8db5dbf9410c08)]:
  - @justeattakeaway/pie-webc-core@0.17.1

## 0.10.0

### Minor Changes

- [Added] - React base TypeScript types ([#1164](https://github.com/justeattakeaway/pie/pull/1164)) by [@fernandofranca](https://github.com/fernandofranca)

  [Changed] - set optional props as optional

### Patch Changes

- Updated dependencies [[`918593afd`](https://github.com/justeattakeaway/pie/commit/918593afd939e8c911542235a5d861680ceba2d0)]:
  - @justeattakeaway/pie-webc-core@0.17.0

## 0.9.0

### Minor Changes

- [Changed] - Added `@justeattakeaway/pie-wrapper-react` as a devDependency as `build` now relies on the publish `add-react-wrapper` executable ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - Add new `create:manifest` script to create `custom-elements.json` in the components root directory. ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

  [Added] - `custom-elements-manifest.config.mjs`.
  [Changed] - `package.json` to correctly export the produced `custom-elements.json`.

### Patch Changes

- Updated dependencies [[`320ee9d4b`](https://github.com/justeattakeaway/pie/commit/320ee9d4b53df60d2e69256c5a64c7abfbfbae16), [`4c65a8176`](https://github.com/justeattakeaway/pie/commit/4c65a8176273f3883dc2be2d0c8a33aef56f8993), [`320ee9d4b`](https://github.com/justeattakeaway/pie/commit/320ee9d4b53df60d2e69256c5a64c7abfbfbae16)]:
  - @justeattakeaway/pie-webc-core@0.16.0

## 0.8.5

### Patch Changes

- Updated dependencies [[`687bdd904`](https://github.com/justeattakeaway/pie/commit/687bdd90475fef58a492c980a7f7d9261ee94eb9)]:
  - @justeattakeaway/pie-webc-core@0.15.0

## 0.8.4

### Patch Changes

- Updated dependencies [[`c4b78bf9a`](https://github.com/justeattakeaway/pie/commit/c4b78bf9a42e165c8feed20197fbe7d5875a9dd4), [`c4b78bf9a`](https://github.com/justeattakeaway/pie/commit/c4b78bf9a42e165c8feed20197fbe7d5875a9dd4)]:
  - @justeattakeaway/pie-webc-core@0.14.0

## 0.8.3

### Patch Changes

- Updated dependencies [[`9a3a1db82`](https://github.com/justeattakeaway/pie/commit/9a3a1db82ffd69e9583721b703cd85ac1d34e1f3), [`9a3a1db82`](https://github.com/justeattakeaway/pie/commit/9a3a1db82ffd69e9583721b703cd85ac1d34e1f3)]:
  - @justeattakeaway/pie-webc-core@0.13.0

## 0.8.2

### Patch Changes

- Updated dependencies [[`afb4b53b9`](https://github.com/justeattakeaway/pie/commit/afb4b53b94c016116155f81054778df3b856b8f4)]:
  - @justeattakeaway/pie-webc-core@0.12.0

## 0.8.2-next.0

### Patch Changes

- Updated dependencies [[`fdd981eb7`](https://github.com/justeattakeaway/pie/commit/fdd981eb739db0ff1eda27f56f3a4eca97f34652)]:
  - @justeattakeaway/pie-webc-core@0.12.0-next.0

## 0.8.1

### Patch Changes

- [Changed] - Add missing imports for dependent components ([#949](https://github.com/justeattakeaway/pie/pull/949)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Update component import section of READMEs

## 0.8.0

### Minor Changes

- [Fixed] - Updated the readme file to be aligned with other components ([#947](https://github.com/justeattakeaway/pie/pull/947)) by [@raoufswe](https://github.com/raoufswe)

## 0.7.0

### Minor Changes

- [Removed] - pie-monorepo specific content from Web Component READMES ([#904](https://github.com/justeattakeaway/pie/pull/904)) by [@LTurns](https://github.com/LTurns)

## 0.6.0

### Minor Changes

- [Fixed] - If the optional wraps onto a second line and there is no label to the left, there should be no additional padding. ([#924](https://github.com/justeattakeaway/pie/pull/924)) by [@raoufswe](https://github.com/raoufswe)

  [Fixed] - When in RTL, the optional tag should be positioned to the left of the label.

## 0.5.0

### Minor Changes

- [Added] - @tagname jsdoc comment to top of component class and use new defineCustomElement function to define the components ([#905](https://github.com/justeattakeaway/pie/pull/905)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`4cab049d1`](https://github.com/justeattakeaway/pie/commit/4cab049d1e78196bcd4411efba8d82d86f7a4f06)]:
  - @justeattakeaway/pie-webc-core@0.11.0

## 0.4.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- Updated dependencies [[`e50b0fe60`](https://github.com/justeattakeaway/pie/commit/e50b0fe60d1be37ac48923316bef8e5c181c7d9e)]:
  - @justeattakeaway/pie-webc-core@0.10.0

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

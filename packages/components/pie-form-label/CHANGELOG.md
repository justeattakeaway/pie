# @justeattakeaway/pie-form-label

## 0.18.1

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@3.0.0

## 0.18.0

### Minor Changes

- [Changed] - Upgrade pie-design-tokens to v7.6.1 ([#2556](https://github.com/justeattakeaway/pie/pull/2556)) by [@raoufswe](https://github.com/raoufswe)

  [Changed] - Refactor several core component styles to use the new brand refresh content opacity tokens

### Patch Changes

- Updated dependencies [[`6d7157b`](https://github.com/justeattakeaway/pie/commit/6d7157b6a2fb54f8136427c76220e5beaeee8575), [`e68681a`](https://github.com/justeattakeaway/pie/commit/e68681ac1b3242e88240a65446164522d048c26e)]:
  - @justeattakeaway/pie-webc-core@2.0.0

## 0.17.0

### Minor Changes

- [Updated] - use the :dir() pseudo-class for RTL styling instead of the RTL mixin to ensure proper support during SSR. ([#2518](https://github.com/justeattakeaway/pie/pull/2518)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`afd39cf`](https://github.com/justeattakeaway/pie/commit/afd39cfd880f10fad92c2e2d8023dace26110229), [`afd39cf`](https://github.com/justeattakeaway/pie/commit/afd39cfd880f10fad92c2e2d8023dace26110229)]:
  - @justeattakeaway/pie-webc-core@1.1.0

## 0.16.4

### Patch Changes

- [Changed] - Add consistent git info and storybook url to package.json file ([#2443](https://github.com/justeattakeaway/pie/pull/2443)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.16.3

### Patch Changes

- [Fixed] display props for web components top level element ([#2403](https://github.com/justeattakeaway/pie/pull/2403)) by [@fernandofranca](https://github.com/fernandofranca)

- [Fixed] layout issue replacing the component wrapper margin with padding ([#2403](https://github.com/justeattakeaway/pie/pull/2403)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.16.2

### Patch Changes

- [Changed] - correct formatting in readme ([#2395](https://github.com/justeattakeaway/pie/pull/2395)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.16.1

### Patch Changes

- [Changed] - Updated Readme content and format ([#2383](https://github.com/justeattakeaway/pie/pull/2383)) by [@jamieomaguire](https://github.com/jamieomaguire)

- Updated dependencies [[`8866307`](https://github.com/justeattakeaway/pie/commit/8866307deed67e698088e731bb87e5e6db45f0e3)]:
  - @justeattakeaway/pie-webc-core@1.0.0

## 0.16.0

### Minor Changes

- [Changed] - Use lit customElement decorator ([#2286](https://github.com/justeattakeaway/pie/pull/2286)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`07b8fca`](https://github.com/justeattakeaway/pie/commit/07b8fca26662f794e8e5f6137b1ee7c7f755f6b0)]:
  - @justeattakeaway/pie-webc-core@0.26.0

## 0.15.1

### Patch Changes

- [Changed] - use a centralised TS declaration file for common duplicated declares ([#2303](https://github.com/justeattakeaway/pie/pull/2303)) by [@jamieomaguire](https://github.com/jamieomaguire)

- Updated dependencies [[`edb0490`](https://github.com/justeattakeaway/pie/commit/edb049031b49a1d8a752c93db4cb164aa90eed3e)]:
  - @justeattakeaway/pie-webc-core@0.25.1

## 0.15.0

### Minor Changes

- [Changed] - Add a v property to all components using vite to bake the version number into the code ([#2301](https://github.com/justeattakeaway/pie/pull/2301)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`87e902f`](https://github.com/justeattakeaway/pie/commit/87e902f4995af214770200e430eaec2bad7d21b3)]:
  - @justeattakeaway/pie-webc-core@0.25.0

## 0.14.5

### Patch Changes

- [Added] - repository and homepage references to packages ([#2246](https://github.com/justeattakeaway/pie/pull/2246)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.14.4

### Patch Changes

- [Changed] - Update prop definitions to align with conventions ([#2000](https://github.com/justeattakeaway/pie/pull/2000)) by [@xander-marjoram](https://github.com/xander-marjoram)

  - Use component props interface for all prop type definitions (e.g., `CardProps['href']` instead of just `string`).
    - Don't use `?` when declaring props, this comes from the interface anyway.
  - If the prop has a default value, use that from `defaultProps`, and let TS infer the type.
  - Make sure all uses of `@property()` have a `type`.
  - `@state` properties should be private and prefixed with an underscore.
  - Use `!` when a `@query` property is guaranteed to exist, reducing the complexity of the code.

## 0.14.3

### Patch Changes

- [Fixed] - Imports to align with new linting rule ([#1622](https://github.com/justeattakeaway/pie/pull/1622)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Removed] - Empty lines at the start of some files

- Updated dependencies [[`efb35af66`](https://github.com/justeattakeaway/pie/commit/efb35af6604ca86d0b39ec01421a376050698edf)]:
  - @justeattakeaway/pie-webc-core@0.24.2

## 0.14.2

### Patch Changes

- Updated dependencies [[`b14535438`](https://github.com/justeattakeaway/pie/commit/b14535438da533aeb9a5520c2a239203dafb0c9a)]:
  - @justeattakeaway/pie-webc-core@0.24.1

## 0.14.1

### Patch Changes

- [Added] - pie-css as a dev dependency ([#1667](https://github.com/justeattakeaway/pie/pull/1667)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - updated component generator

## 0.14.0

### Minor Changes

- [Added] - data test id to leading and trailing label content ([#1666](https://github.com/justeattakeaway/pie/pull/1666)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.13.6

### Patch Changes

- Updated dependencies [[`ff65968f6`](https://github.com/justeattakeaway/pie/commit/ff65968f61ef9c998662416f72c1b9999567d9f7)]:
  - @justeattakeaway/pie-webc-core@0.24.0

## 0.13.5

### Patch Changes

- Updated dependencies [[`bfb142f84`](https://github.com/justeattakeaway/pie/commit/bfb142f848a06a8ac6662b300289e34eb22bb6bd)]:
  - @justeattakeaway/pie-webc-core@0.23.0

## 0.13.4

### Patch Changes

- Updated dependencies [[`ab5cad99b`](https://github.com/justeattakeaway/pie/commit/ab5cad99bd66e4bd37804b6173bedc37217592d8)]:
  - @justeattakeaway/pie-webc-core@0.22.0

## 0.13.3

### Patch Changes

- [Removed] - Unneeded `bundledJetDeps` array (patch versions are required because pie-components-config is a dev dependency) ([#1378](https://github.com/justeattakeaway/pie/pull/1378)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`9bdd9c947`](https://github.com/justeattakeaway/pie/commit/9bdd9c947110688f509140bfa480dbe8d7770ff9)]:
  - @justeattakeaway/pie-webc-core@0.21.1

## 0.13.2

### Patch Changes

- Updated dependencies [[`1086464e8`](https://github.com/justeattakeaway/pie/commit/1086464e86fbce635f4a30783b0c145b7f5854e3)]:
  - @justeattakeaway/pie-webc-core@0.21.0

## 0.13.1

### Patch Changes

- [Added] - pieMetadata object to component package.json files with a componentStatus property to query when needing the current component status ([#1361](https://github.com/justeattakeaway/pie/pull/1361)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.13.0

### Minor Changes

- [Changed] - Update tsconfig target to es2021 ([#1341](https://github.com/justeattakeaway/pie/pull/1341)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`130f1aaa3`](https://github.com/justeattakeaway/pie/commit/130f1aaa32ccd464b213febf75dd147e6b8aecc3)]:
  - @justeattakeaway/pie-webc-core@0.20.0

## 0.12.2

### Patch Changes

- [Added] - pie-css import to playwright/index.html ([#1281](https://github.com/justeattakeaway/pie/pull/1281)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`b91297ea3`](https://github.com/justeattakeaway/pie/commit/b91297ea312cb668301b6fa01790371dcf63d830)]:
  - @justeattakeaway/pie-webc-core@0.19.1

## 0.12.1

### Patch Changes

- Updated dependencies [[`4f89146dc`](https://github.com/justeattakeaway/pie/commit/4f89146dc83c7eb72cecc0b83be6d718aa395ae1)]:
  - @justeattakeaway/pie-webc-core@0.19.0

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

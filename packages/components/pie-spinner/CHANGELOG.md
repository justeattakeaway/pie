# @justeattakeaway/pie-spinner

## 1.3.1

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@3.0.0

## 1.3.0

### Minor Changes

- [Changed] - Upgrade pie-design-tokens to v7.6.1 ([#2556](https://github.com/justeattakeaway/pie/pull/2556)) by [@raoufswe](https://github.com/raoufswe)

  [Changed] - Refactor several core component styles to use the new brand refresh content opacity tokens

### Patch Changes

- Updated dependencies [[`6d7157b`](https://github.com/justeattakeaway/pie/commit/6d7157b6a2fb54f8136427c76220e5beaeee8575), [`e68681a`](https://github.com/justeattakeaway/pie/commit/e68681ac1b3242e88240a65446164522d048c26e)]:
  - @justeattakeaway/pie-webc-core@2.0.0

## 1.2.5

### Patch Changes

- Updated dependencies [[`afd39cf`](https://github.com/justeattakeaway/pie/commit/afd39cfd880f10fad92c2e2d8023dace26110229), [`afd39cf`](https://github.com/justeattakeaway/pie/commit/afd39cfd880f10fad92c2e2d8023dace26110229)]:
  - @justeattakeaway/pie-webc-core@1.1.0

## 1.2.4

### Patch Changes

- [Changed] - Add consistent git info and storybook url to package.json file ([#2443](https://github.com/justeattakeaway/pie/pull/2443)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 1.2.3

### Patch Changes

- [Fixed] display props for web components top level element ([#2403](https://github.com/justeattakeaway/pie/pull/2403)) by [@fernandofranca](https://github.com/fernandofranca)

## 1.2.2

### Patch Changes

- [Changed] - added docs to readme ([#2394](https://github.com/justeattakeaway/pie/pull/2394)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 1.2.1

### Patch Changes

- Updated dependencies [[`8866307`](https://github.com/justeattakeaway/pie/commit/8866307deed67e698088e731bb87e5e6db45f0e3)]:
  - @justeattakeaway/pie-webc-core@1.0.0

## 1.2.0

### Minor Changes

- [Changed] - Use lit customElement decorator ([#2286](https://github.com/justeattakeaway/pie/pull/2286)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`07b8fca`](https://github.com/justeattakeaway/pie/commit/07b8fca26662f794e8e5f6137b1ee7c7f755f6b0)]:
  - @justeattakeaway/pie-webc-core@0.26.0

## 1.1.1

### Patch Changes

- [Changed] - use a centralised TS declaration file for common duplicated declares ([#2303](https://github.com/justeattakeaway/pie/pull/2303)) by [@jamieomaguire](https://github.com/jamieomaguire)

- Updated dependencies [[`edb0490`](https://github.com/justeattakeaway/pie/commit/edb049031b49a1d8a752c93db4cb164aa90eed3e)]:
  - @justeattakeaway/pie-webc-core@0.25.1

## 1.1.0

### Minor Changes

- [Changed] - Add a v property to all components using vite to bake the version number into the code ([#2301](https://github.com/justeattakeaway/pie/pull/2301)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`87e902f`](https://github.com/justeattakeaway/pie/commit/87e902f4995af214770200e430eaec2bad7d21b3)]:
  - @justeattakeaway/pie-webc-core@0.25.0

## 1.0.1

### Patch Changes

- [Added] - repository and homepage references to packages ([#2246](https://github.com/justeattakeaway/pie/pull/2246)) by [@ashleynolan](https://github.com/ashleynolan)

## 1.0.0

### Major Changes

- [Changed] - Set package version to stable/first major version ([#2030](https://github.com/justeattakeaway/pie/pull/2030)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.7.3

### Patch Changes

- [Changed] - Update prop definitions to align with conventions ([#2000](https://github.com/justeattakeaway/pie/pull/2000)) by [@xander-marjoram](https://github.com/xander-marjoram)

  - Use component props interface for all prop type definitions (e.g., `CardProps['href']` instead of just `string`).
    - Don't use `?` when declaring props, this comes from the interface anyway.
  - If the prop has a default value, use that from `defaultProps`, and let TS infer the type.
  - Make sure all uses of `@property()` have a `type`.
  - `@state` properties should be private and prefixed with an underscore.
  - Use `!` when a `@query` property is guaranteed to exist, reducing the complexity of the code.

## 0.7.2

### Patch Changes

- Updated dependencies [[`efb35af66`](https://github.com/justeattakeaway/pie/commit/efb35af6604ca86d0b39ec01421a376050698edf)]:
  - @justeattakeaway/pie-webc-core@0.24.2

## 0.7.1

### Patch Changes

- Updated dependencies [[`b14535438`](https://github.com/justeattakeaway/pie/commit/b14535438da533aeb9a5520c2a239203dafb0c9a)]:
  - @justeattakeaway/pie-webc-core@0.24.1

## 0.7.0

### Minor Changes

- [Changed] - use classes instead of attributes for styling ([#1762](https://github.com/justeattakeaway/pie/pull/1762)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.6.7

### Patch Changes

- [Added] - pie-css as a dev dependency ([#1667](https://github.com/justeattakeaway/pie/pull/1667)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - updated component generator

## 0.6.6

### Patch Changes

- [Changed] - Update default props generic helper type to include all props by default ([#1582](https://github.com/justeattakeaway/pie/pull/1582)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Naming of generic type
  [Added] - JSDoc comment

- Updated dependencies [[`ff65968f6`](https://github.com/justeattakeaway/pie/commit/ff65968f61ef9c998662416f72c1b9999567d9f7)]:
  - @justeattakeaway/pie-webc-core@0.24.0

## 0.6.5

### Patch Changes

- [Changed] - components to use a single source of truth for props default values ([#1451](https://github.com/justeattakeaway/pie/pull/1451)) by [@fernandofranca](https://github.com/fernandofranca)

- Updated dependencies [[`bfb142f84`](https://github.com/justeattakeaway/pie/commit/bfb142f848a06a8ac6662b300289e34eb22bb6bd)]:
  - @justeattakeaway/pie-webc-core@0.23.0

## 0.6.4

### Patch Changes

- Updated dependencies [[`ab5cad99b`](https://github.com/justeattakeaway/pie/commit/ab5cad99bd66e4bd37804b6173bedc37217592d8)]:
  - @justeattakeaway/pie-webc-core@0.22.0

## 0.6.3

### Patch Changes

- [Removed] - Unneeded `bundledJetDeps` array (patch versions are required because pie-components-config is a dev dependency) ([#1378](https://github.com/justeattakeaway/pie/pull/1378)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`9bdd9c947`](https://github.com/justeattakeaway/pie/commit/9bdd9c947110688f509140bfa480dbe8d7770ff9)]:
  - @justeattakeaway/pie-webc-core@0.21.1

## 0.6.2

### Patch Changes

- Updated dependencies [[`1086464e8`](https://github.com/justeattakeaway/pie/commit/1086464e86fbce635f4a30783b0c145b7f5854e3)]:
  - @justeattakeaway/pie-webc-core@0.21.0

## 0.6.1

### Patch Changes

- [Added] - pieMetadata object to component package.json files with a componentStatus property to query when needing the current component status ([#1361](https://github.com/justeattakeaway/pie/pull/1361)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.6.0

### Minor Changes

- [Changed] - Update tsconfig target to es2021 ([#1341](https://github.com/justeattakeaway/pie/pull/1341)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`130f1aaa3`](https://github.com/justeattakeaway/pie/commit/130f1aaa32ccd464b213febf75dd147e6b8aecc3)]:
  - @justeattakeaway/pie-webc-core@0.20.0

## 0.5.5

### Patch Changes

- [Removed] - box-sizing definition (it comes from pie-css instead) ([#1281](https://github.com/justeattakeaway/pie/pull/1281)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Added] - pie-css import to playwright/index.html ([#1281](https://github.com/justeattakeaway/pie/pull/1281)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`b91297ea3`](https://github.com/justeattakeaway/pie/commit/b91297ea312cb668301b6fa01790371dcf63d830)]:
  - @justeattakeaway/pie-webc-core@0.19.1

## 0.5.4

### Patch Changes

- Updated dependencies [[`4f89146dc`](https://github.com/justeattakeaway/pie/commit/4f89146dc83c7eb72cecc0b83be6d718aa395ae1)]:
  - @justeattakeaway/pie-webc-core@0.19.0

## 0.5.3

### Patch Changes

- Updated dependencies [[`86791bd11`](https://github.com/justeattakeaway/pie/commit/86791bd11b7b5e53f171b212699831a79ec4e2d2)]:
  - @justeattakeaway/pie-webc-core@0.18.0

## 0.5.2

### Patch Changes

- [Fixed] - Components props consistency issues ([#1141](https://github.com/justeattakeaway/pie/pull/1141)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.5.1

### Patch Changes

- [Removed] - custom-elements.json not needed in source control ([#1181](https://github.com/justeattakeaway/pie/pull/1181)) by [@ashleynolan](https://github.com/ashleynolan)

- Updated dependencies [[`2763c522a`](https://github.com/justeattakeaway/pie/commit/2763c522a9d8df376c0353c3ba8db5dbf9410c08)]:
  - @justeattakeaway/pie-webc-core@0.17.1

## 0.5.0

### Minor Changes

- [Added] - React base TypeScript types ([#1164](https://github.com/justeattakeaway/pie/pull/1164)) by [@fernandofranca](https://github.com/fernandofranca)

  [Changed] - set optional props as optional

### Patch Changes

- Updated dependencies [[`918593afd`](https://github.com/justeattakeaway/pie/commit/918593afd939e8c911542235a5d861680ceba2d0)]:
  - @justeattakeaway/pie-webc-core@0.17.0

## 0.4.0

### Minor Changes

- [Changed] - Added `@justeattakeaway/pie-wrapper-react` as a devDependency as `build` now relies on the publish `add-react-wrapper` executable ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - Add new `create:manifest` script to create `custom-elements.json` in the components root directory. ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

  [Added] - `custom-elements-manifest.config.mjs`.
  [Changed] - `package.json` to correctly export the produced `custom-elements.json`.

### Patch Changes

- Updated dependencies [[`320ee9d4b`](https://github.com/justeattakeaway/pie/commit/320ee9d4b53df60d2e69256c5a64c7abfbfbae16), [`4c65a8176`](https://github.com/justeattakeaway/pie/commit/4c65a8176273f3883dc2be2d0c8a33aef56f8993), [`320ee9d4b`](https://github.com/justeattakeaway/pie/commit/320ee9d4b53df60d2e69256c5a64c7abfbfbae16)]:
  - @justeattakeaway/pie-webc-core@0.16.0

## 0.3.3

### Patch Changes

- Updated dependencies [[`687bdd904`](https://github.com/justeattakeaway/pie/commit/687bdd90475fef58a492c980a7f7d9261ee94eb9)]:
  - @justeattakeaway/pie-webc-core@0.15.0

## 0.3.2

### Patch Changes

- Updated dependencies [[`c4b78bf9a`](https://github.com/justeattakeaway/pie/commit/c4b78bf9a42e165c8feed20197fbe7d5875a9dd4), [`c4b78bf9a`](https://github.com/justeattakeaway/pie/commit/c4b78bf9a42e165c8feed20197fbe7d5875a9dd4)]:
  - @justeattakeaway/pie-webc-core@0.14.0

## 0.3.1

### Patch Changes

- Updated dependencies [[`9a3a1db82`](https://github.com/justeattakeaway/pie/commit/9a3a1db82ffd69e9583721b703cd85ac1d34e1f3), [`9a3a1db82`](https://github.com/justeattakeaway/pie/commit/9a3a1db82ffd69e9583721b703cd85ac1d34e1f3)]:
  - @justeattakeaway/pie-webc-core@0.13.0

## 0.3.0

### Minor Changes

- [Changed] - spinner sizes should be fully spelt out such as large not l ([#1036](https://github.com/justeattakeaway/pie/pull/1036)) by [@siggerzz](https://github.com/siggerzz)

## 0.2.2

### Patch Changes

- Updated dependencies [[`afb4b53b9`](https://github.com/justeattakeaway/pie/commit/afb4b53b94c016116155f81054778df3b856b8f4)]:
  - @justeattakeaway/pie-webc-core@0.12.0

## 0.2.2-next.0

### Patch Changes

- Updated dependencies [[`fdd981eb7`](https://github.com/justeattakeaway/pie/commit/fdd981eb739db0ff1eda27f56f3a4eca97f34652)]:
  - @justeattakeaway/pie-webc-core@0.12.0-next.0

## 0.2.1

### Patch Changes

- [Changed] - Add missing imports for dependent components ([#949](https://github.com/justeattakeaway/pie/pull/949)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Update component import section of READMEs

## 0.2.0

### Minor Changes

- [Added] - Spinner component ([#948](https://github.com/justeattakeaway/pie/pull/948)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - `isLoading` prop to `pie-icon-button` ([#953](https://github.com/justeattakeaway/pie/pull/953)) by [@raoufswe](https://github.com/raoufswe)

  [Added] - `visually-hidden` mixin to `pie-css` and use it in components when needed
  [Added] - `button-interactive-states` mixin to use in `pie-icon-button` and `pie-button`

## 0.1.0

### Minor Changes

- [Fixed] - Updated the readme file to be aligned with other components ([#947](https://github.com/justeattakeaway/pie/pull/947)) by [@raoufswe](https://github.com/raoufswe)

# @justeattakeaway/pie-notification

## 0.8.0

### Minor Changes

- [Added] - the code section of the notification component ([#1478](https://github.com/justeattakeaway/pie/pull/1478)) by [@raoufswe](https://github.com/raoufswe)

## 0.7.0

### Minor Changes

- [Added] - Accessibility attributes ([#1447](https://github.com/justeattakeaway/pie/pull/1447)) by [@raoufswe](https://github.com/raoufswe)

## 0.6.1

### Patch Changes

- [Changed] - components to use a single source of truth for props default values ([#1451](https://github.com/justeattakeaway/pie/pull/1451)) by [@fernandofranca](https://github.com/fernandofranca)

- Updated dependencies [[`bfb142f84`](https://github.com/justeattakeaway/pie/commit/bfb142f848a06a8ac6662b300289e34eb22bb6bd), [`bfb142f84`](https://github.com/justeattakeaway/pie/commit/bfb142f848a06a8ac6662b300289e34eb22bb6bd), [`abaadfddc`](https://github.com/justeattakeaway/pie/commit/abaadfddc651f9b2516e94449211bbd19a1bf651)]:
  - @justeattakeaway/pie-webc-core@0.23.0
  - @justeattakeaway/pie-icon-button@0.28.6
  - @justeattakeaway/pie-icons-webc@0.24.0

## 0.6.0

### Minor Changes

- [Changed] - address design review notes ([#1435](https://github.com/justeattakeaway/pie/pull/1435)) by [@raoufswe](https://github.com/raoufswe)

  - The icons size should be 24 x 24px
  - The top padding of the icon is currently 4px, needs to be reduced to 2px
  - The title should use token 'heading-s/narrow' (16px, 24lh)
  - Update the story title text to `heading` to be consistent
  - The space between the title and supporting text should be 4px
  - The supporting text shouldn't run underneath the close icon.
  - When 'stacked actions = true', the leading action should be above.

### Patch Changes

- [Added] - `position` prop - Specifies whether the notification should be displayed inline or full width ([#1388](https://github.com/justeattakeaway/pie/pull/1388)) by [@thejfreitas](https://github.com/thejfreitas)

## 0.5.5

### Patch Changes

- Updated dependencies [[`ab5cad99b`](https://github.com/justeattakeaway/pie/commit/ab5cad99bd66e4bd37804b6173bedc37217592d8)]:
  - @justeattakeaway/pie-webc-core@0.22.0
  - @justeattakeaway/pie-icon-button@0.28.5
  - @justeattakeaway/pie-icons-webc@0.23.1

## 0.5.4

### Patch Changes

- Updated dependencies [[`9eb62f192`](https://github.com/justeattakeaway/pie/commit/9eb62f19282a96a6abaa7400ebf4188febda97b2), [`d325ed167`](https://github.com/justeattakeaway/pie/commit/d325ed167056d6d3e14f8b4535c9d3b2e8c16b90)]:
  - @justeattakeaway/pie-icons-webc@0.23.0
  - @justeattakeaway/pie-icon-button@0.28.4

## 0.5.3

### Patch Changes

- [Removed] - Unneeded `bundledJetDeps` array (patch versions are required because pie-components-config is a dev dependency) ([#1378](https://github.com/justeattakeaway/pie/pull/1378)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Changed] - update pie-icons-webc imports ([#1378](https://github.com/justeattakeaway/pie/pull/1378)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`9bdd9c947`](https://github.com/justeattakeaway/pie/commit/9bdd9c947110688f509140bfa480dbe8d7770ff9), [`9bdd9c947`](https://github.com/justeattakeaway/pie/commit/9bdd9c947110688f509140bfa480dbe8d7770ff9), [`9bdd9c947`](https://github.com/justeattakeaway/pie/commit/9bdd9c947110688f509140bfa480dbe8d7770ff9)]:
  - @justeattakeaway/pie-icons-webc@0.22.0
  - @justeattakeaway/pie-icon-button@0.28.3
  - @justeattakeaway/pie-webc-core@0.21.1

## 0.5.2

### Patch Changes

- Updated dependencies [[`1086464e8`](https://github.com/justeattakeaway/pie/commit/1086464e86fbce635f4a30783b0c145b7f5854e3)]:
  - @justeattakeaway/pie-webc-core@0.21.0
  - @justeattakeaway/pie-icons-webc@0.21.0
  - @justeattakeaway/pie-icon-button@0.28.2

## 0.5.1

### Patch Changes

- [Added] - pieMetadata object to component package.json files with a componentStatus property to query when needing the current component status ([#1361](https://github.com/justeattakeaway/pie/pull/1361)) by [@jamieomaguire](https://github.com/jamieomaguire)

- Updated dependencies [[`a7495cba5`](https://github.com/justeattakeaway/pie/commit/a7495cba55203b5dea71e9c51d50cb04fe4bb759)]:
  - @justeattakeaway/pie-icon-button@0.28.1

## 0.5.0

### Minor Changes

- [Added] - isDismissible, leadingAction, supportingAction, hasStackedActions ([#1290](https://github.com/justeattakeaway/pie/pull/1290)) by [@thejfreitas](https://github.com/thejfreitas)

## 0.4.0

### Minor Changes

- [Changed] - Update tsconfig target to es2021 ([#1341](https://github.com/justeattakeaway/pie/pull/1341)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`130f1aaa3`](https://github.com/justeattakeaway/pie/commit/130f1aaa32ccd464b213febf75dd147e6b8aecc3)]:
  - @justeattakeaway/pie-icon-button@0.28.0
  - @justeattakeaway/pie-webc-core@0.20.0
  - @justeattakeaway/pie-icons-webc@0.20.0

## 0.3.5

### Patch Changes

- [Removed] - box-sizing definition (it comes from pie-css instead) ([#1281](https://github.com/justeattakeaway/pie/pull/1281)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Added] - pie-css import to playwright/index.html ([#1281](https://github.com/justeattakeaway/pie/pull/1281)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`b91297ea3`](https://github.com/justeattakeaway/pie/commit/b91297ea312cb668301b6fa01790371dcf63d830), [`2c85aecb9`](https://github.com/justeattakeaway/pie/commit/2c85aecb9da3989c5a3111a140a87be33d441094)]:
  - @justeattakeaway/pie-webc-core@0.19.1
  - @justeattakeaway/pie-icon-button@0.27.7
  - @justeattakeaway/pie-icons-webc@0.19.1

## 0.3.4

### Patch Changes

- [Added] - isOpen, variant, isCompact, heading, headingLevel, hideIcon properties ([#1254](https://github.com/justeattakeaway/pie/pull/1254)) by [@thejfreitas](https://github.com/thejfreitas)

  [Added] - styles, basic interactions and unit tests
  [Changed] - Storybook's playground

## 0.3.3

### Patch Changes

- Updated dependencies [[`4f89146dc`](https://github.com/justeattakeaway/pie/commit/4f89146dc83c7eb72cecc0b83be6d718aa395ae1)]:
  - @justeattakeaway/pie-webc-core@0.19.0

## 0.3.2

### Patch Changes

- Updated dependencies [[`86791bd11`](https://github.com/justeattakeaway/pie/commit/86791bd11b7b5e53f171b212699831a79ec4e2d2)]:
  - @justeattakeaway/pie-webc-core@0.18.0

## 0.3.1

### Patch Changes

- [Removed] - custom-elements.json not needed in source control ([#1181](https://github.com/justeattakeaway/pie/pull/1181)) by [@ashleynolan](https://github.com/ashleynolan)

- Updated dependencies [[`2763c522a`](https://github.com/justeattakeaway/pie/commit/2763c522a9d8df376c0353c3ba8db5dbf9410c08)]:
  - @justeattakeaway/pie-webc-core@0.17.1

## 0.3.0

### Minor Changes

- [Added] - React base TypeScript types ([#1164](https://github.com/justeattakeaway/pie/pull/1164)) by [@fernandofranca](https://github.com/fernandofranca)

  [Changed] - set optional props as optional

### Patch Changes

- Updated dependencies [[`918593afd`](https://github.com/justeattakeaway/pie/commit/918593afd939e8c911542235a5d861680ceba2d0)]:
  - @justeattakeaway/pie-webc-core@0.17.0

## 0.2.0

### Minor Changes

- [Changed] - Added `@justeattakeaway/pie-wrapper-react` as a devDependency as `build` now relies on the publish `add-react-wrapper` executable ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - Add new `create:manifest` script to create `custom-elements.json` in the components root directory. ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

  [Added] - `custom-elements-manifest.config.mjs`.
  [Changed] - `package.json` to correctly export the produced `custom-elements.json`.

### Patch Changes

- Updated dependencies [[`320ee9d4b`](https://github.com/justeattakeaway/pie/commit/320ee9d4b53df60d2e69256c5a64c7abfbfbae16), [`4c65a8176`](https://github.com/justeattakeaway/pie/commit/4c65a8176273f3883dc2be2d0c8a33aef56f8993), [`320ee9d4b`](https://github.com/justeattakeaway/pie/commit/320ee9d4b53df60d2e69256c5a64c7abfbfbae16)]:
  - @justeattakeaway/pie-webc-core@0.16.0

## 0.1.5

### Patch Changes

- Updated dependencies [[`687bdd904`](https://github.com/justeattakeaway/pie/commit/687bdd90475fef58a492c980a7f7d9261ee94eb9)]:
  - @justeattakeaway/pie-webc-core@0.15.0

## 0.1.4

### Patch Changes

- Updated dependencies [[`c4b78bf9a`](https://github.com/justeattakeaway/pie/commit/c4b78bf9a42e165c8feed20197fbe7d5875a9dd4), [`c4b78bf9a`](https://github.com/justeattakeaway/pie/commit/c4b78bf9a42e165c8feed20197fbe7d5875a9dd4)]:
  - @justeattakeaway/pie-webc-core@0.14.0

## 0.1.3

### Patch Changes

- Updated dependencies [[`9a3a1db82`](https://github.com/justeattakeaway/pie/commit/9a3a1db82ffd69e9583721b703cd85ac1d34e1f3), [`9a3a1db82`](https://github.com/justeattakeaway/pie/commit/9a3a1db82ffd69e9583721b703cd85ac1d34e1f3)]:
  - @justeattakeaway/pie-webc-core@0.13.0

## 0.1.2

### Patch Changes

- Updated dependencies [[`afb4b53b9`](https://github.com/justeattakeaway/pie/commit/afb4b53b94c016116155f81054778df3b856b8f4)]:
  - @justeattakeaway/pie-webc-core@0.12.0

## 0.1.2-next.0

### Patch Changes

- Updated dependencies [[`fdd981eb7`](https://github.com/justeattakeaway/pie/commit/fdd981eb739db0ff1eda27f56f3a4eca97f34652)]:
  - @justeattakeaway/pie-webc-core@0.12.0-next.0

## 0.1.1

### Patch Changes

- [Changed] - Add missing imports for dependent components ([#949](https://github.com/justeattakeaway/pie/pull/949)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Update component import section of READMEs

## 0.1.0

### Minor Changes

- [Fixed] - Updated the readme file to be aligned with other components ([#947](https://github.com/justeattakeaway/pie/pull/947)) by [@raoufswe](https://github.com/raoufswe)

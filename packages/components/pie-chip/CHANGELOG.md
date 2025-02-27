# @justeattakeaway/pie-chip

## 0.10.1

### Patch Changes

- [Added] - repository and homepage references to packages ([#2246](https://github.com/justeattakeaway/pie/pull/2246)) by [@ashleynolan](https://github.com/ashleynolan)

- Updated dependencies [[`46ebcee`](https://github.com/justeattakeaway/pie/commit/46ebceec9e0a16f9b4663daa72091abf687e839f)]:
  - @justeattakeaway/pie-spinner@1.0.1

## 0.10.0

### Minor Changes

- [Changed] - active and hover styles to support dark mode ([#2230](https://github.com/justeattakeaway/pie/pull/2230)) by [@dandel10n](https://github.com/dandel10n)

## 0.9.7

### Patch Changes

- Updated dependencies [[`e3f89be`](https://github.com/justeattakeaway/pie/commit/e3f89be94893177ec1ad4e38af8f996729c2caad)]:
  - @justeattakeaway/pie-icons-webc@1.5.0

## 0.9.6

### Patch Changes

- Updated dependencies [[`084bb04`](https://github.com/justeattakeaway/pie/commit/084bb04cb9547d2cce3d7d54f2364a25545703fe)]:
  - @justeattakeaway/pie-icons-webc@1.4.0

## 0.9.5

### Patch Changes

- Updated dependencies [[`a643b87`](https://github.com/justeattakeaway/pie/commit/a643b876e66d86effc318d0f0bb98b06508ee003)]:
  - @justeattakeaway/pie-icons-webc@1.3.0

## 0.9.4

### Patch Changes

- Updated dependencies [[`78d17bb`](https://github.com/justeattakeaway/pie/commit/78d17bbdb36993c1e158d14aa6f7a6448fe34028)]:
  - @justeattakeaway/pie-icons-webc@1.2.0

## 0.9.3

### Patch Changes

- Updated dependencies [[`7df4bd2ff`](https://github.com/justeattakeaway/pie/commit/7df4bd2ffd332dcd8c01f1825beb22bd316ec13f)]:
  - @justeattakeaway/pie-spinner@1.0.0

## 0.9.2

### Patch Changes

- [Changed] - Update prop definitions to align with conventions ([#2000](https://github.com/justeattakeaway/pie/pull/2000)) by [@xander-marjoram](https://github.com/xander-marjoram)

  - Use component props interface for all prop type definitions (e.g., `CardProps['href']` instead of just `string`).
    - Don't use `?` when declaring props, this comes from the interface anyway.
  - If the prop has a default value, use that from `defaultProps`, and let TS infer the type.
  - Make sure all uses of `@property()` have a `type`.
  - `@state` properties should be private and prefixed with an underscore.
  - Use `!` when a `@query` property is guaranteed to exist, reducing the complexity of the code.

- Updated dependencies [[`8d03ebaae`](https://github.com/justeattakeaway/pie/commit/8d03ebaae477b6a68a7d2af53224c05e787c7f4f)]:
  - @justeattakeaway/pie-spinner@0.7.3

## 0.9.1

### Patch Changes

- Updated dependencies [[`88d9d42ff`](https://github.com/justeattakeaway/pie/commit/88d9d42ff5652fb8de49c2fdffab0220f32b6f5a)]:
  - @justeattakeaway/pie-icons-webc@1.1.0

## 0.9.0

### Minor Changes

- - [Fixed] - Prevent emitting events when the chip is disabled ([#1987](https://github.com/justeattakeaway/pie/pull/1987)) by [@raoufswe](https://github.com/raoufswe)

  - [Updated] - When `isDismissible` is set to true, only the close icon can be interactive

## 0.8.6

### Patch Changes

- Updated dependencies [[`8bfafc270`](https://github.com/justeattakeaway/pie/commit/8bfafc2707f7d01a64c313d23c1a4e490dc16d56), [`f46774b84`](https://github.com/justeattakeaway/pie/commit/f46774b84f05d04a7769d2ce1a0d52d2717c09c0), [`956afc8b9`](https://github.com/justeattakeaway/pie/commit/956afc8b9bfef9f4aff5070c44f6064da04b943d)]:
  - @justeattakeaway/pie-icons-webc@1.0.0

## 0.8.5

### Patch Changes

- [Fixed] - Imports to align with new linting rule ([#1622](https://github.com/justeattakeaway/pie/pull/1622)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Removed] - Empty lines at the start of some files

- Updated dependencies [[`efb35af66`](https://github.com/justeattakeaway/pie/commit/efb35af6604ca86d0b39ec01421a376050698edf)]:
  - @justeattakeaway/pie-webc-core@0.24.2
  - @justeattakeaway/pie-spinner@0.7.2
  - @justeattakeaway/pie-icons-webc@0.25.3

## 0.8.4

### Patch Changes

- Updated dependencies [[`b14535438`](https://github.com/justeattakeaway/pie/commit/b14535438da533aeb9a5520c2a239203dafb0c9a)]:
  - @justeattakeaway/pie-webc-core@0.24.1
  - @justeattakeaway/pie-spinner@0.7.1
  - @justeattakeaway/pie-icons-webc@0.25.2

## 0.8.3

### Patch Changes

- [Changed] - The loading state of the `Outline` variant should have a border. ([#1826](https://github.com/justeattakeaway/pie/pull/1826)) by [@raoufswe](https://github.com/raoufswe)

  [Changed] - The disabled state of the `Ghost` variant should have a transparent background.

## 0.8.2

### Patch Changes

- Updated dependencies [[`e99674628`](https://github.com/justeattakeaway/pie/commit/e99674628547f4603663e36634c8f04a4757bdc7)]:
  - @justeattakeaway/pie-spinner@0.7.0

## 0.8.1

### Patch Changes

- Updated dependencies [[`2f8c8be9d`](https://github.com/justeattakeaway/pie/commit/2f8c8be9d8c90a2e2be2e58d7d2bec99cbac9792)]:
  - @justeattakeaway/pie-icons-webc@0.25.1

## 0.8.0

### Minor Changes

- [Changed] - Use classmap instead of custom attributes for styling component ([#1716](https://github.com/justeattakeaway/pie/pull/1716)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.7.2

### Patch Changes

- [Added] - pie-css as a dev dependency ([#1667](https://github.com/justeattakeaway/pie/pull/1667)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - updated component generator

- Updated dependencies [[`b32bf5d25`](https://github.com/justeattakeaway/pie/commit/b32bf5d257bb87da130194a9fe2ddf3ec93bced9), [`ccfe4583c`](https://github.com/justeattakeaway/pie/commit/ccfe4583c274531d879b9c877f4c5c08dc9418cd)]:
  - @justeattakeaway/pie-spinner@0.6.7
  - @justeattakeaway/pie-icons-webc@0.25.0

## 0.7.1

### Patch Changes

- [Changed] - Update default props generic helper type to include all props by default ([#1582](https://github.com/justeattakeaway/pie/pull/1582)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Naming of generic type
  [Added] - JSDoc comment

- Updated dependencies [[`ff65968f6`](https://github.com/justeattakeaway/pie/commit/ff65968f61ef9c998662416f72c1b9999567d9f7)]:
  - @justeattakeaway/pie-webc-core@0.24.0
  - @justeattakeaway/pie-spinner@0.6.6
  - @justeattakeaway/pie-icons-webc@0.24.2

## 0.7.0

### Minor Changes

- [Changed] - styles of pie-chip component ([#1559](https://github.com/justeattakeaway/pie/pull/1559)) by [@leksaBoiko](https://github.com/leksaBoiko)

### Patch Changes

- [Changed] - Point to updated component page link in docs site from readme file ([#1548](https://github.com/justeattakeaway/pie/pull/1548)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.6.4

### Patch Changes

- Updated dependencies [[`17f9409d2`](https://github.com/justeattakeaway/pie/commit/17f9409d2a3bc66570694fb80e4d7501fd6e819e)]:
  - @justeattakeaway/pie-icons-webc@0.24.1

## 0.6.3

### Patch Changes

- [Changed] - components to use a single source of truth for props default values ([#1451](https://github.com/justeattakeaway/pie/pull/1451)) by [@fernandofranca](https://github.com/fernandofranca)

- Updated dependencies [[`bfb142f84`](https://github.com/justeattakeaway/pie/commit/bfb142f848a06a8ac6662b300289e34eb22bb6bd), [`bfb142f84`](https://github.com/justeattakeaway/pie/commit/bfb142f848a06a8ac6662b300289e34eb22bb6bd), [`abaadfddc`](https://github.com/justeattakeaway/pie/commit/abaadfddc651f9b2516e94449211bbd19a1bf651)]:
  - @justeattakeaway/pie-webc-core@0.23.0
  - @justeattakeaway/pie-spinner@0.6.5
  - @justeattakeaway/pie-icons-webc@0.24.0

## 0.6.2

### Patch Changes

- Updated dependencies [[`ab5cad99b`](https://github.com/justeattakeaway/pie/commit/ab5cad99bd66e4bd37804b6173bedc37217592d8)]:
  - @justeattakeaway/pie-webc-core@0.22.0
  - @justeattakeaway/pie-spinner@0.6.4
  - @justeattakeaway/pie-icons-webc@0.23.1

## 0.6.1

### Patch Changes

- Updated dependencies [[`9eb62f192`](https://github.com/justeattakeaway/pie/commit/9eb62f19282a96a6abaa7400ebf4188febda97b2), [`d325ed167`](https://github.com/justeattakeaway/pie/commit/d325ed167056d6d3e14f8b4535c9d3b2e8c16b90)]:
  - @justeattakeaway/pie-icons-webc@0.23.0

## 0.6.0

### Minor Changes

- [Fixed] - loading state is not centred correctly ([#1404](https://github.com/justeattakeaway/pie/pull/1404)) by [@raoufswe](https://github.com/raoufswe)

  [Changed] - updated the component status to beta

## 0.5.3

### Patch Changes

- [Removed] - Unneeded `bundledJetDeps` array (patch versions are required because pie-components-config is a dev dependency) ([#1378](https://github.com/justeattakeaway/pie/pull/1378)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Changed] - update pie-icons-webc imports ([#1378](https://github.com/justeattakeaway/pie/pull/1378)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`9bdd9c947`](https://github.com/justeattakeaway/pie/commit/9bdd9c947110688f509140bfa480dbe8d7770ff9), [`9bdd9c947`](https://github.com/justeattakeaway/pie/commit/9bdd9c947110688f509140bfa480dbe8d7770ff9)]:
  - @justeattakeaway/pie-icons-webc@0.22.0
  - @justeattakeaway/pie-spinner@0.6.3
  - @justeattakeaway/pie-webc-core@0.21.1

## 0.5.2

### Patch Changes

- Updated dependencies [[`1086464e8`](https://github.com/justeattakeaway/pie/commit/1086464e86fbce635f4a30783b0c145b7f5854e3)]:
  - @justeattakeaway/pie-webc-core@0.21.0
  - @justeattakeaway/pie-icons-webc@0.21.0
  - @justeattakeaway/pie-spinner@0.6.2

## 0.5.1

### Patch Changes

- [Added] - pieMetadata object to component package.json files with a componentStatus property to query when needing the current component status ([#1361](https://github.com/justeattakeaway/pie/pull/1361)) by [@jamieomaguire](https://github.com/jamieomaguire)

- Updated dependencies [[`a7495cba5`](https://github.com/justeattakeaway/pie/commit/a7495cba55203b5dea71e9c51d50cb04fe4bb759)]:
  - @justeattakeaway/pie-spinner@0.6.1

## 0.5.0

### Minor Changes

- [Fixed] - active and hover styles are applied with the component is disabled ([#1348](https://github.com/justeattakeaway/pie/pull/1348)) by [@raoufswe](https://github.com/raoufswe)

## 0.4.0

### Minor Changes

- [Added] - the code page for the chip component ([#1330](https://github.com/justeattakeaway/pie/pull/1330)) by [@raoufswe](https://github.com/raoufswe)

- [Changed] - Update tsconfig target to es2021 ([#1341](https://github.com/justeattakeaway/pie/pull/1341)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`130f1aaa3`](https://github.com/justeattakeaway/pie/commit/130f1aaa32ccd464b213febf75dd147e6b8aecc3)]:
  - @justeattakeaway/pie-spinner@0.6.0
  - @justeattakeaway/pie-webc-core@0.20.0
  - @justeattakeaway/pie-icons-webc@0.20.0

## 0.3.0

### Minor Changes

- [Added] - Aria support to chip component ([#1309](https://github.com/justeattakeaway/pie/pull/1309)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- [Added] - pie-css import to playwright/index.html ([#1281](https://github.com/justeattakeaway/pie/pull/1281)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`b91297ea3`](https://github.com/justeattakeaway/pie/commit/b91297ea312cb668301b6fa01790371dcf63d830), [`2c85aecb9`](https://github.com/justeattakeaway/pie/commit/2c85aecb9da3989c5a3111a140a87be33d441094), [`2c85aecb9`](https://github.com/justeattakeaway/pie/commit/2c85aecb9da3989c5a3111a140a87be33d441094)]:
  - @justeattakeaway/pie-webc-core@0.19.1
  - @justeattakeaway/pie-spinner@0.5.5
  - @justeattakeaway/pie-icons-webc@0.19.1

## 0.2.1

### Patch Changes

- Updated dependencies [[`473f57efc`](https://github.com/justeattakeaway/pie/commit/473f57efcef3b47d8641436015b1a3af7da8b6c4)]:
  - @justeattakeaway/pie-icons-webc@0.19.0

## 0.2.0

### Minor Changes

- [Added] - dispatching pie-chip-close event ([#1274](https://github.com/justeattakeaway/pie/pull/1274)) by [@dandel10n](https://github.com/dandel10n)

### Patch Changes

- Updated dependencies [[`ccb7640d9`](https://github.com/justeattakeaway/pie/commit/ccb7640d9908a4e154780541b8594e1ede1a22fd), [`4f89146dc`](https://github.com/justeattakeaway/pie/commit/4f89146dc83c7eb72cecc0b83be6d718aa395ae1)]:
  - @justeattakeaway/pie-icons-webc@0.18.0
  - @justeattakeaway/pie-webc-core@0.19.0
  - @justeattakeaway/pie-spinner@0.5.4

## 0.1.1

### Patch Changes

- Updated dependencies [[`86791bd11`](https://github.com/justeattakeaway/pie/commit/86791bd11b7b5e53f171b212699831a79ec4e2d2)]:
  - @justeattakeaway/pie-webc-core@0.18.0
  - @justeattakeaway/pie-spinner@0.5.3
  - @justeattakeaway/pie-icons-webc@0.17.3

## 0.1.0

### Minor Changes

- [Fixed] - Import pie-spinner in the component ([#1259](https://github.com/justeattakeaway/pie/pull/1259)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - basic functionality of the chip component including variants, selected and disabled, loading and dismissible states ([#1248](https://github.com/justeattakeaway/pie/pull/1248)) by [@raoufswe](https://github.com/raoufswe)

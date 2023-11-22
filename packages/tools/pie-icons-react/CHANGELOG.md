# Changelog

## 4.12.0

### Minor Changes

- [Changed] - `hoistingLimits` config to prevent issues with conflicting dependency versions ([#1027](https://github.com/justeattakeaway/pie/pull/1027)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-icons@4.9.3
  - @justeattakeaway/pie-icons-configs@4.5.1

## 4.12.0-next.0

### Minor Changes

- [Changed] - `hoistingLimits` config to prevent issues with conflicting dependency versions ([#1025](https://github.com/justeattakeaway/pie/pull/1025)) by [@raoufswe](https://github.com/raoufswe)

## 4.9.1

### Patch Changes

- [Changed] - use latest pie-icons ([#823](https://github.com/justeattakeaway/pie/pull/823)) by [@dandel10n](https://github.com/dandel10n)

## 4.9.0

### Minor Changes

- [Changed] - use latest pie-icons ([#797](https://github.com/justeattakeaway/pie/pull/797)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 4.8.1

### Patch Changes

- [Changed] - add missing peer dependencies ([#784](https://github.com/justeattakeaway/pie/pull/784)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - update packages, including `@babel/core` and `@justeat/pie-design-tokens`

## 4.7.0

### Minor Changes

- - [Changed] - Replace Jest with Vitest ([#717](https://github.com/justeattakeaway/pie/pull/717)) by [@fernandofranca](https://github.com/fernandofranca)

  - [Changed] - Build script to avoid race condition while writing index file
  - [Changed] - Align scripts with pie-icons-vue
  - [Changed] - Added `esm` folder to `.eslintignore`

## 4.5.0

### Minor Changes

- Brings icon packages back in sync ([#679](https://github.com/justeattakeaway/pie/pull/679)) by [@dandel10n](https://github.com/dandel10n)

- Changes to make sure the ability to use the library in projects that use commonjs or esm: ([#666](https://github.com/justeattakeaway/pie/pull/666)) by [@dandel10n](https://github.com/dandel10n)

  - Switches react-icons-gen.js and rollup.config.js to .mjs.
  - removes `"type": "module"` from package.json and switches "main" to direct to dist instead of esm.

## 4.3.0

### Minor Changes

- [Changed] - using shared normalizeIconName function in pie-icons-configs ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

## 4.0.0

### Minor Changes

- [Changed]: iconSize prop renamed to size prop ([#574](https://github.com/justeattakeaway/pie/pull/574)) by [@dandel10n](https://github.com/dandel10n)

## 3.6.0

### Minor Changes

- [Changed]: Updates instagram-circle-large and star-circle-filled-large svg. Updates microsoft-circle-static, microsoft-circle-filled-static and apple-static both large and default and removes static postfix from them. ([#552](https://github.com/justeattakeaway/pie/pull/552)) by [@dandel10n](https://github.com/dandel10n)

### Patch Changes

- [Fixed]: removes a console error if iconSize prop is not passed ([#556](https://github.com/justeattakeaway/pie/pull/556)) by [@dandel10n](https://github.com/dandel10n)

  [Changed]: in case of invalid `iconSize` being passed to large icons now the size defaults to the `largeIconSizeDefault`

## 3.5.1

### Patch Changes

- [Changed]: removes class attr application for react icons ([#543](https://github.com/justeattakeaway/pie/pull/543)) by [@dandel10n](https://github.com/dandel10n)

## 3.5.0

### Minor Changes

- [Changed] replaces icon size css classes with width and height attr application. ([#532](https://github.com/justeattakeaway/pie/pull/532)) by [@dandel10n](https://github.com/dandel10n)

  [Changed] moves getSvgProps logic to shared configs.js from react and vue configs.
  [Changed] rebuilds icons to apply the changes.

## 3.4.0

### Minor Changes

- [Added] Icons that were missing from the set. ([#506](https://github.com/justeattakeaway/pie/pull/506)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] The icon that was previously used for Nuts is now used for Peanuts (new). A new replacement icon for nuts has been added.

- [Changed] - pie-icons build to remove fill attr from icon paths and add fill=currentColor for svg elements ([#528](https://github.com/justeattakeaway/pie/pull/528)) by [@dandel10n](https://github.com/dandel10n)

## 3.3.1

### Patch Changes

- [Fixed] Renames css icon classes to match size classes and vue library ([#510](https://github.com/justeattakeaway/pie/pull/510)) by [@dandel10n](https://github.com/dandel10n)

## 3.3.0

### Minor Changes

- [Fixed] - updates icons compilation settings to embed pie-icons-configs in the icons bundle ([#497](https://github.com/justeattakeaway/pie/pull/497)) by [@dandel10n](https://github.com/dandel10n)

## 3.2.0

### Minor Changes

- [Changed] - icons to use accessibility attributes ([#481](https://github.com/justeattakeaway/pie/pull/481)) by [@FayeCarter](https://github.com/FayeCarter)

### Patch Changes

- [Changed] - Replaced html-minifier by html-minifier-terser ([#479](https://github.com/justeattakeaway/pie/pull/479)) by [@fernandofranca](https://github.com/fernandofranca)

  [Changed] - Updated icons object builder function and script to async

## 3.1.0

### Minor Changes

- [Fixed] Naming of Over18Filled icon (was OverFilled18) ([#437](https://github.com/justeattakeaway/pie/pull/437)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Fixed] Typo in icon name: check-circl-large -> check-circle-large ([#443](https://github.com/justeattakeaway/pie/pull/443)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Fixed] Typo in icon name: delivery-dee-large -> delivery-fee-large
  [Fixed] Typo in icon name: locatoin-pin-food -> location-pin-food
  [Fixed] Typo in icon name: reciept-error -> receipt-error
  [Fixed] Typo in icon name: reciept-error-large -> receipt-error-large
  [Fixed] Typo in icon name: swiss-fanc-large -> swiss-franc-large
  [Fixed] Typo in icon name: targer -> target
  [Updated] pie-docs iconList snapshot tests with updated icon names

## 3.0.0

### Major Changes

- [Changed] update icons build script ([#386](https://github.com/justeattakeaway/pie/pull/386)) by [@fernandofranca](https://github.com/fernandofranca)

  [Changed] update icons
  [Added] added README instructions on `iconSize` usage
  [Added] add types field to package.json for better TS support
  [Fixed] ESLint config rule
  [Fixed] lint source code

## 2.2.1

### Patch Changes

- [Changed] - Updated Typescript to v5 and tidied up some of the package.json entries and versions ([#385](https://github.com/justeattakeaway/pie/pull/385)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.2.0

### Minor Changes

- [Fixed] - Updating pie-icons-react package to work with Node 18 ([#369](https://github.com/justeattakeaway/pie/pull/369)) by [@ashleynolan](https://github.com/ashleynolan)

- [Added] - className prop for all svgr components ([#363](https://github.com/justeattakeaway/pie/pull/363)) by [@LTurns](https://github.com/LTurns)

  [Added] - snapshot tests to cover the change

- [Changed] - Updated SVGO version to patch snyk security warning ([#357](https://github.com/justeattakeaway/pie/pull/357)) by [@ashleynolan](https://github.com/ashleynolan)

- [Changed] - Updated Rollup to v3 and config changes to support this update ([#369](https://github.com/justeattakeaway/pie/pull/369)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.1.0

### Minor Changes

- [Fixed] - Sandwhich renamed to Sandwich (typo) ([#348](https://github.com/justeattakeaway/pie/pull/348)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.0.1

### Patch Changes

- Add missing Volta settings to package.json ([#322](https://github.com/justeattakeaway/pie/pull/322)) by [@fernandofranca](https://github.com/fernandofranca)

## 2.0.0

### Major Changes

- [Fixes] Typo in microsoft-circe icon ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

- Updating to the latest iconset ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

  ### Added

  - Clean task for `./icons` folder

  ### Changed

  - Pulled in the latest `pie-icons` package (with new naming)
  - Formatting changes made to files through ESLint

- [Fixed] – Fixing casing issue for generated icons & ensuring optimised icons are used correctly ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

- [Added] bookmark icon SVG's added to icon packages ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

- [Changed] Updating icons to include correct prefix (i.e. IconPayments/IconSocial/Icon etc) ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

### Minor Changes

- [Added] Bookmark icons to icon packages ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

  [Changed] Updating plural folder names to singular (i.e. flags to flag)

## 2.0.0-beta.7

### Major Changes

- [Added] bookmark icon SVG's added to icon packages ([#237](https://github.com/justeattakeaway/pie/pull/237)) by [@ashleynolan](https://github.com/ashleynolan)

### Minor Changes

- [Added] Bookmark icons to icon packages ([#237](https://github.com/justeattakeaway/pie/pull/237)) by [@ashleynolan](https://github.com/ashleynolan)

  [Changed] Updating plural folder names to singular (i.e. flags to flag)

## 2.0.0-beta.6

### Major Changes

- [Fixes] Typo in microsoft-circe icon ([#209](https://github.com/justeattakeaway/pie/pull/209)) by [@ashleynolan](https://github.com/ashleynolan)

- [Fixed] – Fixing casing issue for generated icons & ensuring optimised icons are used correctly ([#209](https://github.com/justeattakeaway/pie/pull/209)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.0.0-beta.5

### Major Changes

- [Changed] Updating icons to include correct prefix (i.e. IconPayments/IconSocial/Icon etc) by [@ashleynolan](https://github.com/ashleynolan)

## 2.0.0-beta.4

### Major Changes

- Updating to the latest iconset ([#143](https://github.com/justeattakeaway/pie/pull/143)) by [@ashleynolan](https://github.com/ashleynolan)

  ### Added

  - Clean task for `./icons` folder

  ### Changed

  - Pulled in the latest `pie-icons` package (with new naming)
  - Formatting changes made to files through ESLint

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html)

## 1.0.0-beta.0

_October 12, 2022_

### Added

- Add scripts to generate the React icons
- Create build step using Rollup, bundling in CJS and ESM

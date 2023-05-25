# Changelog

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

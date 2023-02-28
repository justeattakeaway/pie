# Changelog

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

## 2.0.0-beta.4

### Minor Changes

- [Changed] - Update path helper to handle forward and backward slashes ([#191](https://github.com/justeattakeaway/pie/pull/191)) by [@xander-marjoram](https://github.com/xander-marjoram)

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## v2.0.0-beta.3

### Added

- Support for subdirectories of assets, so that these subdirectories are also respected when they are moved to the `_optimised` and `dist` folders

### Changed

- **Breaking** – Icon names have been normalised against design and brand naming. This means a lot of icons (mainly naming) have been changed in this release (please contact the PIE team for help with migration).
- `assets/optimised` renamed to `assets/_optimised` so that it always appears at the top of the folder tree
- Convert `build.sh` to `build.js` to enable Windows users to build the project locally
- Updated NPM Scripts to work with Turborepo when run from root of repo

### Removed

- Old references to `icing-` prefixed icons (which no longer exist).

## v2.0.0-beta.2

_October 7, 2022_

### Changed

- Updating icon classname modifier to be camelcase (i.e. `c-pieIcon--About` > `c-pieIcon--about`)

## v2.0.0-beta.1

_October 6, 2022_

### Added

- ESLint fix NPM Script
- `"tag": "beta"` property added to `package.json`.

### Changed

- ESLint fixes across JS files
- Moved common `devDependencies` like Babel, ESLint and Jest out of package to mono-repo root.

## v2.0.0-beta.0

_September 29, 2022_

### Changed

- Code moved into `justeattakeaway` shared PIE mono-repo.
- SVG location moved from `src/pie-icons` to `src/assets`
- Some minor code refactoring to the `getAllSvgs` function. It's now its own separate function that can be called outside of `build-icons-json.js` where it was previously located.

### Fixed

- Process SVG step wasn't actually optimising the SVGs. This was down to the way paths were being handled and so they weren't being written correctly to an output directory. This is now fixed and these optimised files get output to `src/assets/optimised`.

## v1.0.0

_May 4, 2022_

### Changed

- Name of package updated to be `@justeattakeaway/pie-icons`
- Added README and CHANGELOG files
- `platform` parameter added to the `toSVG` method, toi help handle platform specific default attributes. See README for more details.

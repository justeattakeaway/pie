# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

v2.0.0-beta.2
------------------------------
*October 7, 2022*

### Changed
- Updating icon classname modifier to be camelcase (i.e. `c-pieIcon--About` > `c-pieIcon--about`)


v2.0.0-beta.1
------------------------------
*October 6, 2022*

### Added
- ESLint fix NPM Script
- `"tag": "beta"` property added to `package.json`.

### Changed
- ESLint fixes across JS files
- Moved common `devDependencies` like Babel, ESLint and Jest out of package to mono-repo root.


v2.0.0-beta.0
------------------------------
*September 29, 2022*

### Changed
- Code moved into `justeattakeaway` shared PIE mono-repo.
- SVG location moved from `src/pie-icons` to `src/assets`
- Some minor code refactoring to the `getAllSvgs` function. It's now its own separate function that can be called outside of `build-icons-json.js` where it was previously located.

### Fixed
- Process SVG step wasn't actually optimising the SVGs. This was down to the way paths were being handled and so they weren't being written correctly to an output directory. This is now fixed and these optimised files get output to `src/assets/optimised`.


v1.0.0
------------------------------
*May 4, 2022*

### Changed
- Name of package updated to be `@justeattakeaway/pie-icons`
- Added README and CHANGELOG files
- `platform` parameter added to the `toSVG` method, toi help handle platform specific default attributes. See README for more details.

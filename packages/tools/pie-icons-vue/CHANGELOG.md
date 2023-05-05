# Changelog

## 3.0.0

### Major Changes

- [Changed] update icons build script ([#386](https://github.com/justeattakeaway/pie/pull/386)) by [@fernandofranca](https://github.com/fernandofranca)

  [Added] added README instructions on `iconSize` usage
  [Changed] update icons

## 2.2.0

### Minor Changes

- [Changed] - Updated SVGO version to patch snyk security warning ([#357](https://github.com/justeattakeaway/pie/pull/357)) by [@ashleynolan](https://github.com/ashleynolan)

### Patch Changes

- [Fixed] - Clip path prefix ID is now correctly randomized ([#366](https://github.com/justeattakeaway/pie/pull/366)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.1.0

### Minor Changes

- [Fixed] - Sandwhich renamed to Sandwich (typo) ([#348](https://github.com/justeattakeaway/pie/pull/348)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.0.1

### Patch Changes

- Add missing Volta settings to package.json ([#322](https://github.com/justeattakeaway/pie/pull/322)) by [@fernandofranca](https://github.com/fernandofranca)

## 2.0.0

### Major Changes

- [Fixes] Typo in microsoft-circe icon ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

- [Fixed] – Fixing casing issue for generated icons & ensuring optimised icons are used correctly ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

- [Changed] Updated icons to prefix folder names (i.e. flags/payments) ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

- [Added] bookmark icon SVG's added to icon packages ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

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

- [Changed] Updated icons to prefix folder names (i.e. flags/payments) by [@ashleynolan](https://github.com/ashleynolan)

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html)

## Todo for full v2 release

- Fix example webpage

## v2.0.0-beta.2

_January 30, 2023_

### Fixed

- ESLint config (as wasn't working with current setup)

### Added

- `clean` task added to remove old icon files that are no longer needed

### Changed

- Icons files run through ESLint once they've been run through babel generator (so they are more readable, as only used for documentation purposes)
- Updated `pie-icons` package to `v2.0.0-beta.3`
- Icon names switched from having `Icon` as a suffix, to a prefix – for example, `ArrowLeftIcon` is now `IconArrowLeft`.

## v2.0.0-beta.1

_November 24, 2022_

### Fixed

- Published version didn't include all dist files (due to root `.gitignore`)

## v2.0.0-beta.0

_October 7, 2022_

### Changed

- Babel config updated to use `@vue/babel-preset-jsx`.
- `/src/*` renamed `/generated/*` to indicate that the files are part of a compilation step (and not a source file that should be directly edited).

## v1.0.0

_May 9, 2022_

### Added

- Transferred files over from `f-vue-icons` repo to shared PIE repo. All functionality is the same, but now hooks into the PIE iconset, rather than f-icons.

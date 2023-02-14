# Changelog

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

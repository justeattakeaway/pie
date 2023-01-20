# Changelog

## 2.0.0

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html)

## Todo for full v2 release

- Fix example webpage
- Run clean pre-bundle (so it cleans the icons generated locally)

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

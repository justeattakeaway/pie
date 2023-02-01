# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html)

## Todo for full v2 release
- Fix example webpage


v2.0.0-beta.2
------------------------------
*January 30, 2023*

### Fixed
- ESLint config (as wasn't working with current setup)

### Added
- `clean` task added to remove old icon files that are no longer needed

### Changed
- Icons files run through ESLint once they've been run through babel generator (so they are more readable, as only used for documentation purposes)
- Updated `pie-icons` package to `v2.0.0-beta.3`
- Icon names switched from having `Icon` as a suffix, to a prefix – for example, `ArrowLeftIcon` is now `IconArrowLeft`.


v2.0.0-beta.1
------------------------------
*November 24, 2022*

### Fixed
- Published version didn't include all dist files (due to root `.gitignore`)


v2.0.0-beta.0
------------------------------
*October 7, 2022*

### Changed
- Babel config updated to use `@vue/babel-preset-jsx`.
- `/src/*` renamed `/generated/*` to indicate that the files are part of a compilation step (and not a source file that should be directly edited).



v1.0.0
------------------------------
*May 9, 2022*

### Added
- Transferred files over from `f-vue-icons` repo to shared PIE repo. All functionality is the same, but now hooks into the PIE iconset, rather than f-icons.


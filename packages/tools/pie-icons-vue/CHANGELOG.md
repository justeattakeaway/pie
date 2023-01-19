- Fix example webpage
- Run clean pre-bundle (so it cleans the icons generated locally)

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


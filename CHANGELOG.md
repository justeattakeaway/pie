# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

v1.15.0
------------------------------
*October 6, 2022*

### Changed
- Removing build filter so that it builds all packages that Turborepo finds


v1.14.0
------------------------------
*October 6, 2022*

### Changed
- Updating Turborepo config to cache more stuff
- `devDependencies` moved to root from the pie-icons package


v1.13.1
------------------------------
*October 03, 2022*

### Changed
- Fixed Husky to work with Yarn 2+


v1.13.0
------------------------------
*September 23, 2022*

### Added
- Linting step to GitHub workflow

### Changed
- Split out GitHub actions workflow into separate jobs


v1.12.0
------------------------------
*September 16, 2022*

### Added
- Code of conduct file
- GH pages deployment for PIE Microsite

### Fixed
- `stylelint` errors.


v1.11.0
------------------------------
*September 05, 2022*

### Added
- `precommit` checks for sensitive information.


v1.10.0
------------------------------
*September 2, 2022*

### Added
- Moved most dev dependencies from pie-microsite into root level depedencies
- Dependency resolution fix to `.yarnrc.yml` for `stylelint-config-recommended-scss` and `stylelint-config-standard-scss` as recommended in [this github issues thread](https://github.com/stylelint-scss/stylelint-config-recommended-scss/issues/89#issuecomment-988536998)


v1.9.0
------------------------------
*August 22, 2022*

### Added
- Colour copy and images.


v1.8.0
------------------------------
*August 17, 2022*

### Added
- Spacing copy and images.


v1.7.0
------------------------------
*August 15, 2022*

### Changed
- Header logo wrapper name.
- Scss pie token reference.


v1.6.0
------------------------------
*August 15, 2022*

### Added
- Header logo and styles.
- Scss watch helper for entire scss directory.
- gitignore file.


v1.5.0
------------------------------
*July 28, 2022*

### Added
- `husky` pre-commit hooks for linting.


v1.4.0
------------------------------
*July 28, 2022*

### Added
- `stylelint`, `stylelint-scss` & `@justeat/stylelint-config-fozzie` for linting purposes.
- `lint:style` setting for linting within `turbo.json`.


v1.3.0
------------------------------
*July 26, 2022*

### Changed
- Switched from 'plug and play' to node_modules based dependencies


v1.2.0
------------------------------
*July 20, 2022*

### Added
- `@justeat/browserslist-config-fozzie` dev dependency to be referenced by apps and packages


v1.1.0
------------------------------
*July 18, 2022*

### Changed
- Removed `docs` and `sites` folders so that all websites live directly under `apps` folder


v1.0.0
------------------------------
*June 15, 2022*

### Added
- Initial Files

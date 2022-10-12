# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## v1.17.0
_October 22, 2022_

### Added

- `pie-icons-react` package to `/tools`.
- add `/esm` folders to .gitignore


v1.16.1
------------------------------
*October 13, 2022*

### Changed
- add more granular config to the GitHub actions file for running on pushes to main and PRs


## v1.16.0

_October 10, 2022_

### Added

- `pie-icons-vue` package to `/tools` (as a beta release).

### Changed

- `devDependencies` moved from `pie-icons-vue` package to root (and some minor dependency bumps)

## v1.15.0

_October 6, 2022_

### Changed

- Removing build filter so that it builds all packages that Turborepo finds

## v1.14.0

_October 6, 2022_

### Changed

- Updating Turborepo config to cache more stuff
- `devDependencies` moved to root from the pie-icons package

## v1.13.1

_October 03, 2022_

### Changed

- Fixed Husky to work with Yarn 2+

## v1.13.0

_September 23, 2022_

### Added

- Linting step to GitHub workflow

### Changed

- Split out GitHub actions workflow into separate jobs

## v1.12.0

_September 16, 2022_

### Added

- Code of conduct file
- GH pages deployment for PIE Microsite

### Fixed

- `stylelint` errors.

## v1.11.0

_September 05, 2022_

### Added

- `precommit` checks for sensitive information.

## v1.10.0

_September 2, 2022_

### Added

- Moved most dev dependencies from pie-microsite into root level depedencies
- Dependency resolution fix to `.yarnrc.yml` for `stylelint-config-recommended-scss` and `stylelint-config-standard-scss` as recommended in [this github issues thread](https://github.com/stylelint-scss/stylelint-config-recommended-scss/issues/89#issuecomment-988536998)

## v1.9.0

_August 22, 2022_

### Added

- Colour copy and images.

## v1.8.0

_August 17, 2022_

### Added

- Spacing copy and images.

## v1.7.0

_August 15, 2022_

### Changed

- Header logo wrapper name.
- Scss pie token reference.

## v1.6.0

_August 15, 2022_

### Added

- Header logo and styles.
- Scss watch helper for entire scss directory.
- gitignore file.

## v1.5.0

_July 28, 2022_

### Added

- `husky` pre-commit hooks for linting.

## v1.4.0

_July 28, 2022_

### Added

- `stylelint`, `stylelint-scss` & `@justeat/stylelint-config-fozzie` for linting purposes.
- `lint:style` setting for linting within `turbo.json`.

## v1.3.0

_July 26, 2022_

### Changed

- Switched from 'plug and play' to node_modules based dependencies

## v1.2.0

_July 20, 2022_

### Added

- `@justeat/browserslist-config-fozzie` dev dependency to be referenced by apps and packages

## v1.1.0

_July 18, 2022_

### Changed

- Removed `docs` and `sites` folders so that all websites live directly under `apps` folder

## v1.0.0

_June 15, 2022_

### Added

- Initial Files

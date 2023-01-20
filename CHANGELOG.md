# Changelog

## 1.23.0

### Minor Changes

- [#19](https://github.com/siggerzz/pie/pull/19) [`9123491`](https://github.com/siggerzz/pie/commit/9123491aa0359790a45dc6918c54b71e121678a5) Thanks [@siggerzz](https://github.com/siggerzz)! - Added changesets to monorepo

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-icons@2.0.0

## 1.23.0-beta.0

### Minor Changes

- [#19](https://github.com/siggerzz/pie/pull/19) [`9123491`](https://github.com/siggerzz/pie/commit/9123491aa0359790a45dc6918c54b71e121678a5) Thanks [@siggerzz](https://github.com/siggerzz)! - Added changesets to monorepo

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## v1.22.0

_January 19, 2022_

### Added

- Typescript support.
- Lit for building web components.
- Vite as a dev dependency.

## v1.21.4

_January 17, 2022_

### Changed

- `Copyright (c) Just Eat Holding Ltd` to `Copyright (c) Just Eat Takeaway` in licence

## v1.21.3

_January 17, 2022_

### Removed

- No longer needed build steps: visual test reminder comment and looking for the reminder comment

## v1.21.2

_January 16, 2022_

### Fixed

- Issue with incorrect `chromedriver` version on GitHub Actions.

## v1.21.1

_December 20, 2022_

### Fixed

- CI failure on `main` due to execution of visual review PR comment step.

## v1.21.0

_December 8, 2022_

### Added

- Automatic PR reminder to check visual changes in Percy
- Ensure visual tests don't run on draft PRs.

## v1.20.0

_December 2, 2022_

### Added

- New package.json scripts for system / visual / snapshot updating.
- New `turbo.json` config for system / visual tests.
- The following devDependencies used for testing - `dree` / `@percy/cli` / `@percy/webdriverio` / `cross-env` / `jest-expect-message`.
- Modify GitHub Actions to allow for preview deployments.

## v1.19.0

_November 24, 2022_

### Added

- WebDriverIO dependencies + coresponding `turbo.json` config.

## v1.18.3

_November 24, 2022_

### Fixed

- `.gitignore` dist folder exemption causing dist output not to be published. Have modified to be the same specificity as package `files` setting.

## v1.18.2

_November 24, 2022_

### Changed

- Updated `@justeat/fozzie` to `10.9.0`

## v1.18.1

_November 15, 2022_

### Added

- `CODEOWNERS` file with the `@justeat/ui-senior-reviewers` set as reviewers for `pie-microsite`
- Root level devDependency of `@justeattakeaway/pie-icons`

## v1.18.0

_November 1, 2022_

### Added

- `nvmrc` file to lock the node version at 16 for local development

### Changed

- Use `actions/cache@v3` instead of `v2` to use Node 16 (was 12 before)

### Removed

- Remove `test` command in `husky` to prevent building entire monorepo on each commit

## v1.17.0

_October 22, 2022_

### Added

- `pie-icons-react` package to `/tools`.
- add `/esm` folders to .gitignore

## v1.16.1

_October 13, 2022_

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

_October 3, 2022_

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

_September 5, 2022_

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

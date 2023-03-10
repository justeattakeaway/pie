# Changelog

## 1.34.0

### Minor Changes

- [Added] - `examples` folder for containing example apps ([#293](https://github.com/justeattakeaway/pie/pull/293)) by [@LTurns](https://github.com/LTurns)

  [Changed] - build script to exclude `wc-react18` app

## 1.33.0

### Minor Changes

- [Added] - Renovate config for automatic dependency updates ([#207](https://github.com/justeattakeaway/pie/pull/207)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Added] - Semantic commit scope extend. ([#285](https://github.com/justeattakeaway/pie/pull/285)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Added] - New system / visual tests for mobile navigation ([#278](https://github.com/justeattakeaway/pie/pull/278)) by [@siggerzz](https://github.com/siggerzz)

  [Updated] - `wdio.config.js` to wait for GitHub Actions deployments before running tests.

## 1.32.0

### Minor Changes

- [ Updated ] - `@percy/cli` dependency ([#268](https://github.com/justeattakeaway/pie/pull/268)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Added] - watch script to `package.json` ([#233](https://github.com/justeattakeaway/pie/pull/233)) by [@LTurns](https://github.com/LTurns)

  [Added] - watch script to `turbo.json`

## 1.31.1

### Patch Changes

- [ Fixed ] - Revert back to old changeset / GHA config to prevent CI not running on Release commits ([#264](https://github.com/justeattakeaway/pie/pull/264)) by [@siggerzz](https://github.com/siggerzz)

## 1.31.0

### Minor Changes

- [Added] - Support for `pie-monorepo` changeset entires ([#232](https://github.com/justeattakeaway/pie/pull/232)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - Functionality to only run system.visual tests against changed packages + dependants for PRs ([#232](https://github.com/justeattakeaway/pie/pull/232)) by [@siggerzz](https://github.com/siggerzz)

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## v1.30.0

_February 28, 2023_

### Changed

- Updated `pie-icons` dependency to latest beta version
- `@axe-core/webdriverio` & `axe-reports` packages to root for accessibility testing.
- Added `test:a11y` & `test:a11y:ci` scripts to root to run accessibility testing locally and on CI.

## v1.29.1

_February 28, 2023_

### Fixed

- .changeset/config.json to automatically commit changeset files.

## v1.29.0

_February 27, 2023_

### Added

- Linked the icon packages together so that they get released as the same version number

## v1.28.0

_February 23, 2023_

### Changed

- Version bump of `@justeat/pie-design-tokens`
- Version bump of `@justeat/fozzie`

## v1.27.1

_February 21, 2023_

### Fixed

- Fixed issue where `pie-docs#build:dev` wasn't included in `turbo.json`.
- Fixed issue where linting would fail if dependency `dist` wasn't present.

## v1.27.0

_February 16, 2023_

### Changed

- Specified `narrow`, `mid` and `huge` breakpoints for Percy tests

## v1.26.0

_February 6, 2023_

### Added

- Storybook publishing to GitHub Actions.
- Modified `turbo.json` commands.

## v1.25.1

_February 3, 2023_

### Fixed

- Issue with dist's not being available to changesets release job.

## v1.25.0

_January 31, 2023_

### Added

- Changesets for automatic package versioning / publishing.

## v1.24.0

_January 27, 2023_

### Added

- `.eslintrc.js` added to the root, so that all packages can inherit the base config setup
- `eslint-plugin-json-format` added to `devDependencies`, so that JSON files can be run through ESLint (and auto-fix in VSCode works)
- `clean` task added to turbo config, as this runs in the icon packages

### Changed

- `turbo.json` formatted through ESlint
- `scripts` in root ordered alphabetically (just easier to find stuff)

## v1.23.0

_January 27, 2023_

### Changed

- `.editorconfig` updated – matches old mono-repo settings now, which matches up with our current linting rulesets

## v1.22.0

_January 19, 2023_

### Added

- Typescript support.
- Lit for building web components.
- Vite as a dev dependency.

## v1.21.4

_January 17, 2023_

### Changed

- `Copyright (c) Just Eat Holding Ltd` to `Copyright (c) Just Eat Takeaway` in licence

## v1.21.3

_January 17, 2023_

### Removed

- No longer needed build steps: visual test reminder comment and looking for the reminder comment

## v1.21.2

_January 16, 2023_

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

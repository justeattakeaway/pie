# Changelog

## 2.5.0

### Minor Changes

- [Changed] - Improved readme files ([#418](https://github.com/justeattakeaway/pie/pull/418)) by [@jamieomaguire](https://github.com/jamieomaguire)

- Updated amplify deploy to support bucket name ([#421](https://github.com/justeattakeaway/pie/pull/421)) by [@JoshuaNg2332](https://github.com/JoshuaNg2332)

- [Changed] - Upgrade to Storybook 7 and add a writing direction toolbar dropdown ([#424](https://github.com/justeattakeaway/pie/pull/424)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Fixed] - Bucket names in CI ([#422](https://github.com/justeattakeaway/pie/pull/422)) by [@siggerzz](https://github.com/siggerzz)

- - [Updated] Yarn module resolution for `@lit-labs/ssr-dom-shim` to use the latest version (1.1.1) ([#417](https://github.com/justeattakeaway/pie/pull/417)) by [@fernandofranca](https://github.com/fernandofranca)

## 2.4.0

### Minor Changes

- [Added] - A vanilla JS example application for using pie-button ([#409](https://github.com/justeattakeaway/pie/pull/409)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Renovate config for example apps ([#406](https://github.com/justeattakeaway/pie/pull/406)) by [@siggerzz](https://github.com/siggerzz)

- [Changed] - Amplify Deploy logic to be a reusable workflow ([#410](https://github.com/justeattakeaway/pie/pull/410)) by [@siggerzz](https://github.com/siggerzz)

- [Added] Pie button and markup to nuxt3 example folder. ([#411](https://github.com/justeattakeaway/pie/pull/411)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Added] wc react 17 app ([#402](https://github.com/justeattakeaway/pie/pull/402)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Added] - Support for Windows/Ubuntu Node 16/18 CI builds. ([#401](https://github.com/justeattakeaway/pie/pull/401)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - Example apps back to workspace, and prevented node_modules from being hoisted to the workspace root. ([#406](https://github.com/justeattakeaway/pie/pull/406)) by [@siggerzz](https://github.com/siggerzz)

### Patch Changes

- [Fixed] - Refactored Changesets action to be a dispatchable workflow ([#403](https://github.com/justeattakeaway/pie/pull/403)) by [@siggerzz](https://github.com/siggerzz)

- [Fixed] - Issue where main amplify deploy wasn't setting zip file name correctly ([#415](https://github.com/justeattakeaway/pie/pull/415)) by [@siggerzz](https://github.com/siggerzz)

- [Added]: vitest dependency ([#386](https://github.com/justeattakeaway/pie/pull/386)) by [@fernandofranca](https://github.com/fernandofranca)

- [added] - example angular 12 app ([#398](https://github.com/justeattakeaway/pie/pull/398)) by [@FayeCarter](https://github.com/FayeCarter)

  [added] - `pie-button` to angular 12 app

## 2.3.0

### Minor Changes

- [Added] Closed workflow which runs for closed pull requests ([#384](https://github.com/justeattakeaway/pie/pull/384)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Added] - Playwright component / visual tests for pie-button ([#396](https://github.com/justeattakeaway/pie/pull/396)) by [@siggerzz](https://github.com/siggerzz)

- [Removed] - removing example applications from yarn workspaces ([#389](https://github.com/justeattakeaway/pie/pull/389)) by [@ashleynolan](https://github.com/ashleynolan)

- [Added] pie-button to wc-nuxt2 example app ([#395](https://github.com/justeattakeaway/pie/pull/395)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Changed] - Updated Typescript to v5 and tidied up some of the package.json entries and versions ([#385](https://github.com/justeattakeaway/pie/pull/385)) by [@ashleynolan](https://github.com/ashleynolan)

- [Changed] - Fixed yarn.lock and minor package bumps ([#377](https://github.com/justeattakeaway/pie/pull/377)) by [@ashleynolan](https://github.com/ashleynolan)

- [Added] - pie-button to nuxt10 example app ([#387](https://github.com/justeattakeaway/pie/pull/387)) by [@LTurns](https://github.com/LTurns)

### Patch Changes

- [Changed] Only run PR-related CI steps for pull requests ([#388](https://github.com/justeattakeaway/pie/pull/388)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 2.2.0

### Minor Changes

- [Added] nuxt2 example template ([#374](https://github.com/justeattakeaway/pie/pull/374)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- [Removed] Pie button as test ([#379](https://github.com/justeattakeaway/pie/pull/379)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 2.1.0

### Minor Changes

- [Changed] - Updated Yarn to v3.5.0 (and updated volta config) ([#375](https://github.com/justeattakeaway/pie/pull/375)) by [@ashleynolan](https://github.com/ashleynolan)

- [Added] - Merge queue added to Github actions config ([#375](https://github.com/justeattakeaway/pie/pull/375)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.0.0

### Major Changes

- [Changed] - Updating to use Node v18 LTS ([#367](https://github.com/justeattakeaway/pie/pull/367)) by [@ashleynolan](https://github.com/ashleynolan)

  [Added] - `yarn upgrade-interactive` plugin for upgrading package versions

### Patch Changes

- [Changed] - `.cz-config` to ignore nitro package which is generated in nuxt-3 example app ([#363](https://github.com/justeattakeaway/pie/pull/363)) by [@LTurns](https://github.com/LTurns)

- Updated dependencies [[`9a28a2d11`](https://github.com/justeattakeaway/pie/commit/9a28a2d11ee9c6e89a6257b2d92724208490f7f8)]:
  - @justeattakeaway/pie-icons@2.2.0

## 1.39.0

### Minor Changes

- [Changed] - Updated Concurrency > cancel-in-progress: true to stop any builds in progress when new changes are pushed to a branch ([#350](https://github.com/justeattakeaway/pie/pull/350)) by [@ashleynolan](https://github.com/ashleynolan)

### Patch Changes

- [Fixed] - Snapshots for pie-docs updated after icon version bump ([#351](https://github.com/justeattakeaway/pie/pull/351)) by [@ashleynolan](https://github.com/ashleynolan)

- [Updated] - Project dependencies ([#346](https://github.com/justeattakeaway/pie/pull/346)) by [@fernandofranca](https://github.com/fernandofranca)

## 1.38.0

### Minor Changes

- [Added] - Turborepo remote caching in S3 ([#342](https://github.com/justeattakeaway/pie/pull/342)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - empty NextJS example application ([#310](https://github.com/justeattakeaway/pie/pull/310)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Order in which deploys are executed in CI ([#334](https://github.com/justeattakeaway/pie/pull/334)) by [@siggerzz](https://github.com/siggerzz)

### Patch Changes

- Updated dependencies [[`fb666fd3f`](https://github.com/justeattakeaway/pie/commit/fb666fd3facc1cbc5c50026b53bf5008560fa65b), [`79ffb77a9`](https://github.com/justeattakeaway/pie/commit/79ffb77a9cfde9bb47afd9f80e5867be80a5421e), [`79ffb77a9`](https://github.com/justeattakeaway/pie/commit/79ffb77a9cfde9bb47afd9f80e5867be80a5421e)]:
  - @justeattakeaway/pie-icons@2.1.0

## 1.37.0

### Minor Changes

- [Added] - New `commitPrefix` property to branches created by Renovate. ([#329](https://github.com/justeattakeaway/pie/pull/329)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - new nuxt3 example app to `apps/examples` ([#321](https://github.com/justeattakeaway/pie/pull/321)) by [@LTurns](https://github.com/LTurns)

### Patch Changes

- [Fixed] - Issue in `renovate.json` where commitMessagePefix / dependency group names were incorrect ([#332](https://github.com/justeattakeaway/pie/pull/332)) by [@siggerzz](https://github.com/siggerzz)

## 1.36.0

### Minor Changes

- [Removed] - WDIO references and dependencies ([#312](https://github.com/justeattakeaway/pie/pull/312)) by [@JoshuaNg2332](https://github.com/JoshuaNg2332)

### Patch Changes

- Updated dependencies [[`38734c2d3`](https://github.com/justeattakeaway/pie/commit/38734c2d3fb74f6b77d38b0d2eac95bb0d4dfdc1)]:
  - @justeattakeaway/pie-icons@2.0.1

## 1.35.0

### Minor Changes

- [Changed] - Update chromedriver to v110 ([#289](https://github.com/justeattakeaway/pie/pull/289)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Fixed] - Failing test (incorrect type for cookie value - number when it should be a string)

- [Added] - Playwright testing package ([#294](https://github.com/justeattakeaway/pie/pull/294)) by [@JoshuaNg2332](https://github.com/JoshuaNg2332)

- [Updated] - `turbo` dependency to fix a bug that prevented passing of root-level args when using `--filter` ([#294](https://github.com/justeattakeaway/pie/pull/294)) by [@JoshuaNg2332](https://github.com/JoshuaNg2332)

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

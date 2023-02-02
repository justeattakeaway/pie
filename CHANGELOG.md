# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v1.28.0
------------------------------
*February 16, 2023*

### Added
- Linked the icon packages together so that they get released as the same version number


v1.27.1
------------------------------
*February 21, 2022*

### Fixed
- Fixed issue where `pie-docs#build:dev` wasn't included in `turbo.json`.
- Fixed issue where linting would fail if dependency `dist` wasn't present.


v1.27.0
------------------------------
*February 16, 2022*

### Changed
- Specified `narrow`, `mid` and `huge` breakpoints for Percy tests


v1.26.0
------------------------------
*February 6, 2023*

### Added
- Storybook publishing to GitHub Actions.
- Modified `turbo.json` commands.

v1.25.1
------------------------------
*February 3, 2023*

### Fixed
- Issue with dist's not being available to changesets release job.


v1.25.0
------------------------------
*January 31, 2023*

### Added
- Changesets for automatic package versioning / publishing.


v1.24.0
------------------------------
*January 27, 2023*

### Added
- `.eslintrc.js` added to the root, so that all packages can inherit the base config setup
- `eslint-plugin-json-format` added to `devDependencies`, so that JSON files can be run through ESLint (and auto-fix in VSCode works)
- `clean` task added to turbo config, as this runs in the icon packages

### Changed
- `turbo.json` formatted through ESlint
- `scripts` in root ordered alphabetically (just easier to find stuff)


v1.23.0
------------------------------
*January 27, 2023*

### Changed
- `.editorconfig` updated – matches old mono-repo settings now, which matches up with our current linting rulesets


v1.22.0
------------------------------
*January 19, 2023*

### Added
- Typescript support.
- Lit for building web components.
- Vite as a dev dependency.


v1.21.4
------------------------------
*January 17, 2023*

### Changed
- `Copyright (c) Just Eat Holding Ltd` to `Copyright (c) Just Eat Takeaway` in licence


v1.21.3
------------------------------
*January 17, 2023*

### Removed
- No longer needed build steps: visual test reminder comment and looking for the reminder comment


v1.21.2
------------------------------
*January 16, 2023*

### Fixed
- Issue with incorrect `chromedriver` version on GitHub Actions.


v1.21.1
------------------------------
*December 20, 2022*

### Fixed
- CI failure on `main` due to execution of visual review PR comment step.


v1.21.0
------------------------------
*December 8, 2022*

### Added
- Automatic PR reminder to check visual changes in Percy
- Ensure visual tests don't run on draft PRs.


v1.20.0
------------------------------
*December 2, 2022*

### Added
- New package.json scripts for system / visual / snapshot updating.
- New `turbo.json` config for system / visual tests.
- The following devDependencies used for testing - `dree` / `@percy/cli` / `@percy/webdriverio` / `cross-env` / `jest-expect-message`.
- Modify GitHub Actions to allow for preview deployments.


v1.19.0
------------------------------
*November 24, 2022*

### Added
- WebDriverIO dependencies + coresponding `turbo.json` config.


v1.18.3
------------------------------
*November 24, 2022*

### Fixed
- `.gitignore` dist folder exemption causing dist output not to be published. Have modified to be the same specificity as package `files` setting.



v1.18.2
------------------------------
*November 24, 2022*

### Changed
- Updated `@justeat/fozzie` to `10.9.0`


v1.18.1
------------------------------
*November 15, 2022*

### Added
- `CODEOWNERS` file with the `@justeat/ui-senior-reviewers` set as reviewers for `pie-microsite`
- Root level devDependency of `@justeattakeaway/pie-icons`


v1.18.0
------------------------------
*November 1, 2022*

### Added
- `nvmrc` file to lock the node version at 16 for local development

### Changed
- Use `actions/cache@v3` instead of `v2` to use Node 16 (was 12 before)

### Removed
- Remove `test` command in `husky` to prevent building entire monorepo on each commit


v1.17.0
------------------------------
*October 22, 2022*

### Added
- `pie-icons-react` package to `/tools`.
- add `/esm` folders to .gitignore


v1.16.1
------------------------------
*October 13, 2022*

### Changed
- add more granular config to the GitHub actions file for running on pushes to main and PRs


v1.16.0
------------------------------
*October 10, 2022*

### Added
- `pie-icons-vue` package to `/tools` (as a beta release).

### Changed
- `devDependencies` moved from `pie-icons-vue` package to root (and some minor dependency bumps)


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
*October 3, 2022*

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
*September 5, 2022*

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

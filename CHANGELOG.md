# Changelog

## 2.56.5

### Patch Changes

- [Added] - Force resolution of `tar@6.2.1` to fix the Synk vulnerability raised in #1355 ([#1357](https://github.com/justeattakeaway/pie/pull/1357)) by [@siggerzz](https://github.com/siggerzz)

## 2.56.4

### Patch Changes

- [Changed] - Reverted `turbo` back to `1.10.16`. Our current caused a bug that resulted in the `check-change-type` CI job not corretly detecting changes in the repo, resulting in deployments not being triggered. ([#1346](https://github.com/justeattakeaway/pie/pull/1346)) by [@siggerzz](https://github.com/siggerzz)

## 2.56.3

### Patch Changes

- [Fixed] - Issue where `packageManager` property was causing renovate PR's to fail due to `corepack` opt-in. ([#1340](https://github.com/justeattakeaway/pie/pull/1340)) by [@siggerzz](https://github.com/siggerzz)

- [Changed] - Use pie-design-tokens v6 ([#1335](https://github.com/justeattakeaway/pie/pull/1335)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Replace uses of `font-interactive-m` with `font-interactive-l`

## 2.56.2

### Patch Changes

- [Fixed] - Issue where `create:manifest` & `build:react-wrapper` commands failed when executed from the monorepo root directory. ([#1321](https://github.com/justeattakeaway/pie/pull/1321)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - Update to `turbo@1.12.4`.

## 2.56.1

### Patch Changes

- [Fixed] - danger flagging automated prs ([#1316](https://github.com/justeattakeaway/pie/pull/1316)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.56.0

### Minor Changes

- [Changed] - stylelint to latest version 16 ([#1280](https://github.com/justeattakeaway/pie/pull/1280)) by [@raoufswe](https://github.com/raoufswe)

## 2.55.0

### Minor Changes

- [Added] - Integrate assistive text component into input ([#1288](https://github.com/justeattakeaway/pie/pull/1288)) by [@raoufswe](https://github.com/raoufswe)

## 2.54.1

### Patch Changes

- [Added] - isOpen, variant, isCompact, heading, headingLevel, hideIcon properties ([#1254](https://github.com/justeattakeaway/pie/pull/1254)) by [@thejfreitas](https://github.com/thejfreitas)

  [Added] - styles, basic interactions and unit tests
  [Changed] - Storybook's playground

## 2.54.0

### Minor Changes

- [Added] - basic functionality of the chip component including variants, selected and disabled, loading and dismissible states ([#1248](https://github.com/justeattakeaway/pie/pull/1248)) by [@raoufswe](https://github.com/raoufswe)

## 2.53.0

### Minor Changes

- [Added] - Danger check for PR desc checkboxes ([#1249](https://github.com/justeattakeaway/pie/pull/1249)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.52.0

### Minor Changes

- [Changed] - Standardise component mount/unmount approach across component tests ([#1232](https://github.com/justeattakeaway/pie/pull/1232)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 2.51.1

### Patch Changes

- [Fixed] - Danger reporting when no categories added to changeset ([#1185](https://github.com/justeattakeaway/pie/pull/1185)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.51.0

### Minor Changes

- [Added] - Readme section for how we use events in our web components ([#1173](https://github.com/justeattakeaway/pie/pull/1173)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 2.50.0

### Minor Changes

- [Added] - Some brief documentation around testing our web components using Playwright ([#1148](https://github.com/justeattakeaway/pie/pull/1148)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 2.49.0

### Minor Changes

- [Added] - Render an input inside of pie-input with a type property that defaults to text ([#1138](https://github.com/justeattakeaway/pie/pull/1138)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 2.48.0

### Minor Changes

- [Added] - New pie-input component with boilerplate code ([#1135](https://github.com/justeattakeaway/pie/pull/1135)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 2.47.1

### Patch Changes

- [Fixed] - stylelint-config-pie folder name ([#1112](https://github.com/justeattakeaway/pie/pull/1112)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.47.0

### Minor Changes

- [Added] - pie-tag project label ([#1098](https://github.com/justeattakeaway/pie/pull/1098)) by [@dandel10n](https://github.com/dandel10n)

## 2.46.0

### Minor Changes

- [Changed] - mark pie-webc-core as an external dependency ([#1070](https://github.com/justeattakeaway/pie/pull/1070)) by [@raoufswe](https://github.com/raoufswe)

## 2.45.0

### Minor Changes

- [Changed] - Updated to latest Playwright packages ([#1072](https://github.com/justeattakeaway/pie/pull/1072)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 2.44.0

### Minor Changes

- [Fixed] - storybook controls don't updated when changed ([#1066](https://github.com/justeattakeaway/pie/pull/1066)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - the overview and code pages for the icon button component ([#993](https://github.com/justeattakeaway/pie/pull/993)) by [@raoufswe](https://github.com/raoufswe)

## 2.43.0

### Minor Changes

- [Fixed] - list pie-icons-configs as a dev dependency ([#1053](https://github.com/justeattakeaway/pie/pull/1053)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- [Fixed] - Issue where build wasn't being executed before snapshot creation. ([#1045](https://github.com/justeattakeaway/pie/pull/1045)) by [@siggerzz](https://github.com/siggerzz)

- [Changed] - Update changeset snapshot regex and set github token ([#1050](https://github.com/justeattakeaway/pie/pull/1050)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Changed] - Use both variants of github token ([#1052](https://github.com/justeattakeaway/pie/pull/1052)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Changed] - Ignore apps during snapshot comment ([#1049](https://github.com/justeattakeaway/pie/pull/1049)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Added] - Turbo token to build in snapshot workflow ([#1047](https://github.com/justeattakeaway/pie/pull/1047)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 2.42.0

### Minor Changes

- [Removed] - lit dependency in favour of pie-webc-core ([#1037](https://github.com/justeattakeaway/pie/pull/1037)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Changed] - the icon size of the xsmall icon-button should be 20px ([#1042](https://github.com/justeattakeaway/pie/pull/1042)) by [@raoufswe](https://github.com/raoufswe)

  [Changed] - rely on the padding prop to apply padding for the card stories

## 2.41.0

### Minor Changes

- [Fixed] - icons in pie link stories aren't shown if the story url is directly visited ([#1036](https://github.com/justeattakeaway/pie/pull/1036)) by [@siggerzz](https://github.com/siggerzz)

- [Changed] - spinner sizes should be fully spelt out such as large not l ([#1036](https://github.com/justeattakeaway/pie/pull/1036)) by [@siggerzz](https://github.com/siggerzz)

- [Fixed] - add webc-core as a dep in the switch component ([#1036](https://github.com/justeattakeaway/pie/pull/1036)) by [@siggerzz](https://github.com/siggerzz)

## 2.40.0

### Minor Changes

- [Changed] - Updated the following dependencies: ([#1027](https://github.com/justeattakeaway/pie/pull/1027)) by [@raoufswe](https://github.com/raoufswe)

  - `lit` - `2.8.0` > `3.0.2`
  - `typescript` - `5.1.3` > `5.2.2`

  [Removed] - Unused `@lit-labs/*` resolutions.
  [Fixed] - Bug where `dev` tasks weren't building their dependencies where applicable.

## 2.40.0-next.0

### Minor Changes

- [Changed] - Updated the following dependencies: ([#1025](https://github.com/justeattakeaway/pie/pull/1025)) by [@raoufswe](https://github.com/raoufswe)

  - `lit` - `2.8.0` > `3.0.2`
  - `typescript` - `5.1.3` > `5.2.2`

  [Removed] - Unused `@lit-labs/*` resolutions.
  [Fixed] - Bug where `dev` tasks weren't building their dependencies where applicable.

## 2.39.1

### Patch Changes

- [Changed] - Move body-scroll-lock from modal's peerDependencies to dependencies ([#998](https://github.com/justeattakeaway/pie/pull/998)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Fixed] - danger check allow pre-json changes through ([#1003](https://github.com/justeattakeaway/pie/pull/1003)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.39.0

### Minor Changes

- [Added] - DangerJS added to the repo for PR checks ([#952](https://github.com/justeattakeaway/pie/pull/952)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.38.0

### Minor Changes

- [Changed] - reuse pie-spinner in pie-button ([#958](https://github.com/justeattakeaway/pie/pull/958)) by [@raoufswe](https://github.com/raoufswe)

- [Changed] - reuse pie-spinner in pie-modal ([#960](https://github.com/justeattakeaway/pie/pull/960)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- [Changed] - Use latest pie-design-tokens ([#979](https://github.com/justeattakeaway/pie/pull/979)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 2.37.0

### Minor Changes

- [Updated] - Volta / package.json `engines` to support Node 20 ([#943](https://github.com/justeattakeaway/pie/pull/943)) by [@siggerzz](https://github.com/siggerzz)

## 2.36.0

### Minor Changes

- [Added] - VSCode extension recommendations for the PIE monorepo. ([#956](https://github.com/justeattakeaway/pie/pull/956)) by [@siggerzz](https://github.com/siggerzz)

## 2.35.0

### Minor Changes

- [Added] - `isLoading` prop to `pie-icon-button` ([#953](https://github.com/justeattakeaway/pie/pull/953)) by [@raoufswe](https://github.com/raoufswe)

  [Added] - `visually-hidden` mixin to `pie-css` and use it in components when needed
  [Added] - `button-interactive-states` mixin to use in `pie-icon-button` and `pie-button`

## 2.34.0

### Minor Changes

- [Changed] - Update monorepo and storybook to use renamed component(s) ([#944](https://github.com/justeattakeaway/pie/pull/944)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 2.33.0

### Minor Changes

- [Fixed] - `default` and `inverse` variants to use `elevation-card` and `elevation-dark-card` tokens ([#907](https://github.com/justeattakeaway/pie/pull/907)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

  [Changed] - Refactored `interactionType` to `tag` as the component can only be interactive

  [Fixed] - Disabled state to apply the disabled colour token and reduce opacity on images

  [Fixed] - Disabled state should use the disabled cursor

  [Fixed] - Variants should apply their color token by default

## 2.32.0

### Minor Changes

- [Changed] - README to refer to separate contributing guide ([#904](https://github.com/justeattakeaway/pie/pull/904)) by [@LTurns](https://github.com/LTurns)

## 2.31.1

### Patch Changes

- [Fixed] - Issue with Slack notification functionality where $PRIORITIZED_BLOCKS had no value assigned, causing invalid JSON when $BLOCKS array was assigned a value ([#898](https://github.com/justeattakeaway/pie/pull/898)) by [@siggerzz](https://github.com/siggerzz)

## 2.31.0

### Minor Changes

- [Fixed] - Hide `underline` and `iconPlacement` props when `isStandalone` is set to false in storybook ([#885](https://github.com/justeattakeaway/pie/pull/885)) by [@raoufswe](https://github.com/raoufswe)

  [Fixed] - The touch target area is much larger than the text when `isStandalone` is set to true

## 2.30.0

### Minor Changes

- [Added] - Github action settings to ensure the required CI jobs are passing ([#874](https://github.com/justeattakeaway/pie/pull/874)) by [@fernandofranca](https://github.com/fernandofranca)

## 2.29.0

### Minor Changes

- [Changed] - Updated component README structure ([#857](https://github.com/justeattakeaway/pie/pull/857)) by [@ashleynolan](https://github.com/ashleynolan)

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 2.28.0

### Minor Changes

- [Changed] - Replace `@justeat/browserslist-config-fozzie` with `@justeattakeaway/browserslist-config-pie` ([#855](https://github.com/justeattakeaway/pie/pull/855)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 2.27.2

### Patch Changes

- [Changed] - Align naming of LICENSE files ([#848](https://github.com/justeattakeaway/pie/pull/848)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Changed] - Align author field for all packages ([#852](https://github.com/justeattakeaway/pie/pull/852)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 2.27.1

### Patch Changes

- [Changed] - Align body-scroll-lock versions to meet peer requirements ([#841](https://github.com/justeattakeaway/pie/pull/841)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 2.27.0

### Minor Changes

- [Added] - Allow HTML in slot on Storybook for modal and card ([#825](https://github.com/justeattakeaway/pie/pull/825)) by [@raoufswe](https://github.com/raoufswe)

  [Added] - `DOMPurify` to ensure the passed content is sanitized

### Patch Changes

- [Updated] - pie-design-tokens version bump to 5.8.1 ([#837](https://github.com/justeattakeaway/pie/pull/837)) by [@dandel10n](https://github.com/dandel10n)

- [Updated] - pie-design-tokens version bump to 5.8.0 ([#832](https://github.com/justeattakeaway/pie/pull/832)) by [@dandel10n](https://github.com/dandel10n)

## 2.26.0

### Minor Changes

- [Fixed] Safari ios scroll issue ([#819](https://github.com/justeattakeaway/pie/pull/819)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 2.25.0

### Minor Changes

- [Added] - support outline, inverse and outline-inverse variants ([#789](https://github.com/justeattakeaway/pie/pull/789)) by [@raoufswe](https://github.com/raoufswe)

## 2.24.1

### Patch Changes

- [Changed] - add missing peer dependencies ([#784](https://github.com/justeattakeaway/pie/pull/784)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - update packages, including `@babel/core` and `@justeat/pie-design-tokens`

## 2.24.0

### Minor Changes

- [Added] add modal content and toggles ([#772](https://github.com/justeattakeaway/pie/pull/772)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- [Fixed] - `@babel/traverse` issue that was causing `wc-next10` build to fail. ([#754](https://github.com/justeattakeaway/pie/pull/754)) by [@siggerzz](https://github.com/siggerzz)

  ### Issue Overview

  GitHub Issue - https://github.com/babel/babel/issues/15765

  We had a number of packages that depend on the following dependency `"@babel/traverse": "7.22.8"`.

  In this version, there is a bug that causes following error when trying to build `wc-next10`:

  ```js
  You gave us a visitor for the node type ClassAccessorProperty but it's not a valid type.
  ```

## 2.23.0

### Minor Changes

- [Updated] - `main` visual tests to only update baseline images for packages that have changed since the last commit. ([#774](https://github.com/justeattakeaway/pie/pull/774)) by [@siggerzz](https://github.com/siggerzz)

## 2.22.0

### Minor Changes

- [Added] - missing project labels for cookie-banner, toggle-switch and a new one for card-container ([#766](https://github.com/justeattakeaway/pie/pull/766)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Upgraded `@justeat/pie-design-tokens` to `5.7.0` ([#770](https://github.com/justeattakeaway/pie/pull/770)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Improve browser-test job filter to only run visual tests on components changes and not in pie-docs. ([#768](https://github.com/justeattakeaway/pie/pull/768)) by [@maledr5](https://github.com/maledr5)

## 2.21.0

### Minor Changes

- [Added] - allow the link component to behave like a button ([#748](https://github.com/justeattakeaway/pie/pull/748)) by [@raoufswe](https://github.com/raoufswe)

  [Changed] - fixed visual tests for the link and divider components

- [Added] - New pie-cookie-banner component (just generated files) ([#746](https://github.com/justeattakeaway/pie/pull/746)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 2.20.1

### Patch Changes

- - [Changed] - Shared `@rollup/plugin-node-resolve` within the monorepo ([#717](https://github.com/justeattakeaway/pie/pull/717)) by [@fernandofranca](https://github.com/fernandofranca)

## 2.20.0

### Minor Changes

- [Updated] GitHub Actions workflow to run linting before builds ([#712](https://github.com/justeattakeaway/pie/pull/712)) by [@siggerzz](https://github.com/siggerzz)

### Patch Changes

- [Fixed] - Issue where in-progress jobs were being cancelled on 'main'. This occasionally resulted in packages not being versioned/published correctly. ([#712](https://github.com/justeattakeaway/pie/pull/712)) by [@siggerzz](https://github.com/siggerzz)

- [Changed] - use latest pie-design-tokens ([#716](https://github.com/justeattakeaway/pie/pull/716)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 2.19.0

### Minor Changes

- [Added] - RTL option to the pie web component generator ([#690](https://github.com/justeattakeaway/pie/pull/690)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - Create a skeleton divider web component using our component generator ([#693](https://github.com/justeattakeaway/pie/pull/693)) by [@raoufswe](https://github.com/raoufswe)

- [Updated] - `./husky/pre-push` to use Turborepo for linting, rather than `eslint` directly. ([#695](https://github.com/justeattakeaway/pie/pull/695)) by [@siggerzz](https://github.com/siggerzz)

  [Updated] - `turbo.json` so that lint commands no longer `"dependsOn": "^build"`.
  [Updated] - Example app `.eslintrc.js` config to specify `root: true` to prevent root monorepo config being used.
  [Updated] - `.eslintrc.js` / `.eslintignore` files across the monorepo

- [Added] - init pie link ([#707](https://github.com/justeattakeaway/pie/pull/707)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- [Changed] - use latest pie-design-tokens ([#694](https://github.com/justeattakeaway/pie/pull/694)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Fixed] - Issue in .eslintrc.js where root `tsconfig.json` was being used for override `parserOptions` instead of the projects `tsconfig.json. ([#695](https://github.com/justeattakeaway/pie/pull/695)) by [@siggerzz](https://github.com/siggerzz)

## 2.18.0

### Minor Changes

- [Added] - Package skeleton for `pie-css` styling library ([#668](https://github.com/justeattakeaway/pie/pull/668)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Updated] - visual tests to only run on non-draft PRs ([#665](https://github.com/justeattakeaway/pie/pull/665)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - import design tokens into CSS file and add snapshot and W3C validity testing ([#671](https://github.com/justeattakeaway/pie/pull/671)) by [@jamieomaguire](https://github.com/jamieomaguire)

- add default Jira ticket number to renovate commit messages ([#662](https://github.com/justeattakeaway/pie/pull/662)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Updated] - @typescript-eslint/parser package ([#673](https://github.com/justeattakeaway/pie/pull/673)) by [@JoshuaNg2332](https://github.com/JoshuaNg2332)

  [Added] - .eslintignorefile

- [Fixed] - Prevent tree-shaking of components in storybook ([#667](https://github.com/justeattakeaway/pie/pull/667)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Removed] - Built webc icons from source control
  [Added] - Type declaration files for components
  [Added] - Types for pie-icons
  [Added] - TS version of pie-icons-configs/config.js (Will be used after DSW-1025)
  [Added] - Webc icon tests for width, height and base classes
  [Changed] - Update pie-icons-webc build to generate a slightly different template for regular and large icons (using different types, etc.)
  [Changed] - Update pie-icons-webc rollup config to remove commonjs build
  [Changed] - Use `just-kebab-case` and `just-pascal-case` instead of `kebab-case` and `pascal-case` to simplify usage (and they're more recently maintained)

## 2.17.0

### Minor Changes

- [Added] - Created package skeleton for pie-toggle-switch component ([#658](https://github.com/justeattakeaway/pie/pull/658)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Updated] - GitHub Actions to only run visual tests against changed packages ([#655](https://github.com/justeattakeaway/pie/pull/655)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - Husky pre-push script for eslint ([#659](https://github.com/justeattakeaway/pie/pull/659)) by [@JoshuaNg2332](https://github.com/JoshuaNg2332)

- [Changed] - Add js/ts linting and fix errors ([#653](https://github.com/justeattakeaway/pie/pull/653)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 2.16.0

### Minor Changes

- [Changed] - commitlint config to check for a Jira ticket in the commit message ([#625](https://github.com/justeattakeaway/pie/pull/625)) by [@fernandofranca](https://github.com/fernandofranca)

  [Changed] - commit-message and pre-commit git hooks scripts to check for the presence of a Jira ticket in the commit message
  [Added] - pre-pull git hooks script to check the presence of a Jira ticket in the branch name
  [Added] - Github workflow for checking PRs title format
  [Changed] - performance improvements for commitizen

- [Changed] - Upgrade Storybook to 7.1.0 ([#644](https://github.com/justeattakeaway/pie/pull/644)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 2.15.0

### Minor Changes

- [Added] - New deploy step for example apps on `push` events to `main` ([#610](https://github.com/justeattakeaway/pie/pull/610)) by [@siggerzz](https://github.com/siggerzz)

  [Added] - `generate:examples` script to package.json

### Patch Changes

- [Removed] - Duplicate `needs` property .github/workflows/example-apps-ci.yml ([#621](https://github.com/justeattakeaway/pie/pull/621)) by [@siggerzz](https://github.com/siggerzz)

## 2.14.0

### Minor Changes

- [Added] pie-webc-testing library ([#582](https://github.com/justeattakeaway/pie/pull/582)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 2.13.0

### Minor Changes

- [Added] - Modal backdrop functionality ([#559](https://github.com/justeattakeaway/pie/pull/559)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 2.12.1

### Patch Changes

- [Fixed] - Issue where changeset PR's weren't running CI jobs ([#537](https://github.com/justeattakeaway/pie/pull/537)) by [@siggerzz](https://github.com/siggerzz)

## 2.12.0

### Minor Changes

- [Added] - percy token for pie-modal ([#522](https://github.com/justeattakeaway/pie/pull/522)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Changed] - Make pie-webc-core public ([#523](https://github.com/justeattakeaway/pie/pull/523)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - yarn.lock ([#513](https://github.com/justeattakeaway/pie/pull/513)) by [@fernandofranca](https://github.com/fernandofranca)

## 2.11.0

### Minor Changes

- [Added] - pie-components-config package ([#487](https://github.com/justeattakeaway/pie/pull/487)) by [@fernandofranca](https://github.com/fernandofranca)

- [Removed] - React `createComponent` wrappers from react/next apps ([#426](https://github.com/justeattakeaway/pie/pull/426)) by [@LTurns](https://github.com/LTurns)

- [Changed] - Updated to use stylelint-config-pie ([#482](https://github.com/justeattakeaway/pie/pull/482)) by [@ashleynolan](https://github.com/ashleynolan)

### Patch Changes

- [Fixed] - Issue where `yarn test` cache wasn't invalidated when `__snapshots__` directory was updated. ([#492](https://github.com/justeattakeaway/pie/pull/492)) by [@siggerzz](https://github.com/siggerzz)

- [Removed] - `@justeattakeaway/pie-icons` dependency ([#492](https://github.com/justeattakeaway/pie/pull/492)) by [@siggerzz](https://github.com/siggerzz)

## 2.10.0

### Minor Changes

- [Added] - pie-icon-button component package with empty component code ([#486](https://github.com/justeattakeaway/pie/pull/486)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 2.9.0

### Minor Changes

- [Added] - text file to document PIE documentation site redirect rules ([#477](https://github.com/justeattakeaway/pie/pull/477)) by [@FayeCarter](https://github.com/FayeCarter)

- [Updated] - pie-docs `test:generate-routes` script to run `build` before running tests ([#473](https://github.com/justeattakeaway/pie/pull/473)) by [@FayeCarter](https://github.com/FayeCarter)

- [Added] - new project pie-webc-core ([#478](https://github.com/justeattakeaway/pie/pull/478)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Removed] - empty folder ([#480](https://github.com/justeattakeaway/pie/pull/480)) by [@jamieomaguire](https://github.com/jamieomaguire)

- Updated dependencies [[`ce810b027`](https://github.com/justeattakeaway/pie/commit/ce810b027ab32c79f908c1265b4116fb1d0d37d2), [`5109f5d97`](https://github.com/justeattakeaway/pie/commit/5109f5d975d5ad77d936d8513bb499899d7552b9)]:
  - @justeattakeaway/pie-icons@3.2.0

## 2.8.0

### Minor Changes

- [Changed] - update codeowners file to include designers ([#452](https://github.com/justeattakeaway/pie/pull/452)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Fixed] - Updating references to pie-stylelint-config pkg (to stylelint-config-pie) ([#468](https://github.com/justeattakeaway/pie/pull/468)) by [@ashleynolan](https://github.com/ashleynolan)

- [Changed] - Updated PR template to prompt contributors to check Storybook for component changes ([#461](https://github.com/justeattakeaway/pie/pull/461)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Fixed] - Updated CODEOWNERS location to root of .github file ([#469](https://github.com/justeattakeaway/pie/pull/469)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.7.0

### Minor Changes

- [Changed] - Updated github labeler ([#439](https://github.com/justeattakeaway/pie/pull/439)) by [@fernandofranca](https://github.com/fernandofranca)

### Patch Changes

- [Fixed] - Updating eslint configs to reference new pkg name ([#460](https://github.com/justeattakeaway/pie/pull/460)) by [@ashleynolan](https://github.com/ashleynolan)

- [Fixed] - Issue where deploys would fail when 'push' events occured to `feature-*` / `beta-*` branches due to no associated pull-request number. These branches will now only be triggered once a PR has been created. ([#458](https://github.com/justeattakeaway/pie/pull/458)) by [@siggerzz](https://github.com/siggerzz)

## 2.6.0

### Minor Changes

- [Added] - Figma integration into Storybook ([#427](https://github.com/justeattakeaway/pie/pull/427)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - New renovate groupings for example apps ([#435](https://github.com/justeattakeaway/pie/pull/435)) by [@siggerzz](https://github.com/siggerzz)

- [Fixed] Linting errors in pie-icons-vue. ([#413](https://github.com/justeattakeaway/pie/pull/413)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] Allow pie-eslint-config to use itself as linting config.
  [Added] Typescript linting to pie-monorepo.

### Patch Changes

- [Fixed] - Invalid JSON in `renovate.json` ([#435](https://github.com/justeattakeaway/pie/pull/435)) by [@siggerzz](https://github.com/siggerzz)

- Updated dependencies [[`6d1d84695`](https://github.com/justeattakeaway/pie/commit/6d1d8469557b10cb12e63c56c677bd5b1defa0eb), [`5f25a416b`](https://github.com/justeattakeaway/pie/commit/5f25a416b892dd13473f203e9ea5d691af55ba52)]:
  - @justeattakeaway/pie-icons@3.1.0

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

# Changelog

## 0.40.0

### Minor Changes

- [Changed] - spinner sizes should be fully spelt out such as large not l ([#1036](https://github.com/justeattakeaway/pie/pull/1036)) by [@siggerzz](https://github.com/siggerzz)

### Patch Changes

- Updated dependencies [[`10cf54269`](https://github.com/justeattakeaway/pie/commit/10cf542691f18bc4a93e84e2045985e14efc6330)]:
  - @justeattakeaway/pie-spinner@0.3.0

## 0.39.1

### Patch Changes

- Updated dependencies [[`afb4b53b9`](https://github.com/justeattakeaway/pie/commit/afb4b53b94c016116155f81054778df3b856b8f4)]:
  - @justeattakeaway/pie-webc-core@0.12.0
  - @justeattakeaway/pie-spinner@0.2.2

## 0.39.1-next.0

### Patch Changes

- Updated dependencies [[`fdd981eb7`](https://github.com/justeattakeaway/pie/commit/fdd981eb739db0ff1eda27f56f3a4eca97f34652)]:
  - @justeattakeaway/pie-webc-core@0.12.0-next.0
  - @justeattakeaway/pie-spinner@0.2.2-next.0

## 0.39.0

### Minor Changes

- [Added] - `isResponsive` and `responsiveSize` prop ([#986](https://github.com/justeattakeaway/pie/pull/986)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.38.0

### Minor Changes

- [Changed] - inverse button hover & active states added ([#992](https://github.com/justeattakeaway/pie/pull/992)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.37.1

### Patch Changes

- [Changed] - Allow more specific overrides in vite config ([#980](https://github.com/justeattakeaway/pie/pull/980)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Component dependencies are the only JET packages that should be marked as external

## 0.37.0

### Minor Changes

- [Changed] - reuse pie-spinner in pie-button ([#958](https://github.com/justeattakeaway/pie/pull/958)) by [@raoufswe](https://github.com/raoufswe)

## 0.36.1

### Patch Changes

- [Changed] - Add missing imports for dependent components ([#949](https://github.com/justeattakeaway/pie/pull/949)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Update component import section of READMEs

## 0.36.0

### Minor Changes

- [Added] - Functionality to ensure pressing enter when in a form using a pie-button will trigger a form submit ([#935](https://github.com/justeattakeaway/pie/pull/935)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - `isLoading` prop to `pie-icon-button` ([#953](https://github.com/justeattakeaway/pie/pull/953)) by [@raoufswe](https://github.com/raoufswe)

  [Added] - `visually-hidden` mixin to `pie-css` and use it in components when needed
  [Added] - `button-interactive-states` mixin to use in `pie-icon-button` and `pie-button`

## 0.35.0

### Minor Changes

- [Removed] - pie-monorepo specific content from Web Component READMES ([#904](https://github.com/justeattakeaway/pie/pull/904)) by [@LTurns](https://github.com/LTurns)

## 0.34.0

### Minor Changes

- [Fixed] - Set explicit height and fix xsmall and small bg colors ([#909](https://github.com/justeattakeaway/pie/pull/909)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.33.0

### Minor Changes

- [Added] - @tagname jsdoc comment to top of component class and use new defineCustomElement function to define the components ([#905](https://github.com/justeattakeaway/pie/pull/905)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.32.0

### Minor Changes

- [Added] - Native form submit and reset handling logic to pie-button ([#877](https://github.com/justeattakeaway/pie/pull/877)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.31.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.30.0

### Minor Changes

- [Added] - set sideEffects package.json property to correctly communicate to bundlers such as webpack that js files in the component dist folders contain side effects and should therefore not be treeshaken when the entire library is imported. [Reference](https://cube.dev/blog/how-to-build-tree-shakeable-javascript-libraries) ([#854](https://github.com/justeattakeaway/pie/pull/854)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Changed] - Align author field for all packages ([#852](https://github.com/justeattakeaway/pie/pull/852)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.29.0

### Minor Changes

- [Changed] - Use pie-css to handle focus styling ([#836](https://github.com/justeattakeaway/pie/pull/836)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.28.1

### Patch Changes

- [Changed] - add missing peer dependencies ([#784](https://github.com/justeattakeaway/pie/pull/784)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - update packages, including `@babel/core` and `@justeat/pie-design-tokens`

## 0.28.0

### Minor Changes

- [Fixed] - transparency mode added to hsl mixin for ghost and outline buttons ([#778](https://github.com/justeattakeaway/pie/pull/778)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.27.0

### Minor Changes

- [Changed] - allow one icon to be set ([#764](https://github.com/justeattakeaway/pie/pull/764)) by [@raoufswe](https://github.com/raoufswe)

  [Fixed] - icon should sit next to the text when isFullWidth is true

  [Fixed] - icon should not be visible when isLoading is true

## 0.26.0

### Minor Changes

- [Added] vite config setting to exclude react from wrapper. ([#732](https://github.com/justeattakeaway/pie/pull/732)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Added] - outline-inverse variant for pie-button ([#752](https://github.com/justeattakeaway/pie/pull/752)) by [@raoufswe](https://github.com/raoufswe)

## 0.25.0

### Minor Changes

- [Updated] - Export all of `defs.ts` file from component `index.ts` files ([#722](https://github.com/justeattakeaway/pie/pull/722)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.24.1

### Patch Changes

- [Changed] - use latest pie-design-tokens ([#716](https://github.com/justeattakeaway/pie/pull/716)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.24.0

### Minor Changes

- [Added] - destructive and destructive-ghost button variants ([#686](https://github.com/justeattakeaway/pie/pull/686)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Fixed] - hover and active colours for ghost-inverse variant
  [Added] - mixin for reassigning button spinner HSL custom properties

- [Added] - `font-size` function added & tests ([#681](https://github.com/justeattakeaway/pie/pull/681)) by [@ashleynolan](https://github.com/ashleynolan)

  [Added] - adding pie-css to pie-button

### Patch Changes

- [Changed] - use latest pie-design-tokens ([#694](https://github.com/justeattakeaway/pie/pull/694)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.23.0

### Minor Changes

- [Added] - axe builder to be shared as a base instance across broswer accessibility tests ([#669](https://github.com/justeattakeaway/pie/pull/669)) by [@raoufswe](https://github.com/raoufswe)

## 0.22.0

### Minor Changes

- [Fixed] - Prevent tree-shaking of components in storybook ([#667](https://github.com/justeattakeaway/pie/pull/667)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Removed] - Built webc icons from source control
  [Added] - Type declaration files for components
  [Added] - Types for pie-icons
  [Added] - TS version of pie-icons-configs/config.js (Will be used after DSW-1025)
  [Added] - Webc icon tests for width, height and base classes
  [Changed] - Update pie-icons-webc build to generate a slightly different template for regular and large icons (using different types, etc.)
  [Changed] - Update pie-icons-webc rollup config to remove commonjs build
  [Changed] - Use `just-kebab-case` and `just-pascal-case` instead of `kebab-case` and `pascal-case` to simplify usage (and they're more recently maintained)

## 0.21.0

### Minor Changes

- [Changed] - Add js/ts linting and fix errors ([#653](https://github.com/justeattakeaway/pie/pull/653)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.20.0

### Minor Changes

- [Added] - Slots for leading and trailing icons ([#634](https://github.com/justeattakeaway/pie/pull/634)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.19.0

### Minor Changes

- [Added] - pie-button loading state ([#603](https://github.com/justeattakeaway/pie/pull/603)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.18.0

### Minor Changes

- [Added] - inverse and ghost-inverse variants to pie-button ([#596](https://github.com/justeattakeaway/pie/pull/596)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Set all component props to public ([#597](https://github.com/justeattakeaway/pie/pull/597)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.17.0

### Minor Changes

- [Changed] - Styles updated to fully match design updates ([#581](https://github.com/justeattakeaway/pie/pull/581)) by [@ashleynolan](https://github.com/ashleynolan)

  - Focus styles have been updated to the new style
  - Padding, font-size and line-heights adjusted inline with designs
  - Outline button text colour updated from `color-content-interactive-tertiary` to `color-content-interactive-secondary`
  - Primary buttons at `xsmall` and `small-productive` now have darker background
  - `ghost` variant background colour changed to `transparent` (rather than #fff)

## 0.16.1

### Patch Changes

- [Changed] - Updated defs to use different array type syntax ([#566](https://github.com/justeattakeaway/pie/pull/566)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.16.0

### Minor Changes

- [Updated] - enum types to string union types to string union types ([#508](https://github.com/justeattakeaway/pie/pull/508)) by [@FayeCarter](https://github.com/FayeCarter)

## 0.15.0

### Minor Changes

- [Changed] - Refactor visual tests to have labels showing props ([#519](https://github.com/justeattakeaway/pie/pull/519)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - use prop variant helper for simpler and more extensive visual tests ([#499](https://github.com/justeattakeaway/pie/pull/499)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - moved pie-webc-core dependency to devDependencies in each component ([#499](https://github.com/justeattakeaway/pie/pull/499)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Additional notes on visual tests and environment variables ([#525](https://github.com/justeattakeaway/pie/pull/525)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] Read me percy config examples ([#529](https://github.com/justeattakeaway/pie/pull/529)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- [Changed] - Use `componentSelector` to define the custom element ([#530](https://github.com/justeattakeaway/pie/pull/530)) by [@raoufswe](https://github.com/raoufswe)

## 0.14.0

### Minor Changes

- [Changed] - customElement.define parameter to string ([#507](https://github.com/justeattakeaway/pie/pull/507)) by [@LTurns](https://github.com/LTurns)

- [Fixed] – Encapsulated styles and removed reflect ([#507](https://github.com/justeattakeaway/pie/pull/507)) by [@LTurns](https://github.com/LTurns)

## 0.13.0

### Minor Changes

- [Changed] - Build script to include generating react wrapper ([#426](https://github.com/justeattakeaway/pie/pull/426)) by [@LTurns](https://github.com/LTurns)

- [Changed] - Deleted old prop validation decorator to replace with shared one from the core package ([#491](https://github.com/justeattakeaway/pie/pull/491)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Changed styles to use CSS Custom Props and host attrs ([#482](https://github.com/justeattakeaway/pie/pull/482)) by [@ashleynolan](https://github.com/ashleynolan)

### Patch Changes

- [Added] - Missing `test:ci` scripts to package.json ([#492](https://github.com/justeattakeaway/pie/pull/492)) by [@siggerzz](https://github.com/siggerzz)

- [Fixed] - Resolved TS Build errors ([#482](https://github.com/justeattakeaway/pie/pull/482)) by [@ashleynolan](https://github.com/ashleynolan)

- [Updated] - components to use the shared configurations ([#487](https://github.com/justeattakeaway/pie/pull/487)) by [@fernandofranca](https://github.com/fernandofranca)

- Updated dependencies [[`090354733`](https://github.com/justeattakeaway/pie/commit/090354733f24f0aa52ce287db7f8d13648414150)]:
  - @justeattakeaway/pie-webc-core@0.2.0

## 0.12.2

### Patch Changes

- Updated dependencies [[`1f79d9d1a`](https://github.com/justeattakeaway/pie/commit/1f79d9d1a6fe9160b244e82d956290136b87187b)]:
  - @justeattakeaway/pie-webc-core@0.1.0

## 0.12.1

### Patch Changes

- [Changed] - Added missing newline at the end of tsconfig.json ([#439](https://github.com/justeattakeaway/pie/pull/439)) by [@fernandofranca](https://github.com/fernandofranca)

  [Changed] - Updated README.md
  [Removed] - Removed npm `dev` script

## 0.12.0

### Minor Changes

- [Changed] - extended readme file to mention props, events and enum exports ([#434](https://github.com/justeattakeaway/pie/pull/434)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Prevent hover and active status on disabled btns and change outline to border for safari support ([#434](https://github.com/justeattakeaway/pie/pull/434)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Removed] - custom event handler and updated tests accordingly ([#434](https://github.com/justeattakeaway/pie/pull/434)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - isFullWidth prop to button ([#434](https://github.com/justeattakeaway/pie/pull/434)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.11.0

### Minor Changes

- [Changed] - Improved readme files ([#418](https://github.com/justeattakeaway/pie/pull/418)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Refactor SCSS to reduce duplication ([#416](https://github.com/justeattakeaway/pie/pull/416)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Copy playwright projects from monorepo root ([#416](https://github.com/justeattakeaway/pie/pull/416)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Split small size into expressive and productive ([#416](https://github.com/justeattakeaway/pie/pull/416)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Removed] the custom decorator and uses the native `customElement` decorator instead ([#417](https://github.com/justeattakeaway/pie/pull/417)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.10.2

### Patch Changes

- [Added] Declare global statement back in. ([#393](https://github.com/justeattakeaway/pie/pull/393)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.10.1

### Patch Changes

- [Fixed] - Added module entry for component ([#378](https://github.com/justeattakeaway/pie/pull/378)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.10.0

### Minor Changes

- [Removed] Global declare statement ([#371](https://github.com/justeattakeaway/pie/pull/371)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.9.0

### Minor Changes

- [Added] - HTMLElementTagNameMap entry for pie-button element ([#364](https://github.com/justeattakeaway/pie/pull/364)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Slot functionality to pie-button component and associated SB and example app integrations ([#364](https://github.com/justeattakeaway/pie/pull/364)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.8.0

### Minor Changes

- [Updated] - Register approach for button web component ([#346](https://github.com/justeattakeaway/pie/pull/346)) by [@fernandofranca](https://github.com/fernandofranca)

  [Added] - "types" field in package.json for better DX and IDE TypesScript support
  [Updated] - Provide Vite settings for generating TypeScript declaration files during build

## 0.7.0

### Minor Changes

- [Updated] button to handle custom events ([#309](https://github.com/justeattakeaway/pie/pull/309)) by [@FayeCarter](https://github.com/FayeCarter)

### Patch Changes

- Add missing Volta settings to package.json ([#322](https://github.com/justeattakeaway/pie/pull/322)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.6.1

### Patch Changes

- [Added] `watch` script in `package.json` ([#233](https://github.com/justeattakeaway/pie/pull/233)) by [@LTurns](https://github.com/LTurns)

  [Added] README content for `yarn watch` script

## 0.6.0

### Minor Changes

- [Added] - state styling to button (focus/hover/active/disabled) ([#234](https://github.com/justeattakeaway/pie/pull/234)) by [@raoufswe](https://github.com/raoufswe)

## 0.5.1

### Patch Changes

- [Changed] - Replaced hard-coded font values with scss variables ([#226](https://github.com/justeattakeaway/pie/pull/226)) by [@LTurns](https://github.com/LTurns)

## 0.5.0

### Minor Changes

- [Changed] - Bring button styles into the component ([#178](https://github.com/justeattakeaway/pie/pull/178)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Added] - Size property to pie-button component ([#178](https://github.com/justeattakeaway/pie/pull/178)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Removed] - index.html file in favour of Storybook ([#178](https://github.com/justeattakeaway/pie/pull/178)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.4.0

### Minor Changes

- [Changed] - Set TSconfig target to ES6 to allow modern syntax such as property accessors ([#171](https://github.com/justeattakeaway/pie/pull/171)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] Create decorator for validating property values ([#171](https://github.com/justeattakeaway/pie/pull/171)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - `variant` property to decide how we style the button ([#171](https://github.com/justeattakeaway/pie/pull/171)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Lit `classmap` directive to handle conditional css class logic and rendering ([#171](https://github.com/justeattakeaway/pie/pull/171)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Refactored props to include validation based on enums and add console errors for invalid values ([#171](https://github.com/justeattakeaway/pie/pull/171)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Renamed `actionType` property to `type` ([#171](https://github.com/justeattakeaway/pie/pull/171)) by [@jamieomaguire](https://github.com/jamieomaguire)

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## v0.3.0

_January 24, 2023_

### Added

- Button default styling (medium).
- JET font family to html file.

## v0.2.0

_January 23, 2023_

### Added

- `actionType` property mapped to `type` attribute.

## v0.1.0

_January 19, 2023_

### Added

- Basic button using Lit
- Initial TypeScript and Vite config

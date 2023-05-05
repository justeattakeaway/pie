# Changelog

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

# @justeattakeaway/pie-components-config

## 0.17.0

### Minor Changes

- [Changed] - tsconfig module settings to ESNext ([#1472](https://github.com/justeattakeaway/pie/pull/1472)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.16.0

### Minor Changes

- [Removed] - Unneeded `bundledJetDeps` array (patch versions are required because pie-components-config is a dev dependency) ([#1378](https://github.com/justeattakeaway/pie/pull/1378)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.15.0

### Minor Changes

- [Added] - Bundle visualiser that runs during build for webc icons, webc core and our components ([#1391](https://github.com/justeattakeaway/pie/pull/1391)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.14.0

### Minor Changes

- [Changed] - Updated TSConfig file with es2021 target ([#1341](https://github.com/justeattakeaway/pie/pull/1341)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.13.0

### Minor Changes

- [Added] - New `playwright-lit-setup` executable to create necessary files for Playwright components tests. ([#1326](https://github.com/justeattakeaway/pie/pull/1326)) by [@siggerzz](https://github.com/siggerzz)

## 0.12.0

### Minor Changes

- [Added] - Data test id attribute to Playwright configs ([#1327](https://github.com/justeattakeaway/pie/pull/1327)) by [@JoshuaNg2332](https://github.com/JoshuaNg2332)

## 0.11.0

### Minor Changes

- [Added] - Vitest types ([#1215](https://github.com/justeattakeaway/pie/pull/1215)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - New Vitest configuration ([#1215](https://github.com/justeattakeaway/pie/pull/1215)) by [@siggerzz](https://github.com/siggerzz)

## 0.10.0

### Minor Changes

- [Changed] - Exported files for use in consuming repos ([#1206](https://github.com/justeattakeaway/pie/pull/1206)) by [@siggerzz](https://github.com/siggerzz)

## 0.9.0

### Minor Changes

- [Changed] - Ensure shared `tsconfig.json` / `vite.config.js` get exported as part of the package ([#1159](https://github.com/justeattakeaway/pie/pull/1159)) by [@siggerzz](https://github.com/siggerzz)

## 0.8.0

### Minor Changes

- [Changed] - Added `@justeattakeaway/pie-wrapper-react` as a devDependency as `build` now relies on the publish `add-react-wrapper` executable ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

## 0.7.0

### Minor Changes

- [Removed] - `private` property in package.json so components can be generated outside of PIE ([#1110](https://github.com/justeattakeaway/pie/pull/1110)) by [@siggerzz](https://github.com/siggerzz)

## 0.6.1

### Patch Changes

- [Changed] - Improve variable name and exclude webc-core from the bundle by default ([#1037](https://github.com/justeattakeaway/pie/pull/1037)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.6.0

### Minor Changes

- [Changed] - Automatically read component dependencies from package.json ([#988](https://github.com/justeattakeaway/pie/pull/988)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.5.0

### Minor Changes

- [Changed] - Allow more specific overrides in vite config ([#980](https://github.com/justeattakeaway/pie/pull/980)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Component dependencies are the only JET packages that should be marked as external

## 0.4.0

### Minor Changes

- [Added] vite config setting to exclude react from wrapper. ([#732](https://github.com/justeattakeaway/pie/pull/732)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.3.0

### Minor Changes

- [Updated] - Export all of `defs.ts` file from component `index.ts` files ([#722](https://github.com/justeattakeaway/pie/pull/722)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.2.0

### Minor Changes

- [Changed] - Made Vite config extendable ([#514](https://github.com/justeattakeaway/pie/pull/514)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.1.0

### Minor Changes

- [Added] - common components configurations ([#487](https://github.com/justeattakeaway/pie/pull/487)) by [@fernandofranca](https://github.com/fernandofranca)

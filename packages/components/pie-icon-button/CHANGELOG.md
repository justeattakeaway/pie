# @justeattakeaway/pie-icon-button

## 0.14.0

### Minor Changes

- [Updated] - Export all of `defs.ts` file from component `index.ts` files ([#722](https://github.com/justeattakeaway/pie/pull/722)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.13.2

### Patch Changes

- [Fixed] - Corrected the following peerDependency: ([#713](https://github.com/justeattakeaway/pie/pull/713)) by [@siggerzz](https://github.com/siggerzz)

  ```js
    "peerDependencies": {
      "@justeat/pie-design-tokens": "5.4.0"
    },
  ```

- [Changed] - use latest pie-design-tokens ([#716](https://github.com/justeattakeaway/pie/pull/716)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.13.1

### Patch Changes

- [Changed] - use latest pie-design-tokens ([#694](https://github.com/justeattakeaway/pie/pull/694)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.13.0

### Minor Changes

- [Added] - axe builder to be shared as a base instance across broswer accessibility tests ([#669](https://github.com/justeattakeaway/pie/pull/669)) by [@raoufswe](https://github.com/raoufswe)

## 0.12.0

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

## 0.11.0

### Minor Changes

- [Changed] - Add js/ts linting and fix errors ([#653](https://github.com/justeattakeaway/pie/pull/653)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.10.0

### Minor Changes

- [Changed] - expose icon-button size css variables for consumers ([#627](https://github.com/justeattakeaway/pie/pull/627)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.9.0

### Minor Changes

- [Changed] - Added slot info the the readme and peerDep added ([#604](https://github.com/justeattakeaway/pie/pull/604)) by [@ashleynolan](https://github.com/ashleynolan)

- [Changed] - Ensure component implements it's props interface ([#611](https://github.com/justeattakeaway/pie/pull/611)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Fixed] - Added IconClose to Visual tests and modal ([#604](https://github.com/justeattakeaway/pie/pull/604)) by [@ashleynolan](https://github.com/ashleynolan)

- [Added] - Slot added to pie-icon-button ([#604](https://github.com/justeattakeaway/pie/pull/604)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.8.0

### Minor Changes

- [Changed] - Set all component props to public ([#597](https://github.com/justeattakeaway/pie/pull/597)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`816909e55`](https://github.com/justeattakeaway/pie/commit/816909e55f464fd191fa8a54e3407b8fbd0cdc29), [`816909e55`](https://github.com/justeattakeaway/pie/commit/816909e55f464fd191fa8a54e3407b8fbd0cdc29), [`816909e55`](https://github.com/justeattakeaway/pie/commit/816909e55f464fd191fa8a54e3407b8fbd0cdc29)]:
  - @justeattakeaway/pie-icons-webc@0.2.0

## 0.7.0

### Minor Changes

- [Changed] - ghost-tertiary renamed to ghost-secondary ([#583](https://github.com/justeattakeaway/pie/pull/583)) by [@ashleynolan](https://github.com/ashleynolan)

### Patch Changes

- Updated dependencies [[`4c3f9348a`](https://github.com/justeattakeaway/pie/commit/4c3f9348a2041494f640cfc35e4c321eee6e550b)]:
  - @justeattakeaway/pie-icons-webc@0.1.0

## 0.6.1

### Patch Changes

- [Changed] - Updated defs to use different array type syntax ([#566](https://github.com/justeattakeaway/pie/pull/566)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.6.0

### Minor Changes

- [Added] - `size` prop added to pie-icon-button ([#557](https://github.com/justeattakeaway/pie/pull/557)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.5.0

### Minor Changes

- [Updated] - enum types to string union types to string union types ([#508](https://github.com/justeattakeaway/pie/pull/508)) by [@FayeCarter](https://github.com/FayeCarter)

## 0.4.0

### Minor Changes

- [Changed] - Refactor visual tests to have labels showing props ([#519](https://github.com/justeattakeaway/pie/pull/519)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - component and a11y browser tests ([#499](https://github.com/justeattakeaway/pie/pull/499)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - moved pie-webc-core dependency to devDependencies in each component ([#499](https://github.com/justeattakeaway/pie/pull/499)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - percy visual tests ([#499](https://github.com/justeattakeaway/pie/pull/499)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Additional notes on visual tests and environment variables ([#525](https://github.com/justeattakeaway/pie/pull/525)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] Read me percy config examples ([#529](https://github.com/justeattakeaway/pie/pull/529)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- [Changed] - Use `componentSelector` to define the custom element ([#530](https://github.com/justeattakeaway/pie/pull/530)) by [@raoufswe](https://github.com/raoufswe)

## 0.3.0

### Minor Changes

- [Changed] - customElement.define parameter to string ([#507](https://github.com/justeattakeaway/pie/pull/507)) by [@LTurns](https://github.com/LTurns)

## 0.2.0

### Minor Changes

- [Added] - Variant and disabled props and styling ([#491](https://github.com/justeattakeaway/pie/pull/491)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Build script to include generating react wrapper ([#426](https://github.com/justeattakeaway/pie/pull/426)) by [@LTurns](https://github.com/LTurns)

### Patch Changes

- [Added] - Missing `test:ci` scripts to package.json ([#492](https://github.com/justeattakeaway/pie/pull/492)) by [@siggerzz](https://github.com/siggerzz)

- [Fixed] - Resolved TS Build errors ([#482](https://github.com/justeattakeaway/pie/pull/482)) by [@ashleynolan](https://github.com/ashleynolan)

- [Updated] - components to use the shared configurations ([#487](https://github.com/justeattakeaway/pie/pull/487)) by [@fernandofranca](https://github.com/fernandofranca)

- Updated dependencies [[`090354733`](https://github.com/justeattakeaway/pie/commit/090354733f24f0aa52ce287db7f8d13648414150)]:
  - @justeattakeaway/pie-webc-core@0.2.0

## 0.1.0

### Minor Changes

- [Added] - base component shell ([#486](https://github.com/justeattakeaway/pie/pull/486)) by [@jamieomaguire](https://github.com/jamieomaguire)

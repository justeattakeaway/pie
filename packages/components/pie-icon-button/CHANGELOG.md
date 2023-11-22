# @justeattakeaway/pie-icon-button

## 0.22.0

### Minor Changes

- [Changed] - spinner sizes should be fully spelt out such as large not l ([#1029](https://github.com/justeattakeaway/pie/pull/1029)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`755d86402`](https://github.com/justeattakeaway/pie/commit/755d8640251f379ef3e55e122601dc6503af3098)]:
  - @justeattakeaway/pie-spinner@0.3.0

## 0.21.3

### Patch Changes

- Updated dependencies [[`afb4b53b9`](https://github.com/justeattakeaway/pie/commit/afb4b53b94c016116155f81054778df3b856b8f4)]:
  - @justeattakeaway/pie-webc-core@0.12.0
  - @justeattakeaway/pie-spinner@0.2.2

## 0.21.3-next.0

### Patch Changes

- Updated dependencies [[`fdd981eb7`](https://github.com/justeattakeaway/pie/commit/fdd981eb739db0ff1eda27f56f3a4eca97f34652)]:
  - @justeattakeaway/pie-webc-core@0.12.0-next.0
  - @justeattakeaway/pie-spinner@0.2.2-next.0

## 0.21.2

### Patch Changes

- [Changed] - Allow more specific overrides in vite config ([#980](https://github.com/justeattakeaway/pie/pull/980)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Component dependencies are the only JET packages that should be marked as external

## 0.21.1

### Patch Changes

- [Changed] - Add missing imports for dependent components ([#949](https://github.com/justeattakeaway/pie/pull/949)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Update component import section of READMEs

- Updated dependencies [[`c75405299`](https://github.com/justeattakeaway/pie/commit/c75405299b867d5a0214584b5172e4598a56ba4d)]:
  - @justeattakeaway/pie-spinner@0.2.1

## 0.21.0

### Minor Changes

- [Added] - `isLoading` prop to `pie-icon-button` ([#953](https://github.com/justeattakeaway/pie/pull/953)) by [@raoufswe](https://github.com/raoufswe)

  [Added] - `visually-hidden` mixin to `pie-css` and use it in components when needed
  [Added] - `button-interactive-states` mixin to use in `pie-icon-button` and `pie-button`

### Patch Changes

- Updated dependencies [[`b7bcd63d1`](https://github.com/justeattakeaway/pie/commit/b7bcd63d1d035f89a8b4db8ea5977b9420d6f9d5), [`72b21e8ad`](https://github.com/justeattakeaway/pie/commit/72b21e8ad03439655653edab01acbb1a78a94ecf)]:
  - @justeattakeaway/pie-spinner@0.2.0

## 0.20.0

### Minor Changes

- [Added] - `inverse` and `ghost-inverse` variants ([#941](https://github.com/justeattakeaway/pie/pull/941)) by [@raoufswe](https://github.com/raoufswe)

  [Fixed] - Icon sizes aren't correct

  [Fixed] - The `outline` variant border is missing

  [Fixed] - The inner ring of focus styles is missing

  [Fixed] - The background of `outline`, `ghost` and `ghost-secondary` variants should be transparent

  [Fixed] - The background of `outline`, `ghost` and `ghost-secondary` variants should be transparent

  [Fixed] - TH disabled state should use the `not-allowed` cursor

## 0.19.0

### Minor Changes

- [Removed] - pie-monorepo specific content from Web Component READMES ([#904](https://github.com/justeattakeaway/pie/pull/904)) by [@LTurns](https://github.com/LTurns)

## 0.18.0

### Minor Changes

- [Added] - @tagname jsdoc comment to top of component class and use new defineCustomElement function to define the components ([#905](https://github.com/justeattakeaway/pie/pull/905)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.17.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.16.0

### Minor Changes

- [Added] - set sideEffects package.json property to correctly communicate to bundlers such as webpack that js files in the component dist folders contain side effects and should therefore not be treeshaken when the entire library is imported. [Reference](https://cube.dev/blog/how-to-build-tree-shakeable-javascript-libraries) ([#854](https://github.com/justeattakeaway/pie/pull/854)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Changed] - Align author field for all packages ([#852](https://github.com/justeattakeaway/pie/pull/852)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.15.0

### Minor Changes

- [Changed] - Use pie-css to handle focus styling ([#836](https://github.com/justeattakeaway/pie/pull/836)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.14.1

### Patch Changes

- [Changed] - add missing peer dependencies ([#784](https://github.com/justeattakeaway/pie/pull/784)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - update packages, including `@babel/core` and `@justeat/pie-design-tokens`

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

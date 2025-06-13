# @justeattakeaway/generator-pie-component

## 0.30.5

### Patch Changes

- [Removed] - unused import from a11y test template ([#2414](https://github.com/justeattakeaway/pie/pull/2414)) by [@siggerzz](https://github.com/siggerzz)

## 0.30.4

### Patch Changes

- [Added] comment to remind to set the CSS display prop when a new component is added ([#2403](https://github.com/justeattakeaway/pie/pull/2403)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.30.3

### Patch Changes

- [Added] - Component overview story and updated readme format ([#2378](https://github.com/justeattakeaway/pie/pull/2378)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.30.2

### Patch Changes

- [Changed] - Components in Storybook moved to a 'Components' section ([#2351](https://github.com/justeattakeaway/pie/pull/2351)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.30.1

### Patch Changes

- [Changed] - use a centralised TS declaration file for common duplicated declares ([#2303](https://github.com/justeattakeaway/pie/pull/2303)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.30.0

### Minor Changes

- [Changed] - Add a v property to all components using vite to bake the version number into the code ([#2301](https://github.com/justeattakeaway/pie/pull/2301)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.29.3

### Patch Changes

- [Updated] - add how to export sub components manually ([#2291](https://github.com/justeattakeaway/pie/pull/2291)) by [@raoufswe](https://github.com/raoufswe)

## 0.29.2

### Patch Changes

- [Added] - repository and homepage references to packages ([#2246](https://github.com/justeattakeaway/pie/pull/2246)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.29.1

### Patch Changes

- [Changed] - templates formatting to avoid ESLint issues ([#2225](https://github.com/justeattakeaway/pie/pull/2225)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.29.0

### Minor Changes

- [Added] - New `inputs` in turbo.json for `test:browser` tasks ([#2136](https://github.com/justeattakeaway/pie/pull/2136)) by [@siggerzz](https://github.com/siggerzz)

## 0.28.0

### Minor Changes

- [Removed] - Unused `test` script ([#2197](https://github.com/justeattakeaway/pie/pull/2197)) by [@siggerzz](https://github.com/siggerzz)

## 0.27.0

### Minor Changes

- [Added] - New exports for native playwright configs ([#2119](https://github.com/justeattakeaway/pie/pull/2119)) by [@siggerzz](https://github.com/siggerzz)

## 0.26.0

### Minor Changes

- [Updated] - structure to follow new testing best practices via rendering in Storybook ([#2088](https://github.com/justeattakeaway/pie/pull/2088)) by [@siggerzz](https://github.com/siggerzz)

## 0.25.0

### Minor Changes

- [Added] - Bundlewatch size limits to components with CI integration ([#2020](https://github.com/justeattakeaway/pie/pull/2020)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.24.0

### Minor Changes

- Add prompt validators for package names ([#2009](https://github.com/justeattakeaway/pie/pull/2009)) by [@marc-lewis](https://github.com/marc-lewis)

## 0.23.0

### Minor Changes

- [Added] - automation to update project-labeler.yml ([#1970](https://github.com/justeattakeaway/pie/pull/1970)) by [@fernandofranca](https://github.com/fernandofranca)

- [Added] - automation to update Storybook with new package ([#1970](https://github.com/justeattakeaway/pie/pull/1970)) by [@fernandofranca](https://github.com/fernandofranca)

- [Added] - automation to update new package dependencies automatically ([#1970](https://github.com/justeattakeaway/pie/pull/1970)) by [@fernandofranca](https://github.com/fernandofranca)

- [Added] - automation to add placeholder Percy token to ci.yml ([#1970](https://github.com/justeattakeaway/pie/pull/1970)) by [@fernandofranca](https://github.com/fernandofranca)

### Patch Changes

- [Changed] - Updated documentation instructions ([#1970](https://github.com/justeattakeaway/pie/pull/1970)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.22.3

### Patch Changes

- [Fixed] - Imports to align with new linting rule ([#1622](https://github.com/justeattakeaway/pie/pull/1622)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Removed] - Empty lines at the start of some files

## 0.22.2

### Patch Changes

- [Changed] - use storybook's Meta type instead of custom StoryMeta type ([#1878](https://github.com/justeattakeaway/pie/pull/1878)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.22.1

### Patch Changes

- [Changed] - Updated README ([#1821](https://github.com/justeattakeaway/pie/pull/1821)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.22.0

### Minor Changes

- [Changed] - Add type keyword where appropriate and remove unnecessary whitespace ([#1797](https://github.com/justeattakeaway/pie/pull/1797)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.21.1

### Patch Changes

- [Added] - pie-css as a dev dependency ([#1667](https://github.com/justeattakeaway/pie/pull/1667)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - updated component generator

## 0.21.0

### Minor Changes

- [Changed] - Invoke the new `add-components` command after generating new components to ensure they are correctly added to pie-webc ([#1426](https://github.com/justeattakeaway/pie/pull/1426)) by [@jamieomaguire](https://github.com/jamieomaguire)

  [Changed] - Improve logging and message formatting

## 0.20.3

### Patch Changes

- - [Changed] - `README.md` simplifying setup instructions ([#1419](https://github.com/justeattakeaway/pie/pull/1419)) by [@fernandofranca](https://github.com/fernandofranca)

  - [Added] - Volta settings
  - [Added] - `test:browsers-setup` script
  - [Changed] - template so it can use `npm-check-updates` to update dependencies

## 0.20.2

### Patch Changes

- [Fixed] - Bug where generated components didn't align with refactored Turborepo build pipeline ([#1377](https://github.com/justeattakeaway/pie/pull/1377)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - pieMetadata object to component package.json files with a componentStatus property to query when needing the current component status ([#1361](https://github.com/justeattakeaway/pie/pull/1361)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.20.1

### Patch Changes

- [Added] - pie-css import to playwright/index.html ([#1281](https://github.com/justeattakeaway/pie/pull/1281)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.20.0

### Minor Changes

- [Added] - Additional content in README on running visual tests ([#1251](https://github.com/justeattakeaway/pie/pull/1251)) by [@LTurns](https://github.com/LTurns)

### Patch Changes

- [Added] - Instructions to readme to update workspace dependencies ([#1258](https://github.com/justeattakeaway/pie/pull/1258)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.19.0

### Minor Changes

- [Changed] - Use new webc-fixtures import in a11y tests ([#1206](https://github.com/justeattakeaway/pie/pull/1206)) by [@siggerzz](https://github.com/siggerzz)

## 0.18.0

### Minor Changes

- [Added] - template file for React base type ([#1164](https://github.com/justeattakeaway/pie/pull/1164)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.17.0

### Minor Changes

- [Changed] - Generator template to correctly extend the shared tsconfig.json ([#1159](https://github.com/justeattakeaway/pie/pull/1159)) by [@siggerzz](https://github.com/siggerzz)

## 0.16.0

### Minor Changes

- [Changed] - Refactor the generator to follow new manifest creation / build functionality. ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

- [Changed] - Added `@justeattakeaway/pie-wrapper-react` as a devDependency as `build` now relies on the publish `add-react-wrapper` executable ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

## 0.15.0

### Minor Changes

- [Changed] - Add missing imports for dependent components ([#949](https://github.com/justeattakeaway/pie/pull/949)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Update component import section of READMEs

- [Changed] - Update component imports in stories ([#949](https://github.com/justeattakeaway/pie/pull/949)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.14.0

### Minor Changes

- [Fixed] - Updated the readme file to be aligned with other components ([#947](https://github.com/justeattakeaway/pie/pull/947)) by [@raoufswe](https://github.com/raoufswe)

## 0.13.0

### Minor Changes

- [Removed] - pie-monorepo specific content from Web Component READMES ([#904](https://github.com/justeattakeaway/pie/pull/904)) by [@LTurns](https://github.com/LTurns)

## 0.12.0

### Minor Changes

- [Changed] - Update component index.ts template to include @tagname js doc comment above class and new defineCustomElement function to define the component ([#905](https://github.com/justeattakeaway/pie/pull/905)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.11.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Changed] - Updated README structure with installation and peerdeps ([#857](https://github.com/justeattakeaway/pie/pull/857)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.10.0

### Minor Changes

- [Added] - set sideEffects package.json property to correctly communicate to bundlers such as webpack that js files in the component dist folders contain side effects and should therefore not be treeshaken when the entire library is imported. [Reference](https://cube.dev/blog/how-to-build-tree-shakeable-javascript-libraries) ([#854](https://github.com/justeattakeaway/pie/pull/854)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Changed] - Align author field for all packages ([#852](https://github.com/justeattakeaway/pie/pull/852)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.9.0

### Minor Changes

- [Changed] - Deleted references to now deleted RTL component props ([#828](https://github.com/justeattakeaway/pie/pull/828)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.8.0

### Minor Changes

- [Added] - use createStory in component generator ([#802](https://github.com/justeattakeaway/pie/pull/802)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Fixed] - whitespace in generated story file

## 0.7.0

### Minor Changes

- [Changed] - Update RTL mixin to infer dir by default and document ([#745](https://github.com/justeattakeaway/pie/pull/745)) by [@raoufswe](https://github.com/raoufswe)

## 0.6.0

### Minor Changes

- [Updated] - Export all of `defs.ts` file from component `index.ts` files ([#722](https://github.com/justeattakeaway/pie/pull/722)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.5.0

### Minor Changes

- [Changed] - skip visual tests ([#709](https://github.com/justeattakeaway/pie/pull/709)) by [@raoufswe](https://github.com/raoufswe)

- [Changed] extend ts config using relative paths ([#704](https://github.com/justeattakeaway/pie/pull/704)) by [@raoufswe](https://github.com/raoufswe)

## 0.4.0

### Minor Changes

- [Added] - RTL option to the pie web component generator ([#690](https://github.com/justeattakeaway/pie/pull/690)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - how to set up VRT to the readme ([#698](https://github.com/justeattakeaway/pie/pull/698)) by [@raoufswe](https://github.com/raoufswe)

- [Changed] - fix output format ([#693](https://github.com/justeattakeaway/pie/pull/693)) by [@raoufswe](https://github.com/raoufswe)

## 0.3.0

### Minor Changes

- [Added] - axe builder to be shared as a base instance across broswer accessibility tests ([#669](https://github.com/justeattakeaway/pie/pull/669)) by [@raoufswe](https://github.com/raoufswe)

- [Changed] - renamed the toggle switch story filename ([#669](https://github.com/justeattakeaway/pie/pull/669)) by [@raoufswe](https://github.com/raoufswe)

  [Added] - testing starting templates for the generator-pie-component

## 0.2.0

### Minor Changes

- [Added] - Scripts linting to the generator itself as well as components it generates ([#654](https://github.com/justeattakeaway/pie/pull/654)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - disable some linting for generated files where its to be expected ([#658](https://github.com/justeattakeaway/pie/pull/658)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.1.0

### Minor Changes

- [Added] - Init a Yeoman generator for PIE Web Components ([#622](https://github.com/justeattakeaway/pie/pull/622)) by [@raoufswe](https://github.com/raoufswe)

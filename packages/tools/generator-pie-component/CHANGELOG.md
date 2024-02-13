# @justeattakeaway/generator-pie-component

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

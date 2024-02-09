# @justeattakeaway/pie-input

## 0.11.0

### Minor Changes

- [Added] - disabled prop ([#1246](https://github.com/justeattakeaway/pie/pull/1246)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.10.0

### Minor Changes

- [Added] - Leading and Trailing content slots to pie-input component ([#1255](https://github.com/justeattakeaway/pie/pull/1255)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.9.0

### Minor Changes

- [Added] - Provide a `formResetCallback` method to enable HTML form resets ([#1218](https://github.com/justeattakeaway/pie/pull/1218)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - defaultValue prop to fallback to if the input is reset ([#1218](https://github.com/justeattakeaway/pie/pull/1218)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Make the `value` property required and default to an empty string ([#1217](https://github.com/justeattakeaway/pie/pull/1217)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.8.0

### Minor Changes

- [Added] - pattern, minlength and maxlength attributes to pie-input component ([#1209](https://github.com/justeattakeaway/pie/pull/1209)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - inputmode, readonly, placeholder, autocomplete and autoFocus properties to pie-input component ([#1213](https://github.com/justeattakeaway/pie/pull/1213)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.7.0

### Minor Changes

- [Changed] - Visual tests to only take screenshots in 375px ([#1188](https://github.com/justeattakeaway/pie/pull/1188)) by [@JoshuaNg2332](https://github.com/JoshuaNg2332)

## 0.6.1

### Patch Changes

- [Removed] - custom-elements.json not needed in source control ([#1181](https://github.com/justeattakeaway/pie/pull/1181)) by [@ashleynolan](https://github.com/ashleynolan)

- Updated dependencies [[`2763c522a`](https://github.com/justeattakeaway/pie/commit/2763c522a9d8df376c0353c3ba8db5dbf9410c08)]:
  - @justeattakeaway/pie-webc-core@0.17.1

## 0.6.0

### Minor Changes

- [Added] - name property to `pie-input` component ([#1170](https://github.com/justeattakeaway/pie/pull/1170)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - `updated` lifecycle method to ensure we update the form value when the value prop is changed externally ([#1170](https://github.com/justeattakeaway/pie/pull/1170)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - React base TypeScript types ([#1164](https://github.com/justeattakeaway/pie/pull/1164)) by [@fernandofranca](https://github.com/fernandofranca)

  [Changed] - set optional props as optional

### Patch Changes

- Updated dependencies [[`918593afd`](https://github.com/justeattakeaway/pie/commit/918593afd939e8c911542235a5d861680ceba2d0)]:
  - @justeattakeaway/pie-webc-core@0.17.0

## 0.5.0

### Minor Changes

- [Added] - `value` property to input component ([#1165](https://github.com/justeattakeaway/pie/pull/1165)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.4.0

### Minor Changes

- [Added] - Use the FormControlMixin to add form association logic to the input component ([#1154](https://github.com/justeattakeaway/pie/pull/1154)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.3.0

### Minor Changes

- [Changed] - Added `@justeattakeaway/pie-wrapper-react` as a devDependency as `build` now relies on the publish `add-react-wrapper` executable ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - Add new `create:manifest` script to create `custom-elements.json` in the components root directory. ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

  [Added] - `custom-elements-manifest.config.mjs`.
  [Changed] - `package.json` to correctly export the produced `custom-elements.json`.

### Patch Changes

- Updated dependencies [[`320ee9d4b`](https://github.com/justeattakeaway/pie/commit/320ee9d4b53df60d2e69256c5a64c7abfbfbae16), [`4c65a8176`](https://github.com/justeattakeaway/pie/commit/4c65a8176273f3883dc2be2d0c8a33aef56f8993), [`320ee9d4b`](https://github.com/justeattakeaway/pie/commit/320ee9d4b53df60d2e69256c5a64c7abfbfbae16)]:
  - @justeattakeaway/pie-webc-core@0.16.0

## 0.2.1

### Patch Changes

- Updated dependencies [[`687bdd904`](https://github.com/justeattakeaway/pie/commit/687bdd90475fef58a492c980a7f7d9261ee94eb9)]:
  - @justeattakeaway/pie-webc-core@0.15.0

## 0.2.0

### Minor Changes

- [Added] - Render an input inside of pie-input with a type property that defaults to text ([#1138](https://github.com/justeattakeaway/pie/pull/1138)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`c4b78bf9a`](https://github.com/justeattakeaway/pie/commit/c4b78bf9a42e165c8feed20197fbe7d5875a9dd4), [`c4b78bf9a`](https://github.com/justeattakeaway/pie/commit/c4b78bf9a42e165c8feed20197fbe7d5875a9dd4)]:
  - @justeattakeaway/pie-webc-core@0.14.0

## 0.1.0

### Minor Changes

- [Added] - Generated component boilerplate code ([#1135](https://github.com/justeattakeaway/pie/pull/1135)) by [@jamieomaguire](https://github.com/jamieomaguire)

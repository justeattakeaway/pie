# @justeattakeaway/pie-tag

## 0.6.1

### Patch Changes

- [Changed] - replaces inline icon in visual tests with pie-icon-webc ([#1149](https://github.com/justeattakeaway/pie/pull/1149)) by [@dandel10n](https://github.com/dandel10n)

## 0.6.0

### Minor Changes

- [Changed] - Emulate disabled styles via an "isDimmed" prop instead of css vars (lowers the tag opacity) ([#1228](https://github.com/justeattakeaway/pie/pull/1228)) by [@raoufswe](https://github.com/raoufswe)

## 0.5.0

### Minor Changes

- [Changed] - The icon colour of blue-strong, green-strong, and red strong variants should be "content-inverse" ([#1226](https://github.com/justeattakeaway/pie/pull/1226)) by [@raoufswe](https://github.com/raoufswe)

  [Changed] - The icon and label colour of the yellow-subtle variant should be "content-default"

### Patch Changes

- [Fixed] - Percy test mounting issue ([#1224](https://github.com/justeattakeaway/pie/pull/1224)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.4.1

### Patch Changes

- [Removed] - custom-elements.json not needed in source control ([#1181](https://github.com/justeattakeaway/pie/pull/1181)) by [@ashleynolan](https://github.com/ashleynolan)

- Updated dependencies [[`2763c522a`](https://github.com/justeattakeaway/pie/commit/2763c522a9d8df376c0353c3ba8db5dbf9410c08)]:
  - @justeattakeaway/pie-webc-core@0.17.1

## 0.4.0

### Minor Changes

- [Added] - React base TypeScript types ([#1164](https://github.com/justeattakeaway/pie/pull/1164)) by [@fernandofranca](https://github.com/fernandofranca)

  [Changed] - set optional props as optional

### Patch Changes

- Updated dependencies [[`918593afd`](https://github.com/justeattakeaway/pie/commit/918593afd939e8c911542235a5d861680ceba2d0)]:
  - @justeattakeaway/pie-webc-core@0.17.0

## 0.3.0

### Minor Changes

- [Changed] - Added `@justeattakeaway/pie-wrapper-react` as a devDependency as `build` now relies on the publish `add-react-wrapper` executable ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - Add new `create:manifest` script to create `custom-elements.json` in the components root directory. ([#1144](https://github.com/justeattakeaway/pie/pull/1144)) by [@siggerzz](https://github.com/siggerzz)

  [Added] - `custom-elements-manifest.config.mjs`.
  [Changed] - `package.json` to correctly export the produced `custom-elements.json`.

### Patch Changes

- Updated dependencies [[`320ee9d4b`](https://github.com/justeattakeaway/pie/commit/320ee9d4b53df60d2e69256c5a64c7abfbfbae16), [`4c65a8176`](https://github.com/justeattakeaway/pie/commit/4c65a8176273f3883dc2be2d0c8a33aef56f8993), [`320ee9d4b`](https://github.com/justeattakeaway/pie/commit/320ee9d4b53df60d2e69256c5a64c7abfbfbae16)]:
  - @justeattakeaway/pie-webc-core@0.16.0

## 0.2.0

### Minor Changes

- [Added] - Tag component functionality ([#1123](https://github.com/justeattakeaway/pie/pull/1123)) by [@dandel10n](https://github.com/dandel10n)

### Patch Changes

- Updated dependencies [[`687bdd904`](https://github.com/justeattakeaway/pie/commit/687bdd90475fef58a492c980a7f7d9261ee94eb9)]:
  - @justeattakeaway/pie-webc-core@0.15.0

## 0.1.1

### Patch Changes

- Updated dependencies [[`c4b78bf9a`](https://github.com/justeattakeaway/pie/commit/c4b78bf9a42e165c8feed20197fbe7d5875a9dd4), [`c4b78bf9a`](https://github.com/justeattakeaway/pie/commit/c4b78bf9a42e165c8feed20197fbe7d5875a9dd4)]:
  - @justeattakeaway/pie-webc-core@0.14.0

## 0.1.0

### Minor Changes

- [Added] - pie-tag component shell ([#1098](https://github.com/justeattakeaway/pie/pull/1098)) by [@dandel10n](https://github.com/dandel10n)

# @justeattakeaway/pie-toast

## 0.4.6

### Patch Changes

- [Changed] - Complete the toast code page ([#2068](https://github.com/justeattakeaway/pie/pull/2068)) by [@thejfreitas](https://github.com/thejfreitas)

## 0.4.5

### Patch Changes

- [Added] - the role attribute to the toast component ([#2051](https://github.com/justeattakeaway/pie/pull/2051)) by [@raoufswe](https://github.com/raoufswe)

## 0.4.4

### Patch Changes

- Updated dependencies [[`7df4bd2ff`](https://github.com/justeattakeaway/pie/commit/7df4bd2ffd332dcd8c01f1825beb22bd316ec13f)]:
  - @justeattakeaway/pie-icon-button@1.0.0
  - @justeattakeaway/pie-button@1.0.0

## 0.4.3

### Patch Changes

- [Changed] - Update prop definitions to align with conventions ([#2000](https://github.com/justeattakeaway/pie/pull/2000)) by [@xander-marjoram](https://github.com/xander-marjoram)

  - Use component props interface for all prop type definitions (e.g., `CardProps['href']` instead of just `string`).
    - Don't use `?` when declaring props, this comes from the interface anyway.
  - If the prop has a default value, use that from `defaultProps`, and let TS infer the type.
  - Make sure all uses of `@property()` have a `type`.
  - `@state` properties should be private and prefixed with an underscore.
  - Use `!` when a `@query` property is guaranteed to exist, reducing the complexity of the code.

- Updated dependencies [[`8d03ebaae`](https://github.com/justeattakeaway/pie/commit/8d03ebaae477b6a68a7d2af53224c05e787c7f4f)]:
  - @justeattakeaway/pie-icon-button@0.29.2
  - @justeattakeaway/pie-button@0.49.4

## 0.4.2

### Patch Changes

- Updated dependencies [[`88d9d42ff`](https://github.com/justeattakeaway/pie/commit/88d9d42ff5652fb8de49c2fdffab0220f32b6f5a)]:
  - @justeattakeaway/pie-icons-webc@1.1.0
  - @justeattakeaway/pie-icon-button@0.29.1

## 0.4.1

### Patch Changes

- Updated dependencies [[`8bfafc270`](https://github.com/justeattakeaway/pie/commit/8bfafc2707f7d01a64c313d23c1a4e490dc16d56), [`f46774b84`](https://github.com/justeattakeaway/pie/commit/f46774b84f05d04a7769d2ce1a0d52d2717c09c0), [`c55581f90`](https://github.com/justeattakeaway/pie/commit/c55581f9033395645ba59947a76bfbe6f17cd904), [`956afc8b9`](https://github.com/justeattakeaway/pie/commit/956afc8b9bfef9f4aff5070c44f6064da04b943d)]:
  - @justeattakeaway/pie-icons-webc@1.0.0
  - @justeattakeaway/pie-icon-button@0.29.0

## 0.4.0

### Minor Changes

- [Added] - `duration` property into pie-toast ([#1862](https://github.com/justeattakeaway/pie/pull/1862)) by [@thejfreitas](https://github.com/thejfreitas)

  [Added] - Auto-dismiss functionality into pie-toast with default duration of 5 seconds

### Patch Changes

- [Fixed] - Imports to align with new linting rule ([#1622](https://github.com/justeattakeaway/pie/pull/1622)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Removed] - Empty lines at the start of some files

- Updated dependencies [[`efb35af66`](https://github.com/justeattakeaway/pie/commit/efb35af6604ca86d0b39ec01421a376050698edf)]:
  - @justeattakeaway/pie-button@0.49.3
  - @justeattakeaway/pie-icon-button@0.28.14
  - @justeattakeaway/pie-webc-core@0.24.2
  - @justeattakeaway/pie-icons-webc@0.25.3

## 0.3.4

### Patch Changes

- Updated dependencies [[`b14535438`](https://github.com/justeattakeaway/pie/commit/b14535438da533aeb9a5520c2a239203dafb0c9a)]:
  - @justeattakeaway/pie-webc-core@0.24.1
  - @justeattakeaway/pie-button@0.49.2
  - @justeattakeaway/pie-icon-button@0.28.13
  - @justeattakeaway/pie-icons-webc@0.25.2

## 0.3.3

### Patch Changes

- Updated dependencies [[`e99674628`](https://github.com/justeattakeaway/pie/commit/e99674628547f4603663e36634c8f04a4757bdc7)]:
  - @justeattakeaway/pie-button@0.49.1
  - @justeattakeaway/pie-icon-button@0.28.12

## 0.3.2

### Patch Changes

- Updated dependencies [[`7de240b2d`](https://github.com/justeattakeaway/pie/commit/7de240b2d00df37493f4d29d9a7baac10ebc90ee), [`2f8c8be9d`](https://github.com/justeattakeaway/pie/commit/2f8c8be9d8c90a2e2be2e58d7d2bec99cbac9792)]:
  - @justeattakeaway/pie-button@0.49.0
  - @justeattakeaway/pie-icons-webc@0.25.1
  - @justeattakeaway/pie-icon-button@0.28.11

## 0.3.1

### Patch Changes

- [Added] - pie-css as a dev dependency ([#1667](https://github.com/justeattakeaway/pie/pull/1667)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - updated component generator

- Updated dependencies [[`b32bf5d25`](https://github.com/justeattakeaway/pie/commit/b32bf5d257bb87da130194a9fe2ddf3ec93bced9), [`ccfe4583c`](https://github.com/justeattakeaway/pie/commit/ccfe4583c274531d879b9c877f4c5c08dc9418cd)]:
  - @justeattakeaway/pie-icon-button@0.28.10
  - @justeattakeaway/pie-button@0.48.1
  - @justeattakeaway/pie-icons-webc@0.25.0

## 0.3.0

### Minor Changes

- [Added] - variant and isStrong props ([#1619](https://github.com/justeattakeaway/pie/pull/1619)) by [@thejfreitas](https://github.com/thejfreitas)

## 0.2.1

### Patch Changes

- [Added] - Missing package dependencies ([#1659](https://github.com/justeattakeaway/pie/pull/1659)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.2.0

### Minor Changes

- [Added] - Initial core properties and markup ([#1563](https://github.com/justeattakeaway/pie/pull/1563)) by [@thejfreitas](https://github.com/thejfreitas)

## 0.1.1

### Patch Changes

- Updated dependencies [[`ff65968f6`](https://github.com/justeattakeaway/pie/commit/ff65968f61ef9c998662416f72c1b9999567d9f7)]:
  - @justeattakeaway/pie-webc-core@0.24.0

## 0.1.0

### Minor Changes

- [Added] generated Toast component files ([#1517](https://github.com/justeattakeaway/pie/pull/1517)) by [@leksaBoiko](https://github.com/leksaBoiko)

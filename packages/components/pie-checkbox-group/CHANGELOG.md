# @justeattakeaway/pie-checkbox-group

## 0.7.11

### Patch Changes

- [Added] - repository and homepage references to packages ([#2246](https://github.com/justeattakeaway/pie/pull/2246)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.7.10

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-assistive-text@0.8.4

## 0.7.9

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-assistive-text@0.8.3

## 0.7.8

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-assistive-text@0.8.2

## 0.7.7

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-assistive-text@0.8.1

## 0.7.6

### Patch Changes

- [Changed] - Update prop definitions to align with conventions ([#2000](https://github.com/justeattakeaway/pie/pull/2000)) by [@xander-marjoram](https://github.com/xander-marjoram)

  - Use component props interface for all prop type definitions (e.g., `CardProps['href']` instead of just `string`).
    - Don't use `?` when declaring props, this comes from the interface anyway.
  - If the prop has a default value, use that from `defaultProps`, and let TS infer the type.
  - Make sure all uses of `@property()` have a `type`.
  - `@state` properties should be private and prefixed with an underscore.
  - Use `!` when a `@query` property is guaranteed to exist, reducing the complexity of the code.

- Updated dependencies [[`92f9965d3`](https://github.com/justeattakeaway/pie/commit/92f9965d3b48d7ad7765a25ce7304c0cbcaac072)]:
  - @justeattakeaway/pie-assistive-text@0.8.0

## 0.7.5

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-assistive-text@0.7.5

## 0.7.4

### Patch Changes

- [Updated] - prefix private methods and states with an underscore ([#2006](https://github.com/justeattakeaway/pie/pull/2006)) by [@raoufswe](https://github.com/raoufswe)

## 0.7.3

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-assistive-text@0.7.4

## 0.7.2

### Patch Changes

- [Fixed] - Imports to align with new linting rule ([#1622](https://github.com/justeattakeaway/pie/pull/1622)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Removed] - Empty lines at the start of some files

- Updated dependencies [[`efb35af66`](https://github.com/justeattakeaway/pie/commit/efb35af6604ca86d0b39ec01421a376050698edf)]:
  - @justeattakeaway/pie-assistive-text@0.7.3
  - @justeattakeaway/pie-webc-core@0.24.2

## 0.7.1

### Patch Changes

- Updated dependencies [[`b14535438`](https://github.com/justeattakeaway/pie/commit/b14535438da533aeb9a5520c2a239203dafb0c9a)]:
  - @justeattakeaway/pie-webc-core@0.24.1
  - @justeattakeaway/pie-assistive-text@0.7.2

## 0.7.0

### Minor Changes

- [Added] - initial `pie-radio` files from component generator ([#1795](https://github.com/justeattakeaway/pie/pull/1795)) by [@leksaBoiko](https://github.com/leksaBoiko)

## 0.6.3

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-assistive-text@0.7.1

## 0.6.2

### Patch Changes

- [Updated] - checkbox and checkbox-group components status from `alpha` to `beta` ([#1729](https://github.com/justeattakeaway/pie/pull/1729)) by [@dandel10n](https://github.com/dandel10n)

## 0.6.1

### Patch Changes

- Updated dependencies [[`e2274aaac`](https://github.com/justeattakeaway/pie/commit/e2274aaac986fcc288760a22a09e9b4d3b7822b3)]:
  - @justeattakeaway/pie-assistive-text@0.7.0

## 0.6.0

### Minor Changes

- [Added] - Code pages to pie-doc site ([#1672](https://github.com/justeattakeaway/pie/pull/1672)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- [Added] - pie-css as a dev dependency ([#1667](https://github.com/justeattakeaway/pie/pull/1667)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - updated component generator

- Updated dependencies [[`b32bf5d25`](https://github.com/justeattakeaway/pie/commit/b32bf5d257bb87da130194a9fe2ddf3ec93bced9)]:
  - @justeattakeaway/pie-assistive-text@0.6.1

## 0.5.0

### Minor Changes

- [Changed] - replaced label prop with a slot. ([#1660](https://github.com/justeattakeaway/pie/pull/1660)) by [@dandel10n](https://github.com/dandel10n)

  [Changed] - increased spacing after label and before assistive text.
  [Changed] - reduced spacing detween checkboxes in inline mode.

## 0.4.0

### Minor Changes

- [Added] - New `pie-checkbox-group-error` custom event dispatcher. ([#1630](https://github.com/justeattakeaway/pie/pull/1630)) by [@dandel10n](https://github.com/dandel10n)

  [Added] - When in error state component sets `assistiveText` prop for slotted PIE Checkboxes.
  [Changed] - Limited `_slottedChildren` query to pie-checkbox custom elements.

### Patch Changes

- Updated dependencies [[`42cc25ee9`](https://github.com/justeattakeaway/pie/commit/42cc25ee922dfd47c8cb36277ba4f4f7e749b828)]:
  - @justeattakeaway/pie-assistive-text@0.6.0

## 0.3.0

### Minor Changes

- [Added] - New `isInline` prop. ([#1618](https://github.com/justeattakeaway/pie/pull/1618)) by [@dandel10n](https://github.com/dandel10n)

  [Added] - Styling for Checkbox Group.
  [Added] - Visual tests.

## 0.2.0

### Minor Changes

- [Added] - main logic for checkbox-group ([#1581](https://github.com/justeattakeaway/pie/pull/1581)) by [@dandel10n](https://github.com/dandel10n)

## 0.1.0

### Minor Changes

- [Added] - initial pie-checkbox-group files from component generator ([#1570](https://github.com/justeattakeaway/pie/pull/1570)) by [@dandel10n](https://github.com/dandel10n)

### Patch Changes

- Updated dependencies [[`ff65968f6`](https://github.com/justeattakeaway/pie/commit/ff65968f61ef9c998662416f72c1b9999567d9f7)]:
  - @justeattakeaway/pie-webc-core@0.24.0

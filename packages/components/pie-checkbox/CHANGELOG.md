# @justeattakeaway/pie-checkbox

## 0.12.0

### Minor Changes

- [Added] - Checkbox details to doc site code pages ([#1677](https://github.com/justeattakeaway/pie/pull/1677)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- [Added] - pie-css as a dev dependency ([#1667](https://github.com/justeattakeaway/pie/pull/1667)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - updated component generator

- Updated dependencies [[`b32bf5d25`](https://github.com/justeattakeaway/pie/commit/b32bf5d257bb87da130194a9fe2ddf3ec93bced9)]:
  - @justeattakeaway/pie-assistive-text@0.6.1

## 0.11.0

### Minor Changes

- [Changed] - cursor styling for disabled state changed from default to not-allowed. ([#1660](https://github.com/justeattakeaway/pie/pull/1660)) by [@dandel10n](https://github.com/dandel10n)

  [Added] - transition styles to border colour in addition to background colour.

## 0.10.0

### Minor Changes

- [Added] - `visuallyHiddenError` private state and logic to hide pie-assistive-text visually. ([#1630](https://github.com/justeattakeaway/pie/pull/1630)) by [@dandel10n](https://github.com/dandel10n)

  [Added] - Event listener for `pie-checkbox-group-error` custom event.

### Patch Changes

- Updated dependencies [[`42cc25ee9`](https://github.com/justeattakeaway/pie/commit/42cc25ee922dfd47c8cb36277ba4f4f7e749b828)]:
  - @justeattakeaway/pie-assistive-text@0.6.0

## 0.9.0

### Minor Changes

- [Changed] - Replaced label prop with a slot to give consumers the option to easily customize the label. ([#1618](https://github.com/justeattakeaway/pie/pull/1618)) by [@dandel10n](https://github.com/dandel10n)

  [Changed] - Fixed the rtl styles for the tick/dash for checked/indeterminate state.
  [Changed] - Updated visual tests.

### Patch Changes

- [Changed] - isRtl attr changed to data-is-rtl ([#1625](https://github.com/justeattakeaway/pie/pull/1625)) by [@dandel10n](https://github.com/dandel10n)

## 0.8.0

### Minor Changes

- [Added] - event listener for pie-checkbox-group-disabled custom event ([#1581](https://github.com/justeattakeaway/pie/pull/1581)) by [@dandel10n](https://github.com/dandel10n)

  [Removed] - aria prop since aria attributes should be passed to the component directly

## 0.7.1

### Patch Changes

- [Changed] - Update default props generic helper type to include all props by default ([#1582](https://github.com/justeattakeaway/pie/pull/1582)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Naming of generic type
  [Added] - JSDoc comment

- Updated dependencies [[`ff65968f6`](https://github.com/justeattakeaway/pie/commit/ff65968f61ef9c998662416f72c1b9999567d9f7)]:
  - @justeattakeaway/pie-webc-core@0.24.0
  - @justeattakeaway/pie-assistive-text@0.5.1

## 0.7.0

### Minor Changes

- [Added] - checkbox styling ([#1542](https://github.com/justeattakeaway/pie/pull/1542)) by [@dandel10n](https://github.com/dandel10n)

### Patch Changes

- [Changed] - Bug fix for indeterminate + checked state - when the checkbox is checked it should ignore indeterminate css styles, when it is not checked but indeterminate - it should show indeterminate styles ([#1571](https://github.com/justeattakeaway/pie/pull/1571)) by [@dandel10n](https://github.com/dandel10n)

  [Changed] - Rearranged some css styles to reduce specificity
  [Removed] - Extra colon in Percy screenshots

## 0.6.0

### Minor Changes

- [Added] - `assistiveText` and `status` properties. ([#1516](https://github.com/justeattakeaway/pie/pull/1516)) by [@leksaBoiko](https://github.com/leksaBoiko)

### Patch Changes

- [Fixed] Lint error related to line breaks ([#1536](https://github.com/justeattakeaway/pie/pull/1536)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Added] - Missing dependency on pie-assistive-text ([#1543](https://github.com/justeattakeaway/pie/pull/1543)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`e0152be7f`](https://github.com/justeattakeaway/pie/commit/e0152be7fb7dfc0e1c5813160895a88a2bc34d89), [`29ec6b66a`](https://github.com/justeattakeaway/pie/commit/29ec6b66a5b6e4dcb4e72c5f16aeddffb118b0a2)]:
  - @justeattakeaway/pie-assistive-text@0.5.0

## 0.5.0

### Minor Changes

- [Added] - `defaultChecked` property. ([#1504](https://github.com/justeattakeaway/pie/pull/1504)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Clarified usage of `checked` property. This was being used for both the initial and current states.
  [Added] - Form reset behaviour. If the checkbox is associated with a form and the form is reset, `checked` is updated to match the value of `defaultChecked`.

## 0.4.0

### Minor Changes

- [Added] - form support ([#1458](https://github.com/justeattakeaway/pie/pull/1458)) by [@dandel10n](https://github.com/dandel10n)

## 0.3.1

### Patch Changes

- [Changed] - components to use a single source of truth for props default values ([#1451](https://github.com/justeattakeaway/pie/pull/1451)) by [@fernandofranca](https://github.com/fernandofranca)

- Updated dependencies [[`bfb142f84`](https://github.com/justeattakeaway/pie/commit/bfb142f848a06a8ac6662b300289e34eb22bb6bd)]:
  - @justeattakeaway/pie-webc-core@0.23.0

## 0.3.0

### Minor Changes

- [Added] - aria property to support aria-label, aria-labeledby and aria-describedby attributes. ([#1440](https://github.com/justeattakeaway/pie/pull/1440)) by [@dandel10n](https://github.com/dandel10n)

  [Changed] - updated README to include component properties and events

## 0.2.0

### Minor Changes

- [Added] - Render a checkbox in pie-checkbox component with the following properties: name, value, label, checked, disabled, required and indeterminate. ([#1437](https://github.com/justeattakeaway/pie/pull/1437)) by [@dandel10n](https://github.com/dandel10n)

## 0.1.0

### Minor Changes

- [Added] - generated component files ([#1418](https://github.com/justeattakeaway/pie/pull/1418)) by [@fernandofranca](https://github.com/fernandofranca)

### Patch Changes

- Updated dependencies [[`ab5cad99b`](https://github.com/justeattakeaway/pie/commit/ab5cad99bd66e4bd37804b6173bedc37217592d8)]:
  - @justeattakeaway/pie-webc-core@0.22.0

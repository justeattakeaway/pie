# @justeattakeaway/pie-checkbox

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

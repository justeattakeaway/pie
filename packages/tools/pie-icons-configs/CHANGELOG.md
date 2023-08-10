# @justeattakeaway/pie-icons-configs

## 4.5.0

### Minor Changes

- Brings icon packages back in sync ([#679](https://github.com/justeattakeaway/pie/pull/679)) by [@dandel10n](https://github.com/dandel10n)

## 4.4.0

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

## 4.3.0

### Minor Changes

- [Added] - helpers moved to pie-icons-configs ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

## 4.0.0

### Minor Changes

- [Changed]: iconSize prop renamed to size prop ([#574](https://github.com/justeattakeaway/pie/pull/574)) by [@dandel10n](https://github.com/dandel10n)

## 3.6.0

### Patch Changes

- [Fixed]: removes a console error if iconSize prop is not passed ([#556](https://github.com/justeattakeaway/pie/pull/556)) by [@dandel10n](https://github.com/dandel10n)

  [Changed]: in case of invalid `iconSize` being passed to large icons now the size defaults to the `largeIconSizeDefault`

## 3.5.1

### Patch Changes

- [Changed]: removes class attr application for react icons ([#543](https://github.com/justeattakeaway/pie/pull/543)) by [@dandel10n](https://github.com/dandel10n)

## 3.5.0

### Minor Changes

- [Changed] replaces icon size css classes with width and height attr application. ([#532](https://github.com/justeattakeaway/pie/pull/532)) by [@dandel10n](https://github.com/dandel10n)

  [Changed] moves getSvgProps logic to shared configs.js from react and vue configs.
  [Changed] rebuilds icons to apply the changes.

## 3.4.0

### Patch Changes

- [Fixed] - Minor linting fix ([#520](https://github.com/justeattakeaway/pie/pull/520)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 3.0.0

### Major Changes

- [Added] private package for shared icon configs ([#386](https://github.com/justeattakeaway/pie/pull/386)) by [@fernandofranca](https://github.com/fernandofranca)

  [Added] unit tests
  [Changed] regular icon default size

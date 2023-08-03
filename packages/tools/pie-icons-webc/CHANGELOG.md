# @justeattakeaway/pie-icons-webc

## 0.5.0

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

## 0.4.0

### Minor Changes

- [Added] - host-context for pie-button icons and display property for the generated svgs ([#631](https://github.com/justeattakeaway/pie/pull/631)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.3.0

### Minor Changes

- [Changed] - Ensure size only gets set when it hasn't already been generated and `:host-context` styles are added for contextual styling ([#604](https://github.com/justeattakeaway/pie/pull/604)) by [@ashleynolan](https://github.com/ashleynolan)

  This change adds `:host-context` styles to each webc icon, so that if the icon is used
  inside pie-icon-button, then it will apply width/height according to the custom properties
  set by that component.

## 0.2.0

### Minor Changes

- [Changed] - icon name changes reflected by recompile ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

- [Changed] - using shared normalizeIconName function in pie-icons-configs ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

- [Fixed] - Adding TS declaration and linting ignore ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.1.0

### Minor Changes

- [Added] - `pie-icons-webc` package for compiling SVGs as web components ([#585](https://github.com/justeattakeaway/pie/pull/585)) by [@LTurns](https://github.com/LTurns)

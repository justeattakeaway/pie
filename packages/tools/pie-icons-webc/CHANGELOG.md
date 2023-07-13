# @justeattakeaway/pie-icons-webc

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

# @justeattakeaway/pie-tooltip

## 0.2.0

### Minor Changes

- [Added] - A controlled tooltip panel. `trigger` anchors the panel to an element elsewhere in the DOM by `id`, `position` places it on any of twelve sides and alignments, and `size` gives it a fixed 280px, its content's width, or the width of the trigger's parent. `variant` (`default` dark, `inverse` light), `type`, `heading`, `headingLevel`, `isDismissible` and the `content` and `action` slots cover presentation, with `--tooltip-offset` and `--tooltip-width` as CSS escape hatches. The panel re-measures its trigger while open, so it stays anchored through scrolling and resizing. Filling the `action` slot switches the panel from `role="tooltip"` to a named non-modal `role="dialog"`. The consumer owns `isOpen`: the component never writes to it, and emits `pie-tooltip-close` instead. ([#3171](https://github.com/justeattakeaway/pie/pull/3171)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.1.1

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@21.0.0

## 0.1.0

### Minor Changes

- [Added] - Initial empty component scaffolding ([#3168](https://github.com/justeattakeaway/pie/pull/3168)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@20.0.0

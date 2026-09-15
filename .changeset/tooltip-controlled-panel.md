---
"@justeattakeaway/pie-tooltip": minor
---

[Added] - A controlled tooltip panel. `trigger` anchors the panel to an element elsewhere in the DOM by `id`, `position` places it on any of twelve sides and alignments, and `size` gives it a fixed 280px, its content's width, or the width of the trigger's parent. `variant` (`default` dark, `inverse` light), `type`, `heading`, `headingLevel`, `isDismissible` and the `content` and `action` slots cover presentation, with `--tooltip-offset` and `--tooltip-width` as CSS escape hatches. The panel re-measures its trigger while open, so it stays anchored through scrolling and resizing. Filling the `action` slot switches the panel from `role="tooltip"` to a named non-modal `role="dialog"`. The consumer owns `isOpen`: the component never writes to it, and emits `pie-tooltip-close` instead.

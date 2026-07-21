---
"@justeattakeaway/pie-radio-group": minor
---

[Added] - `variant="list"` on `pie-radio-group` for a divided, list-style radio group: set `variant="list"` on the group and wrap each radio (at any nesting depth) in a `pie-list-item` with `selection-type="radio"`. `variant` handles the divided layout (dividers, no inter-item gap); the group manages keyboard navigation, focus and selection as usual. `variant="default"` (the default) keeps the plain stacked-radio layout.

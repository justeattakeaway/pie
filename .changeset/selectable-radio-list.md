---
"@justeattakeaway/pie-radio-group": minor
---

[Added] - `variant="list"` on `pie-radio-group` for a divided, list-style radio group: wrap each radio in a `pie-list-item` (at any nesting depth) and set `variant="list"` on the group. The group provides the selection type to its items via context, so `selection-type` is not needed per row, and it manages keyboard navigation, focus, selection, and the items' roles and ARIA. `variant="default"` (the default) keeps the plain stacked-radio layout.

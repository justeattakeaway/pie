---
"@justeattakeaway/pie-webc-core": minor
---

[Added] - `selectionTypeContext`, a context a selection container (a `pie-radio-group` / `pie-checkbox-group`) uses to tell its descendant `pie-list-item`s what control they host, so each item derives its role and ARIA from the container rather than repeating `selection-type` on every row. Crosses shadow boundaries and reaches descendants at any depth without prop drilling.

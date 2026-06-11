---
"@justeattakeaway/pie-list": minor
---

[Added] - `disabled` property on `pie-list-item`. In `single`/`multi` lists, disabled items are skipped by arrow-key navigation and ignore clicks, and the list reflects state via `aria-disabled`. In static lists (no `selection-type`), the property is a no-op.

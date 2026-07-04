---
"@justeattakeaway/pie-list": minor
---

[Added] - `pie-list-item` gains a `selection-type` prop (`none` | `radio` | `checkbox` | `switch`, default `none`) that makes the whole row selectable. With `selection-type="radio"` (inside a `pie-radio-group`) the item takes a `presentation` role, names the slotted radio from its `primaryText`, `secondaryText` and `metaText`, hides the duplicated visible text from assistive technology, forwards row clicks to the radio, and shows hover and active states on the row (suppressed when the radio or group is disabled).

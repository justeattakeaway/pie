---
"@justeattakeaway/pie-list": minor
---

[Added] - `pie-list-item` can host an interactive control to make the whole row selectable, via a `selection-type` prop (`none` | `radio` | `checkbox` | `switch`, default `none`). With a selection type it takes a `presentation` role (for radio/checkbox), names the control from its `primaryText`, `secondaryText` and `metaText`, hides the duplicated visible text from assistive technology, and forwards row clicks to the control. A `disabled` prop applies the disabled row styling and stops row-click forwarding (set it alongside the control's own `disabled`); a disabling ancestor (a `pie-radio-group`) also cascades its disabled state to the rows.

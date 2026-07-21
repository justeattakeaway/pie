---
"@justeattakeaway/pie-list": minor
---

[Added] - `pie-list-item` can host an interactive control to make the whole row selectable: it takes a `presentation` role, names the control from its `primaryText`, `secondaryText` and `metaText`, hides the duplicated visible text from assistive technology, forwards row clicks to the control, and shows hover and active states on the row (suppressed when the control or its group is disabled). Inside a `pie-radio-group` (`variant="list"`) the container supplies the selection type via context, so no per-item configuration is needed. A `selection-type` prop (`none` | `radio` | `checkbox` | `switch`, default `none`) is available for items with no such container (for example a slotted `switch`) or to override the container. A `disabled` prop applies the disabled row styling and stops row-click forwarding (set it alongside the control's own `disabled`).

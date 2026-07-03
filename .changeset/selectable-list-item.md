---
"@justeattakeaway/pie-list": minor
---

[Added] - `pie-list-item` now adapts when placed inside a radio group: it takes a `presentation` role, mirrors its `primaryText`, `secondaryText` and `metaText` onto the slotted control's `aria-label` and `aria-description`, hides the duplicated visible text from assistive technology, forwards row clicks to the control, and shows hover and active states on the row (suppressed when the control is disabled). `pie-list` provides its list type to descendant items via context.

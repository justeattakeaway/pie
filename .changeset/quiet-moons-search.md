---
'@justeattakeaway/pie-dropdown': minor
'@justeattakeaway/pie-list': minor
'@justeattakeaway/pie-webc': minor
'@justeattakeaway/pie-webc-core': minor
---

[Added] - New `pie-dropdown` component: a form-associated dropdown supporting single and multi selection, an optional search field for filtering options, loading and no-results states, and full keyboard and screen reader support (single select uses a listbox with roving focus; multi select uses checkbox rows inside a checkbox group). The popover opens on click or keyboard focus, with focus moving into the option list as an `ArrowDown` open does.
[Added] - `RovingTabindexController` exported from `pie-webc-core` for arrow-key, Home/End and type-ahead navigation across a group of items.
[Added] - New `option` interaction type on `pie-list-item`: the item becomes an `option` row with interactive states, for use inside listbox-style containers such as the dropdown popover; selection state and focus remain owned by the container.
[Added] - `pie-dropdown` re-exported from the `pie-webc` umbrella package.

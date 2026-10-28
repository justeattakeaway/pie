---
'@justeattakeaway/pie-dropdown': minor
'@justeattakeaway/pie-list': minor
'@justeattakeaway/pie-webc': minor
'@justeattakeaway/pie-webc-core': minor
---

[Added] - New `pie-dropdown` component: a form-associated dropdown supporting single and multi selection, an optional search field for filtering options, loading and no-results states, and full keyboard and screen reader support (single select uses a listbox with roving focus; multi select uses checkbox rows inside a checkbox group). The popover opens on click or keyboard focus and always renders below the field, never above it: non-searchable variants move focus into the option list (as an `ArrowDown` open does), while searchable variants keep the caret in the search field so typing filters immediately — typing while focused on an option returns focus to the search field and filters. The option list is never part of the page tab sequence — the field is the single tab stop and the list is navigated with arrow keys. In multi-select variants with a selection, the count chip's close button is the first tab stop (the trigger is skipped while the chip is shown), so keyboard users can clear every selection and Tab straight to the options.
[Added] - `RovingTabindexController` exported from `pie-webc-core` for arrow-key, Home/End and type-ahead navigation across a group of items. An `isTabbable` option removes the group from the page tab sequence entirely, and an `isTypeaheadEnabled` option disables type-ahead, for combobox-style popovers where the field is the single tab stop and printable characters belong in the textbox.
[Added] - New `option` interaction type on `pie-list-item`: the item becomes an `option` row with interactive states, for use inside listbox-style containers such as the dropdown popover; selection state and focus remain owned by the container.
[Added] - `pie-dropdown` re-exported from the `pie-webc` umbrella package.

---
'@justeattakeaway/pie-dropdown': minor
'@justeattakeaway/pie-list': minor
'@justeattakeaway/pie-webc': minor
'@justeattakeaway/pie-webc-core': minor
---

[Added] - New `pie-dropdown` component: a form-associated dropdown supporting single and multi selection, an optional search field, loading and no-results states, and full keyboard and screen reader support (single select uses a listbox with roving focus; multi select uses checkbox rows inside a checkbox group). The component is server-side rendering safe (declarative shadow root, deterministic internal ids) and works in controlled and uncontrolled modes: the `value` prop drives the component, and the `change` event (exposed as `onChange` in the generated React wrapper — read the value from `event.target.value`) flows changes back, including when the owning form is reset (custom behaviour, unlike native controls).

[Added] - The popover is positioned with CSS directly below the field and never flips above it; note it is clipped by a scrollable or `overflow: hidden` ancestor, so give the field room below it inside such containers. The listbox stays mounted (hidden while closed) after first open so re-opens do not re-insert it and interrupt screen reader announcements, and the focused option is visibly indicated with the PIE focus ring however the popover was opened.

[Added] - Non-searchable fields open on click or keyboard focus (focus-open never moves focus — the arrow keys move focus into the option list, never `Tab`, so the field's other controls stay reachable); searchable fields open on the first keystroke, the arrow keys, a click or the chevron — not on focus, so the `aria-expanded` state change never interrupts the field's focus announcement. The chevron is the pointer way out in searchable variants; the caret always stays in the search field.

[Added] - Search filters options whose primary or secondary text contains the typed text, case-insensitively; typing while focused on an option returns focus to the search field and filters. Options set while the popover is open — e.g. fetched asynchronously in response to `pie-dropdown-search` — are rendered immediately. Selecting from filtered results shows the selection in the field and clears the search, so the next open starts from the full list.

[Added] - In multi-select variants with a selection, the count chip's close button is the first tab stop (the trigger is skipped while the chip is shown) and opens the popover on keyboard focus, so keyboard users can clear every selection and Tab straight to the options. The clear affordances (the chip's close button and the single-select clear button) append the field's accessible name to their own for screen reader context, e.g. "Clear all 2 selections, Meal", and are fully disabled when the field is disabled.

[Added] - The selected option's leading icon (`icon-{value}` slots) shows in the field alongside the selection text — in every variant, open or closed, searching or not — and stays in its option row too (the row renders a clone of the slotted icon; replacing or re-slotting the icon updates both). All copy is prop-driven: `selectedCountText`, `optionsAvailableText` and `noSelectionText` accept `{count}` placeholders / custom strings, and `assistiveText` is announced as the field's accessible description.

[Added] - `RovingTabindexController` exported from `pie-webc-core` for arrow-key, Home/End and type-ahead navigation across a group of items. An `isTabbable` option removes the group from the page tab sequence entirely, and an `isTypeaheadEnabled` option disables type-ahead, for combobox-style popovers where the field is the single tab stop and printable characters belong in the textbox.

[Added] - New `option` interaction type on `pie-list-item`: the item becomes an `option` row with interactive states, for use inside listbox-style containers such as the dropdown popover; selection state and focus remain owned by the container.

[Added] - `pie-dropdown` re-exported from the `pie-webc` umbrella package.

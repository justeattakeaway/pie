# pie-listbox accessibility

A W3 listbox: single-tabstop container that owns selection and keyboard navigation across `pie-listbox-option` children. Behaviour differs by `selection-mode`. For static lists or form-control wrapping (radio / checkbox / switch) see `pie-list`.

## `selection-mode="single"` (default)

**Keyboard**
- Tab: enters at the option referenced by `aria-activedescendant` if set; otherwise the selected option; otherwise the first option. A second Tab leaves the listbox.
- ArrowDown / ArrowUp: moves focus **and** selection. The previously selected option is deselected. Fires `change` once per state flip (so two events per arrow press).
- Space: no-op (selection is implicit in focus).
- Home, End, Enter, letter keys: no-op.

**Mouse**
- Click on an option: selects it (deselecting the previous), focuses it, updates `aria-activedescendant`. Fires `change` per state flip.

**Screen reader / ARIA**
- Listbox: `role="listbox"`. No `aria-multiselectable`.
- Options: `role="option"`, `aria-selected="true|false"` (exactly one option selected at a time).
- `aria-activedescendant` on the listbox mirrors the focused option (requires consumer-provided option `id`s).

## `selection-mode="multiple"`

**Keyboard**
- Tab: enters at the option referenced by `aria-activedescendant` if set; otherwise the first selected option; otherwise the first option. A second Tab leaves the listbox.
- ArrowDown / ArrowUp: moves focus only. Selection unchanged. Stops at ends; does not wrap.
- Space: toggles selection on the focused option. Fires `change`.
- Home, End, Enter, letter keys: no-op.

**Mouse**
- Click on an option: toggles its selection, focuses it, updates `aria-activedescendant`. Fires `change`.

**Screen reader / ARIA**
- Listbox: `role="listbox"`, `aria-multiselectable="true"`.
- Options: `role="option"`, `aria-selected="true|false"`.
- `aria-activedescendant` as above.

## Disabled options

Disabled options are skipped by arrow navigation and ignore clicks. They remain reachable to screen readers (e.g. via VoiceOver swipe) and carry `aria-disabled="true"`.

## Consumer responsibilities

- **Accessible name**: provide `aria-labelledby` (preferred) or `aria-label` on the listbox. The component does not generate one.
- **Option `id`s**: required if you rely on `aria-activedescendant`. The component will not auto-generate them; without ids, the attribute is simply not set.

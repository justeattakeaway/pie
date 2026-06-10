# pie-list accessibility

Behavior per `selection-type`. Keyboard, mouse, and screen-reader output are driven entirely by this one attribute.

## `selection-type="multi"`

**Keyboard**
- Tab: enters at the item referenced by `aria-activedescendant` if set; otherwise the first selected item; otherwise the first item. A second Tab leaves the list.
- ArrowDown / ArrowUp: moves focus only. Selection unchanged. Stops at ends; does not wrap.
- Space: toggles selection on the focused item. Fires `change`.
- Home, End, Enter, letter keys: no-op.

**Mouse**
- Click on an item: toggles its selection, focuses it, updates `aria-activedescendant`. Fires `change`.

**Screen reader / ARIA**
- List: `role="listbox"`, `aria-multiselectable="true"`.
- Items: `role="option"`, `aria-selected="true|false"`.
- `aria-activedescendant` on the list mirrors the focused item (requires consumer-provided item `id`s).

## `selection-type="single"`

**Keyboard**
- Tab: enters at the item referenced by `aria-activedescendant` if set; otherwise the selected item; otherwise the first item. A second Tab leaves the list.
- ArrowDown / ArrowUp: moves focus **and** selection. The previously selected item is deselected. Fires `change` once per state flip (so two events per arrow press).
- Space: no-op (selection is implicit in focus).
- Home, End, Enter, letter keys: no-op.

**Mouse**
- Click on an item: selects it (deselecting the previous), focuses it, updates `aria-activedescendant`. Fires `change` per state flip.

**Screen reader / ARIA**
- List: `role="listbox"`. No `aria-multiselectable`.
- Items: `role="option"`, `aria-selected="true|false"` (exactly one item selected at a time).
- `aria-activedescendant` as above.

## `selection-type` undefined

**Keyboard**
- Skipped entirely by Tab. Items have no `tabindex`. Arrow keys and Space are ignored.

**Mouse**
- Clicks on items are ignored. No selection model is in play.

**Screen reader / ARIA**
- List: `role="list"`. No `aria-multiselectable`, no `aria-activedescendant`.
- Items: `role="listitem"`. No `aria-selected`.

## Consumer responsibilities

- **Accessible name**: provide `aria-labelledby` (preferred) or `aria-label` on the list. The component does not generate one.
- **Item `id`s**: required if you rely on `aria-activedescendant`. The component will not auto-generate them; without ids, the attribute is simply not set.

# pie-list accessibility

Behaviour per `variant`. Keyboard, mouse, and screen-reader output are driven entirely by this one attribute. For single- or multi-select listbox behaviour see `pie-listbox`.

## `variant="static"` (default)

For static, presentational lists.

**Keyboard**
- Skipped entirely by Tab. Items have no `tabindex`. Arrow keys and Space are ignored.

**Mouse**
- Clicks on items are ignored by the list. No selection model is in play.

**Screen reader / ARIA**
- List: `role="list"`.
- Items: `role="listitem"`.

## `variant="radio"`

For lists whose items each slot in an interactive radio control. The list provides the grouping semantics; the slotted control owns its own focus, keyboard behaviour, and selection state.

**Keyboard / Mouse**
- The slotted radio control handles its own interactions. The list does not manage focus, keyboard nav, or selection.

**Screen reader / ARIA**
- List: `role="radiogroup"`.
- Items: no role and no `aria-selected` / `aria-disabled` — the slotted control exposes its own semantics.

## `variant="checkbox"` and `variant="switch"`

For lists whose items each slot in an interactive checkbox or switch control. Behaviour mirrors `radio`, except the list uses `role="group"` (the appropriate container role for collections of checkboxes or switches).

**Keyboard / Mouse**
- The slotted control handles its own interactions.

**Screen reader / ARIA**
- List: `role="group"`.
- Items: no role and no `aria-selected` / `aria-disabled`.

## Consumer responsibilities

- **Accessible name**: provide `aria-labelledby` (preferred) or `aria-label` on the list. The component does not generate one.
- **Slotted controls**: for `radio`, `checkbox`, and `switch` modes, the consumer is responsible for the slotted interactive control's label, state, and disabled handling. The list-item is only a visual container.

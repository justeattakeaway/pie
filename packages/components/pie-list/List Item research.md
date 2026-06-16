# List & ListItem

The list item is a very complicated component. It needs to function as:

1. A multi-select list of options (kind of like a check group with no visible checkboxes)
2. A single select list of options (kind of like a radio group with no visible radios)
3. A static list
4. An actual checkbox group with visible checkboxes
5. An actual radio group with visible radio buttons
6. A group of visible switch components

Variants 1 & 2 above seem to neatly fall into the W3 Listbox pattern as described here. The pattern can provide single and multi-select variants.

Whilst it could be tempting to try and build list/list-item components that fully encapsulate all of the above behind combinations of properties, I think it would be very complex and hard to maintain. Due to current compatibility issues with how pie-radio and pie-checkbox work when not inside their own group components, I think the simplest solution is to utilise native HTML inputs in slots for variants 4 & 5, whilst we slot pie-switch for variant 6. Variants 1 & 2 can be logic living in pie-list. Variant 3 is very simple and requires next to no logic.

## Ways the list can be used

| Use case | `interaction-type` | What goes in each item | Selection owned by |
| --- | --- | --- | --- |
| Static / informational | `none` (or unset) | Text, or an `<a>` for a nav list | n/a |
| Selectable (one or many) | `single-select`, `multi-select` | Text | `pie-list` |
| Form group | `radio`, `checkbox`, `switch` | `<label>` + slotted control | The slotted control |

> VoiceOver quirk: `role="listitem"` is narrated as "selectable list item". We mitigate with `:host { display: list-item; list-style-type: ""; }` on `pie-list-item`.

## `interaction-type` matrix

| `interaction-type` | `pie-list` role | `pie-list-item` role | `aria-multiselectable` | List is tabbable | Selection owned by |
| --- | --- | --- | --- | --- | --- |
| `multi-select` | `listbox` | `option` | `true` | yes (`tabindex="0"`) | `pie-list` |
| `single-select` | `listbox` | `option` | — | yes (`tabindex="0"`) | `pie-list` |
| `radio` | `radiogroup` | (none) | — | no | slotted `<input type="radio">` |
| `checkbox` | `group` | (none) | — | no | slotted `<input type="checkbox">` |
| `switch` | `group` | (none) | — | no | slotted switch control |
| `none` / unset | `list` | `listitem` | — | no | n/a |

In `multi-select` / `single-select`, each `pie-list-item` carries `aria-selected="true|false"` and `aria-disabled="true|false"` — applied by the parent list.

## Keyboard & selection behaviour

| Mode | Tab into list | ArrowUp / ArrowDown | Space | Click |
| --- | --- | --- | --- | --- |
| `multi-select` | focuses list; active item = `aria-activedescendant` ▸ first selected ▸ first enabled | moves active item only (skips `disabled`) | toggles selection of active item | toggles + sets active |
| `single-select` | focuses list; active item = `aria-activedescendant` ▸ selected ▸ first enabled | moves active **and** selects (selection follows focus) | no-op | selects + sets active |
| `radio` / `checkbox` / `switch` | n/a — slotted control owns focus | — | — | — |
| `none` | list is skipped | — | — | — |

- The list is the **single tab stop**; items are not focusable.
- Active item is marked with `data-active` and (when the item has an `id`) mirrored as `aria-activedescendant` on the list.
- `data-active` persists after blur so re-entering the list lands on the same item.

## `pie-list` props

| Prop | Attribute | Type | Default | Notes |
| --- | --- | --- | --- | --- |
| `interactionType` | `interaction-type` | `'multi-select' \| 'single-select' \| 'radio' \| 'checkbox' \| 'switch' \| 'none'` | `undefined` (treated as `none`) | Drives role, aria, tabbability and keyboard behaviour. |

## `pie-list` slots

| Slot | Allowed content |
| --- | --- |
| default | `pie-list-item` only. |

## `pie-list` events

| Event | When | Bubbles | Composed | Detail |
| --- | --- | --- | --- | --- |
| `change` | Item's `selected` toggled by the list (only in `multi-select` / `single-select`) | yes | yes | — (consumer reads state from items) |

## `pie-list-item` props

| Prop | Attribute | Type | Default | Notes |
| --- | --- | --- | --- | --- |
| `selected` | `selected` | `boolean` | `false` | Reflected. Mirrored to `aria-selected` only when parent has applied it (i.e. in select modes). |
| `disabled` | `disabled` | `boolean` | `false` | Reflected. Mirrored to `aria-disabled` only in select modes. Ignored in `none` / `radio` / `checkbox` / `switch`. |
| `value` | — | `string` | `''` | Identifier for the consumer; only meaningful in `multi-select` / `single-select`. |

`id` is not required by the component, but is needed for `aria-activedescendant` to be set on the list — recommended in select modes.

## `pie-list-item` slots

| Slot | Allowed content |
| --- | --- |
| default | Static text, or a single slotted control (`<label>` + `<input type="radio\|checkbox">`, `pie-switch`, `<a>`) depending on the parent's `interaction-type`. |

## Touch target

When the default slot contains a `<label>`, `pie-list-item` lays an `::slotted(label)::after` pseudo-element across the whole item (via `position: absolute; inset: 0;`) so the entire row is the click target for the form control.

## Examples

```html
<pie-list>
  <pie-list-item>Item 1</pie-list-item>
  <pie-list-item>Item 2</pie-list-item>
</pie-list>

<pie-list interaction-type="multi-select" aria-labelledby="toppings-label">
  <pie-list-item id="cheese" value="cheese" selected>Extra cheese</pie-list-item>
  <pie-list-item id="pepperoni" value="pepperoni">Pepperoni</pie-list-item>
  <pie-list-item id="anchovies" value="anchovies" disabled>Anchovies</pie-list-item>
</pie-list>

<pie-list interaction-type="single-select" aria-labelledby="payment-label">
  <pie-list-item id="card" value="card" selected>Credit or debit card</pie-list-item>
  <pie-list-item id="paypal" value="paypal">PayPal</pie-list-item>
</pie-list>

<pie-list interaction-type="radio" aria-labelledby="slot-label">
  <pie-list-item>
    <input id="slot-asap" type="radio" name="delivery-slot" value="asap" checked />
    <label for="slot-asap">As soon as possible</label>
  </pie-list-item>
  <pie-list-item>
    <input id="slot-1830" type="radio" name="delivery-slot" value="1830" />
    <label for="slot-1830">18:30 – 18:45</label>
  </pie-list-item>
</pie-list>

<pie-list interaction-type="checkbox" aria-labelledby="prefs-label">
  <pie-list-item>
    <input id="pref-cutlery" type="checkbox" name="pref" value="cutlery" checked />
    <label for="pref-cutlery">Include cutlery</label>
  </pie-list-item>
</pie-list>

<pie-list interaction-type="switch" aria-labelledby="notif-label">
  <pie-list-item>
    <pie-switch id="notif-orders" checked></pie-switch>
    <label for="notif-orders">Order updates</label>
  </pie-list-item>
</pie-list>
```

## General a11y

Both list and listbox need `aria-labelledby` (or `aria-label`) on `pie-list`.

## Internals

- `ListboxNavigationController` (reactive controller on `pie-list`) handles focus, keydown and click in select modes; delegates to a `SingleSelectionStrategy` or `MultiSelectionStrategy`.
- Roles and aria are applied by `pie-list` in `connectedCallback` / on `interactionType` change — SSR output is unaffected.
- `pie-list-item` does not detect its parent; the parent owns its children's role/aria.

## References

- Listbox APG: https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/
- ARIA spec — listbox: https://w3c.github.io/aria/#listbox
- POC keyboard nav: https://codepen.io/JamieMaguire/pen/bNgVWpo
- POC PR (keyboard): https://github.com/justeattakeaway/pie/pull/2933
- POC PR (layout/slot): https://github.com/justeattakeaway/pie/pull/2911
- Slot/content structure doc: https://docs.google.com/document/d/1HdGvxjY0lqnPQyk2NvewpexM4VBYYDwF-21rJ96jQYA/

# List & Listbox

There are six ways designers reach for a list:

1. A multi-select list of options (like a check group with no visible checkboxes)
2. A single-select list of options (like a radio group with no visible radios)
3. A static list (informational, or a nav list)
4. A list of visible checkboxes
5. A list of visible radio buttons
6. A list of visible switches

We've split these across **two packages** rather than try to express all six through one component:

| Package | Job |
| --- | --- |
| `pie-list` | Static lists and form-control wrappers (variants 3, 4, 5, 6) |
| `pie-listbox` | Selectable lists — single or multiple (variants 1, 2) |

## Why two packages?

Variants 1 & 2 are the W3C Listbox pattern: the container is a single tab stop, owns selection state, and runs its own keyboard navigation. Variants 3–6 are just a styled `<ul>` — the parent doesn't manage focus or selection at all; the slotted control (or nothing, in the static case) owns everything.

Putting both behind one component meant props that only worked half the time (`selected`, `value`), and a controller that had to disable itself in most modes. Splitting along the ARIA seam means each component has one job and every prop it exposes is meaningful.

## `pie-list` + `pie-list-item`

A styled list shell. One prop, `variant`:

- `static` (default) — `role="list"` / `role="listitem"`
- `radio` — `role="radiogroup"`, items have no role (the slotted `<input type="radio">` owns its semantics)
- `checkbox` — `role="group"`, same idea
- `switch` — `role="group"`, slot in a `pie-switch`

`pie-list-item` has no props. It's a row wrapper that handles the padding, the VoiceOver "selectable list item" workaround, and the trick where a slotted `<label>` lays a full-row click target.

```html
<pie-list aria-labelledby="ingredients">
  <pie-list-item>Flour</pie-list-item>
  <pie-list-item>Tomato sauce</pie-list-item>
</pie-list>

<pie-list variant="radio" aria-labelledby="slot">
  <pie-list-item>
    <input id="asap" type="radio" name="slot" checked />
    <label for="asap">As soon as possible</label>
  </pie-list-item>
</pie-list>
```

## `pie-listbox` + `pie-listbox-option`

A W3C listbox. Single tab stop, owns selection and keyboard nav. One prop, `selection-mode`:

- `single` (default) — arrow keys move focus *and* selection
- `multiple` — arrow keys move focus only, Space toggles selection; `aria-multiselectable="true"`

`pie-listbox-option` carries `selected`, `disabled`, and `value`. The listbox fires `change` whenever an option's selected state flips.

```html
<pie-listbox aria-labelledby="payment">
  <pie-listbox-option value="card" selected>Card</pie-listbox-option>
  <pie-listbox-option value="paypal">PayPal</pie-listbox-option>
</pie-listbox>

<pie-listbox selection-mode="multiple" aria-labelledby="toppings">
  <pie-listbox-option value="cheese" selected>Extra cheese</pie-listbox-option>
  <pie-listbox-option value="anchovies" disabled>Anchovies</pie-listbox-option>
</pie-listbox>
```

## How a consumer picks

> Is the user selecting items from this list?
> - **No** → `pie-list` (static, or wrapping form controls)
> - **Yes** → `pie-listbox`

## References

- Listbox APG: https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/
- ARIA spec — listbox: https://w3c.github.io/aria/#listbox
- POC keyboard nav: https://codepen.io/JamieMaguire/pen/bNgVWpo
- POC PR (keyboard): https://github.com/justeattakeaway/pie/pull/2933
- POC PR (layout/slot): https://github.com/justeattakeaway/pie/pull/2911
- Slot/content structure doc: https://docs.google.com/document/d/1HdGvxjY0lqnPQyk2NvewpexM4VBYYDwF-21rJ96jQYA/

# Selection Controller

A reactive [Lit controller](https://lit.dev/docs/composition/controllers/) that manages the
**selection** layer of a composite widget (listbox, grid, menu, tree, segmented control, …) — the
companion to, and composable with, the navigation controllers.

## What it does

Selection is *application state* (usually the control's `value`), which is different from the
*transient* focus state the navigation controllers manage. So this controller is deliberately
**state-free**: the host owns the selection, and the controller only:

- computes the **next** selection from an interaction (`toggle` / `replace` / `extendTo` /
  `selectAll` / `clear`) for the chosen `mode` (`single` | `multiple`),
- hands it back via `onSelectionChange` — the host stores it and re-renders,
- optionally reflects the result as `aria-selected` (or `aria-checked`) on each item, and
  `aria-multiselectable` on the container in multiple mode — when `reflect` is `true` (the default);
  native form controls turn this off (see [`reflect`](#reflect--who-writes-the-aria-not-who-owns-state)),
- tracks selection by a **stable key**, so it survives re-renders and data changes.

The only thing it holds internally is the transient *anchor* for range selection.

It is concerned **only** with selection. It does not navigate, owns no keyboard or pointer listeners
(the host calls its methods from its own handlers), and never touches the host's `value` or emits DOM
events — those stay with the host.

### The component owns the selection

The data flow is a one-way loop with a single source of truth:

```
component value ──> getSelectedKeys() ──> [controller computes next]
       ^                                            │
       │                                onSelectionChange(next)
       │                                            v
   sync() reflects ARIA  <── re-render <── component stores new value
```

Because selection is keyed by `getKey()` (a stable value, not an element reference), reloading or
re-ordering the items can never lose it.

## Importing

```ts
import { SelectionController } from '@justeattakeaway/pie-webc-core';
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `getItems` | `() => HTMLElement[]` | — (required) | The selectable items in DOM order (exclude disabled ones). |
| `getKey` | `(item: HTMLElement) => string` | — (required) | A stable, unique key per item. Selection is tracked by this. |
| `getSelectedKeys` | `() => Set<string>` | — (required) | The host's current selection — the source of truth. |
| `mode` | `'single' \| 'multiple'` | — (required) | Whether one or many items may be selected. |
| `onSelectionChange` | `(nextKeys: Set<string>) => void` | — (required) | Called with the next selection when it changes (never when unchanged). |
| `getContainer` | `() => HTMLElement \| null` | `() => host` | The element to carry `aria-multiselectable` in multiple mode. |
| `selectionAttribute` | `'aria-selected' \| 'aria-checked'` | `'aria-selected'` | Which attribute the controller writes on items (when `reflect` is `true`). |
| `reflect` | `boolean` | `true` | Whether the controller writes the selection ARIA itself. See below. |

### `reflect` — who writes the ARIA (not who owns state)

`reflect` is a separate axis from state ownership. The host **always** owns the value; `reflect` only
decides whether the controller *paints the ARIA* for the selection, or the items express it
themselves. In both modes the controller reads the host's value via `getSelectedKeys()` and never
decides selection.

- **`reflect: true` (default) — custom elements.** When items are non-form elements with no inherent
  selected semantics (e.g. `<div role="option">`, `role="treeitem"`), they have nothing to express
  "selected" on their own, so the controller writes `selectionAttribute` (`aria-selected` /
  `aria-checked`) on each item, and `aria-multiselectable` on the container in multiple mode.
- **`reflect: false` — native form controls.** When items wrap a native `<input type="checkbox">` /
  `radio` (or anything that already exposes its own checked state to the accessibility tree), the
  element conveys selection itself. Writing ARIA on top would be redundant or conflicting, so the
  controller writes nothing — it only computes selection and calls `onSelectionChange`. The host
  reflects the value onto the controls' native `checked` (which it sets, controlled). This also
  suppresses `aria-multiselectable`.

Rule of thumb: **`true` for `role="option"`-style custom items; `false` when a native input owns the
state.** Either way the component owns the value.

## Public API

| Member | Description |
| --- | --- |
| `isSelected(item): boolean` | Whether the item is currently selected. |
| `sync(): void` | Re-applies the selection ARIA. Call after items change outside a render; runs automatically on host update. |
| `replace(item): void` | Selection becomes exactly this item. Single-select, or a plain click in multiple mode. |
| `toggle(item): void` | Multiple: add/remove the item. Single: selects it. |
| `extendTo(item): void` | Multiple: select the contiguous range from the anchor to this item (Shift+click / Shift+Arrow). |
| `selectAll(): void` | Multiple only: select every item. |
| `clear(): void` | Clear the selection. |

The host calls these from its own key/click handlers, passing the relevant item (usually the active
one from a navigation controller).

## Usage

The controller pairs with a navigation controller; the host wires the two together (they never
reference each other). The component owns the value.

### Single-select listbox (selection follows focus)

```ts
@customElement('my-listbox')
export class MyListbox extends LitElement {
    @state() private _selected = new Set<string>();

    #items = () => [...this.renderRoot.querySelectorAll<HTMLElement>('[role="option"]')];

    #selection = new SelectionController(this, {
        getItems: this.#items,
        getKey: (item) => item.dataset.key ?? '',
        getSelectedKeys: () => this._selected,
        mode: 'single',
        onSelectionChange: (keys) => { this._selected = keys; this.dispatchEvent(new Event('change')); },
    });

    #nav = new ActiveDescendantController(this, {
        getItems: this.#items,
        orientation: 'vertical',
        // Selection follows focus: as the active item moves, select it.
        onActiveChange: (item) => { if (item) this.#selection.replace(item); },
    });
}
```

### Multi-select listbox (selection is separate from focus)

Navigation moves the active item; selection is toggled by the host's own `Space`/click handlers:

```ts
#nav = new ActiveDescendantController(this, { getItems: this.#items, orientation: 'vertical' });

#selection = new SelectionController(this, {
    getItems: this.#items,
    getKey: (item) => item.dataset.key ?? '',
    getSelectedKeys: () => this._selected,
    mode: 'multiple',
    onSelectionChange: (keys) => { this._selected = keys; this.dispatchEvent(new Event('change')); },
});

#onKeydown = (e: KeyboardEvent) => {
    if (e.key === ' ' && this.#nav.activeItem) {
        e.preventDefault();
        this.#selection.toggle(this.#nav.activeItem);
    }
};
```

### Pre-selecting items (seeding the initial value from markup)

The controller reflects the host's value via `getSelectedKeys()`; it does **not** scan the DOM for a
declarative `selected` marker. Because the component owns the value, seed it **once** from your
markup (e.g. in `firstUpdated`), and the controller reflects it from there:

```ts
firstUpdated () {
    const preselected = this.#items()
        .filter((option) => option.hasAttribute('selected'))
        .map((option) => option.dataset.key ?? '');

    if (preselected.length) {
        this._selected = new Set(preselected); // the component's value (source of truth)
    }
}
```

Use your **own** attribute/property for the declarative input (here `selected`) and let the
controller own `aria-selected`, so the two never fight. The same approach seeds from a `value`
property, slotted `[selected]` options read on `slotchange`, etc.

A pre-selected item does **not** affect `aria-activedescendant` — selection and the active item are
independent, and this controller never touches navigation. If you want the active item to *start* on
the selected option (recommended for single-select, and necessary when selection follows focus so the
pre-selection isn't replaced as focus moves), coordinate it explicitly in the host:

```ts
firstUpdated () {
    const preselected = this.#items().filter((option) => option.hasAttribute('selected'));
    if (!preselected.length) return;

    this._selected = new Set(preselected.map((option) => option.dataset.key ?? ''));
    this.#nav.setActiveItem(preselected[0]); // start navigation on the selected option
}
```

## Notes & guarantees

- **Stateless by design.** The controller stores no selection of its own (only the range anchor), so
  it can never drift from the host's `value`.
- **Does not auto-detect declarative selection.** It reflects `getSelectedKeys()` only; the host
  seeds its value from markup (see above). This is what keeps the component the single source of truth.
- **Survives data changes.** Selection is keyed by `getKey()`, not element identity.
- **No-op safe.** `onSelectionChange` fires only when the selection actually changes (e.g. clicking
  the already-selected option in single mode does nothing).
- **No re-render imposed.** Like `onActiveChange`, the host decides what to do on change; the ARIA
  reflection happens on the next `sync()` (host update).
- **SSR-safe.** It owns no event listeners; only `hostUpdated` → `sync()` touches the DOM, and that
  is not run during server rendering. The constructor is pure.
- **`active` vs `selected`.** Moving the active item (navigation) is not selecting it; in multi-select
  they are independent, which is why selection is its own controller.

## See also

- [Composite widget controllers — recipes](../README.md) — combining the controllers for common patterns
- [Active Descendant Controller](../activeDescendant/README.md) / [Roving Tabindex Controller](../rovingTabindex/README.md) — the navigation controllers this composes with
- WAI-ARIA APG — [Listbox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- Lit — [Reactive controllers](https://lit.dev/docs/composition/controllers/)

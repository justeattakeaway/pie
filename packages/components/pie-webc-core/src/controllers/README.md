# Composite widget controllers — recipes

Three small reactive controllers that you **combine** to build accessible composite widgets
(tabs, toolbars, radio groups, listboxes, menus, …). Each does exactly one job:

| Controller | Job | Detail |
| --- | --- | --- |
| [`RovingTabindexController`](./rovingTabindex/README.md) | **Navigate** — moves real DOM focus between items (`tabindex` 0/-1) | items are focusable |
| [`ActiveDescendantController`](./activeDescendant/README.md) | **Navigate** — keeps focus on the container, moves `aria-activedescendant` | items are not focused |
| [`SelectionController`](./selection/README.md) | **Select** — single/multi, reflects `aria-selected`/`aria-checked` | the component owns the value |

## The mental model (read this first)

- **Navigation is temporary.** "Which item is focused/active right now." Lost on its own is harmless.
- **Selection is your value.** It persists, and the **component owns it** — the selection controller
  never stores its own copy.
- **You wire them together; they never reference each other.** The seam is a callback (e.g. the
  navigation controller's `onActiveChange`, or your own `keydown`/`focusin` handler) that calls a
  selection method. That's the whole trick.

## Which navigation controller?

```
Should DOM focus land on the individual items?
├─ Yes → RovingTabindexController     (tabs, toolbar, radio group, menu)
└─ No, focus stays on one container → ActiveDescendantController
                                       (listbox, combobox, grid, big/virtualised lists)
```

---

## Recipes

Each recipe shows the controller setup plus the one line that wires them. `#items` is a helper like
`() => [...this.renderRoot.querySelectorAll('[role="…"]')]`.

### 1. Toolbar — navigation only

No selection; just roam the buttons.

```ts
new RovingTabindexController(this, {
    getItems: () => [...this.renderRoot.querySelectorAll('button:not([disabled])')],
    orientation: 'horizontal',
});
```

### 2. Tabs — focus moves, selected tab follows focus

Roving (focus on tabs) + single selection. "Automatic activation": the focused tab is the selected
one.

```ts
#nav = new RovingTabindexController(this, { getItems: this.#tabs, orientation: 'horizontal' });

#selection = new SelectionController(this, {
    getItems: this.#tabs,
    getKey: (tab) => tab.id,
    getSelectedKeys: () => new Set([this.selectedId]),
    mode: 'single',
    onSelectionChange: (keys) => { this.selectedId = [...keys][0]; /* show its panel */ },
});

// Wire: select whichever tab gains focus.
#onFocusin = (e) => { const tab = this.#tabs().find((t) => t === e.target); if (tab) this.#selection.replace(tab); };
```

### 3. Radio group — focus moves, selecting follows focus

Like tabs, but `orientation: 'both'` (radios respond to all four arrows) and `aria-checked`.

```ts
#nav = new RovingTabindexController(this, { getItems: this.#radios, orientation: 'both' });

#selection = new SelectionController(this, {
    getItems: this.#radios,
    getKey: (radio) => radio.dataset.value ?? '',
    getSelectedKeys: () => new Set(this.value ? [this.value] : []),
    mode: 'single',
    selectionAttribute: 'aria-checked',
    onSelectionChange: (keys) => { this.value = [...keys][0] ?? null; this.dispatchEvent(new Event('change')); },
});

#onFocusin = (e) => { const radio = this.#radios().find((r) => r === e.target); if (radio) this.#selection.replace(radio); };
```

### 4. Single-select listbox — focus stays, select on focus move

Active descendant (focus stays on the listbox) + single selection that follows focus. Here the seam
is the navigation controller's own `onActiveChange` callback — no extra event handler needed.

```ts
#selection = new SelectionController(this, {
    getItems: this.#options,
    getKey: (o) => o.dataset.key ?? '',
    getSelectedKeys: () => this._selected,
    mode: 'single',
    onSelectionChange: (keys) => { this._selected = keys; this.dispatchEvent(new Event('change')); },
});

#nav = new ActiveDescendantController(this, {
    getItems: this.#options,
    getContainer: () => this.renderRoot.querySelector('[role="listbox"]'),
    orientation: 'vertical',
    onActiveChange: (item) => { if (item) this.#selection.replace(item); }, // selection follows focus
});
```

> For "select only on Enter/click" instead, drop the `onActiveChange` wiring and call
> `this.#selection.replace(this.#nav.activeItem)` from your own `keydown`/`click` handler.

### 5. Multi-select listbox — focus stays, selecting is separate

Active descendant + multiple selection. Navigation moves the active option; selection is toggled by
**your** `Space`/click handlers (it does **not** follow focus).

```ts
#nav = new ActiveDescendantController(this, { getItems: this.#options, getContainer: this.#listbox, orientation: 'vertical' });

#selection = new SelectionController(this, {
    getItems: this.#options,
    getKey: (o) => o.dataset.key ?? '',
    getSelectedKeys: () => this._selected,
    mode: 'multiple',
    getContainer: this.#listbox, // gets aria-multiselectable="true"
    onSelectionChange: (keys) => { this._selected = keys; this.dispatchEvent(new Event('change')); },
});

#onKeydown = (e) => {
    if (e.key === ' ' && this.#nav.activeItem) { e.preventDefault(); this.#selection.toggle(this.#nav.activeItem); }
};
```

---

## Two things that trip people up

**Pre-selecting from markup.** The selection controller reflects your value — it does **not** scan the
DOM for `<option selected>`. The component seeds its own value once (e.g. in `firstUpdated`), and the
controller reflects it. For single-select that follows focus, also seed the **active** item to the
selected one so it isn't replaced as focus moves:

```ts
firstUpdated () {
    const preselected = this.#options().filter((o) => o.hasAttribute('selected'));
    if (!preselected.length) return;
    this._selected = new Set(preselected.map((o) => o.dataset.key ?? ''));
    this.#nav.setActiveItem(preselected[0]); // single-select / follows-focus only
}
```

**Active ≠ selected.** Moving the active/focused item is not selecting it. Selection never touches
`aria-activedescendant`, and navigation never touches `aria-selected`. They only ever meet through a
line of host wiring like the ones above.

## Shared conventions

All three controllers:

- take a `getItems()` you keep current; **exclude disabled items there** (no separate disabled option).
- support `orientation` where navigation applies, plus an `isRtl` callback to mirror the horizontal
  arrows in RTL (see below).
- are **SSR-safe** — all DOM work is in lifecycle hooks/handlers the server renderer never runs.
- assign **no roles** and apply **no styling** — the host owns roles, `tabindex`, and CSS.

### RTL (no mixin required)

`isRtl` is just a `() => boolean` callback — the controllers have **no dependency on any RTL mixin**.
The robust default reads the resolved direction directly:

```ts
isRtl: () => getComputedStyle(this).direction === 'rtl',
```

This respects a `dir` attribute anywhere up the tree and a CSS `direction`, and it's only read on
keypresses, so the cost is negligible. Other options:

- `isRtl: () => this.matches(':dir(rtl)')` — equivalent, slightly cleaner (evergreen browsers).
- `isRtl: () => this.isRTL` — only if you already use [`RtlMixin`](../mixins/rtl/rtlMixin.ts); it's a
  convenience, not a requirement.
- Omit `isRtl` entirely — defaults to LTR (no mirroring).

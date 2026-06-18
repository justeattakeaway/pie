# Roving Tabindex Controller

A reactive [Lit controller](https://lit.dev/docs/composition/controllers/) that implements the
[roving tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#roving-tabindex)
keyboard pattern for a group of items.

## What it does

In a roving tabindex widget, the whole group occupies a **single stop** in the page's tab sequence.
Exactly one item has `tabindex="0"` at any time; every other item has `tabindex="-1"`. Arrow keys
(and optionally `Home`/`End`) move the active item *within* the group, while `Tab`/`Shift+Tab` move
focus *out of* the group entirely.

The controller manages all of that for you:

- Keeps exactly one item in the tab sequence and the rest out of it.
- Moves the active item on arrow / `Home` / `End` key presses and focuses it.
- Tracks the active item **by reference**, so it survives re-ordering and re-rendering.
- Re-applies the correct `tabindex` values automatically after every host render (and on demand via
  `sync()` for items that change outside a render, e.g. slotted content).
- Updates the active item when one is focused directly (click or `Tab`), so arrow navigation
  continues from there.
- Mirrors the horizontal axis in right-to-left contexts (opt-in).
- Cleans up its event listeners automatically when the host disconnects (via `AbortController`).

It is concerned **only** with the roving tabindex mechanics. It assigns no roles or ARIA attributes,
makes no assumptions about the host's markup, and leaves all selection semantics to the host
component. (In PIE, the parent component owns the roles/ARIA of its children.)

## Importing

```ts
import { RovingTabindexController } from '@justeattakeaway/pie-webc-core';
```

## Basic usage

Instantiate the controller in your component, passing `this` (the host) and a `getItems` callback
that returns the navigable items in DOM order:

```ts
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { RovingTabindexController } from '@justeattakeaway/pie-webc-core';

@customElement('my-toolbar')
export class MyToolbar extends LitElement {
    #roving = new RovingTabindexController(this, {
        getItems: () => [...this.renderRoot.querySelectorAll<HTMLButtonElement>('button:not([disabled])')],
        orientation: 'horizontal',
    });

    render () {
        return html`
            <button type="button">Bold</button>
            <button type="button">Italic</button>
            <button type="button">Underline</button>
        `;
    }
}
```

That is all that is required: the controller registers itself with the host, applies the initial
`tabindex` values after the first render, and handles all keyboard navigation.

> **Note on `getItems`**
> It is called on every keystroke and every `sync()`, so it should always reflect the items
> currently rendered. Items that should **not** receive focus (e.g. disabled ones) must be excluded
> here — the controller treats every returned item as focusable. Because it is re-evaluated live,
> toggling `disabled` at runtime is handled automatically.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `getItems` | `() => HTMLElement[]` | — (required) | Returns the ordered, focusable items in DOM order. |
| `orientation` | `'horizontal' \| 'vertical' \| 'both'` | `'both'` | Which arrow keys move focus (see below). |
| `wrap` | `boolean` | `true` | Whether moving past the last item wraps to the first (and vice versa). |
| `homeEndKeys` | `boolean` | `true` | Whether `Home`/`End` jump to the first/last item. |
| `isRtl` | `() => boolean` | `() => false` | Returns whether the host is currently RTL; mirrors `ArrowLeft`/`ArrowRight` when `true`. |

### Choosing an orientation

There is no single "correct" set of keys — it depends on the widget, per the WAI-ARIA APG:

- **`'both'`** — all four arrow keys navigate. Use for **radio groups**, which respond to both axes.
- **`'horizontal'`** — only `ArrowLeft` / `ArrowRight`. Use for a **horizontal tablist or toolbar**.
- **`'vertical'`** — only `ArrowUp` / `ArrowDown`. Use for a **vertical tablist or menu**.

`Home`/`End` work in every orientation (unless `homeEndKeys: false`).

## Public API

| Member | Description |
| --- | --- |
| `activeItem: HTMLElement \| null` | The item currently in the tab sequence, or `null` when the group is empty. |
| `sync(): void` | Re-applies the roving state to the current items. Call after the items change outside a host render (e.g. `slotchange`). Runs automatically on every host update. |
| `setActiveItem(item, { focus? }): void` | Makes `item` the active tab stop. Pass `{ focus: true }` to also move focus to it. No-op if `item` is not in the current group. |

## Common patterns

### Setting the initial tab stop

By default the first item is the tab stop. To start on a different item (e.g. the checked radio),
call `setActiveItem` once the items exist — `firstUpdated` is a good place:

```ts
firstUpdated () {
    const checked = this.renderRoot.querySelector<HTMLElement>('[aria-checked="true"]');
    if (checked) this.#roving.setActiveItem(checked);
}
```

### Slotted (light DOM) items

When items come through a `<slot>`, call `sync()` on `slotchange` so the controller picks up
additions and removals:

```ts
render () {
    return html`<slot @slotchange=${() => this.#roving.sync()}></slot>`;
}

// And point getItems at the assigned elements:
// getItems: () => this.#slot?.assignedElements() as HTMLElement[] ?? []
```

### Right-to-left support

Wire `isRtl` to your direction source so the horizontal axis mirrors correctly. With
[`RtlMixin`](../../mixins/rtl/rtlMixin.ts):

```ts
export class MyTabs extends RtlMixin(LitElement) {
    #roving = new RovingTabindexController(this, {
        getItems: () => [...this.renderRoot.querySelectorAll<HTMLElement>('[role="tab"]')],
        orientation: 'horizontal',
        isRtl: () => this.isRTL,
    });
}
```

In RTL, `ArrowLeft` moves to the **next** item (visually to the left) and `ArrowRight` to the
previous. The vertical axis (`ArrowUp`/`ArrowDown`) is never mirrored, and `Home`/`End` always map
to the first/last items in DOM order. `isRtl` is read on every keystroke, so dynamic direction
changes are handled.

#### Without `RtlMixin`

`isRtl` is just a `() => boolean` callback — the controller has **no dependency** on `RtlMixin`. In a
library that doesn't have it, supply directionality from any other source. The most robust option is
to read the resolved direction directly:

```ts
#roving = new RovingTabindexController(this, {
    getItems: () => [...this.renderRoot.querySelectorAll<HTMLElement>('[role="tab"]')],
    orientation: 'horizontal',
    isRtl: () => getComputedStyle(this).direction === 'rtl',
});
```

`getComputedStyle(this).direction` resolves the element's actual direction — it respects a `dir`
attribute **anywhere** up the ancestor chain as well as CSS `direction`. It is only read on
navigation keypresses (never in a render or animation loop), so the cost is negligible; there is no
need to cache it.

Alternatives:

- `isRtl: () => this.matches(':dir(rtl)')` — equivalent and slightly cleaner; supported in all
  current evergreen browsers (Chrome 120+, Firefox, Safari 16.4+).
- `isRtl: () => this.dir === 'rtl' || document.documentElement.dir === 'rtl'` — cheapest, but the
  least robust: it only checks the element and the document root, so it misses an intermediate
  ancestor's `dir` or a CSS-set `direction`.
- Omit `isRtl` entirely if the component is never used in RTL — it defaults to `() => false` and the
  horizontal axis simply isn't mirrored.

## Server-side rendering (SSR)

Safe by construction. All browser/DOM access is confined to the controller's lifecycle hooks
(`hostConnected`, `hostUpdated`, `hostDisconnected`) and its event handlers, none of which Lit's
server renderer invokes — SSR only runs the constructor and `render()`. The constructor is pure
(it captures options and calls `host.addController`, with no DOM access), and the `getItems` /
`isRtl` callbacks are only ever called from those client-only hooks. There is nothing to guard at
the call site.

## Notes & guarantees

- **Nested markup is supported.** Items do not need to be direct children of the host. The
  controller listens on the host and resolves the active item via `event.composedPath()`, so it
  works regardless of nesting depth (including across shadow boundaries) and even when focus lands on
  a descendant of an item.
- **One tab stop, always.** If the active item is removed (or never set), `sync()` falls back to the
  first item, so the group always has exactly one entry point.
- **Disabled handling is the host's responsibility**, expressed by excluding disabled items from
  `getItems`. This already produces the standard "skip disabled" behaviour.
- **Cleanup is automatic.** Listeners are attached on `hostConnected` with an `AbortController` and
  removed on `hostDisconnected`; there is nothing to tear down manually.

## See also

- [Composite widget controllers — recipes](../README.md) — combining the controllers for common patterns
- WAI-ARIA APG — [Managing focus with roving tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#roving-tabindex)
- Lit — [Reactive controllers](https://lit.dev/docs/composition/controllers/)

# Active Descendant Controller

A reactive [Lit controller](https://lit.dev/docs/composition/controllers/) that implements the
[managing focus with `aria-activedescendant`](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#managingfocusactivedescendant)
keyboard pattern for a composite widget.

## What it does

In this pattern, DOM focus **never leaves the container**. A single focusable container (a `listbox`,
`grid`, `tree`, `combobox`, …) keeps focus, and its `aria-activedescendant` attribute is pointed at
the `id` of the currently active descendant. Assistive technology then announces that descendant as
though it were focused, even though the real focus stays on the container.

The controller manages exactly that:

- Sets `aria-activedescendant` on the container to the active item's id.
- Moves the active item on arrow / `Home` / `End` key presses and scrolls it into view.
- Makes a clicked item active, keeping DOM focus on the container.
- Generates a stable `id` for an item when it doesn't have one (the pattern can't reference an item
  without an id).
- Tracks the active item **by reference**, so it survives re-ordering and re-rendering.
- Re-applies `aria-activedescendant` automatically after every host render (and on demand via
  `sync()`).
- Mirrors the horizontal axis in right-to-left contexts (opt-in).
- Cleans up its event listeners automatically when the host disconnects (via `AbortController`).

It is concerned **only** with this mechanic. It does **not** assign the container's `role` or
`tabindex`, apply roles to the items, or add any visual focus styling — indicating the active
descendant visually is the host's job (see [Visual indication](#visual-indication)).

### How it differs from the roving tabindex controller

These are the two W3C-documented strategies for focus in composites. Pick one per widget:

| | [Roving tabindex](../rovingTabindex/README.md) | `aria-activedescendant` |
| --- | --- | --- |
| DOM focus | **moves** between items | **stays** on the container |
| Mechanism | toggles `tabindex` `0`/`-1`, calls `.focus()` | sets `aria-activedescendant` to the item's id |
| Items | each is focusable | items are never focused |
| Good for | tabs, toolbars, radio groups | listboxes, comboboxes, grids, trees, large/virtualised lists |

## Importing

```ts
import { ActiveDescendantController } from '@justeattakeaway/pie-webc-core';
```

## Basic usage

```ts
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ActiveDescendantController } from '@justeattakeaway/pie-webc-core';

@customElement('my-listbox')
export class MyListbox extends LitElement {
    #activedescendant = new ActiveDescendantController(this, {
        getItems: () => [...this.renderRoot.querySelectorAll<HTMLElement>('[role="option"]')],
        getContainer: () => this.renderRoot.querySelector<HTMLElement>('[role="listbox"]'),
        orientation: 'vertical',
    });

    render () {
        // The container carries role + tabindex; the controller sets aria-activedescendant.
        return html`
            <div role="listbox" tabindex="0" aria-label="Options">
                <div role="option">One</div>
                <div role="option">Two</div>
                <div role="option">Three</div>
            </div>
        `;
    }
}
```

> **Note on `getItems`**
> It is called on every keystroke and every `sync()`, so it should always reflect the items
> currently rendered. Items that should not be selectable (e.g. disabled ones) must be excluded here.
> Because it is re-evaluated live, toggling `disabled` at runtime is handled automatically.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `getItems` | `() => HTMLElement[]` | — (required) | Returns the ordered, selectable items in DOM order. |
| `getContainer` | `() => HTMLElement \| null` | `() => host` | The focusable element that owns `aria-activedescendant`. May return `null` before it is rendered. |
| `orientation` | `'horizontal' \| 'vertical' \| 'both'` | `'both'` | Which arrow keys move the active descendant. |
| `wrap` | `boolean` | `true` | Whether moving past the last item wraps to the first (and vice versa). |
| `homeEndKeys` | `boolean` | `true` | Whether `Home`/`End` jump to the first/last item. |
| `isRtl` | `() => boolean` | `() => false` | Returns whether the host is currently RTL; mirrors `ArrowLeft`/`ArrowRight` when `true`. |
| `onActiveChange` | `(item: HTMLElement \| null) => void` | `() => {}` | Called when the active descendant changes (never when unchanged). Signals *focus* movement, not selection. |

Choosing an orientation follows the same WAI-ARIA APG guidance as roving tabindex: `'vertical'` for a
standard listbox/menu, `'horizontal'` for a horizontal arrangement, `'both'` for grid-like widgets.

## Public API

| Member | Description |
| --- | --- |
| `activeItem: HTMLElement \| null` | The current active descendant, or `null` when the group is empty. |
| `sync(): void` | Re-applies `aria-activedescendant` for the current items. Call after the items change outside a host render (e.g. `slotchange`). Runs automatically on every host update. |
| `setActiveItem(item, { scrollIntoView? }): void` | Makes `item` the active descendant (optionally scrolling it into view). No-op if `item` is not in the current group. |

## Visual indication

The controller intentionally applies **no** styling and imposes **no** re-render. Because CSS cannot
select "the element whose id equals the container's `aria-activedescendant`", the host marks the
active item itself. Use `onActiveChange` to decide what a move costs:

- `onActiveChange: () => this.requestUpdate()` — re-render and reflect the active item in your
  template (e.g. `class=${classMap({ active: opt === this.#ad.activeItem })}`). Simplest, and Lit
  batches + diffs, so it's cheap for typical widgets.
- Mark the active element imperatively (toggle a class/attribute on it) — **no re-render**, so CSS
  "just works". Prefer this for very large or virtualised lists where re-rendering every option per
  keystroke would be wasteful.

The template/`updated()` form, toggling an attribute via the `activeItem` getter:

```ts
updated () {
    const activeId = this.#activedescendant.activeItem?.id;
    this.renderRoot.querySelectorAll<HTMLElement>('[role="option"]').forEach((option) => {
        option.toggleAttribute('data-active', option.id === activeId);
    });
}
```

```scss
[role="listbox"]:focus [role="option"][data-active] {
    outline: 2px solid Highlight; // only show the indicator while the container is focused
}
```

## Right-to-left support

Wire `isRtl` to your direction source so the horizontal axis mirrors correctly. With
[`RtlMixin`](../../mixins/rtl/rtlMixin.ts) use `isRtl: () => this.isRTL`. Without it, read the
resolved direction directly, e.g. `isRtl: () => getComputedStyle(this).direction === 'rtl'`. In RTL,
`ArrowLeft` moves to the next item and `ArrowRight` to the previous; the vertical axis is never
mirrored and `Home`/`End` always map to the first/last items in DOM order. `isRtl` is read on every
keystroke, so dynamic direction changes are handled.

## Server-side rendering (SSR)

Safe by construction. All browser/DOM access is confined to the controller's lifecycle hooks
(`hostConnected`, `hostUpdated`, `hostDisconnected`) and its event handlers, none of which Lit's
server renderer invokes — SSR only runs the constructor and `render()`. The constructor is pure
(it captures options and calls `host.addController`, with no DOM access), and the `getItems` /
`getContainer` / `isRtl` callbacks are only ever called from those client-only hooks. There is
nothing to guard at the call site.

## Notes & guarantees

- **Listeners are attached to the host**, not the container, because the container may not exist yet
  when `hostConnected` runs (before the first render). Key and click events bubble and are composed,
  so they reach the host from the focused container regardless of nesting.
- **One active descendant, always.** If the active item is removed (or never set), `sync()` falls
  back to the first item; when the group becomes empty, `aria-activedescendant` is removed.
- **Disabled handling is the host's responsibility**, expressed by excluding disabled items from
  `getItems`.
- **Cleanup is automatic.** Listeners are removed on `hostDisconnected` via `AbortController`.

## See also

- [Composite widget controllers — recipes](../README.md) — combining the controllers for common patterns
- WAI-ARIA APG — [Managing focus in composites using `aria-activedescendant`](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#managingfocusactivedescendant)
- [Roving Tabindex Controller](../rovingTabindex/README.md) — the alternative focus strategy
- Lit — [Reactive controllers](https://lit.dev/docs/composition/controllers/)

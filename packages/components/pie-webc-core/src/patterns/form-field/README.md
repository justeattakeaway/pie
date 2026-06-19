# Form Field & Form Control pattern

A composition pattern for building accessible form controls (checkbox, radio, switch, text input, …)
that work in **arbitrary consumer markup** — from a bare `<label>` to a fully-clickable card — without
the control or its wrapper imposing structure or styling.

It separates three roles connected by two well-defined seams (a **context** seam for accessibility,
and an **event** seam for state), and composes with the
[composite-widget controllers](../../controllers/README.md) for groups.

> Reference implementation: the mocks in [`src/test/formField`](../../test/formField) (`form-field-mock`,
> `checkbox-mock`, `radio-mock`, `radio-group-mock`, `checkbox-group-mock`) exercise this pattern end
> to end with browser tests.

## The three roles

| Role | Owns | Never does |
| --- | --- | --- |
| **Form control** (leaf, e.g. `pie-checkbox`) | its rendering + native focusability | own its value/checked; assign its own label text |
| **Form field** (wrapper, e.g. `pie-form-field`) | providing a11y info + a clickable region | impose structure or styling; render the control |
| **Group** (optional, e.g. `pie-radio-group`) | the composite `value` + roles on children | let children own state |

## Seam 1 — accessibility via context (field → control)

The field supplies the control's accessible name/description (and field-level state) through a
**context**, so the control needs no knowledge of the surrounding markup. This is the core
abstraction.

```ts
export interface FormFieldContext {
    label?: string;          // accessible name
    description?: string;    // supplementary description
    required?: boolean;
    invalid?: boolean;
    errorMessage?: string;
    fieldId?: string;        // for wiring within the control's own root
}
```

- Delivered via [`@lit/context`](https://lit.dev/docs/data/context/) (a `ContextProvider` on the
  field, a `ContextConsumer` on the control). Context is the sanctioned parent→child channel — the
  control does **not** sniff its parent with `closest()`/`parentElement`.
- Values are passed as **strings**, applied by the control as `aria-label` / `aria-description` on its
  **own** native `<input>`. This is deliberate: the input lives in the control's shadow root, so an
  `aria-labelledby` IDREF could not cross the boundary to the field's light DOM. Strings cross cleanly.
- The control re-reads context reactively, so a field updating `label`/`invalid` flows through with no
  extra wiring.

**Where the field gets the text** is a separate, host-side concern (it imposes nothing): the field
reads elements the consumer marks in their own markup, or accepts `label`/`description` props/slots —
see [A11y sourcing](#a11y-sourcing) below.

## Seam 2 — state via events (control → consumer)

Controls are **fully controlled**: they never set their own `checked`/`value`. On interaction they
emit an event with the *proposed* value and revert any native change; the consumer (the app, or a
group) decides and sets the state back as a property.

```
user interacts ──> control reverts native + emits `change` (proposed value)
       ^                                   │
       │                          consumer / group decides
       │                                   v
   control reflects  <── property set <── stores new value (or rejects it)
```

This is what lets a consumer gate a change — e.g. await an API call and leave the box unchecked if it
fails. See [`feedback_controlled_components`]; the rule: **emit intent, never self-set**.

## A11y sourcing

The field must not dictate the consumer's markup, so it discovers the name/description from author
intent. Pick one convention (PIE: TBD — markers vs. slots/props):

- **Markers** (most flexible, any nesting depth): the consumer tags elements in their own markup, the
  field reads their text into context strings.
  ```html
  <pie-form-field>
    <div class="any-card-markup">
      <span data-field-label>Express delivery</span>
      <p data-field-description>Arrives tomorrow.</p>
      <pie-radio></pie-radio>
    </div>
  </pie-form-field>
  ```
- **Props / slots** (simplest; field-as-wrapper): `label`/`description` props for the common case, named
  slots when rich markup is needed. The field is styled *as* the card; no consumer wrapper `<div>`.

Either way: the name is always text, so a styled slot can supply rich visuals while its `textContent`
becomes the a11y string. **One source of truth, no duplication.**

## Click-to-activate

The field forwards a click anywhere in its subtree to the control, so the whole region is interactive
regardless of markup:

- The field finds its control and, for clicks **not** on the control, calls `control.activate()`.
- `activate()` produces the same intent as a direct interaction (and is a no-op when disabled).
- This does **not** rely on native `<label>` activation, which is unreliable for form-associated custom
  elements (notably in WebKit). The field owns the behaviour.

## Composition for groups

A group owns the composite `value` and assigns child roles (parent-owns-child-aria), then composes the
controllers — see the [controllers recipes](../../controllers/README.md):

| Group | Navigation | Selection |
| --- | --- | --- |
| **Radio group** | `RovingTabindexController` (one tab stop, arrows) | `SelectionController` `single`, `reflect: false`, selection-follows-focus |
| **Checkbox group** | none — each checkbox is natively tabbable | `SelectionController` `multiple`, `reflect: false` |

`reflect: false` because the native inputs convey their own checked state; the group reflects the value
onto each control's `checked`. Disabled options are excluded from `getItems` (navigation/selection) and
drop out of the tab order via their native input.

> **Selection-follows-focus must not depend on focus-residency state.** Implement it by selecting the
> item the navigation controller moved to — read `roving.activeItem` on the navigation **keydown**
> (which fires after roving has moved focus), and select that. Do **not** track residency with
> `focusin`/`focusout` + a "has focus" flag: when the consumer owns the value, selecting triggers a
> parent re-render, whose transient blur resets that flag and silently breaks every subsequent arrow.
> Tab is not a navigation key, so a tab *into* the group still doesn't select. Clicks select via the
> control's intent event.

## Role contracts (the checklist)

**Form control**
- Fully controlled: emit an intent event on interaction; never assign `checked`/`value` to itself.
- Consume `FormFieldContext`; apply `aria-label`/`aria-description` to its own native input.
- Render a native input in shadow; assign no roles to itself beyond native semantics.
- Expose `activate()`; no-op when `disabled`; a disabled native input leaves the tab order.

**Form field**
- Render only a `<slot>` (or be the styleable wrapper); impose no structure or styling.
- Provide `FormFieldContext`; forward subtree clicks to the control.
- Source a11y text from the chosen convention; never render the control.

**Group**
- Own the `value`; consume child intents; set children's `checked`/role/aria (children stay dumb).
- Compose the navigation + selection controllers; exclude disabled items from `getItems`.

**All roles** — attach any host listeners with an `AbortController` created in `connectedCallback` and
`abort()` it in `disconnectedCallback` (one signal removes them all, and nothing leaks on
disconnect/reconnect). The controllers manage their own listeners the same way.

## SSR

The pattern is SSR-safe by construction:
- Controls/fields/groups do all DOM work in lifecycle hooks (`updated`, `firstUpdated`), event
  handlers, and controller `getItems` callbacks — none of which Lit's server renderer invokes.
- `render()` emits only slots/inputs and performs **no** `querySelectorAll`.
- The context handshake is event-based and client-only.

## Open decisions (before promoting to real components)

- **A11y sourcing convention** — markers (`data-*`) vs. props/slots. (Markers fit arbitrary nesting;
  props/slots fit field-as-wrapper. A hybrid is possible.)
- **Adopt `@lit/context`** as a dependency (the PoC hand-rolls the protocol to avoid adding one).
- **`FormFieldContext` shape** — confirm the field-level fields (required/invalid/error/id) and the
  control's `aria-description` vs internal `aria-describedby` node for description support.

## See also

- [Composite widget controllers — recipes](../../controllers/README.md)
- [`SelectionController`](../../controllers/selection/README.md) · [`RovingTabindexController`](../../controllers/rovingTabindex/README.md) · [`ActiveDescendantController`](../../controllers/activeDescendant/README.md)
- WAI-ARIA APG — [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) · [Radio group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)

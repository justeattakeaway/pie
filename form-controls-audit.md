# PIE Form Controls — Architecture & Accessibility Audit

> Scope: `pie-assistive-text`, `pie-form-label`, and the consuming form controls
> (`pie-text-input`, `pie-textarea`, `pie-select`, `pie-checkbox`, `pie-checkbox-group`,
> `pie-radio`, `pie-radio-group`, `pie-switch`) plus the shared `FormControlMixin` and
> related infrastructure in `pie-webc-core`.
>
> Goal: identify functional and architectural issues and propose a more composable,
> accessible architecture that supports complex designs and **externally-placed** labels
> and assistive text.

---

## 1. How things work today

### 1.1 `FormControlMixin` — does almost nothing

`packages/components/pie-webc-core/src/mixins/formControl/formControlMixin.ts` is ~60 lines and provides exactly three things:

```ts
class FormControlElement extends superClass implements FormControlInterface {
    static formAssociated = true;
    _internals: ElementInternals;
    get form () { return this._internals.form; }
    constructor (...args) { super(...args); this._internals = this.attachInternals(); }
}
```

That is the entire shared surface. It does **not** provide:

- `setFormValue`, `setValidity`, `checkValidity`, `reportValidity`, `validity`, `validationMessage`
- the form lifecycle callbacks (`formDisabledCallback`, `formResetCallback`, `formStateRestoreCallback`)
- any label / assistive-text rendering
- any `aria-describedby` / `aria-invalid` / `aria-errormessage` wiring
- any id generation
- access to `_internals.labels`, `ElementInternals.ariaLabel`, `ariaDescription`

Everything in that list is hand-rolled, independently, in each consuming component.

### 1.2 The two association mechanisms

There are **two completely different** ways a control connects to its label/description, and neither crosses the shadow boundary cleanly:

**(A) Assistive text — internal, fixed shadow-scoped id.** Each control renders its *own* `<pie-assistive-text>` inside its *own* shadow root and points the native control at it with a hardcoded id:

```ts
// pie-text-input/src/index.ts
const assistiveTextIdValue = 'assistive-text';
// ...
aria-describedby=${ifDefined(assistiveText ? assistiveTextIdValue : undefined)}
aria-invalid=${status === 'error' ? 'true' : 'false'}
aria-errormessage="${ifDefined(status === 'error' ? assistiveTextIdValue : undefined)}"
// ...
<pie-assistive-text id="${assistiveTextIdValue}" variant=${ifDefined(status)}>${assistiveText}</pie-assistive-text>
```

This works **only because** the `<input>` and the `<pie-assistive-text id="assistive-text">` are siblings in the same shadow root. `aria-describedby` / `aria-errormessage` IDREFs **cannot cross a shadow boundary**.

**(B) Label — external sibling, JS click shim.** `pie-form-label` is placed as a light-DOM sibling and "associates" via a global query + a bespoke `focusTarget` contract:

```ts
// pie-form-label/src/index.ts
private handleClick () {
    if (this.for) {
        const target = document.querySelector(`#${this.for}`) as unknown as PIEInputElement;
        const canReceiveFocus = target && target.focusTarget &&
            'focus' in target.focusTarget && 'click' in target.focusTarget;
        if (!canReceiveFocus) return;
        target.focusTarget.focus();
        target.focusTarget.click();
    }
}
```

The native `<label for="...">` rendered inside form-label's shadow root is **inert** across the boundary — the JS handler is the only thing making click-to-focus work, and it provides **no programmatic name association** (`aria-labelledby`) at all.

### 1.3 No context, minimal controller precedent

- **No `@lit/context` anywhere** in source (no dependency, no `createContext`/`ContextProvider`/`ContextConsumer` usage). All parent↔child coordination is imperative.
- The **only** Reactive Controller in the codebase is `pie-listbox`'s navigation/selection controller (`addController` + `hostConnected/hostUpdated`), and it coordinates children *within its own shadow subtree*, not independent light-DOM siblings.
- Group→child coordination (checkbox-group, radio-group) is done with `setAttribute` + custom events (`pie-checkbox-group-disabled`, `pie-checkbox-group-error`, etc.).

---

## 2. Functional issues

### F1 — Assistive text is not announced (no live region) 🔴 High
`pie-assistive-text` renders a plain `<p>` with **no `role` and no `aria-live`**. No consumer adds one either. When validation flips a field to `status="error"` and the message appears, screen readers do **not** announce it proactively — the text is only read when focus next lands on the field (via `aria-describedby`). For inline validation this is a real WCAG/AX gap (cf. WCAG 4.1.3 Status Messages).

### F2 — `pie-form-label` association is fragile and partial 🔴 High
- `document.querySelector('#${this.for}')` is **global and document-scoped**: it cannot find a target inside another shadow root, picks the first of any duplicate ids, and will throw on ids with special characters (no `CSS.escape`).
- It silently **no-ops for `pie-checkbox`**, which uses `DelegatesFocusMixin` and exposes no `focusTarget`.
- It provides click-to-focus only — **no `aria-labelledby`/accessible-name** link is created, so the label is not guaranteed to be the control's accessible name across the boundary.

### F3 — `aria-errormessage` semantics are inconsistent/questionable 🟡 Medium
text-input/textarea/select set `aria-errormessage` to the **same node** as `aria-describedby`. checkbox and radio omit `aria-errormessage` entirely. `aria-errormessage` is also only meaningful while `aria-invalid="true"`; pointing it at the perpetually-present describedby node is muddled.

### F4 — `status` domain differs per component 🟡 Medium
`select` and `radio` support only `default | error` (no `success`); `checkbox-group`/`radio-group` declare `success` but never act on it; text-input/textarea/checkbox support all three. The same prop means different things on different components.

### F5 — Non-derived, hardcoded element ids 🟡 Medium
`id="assistive-text"` (everywhere), `id="inputId"` (checkbox), `id="pie-textarea"` (textarea). They only avoid collisions because each lives in an isolated shadow root. None are derived/uniquified, and none can be targeted from outside.

### F6 — Three different labelling models for the "toggle" controls 🟡 Medium
- `pie-checkbox`: default slot inside `<label for="inputId">`
- `pie-radio`: default slot inside `<label>` **without `for`** (handles clicks itself)
- `pie-switch`: `label` **string prop** + `labelPlacement` + a separate `aria` object, with the accessible name applied via `aria-label`

A consumer cannot label these uniformly.

### F7 — Validation API is wildly inconsistent 🟡 Medium
`pie-switch` is the **only** control with a real public validation surface (`checkValidity`, `reportValidity`, `setCustomValidity`, `validationMessage`, forwarded `invalid` event, real `setValidity` calls). Every other control exposes only a `validity` getter proxying the inner element and never surfaces `validationMessage`/`setCustomValidity`. Conversely, switch has no `status`/assistive-text concept. The richness is split across components instead of shared.

### F8 — Group error handling copies the message onto every child 🟡 Medium
`pie-checkbox-group._handleStatus` copies the group's `assistiveText` onto **every** child checkbox on error, then visually hides it on the child. This duplicates the error text N times and is convoluted.

### F9 — Fieldset semantics inconsistent 🟢 Low
`pie-checkbox-group` uses a bare `<fieldset>`; `pie-radio-group` uses `<fieldset role="radiogroup">`. Same pattern, different a11y treatment.

---

## 3. Architectural issues

### A1 — Massive duplication of the same "field" pattern 🔴 High
The block `[label] + assistive-text + status + (describedby/invalid/errormessage) + form-association lifecycle` is hand-rolled **6–8 times** with small divergences:

- The `<pie-assistive-text id=… variant=${status}>${assistiveText}</pie-assistive-text>` render is copy-pasted across text-input, textarea, select, checkbox, checkbox-group, radio-group.
- The `aria-describedby` + `aria-invalid` + `aria-errormessage` triple is **character-identical** in text-input, textarea and select.
- `validity` getter, `formDisabledCallback`, `formResetCallback`, `firstUpdated/updated → setFormValue`, and `_handleChange → wrapNativeEvent` are reimplemented per component.
- The group→child propagation machinery (`ON_*_DISABLED` events, `_handleDisabled`, `_handleStatus`, `queryAssignedElements`, legend/`renderWrappedLabel`) is duplicated between checkbox-group and radio-group.

`FormControlMixin` is the obvious home for all of this and owns none of it.

### A2 — Naming drift signals the absence of a shared abstraction 🟢 Low
The same `'assistive-text'` literal is stored as `assistiveTextIdValue` in three components and `assistiveTextId` in three others. Divergent names for identical concepts is a symptom of copy-paste rather than shared code.

### A3 — External composition is effectively impossible 🔴 High
This is the core architectural blocker for the stated goal. Because:
- controls render no label and expose **no stable, externally-targetable id** for the focusable element (text-input/textarea/select);
- assistive text association is hardwired to an **internal** shadow-scoped id;
- the label↔control link is a click shim with no aria;

…a consumer **cannot** place a label or assistive text outside the control and have it correctly, accessibly associated. There is no `aria-describedby`/`aria-labelledby` passthrough prop, no shared id contract, and no coordination primitive bridging independent light-DOM siblings.

### A4 — `FormControlMixin` doesn't leverage `ElementInternals` a11y surface 🟡 Medium
`ElementInternals` exposes `ariaLabel`, `ariaDescription`, `role`, and the `labels` collection — none are used. Validation `status="error"` is purely cosmetic + manual aria; it is **not** pushed through `ElementInternals.setValidity()`, so native constraint validation, `:invalid`, and form-level reporting are bypassed for everything except switch.

### A5 — Decorator backing-field smell 🟢 Low
`validPropertyValues`/`requiredProperty` store state under a string key literally named `"#name"` (not a true private field) with `configurable: true`, layered beneath Lit's generated `@property` accessors. It works but is fragile to decorator ordering. Not a blocker, but worth noting during any refactor.

---

## 4. Proposed re-architecture

The unifying idea: **separate the field's *state* from its *presentation*, and let label + assistive-text + control coordinate through a shared context rather than fixed shadow-scoped ids.** This is what unlocks external/custom composition while keeping the simple "all-in-one" case a one-liner.

### 4.1 A `FieldContext` via `@lit/context` 🟢 Primary lever

Introduce `@lit/context` and a `pie-field` (or `pie-form-field`) wrapper that **provides** field state to any descendants — control, label, assistive-text — wherever they sit in its light DOM:

```ts
export interface FieldContextValue {
    fieldId: string;          // stable, generated once
    labelId: string;
    descriptionId: string;
    errorId: string;
    status: 'default' | 'success' | 'error';
    disabled: boolean;
    required: boolean;
    assistiveText?: string;
    // registration hooks so the control can claim the focusable target
    registerControl(el: PIEInputElement): void;
}
export const fieldContext = createContext<FieldContextValue>('pie-field');
```

- `<pie-field>` is a `ContextProvider`. It owns id generation **once** and the status/disabled/required state.
- `<pie-form-label>`, `<pie-assistive-text>`, and the controls become `ContextConsumer`s. The label reads `labelId`/`fieldId` and writes `for`/`id`; the control reads `labelId`+`descriptionId`+`errorId` and sets its own `aria-labelledby`/`aria-describedby`/`aria-errormessage`; assistive-text reads `descriptionId`/`status` and renders the right variant/live region.
- Crucially this works **across the wrapper's light DOM**, so external/custom layouts (label above, helper text to the side, multiple controls) compose without breaking aria — the consumer just nests them inside `<pie-field>`.
- Backwards-compatible: a control used **without** a `<pie-field>` ancestor falls back to today's self-rendered, self-scoped behaviour. Context consumers can detect "no provider" and degrade gracefully.

> Note the cross-shadow IDREF rule still applies: this pattern shines when label/assistive-text/control are **light-DOM descendants of `<pie-field>`** (so their ids share a root), or when each control uses `ElementInternals` aria reflection (see 4.4) to point at ids in its own tree. The context distributes *which ids/state to use*; the consumer's DOM layout determines the root. For truly cross-shadow naming, prefer `ElementInternals.ariaLabelledByElements`/`ariaDescribedByElements` (element references, where supported) over string IDREFs.

### 4.2 Reactive Controllers for cross-cutting behaviour 🟢 Strong fit

Extract the repeated, stateful behaviours into controllers (the `pie-listbox` precedent shows the team already accepts this pattern):

- **`FormValueController`** — owns `setFormValue`, `formResetCallback`, `formDisabledCallback`, `formStateRestoreCallback`, and value/dirty tracking against `_internals`. Removes A1's form-lifecycle duplication.
- **`ValidationController`** — owns `setValidity`/`checkValidity`/`reportValidity`/`validationMessage`/`setCustomValidity` and maps `status="error"` ↔ `ElementInternals.setValidity()`. Unifies F7/A4 so *every* control gets the switch-grade API.
- **`AriaDescriptionController`** — computes `aria-describedby`/`aria-errormessage`/`aria-invalid` consistently from `status` + description ids, killing the copy-pasted triple (A1/F3).
- **`GroupController`** — generalises the checkbox-group/radio-group child propagation (disabled/status/name distribution, roving tabindex) into one reusable controller (A1/F8).

Controllers compose better than deep mixin chains and keep state co-located with behaviour.

### 4.3 A thin set of mixins, layered on the controllers 🟡 Supporting

Keep mixins for the few things that must be on the class itself (statics, base wiring), and have them install the controllers:

- Grow `FormControlMixin` so it instantiates `FormValueController` + `ValidationController` and exposes the standard public validation API (so switch stops being a special case).
- Add a small `FieldAssociationMixin` that wires the `ContextConsumer` + `AriaDescriptionController` for any control.
- Retain `RtlMixin` / `DelegatesFocusMixin` as-is.

Avoid pushing rendering into mixins — rendering stays per-component, but the *ids and aria values* come from shared infrastructure.

### 4.4 Use the `ElementInternals` a11y surface 🟡 Supporting

Where supported, set `_internals.ariaDescription` / `role` / and (progressively) `ariaLabelledByElements` / `ariaDescribedByElements` so associations can use **element references** instead of string IDREFs — this is the only robust way to associate across shadow boundaries and would let `pie-form-label`/`pie-assistive-text` live anywhere. Fall back to IDREFs + the context-distributed ids where the element-reference reflection isn't available.

### 4.5 Make `pie-assistive-text` a proper status region 🔴 Quick win, do first

Independent of the bigger refactor: give `pie-assistive-text` (or the wrapper that renders it on error) a configurable live region — `role="alert"` / `aria-live="assertive"` for errors, `role="status"`/`aria-live="polite"` otherwise, plus `aria-atomic="true"`. This closes F1 immediately and is low-risk.

### 4.6 Converge the inconsistencies

- Single `status` domain (`default | success | error`) honoured everywhere (F4).
- One labelling model across checkbox/radio/switch — slot-based, with switch's string `label` kept as sugar (F6).
- Consistent fieldset + `role` treatment in both groups (F9).
- Consistent `aria-errormessage` only when `aria-invalid="true"` (F3).

---

## 5. Suggested sequencing

1. **F1 / 4.5** — add live-region semantics to assistive text. Small, high a11y value, no API change.
2. **4.2 controllers (FormValue + Validation)** — extract duplicated form/validation plumbing; bring all controls up to the switch-grade public API. Internal refactor, no consumer breakage.
3. **AriaDescription + GroupController** — remove the remaining copy-paste (A1/F8) and converge `status`/aria inconsistencies (F3/F4).
4. **4.1 `pie-field` + context** — the headline feature: external/custom label & assistive-text composition (A3), with graceful fallback to today's behaviour.
5. **4.4 ElementInternals element-reference associations** — progressive enhancement for cross-shadow naming; replace the `pie-form-label` `querySelector` click shim (F2).

Steps 1–3 are pure internal consolidation (safe, incremental). Steps 4–5 deliver the new composable capability and can ship behind the wrapper without breaking existing usage.

---

## 6. Key file references

| Concern | Path |
|---|---|
| Form mixin (minimal) | `packages/components/pie-webc-core/src/mixins/formControl/formControlMixin.ts` |
| RTL / DelegatesFocus mixins | `packages/components/pie-webc-core/src/mixins/{rtl,delegatesFocus}/` |
| Decorators | `packages/components/pie-webc-core/src/decorators/` |
| `dispatchCustomEvent` / `wrapNativeEvent` | `packages/components/pie-webc-core/src/functions/` |
| `PIEInputElement` interface | `packages/components/pie-webc-core/src/interfaces/pie-input-element.ts` |
| Assistive text | `packages/components/pie-assistive-text/src/index.ts` |
| Form label (click shim) | `packages/components/pie-form-label/src/index.ts` |
| Reactive Controller precedent | `packages/components/pie-listbox/dist/listbox-navigation-controller.d.ts` |
| Consumers | `pie-{text-input,textarea,select,checkbox,checkbox-group,radio,radio-group,switch}/src/index.ts` |
</content>
</invoke>

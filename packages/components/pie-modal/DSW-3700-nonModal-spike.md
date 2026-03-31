# DSW-3700: Cookie Banner Stacking Over Modal -- Spike Summary

## Key Findings

- The browser's **top layer** (used by `showModal()`) always renders above `position: fixed` elements. There is no CSS or JS workaround to make a fixed-position cookie banner appear above a `showModal()` dialog.
- **Re-showing the modal doesn't help** -- the cookie banner isn't in the top layer, so reordering within it is irrelevant.
- **The only way to get the cookie banner above the modal is to take the modal out of the top layer** by using `dialog.show()` instead of `dialog.showModal()`.
- Doing so requires manually recreating backdrop, inertness, focus trapping, and escape key handling. Each of these behaviours **conflicts** with the goal of keeping the cookie banner interactive -- particularly inertness and focus trapping.
- The POC (`nonModal` prop) proves the visual stacking works and mouse interaction with the cookie banner works, but keyboard accessibility is degraded.

## The Problem

When a user lands on a page, both a cookie banner and an offer modal can render simultaneously. The modal uses `<dialog>.showModal()`, which places it in the browser's **top layer** -- a special layer above all regular CSS stacking contexts. The cookie banner is `position: fixed` with a high `z-index`, but `z-index` has no effect against the top layer.

**Result:** The modal blocks the cookie banner, preventing users from accepting/rejecting cookies before interacting with the modal.

## Options Explored

### Option 1: Control top-layer insertion order

Re-show the modal (`close()` then `showModal()`) after the cookie banner renders, so the cookie banner ends up higher in the top layer.

**Why it doesn't work:**

The cookie banner is **not in the top layer** -- it is a `position: fixed` element with a high `z-index`. Only elements opened via `showModal()` or the Fullscreen API enter the top layer. The top layer is always rendered above the entire regular stacking context, regardless of `z-index`. Re-ordering within the top layer has no effect on elements outside it.

This means re-showing the modal simply puts it back into the top layer, still above the cookie banner. See the `FlickerReshowApproach` Storybook story for a demonstration -- the modal remains above the cookie banner even after being closed and reopened. The approach also causes **visible flicker** as the dialog briefly disappears.

This approach could only work if **both** elements were in the top layer (i.e. the cookie banner also used `showModal()`), which leads to Option 2.

### Option 2: Move cookie banner into the top layer

Make `pie-cookie-banner` use `<dialog>.showModal()` for its banner element (not just its preferences screen).

**Why it's problematic:**

- The banner is currently an `<aside>` with `position: fixed`. Changing it to a `<dialog>` is a significant API and semantic change.
- Two competing `showModal()` dialogs would both want to trap focus and make the page inert, creating conflicts.

### Option 3: `nonModal` prop (the POC we built)

Add an opt-in `nonModal` boolean prop to `pie-modal` that switches from `showModal()` to `show()`. This keeps the modal in the regular stacking context where `z-index` works, so the cookie banner (with its higher `z-index`) naturally sits above it.

See [POC details](#poc-details) below.

### Option 4: Consumer-side coordination

The consuming app delays opening the modal until the cookie banner is dismissed, or uses a state machine to sequence the two.

**Why it's not ideal:**

- Requires every consumer hitting this problem to implement their own coordination logic.
- Does not solve the general case.

---

## POC Details

### What `showModal()` provides for free

| Behaviour | `showModal()` | `show()` |
|---|---|---|
| Top-layer placement | Yes | No |
| `::backdrop` pseudo-element | Yes | No |
| Focus trapping (Tab/Shift+Tab) | Yes | No |
| Escape key fires `cancel` event | Yes | No |
| Page inertness (rest of page not interactive) | Yes | No |

### What we recreated manually

1. **Custom backdrop element** -- A `<div class="c-modal-backdrop">` rendered in shadow DOM before the `<dialog>`, styled to match the native `::backdrop`. Shown/hidden via CSS `:has(+ dialog[open])`.
2. **Page inertness** -- The `inert` attribute is applied to all sibling elements of the `pie-modal` host, **excluding** `pie-cookie-banner` (hard-coded exclusion).
3. **Escape key handling** -- A `keydown` listener on the dialog closes the modal when `isDismissible` is true, or prevents default otherwise.
4. **Dialog positioning** -- The non-modal dialog is styled with `position: fixed; inset: 0; margin: auto;` and a `z-index` just below the cookie banner token.

### What works

- **Visual stacking is correct.** The cookie banner renders above both the modal and its custom backdrop.
- **Mouse interaction works.** The cookie banner buttons (Accept All, Manage Preferences, Necessary Only) are all clickable.
- **Backdrop works.** The custom backdrop overlay appears and handles click-to-dismiss when `isDismissible` is true.
- **Escape key works.** Pressing Escape closes the modal (when dismissible) or is prevented (when not).
- **Inertness works (partially).** Page content behind the modal is inert, but the cookie banner is excluded and remains interactive.

### The fundamental tension

The whole point of `nonModal` is that the cookie banner remains interactive above the modal. But the modal behaviours we need to recreate actively fight against that:

- **Inertness vs interactivity:** Making all siblings `inert` includes the cookie banner. The fix is to exclude it, but this requires a hard-coded tag name list (or a new prop/selector). A production implementation would need a generic mechanism.
- **Focus trapping vs accessibility:** A strict focus trap (Tab/Shift+Tab cycling within the dialog) prevents keyboard users from ever reaching the cookie banner. But removing the focus trap degrades accessibility -- screen reader and keyboard users can navigate to elements behind the backdrop that should not be reachable.

This is the core trade-off: **every "modal behaviour" we recreate fights against the goal of keeping the cookie banner interactive.**

### Current POC state

| Behaviour | Status | Notes |
|---|---|---|
| Custom backdrop | Done | Renders and transitions correctly |
| Page inertness | Done (with exclusion) | `pie-cookie-banner` is hard-coded as excluded |
| Escape key | Done | Works for both dismissible and non-dismissible modes |
| Focus trapping | Intentionally omitted | A strict trap blocks keyboard access to the cookie banner. A "permeable" trap that includes both the dialog and cookie banner would be needed for production. |
| `aria-modal` | Done | Manually set on the dialog since `show()` doesn't set it |

### Files changed

| File | Change |
|---|---|
| `pie-modal/src/defs.ts` | Added `nonModal` prop to `ModalProps` type and `defaultProps` |
| `pie-modal/src/index.ts` | `nonModal` property, `_setupNonModalBehaviours()`, `_teardownNonModalBehaviours()`, `_applyPageInertness()`, branching in `_handleModalOpened`/`_handleModalClosed`, custom backdrop in `render()` |
| `pie-modal/src/modal.scss` | `.c-modal--nonModal` positioning styles, `.c-modal-backdrop` styles |
| `pie-storybook/stories/pie-cookie-banner.stories.ts` | `ModalStackingIssue` story demonstrating the issue and fix |

### Open questions for the team

1. **Is the accessibility trade-off acceptable?** Without a strict focus trap, keyboard/AT users can reach content behind the modal. Is this acceptable for the cookie-banner-over-modal use case, or do we need a permeable focus trap?
2. **How should the inert exclusion work?** The POC hard-codes `pie-cookie-banner`. Should we accept a selector prop (e.g. `nonModalExcludeSelector`), use a data attribute convention (e.g. `data-pie-above-modal`), or detect z-index programmatically?
3. **Is `nonModal` the right API surface?** Should this be a prop on `pie-modal`, or should the solution live at a different level (e.g. a shared stacking context manager, or changes to `pie-cookie-banner`)?
4. **Should this be a PIE concern at all?** Alternatively, should consumers handle the coordination themselves, and PIE documents the pattern?

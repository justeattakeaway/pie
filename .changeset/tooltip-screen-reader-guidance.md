---
"@justeattakeaway/pie-tooltip": minor
"@justeattakeaway/pie-storybook": patch
---

[Changed] - A dismissible panel now presents as a non-modal dialog, not a tooltip. A close button invites the user inside the panel, and content a user enters is announced through focus, and a `role="tooltip"` panel must not contain focusable elements. Dismissible panels therefore need `heading` or `aria.label` for their accessible name, and the trigger should set `haspopup="dialog"` and track `expanded`. Tooltip mode is now strictly for hover- and focus-followed, non-dismissible panels.

[Fixed] - The panel's action-row layout class is now applied only when the `action` slot has content, rather than whenever the panel presents as a dialog. Dismissible panels without an action button no longer reserve the action row's height.

[Changed] - The tooltip-mode trigger guidance now recommends giving the `pie-tooltip` element itself an `id` and pointing a plain HTML trigger's `aria-describedby` at it, rather than adding an `id` to the element in the `content` slot. A PIE component trigger still cannot carry an IDREF across its shadow boundary, so it passes the panel's text through the new `aria.description` property instead of `aria.label`.

[Added] - New "Screen readers" stories under Components/Tooltip showing every trigger wiring, tooltip and dialog mode, with and without headings, close buttons, and a system-opened dialog with actions, as live, runnable examples alongside the README guidance.

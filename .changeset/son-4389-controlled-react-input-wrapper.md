---
"@justeattakeaway/pie-wrapper-react": minor
---

[Added] - Controlled-input-aware React wrapper generation for input-like components.

`@lit/react`'s `createComponent` pushes the `value` prop onto the custom element whenever it changes between renders, but it does not replicate the controlled-input value tracking that ReactDOM applies to native form controls. During fast typing with debounced parent state, a stale `value` could be written back to the element and overwrite the user's latest keystroke.

Components that expose a `value` field and dispatch an `input` event now receive a generated wrapper that replicates React's controlled-input contract: `value` is only written to the element when the controlled value genuinely changes since it was last applied, so in-flight user input is never clobbered. Components that are not input-like are unaffected and continue to use the existing `createComponent` export.

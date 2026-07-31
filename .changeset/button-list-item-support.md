---
"@justeattakeaway/pie-list": minor
---

[Added] - `interactionType="button"` turns the whole row into a single button for an in-page action. The item renders an invisible, row-sized native `<button type="button">` for you (no slotting), named from its text and keeping the PIE focus ring. Activation is native (pointer, Enter and Space fire a bubbling `click`) - listen for `click` on the `pie-list-item`. It is an action trigger only, not a form control.

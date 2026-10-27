---
"@justeattakeaway/pie-card": minor
---

[Fixed] - `onClick` handlers on slotted interactive controls inside a `tag="button"` card did not fire in React, because the card stopped click propagation before React's delegated root listener

[Changed] - Clicks on slotted content now bubble to the `pie-card` host. Slotted interactive controls that should not also activate the card must call `event.stopPropagation()` in their click handler

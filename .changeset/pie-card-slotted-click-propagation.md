---
"@justeattakeaway/pie-card": major
"@justeattakeaway/pie-webc": major
---

[Changed] - Clicks on slotted content now bubble to the `pie-card` host, matching native DOM behaviour. Slotted interactive controls that should not activate the card must call `event.stopPropagation()` in their click handler.

[Added] - `--card-overlay-z-index` CSS custom property. Consumers should add `z-index: calc(var(--card-overlay-z-index) + 1)` (plus `position: relative`) to interactive slotted children so they sit above the card overlay

[Fixed] - `onClick` handlers on slotted interactive controls inside a `tag="button"` card did not fire in React, because the card stopped click propagation before React's delegated root listener

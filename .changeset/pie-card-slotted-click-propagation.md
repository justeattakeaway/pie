---
"@justeattakeaway/pie-card": major
"@justeattakeaway/pie-webc": major
---

[Changed] - Clicks on slotted content now bubble to the `pie-card` host, matching native DOM behaviour. Slotted interactive controls that should not also activate the card must call `event.stopPropagation()` in their click handler. This is a breaking change for consumers that relied on the card suppressing those clicks

[Added] - `--card-overlay-z-index` CSS custom property (renamed from `--pie-card-overlay-z-index`). Consumers should add `z-index: calc(var(--card-overlay-z-index) + 1)` (plus `position: relative`) to interactive slotted children so they sit above the card overlay

[Fixed] - `onClick` handlers on slotted interactive controls inside a `tag="button"` card did not fire in React, because the card stopped click propagation before React's delegated root listener

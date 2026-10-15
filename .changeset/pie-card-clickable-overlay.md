---
"@justeattakeaway/pie-card": minor
---

[Added] - New `description`, `haspopup` and `expanded` fields on the `aria` property of `pie-card`, rendered as `aria-description`, `aria-haspopup` and `aria-expanded` attributes on the card's interactive element, so a card can announce a description and whether it opens a popup or tracks an expanded state

[Added] - When `tag` is `"button"`, the card now renders an invisible overlay `<button>` covering its full surface and exposes a `--pie-card-overlay-z-index` CSS custom property (default `1`), so slotted interactive controls can sit above it with `z-index: calc(var(--pie-card-overlay-z-index) + 1)`; a native `click` event is emitted on the host when the card is activated, and clicks on raised slotted controls do not trigger it

[Changed] - When `tag` is `"button"`, the card's internal element is now a real `<button>` overlay instead of a `div[role="button"]` wrapper, so the card keeps native button semantics (including Enter/Space keyboard activation, which previously did not work) and slotted content is no longer nested inside an interactive element

[Fixed] - Keyboard activation (Enter/Space) did not trigger a click on the card when `tag` was `"button"`

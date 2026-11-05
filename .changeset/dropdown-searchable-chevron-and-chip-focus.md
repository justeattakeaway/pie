---
"@justeattakeaway/pie-dropdown": patch
---

[Fixed] - Clicking the chevron now opens the popover in searchable variants (the click was previously cancelled out by the field's own click handler), and it still closes the popover when open. Opening keeps the caret in the search field.
[Fixed] - The popover now opens when the count chip's close button receives keyboard focus in searchable multi-select variants after an Escape or pointer close, which stale focus-suppression flags previously blocked.

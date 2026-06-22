---
"@justeattakeaway/pie-text-input": patch
---

[Fixed] - The React wrapper no longer drops keystrokes when the `value` prop lags behind user input (for example with debounced parent state). The generated wrapper now follows React's controlled-input contract and only writes `value` to the element when it genuinely changes.

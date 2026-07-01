---
"@justeattakeaway/pie-webc-core": patch
---

[Fixed] - `requiredProperty` decorator now also validates on `connectedCallback`, so a missing required prop is reported even when its attribute is never set at all (previously only caught if explicitly set to an empty/null/undefined value). This warning is only logged once per element instance, even if it reconnects to the DOM multiple times while still missing the prop.

---
"@justeattakeaway/pie-webc-core": minor
---

[Added] - `parentDisabledContext`, a generic context a disabling ancestor (such as a `pie-radio-group` or `pie-checkbox-group`) uses to tell its descendants it is disabled, so they can reflect it. Crosses shadow boundaries and reaches descendants at any depth without prop drilling.

---
"@justeattakeaway/pie-css": patch
---

[Changed] - Moved the button padding custom properties (`--btn-padding-vertical-*` and `--btn-padding-horizontal-*`) out of `button-base` into a new internal `button-padding-properties` mixin, so other PIE components can reuse the button padding values without pulling in the full button styles. The CSS output of `button-base` is unchanged.

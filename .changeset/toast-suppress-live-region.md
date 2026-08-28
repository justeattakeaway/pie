---
'@justeattakeaway/pie-toast': minor
---

[Added] - `live` option to the `aria` prop (`"off" | "polite" | "assertive"`) to override the ARIA live region politeness. Set it to `"off"` to disable the toast's own live region, e.g. when `pie-toast-provider` owns the announcement, preventing a message being announced twice.

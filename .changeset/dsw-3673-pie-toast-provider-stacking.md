---
"@justeattakeaway/pie-toast-provider": minor
---

[Added] - `isStacked` prop which displays up to 3 toasts simultaneously in a stacked layout. Defaults to `false`, so a single toast is displayed at a time and the rest wait in the queue
[Fixed] - Every toast message is now announced to screen readers. Previously, when several toasts became visible in the same render, only the last message was announced
[Fixed] - Error toasts are announced in a dedicated assertive live region, so a later non-error toast can no longer downgrade the announcement

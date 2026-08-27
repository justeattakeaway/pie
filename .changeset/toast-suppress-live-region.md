---
'@justeattakeaway/pie-toast': minor
---

[Added] - `suppressLiveRegion` prop which, when true, stops the toast exposing its own ARIA live region (`role`). This lets `pie-toast-provider` own a single live region and avoid announcing a message twice.

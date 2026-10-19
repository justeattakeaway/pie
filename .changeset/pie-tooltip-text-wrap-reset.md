---
"@justeattakeaway/pie-tooltip": patch
---

[Fixed] - Restored the default text layout on the tooltip panel so an inherited `white-space` or `text-wrap` of `nowrap` from a host-page ancestor (for example a header action bar) can no longer stop the slotted content from breaking lines or inflate the panel past its default 280px inline-size

---
'@justeattakeaway/pie-toast-provider': minor
---

[Fixed] - Toast messages are now announced by screen readers. The provider renders a single persistent ARIA live region (assertive for `error`, polite otherwise) that is always in the DOM, so status messages are announced automatically without focus moving (WCAG 4.1.3). The rendered toast's own live region is switched off (`aria.live: "off"`) to prevent double announcements.

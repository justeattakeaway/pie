---
"@justeattakeaway/pie-cookie-banner": minor
---

[Added] - New optional `shouldFocusOnOpen` prop. When true, focus moves to the banner dialog when it is displayed on mount, so screen readers announce it. Intended only for when the banner is opened in response to a user action; on initial page load focus remains untouched.

[Fixed] - Cookie banner is now announced as a labelled dialog by screen readers. The banner container uses `role="dialog"` with `aria-labelledby` referencing the visible "Cookies" title and `aria-describedby` referencing the banner description text (WCAG 4.1.2 Name, Role, Value). Focus also moves to the banner whenever it reappears after the "Manage preferences" modal is closed via the back button.

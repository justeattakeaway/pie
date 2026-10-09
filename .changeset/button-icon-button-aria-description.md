---
"@justeattakeaway/pie-button": minor
"@justeattakeaway/pie-icon-button": minor
---

[Added] - New `description` field on the `aria` property of `pie-button` and `pie-icon-button`, rendered as an `aria-description` attribute on the internal button or anchor element. The text travels as a string, so it reaches assistive technologies even when an `aria-describedby` IDREF cannot cross the component's shadow boundary, the intended route for describing a PIE component trigger from a `pie-tooltip` panel in tooltip mode.

[Added] - New `haspopup` and `expanded` fields on the `aria` property of `pie-button`, rendered as `aria-haspopup` and `aria-expanded` attributes on the internal button or anchor element, so the button can announce that it opens a popup such as a dialog, and track whether that popup is open.

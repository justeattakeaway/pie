---
"@justeattakeaway/pie-wrapper-react": minor
"@justeattakeaway/pie-icons-webc": minor
---

[Changed] - Size only gets set when null and `:host-context` styles

This change adds `:host-context` styles to each webc icon, so that if the icon is used
inside pie-icon-button, then it will apply width/height according to the custom properties
set by that component.

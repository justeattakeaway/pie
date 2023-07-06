---
"@justeattakeaway/pie-wrapper-react": minor
"@justeattakeaway/pie-icons-webc": minor
---

[Changed] - Ensure size only gets set when it hasn't already been generated and `:host-context` styles are added for contextual styling

This change adds `:host-context` styles to each webc icon, so that if the icon is used
inside pie-icon-button, then it will apply width/height according to the custom properties
set by that component.

---
"@justeattakeaway/pie-modal": minor
---

[Changed] - Move any browser-based references to lifecycle hooks that are not run on the server. This is to fix SSR issues seen in NextJS integrations where calling things like `document.addEventListener` in places such as the constructor (which is called during SSR and CSR) causes errors to occur.

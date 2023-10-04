---
"@justeattakeaway/pie-card-container": minor
"@justeattakeaway/generator-pie-component": minor
"@justeattakeaway/pie-cookie-banner": minor
"@justeattakeaway/pie-toggle-switch": minor
"@justeattakeaway/pie-icon-button": minor
"@justeattakeaway/pie-form-label": minor
"@justeattakeaway/pie-divider": minor
"@justeattakeaway/pie-button": minor
"@justeattakeaway/pie-modal": minor
"@justeattakeaway/pie-link": minor
---

[Added] - set sideEffects package.json property to correctly communicate to bundlers such as webpack that js files in the component dist folders contain side effects and should therefore not be treeshaken when the entire library is imported. [Reference](https://cube.dev/blog/how-to-build-tree-shakeable-javascript-libraries)

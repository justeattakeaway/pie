---
"@justeattakeaway/pie-wrapper-react": minor
---

[Changed] - Refactored `add-react-wrapper.js` to be executable via npx.
[Changed] - `fs-extra` to a dependency so that script execution doesn't fail outside the monorepo.
[Changed] - Refactored `add-react-wrapper.js` to create unique `custom-elements.json` for each component in the directory where `npx build-react-wrapper` is executed.
---
"@justeattakeaway/pie-icons-react": minor
---

Changes to make sure the ability to use the library in projects that use commonjs or esm:

- Switches react-icons-gen.js and rollup.config.js to .mjs.
- removes `"type": "module"` from package.json and switches "main" to direct to dist instead of esm.

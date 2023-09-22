---
"@justeattakeaway/pie-webc-core": minor
"@justeattakeaway/pie-modal": minor
"@justeattakeaway/pie-icons-webc": minor
---

[Changed] - Removed the DependantMap type and replaced all references with Lit's own PropertyValues helper. This provides exactly the same strongly typed map for a component's properties which makes our own type a little redundant. [Reference](https://lit.dev/docs/components/lifecycle/#typescript-types-for-changedproperties)

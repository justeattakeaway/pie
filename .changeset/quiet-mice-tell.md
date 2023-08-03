---
"@justeattakeaway/pie-icon-button": minor
"@justeattakeaway/pie-icons-configs": minor
"@justeattakeaway/pie-button": minor
"@justeattakeaway/pie-modal": minor
"@justeattakeaway/pie-icons-webc": minor
"@justeattakeaway/pie-icons": minor
"pie-storybook": minor
"pie-monorepo": minor
---

[Fixed] - Prevent tree-shaking of components in storybook
[Removed] - Built webc icons from source control
[Added] - Type declaration files for components
[Added] - Types for pie-icons
[Added] - TS version of pie-icons-configs/config.js (Will be used after DSW-1025)
[Added] - Webc icon tests for width, height and base classes
[Changed] - Update pie-icons-webc build to generate a slightly different template for regular and large icons (using different types, etc.)
[Changed] - Update pie-icons-webc rollup config to remove commonjs build
[Changed] - Use `just-kebab-case` and `just-pascal-case` instead of `kebab-case` and `pascal-case` to simplify usage (and they're more recently maintained)

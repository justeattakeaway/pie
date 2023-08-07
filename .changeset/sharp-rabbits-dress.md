---
"pie-monorepo": minor
---

[Updated] - `./husky/pre-push` to use Turborepo for linting, rather than `eslint` directly.
[Updated] - `turbo.json` so that lint commands no longer `"dependsOn": "^build"`.
[Updated] - Example app `.eslintrc.js` config to specify `root: true` to prevent root monorepo config being used.
[Updated] - `.eslintrc.js` / `.eslintignore` files across the monorepo

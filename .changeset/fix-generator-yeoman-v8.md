---
"@justeattakeaway/generator-pie-component": patch
---

[Fixed] - Component generation broken after `yeoman-generator` was upgraded from v5 to v8.

Several APIs changed silently across that major version jump:

- **File renaming** — `processDestinationPath` was removed from `mem-fs-editor` v12 / `yeoman-generator` v8. Template files whose names contained `placeholder` or `__` (e.g. `__package__.json`, `pie-placeholder.__spec__.ts`) were no longer renamed on copy. Each file that needs renaming is now copied individually with an explicit destination path.

- **Dependency versions** — The generated `package.json` used `0.0.0` as a placeholder for internal workspace packages (`pie-components-config`, `pie-css`, `pie-webc-core`, `pie-monorepo-utils`), relying on a `yarn npm-check-updates` step in `end()` to fix them. In Yarn 4 + PnP that step no longer works reliably. The generator now reads the current version from each workspace `package.json` at generation time and writes it directly into the output.

- **`spawnCommandSync` signature** — In `yeoman-generator` v8 `spawnCommandSync(command, opt)` takes the full command as a single string (parsed by `execa`), not `(command, args, options)`. Calls that passed an args array were silently running `yarn` with no subcommand — `add-components` was never invoked, leaving the new component absent from `pie-webc`. Fixed by using `spawnCommandSync('yarn add-components')` and switching to `spawnSync(command, args, opt)` where an args array is needed.

- **`npm-check-updates` step removed** — Now redundant given the workspace-version fix above, and it caused a Yarn 4 error when the brand-new workspace package wasn't yet registered in the lockfile.

[Fixed] - `pie-webc/componentService.js` now skips component directories that have no `package.json` (with a console warning) instead of throwing and leaving `pie-webc/package.json` unwritten.

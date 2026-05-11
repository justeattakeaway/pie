## 1. Refactor eslint-plugin-snacks-pie-migration

- [x] 1.1 Create `lib/extract-component-data.js` — move `extractComponentData` function from `scripts/extract-component-data.js`, accept `startPath` as a parameter (no default path resolution inside the function), export the function, no file I/O
- [x] 1.2 Update `scripts/extract-component-data.js` to be a thin entry point: import from `lib/`, resolve `startPath` using `findMonorepoRoot` (or keep `process.cwd()`-based resolution here since it runs from the workspace), call `extractComponentData`, write `snacks-components-data.json`
- [x] 1.3 Update `package.json` exports from a string to an object: keep `"."` → `./lib/index.js`, add `"./extract-component-data"` → `./lib/extract-component-data.js`, add `"./snacks-components-data.json"` → `./snacks-components-data.json`
- [x] 1.4 Verify `yarn workspace @justeattakeaway/eslint-plugin-snacks-pie-migration extract-component-data` still works and produces the same `snacks-components-data.json`

## 2. Update pie-monorepo-utils

- [x] 2.1 Add `"@justeattakeaway/eslint-plugin-snacks-pie-migration": "workspace:*"` to `pie-monorepo-utils/package.json` dependencies
- [x] 2.2 Create `pie-monorepo-utils/eslint-plugin-update/detect-changes.js`:
  - Use `findMonorepoRoot` to resolve `startPath` (`path.join(root, 'packages/components')`)
  - Require `extractComponentData` via `@justeattakeaway/eslint-plugin-snacks-pie-migration/extract-component-data`
  - Load stored data from `@justeattakeaway/eslint-plugin-snacks-pie-migration/snacks-components-data.json`
  - Compare generated vs stored (deep equality check)
  - If equal: write `HAS_CHANGES=false` to `$GITHUB_OUTPUT`, exit
  - If different: classify diff into `added`, `removed`, `statusChanged`, `snacksChanged`
  - Write updated `snacks-components-data.json` to the eslint plugin package
  - Create branch `update-eslint-snacks-plugin-${Date.now()}`, commit both the updated JSON and changeset file, push
  - Write to `$GITHUB_OUTPUT`: `HAS_CHANGES=true`, `BRANCH_NAME`, `CHANGESET_FILE_PATH`, `CHANGES_SUMMARY` (JSON-encoded diff)
- [x] 2.3 Create `.changeset/update-eslint-snacks-plugin-${timestamp}.md` inside `detect-changes.js` with a minor bump for `@justeattakeaway/eslint-plugin-snacks-pie-migration` and message "Update eslint rules for PIE migration"
- [x] 2.4 Create `pie-monorepo-utils/eslint-plugin-update/create-eslint-plugin-update-pr.js`:
  - List open PRs and close any whose head branch matches `update-eslint-snacks-plugin-*`, deleting their branches
  - Parse `CHANGES_SUMMARY` env var and format a Markdown PR body with sections: Added, Removed, Status Changes, Package Changes (omit empty sections)
  - Create the PR targeting `main` with title `feat(eslint-plugin-snacks-pie-migration): Update eslint rules for PIE migration`

## 3. GitHub Actions workflow

- [x] 3.1 Create `.github/workflows/update-eslint-snacks-plugin.yml`:
  - Triggers: `push` to `main` with `paths: ['packages/components/**/package.json']` and `workflow_dispatch`
  - Steps: generate GitHub App token → checkout → setup repo → `yarn install` → run `detect-changes.js` → (conditional on `HAS_CHANGES=true`) run `github-script` with `create-eslint-plugin-update-pr.js` → Slack notify
  - Set `HUSKY: 0` env var
  - Use `slackapi/slack-github-action` with `SLACK_BOT_TOKEN` secret and `SNACKS_REVIEWS_SLACK_CHANNEL_ID` secret
  - Slack and PR creation steps use `if: steps.detect.outputs.HAS_CHANGES == 'true'`

## 4. Secrets and verification

- [x] 4.1 Add `SNACKS_REVIEWS_SLACK_CHANNEL_ID` repository secret with value `C04LHHS86BA`
- [x] 4.2 Trigger the workflow manually via `workflow_dispatch` and verify: no-op when data unchanged, PR + Slack notification created when data differs (can temporarily modify a component's `pieMetadata` to test)

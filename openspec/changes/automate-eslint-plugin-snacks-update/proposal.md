## Why

The `@justeattakeaway/eslint-plugin-snacks-pie-migration` package needs its `snacks-components-data.json` kept in sync with component `pieMetadata` as PIE components reach beta and stable status. Today this is a manual step — developers must remember to run the extraction script and raise a PR. Automating this removes the gap between a component landing in the repo and the ESLint rules reflecting it.

## What Changes

- New GitHub Actions workflow (`update-eslint-snacks-plugin.yml`) triggers on push to `main` when any `packages/components/**/package.json` changes, plus a `workflow_dispatch` for manual runs.
- `extract-component-data.js` is refactored: the core function moves to `lib/extract-component-data.js` as a pure, exportable module; the existing `scripts/extract-component-data.js` becomes a thin entry point that calls it and writes the file.
- New `pie-monorepo-utils/eslint-plugin-update/detect-changes.js` script: uses `findMonorepoRoot` to resolve the components path, calls `extractComponentData`, diffs the result against the stored `snacks-components-data.json`, and if changed: creates a branch, writes the updated JSON, creates a changeset (minor bump), commits, and pushes.
- New `pie-monorepo-utils/eslint-plugin-update/create-eslint-plugin-update-pr.js` script: called from `github-script` step; closes any existing open PRs matching the `update-eslint-snacks-plugin-*` branch pattern (and deletes their branches), then creates a new PR with a detailed description of what changed in the `pieMetadata`.
- After PR creation, the workflow posts a Slack notification to `#team-pex-reviews`.
- `eslint-plugin-snacks-pie-migration/package.json` gains two new subpath exports (`./extract-component-data` and `./snacks-components-data.json`).
- `pie-monorepo-utils/package.json` gains a `workspace:*` dependency on `@justeattakeaway/eslint-plugin-snacks-pie-migration`.

## Capabilities

### New Capabilities

- `pieMetadata-change-detection`: Detect when generated `snacks-components-data.json` differs from the stored baseline by comparing extracted component data against the committed file.
- `eslint-plugin-update-automation`: Automate creation of a branch, changeset, PR, and Slack notification when PIE component `pieMetadata` changes are detected.

### Modified Capabilities

## Impact

- **`packages/tools/eslint-plugin-snacks-pie-migration`**: `scripts/extract-component-data.js` refactored; new `lib/extract-component-data.js`; `package.json` updated with subpath exports.
- **`packages/tools/pie-monorepo-utils`**: New `eslint-plugin-update/` directory with two scripts; `package.json` gains `workspace:*` dep on eslint plugin.
- **`.github/workflows/`**: New `update-eslint-snacks-plugin.yml` workflow.
- **Dependencies**: No new external dependencies; uses existing `slackapi/slack-github-action`, `actions/github-script`, GitHub App token, and `SLACK_BOT_TOKEN` secret. Requires a new `SNACKS_REVIEWS_SLACK_CHANNEL_ID` secret for the `#team-pex-reviews` channel.

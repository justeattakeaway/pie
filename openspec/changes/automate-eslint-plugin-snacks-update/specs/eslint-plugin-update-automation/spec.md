## ADDED Requirements

### Requirement: Workflow triggers on component package.json changes merged to main
The `update-eslint-snacks-plugin.yml` workflow SHALL trigger on `push` to `main` when any file matching `packages/components/**/package.json` changes, and SHALL also support `workflow_dispatch` for manual runs.

#### Scenario: Workflow starts after a component package.json is merged to main
- **WHEN** a commit is pushed to `main` that includes changes to one or more `packages/components/**/package.json` files
- **THEN** the `update-eslint-snacks-plugin` workflow is triggered

#### Scenario: Workflow can be triggered manually
- **WHEN** a user triggers the workflow via `workflow_dispatch`
- **THEN** the workflow runs the full detection and (if changes found) automation steps

---

### Requirement: Workflow skips automation when no pieMetadata changes are relevant
If `detect-changes.js` outputs `HAS_CHANGES=false`, all subsequent steps (branch creation, PR creation, Slack notification) SHALL be skipped.

#### Scenario: No relevant changes — workflow exits cleanly
- **WHEN** `detect-changes.js` outputs `HAS_CHANGES=false`
- **THEN** the remaining workflow steps are skipped and the job exits successfully

---

### Requirement: Create a branch and changeset when changes are detected
When `HAS_CHANGES=true`, the workflow SHALL create a new branch named `update-eslint-snacks-plugin-${TIMESTAMP}`, commit the updated `snacks-components-data.json` and a new `.changeset/*.md` file (minor bump for `@justeattakeaway/eslint-plugin-snacks-pie-migration`), and push the branch to origin.

#### Scenario: Branch created with timestamp suffix
- **WHEN** changes are detected
- **THEN** a new branch named `update-eslint-snacks-plugin-<unix-timestamp>` is created from `main` and pushed

#### Scenario: Changeset file written with minor bump
- **WHEN** changes are detected
- **THEN** a file `.changeset/update-eslint-snacks-plugin-<timestamp>.md` is created containing a minor version bump for `@justeattakeaway/eslint-plugin-snacks-pie-migration` and the message "Update eslint rules for PIE migration"

---

### Requirement: Close stale automation PRs before creating a new one
Before creating a new PR, `create-eslint-plugin-update-pr.js` SHALL list all open PRs whose head branch matches the pattern `update-eslint-snacks-plugin-*`, close each one, and delete its remote branch.

#### Scenario: Existing automation PR is closed and its branch deleted
- **WHEN** an open PR with head branch `update-eslint-snacks-plugin-*` exists
- **THEN** the PR is closed and its branch is deleted before the new PR is created

#### Scenario: No stale PRs — proceeds to create new PR immediately
- **WHEN** no open PRs with the automation branch pattern exist
- **THEN** the script proceeds directly to creating the new PR

---

### Requirement: PR description details what changed in pieMetadata
The created PR SHALL include a body that lists changes by category: added components, removed components, status changes, and PIE package renames. Each section SHALL only appear if there are entries in that category.

#### Scenario: PR body includes added components section
- **WHEN** one or more Snacks component names are new in the generated data
- **THEN** the PR body contains an "Added" section listing each new Snacks component and its PIE package and status

#### Scenario: PR body includes removed components section
- **WHEN** one or more Snacks component names were in the stored data but are absent from the generated data
- **THEN** the PR body contains a "Removed" section listing each removed Snacks component

#### Scenario: PR body includes status change section
- **WHEN** one or more components changed status (e.g., beta → stable)
- **THEN** the PR body contains a "Status Changes" section showing the old and new status for each

#### Scenario: PR body includes PIE package rename section
- **WHEN** one or more Snacks components now map to a different PIE package
- **THEN** the PR body contains a "Package Changes" section showing the old and new PIE package name

---

### Requirement: Slack notification sent to #team-pex-reviews after PR creation
After a PR is successfully created, the workflow SHALL send a Slack message to the `#team-pex-reviews` channel (ID `C04LHHS86BA`) containing a link to the PR.

#### Scenario: Slack message sent with PR link
- **WHEN** the automation PR is created
- **THEN** a Slack message is posted to `#team-pex-reviews` containing the PR URL and a brief description

#### Scenario: Slack step is skipped if no PR was created
- **WHEN** `HAS_CHANGES=false` and no PR is created
- **THEN** the Slack notification step does not run

#### Scenario: Slack step is skipped if the workflow was triggered manually
- **WHEN** the workflow is triggered via `workflow_dispatch` (manual run)
- **THEN** the Slack notification step does not run

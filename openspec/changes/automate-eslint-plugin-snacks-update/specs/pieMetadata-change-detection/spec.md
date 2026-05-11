## ADDED Requirements

### Requirement: Extract component data as a pure function
`lib/extract-component-data.js` SHALL export a function `extractComponentData(startPath)` that scans all `package.json` files under `startPath`, collects entries where `pieMetadata` is present and `pieMetadata.replaces.snacks` is a non-empty array, and returns a sorted object mapping each Snacks component name to `{ piePackage, status }`. The function SHALL NOT write any files or have any side effects.

#### Scenario: Returns sorted map of all components with pieMetadata and snacks replacements
- **WHEN** `extractComponentData(startPath)` is called with a valid components directory
- **THEN** it returns an object where keys are Snacks component names sorted alphabetically, and each value contains `piePackage` (the PIE package name) and `status` (`beta` or `stable`)

#### Scenario: Includes components with both beta and stable status
- **WHEN** a component `package.json` has `pieMetadata.componentStatus` of `beta` or `stable` and a non-empty `pieMetadata.replaces.snacks` array
- **THEN** the component's Snacks entries are included in the returned data

#### Scenario: Excludes components without pieMetadata
- **WHEN** a component `package.json` has no `pieMetadata` field
- **THEN** that component does not appear in the returned data

#### Scenario: Excludes components without snacks replacements
- **WHEN** a component `package.json` has `pieMetadata` but `pieMetadata.replaces.snacks` is absent or empty
- **THEN** that component does not appear in the returned data

#### Scenario: Throws when no components are found
- **WHEN** `extractComponentData(startPath)` finds no qualifying entries
- **THEN** it throws an error indicating no components could be found

---

### Requirement: Detect diff between current and stored component data
`detect-changes.js` SHALL compare the output of `extractComponentData` against the committed `snacks-components-data.json`. If the two objects are deeply equal, it SHALL output `HAS_CHANGES=false` to the GitHub Actions environment and exit without further action.

#### Scenario: No changes detected — skips automation
- **WHEN** the generated component data is identical to the stored `snacks-components-data.json`
- **THEN** `HAS_CHANGES=false` is written to `$GITHUB_OUTPUT` and the script exits successfully without creating a branch or changeset

#### Scenario: Changes detected — proceeds with automation
- **WHEN** the generated component data differs from the stored `snacks-components-data.json` in any way
- **THEN** `HAS_CHANGES=true` is written to `$GITHUB_OUTPUT` and the script proceeds to create a branch, update the JSON, and create a changeset

---

### Requirement: Categorise detected changes
When a diff is found, `detect-changes.js` SHALL classify each changed entry into one of four categories: `added`, `removed`, `statusChanged`, or `snacksChanged` (piePackage renamed).

#### Scenario: New Snacks entry in generated data
- **WHEN** a key exists in the generated data but not in the stored data
- **THEN** it is classified as `added`

#### Scenario: Entry removed from generated data
- **WHEN** a key exists in the stored data but not in the generated data
- **THEN** it is classified as `removed`

#### Scenario: Status changed for an existing entry
- **WHEN** a key exists in both datasets and the `status` field differs
- **THEN** it is classified as `statusChanged` with `from` and `to` values recorded

#### Scenario: PIE package renamed for an existing entry
- **WHEN** a key exists in both datasets, `status` is the same, but `piePackage` differs
- **THEN** it is classified as `snacksChanged` with `from` and `to` values recorded

---

### Requirement: Write updated snacks-components-data.json on change
When changes are detected, `detect-changes.js` SHALL overwrite `snacks-components-data.json` in the eslint plugin package with the newly generated data before committing.

#### Scenario: File is updated with latest generated data
- **WHEN** a diff is detected
- **THEN** `snacks-components-data.json` is written with the output of `extractComponentData`, formatted as indented JSON

---

### Requirement: Expose extractComponentData via package subpath export
`eslint-plugin-snacks-pie-migration/package.json` SHALL expose a `./extract-component-data` subpath export pointing to `./lib/extract-component-data.js`, and a `./snacks-components-data.json` subpath export pointing to `./snacks-components-data.json`.

#### Scenario: External consumers can import the function by subpath
- **WHEN** a consumer requires `@justeattakeaway/eslint-plugin-snacks-pie-migration/extract-component-data`
- **THEN** they receive the `extractComponentData` function

#### Scenario: Existing default import is unaffected
- **WHEN** a consumer requires `@justeattakeaway/eslint-plugin-snacks-pie-migration`
- **THEN** they receive the ESLint plugin (same as before)

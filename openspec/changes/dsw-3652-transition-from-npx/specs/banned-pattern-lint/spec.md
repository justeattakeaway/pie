## ADDED Requirements

### Requirement: Config-driven banned pattern detection
The lint script SHALL read a JSON config file that defines an array of banned patterns, each with a search string, a human-readable message, and a list of file extensions to exclude from that pattern's check.

#### Scenario: Config defines a banned pattern with extension exclusions
- **WHEN** the config file contains an entry `{ "pattern": "npx ", "message": "...", "excludeExtensions": [".md"] }`
- **THEN** the script SHALL flag any line matching `npx ` in files whose extension is not `.md`

#### Scenario: New pattern added to config
- **WHEN** a new entry is appended to the `patterns` array in the config file
- **THEN** the script SHALL enforce it on the next run without any changes to the script itself or CI YAML

### Requirement: Global path exclusions
The config file SHALL support an `excludePaths` array of path fragments. Any file whose path contains one of these fragments SHALL be skipped entirely, regardless of which pattern is being checked.

#### Scenario: node_modules excluded
- **WHEN** `"node_modules"` is listed in `excludePaths`
- **THEN** files under `node_modules/` SHALL NOT be scanned

#### Scenario: Custom path fragment excluded
- **WHEN** `"openspec"` is listed in `excludePaths`
- **THEN** files under `openspec/` SHALL NOT be scanned

### Requirement: Actionable failure output
When a banned pattern is found, the script SHALL print the file path, line number, matched line content, and the configured human-readable message for that pattern. The script SHALL exit with code `1` so CI fails.

#### Scenario: Match found in a file
- **WHEN** a file contains a line matching a banned pattern
- **THEN** the script SHALL print `<filepath>:<lineNumber>: <matchedLine>` and the pattern's message to stdout
- **THEN** the script SHALL exit with code `1`

#### Scenario: No matches found
- **WHEN** no files contain any banned pattern
- **THEN** the script SHALL exit with code `0`

### Requirement: CI integration via root package.json script
The lint script SHALL be invocable as a named script in the root `package.json` (e.g. `lint:banned-patterns`) so that CI can call it without knowing the script's file path, and engineers can run it locally with a single `yarn` command.

#### Scenario: Script invoked from root
- **WHEN** `yarn lint:banned-patterns` is run from the repo root
- **THEN** it SHALL execute the Node.js lint script against the full repository

#### Scenario: CI invokes the script
- **WHEN** the CI lint job runs `yarn lint:banned-patterns`
- **THEN** the job SHALL fail if any banned pattern is detected and pass otherwise

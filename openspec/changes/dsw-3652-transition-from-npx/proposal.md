## Why

The PIE monorepo uses `npx` to invoke tools in package scripts and CI pipelines. `npx` silently downloads and executes the latest version of any package not found locally, exposing the repo to typosquatting attacks and version drift between environments. Yarn's local execution model eliminates both risks by requiring every tool to be explicitly installed and version-locked.

## What Changes

- Replace all `npx <tool>` calls in component `package.json` scripts with `run -T <tool>` (Yarn's top-level workspace binary invocation)
- Replace `npx changeset` calls in CI YAML with `yarn run changeset` (shell context, not package script)
- Update the generator template (`__package__.json`) so newly scaffolded components are generated correctly from day one
- Add a config-driven lint script that detects banned shell patterns (starting with `npx`) across non-Markdown files, invoked in CI
- Update `README.md` and `agents.md` to reflect the new invocation style

## Capabilities

### New Capabilities

- `lint-banned-patterns`: A config-driven script that scans the repo for forbidden shell invocation patterns and fails CI if any are found. Patterns and file exclusions are defined in a single config file so new rules can be added without touching CI YAML.

### Modified Capabilities

<!-- No existing spec-level capabilities are changing — this is tooling/infrastructure only -->

## Impact

- **~34 component `package.json` files**: `build:react-wrapper`, `test:browsers`, `test:visual` scripts
- **`packages/tools/pie-icons-webc/package.json`**: `test:browsers-setup`, `test:browsers:react`, `test:browsers:webc`, `test:visual`
- **`packages/tools/generator-pie-component/src/app/templates/__package__.json`**: generator template (multiplier effect on future components)
- **`apps/pie-docs/package.json`**: `dev` script
- **Root `package.json`**: `changeset` script
- **`.github/workflows/changeset-release.yml`**: three `npx changeset pre` steps
- **`.github/workflows/ci.yml`**: new lint step added
- No public APIs, published package interfaces, or consumer-facing behaviour changes

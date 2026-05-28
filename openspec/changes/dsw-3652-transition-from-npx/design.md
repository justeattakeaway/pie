## Context

The PIE monorepo runs Yarn 3 with `nodeLinker: node-modules`. All CI jobs begin with the `setup-repo` composite action, which calls `yarn install --immutable` — this installs every workspace package and hoists their `bin` entries into the root `node_modules/.bin/`. As a result, every binary currently invoked via `npx` is already available as a local bin symlink before any script runs.

The full inventory of `npx` invocation sites:

| Pattern | Count | Location type | Binary source |
|---|---|---|---|
| `npx playwright test` | ~36 | `package.json` scripts | `@playwright/test` root devDep |
| `npx build-react-wrapper` | ~34 | `package.json` scripts | `packages/tools/pie-wrapper-react` workspace bin |
| `npx playwright-lit-setup` | ~2 | `package.json` scripts | `configs/pie-components-config` workspace bin |
| `npx @11ty/eleventy` | 1 | `package.json` scripts | `apps/pie-docs` devDep |
| `npx detect-webc-major-version` | 2 | `package.json` script + husky hook | `packages/tools/pie-monorepo-utils` workspace bin |
| `npx changeset pre …` | 3 | CI shell steps | `@changesets/cli` root devDep |
| `npx --no -- commitlint` | 1 | husky hook | `@commitlint/cli` root devDep |
| `npx add-components` | 2 | `package.json` script + README | `packages/components/pie-webc` workspace bin |
| `npx yo …` | 2 | README only | `yo` — not currently installed |

## Goals / Non-Goals

**Goals:**
- Eliminate all `npx` invocations from all non-Markdown file types, including extension-less files (husky hooks)
- Use the existing `run -T <bin>` convention for `package.json` scripts (consistent with `eslint`, `vite`, `stylelint` usage in the repo)
- Use `yarn run <bin>` for shell contexts where `run -T` is unavailable (CI `run:` steps, husky hooks)
- Add `yo` as a root devDependency so it is version-locked and locally available
- Add an extensible lint script that enforces the ban going forward without requiring CI YAML changes for new rules
- Update Markdown documentation where `npx` is used to invoke repo-owned scripts
- Update the generator template so future components are scaffolded correctly

**Non-Goals:**
- Updating Markdown references to `npx` for external tools not owned by this repo (e.g. `npx skills add` in `agents/resources.md`)
- Changing tool versions, configs, or behaviour

## Decisions

### D1: `run -T` over `yarn run` for package.json scripts

**Decision**: Use `run -T <bin>` in `package.json` scripts.

**Rationale**: `run -T` is already the established pattern in this repo for running binaries (`run -T eslint`, `run -T vite build`, `run -T cross-env-shell`). `yarn run <bin>` also works but introduces a second style. Consistency wins.

**Alternative considered**: `yarn exec <bin>` — semantically equivalent but even less familiar to contributors; rejected.

### D2: `yarn run` for shell contexts (CI steps and husky hooks)

**Decision**: Use `yarn run <bin>` in `.github/workflows/changeset-release.yml` and `.husky/commit-msg`.

**Rationale**: `run -T` is a Yarn script shorthand that only works inside `package.json` `"scripts"`. CI `run:` steps and husky hooks execute in a plain shell — `yarn run <bin>` is the correct form there.

### D3: `npx --no` flag has no explicit equivalent and is not needed

**Decision**: Replace `npx --no -- commitlint --edit ${1}` with `yarn run commitlint --edit ${1}`, dropping the `--no` flag.

**Rationale**: The `--no` (`--no-install`) flag prevents npx from downloading a missing package. `yarn run` never downloads packages — that protection is inherent. The flag has no equivalent and none is needed.

### D4: Move all monorepo-internal bin declarations to root `package.json`

**Decision**: Remove the `"bin"` entries for `add-components`, `detect-webc-major-version`, `playwright-lit-setup`, and `build-react-wrapper` from their respective workspace packages and consolidate them in root `package.json`, pointing to each script's source file via a relative path from root.

| Bin | Current location | Root path |
|---|---|---|
| `add-components` | `packages/components/pie-webc` | `./packages/components/pie-webc/src/index.js` |
| `detect-webc-major-version` | `packages/tools/pie-monorepo-utils` | `./packages/tools/pie-monorepo-utils/webc-major-versioning/detect-webc-major-version.js` |
| `playwright-lit-setup` | `configs/pie-components-config` | `./configs/pie-components-config/scripts/playwright-lit-setup.js` |
| `build-react-wrapper` | `packages/tools/pie-wrapper-react` | `./packages/tools/pie-wrapper-react/index.js` |

**Rationale**: Yarn Berry's `run -T` resolves binaries only from packages that the root workspace explicitly declares as dependencies. Testing confirmed that `detect-webc-major-version` and `playwright-lit-setup` fail with `run -T` because their source packages (`pie-monorepo-utils` and `pie-components-config`) are not in root devDependencies — the same failure mode seen with `add-components`. `build-react-wrapper` currently works because `pie-wrapper-react` happens to be a root devDep, but is moved for consistency. Declaring all four bins in the root workspace is the correct Yarn primitive: it makes ownership explicit, guarantees `run -T` resolution, and removes consumer-facing binaries from published packages that have no use for them externally.

**Alternative considered**: Add `@justeattakeaway/pie-monorepo-utils` and `@justeattakeaway/pie-components-config` to root devDependencies — avoids touching the source packages but introduces root deps purely to fix a tool invocation issue, which is less clear than declaring the bins directly.

### D5: Add `yo` as root devDependency

**Decision**: Add `yo` to root `package.json` devDependencies.

**Rationale**: `yo` is currently not installed anywhere in the repo. The generator README instructs contributors to use `npx yo @justeattakeaway/pie-component`, relying on npx to fetch it. Adding it as a root devDep makes it version-locked, Dependabot-monitored, and available as `run -T yo` — fully consistent with how other binaries are managed.

### D6: Config-driven banned-pattern lint script

**Decision**: Implement a Node.js script (`packages/tools/pie-monorepo-utils/lint-banned-patterns/lint-banned-patterns.js`) with a companion JSON config file (`packages/tools/pie-monorepo-utils/lint-banned-patterns/lint-banned-patterns.config.json`). File discovery walks the repo and includes files regardless of extension (so husky hooks are covered), filtering by `excludePaths` and per-pattern `excludeExtensions`.

**Config structure**:
```json
{
  "patterns": [
    {
      "pattern": "npx ",
      "message": "Use 'run -T <bin>' (in package.json scripts) or 'yarn run <bin>' (in shell contexts) instead of npx.",
      "excludeExtensions": [".md"]
    }
  ],
  "excludePaths": [
    "node_modules",
    ".yarn",
    "openspec"
  ]
}
```

**Why Node.js over a shell grep**: Portable across macOS and Linux CI without `grep` flag divergence. Config is structured data, easily extended. Exit code 1 on any match so CI fails correctly. Extension-less file handling is trivial in Node but fragile in shell.

**Why a separate config file**: Adding a new banned pattern requires editing only the JSON file — no changes to the script itself or CI YAML.

**Alternative considered**: An ESLint plugin for `package.json` scripts — too narrow (wouldn't cover `.yml` CI files or husky hooks); rejected.

### D7: Generator template must be updated

**Decision**: Update `packages/tools/generator-pie-component/src/app/templates/__package__.json` alongside the live component files.

**Rationale**: The template is the source of truth for new components. If left unchanged, every future component scaffolded via `yo pie-component` would re-introduce `npx` calls, defeating the purpose of this change and bypassing the CI lint check (since newly generated files would fail CI immediately).

## Risks / Trade-offs

- **`percy exec -- yarn run playwright test` subprocess invocation** → Percy's `exec` command passes everything after `--` to the shell. `yarn run playwright test` is valid shell syntax; this is safe. Mitigation: verified by the CI run in the final task.
- **Generator template version drift** → The template pins `"@justeattakeaway/pie-components-config": "0.0.0"` as a workspace placeholder. After this change the template will use `run -T` binaries that the generated component's install will provide. No risk.
- **CI lint check over-matching** → The pattern `npx ` (with trailing space) avoids false positives on strings like `cnpx` or package names containing `npx`. The `excludePaths` list prevents matching vendored code.
- **Root bin path fragility** → Each root `bin` entry references the source file directly by path. If any entry point moves, the root bin breaks — but equally, the original `bin` declarations in the source packages would have broken too. All four paths are stable and referenced by existing symlinks in `node_modules/.bin/`.

## Migration Plan

1. Add `yo` to root devDependencies and run `yarn install` to update `yarn.lock`.
2. Add the `add-components` root script to root `package.json`.
3. Land the banned-pattern lint script and config alongside the `npx` replacements — so CI enforces the rule from the moment it merges.
4. Update all `package.json` files (component packages, apps, tools, root), the generator template, husky hooks, and CI workflow YAML in one PR.
5. Run the full CI pipeline to verify all scripts resolve correctly.
6. No rollback complexity — all changes are text substitutions with no behaviour change.

## Open Questions

- None. All decisions are made; investigation confirmed all bins are available post-`yarn install`.

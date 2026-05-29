## 1. Prerequisites

- [x] 1.1 Add `yo` to root `package.json` devDependencies and run `yarn install` to update `yarn.lock`
- [x] 1.2 Remove the `"bin"` entry for `add-components` from `packages/components/pie-webc/package.json`, for `detect-webc-major-version` from `packages/tools/pie-monorepo-utils/package.json`, for `playwright-lit-setup` from `configs/pie-components-config/package.json`, and for `build-react-wrapper` from `packages/tools/pie-wrapper-react/package.json`
- [x] 1.3 Add all four entries to the root `package.json` `"bin"` field:
  - `"add-components": "./packages/components/pie-webc/src/index.js"`
  - `"detect-webc-major-version": "./packages/tools/pie-monorepo-utils/webc-major-versioning/detect-webc-major-version.js"`
  - `"playwright-lit-setup": "./configs/pie-components-config/scripts/playwright-lit-setup.js"`
  - `"build-react-wrapper": "./packages/tools/pie-wrapper-react/index.js"`

## 2. Banned Pattern Lint Script

- [x] 2.1 Create `packages/tools/pie-monorepo-utils/lint-banned-patterns/lint-banned-patterns.config.json` with the `npx ` pattern entry (`excludeExtensions: [".md"]`) and `excludePaths: ["node_modules", ".yarn", "openspec"]`
- [x] 2.2 Create `packages/tools/pie-monorepo-utils/lint-banned-patterns/lint-banned-patterns.js` — Node.js script that reads the config, walks the repo (including extension-less files), and exits 1 with file/line/message output on any match
- [x] 2.3 Add `"lint:banned-patterns": "node ./packages/tools/pie-monorepo-utils/lint-banned-patterns/lint-banned-patterns.js"` to root `package.json` scripts
- [x] 2.4 Add a `yarn lint:banned-patterns` step to the lint job in `.github/workflows/ci.yml`

## 3. Replace npx in Component package.json Files

- [x] 3.1 In all 31 `packages/components/*/package.json` files, replace `npx playwright test` → `run -T playwright test` in `test:browsers` and `test:visual` scripts
- [x] 3.2 In all 31 `packages/components/*/package.json` files, replace `npx build-react-wrapper` → `run -T build-react-wrapper` in the `build:react-wrapper` script

## 4. Replace npx in Tools and Apps

- [x] 4.1 In `packages/tools/pie-icons-webc/package.json`, replace `npx playwright-lit-setup` → `run -T playwright-lit-setup` and `npx playwright test` → `run -T playwright test` (affects `test:browsers-setup`, `test:browsers:react`, `test:browsers:webc`, `test:visual`)
- [x] 4.2 In `apps/pie-docs/package.json`, replace `npx @11ty/eleventy --serve --port=8080` → `run -T eleventy --serve --port=8080` in the `dev` script
- [x] 4.3 In root `package.json`, replace `changeset && npx detect-webc-major-version` → `changeset && run -T detect-webc-major-version` in the `changeset` script

## 5. Replace npx in Generator Template

- [x] 5.1 In `packages/tools/generator-pie-component/src/app/templates/__package__.json`, replace all three `npx` calls (`npx build-react-wrapper`, `npx playwright test` in `test:browsers`, `npx playwright test` in `test:visual`) with their `run -T` equivalents

## 6. Replace npx in CI Workflow and Husky Hooks

- [x] 6.1 In `.github/workflows/changeset-release.yml`, replace the three `npx changeset pre exit/enter beta/enter next` shell steps with `yarn exec changeset pre exit/enter beta/enter next` (`yarn exec` used instead of `yarn run` to bypass the root `changeset` script that has the same name)
- [x] 6.2 In `.husky/commit-msg`, replace `npx --no -- commitlint --edit ${1}` → `yarn run commitlint --edit ${1}` (the `--no` flag is not needed — `yarn run` never downloads packages)
- [x] 6.3 In `.husky/commit-msg`, replace `npx detect-webc-major-version` → `yarn run detect-webc-major-version`

## 7. Update Documentation

- [x] 7.1 In `packages/tools/pie-wrapper-react/README.md` (lines 29 and 68), update the `"build:react-wrapper"` script example from `"npx build-react-wrapper"` → `"run -T build-react-wrapper"`
- [x] 7.2 In `packages/tools/generator-pie-component/README.md` (line 78), replace `npx add-components` → `yarn add-components`
- [x] 7.3 In `packages/tools/generator-pie-component/README.md` (lines 37 and 106), replace `npx yo @justeattakeaway/pie-component` → `yarn run yo @justeattakeaway/pie-component`
- [x] 7.4 In `packages/components/pie-webc/README.md` (line 60), replace `npx add-components` → `yarn add-components`

- [x] 7.5 In `AGENTS.md`, add a dedicated section (e.g. "Adding and running tools") covering:
  - **Never use `npx`** — it can silently download unverified packages and introduces version drift
  - **Adding a new external tool**: install it as a `devDependency` in the appropriate `package.json` so the version is locked in `yarn.lock` and monitored by Dependabot
  - **Adding a new monorepo-internal bin script**: declare it in root `package.json` `"bin"` (not in the source package) so it is always resolved correctly via `run -T`; explain why — Yarn Berry's `run -T` only resolves bins from packages the root workspace explicitly declares
  - **Invocation patterns** — two contexts, two forms:
    - `run -T <bin>` in `package.json` scripts
    - `yarn run <bin>` in shell contexts (CI `run:` steps, husky hooks)
  - **Example**: walk through adding a hypothetical new tool end-to-end (install dep → declare bin at root if internal → invoke with `run -T`)

## 8. Verify

- [x] 8.1 Run `yarn lint:banned-patterns` locally and confirm it exits 0 (no remaining `npx` in non-Markdown, non-excluded files)
- [x] 8.2 Confirm the generator still works: run `yarn run yo @justeattakeaway/pie-component` and verify the scaffolded `package.json` contains no `npx` calls
- [x] 8.3 Confirm `yarn add-components` runs successfully from the monorepo root

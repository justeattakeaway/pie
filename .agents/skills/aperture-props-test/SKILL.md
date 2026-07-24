---
name: aperture-props-test
description: Verify a newly added or changed PIE component prop in Aperture across all 4 framework apps. Invoke as `/aperture-props-test <component> <prop> [value]` after `/test-aperture` has run on the PIE PR.
disable-model-invocation: true
---

# aperture-props-test

After `/test-aperture` has been triggered on a PIE PR, this skill pulls the resulting Aperture branch, adds scratch edits across all 4 framework apps (Nuxt, Next.js v14, Next.js v15, Vanilla), starts all dev servers concurrently, prompts the user to verify the visual output, and then reverts the scratch edits only after confirmation. Nothing is ever committed.

## Prerequisites

This skill relies on these command-line tools being installed and on `PATH`. Verify up front and stop with a clear message if any essential one is missing:
- `gh` (GitHub CLI, authenticated) — **essential**; Step 2 uses it to find the Aperture branch. Check with `gh auth status`.
- `git`, `yarn`, `lsof` — **essential**; used for branch checkout, install, and port management.
- `code` (VS Code CLI) — optional; Step 4 uses it to open the edited files. If absent, skip opening the IDE and just report the file paths.

## Inputs

The user will invoke this skill with a component name, prop name, and optionally a prop value, for example:
- `/aperture-props-test pie-textarea aria`
- `/aperture-props-test pie-textarea aria '{"label":"My label"}'`
- `/aperture-props-test pie-button size large`

Parse up to three values from the invocation args:
1. `<component-name>` — required
2. `<prop-name>` — required
3. `<prop-value>` — optional; if omitted, the skill suggests a value in Step 1 and asks the user to confirm before continuing

If component name or prop name is missing, ask the user to provide them before proceeding.

The Aperture branch is derived automatically in Step 2 by matching the current PIE branch name — do not ask the user for a PR number.

## Step 1 — Set up and confirm the run

Derive the three locations:
- **PIE monorepo root** — the git root of the active session (do not hardcode a path).
- **Aperture path** — the PIE root's parent directory + `pie-aperture` (e.g. PIE at `/home/user/projects/pie` → Aperture at `/home/user/projects/pie-aperture`).
- **Current PIE branch** — `git branch --show-current`. The user must be on the branch they want to verify.

**Read the prop definition.** In the PIE repo, read `<pie-root>/packages/components/<component-name>/src/defs.ts` and extract, for the prop under test: its type (primitive, union, or object shape), whether it is optional or required, and any JSDoc description. If the prop is not found, stop and list the defined props.

**Determine the value.** If the user provided a `<prop-value>`, use it. Otherwise derive a sensible example from the type.

**Confirm — one prompt covering everything.** Show the user the PIE root, Aperture path, branch, and the value to use (noting whether it was provided or suggested), and ask them to confirm before continuing — options: **yes / switch branch / different path / different value**. Do not proceed until they reply.
- If they give a different Aperture path, use it for all subsequent steps.
- If they need a different branch, have them check it out (or switch it for them on confirmation), then re-read the branch name.
- If the confirmed Aperture directory does not exist, stop and tell the user:
  > "pie-aperture was not found at `<aperture-path>`. Please clone it there:
  > `git clone git@github.com:justeattakeaway/pie-aperture.git <aperture-path>`"

## Step 2 — Find the Aperture branch and install

**The join key is the branch name, not the PR number.** The PIE PR and its Aperture PR have *different* numbers (e.g. PIE #3026 ↔ Aperture #524) — `/test-aperture` creates the Aperture branch with the **same name** as the PIE head branch. Do not match on PR number.

Using the PIE branch confirmed in Step 1, find the Aperture PR whose head branch matches it exactly (`--head`, not `--search`):
```
gh pr list --repo justeattakeaway/pie-aperture --head "<pie-branch-name>" --state all --json number,headRefName,url
```

Then handle the result:

- **Exactly one match** — use it.
- **No match** — the branch names may differ only in case (e.g. `dsw-3900-…` vs `DSW-3900-…`), or `/test-aperture` may not have run. Fall back to a ticket-ID search using the `DSW-####` token from the branch name, and inspect `headRefName` on the results:
  ```
  gh pr list --repo justeattakeaway/pie-aperture --search "<DSW-####>" --state all --json number,headRefName,url
  ```
  - If one clearly corresponds, confirm it with the user before using it.
  - If several match (a ticket can have more than one branch, e.g. a `-clean` variant), **list them and ask the user which to use** — do not guess.
  - If none match, stop and tell the user:
    > "`/test-aperture` does not appear to have been run yet for branch `<pie-branch-name>`, or the Aperture PR hasn't been created yet. Please post `/test-aperture` as a comment on the PIE PR and wait for CI to complete before running this skill."

Once the Aperture branch is chosen, fetch and check it out in the local Aperture clone.

Confirm the branch is up to date, then install dependencies — always, before editing anything. `/test-aperture` or `/snapit` commands pin a fresh `@justeattakeaway/pie-webc` snapshot on each run, so run the install every time to ensure the right snapshot version is tracked. The install rewrites `yarn.lock`; leave it changed and restore it at teardown (Step 7).
```
cd <aperture-path> && yarn install
```

Then confirm the snapshot is aligned: the `version` in `<aperture-path>/node_modules/@justeattakeaway/pie-webc/package.json` should match the version each app pins for `@justeattakeaway/pie-webc` under `dependencies` in its own `package.json`. All 4 apps should be present and matching; if any differ, re-run the install.

## Step 3 — Locate the per-component pages

Each app keeps its examples in a **dedicated per-component page at a fixed path**, named by the component's **slug** — the component name with any leading `pie-` removed (e.g. `pie-textarea` → `textarea`). Check whether each exists and collect the ones that do — this is the set you edit in Step 4:
- Nuxt — `<nuxt-app>/pages/components/<slug>.vue`
- Next.js v14 — `<nextjs-v14-app>/src/app/components/<slug>/<slug>.tsx`
- Next.js v15 — `<nextjs-v15-app>/src/app/components/<slug>/<slug>.tsx`
- Vanilla — `<vanilla-app>/js/<slug>.js` (the markup lives here, **not** in the `components/<slug>.html` shell that loads it)

The app directories sit at the Aperture root, named roughly `nuxt-app`, `nextjs-app-v14`, `nextjs-app-v15`, `vanilla-app`; list the root to confirm the exact names, then check the path above in each.

**Only edit these per-component pages.** Never touch integration/form pages (`integrations/*`) unless the user explicitly asks. This skill edits existing pages — it never creates them:
- **Missing in every app** — stop and tell the user the component has no pages yet; they can create them manually or using the `add-component-pages` skill in the Aperture repo, then re-run this skill.
- **Missing in some apps only** — tell the user which apps lack a page (those are skipped) and proceed with the rest.

## Step 4 — Apply framework-appropriate scratch edits

**Announce before editing.** These edits land in the *Aperture* repo, not the PIE repo the user's IDE shows, so they're invisible until Aperture is opened. Before touching any file, briefly tell the user what's about to change and that you'll open Aperture for review before starting the dev servers — without enumerating file paths (they review those in the Aperture window).

Using the confirmed prop value, produce the correct snippet syntax for each framework. For each file found in Step 3, append the scratch example **after all existing component examples**, preceded by a `pie-divider`, so the prop under test is clearly set off below the app's own examples (never interleave it between them). The per-component pages already import a divider component (`pie-divider` / `PieDivider`), so reuse that. Track which files you edit so Step 7 can revert them precisely.

**Examples** (based on `pie-textarea` — reference these for the per-framework syntax and adapt to the component/prop under test):

**Vue:**
```vue
<pie-divider></pie-divider>
<pie-textarea :aria="{ label: 'Test aria label' }" value="Hello"></pie-textarea>
```

**JSX/TSX:**
```tsx
<PieDivider />
<PieTextarea aria={{ label: 'Test aria label' }} value="Hello" />
```

**HTML:**
```html
<pie-divider></pie-divider>
<pie-textarea aria='{"label":"Test aria label"}' value="Hello"></pie-textarea>
```

Do not restructure or reformat existing code — only append the new divider + element after the existing usage. If a file uses the component but the insertion point is unclear, show the user the relevant lines and ask where to insert before editing.

Once all edits are applied, post **one** message that says the files are updated, and you'll open Aperture in a **separate IDE window** on branch `<branch-name>` in ~10 seconds so they can inspect the temporary example across all 4 apps — ask them to review there and reply **go** to start the dev servers (or say what to adjust). Note nothing is committed and everything is reverted at the end.

Then open one Aperture workspace window on a ~10-second delay (so the user isn't caught off guard by the focus switch), launched as a **background job** so the wait doesn't block. Pass the Aperture root first, followed only by the edited file paths: `code -n <aperture-path> <edited-file>...`. This keeps Source Control rooted in Aperture, where the scratch edits are tracked, while opening only the changed files as tabs. If the `code` CLI is unavailable, skip this and just list the file paths for the user to open manually.

**This is a hard stop.** End the turn here — do **not** start the dev servers (Step 5) until the user replies **go**.

## Step 5 — Start all dev servers concurrently

Only begin this step after the user's **go** from Step 4.

**Pre-flight: check the target ports are free** (vanilla → 3001, Nuxt → 3002, Next.js v14 → 3003, v15 → 3004). If a port is occupied, inspect the process: if its working directory is under `pie-aperture` it's a leftover Aperture server and safe to reclaim; anything unrelated is never killed — route around it. Vite/Nuxt fall back to the next free port automatically, but **Next.js crashes on a taken port (`EADDRINUSE`)** rather than falling back, so start it on an explicit free port.

Then start the dev servers — the root `yarn dev` runs `turbo run dev`, starting all 4 at once. Run it from inside the Aperture directory. A dev server runs indefinitely, so **don't wait on it to finish**: launch it in the background.
```
cd <aperture-path> && yarn dev
```

Monitor each server's output for the actual local URL and port. Report each URL as it appears, and watch for `Failed to start` / `EADDRINUSE` so a crashed app isn't reported as "still starting".

## Step 6 — Prompt visual verification

Once all available servers are running, present each app's URL ordered by port (3001 → 3004) and ask the user to verify the `<prop-name>` prop looks correct. Every app serves the page at `http://localhost:<port>/components/<slug>` — the `pie-`-stripped slug from Step 3 (vanilla adds a `.html` suffix); substitute the actual detected port if an app fell back (Step 5). Wait for the user's reply before proceeding — do not clean up until explicitly told to.

## Step 7 — Tear down (revert edits and stop servers)

When the user signals they've finished verifying (e.g. "done", "looks good"), do **not** tear down yet — first ask for explicit confirmation, since teardown reverts their edits and stops the servers: **"revert the scratch edits and stop all dev servers now? (yes / keep running)"**.

Only proceed once the user confirms. If they say **keep** (or decline), leave everything running (see below).

On confirmation, do the full teardown **as a single action with no intermediate narration** — revert and stop together, then give one report.

Do both in one pass:
- **Revert the changed files** — a targeted revert of only the files modified in Step 4 **plus `yarn.lock`** (changed by the Step 2 install), not a blanket `git checkout .`, so any other in-progress changes in Aperture are preserved.
- **Stop the dev servers**, then **verify by port** (not by process name) that they're gone. If any Aperture server is still listening, kill it **by port** — do **not** use a name-pattern `pkill` (`next dev` / `nuxt` / `vite`): once running these processes are named `node` / `next-server`, so the pattern silently misses them and leaves orphans occupying the ports.

Only after both are done, give a single report confirming the scratch edits are reverted (working tree clean), the servers stopped (ports 3001–3004 free), and the branch intact with nothing committed.

If the user says **keep**, leave the edits and servers running and remind them how to tear down later — the targeted `git checkout ... yarn.lock` above, and stopping the `yarn dev` background task (Ctrl-C or kill it).

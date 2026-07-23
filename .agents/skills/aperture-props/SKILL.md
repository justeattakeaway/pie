---
name: aperture-props
description: Use this skill to verify a newly added or changed PIE component prop in Aperture, typically invoked as `/aperture-props <component> <prop> [value]` after `/test-aperture` has run on the PIE PR. It pulls the matching Aperture branch locally, temporarily adds prop examples across all 4 framework apps (Nuxt, Next.js v14, Next.js v15, Vanilla), starts all dev servers concurrently, prompts visual verification, then reverts the scratch edits and stops the servers on confirmation. Scratch edits are never committed.
---

# aperture-props

After `/test-aperture` has been triggered on a PIE PR, this skill pulls the resulting Aperture branch, adds scratch prop examples across all 4 framework apps (Nuxt, Next.js v14, Next.js v15, Vanilla), starts all dev servers concurrently, prompts you to verify the visual output, and then reverts the scratch edits only after you confirm. Nothing is ever committed.

## Prerequisites

This skill relies on these command-line tools being installed and on `PATH`. Verify up front and stop with a clear message if any essential one is missing:
- `gh` (GitHub CLI, authenticated) — **essential**; Step 2 uses it to find the Aperture branch. Check with `gh auth status`.
- `git`, `yarn`, `lsof` — **essential**; used for branch checkout, install, and port management.
- `code` (VS Code CLI) — optional; Step 7 uses it to open the edited files. If absent, skip opening the IDE and just report the file paths.
- `rg` (ripgrep) — optional; a faster alternative to `grep` in Step 4.

## Inputs

The user will invoke this skill with a component name, prop name, and optionally a prop value, for example:
- `/aperture-props pie-textarea aria`
- `/aperture-props pie-textarea aria '{"label":"My label"}'`
- `/aperture-props pie-button size large`

Parse up to three values from the invocation args:
1. `<component-name>` — required
2. `<prop-name>` — required
3. `<prop-value>` — optional; if omitted, the skill suggests a value in Step 5 and asks the user to confirm before continuing

If component name or prop name is missing, ask the user to provide them before proceeding.

The Aperture branch is derived automatically in Step 2 by matching the current PIE branch name — do not ask the user for a PR number.

## Step 1 — Locate repositories

Derive the PIE monorepo root from the current working directory (it is the git root of the active session — do not hardcode a path).

Derive the expected Aperture path by taking the PIE root's parent directory and appending `pie-aperture`. For example, if PIE is at `/home/user/projects/pie`, Aperture is expected at `/home/user/projects/pie-aperture`.

Also read the current PIE branch (`git branch --show-current`). This branch name is the join key used to find the Aperture branch in Step 2, so the user must be on the branch they want to verify. A ticket can have more than one branch (e.g. a `-clean` variant), so confirming this up front avoids matching the wrong Aperture branch.

Show the user the derived paths **and the current branch**, and ask them to confirm before continuing:
> "I'll use these paths:
> - PIE monorepo: `<pie-root>`
> - Aperture: `<aperture-path>`
> - Current PIE branch: `<pie-branch-name>`
>
> Is this the branch you want to run Aperture testing from, and do the paths look correct? (yes / switch branch / provide different path)"

If the user provides a different Aperture path, use that instead for all subsequent steps. If they need a different branch, ask them to check it out (or switch it for them if they confirm which), then re-read the branch name before continuing.

If the confirmed Aperture directory does not exist, stop and tell the user:
> "pie-aperture was not found at `<aperture-path>`. Please clone it there:
> `git clone git@github.com:justeattakeaway/pie-aperture.git <aperture-path>`"

## Step 2 — Confirm /test-aperture has been run and find the Aperture branch

**The join key is the branch name, not the PR number.** The PIE PR and its Aperture PR have *different* numbers (e.g. PIE #3026 ↔ Aperture #524) — `/test-aperture` creates the Aperture branch with the **same name** as the PIE head branch. Do not match on PR number.

Get the current PIE branch name:
```
git branch --show-current
```

Find the Aperture PR whose head branch matches it exactly (`--head`, not `--search`):
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

Once the Aperture branch is chosen, fetch and check it out in the local Aperture clone:
```
git -C <aperture-path> fetch origin
git -C <aperture-path> checkout <branch-name>
git -C <aperture-path> pull origin <branch-name>
```

Confirm the branch is up to date, then ensure the component snapshot is installed — now, before editing anything. A full `yarn install` takes ~2 min, so only run it when needed:
```
cd <aperture-path> && yarn install
```
Skip the install if the `@justeattakeaway/pie-webc` version pinned in an app's `package.json` already matches the version resolved from its `node_modules` (a cheap check that avoids yarn re-verifying the whole tree); otherwise run the install above with plain `yarn install` — not `--immutable`/`--frozen-lockfile` — which rewrites `yarn.lock`, so leave it changed and restore it at teardown (Step 10). See `references/gotchas.md` for why.

## Step 3 — Read the prop definition

In the PIE monorepo, read `<pie-root>/packages/components/<component-name>/src/defs.ts` and extract, for the prop under test:
- Its TypeScript type (primitive, union, or object shape)
- Whether it is optional or required
- Any JSDoc description

This is all that's needed to build the usage examples in Step 6. (No React import-path lookup is required — the Aperture per-component pages already import the component; Step 7 only appends usage, never adds imports.)

If the prop name is not found in `defs.ts`, stop and tell the user, listing all defined props.

## Step 4 — Understand the Aperture app structure

Explore the Aperture repo to find where `<component-name>` is already used:
```
grep -rl "<component-name>" <aperture-path> --include="*.vue" --include="*.tsx" --include="*.ts" --include="*.js" --include="*.html" --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.next --exclude-dir=.nuxt --exclude-dir=.turbo
```

The `--exclude-dir` flags are **required** (without them grep walks every `node_modules` and hangs for minutes) and `*.js` is **required** (the vanilla app's markup lives in `js/<component>.js`). Full reasoning, plus the `rg` alternative, in `references/gotchas.md`.

**Only augment the dedicated per-component page in each app.** Never edit integration/form pages (`integrations/*`) unless the user explicitly asks. The per-component pages are:
- Nuxt — `pages/components/<component>.vue`
- Next.js v14/v15 — `src/app/components/<component>/<component>.tsx`
- Vanilla — `js/<component>.js` (rendered via `components/<component>.html`)

This skill only augments existing per-component pages — it never creates them.
- **Missing in every app** — stop and tell the user the component has no pages yet; they can create them automatically with the `add-component-pages` skill in the Aperture repo, then re-run this skill.
- **Missing in some apps only** — tell the user which apps lack a page (so those are skipped) and that they should create them. Proceed with the apps that do have one.

The 4 apps to look for are directories named roughly:
- `nuxt-app` or similar (Nuxt/Vue)
- `nextjs-app-v14` or similar (Next.js v14)
- `nextjs-app-v15` or similar (Next.js v15)
- `vanilla-app` or similar (plain HTML/JS)

## Step 5 — Determine the prop value to use

If the user provided a `<prop-value>` in the invocation args, use it directly.

If no prop value was provided, derive a sensible example from the prop type extracted in Step 3:
- Object shape → populate each optional key with a short illustrative string (e.g. `{ label: 'Test aria label' }`)
- Union string → use the first variant listed
- Boolean → `true`
- String → a short descriptive string (e.g. `'Test value'`)
- Number → `1`

Present the suggested value to the user and ask for confirmation before continuing:
> "I'll use this value for `<prop-name>`:
> `<suggested-value>`
>
> Shall I continue with this, or would you like to use a different value?"

Do not proceed until the user confirms or provides an alternative.

## Step 6 — Generate framework-appropriate prop snippets

Using the confirmed prop value, produce the correct syntax for each framework:

**Vue / Nuxt** — object/array props use `:` binding; primitives use plain attribute:
```vue
<pie-textarea :aria="{ label: 'Test aria label' }" />   <!-- object -->
<pie-button size="large" />                               <!-- primitive -->
```

**React / Next.js** — JSX syntax, PascalCase component name:
```tsx
<PieTextarea aria={{ label: 'Test aria label' }} />   {/* object */}
<PieButton size="large" />                             {/* primitive */}
```
Note: React wrappers are PascalCase (e.g. `PieTextarea`, `PieButton`).

**Vanilla HTML** — objects serialised as JSON attribute string; primitives as plain attribute:
```html
<pie-textarea aria='{"label":"Test aria label"}'></pie-textarea>  <!-- object -->
<pie-button size="large"></pie-button>                             <!-- primitive -->
```

For union string props, add one example per variant.

## Step 7 — Apply scratch edits

**Announce before editing.** These edits land in the *Aperture* repo — a different repo from the PIE one the user's IDE is focused on, so the changes are invisible until Aperture is opened. Before touching any file, tell the user what is about to change — briefly, without enumerating file paths (the user reviews those in the Aperture window; listing them in the terminal wastes tokens):
> "I'm about to add a temporary `<prop>` example to `<component>` across all 4 Aperture apps, then open Aperture in a separate IDE window so you can review, and check with you before starting the dev servers."

Track which files are modified so they can be cleaned up precisely in Step 10. Keep a list: `scratchFiles = []`.

For each file found in Step 4, append the scratch example **after all existing component examples**, preceded by a `pie-divider`, so the prop under test is clearly set off below the app's own examples (never interleave it between them). The per-component pages already import a divider component (`pie-divider` / `PieDivider`), so reuse that.

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

Do not restructure or reformat any existing code. Only append the new divider + element after the existing usage. Cleanup in Step 10 is a whole-file `git checkout`, so no marker comments are needed to delimit the block.

If a file uses the component but the insertion point is unclear, show the user the relevant lines and ask where to insert before editing.

Once all edits are applied, **post the confirmation prompt first (future tense), then open the window.** Do not enumerate the files (they review them in the Aperture window) and do not ask per-file — post exactly one prompt:
> "I'll now open Aperture in a separate IDE window on branch `<branch-name>`, with a temporary `<prop>` example added to all 4 apps. **Please review the changes there and come back to confirm** — reply **go** to start the dev servers, or tell me what to adjust. Nothing is committed; everything is reverted at the end."

Then open Aperture in a **separate IDE window** (not the user's PIE window) so its git/Source Control view stays isolated from PIE — `-n` forces a new window, and the file paths open as tabs:
```
code -n <aperture-path> <file1> <file2> ...
```
(If the `code` CLI is unavailable, skip this and just list the file paths for the user to open manually.)

**This is a hard stop.** End the turn here — do **not** run any Step 8 command (no install check, no `lsof`, no `yarn dev`) until the user replies. Only proceed to Step 8 once the user replies **go**.

## Step 8 — Start all dev servers concurrently

Only begin this step after the user's **go** from Step 7. (Dependencies were already installed in Step 2.)

**Pre-flight: check the target ports are free.** The apps use fixed ports (vanilla → 3001, Nuxt → 3002, Next.js v14 → 3003, v15 → 3004). Before starting, check them:
```
lsof -nP -iTCP:3001 -iTCP:3002 -iTCP:3003 -iTCP:3004 -sTCP:LISTEN
```
If any port is occupied, handle it per **`references/gotchas.md`** ("Handling a taken port"): a leftover **Aperture** dev server (its path is under `pie-aperture` — whether from a previous run or started manually) is safe to clean up; any unrelated program is never killed — Vite/Nuxt fall back automatically and Next.js is started on a chosen free port. Always explain in plain terms and never say "orphan".

Then start the dev servers. The root `yarn dev` runs `turbo run dev`, which starts all 4 at once. Run it **from inside the Aperture directory** (`cd` first, so Aperture's own yarn is used) as a background job, and **let the background runner capture its output** — do **not** add `> log` redirection yourself (a `cd` combined with output redirection trips the sandbox guard; the background runner already writes stdout/stderr to a file you can read):
```
cd <aperture-path> && yarn dev
```
**Record the background task/job id** — Step 10 uses it to stop the whole process tree cleanly, and its captured-output file is what you grep for URLs below. (If starting a single Next.js app on an overridden port per the `EADDRINUSE` handling below, run it the same way: `cd <app-dir> && yarn exec next dev -p <free-port>`.)

Start all 4 servers concurrently — do not wait for one to finish before starting the next.

Monitor each server's output to detect the actual local URL and port (do not assume port 3000; ports can differ from the `dev` script, e.g. Nuxt landing on 3002, or an app falling back off an occupied port). Report each URL as it becomes available. Also watch for `Failed to start` / `EADDRINUSE` so a crashed app isn't silently reported as "still starting".

To detect URLs/ports and errors, **grep the background job's captured-output file for just the relevant lines** — do **not** `Read` the whole file into context (it is mostly build warnings, and reading it wastes tokens every time):
```
grep -aE "Local:|Ready|ready in|EADDRINUSE|Failed to start" <captured-output-file>
```

If a **Next.js** app crashes with `EADDRINUSE` (it pins its port and won't fall back), handle it per the same **`references/gotchas.md`** procedure — start that one app on a verified-free port with `cd <app-dir> && yarn exec next dev -p <free-port>` and report the chosen port. For other (non-port) failures, show the error output and suggest re-running `yarn install` at the Aperture root.

## Step 9 — Prompt visual verification

Once all available servers are running, display a summary of URLs and prompt the user, **ordered by port (3001 → 3004)**. All four apps expose the per-component page at the same path — `<base-url>/components/<component>` — so build each URL uniformly (vanilla is identical, only with a `.html` suffix). The default ports are below; if an app fell back to a different port (Step 8), substitute the actual detected port:

> "All dev servers are running. Please verify the `<prop-name>` prop on `<component-name>` looks correct in each app:
>
> - Vanilla: `http://localhost:3001/components/<component>.html`
> - Nuxt: `http://localhost:3002/components/<component>`
> - Next.js v14: `http://localhost:3003/components/<component>`
> - Next.js v15: `http://localhost:3004/components/<component>`
>
> Take your time reviewing in the browser. When you're finished, just let me know — I'll then check with you before reverting anything or stopping the servers."

Wait for the user's reply before proceeding. Do not clean up until explicitly told to.

## Step 10 — Tear down (revert edits and stop servers)

When the user signals they've finished verifying (e.g. "done", "looks good"), do **not** tear down yet — teardown reverts their edits and kills the servers, so first ask for explicit confirmation:
> "Shall I revert the scratch edits and stop all dev servers now? (yes / keep running)"

Only proceed once the user confirms. If they say **keep** (or decline), leave everything running (see below).

On confirmation, do the full teardown **as a single action with no intermediate narration** — revert and stop together, then give one report. Do not announce "reverting edits…" and "stopping servers…" as separate messages, and do not ask anything further mid-teardown.

Do both in one pass:
- **Revert the changed files** — a targeted revert of only the files modified in Step 7 **plus `yarn.lock`** (changed by the Step 2 install), not a blanket `git checkout .`, so any other in-progress changes in Aperture are preserved:
  ```
  git -C <aperture-path> checkout -- <file1> <file2> ... yarn.lock
  ```
- **Stop the dev servers** — stop the **background task/job started in Step 8** (kill its whole process tree), then **verify by port** (not by process name) that they are gone:
  ```
  lsof -nP -iTCP:3001 -iTCP:3002 -iTCP:3003 -iTCP:3004 -sTCP:LISTEN
  ```
  If any Aperture server is still listening, kill it **by port**: `lsof -ti:<port> | xargs kill`.

  **Do not stop servers with name-pattern `pkill`** (e.g. `pkill -f "next dev"`) — once running these processes are named `node` / `next-server`, so the pattern matches nothing and leaves orphans that squat the ports and break the next run. Stop the task tree and confirm by port instead, leaving untouched any process clearly unrelated to Aperture. See `references/gotchas.md`.

Only after both are done, give a single report:
> "Teardown complete — scratch edits reverted (working tree clean) and all dev servers stopped (ports 3001–3004 free). The Aperture branch remains intact; nothing was committed."

If the user says **keep**, leave both the edits and the servers running, and remind them how to tear down later:
> "No problem — edits and servers left running. When you're ready to tear down:
> - Revert changes: `git -C <aperture-path> checkout -- <file1> <file2> ... yarn.lock`
> - Stop servers: stop the `yarn dev` process (Ctrl-C in its terminal, or kill the background task)."

## Error handling

- If a file uses the component but the insertion point is unclear: show relevant lines and ask the user where to insert.
- If a dev server fails to start: show the error and suggest `yarn install` in that app directory.
- If the prop name is not found in `defs.ts`: stop and list all defined props.
- If the Aperture directory does not exist: stop and give the clone command.
- If `/test-aperture` has not been run: stop and instruct the user to post the comment on the PIE PR.

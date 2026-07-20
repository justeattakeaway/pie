# aperture-props — gotchas and rationale

Deep background for decisions in `SKILL.md`. Load this only when a step needs the "why" (e.g. an install behaves unexpectedly, a port is stuck, or a grep hangs). The step bodies in `SKILL.md` carry the command and a one-line reason; the full reasoning lives here.

## Step 4 — grep excludes are required, not optional

`--exclude-dir` is mandatory. `--include` only filters **filenames** — it does not stop `grep -r` from descending into directories. Without the excludes, grep walks every `node_modules` across all 4 apps plus the root, and the `dist/` / `.next/` / `.nuxt/` build output. Including `*.js` makes this catastrophic: grep then reads every `.js` inside those `node_modules` too, taking many minutes. With the excludes it returns in well under a second.

If [ripgrep](https://github.com/BurntSushi/ripgrep) (`rg`) is available, `rg -l "<component-name>" <aperture-path>` is simpler and skips gitignored dirs automatically.

**Why `*.js` must be included:** in the vanilla app the component markup lives in `js/<component>.js` (injected as a template string), not in the `components/<component>.html` shell that loads it. Without `*.js` the real vanilla page is never matched.

## Step 8 — dependency install (Aperture is Yarn Classic, v1.x)

Verify with `yarn --version` before reasoning about flags.

**Why run `yarn install` unconditionally** (do not skip it just because `node_modules` exists): `/test-aperture` pins the apps to a fresh PIE snapshot version (published to npm) on each run, updating `package.json`. A pre-existing `node_modules` from an earlier install or a different branch can still hold an *older* snapshot that predates the prop under test — so the prop appears unapplied. A plain `yarn install` re-resolves `node_modules` to satisfy the branch's `package.json`, pulling the correct snapshot. If it is already correct, the install is a fast near-no-op.

**Why plain `yarn install` and not a frozen/immutable flag:**
- `--immutable` is a **Yarn Berry** flag. Under Yarn Classic it is silently *ignored*, and the install mutates `yarn.lock` anyway — a false sense of safety. Do not use it.
- `--frozen-lockfile` (the Classic "don't touch the lockfile" flag) *errors out* on these Aperture branches, because the committed `yarn.lock` frequently needs updating relative to the freshly-pinned snapshot (`error: Your lockfile needs to be updated, but yarn was run with --frozen-lockfile`). That would halt the skill on a benign condition.

**Why `git checkout -- yarn.lock` afterwards:** plain `yarn install` rewrites `yarn.lock`. This skill never commits, so discard that churn immediately to keep the branch pristine. `node_modules` (what the dev servers actually read) stays correctly resolved; only the incidental lockfile diff is thrown away.

## Step 8 — ports and `EADDRINUSE`

The apps use fixed ports: vanilla `vite --port 3001`, Nuxt `nuxt dev` → 3002, Next.js v14 `next dev -p 3003`, v15 `-p 3004`.

`next dev` does **not** fall back — if its port is taken it **crashes with `EADDRINUSE`**. Vite/Nuxt fall back to the next free port instead. A taken port may be a leftover Aperture dev server (from a previous run or started manually) or an unrelated program — hence the pre-flight `lsof` check before starting.

**Why Next.js crashes but can still run elsewhere:** the two Next.js dev scripts pin an explicit port (`next dev -p 3003` / `-p 3004`). Given an explicit `-p`, Next.js tries exactly that port and errors if it's taken — it does not auto-increment the way Vite/Nuxt do. It is perfectly capable of running on another port; it just has to be *told* one. So when its default port is held by an unrelated process, start that single app with an overridden `-p <free-port>` (e.g. `cd <app-dir> && yarn exec next dev -p <free-port>`) rather than killing the occupant.

**Kill vs. route around:** only kill a process holding a port when it is clearly an **Aperture** dev server (path under `pie-aperture`) — regardless of whether this skill started it last time or the user ran it manually. For anything unrelated, never kill — let Vite/Nuxt fall back automatically, and start Next.js on a chosen free port. Never surface the word "orphan" to the user; explain in plain terms ("port already in use / a leftover Aperture server").

**Handling a taken port — procedure.** After the pre-flight `lsof`, for any occupied port inspect the process (`ps -o pid,etime,command -p <pid>`) and decide:

- *A leftover Aperture dev server* (path under `pie-aperture`) — safe to remove. Kill it by PID (`kill <pid>`) and tell the user plainly:
  > "Port 3001 was still held by a leftover Aperture dev server — I've cleaned it up."
- *Unrelated process* — do **not** kill it; route around it:
  - **Vanilla (Vite) / Nuxt** fall back to the next free port automatically. Report the real URL once it comes up:
    > "Port 3001 is already in use by another program, so the vanilla app will start on a different port — I'll share the actual URL once it's ready."
  - **Next.js** crashes with `EADDRINUSE` rather than falling back. Pick a verified-free port (probe upward from the default, confirmed with `lsof`) and start that one app on it: `cd <app-dir> && yarn exec next dev -p <free-port>`. State the port (you know it because you chose it):
    > "Port 3003 is already in use by another program, so I've started the Next.js v14 app on port `<free-port>` instead — its URL is below."

**Why grep the dev-server log instead of reading it whole:** the log is mostly deprecation / browserslist / sass build warnings. Reading the whole file into context wastes ~1–3k tokens each time. Extract only the useful lines:
```
grep -aE "Local:|Ready|ready in|EADDRINUSE|Failed to start" <log-file>
```

## Step 10 — stop servers by port, never by name pattern

**Do not** stop servers with a name-pattern `pkill` (e.g. `pkill -f "next dev"` / `nuxt dev` / `vite`). Once running, these processes are named `node` / `next-server`, so the patterns match nothing, silently leave the servers alive, and those orphans then squat the ports and break the *next* run. This is a real failure that has happened.

Instead, stop the background task tree started in Step 8, then **verify by port** that the servers are gone:
```
lsof -nP -iTCP:3001 -iTCP:3002 -iTCP:3003 -iTCP:3004 -sTCP:LISTEN
```
If any Aperture server is still listening, kill it **by port**: `lsof -ti:<port> | xargs kill`. Leave untouched any process clearly unrelated to Aperture (e.g. a days-old server on the same port from other work).

---
name: sync-code-connect-icons
description: Use when new icons have been added to pie-icons and need connecting to their Figma counterparts in the Code Connect config (configs/pie-code-connect/icons-standard.figma.batch.json), or when checking that the existing icon mappings are still in sync.
---

You are helping the user sync newly added PIE icons into the Figma Code Connect batch config.

## Context

- Config file: `configs/pie-code-connect/icons-standard.figma.batch.json`
- Icon assets: `packages/tools/pie-icons/src/assets/` (SVG files)
- Figma file key: `k7gPJ4MZRUj4nlZK2hL0Op`
- Figma icons page node: `1:52` (the "All" page)

## Prerequisites

Verify the CLI tools are on your `PATH`:

```bash
git --version && node --version
```

The bundled scripts are plain Node with no dependencies, so nothing needs installing.

You also need the **Figma MCP server**. Two flavours exist with different capabilities - work out which one you have before Step 2, since it changes how you look up node IDs.

This skill covers the **icon** configs only. For component Code Connect templates, use the `add-code-connect-template` skill instead.

Run every command below from the repository root. The bundled scripts work out the repository location themselves, so they behave the same from anywhere.

## Step 1 - Find the new icons and check what is already mapped

Run the bundled script:

```bash
node .agents/skills/sync-code-connect-icons/scripts/check-icons-sync.mjs
```

It finds the most recent `feat(pie-icons): Update icons from pie-iconography` commit on `origin/main`, lists the standard icons it adds, and reports which of them are still missing from the config.

- `--sha 69ed425` inspects one specific commit instead
- `--all-commits` audits every icon-update commit in the history

If it cannot find a matching commit it exits non-zero with an error - ask the user for the SHA and pass it with `--sha`.

It already accounts for two things that are easy to get wrong by hand:

- **Punctuation in names.** The config drops the hyphen before digits, so the asset `cc-2.svg` is `icon-cc2`. Comparing raw strings reports gaps that do not exist.
- **Icon families with their own configs.** SVGs under `assets/payment/`, `flag/`, `social/` and `logo/` are mapped by the `icons-payment`, `icons-flags` and `icons-social` configs respectively. They are not missing from the standard config, and adding them to it would be wrong.

### If nothing is missing, stop here

This is a common and perfectly good outcome. A separate Code Connect PR usually syncs the icons shortly after the icons PR lands, so by the time you are asked, the work may already be done. Tell the user which commit you checked and which icons were already mapped, then stop.

Never add an entry whose `baseName` already exists - the config is a plain JSON array and a duplicate is silent corruption.

Otherwise, show the missing icons and confirm before continuing:

> Found commit `69ed4254b` - _feat(pie-icons): Update icons from pie-iconography_ (2026-08-24)
>
> These icons still need Code Connect entries:
> - `icon-binoculars`
> - `icon-compass`
>
> Shall I proceed?

## Step 2 - Locate the node ID for each icon

### Which Figma MCP server do you have?

| | Remote / hosted | Local / desktop |
|---|---|---|
| Tool names look like | `mcp__plugin_figma_figma__get_metadata` | `Figma_Desktop.get_metadata`, `mcp__figma-desktop__get_metadata` |
| Identifies the file by | an explicit `fileKey` argument | whatever the desktop app currently has open |
| Needs Figma running | no | yes - desktop app, correct document, **that tab active** |
| Can walk a whole page | yes | no - responses are truncated to a few KB |

**If you have the remote server**, ask for the page and walk the tree:

```
get_metadata({ fileKey: "k7gPJ4MZRUj4nlZK2hL0Op", nodeId: "1:52" })
```

The result is large and usually saved to a file. To pull node IDs out of it:

```bash
node .agents/skills/sync-code-connect-icons/scripts/find-icon-nodes.mjs <metadata-file> binoculars compass "map search"
```

It handles both plain XML and XML wrapped in a JSON payload, and matches only the inner frames.

**If you have the local desktop server**, the `All` page is far too big to enumerate - it holds roughly 420 icons and a single response carries only the first few category frames. Node IDs outside that window will not resolve at all, including perfectly valid ones, so a failed lookup here proves nothing. Do not try to dump the page; narrow the scope instead, in this order:

1. **Ask the user to paste the Figma links** for the new icons (right-click the frame → Copy link). Fastest and most reliable.
2. **Ask the user to select the frames** on the canvas, then call `get_metadata` with no `nodeId` - it falls back to the current selection.
3. **Ask the user to scroll the canvas** so the relevant category is on screen, then query the page again.

### Which node ID to use

Whichever route you took, take the **inner** frame named `"Category / Icon Name"` - not the outer wrapper frame, and not the `Size=...` symbol instances inside it:

```xml
<frame id="28746:964" name="Location / Binoculars">
  <symbol id="28746:965" name="Size=Large, Fill=False" />
  <symbol id="28746:966" name="Size=Small, Fill=False" />
</frame>
```

The category in that name also tells you where the entry belongs in Step 4.

## Step 3 - Verify each node ID before writing it

Resolve every node ID you collected and check the frame name that comes back:

```
get_metadata({ nodeId: "28746:964" })   →   <frame id="28746:964" name="Location / Binoculars">
```

The name is your proof, not the ID. A wrong ID that happens to exist in the file looks entirely plausible in the config, and only surfaces much later as a broken mapping, so the extra call is worth it. If a name does not match the icon, re-check the link the user gave you.

On the local desktop server a lookup can also fail simply because the node is not loaded - that is inconclusive rather than wrong, so ask the user to confirm the link rather than assuming the ID is bad.

## Step 4 - Determine insertion position

The config is ordered by category (arrows, location, faces/people, ...), not alphabetically. Find the existing icons in the new icon's category and insert among them.

Representative existing entries per category:

- **Location**: `icon-geolocation`, `icon-map`, `icon-map-legend`, `icon-route-pin`
- **People/Faces**: `icon-face-excited`, `icon-face-happy`, `icon-face-neutral`, `icon-face-unhappy`
- **Arrows**: `icon-arrow-*`, `icon-curved-arrow-*`
- **Benefits**: `icon-gift`, `icon-offer`, `icon-voucher`

## Step 5 - Add the entries

For each new icon, add:

```json
{
  "baseName": "icon-{name}",
  "source": "https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-icons/src/index.js",
  "url": "https://www.figma.com/design/k7gPJ4MZRUj4nlZK2hL0Op/-Core--Icons--PIE-3-?node-id={X}-{Y}"
}
```

`{X}-{Y}` is the inner frame node ID with `:` replaced by `-` (`28746:964` → `28746-964`).

## Step 6 - Verify

Confirm the JSON still parses and nothing was duplicated:

```bash
node -e "const {components}=JSON.parse(require('fs').readFileSync('configs/pie-code-connect/icons-standard.figma.batch.json','utf8')); const names=components.map((c)=>c.baseName); const dupes=[...new Set(names.filter((n,i)=>names.indexOf(n)!==i))]; console.log('entries:', names.length); console.log(dupes.length ? 'DUPLICATES: '+dupes.join(', ') : 'no duplicates');"
```

It prints the entry count, then either the duplicated `baseName`s or `no duplicates`.

Then re-run the sync check - it should now report nothing missing, which confirms the entries you added are exactly the ones it expected:

```bash
node .agents/skills/sync-code-connect-icons/scripts/check-icons-sync.mjs
```

Report back to the user which icons were added and their Figma node IDs, then suggest the next steps:

> **Next steps:**
> 1. Publish the updated config to Figma Code Connect:
>    ```bash
>    yarn publish-icons:all --filter=@justeattakeaway/pie-code-connect
>    ```
> 2. Commit the changes.

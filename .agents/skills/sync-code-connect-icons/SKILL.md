---
name: sync-code-connect-icons
description: Use when new icons have been added to pie-icons and need to be connected to their Figma counterparts in the Code Connect config (configs/pie-code-connect/icons-standard.figma.batch.json).
---

You are helping the user sync newly added PIE icons into the Figma Code Connect batch config.

## Context

- Config file: `configs/pie-code-connect/icons-standard.figma.batch.json`
- Icon assets: `packages/tools/pie-icons/src/assets/` (SVG files)
- Figma file key: `k7gPJ4MZRUj4nlZK2hL0Op`
- Figma icons page node: `1:52` (the "All" page)

## Prerequisites

You must have access to the **Figma MCP server** — Step 2 relies on the `mcp__plugin_figma_figma__get_metadata` tool to look up icon node IDs. If the Figma MCP tools are not available, stop and ask the user to connect the Figma MCP server before continuing.

The following tools must also be available on your `PATH`. Verify before starting:

```bash
git --version && python3 --version && jq --version
```

## Step 1 — Find the commit and extract new icons

Run a **single command** that resolves the SHA, shows the commit details, and lists the new standard icons all at once.

**If the user passed a SHA** as an argument (e.g. `/sync-code-connect-icons 69ed425`):

```bash
SHA=<SHA>
echo "=== Commit ===" && git show $SHA --no-patch --format="%H %ai %s" && echo && echo "=== New standard icons ===" && git show $SHA --name-only --diff-filter=A | grep 'packages/tools/pie-icons/src/assets/.*\.svg' | grep -v '\-large\|filled' | sed 's|.*/assets/||; s|\.svg||; s|^|icon-|'
```

**If no SHA was provided**, auto-detect from main in the same single command:

```bash
SHA=$(git log origin/main --format="%H" --grep="^feat(pie-icons): Update icons from pie-iconography" -1) && echo "=== Commit ===" && git show $SHA --no-patch --format="%H %ai %s" && echo && echo "=== New standard icons ===" && git show $SHA --name-only --diff-filter=A | grep 'packages/tools/pie-icons/src/assets/.*\.svg' | grep -v '\-large\|filled' | sed 's|.*/assets/||; s|\.svg||; s|^|icon-|'
```

If no matching commit is found (empty output), ask the user to provide the SHA manually.

If there are no new standard icons in the output, stop and inform the user.

Present the results to the user as a bullet list and ask them to confirm before proceeding. Example:

> Found commit `69ed4254b` — _feat(pie-icons): Update icons from pie-iconography_ (2026-08-24)
>
> The following icons will be added to the Code Connect config:
> - `icon-binoculars`
> - `icon-compass`
> - `icon-face-hate`
> - `icon-map-search`
>
> Shall I proceed?

## Step 2 — Get Figma metadata

Call `mcp__plugin_figma_figma__get_metadata` with:
- `fileKey`: `k7gPJ4MZRUj4nlZK2hL0Op`
- `nodeId`: `1:52`

The result will be large and saved to a file. Use `jq` or Python to search it.

## Step 3 — Find node IDs for each new icon

Parse the metadata XML to find the inner `"Category / Icon Name"` frame node IDs. The pattern in the XML is:

```xml
<frame id="28746:964" name="Location / Binoculars" ...>
  <symbol id="..." name="Size=Large" .../>
  <symbol id="..." name="Size=Small" .../>
</frame>
```

The node ID to use in the config URL is the **inner frame** (the one named `"Category / Icon Name"`), NOT the outer wrapper frame or the symbol instances.

Use this Python snippet on the saved metadata file:

```python
import json, re, sys

result_file = sys.argv[1]
targets = sys.argv[2:]  # e.g. ['binoculars', 'compass']

with open(result_file) as f:
    data = json.load(f)

# The XML is usually in data[1]['text']
text = next((item['text'] for item in data if len(item.get('text','')) > 1000), '')

for target in targets:
    idx = text.lower().find(target)
    if idx != -1:
        context = text[max(0, idx-500):idx+500]
        print(f'=== {target} ===')
        print(context)
        print()
```

Then locate the inner frame IDs by looking for `name="... / {Icon Name}"` patterns near each target.

## Step 4 — Determine insertion position

Look at the config to find where similar category icons are grouped. The config is ordered by category (arrows, location, face/people, etc.), not alphabetically.

- Check which category each new icon belongs to (the Figma frame name `"Category / Icon Name"` tells you).
- Find the existing icons in that category in the config.
- Insert the new entry at a logical position within that group.

Common categories and their representative existing entries:
- **Location**: `icon-geolocation`, `icon-map`, `icon-map-legend`, `icon-route-pin`
- **People/Faces**: `icon-face-excited`, `icon-face-happy`, `icon-face-neutral`, `icon-face-unhappy`
- **Arrows**: `icon-arrow-*`, `icon-curved-arrow-*`
- **Benefits**: `icon-gift`, `icon-offer`, `icon-voucher`

## Step 5 — Add entries to the config

For each new icon, add an entry in this format:

```json
{
  "baseName": "icon-{name}",
  "source": "https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-icons/src/index.js",
  "url": "https://www.figma.com/design/k7gPJ4MZRUj4nlZK2hL0Op/-Core--Icons--PIE-3-?node-id={X}-{Y}"
}
```

Where `{X}-{Y}` is the inner frame node ID with `:` replaced by `-` (e.g. `28746:964` → `28746-964`).

## Step 6 — Verify

Run the following to confirm the JSON is valid and all new icons are present:

```js
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('configs/pie-code-connect/icons-standard.figma.batch.json', 'utf8'));
console.log('Total:', config.components.length);
```

Report back to the user which icons were added and their Figma node IDs, then suggest the next steps:

> **Next steps:**
> 1. Publish the updated config to Figma Code Connect:
>    ```bash
>    yarn publish-icons:all --filter=@justeattakeaway/pie-code-connect
>    ```
> 2. Commit the changes.

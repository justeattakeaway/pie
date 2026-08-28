---
name: add-code-connect-template
description: Use when adding a new Figma Code Connect template for a PIE design system component. Given a component name and a Figma component set URL, reads the component source, asks about Figma prop mappings, generates the batch template file, and registers it in the batch config.
---

You are helping the user add a new Figma Code Connect template for a PIE design system component.

## Context

Key paths in the repo:
- Template files: `configs/pie-code-connect/{component-name}.figma.batch.js`
- Batch config: `configs/pie-code-connect/components.figma.batch.json`
- Shared utilities: `configs/pie-code-connect/utils/` (`get-instance-prop.js`, `render-prop.js`, `get-import-statement.js`, `get-instance-template.js`, `get-icon-snippet.js`, `get-slot-content.js`)

> **`[𝐓]` prefix** — In Figma, text layer properties are prefixed with `[𝐓]` (visible in the Figma property panel). Always use this prefix when reading text content with `getString`.

## Prerequisites

You must have access to the **Figma MCP server**. If the Figma MCP tools are not available, you will need to ask the user to provide all Figma property names explicitly.

The following tool must also be available on your `PATH`. Verify before starting:

```bash
node --version
```

## Step 1 — Gather required inputs

If not provided in the arguments, use `AskUserQuestion` to collect:
- **Component name** — kebab-case, e.g. `pie-button`
- **Figma component set URL** — the URL of the Figma component set node

Once you have both, continue.

## Step 2 — Understand the component

Find the component folder at `packages/components/{component-name}/`. Read the following files (in priority order):
1. `src/defs.ts` — props, types, enums, default values
2. `src/index.ts` — component implementation (slots, structure)

Extract:
- All **props** with their types and default values
- All **slots** the component accepts — slot names are documented via `@slot` JSDoc tags near the top of `src/index.ts`. A tag without a name (e.g. `@slot - Default slot for content`) is the default slot; tags with a name (e.g. `@slot icon - Optional leading icon`) are named slots.
- Whether any props accept **enum values** (lists of string constants)
- Whether any **icon slots** exist (props/slots named like `icon`, `leadingIcon`, `trailingIcon`)

## Step 3 — Infer or ask for Figma prop mapping details

Use `mcp__plugin_figma_figma__get_context_for_code_connect` to look up the exact Figma property names from the component set URL, minimizing the need for the user to supply them manually, unless any ambiguity is found.

Use `AskUserQuestion` to gather the information needed for the prop mappings. Ask about:
- Which Figma layer properties correspond to which component props
- The exact Figma property names (e.g. `"State"`, `"Variant"`, `"[𝐓] Label"`, `"Leading icon"`)
- For enum props: how Figma values map to component values
- Whether any props should be read from **nested instances** (use path array syntax)
- Whether any **icon instance swaps** are used (and which Figma property holds the icon)
- Whether any **slots** are mapped from Figma connected instances

You can ask multiple questions in a single `AskUserQuestion` call. Keep questions specific and reference the props found in Step 2.

## Step 4 — Generate the template file

Create a file at `configs/pie-code-connect/{component-name}.figma.batch.js`.

### Template structure

```js
const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');
// Uncomment only if the component uses a form label nested instance:
// const createGetInstanceTemplate = require('./utils/get-instance-template.js');
// Uncomment only if the component uses icon slots:
// const getIconSnippet = require('./utils/get-icon-snippet.js');

const getInstanceProp = createGetInstanceProp(figma);
// const getInstanceTemplate = createGetInstanceTemplate(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map figma props
// ... (prop mappings here)

const props = [
    // renderProp calls here
].filter(Boolean).join('\n    ');

// Define template
const template = figma.code`<${selectedComponentName}
    ${props}>
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
```

### Available `getInstanceProp` method signatures

| Signature | Use for |
|---|---|
| `getInstanceProp('getPropertyValue', 'PropName')` | Raw string value |
| `getInstanceProp('getString', '[𝐓] PropName')` | Text layer content |
| `getInstanceProp('getBoolean', 'PropName')` | Boolean toggle |
| `getInstanceProp('getEnum', 'PropName', { 'FigmaValue': 'componentValue', ... })` | Enum mapping |
| `getInstanceProp('getInstanceSwap', 'PropName')` | Instance swap (icons) |
| `getInstanceProp(['NestedInstance'], 'method', 'PropName', ...)` | Read from a nested instance by path |

### State-derived booleans

```js
const state = getInstanceProp('getPropertyValue', 'State');
const isDisabled = state === 'Disabled';
const isReadonly = state === 'Read-Only';
```

### `renderProp` rules

- `renderProp('propName', value, defaultValue)` — omits the prop when value equals the default
- `renderProp('propName', value)` — always includes the prop
- For object props: `renderProp('leadingAction', { text: labelText })`
- Booleans: renders just `propName` when true, empty string when false
- Always filter the props array: `.filter(Boolean).join('\n    ')`

### Icon handling

```js
const getIconSnippet = require('./utils/get-icon-snippet.js');

// Icon without a slot attribute:
const iconInstance = getInstanceProp('getInstanceSwap', 'Replace icon');
const iconSnippet = iconInstance?.executeTemplate().example;

// Icon that needs a slot attribute:
const iconInstance = getInstanceProp('getInstanceSwap', 'Replace leading icon');
const iconSnippet = getIconSnippet(iconInstance, (code) => code.replace('></', ' slot="icon"></'));
```

### Form label

When the Figma component has a nested `Form label` instance:

```js
const createGetInstanceTemplate = require('./utils/get-instance-template.js');
const getInstanceTemplate = createGetInstanceTemplate(figma);

const formLabelSnippet = getInstanceTemplate(['Form label']);

const template = figma.code`${formLabelSnippet || ''}
<${selectedComponentName}
    ${formLabelSnippet ? 'id="the-input-id" aria-labelledby="the-label-id"' : ''}
    ${props}>
</${selectedComponentName}>`;
```

### Content type (value vs placeholder)

When a `Content` property controls whether a value or placeholder is shown:

```js
const contentType = getInstanceProp('getString', 'Content');
const value = contentType === 'With value' ? getInstanceProp('getString', '[𝐓] String') : '';
const placeholder = contentType === 'Placeholder' ? getInstanceProp('getString', '[𝐓] Placeholder') : '';
```

Check the actual Figma value names (`'With value'`, `'Filled'`, etc.) with the user — they vary between components.

### Assistive text (nested instance) and status

```js
const hasAssistiveText = getInstanceProp('getBoolean', 'Assistive text');
const assistiveText = (hasAssistiveText && getInstanceProp(['Assistive text'], 'getString', '[𝐓] Assistive text')) || '';
```

In some cases, the only way to infer the component state is by reading the Assistive text "Validation" prop:

```js
const status = hasAssistiveText ? getInstanceProp(['Assistive text'], 'getEnum', 'Validation', {
    Success: 'success',
    Error: 'error',
    None: 'default',
}) : 'default';
```

### Slot content

Use `get-slot-content.js` when a component has a Figma slot whose connected instances should render as child elements in the code snippet.

**Finding the Figma slot name:** The Figma slot name is not always the same as the component's `@slot` name. Confirm the exact Figma slot name from the component set URL using `mcp__plugin_figma_figma__get_context_for_code_connect`, or ask the user.

```js
const createGetSlotContent = require('./utils/get-slot-content.js');

const getSlotContent = createGetSlotContent(figma);

// Retrieve rendered examples for all connected instances in the named Figma slot:
const slotContent = getSlotContent('Card content');
```

`getSlotContent` returns a flat array of rendered template strings, or an empty string when no instances are connected.

**Default slot** — render the content directly as inner children:

```js
const template = figma.code`<${selectedComponentName}
    ${props}>
    ${slotContent}
</${selectedComponentName}>`;
```

**Named slot** — wrap each item with the slot attribute. Use the component's `@slot` name (from `src/index.ts`) as the `slot` attribute value:

```js
const footerSlotContent = getSlotContent('Footer content');

const template = figma.code`<${selectedComponentName}
    ${props}>
    ${footerSlotContent ? `<div slot="footer">${footerSlotContent}</div>` : ''}
</${selectedComponentName}>`;
```

## Step 5 — Update `components.figma.batch.json`

Read the current `configs/pie-code-connect/components.figma.batch.json` and append a new entry.

Derive `componentNameReact` by converting the kebab-case name to PascalCase (e.g. `pie-button` → `PieButton`).

```json
{
  "templateFile": "dist/{component-name}.figma.batch.js",
  "components": [
    {
      "componentName": "{component-name}",
      "componentNameReact": "{ComponentNameReact}",
      "source": "https://github.com/justeattakeaway/pie/tree/main/packages/components/{component-name}/src/index.ts",
      "url": "{figma-url}"
    }
  ]
}
```

If the Figma URL points to a component set with multiple variants that require different template data, add multiple entries in the `components` array — one per variant URL — each with the appropriate extra fields (see `pie-modal` in the config for an example).

## Step 6 — Verification

- Verify the JSON is still valid:
  ```bash
  node -e "JSON.parse(require('fs').readFileSync('configs/pie-code-connect/components.figma.batch.json', 'utf8')); console.log('JSON valid')"
  ```

## Step 7 — Confirm and summarise

Report back:
- The file created
- The entry added to `components.figma.batch.json`
- Any assumptions made about Figma prop mappings
- Any TODOs left for the user (e.g. exact Figma property names that need confirming)
- Suggest reading the created file code and running `yarn publish-components:web` to test the new mapping
- Suggest reviewing the new mapping the Figma app
- Suggest publishing the mappings after reviewing the mapping behaviour on Figma with `yarn publish-components:all`

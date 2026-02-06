# PIE MCP Server - How It Works

This document provides a deep dive into the architecture and implementation of the PIE MCP (Model Context Protocol) Server, which exposes the PIE Design System documentation to AI assistants.

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Data Generation Pipeline](#data-generation-pipeline)
4. [MCP Server Implementation](#mcp-server-implementation)
5. [Available Tools](#available-tools)
6. [Available Resources](#available-resources)
7. [Configuration](#configuration)
8. [Build Process](#build-process)

---

## Overview

The PIE MCP Server is a [Model Context Protocol](https://modelcontextprotocol.io/) server that enables AI assistants (like Claude, Cursor, etc.) to access accurate, up-to-date documentation about PIE components and icons.

### Why MCP?

Instead of relying on potentially outdated training data, AI assistants can query this server in real-time for:

- Component APIs (props, slots, events, methods)
- Property defaults and valid values
- Real code examples from Storybook stories
- Framework-specific examples (Next.js, Nuxt, Vanilla HTML)
- Icon metadata and usage

### Package Info

| Property | Value |
|----------|-------|
| Package Name | `@justeattakeaway/pie-mcp-server` |
| Version | `0.7.42` |
| License | Apache-2.0 |
| Runtime | Node.js >= 18.0.0 |

### Dependencies

| Package | Purpose |
|---------|---------|
| `@modelcontextprotocol/sdk` | Official MCP SDK (`McpServer` high-level API) |
| `zod` | Input schema validation for tool parameters |
| `typescript` | TypeScript compiler (dev) |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        PIE Monorepo                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │  pie-button/    │  │  pie-modal/     │  │  pie-icons/     │ │
│  │  custom-        │  │  custom-        │  │  iconData.json  │ │
│  │  elements.json  │  │  elements.json  │  │                 │ │
│  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘ │
│           │                    │                    │           │
│  ┌────────┴────────┐  ┌───────┴───────┐            │           │
│  │  Storybook      │  │  pie-aperture │            │           │
│  │  stories/*.ts   │  │  (GitHub)     │            │           │
│  └────────┬────────┘  └───────┬───────┘            │           │
│           │                    │                    │           │
│           └────────────────────┼────────────────────┘           │
│                                │                                │
│                                ▼                                │
│                    ┌───────────────────────┐                    │
│                    │   generate-data.js    │                    │
│                    │   + lib/              │                    │
│                    │     storybook-parser  │                    │
│                    │     template-cleaner  │                    │
│                    │     aperture-fetcher  │                    │
│                    └───────────┬───────────┘                    │
│                                │                                │
│                                ▼                                │
│                    ┌───────────────────────┐                    │
│                    │  generated/           │                    │
│                    │  pie-data.json        │                    │
│                    │  (~260 KB)            │                    │
│                    └───────────┬───────────┘                    │
│                                │                                │
│                                ▼                                │
│                    ┌───────────────────────┐                    │
│                    │   src/index.ts        │                    │
│                    │   (MCP Server)        │                    │
│                    └───────────────────────┘                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                                │
                                │ stdio transport
                                ▼
                    ┌───────────────────────┐
                    │     AI Assistant      │
                    │  (Claude, Cursor,     │
                    │   Continue, etc.)     │
                    └───────────────────────┘
```

---

## Data Generation Pipeline

The data generation script (`scripts/generate-data.js`) runs at build time to aggregate data from across the monorepo and external sources.

### Data Sources

| Source | Location | Data Extracted |
|--------|----------|----------------|
| **Component CEM** | `packages/components/*/custom-elements.json` | Props (with descriptions, defaults, reflects, readonly), slots, events, methods, mixins |
| **Package Metadata** | `packages/components/*/package.json` | Name, version, status, description, replaces |
| **Valid Values** | CEM defs modules | Typed const arrays (e.g., sizes, variants) |
| **Default Props** | CEM defs module `defaultProps` | Default values parsed from object literals |
| **Icons** | `packages/tools/pie-icons/dist/iconData.json` | Icon names, display names, categories |
| **Storybook Stories** | `apps/pie-storybook/stories/*.stories.ts` | Basic templates, patterns, variants, imports |
| **Framework Examples** | `pie-aperture` GitHub repo (fetched at build time) | Next.js 14/15, Nuxt, Vanilla HTML source code |

### Component Aggregation

For each component directory (excluding `pie-webc`, `pie-webc-core`, `pie-webc-testing`):

```javascript
{
  name: "@justeattakeaway/pie-button",
  version: "1.10.2",
  description: "PIE design system button...",
  status: "stable",                          // From pieMetadata.componentStatus
  replaces: { snacks: ["Button"] },          // Legacy component mapping
  tagName: "pie-button",
  className: "PieButton",
  slots: [{ name: "", description: "..." }],
  properties: [{
    name: "size",
    type: "string",
    description: "The size of the button",
    attribute: "size",
    default: "medium",                       // From CEM or defaultProps
    reflects: false,
    readonly: false,
  }],
  events: [{
    name: "pie-button-click",
    type: "CustomEvent",
    description: "Fired when the button is clicked",
  }],
  methods: [{
    name: "focus",
    description: "Focus the button",
    parameters: [],
    returnType: "void",
  }],
  validValues: { sizes: ["small", "medium", "large"] },
  mixins: [{ name: "FormControlMixin", package: "..." }],
  installation: "npm install @justeattakeaway/pie-button",
  examples: { basic: "...", variants: [...], patterns: [...], imports: [...] },
  frameworkExamples: {
    repository: "https://github.com/justeattakeaway/pie-aperture",
    nextjsV14: { available: true, code: "...", sourceUrl: "...", liveUrl: "..." },
    nextjsV15: { available: true, code: "...", sourceUrl: "...", liveUrl: "..." },
    nuxt: { available: true, code: "...", sourceUrl: "...", liveUrl: "..." },
    vanilla: { available: true, code: "...", sourceUrl: "...", liveUrl: "..." },
  }
}
```

### Property Extraction

Properties are extracted from two CEM sources:

1. **Class members** (`declaration.members` where `kind === 'field'` and `privacy === 'public'`) — provides name, type, description, attribute, reflects, readonly.
2. **`defaultProps` variable** in the defs module — parsed from the object literal string to fill in missing default values.

### Event Extraction

Events come from `declaration.events[]` in the CEM class declaration. Each event includes a name, type (defaults to `CustomEvent`), and description.

### Method Extraction

Public methods are extracted from `declaration.members` where `kind === 'method'` and `privacy !== 'private'`. Methods starting with `render` are excluded (internal Lit helpers). Each method includes parameters and return type.

### Storybook Example Extraction

The `extractStorybookExamples()` function uses `scripts/lib/storybook-parser.js` which does **AST-based parsing** via the TypeScript Compiler API:

1. **Imports** — all `@justeattakeaway/pie-*` imports
2. **Basic template** — the main `Template` or `BaseStoryTemplate` function's `html\`...\`` content
3. **Patterns** — named template functions (e.g., `FormTemplate`, `AnchorTemplate`)
4. **Variants** — exported story constants with their prop overrides

The `scripts/lib/template-cleaner.js` then cleans Lit-specific syntax:

| Lit Syntax | Cleaned To |
|-----------|------------|
| `${ifDefined(x)}` | `${x}` |
| `${nothing}` | _(removed)_ |
| `?disabled="${x}"` | `disabled` |
| `.prop="${x}"` | `prop="${x}"` |
| `@click="${fn}"` | `@click="handleEvent"` |
| `${sanitizeAndRenderHTML(slot)}` | `<!-- slot content -->` |

If a template is still too complex after cleaning (>5 interpolations or function calls), the cleaner extracts just the main `<pie-*>` component tag as a fallback.

### Framework Example Fetching

The `scripts/lib/aperture-fetcher.js` fetches source code from `raw.githubusercontent.com/justeattakeaway/pie-aperture/main/` at build time:

| Framework | File Path |
|-----------|-----------|
| Next.js 14 | `nextjs-app-v14/src/app/components/{component}/{component}.tsx` |
| Next.js 15 | `nextjs-app-v15/src/app/components/{component}/{component}.tsx` |
| Nuxt | `nuxt-app/pages/components/{component}.vue` |
| Vanilla | `vanilla-app/components/{component}.html` |

Features:
- Parallel fetching with `Promise.allSettled()` (batched in groups of 5)
- 5-second timeout per request
- Graceful 404 handling (component not yet in aperture)
- `SKIP_APERTURE_FETCH=true` environment variable for offline builds

### Icon Aggregation

Reads pre-generated icon metadata from `pie-icons/dist/iconData.json`:

```json
{
  "categories": [
    {
      "name": "alerts",
      "displayName": "Alerts",
      "icons": [
        { "name": "alert-circle", "displayName": "Alert Circle" }
      ]
    }
  ]
}
```

### Output Format

The aggregated data is written to `generated/pie-data.json`:

```typescript
interface PieData {
  metadata: {
    version: string;        // pie-webc version
    generatedAt: string;    // ISO timestamp
    componentCount: number;
    iconCount: number;
  };
  components: Record<string, ComponentData>;
  icons: {
    categories: IconCategory[];
    count: number;
  };
}
```

---

## MCP Server Implementation

The server (`src/index.ts`) uses the high-level `McpServer` API from `@modelcontextprotocol/sdk` with Zod schemas for input validation.

### Server Setup

```typescript
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const server = new McpServer({
    name: 'pie-mcp-server',
    version: pieData.metadata.version,
});

// Tools and resources are registered via server.registerTool() and server.registerResource()

const transport = new StdioServerTransport();
await server.connect(transport);
```

### Helper Functions

| Function | Purpose |
|----------|---------|
| `normalizeComponentName(name)` | Converts `"button"` to `"pie-button"`, handles case |
| `toPascalCase(str)` | Converts `"pie-button"` to `"PieButton"` |
| `findClosestComponent(name)` | Levenshtein distance fuzzy match for "did you mean?" |
| `componentNotFoundError(name)` | Returns `{ content, isError: true }` with suggestion |
| `markdownTable(headers, rows)` | Builds markdown tables for props/events/slots |
| `levenshtein(a, b)` | Edit distance calculation |

### Response Format

All tool responses return **markdown-formatted text**, not raw JSON. This makes responses more readable for LLMs and end users. Tables use markdown pipe syntax, code is in fenced blocks, and sections use headers.

### Error Handling

- **Component not found**: fuzzy-matches against all component names and suggests the closest match (e.g., `"buton"` suggests `"pie-button"`)
- **No results**: helpful message suggesting broader search terms
- **Error responses**: use `isError: true` in the MCP response

### Constants

```typescript
const MAX_SEARCH_RESULTS = 50;
const MAX_ICON_RESULTS = 50;
```

---

## Available Tools

All tools are registered with `readOnlyHint: true` and `openWorldHint: false` annotations.

### 1. `search_components`

Search PIE components by name, description, or tag name.

**Input Schema:**
```json
{
  "query": "button",
  "status": "stable"
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | `string` | Yes | Search query (matches name, tag, description) |
| `status` | `"alpha" \| "beta" \| "stable"` | No | Filter by component status |

**Returns:** Markdown list of matching components (up to 50), each showing name, tag name, status, description, and install command.

### 2. `get_component_api`

Get full API documentation for a specific component.

**Input Schema:**
```json
{
  "component": "pie-button"
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `component` | `string` | Yes | Component name (e.g., `"pie-button"` or `"button"`) |

**Returns:** Markdown document with sections:

- **Overview** — description, status, package, version, install command, docs link
- **Usage** — HTML and React import examples
- **Properties** — table with name, type, default, description
- **Events** — table with name, type, description
- **Slots** — table with name, description
- **Methods** — table with signature, return type, description
- **Valid Values** — list of allowed values per prop
- **Mixins** — list of mixins and their packages

### 3. `search_icons`

Search the PIE icon library by name or category.

**Input Schema:**
```json
{
  "query": "alert",
  "category": "alerts"
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | `string` | No | Search query (matches icon name or display name) |
| `category` | `string` | No | Filter by category name |

**Returns:** Markdown with icons grouped by category (up to 50), plus usage examples for Web Components, React, and Vue.

### 4. `get_component_examples`

Get real, production-ready code examples extracted from Storybook and pie-aperture.

**Input Schema:**
```json
{
  "component": "pie-button",
  "type": "all"
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `component` | `string` | Yes | Component name |
| `type` | `"all" \| "basic" \| "patterns" \| "variants"` | No | Type of examples to return (default: `"all"`) |

**Returns:** Markdown with sections:

- **Imports** — PIE package imports needed
- **Basic Usage** — main template code block
- **Variants** — story variants with prop combinations
- **Patterns** — named templates showing complex use cases (forms, anchors, etc.)
- **Framework Examples** — actual source code from pie-aperture for Next.js 14, Next.js 15, Nuxt, and Vanilla HTML, with links to source and live demos
- **Links** — Storybook, documentation, and framework examples repository

---

## Available Resources

Resources are read-only data endpoints registered via `server.registerResource()`.

| URI | MIME Type | Description |
|-----|-----------|-------------|
| `pie://overview` | `text/markdown` | Design system overview with version, component list (name, tag, status, description), and icon category list |
| `pie://icons` | `application/json` | Complete icon library metadata (all categories and icons) |

---

## Configuration

### Cursor IDE

Create or edit `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "pie": {
      "command": "npx",
      "args": ["@justeattakeaway/pie-mcp-server"]
    }
  }
}
```

### Claude Code

Add to `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "pie": {
      "command": "npx",
      "args": ["@justeattakeaway/pie-mcp-server"]
    }
  }
}
```

### VS Code + Continue

Add to Continue configuration:

```json
{
  "experimental": {
    "modelContextProtocolServers": [
      {
        "transport": {
          "type": "stdio",
          "command": "npx",
          "args": ["@justeattakeaway/pie-mcp-server"]
        }
      }
    ]
  }
}
```

### Local Development

For development, point directly to the built output:

```json
{
  "mcpServers": {
    "pie": {
      "command": "node",
      "args": ["/path/to/pie/packages/tools/pie-mcp-server/dist/index.js"]
    }
  }
}
```

---

## Build Process

### Scripts

| Command | Description |
|---------|-------------|
| `yarn generate:data` | Run data aggregation (CEM + Storybook + aperture + icons) |
| `yarn build` | Generate data + compile TypeScript |
| `yarn dev` | Start MCP Inspector for interactive testing |
| `yarn test` | Run tests with Vitest |

### Build Steps

1. **Data Generation** (`generate-data.js`)
   - Scans `packages/components/` for component directories
   - Reads `custom-elements.json` manifests (generated by CEM analyzer with JSDoc plugin)
   - Extracts properties, events, methods, defaults, valid values
   - Parses Storybook stories via AST (`lib/storybook-parser.js`)
   - Cleans Lit templates (`lib/template-cleaner.js`)
   - Fetches pie-aperture framework examples (`lib/aperture-fetcher.js`)
   - Reads `pie-icons` metadata
   - Outputs `generated/pie-data.json`

2. **TypeScript Compilation** (`tsc`)
   - Compiles `src/index.ts` to `dist/index.js`
   - Generates type declarations

### Testing Locally

```bash
# Build the server
yarn build

# Run with MCP Inspector (opens browser UI)
yarn dev

# Or run directly (for use with an AI client)
node dist/index.js
```

### Offline Mode

To skip network requests during data generation:

```bash
SKIP_APERTURE_FETCH=true yarn generate:data
```

This produces valid output with `frameworkExamples.*.available = false` and `code = null`, while still including source and live demo URLs.

---

## Key Implementation Details

### Component Name Normalization

The server normalizes component names to handle various input formats:

```
button       → pie-button
pie-button   → pie-button
PIE-BUTTON   → pie-button
```

### Fuzzy Matching

When a component is not found, the server uses Levenshtein distance to suggest the closest match. The suggestion threshold is half the input name length:

```
get_component_api({ component: "buton" })
→ Component "buton" not found. Did you mean **pie-button** (`pie-button`)?
```

### Result Limiting

Search results are capped to prevent overwhelming responses:
- Component search: max 50 results
- Icon search: max 50 results
- Storybook variants: max 10 per component
- Storybook patterns: max 5 per component

---

## File Structure

```
pie-mcp-server/
├── dist/                          # Compiled output
│   ├── index.js                   # Main server entry point
│   └── index.d.ts                 # Type declarations
├── generated/
│   └── pie-data.json              # Aggregated design system data
├── scripts/
│   ├── generate-data.js           # Build-time data aggregation
│   └── lib/
│       ├── storybook-parser.js    # AST-based Storybook extraction
│       ├── template-cleaner.js    # Lit template cleaning
│       └── aperture-fetcher.js    # GitHub content fetching
├── src/
│   └── index.ts                   # MCP server source
├── package.json
├── tsconfig.json
├── README.md
├── HOW_IT_WORKS.md                # This file
└── CODE_EXAMPLES_STRATEGY.md      # Code examples approach documentation
```

---

## Version Coupling

The MCP server version is coupled with `@justeattakeaway/pie-webc`. When upgrading PIE components, upgrade the MCP server to ensure documentation accuracy.

The `metadata.version` field in `pie-data.json` reflects the pie-webc version at build time.

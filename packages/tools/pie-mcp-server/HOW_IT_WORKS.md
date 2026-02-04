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

The PIE MCP Server is a [Model Context Protocol](https://modelcontextprotocol.io/) server that enables AI assistants (like Claude, Cursor, etc.) to access accurate, up-to-date documentation about PIE components, design tokens, and icons.

### Why MCP?

Instead of relying on potentially outdated training data, AI assistants can query this server in real-time for:

- Component APIs (props, slots, events)
- Design tokens (colors, spacing, typography)
- Icon metadata
- Code generation examples

### Package Info

| Property | Value |
|----------|-------|
| Package Name | `@justeattakeaway/pie-mcp-server` |
| Version | `0.7.42` |
| License | Apache-2.0 |
| Runtime | Node.js ≥18.0.0 |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        PIE Monorepo                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  pie-button/    │  │  pie-modal/     │  │  pie-icons/     │  │
│  │  custom-        │  │  custom-        │  │  iconData.json  │  │
│  │  elements.json  │  │  elements.json  │  │                 │  │
│  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘  │
│           │                    │                    │           │
│           └────────────────────┼────────────────────┘           │
│                                │                                │
│                                ▼                                │
│                    ┌───────────────────────┐                    │
│                    │   generate-data.js    │                    │
│                    │   (Build-time script) │                    │
│                    └───────────┬───────────┘                    │
│                                │                                │
│                                ▼                                │
│                    ┌───────────────────────┐                    │
│                    │  generated/           │                    │
│                    │  pie-data.json        │                    │
│                    │  (Aggregated data)    │                    │
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

The data generation script (`scripts/generate-data.js`) runs at build time to aggregate data from across the monorepo.

### Data Sources

| Source | Location | Data Extracted |
|--------|----------|----------------|
| **Components** | `packages/components/*/custom-elements.json` | Props, slots, events, types |
| **Package Metadata** | `packages/components/*/package.json` | Name, version, status, description |
| **READMEs** | `packages/components/*/README.md` | Properties documentation |
| **Design Tokens** | `packages/tools/pie-css/dist/index.css` | CSS custom properties |
| **Icons** | `packages/tools/pie-icons/dist/iconData.json` | Icon names and categories |

### Component Aggregation

For each component directory (excluding `pie-webc`, `pie-webc-core`, `pie-webc-testing`):

```javascript
// Extracted component data structure
{
  name: "@justeattakeaway/pie-button",
  version: "1.10.2",
  description: "PIE design system button...",
  status: "stable",                          // From pieMetadata.componentStatus
  replaces: { snacks: ["Button"] },          // Legacy component mapping
  tagName: "pie-button",
  className: "PieButton",
  slots: [{ name: "icon", description: "..." }],
  properties: [{ name: "size", type: "string", description: "..." }],
  validValues: { sizes: ["small", "medium", "large"] },
  mixins: [{ name: "FormControlMixin", package: "..." }],
  readme: "## Properties\n...",              // Extracted section
  installation: "npm install @justeattakeaway/pie-button"
}
```

### Token Aggregation

Parses CSS custom properties from the compiled `pie-css`:

```css
/* Example tokens extracted */
--dt-color-content-brand: #ff8000;
--dt-spacing-a: 4px;
--dt-font-size-heading-s: 20px;
```

Tokens are categorized by their prefix (e.g., `color`, `spacing`, `font`).

### Icon Aggregation

Reads pre-generated icon metadata from `pie-icons`:

```json
{
  "categories": [
    {
      "name": "alerts",
      "displayName": "Alerts",
      "icons": [
        { "name": "IconAlertCircle", "displayName": "Alert Circle" }
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
    tokenCount: number;
    iconCount: number;
  };
  components: Record<string, ComponentData>;
  tokens: {
    categories: Record<string, Token[]>;
    all: Token[];
    count: number;
  };
  icons: {
    categories: IconCategory[];
    count: number;
  };
}
```

---

## MCP Server Implementation

The server (`src/index.ts`) uses the official `@modelcontextprotocol/sdk` to implement the MCP protocol.

### Server Setup

```typescript
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
  {
    name: 'pie-mcp-server',
    version: pieData.metadata.version,
  },
  {
    capabilities: {
      resources: {},  // Enables resource listing/reading
      tools: {},      // Enables tool calling
    },
  }
);

// Connect via stdio (standard input/output)
const transport = new StdioServerTransport();
await server.connect(transport);
```

### Request Handlers

The server registers handlers for four MCP request types:

| Schema | Handler |
|--------|---------|
| `ListResourcesRequestSchema` | Returns available resources |
| `ReadResourceRequestSchema` | Returns resource content |
| `ListToolsRequestSchema` | Returns available tools |
| `CallToolRequestSchema` | Executes tool calls |

---

## Available Tools

### 1. `search_components`

Search PIE components by name, description, or tag name.

**Input Schema:**
```json
{
  "query": "button",
  "status": "stable"  // Optional: "alpha" | "beta" | "stable"
}
```

**Returns:** Array of matching components with name, tagName, description, status, and installation command.

### 2. `get_component_api`

Get full API documentation for a specific component.

**Input Schema:**
```json
{
  "component": "pie-button"  // or just "button"
}
```

**Returns:** Complete component data including:
- All properties with types and descriptions
- Slots
- Valid prop values
- Mixins
- Usage examples for HTML, React, and Web Components

### 3. `search_tokens`

Search design tokens by name or category.

**Input Schema:**
```json
{
  "query": "brand",           // Optional: search term
  "category": "color"         // Optional: "color" | "spacing" | "font" | etc.
}
```

**Returns:** Matching tokens (limited to 50 results) with names and values.

### 4. `search_icons`

Search the PIE icon library.

**Input Schema:**
```json
{
  "query": "cart",            // Optional: search term
  "category": "commerce"      // Optional: category filter
}
```

**Returns:** Matching icons (limited to 50 results) with usage examples for web components, React, and Vue.

### 5. `generate_component_code`

Generate example code for using a PIE component.

**Input Schema:**
```json
{
  "component": "pie-button",
  "props": { "variant": "primary", "isLoading": true },
  "framework": "react"  // "html" | "react" | "vue"
}
```

**Returns:** Code snippet with imports and component usage.

---

## Available Resources

Resources provide direct access to documentation via URIs.

| URI | Description |
|-----|-------------|
| `pie://overview` | System overview with component list, token categories, icon categories |
| `pie://components/{name}` | Full component documentation (e.g., `pie://components/pie-button`) |
| `pie://tokens` | All design tokens organized by category |
| `pie://icons` | Complete icon library metadata |

---

## Configuration

### Cursor IDE

Create or edit `.mcp.json` in your project root:

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
| `yarn generate:data` | Run the data aggregation script |
| `yarn build` | Generate data + compile TypeScript |
| `yarn test` | Run tests with Vitest |

### Build Steps

1. **Data Generation** (`generate-data.js`)
   - Scans `packages/components/` for component directories
   - Reads `custom-elements.json` manifests (generated by CEM analyzer with JSDoc plugin)
   - Parses `pie-css` for design tokens
   - Reads `pie-icons` metadata
   - Outputs `generated/pie-data.json`

2. **TypeScript Compilation** (`tsc`)
   - Compiles `src/index.ts` to `dist/index.js`
   - Generates type declarations

### Testing Locally

```bash
# Build the server
yarn build

# Run directly
node dist/index.js

# Test with MCP Inspector
npx @modelcontextprotocol/inspector node dist/index.js
```

---

## Key Implementation Details

### Component Name Normalization

The server normalizes component names to handle various input formats:

```typescript
// All of these work:
get_component_api({ component: "button" })
get_component_api({ component: "pie-button" })
get_component_api({ component: "PieButton" })
```

### Result Limiting

Search results are capped to prevent overwhelming responses:
- Token search: Max 50 results
- Icon search: Max 50 results

### Error Handling

Unknown resources or components return helpful error messages:

```typescript
if (!component) {
  return {
    content: [{
      type: 'text',
      text: `Component not found: ${name}. Available: ${availableComponents.join(', ')}`
    }]
  };
}
```

---

## File Structure

```
pie-mcp-server/
├── dist/                    # Compiled output
│   ├── index.js            # Main server entry point
│   └── index.d.ts          # Type declarations
├── generated/
│   └── pie-data.json       # Aggregated design system data
├── scripts/
│   └── generate-data.js    # Build-time data aggregation
├── src/
│   └── index.ts            # MCP server source
├── package.json
├── tsconfig.json
├── README.md
└── HOW_IT_WORKS.md         # This file
```

---

## Dependencies

| Package | Purpose |
|---------|---------|
| `@modelcontextprotocol/sdk` | Official MCP SDK for server implementation |
| `typescript` | TypeScript compiler (dev) |

---

## Version Coupling

The MCP server version is coupled with `@justeattakeaway/pie-webc`. When upgrading PIE components, upgrade the MCP server to ensure documentation accuracy.

The `metadata.version` field in `pie-data.json` reflects the pie-webc version at build time.

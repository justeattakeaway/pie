# @justeattakeaway/pie-mcp-server

MCP (Model Context Protocol) server that exposes PIE design system documentation to AI assistants like Claude, Cursor, and Continue.

## What is this?

This package provides an MCP server that AI assistants can connect to for accurate, up-to-date information about PIE components and icons. Instead of relying on potentially outdated training data, AI assistants can query this server for the exact API documentation matching your installed PIE version.

The server provides:

- Full component APIs (props with defaults, slots, events, methods)
- Generated code examples from component API metadata
- Framework-specific examples from pie-aperture (Next.js, Nuxt, Vanilla HTML)
- Icon search across 560+ icons in 49 categories
- Fuzzy matching with "did you mean?" suggestions for typos

## Installation

```bash
npm install @justeattakeaway/pie-mcp-server
```

## Usage

### With Cursor IDE

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

### With Claude Code

Add to your Claude Code settings (`~/.claude/settings.json`):

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

### With VS Code + Continue

Add to your Continue configuration:

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

## Available Tools

The MCP server exposes these tools for AI assistants:

| Tool | Description |
|------|-------------|
| `search_components` | Search PIE components by name, description, or tag name |
| `get_component_api` | Get full API docs for a component (props, slots, events, methods) |
| `get_component_examples` | Get real code examples from generated snippets and framework integrations |
| `search_icons` | Search the PIE icon library by name or category |

## Available Resources

The server also exposes these resources that can be read directly:

| Resource URI | Description |
|--------------|-------------|
| `pie://overview` | Design system overview with component list and icon categories |
| `pie://icons` | Complete icon library metadata |

## Example Interactions

Once configured, you can ask your AI assistant questions like:

- "What PIE component should I use for a modal dialog?"
- "Show me the props and events for pie-modal"
- "Give me code examples for pie-button in Next.js"
- "Find an icon for alerts"
- "How do I use pie-checkbox in a form?"

## Version Coupling

This package version is coupled to `@justeattakeaway/pie-webc`. When you upgrade PIE components, upgrade this package to the matching version to ensure documentation accuracy.

## Architecture

### Overview

The server follows a **build-time data generation, runtime lookup** pattern: all component and icon data is aggregated into a single JSON file at build time, then served with zero network I/O at runtime.

```
BUILD TIME                              RUNTIME
┌──────────────────────────┐            ┌──────────────────────────┐
│ scripts/generate-data.js │            │ src/index.ts             │
│                          │            │                          │
│ Reads from monorepo:     │            │ Loads pie-data.json      │
│ • custom-elements.json   │  writes    │ Registers 4 tools +      │
│ • package.json           │ ───────►   │   2 resources            │
│ • pie-icons data         │            │ Listens on stdio         │
│ • pie-aperture (GitHub)  │            │                          │
│                          │            │ AI assistants query via  │
│ Output:                  │            │ MCP protocol             │
│ generated/pie-data.json  │            │                          │
└──────────────────────────┘            └──────────────────────────┘
```

### Directory Structure

```
pie-mcp-server/
├── src/
│   ├── index.ts              # MCP server entry point (stdio transport)
│   ├── data.ts               # Runtime data loader
│   ├── constants.ts          # Search result limits
│   ├── helpers.ts            # Fuzzy matching, formatting utilities
│   ├── types.ts              # TypeScript type definitions
│   ├── resources.ts          # MCP resource registration (pie://overview, pie://icons)
│   └── tools/
│       ├── index.ts              # Tool registration orchestrator
│       ├── search-components.ts  # Component search by name/description
│       ├── get-component-api.ts  # Full API docs retrieval
│       ├── get-component-examples.ts # Code examples (generated + frameworks)
│       └── search-icons.ts       # Icon search by name/category
├── scripts/
│   ├── generate-data.js      # Main data aggregation orchestrator
│   └── lib/
│       ├── example-generator.js  # HTML example generation from API metadata
│       └── aperture-fetcher.js   # Framework example fetching from GitHub
├── generated/
│   └── pie-data.json         # Aggregated component & icon data (~230 KB)
├── package.json
└── tsconfig.json
```

### Data Pipeline

The build process (`yarn generate:data`) aggregates data from multiple sources:

**1. Component Aggregation** — Reads every `packages/components/pie-*/` in the monorepo:
- `package.json` for name, version, description, and status
- `custom-elements.json` (CEM) for API details: properties, events, methods, slots, and mixins

**2. Valid Values Extraction** — Pulls `_pieValidValues` from CEM class declarations (populated by `cem-plugin-defs-enrichment`), giving enum options per property (e.g., `variant: ["primary", "secondary", "tertiary"]`).

**3. Example Generation** (`scripts/lib/example-generator.js`) — Generates HTML examples from API metadata:
- **Quick Start**: up to 5 most impactful props + slot content
- **Variants**: enum values of the primary property (variant > size > type)
- **Slot Examples**: named slots with placeholder content
- Excludes complex types (objects, functions, arrays) and form-binding props

**4. Framework Examples** (`scripts/lib/aperture-fetcher.js`) — Fetches real code from the [pie-aperture](https://github.com/justeattakeaway/pie-aperture) repository:
- Next.js v14 and v15 (TSX)
- Nuxt (Vue)
- Vanilla HTML
- Includes source URLs and live demo links
- Fetched in parallel (batch size 5, 5s timeout per request)

**5. Icon Aggregation** — Reads `packages/tools/pie-icons/dist/iconData.json` for categories and icon metadata.

**6. Output** — Writes `generated/pie-data.json` containing metadata, all components, and all icons.

### Code Examples Strategy

Examples are **generated from component API metadata** rather than extracted from Storybook. This approach:

- Produces clean HTML web component snippets (no Lit template artifacts)
- Automatically stays in sync with the component API
- Selects the ~5 most interesting props, skipping complex types and form-binding props
- Generates realistic slot content (e.g., modals get `<p>Modal content goes here</p>`)
- Shows up to 6 variants for the primary enum property
- Framework examples come directly from pie-aperture's real application code

### Key Design Decisions

- **Static generation, dynamic query**: All data is bundled at build time into a single JSON file. No network I/O at runtime.
- **Levenshtein fuzzy matching**: When a component isn't found, suggests the closest match (threshold: `ceil(name.length / 2)`).
- **CEM as source of truth**: Custom Elements Manifest, enriched by `cem-plugin-props-enrichment` and `cem-plugin-defs-enrichment`, provides the canonical API.
- **Normalised component names**: Accepts both `"button"` and `"pie-button"`, normalising internally to the `pie-` prefixed form.
- **Graceful degradation**: Missing framework examples (404s, timeouts) are treated as "not available" rather than errors.

## Development

### Building

```bash
# Generate data from monorepo and compile TypeScript
yarn build
```

### Testing Locally

```bash
# Run with MCP Inspector (opens browser UI)
yarn dev

# Or run the server directly
node dist/index.js
```

### Offline Mode

To skip network requests to pie-aperture during data generation:

```bash
SKIP_APERTURE_FETCH=true yarn generate:data
```

## License

Apache-2.0

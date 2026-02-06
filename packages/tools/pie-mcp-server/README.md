# @justeattakeaway/pie-mcp-server

MCP (Model Context Protocol) server that exposes PIE design system documentation to AI assistants like Claude, Cursor, and Continue.

## What is this?

This package provides an MCP server that AI assistants can connect to for accurate, up-to-date information about PIE components and icons. Instead of relying on potentially outdated training data, AI assistants can query this server for the exact API documentation matching your installed PIE version.

The server provides:

- Full component APIs (props with defaults, slots, events, methods)
- Real code examples extracted from Storybook stories
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
| `get_component_examples` | Get real code examples from Storybook and framework integrations |
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

## Development

### Building

```bash
# Generate data from monorepo and compile TypeScript
yarn build
```

### Data Generation

The build process:
1. Reads `custom-elements.json` from all PIE components (props, events, methods, slots)
2. Parses `defaultProps` from CEM defs modules
3. Extracts code examples from Storybook stories via AST parsing
4. Fetches framework examples from pie-aperture (Next.js 14/15, Nuxt, Vanilla)
5. Extracts icon metadata from `pie-icons`
6. Aggregates into `generated/pie-data.json`
7. Compiles TypeScript MCP server

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

For more details on the architecture and implementation, see [HOW_IT_WORKS.md](HOW_IT_WORKS.md).

For details on the code examples strategy, see [CODE_EXAMPLES_STRATEGY.md](CODE_EXAMPLES_STRATEGY.md).

## License

Apache-2.0

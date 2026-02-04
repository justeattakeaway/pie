# @justeattakeaway/pie-mcp-server

MCP (Model Context Protocol) server that exposes PIE design system documentation to AI assistants like Claude.

## What is this?

This package provides an MCP server that AI assistants can connect to for accurate, up-to-date information about PIE components, design tokens, and icons. Instead of relying on potentially outdated training data, AI assistants can query this server for the exact API documentation matching your installed PIE version.

## Installation

```bash
npm install @justeattakeaway/pie-mcp-server
```

## Usage

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
| `search_components` | Search PIE components by name, description, or use case |
| `get_component_api` | Get full API documentation for a component |
| `search_tokens` | Search design tokens by name or category |
| `search_icons` | Search the PIE icon library |
| `generate_component_code` | Generate example code for HTML, React, or Vue |

## Available Resources

The server also exposes these resources that can be read directly:

| Resource URI | Description |
|--------------|-------------|
| `pie://overview` | Design system overview |
| `pie://components/{name}` | Individual component documentation |
| `pie://tokens` | All design tokens |
| `pie://icons` | Icon library metadata |

## Example Interactions

Once configured, you can ask your AI assistant questions like:

- "What PIE component should I use for a modal dialog?"
- "Show me the props for pie-button"
- "What's the design token for primary brand color?"
- "Generate React code for a loading button"
- "Find an icon for a shopping cart"

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
1. Reads `custom-elements.json` from all PIE components
2. Parses design tokens from `pie-css`
3. Extracts icon metadata from `pie-icons`
4. Aggregates into `generated/pie-data.json`
5. Compiles TypeScript MCP server

### Testing Locally

```bash
# Run the server directly
node dist/index.js

# Or test with MCP inspector
npx @modelcontextprotocol/inspector node dist/index.js
```

## License

Apache-2.0

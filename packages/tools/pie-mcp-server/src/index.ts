#!/usr/bin/env node
/**
 * PIE Design System MCP Server
 *
 * Exposes PIE component documentation and icons to AI assistants
 * via the Model Context Protocol (MCP).
 */

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

import { pieData } from './data.js';
import { registerResources } from './resources.js';
import { registerTools } from './tools/index.js';

const server = new McpServer({
    name: 'pie-mcp-server',
    version: pieData.metadata.version,
});

registerResources(server);
registerTools(server);

const transport = new StdioServerTransport();
await server.connect(transport);
console.error('PIE MCP Server running on stdio');

import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

import { register as registerGetComponentApi } from './get-component-api.js';
import { register as registerGetComponentExamples } from './get-component-examples.js';
import { register as registerSearchComponents } from './search-components.js';
import { register as registerSearchIcons } from './search-icons.js';

export function registerTools (server: McpServer): void {
    registerSearchComponents(server);
    registerGetComponentApi(server);
    registerSearchIcons(server);
    registerGetComponentExamples(server);
}

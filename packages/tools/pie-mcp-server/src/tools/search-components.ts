import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

import { MAX_SEARCH_RESULTS } from '../constants.js';
import { pieData } from '../data.js';

export function register (server: McpServer): void {
    server.registerTool(
        'search_components',
        {
            title: 'Search PIE Components',
            description: 'Search PIE components by name, description, or tag name. Use this to find the right component for a use case. Matches against component names, tag names, and descriptions. Returns up to 50 results.',
            inputSchema: {
                query: z.string().describe('Search query (matches component name, description, or tag)'),
                status: z.enum(['alpha', 'beta', 'stable']).optional().describe('Filter by component status'),
            },
            annotations: {
                readOnlyHint: true,
                destructiveHint: false,
                idempotentHint: true,
                openWorldHint: false,
            },
        },
        async ({ query, status: statusFilter }) => {
            const q = (query || '').toLowerCase();

            const results = Object.entries(pieData.components)
                .filter(([key, comp]) => {
                    const matchesQuery = !q ||
                        key.toLowerCase().includes(q) ||
                        comp.tagName.toLowerCase().includes(q) ||
                        comp.description.toLowerCase().includes(q);

                    const matchesStatus = !statusFilter || comp.status === statusFilter;

                    return matchesQuery && matchesStatus;
                })
                .slice(0, MAX_SEARCH_RESULTS);

            if (results.length === 0) {
                return {
                    content: [{
                        type: 'text' as const,
                        text: `No components found matching "${query}"${statusFilter ? ` with status "${statusFilter}"` : ''}. Try a broader search term.`,
                    }],
                };
            }

            const lines = results.map(([key, comp]) => `- **${key}** (\`${comp.tagName}\`) — ${comp.status}\n  ${comp.description}\n  Install: \`${comp.installation}\``);

            const text = [
                `Found **${results.length}** component${results.length !== 1 ? 's' : ''}:`,
                '',
                ...lines,
            ].join('\n');

            return {
                content: [{ type: 'text' as const, text }],
            };
        },
    );
}

import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

import { pieData } from './data.js';

export function registerResources (server: McpServer): void {
    server.registerResource(
        'PIE Design System Overview',
        'pie://overview',
        {
            description: 'Overview of the PIE design system including available components and icons',
            mimeType: 'text/markdown',
        },
        async () => {
            const componentList = Object.entries(pieData.components)
                .map(([key, comp]) => `- **${key}** (\`${comp.tagName}\`) — ${comp.status} — ${comp.description}`)
                .join('\n');

            const categoryList = pieData.icons.categories
                .map((c) => `- ${c.displayName} (${c.icons.length} icons)`)
                .join('\n');

            const text = [
                '# PIE Design System',
                '',
                `**Version:** ${pieData.metadata.version}`,
                `**Generated:** ${pieData.metadata.generatedAt}`,
                `**Components:** ${pieData.metadata.componentCount} | **Icons:** ${pieData.metadata.iconCount}`,
                '',
                '## Components',
                '',
                componentList,
                '',
                '## Icon Categories',
                '',
                categoryList,
            ].join('\n');

            return {
                contents: [{ uri: 'pie://overview', mimeType: 'text/markdown', text }],
            };
        },
    );

    server.registerResource(
        'PIE Icons',
        'pie://icons',
        {
            description: 'PIE icon library metadata',
            mimeType: 'application/json',
        },
        async () => ({
            contents: [
                {
                    uri: 'pie://icons',
                    mimeType: 'application/json',
                    text: JSON.stringify(pieData.icons),
                },
            ],
        }),
    );
}

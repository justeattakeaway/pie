import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

import { MAX_ICON_RESULTS } from '../constants.js';
import { pieData } from '../data.js';

export function register (server: McpServer): void {
    server.registerTool(
        'search_icons',
        {
            title: 'Search PIE Icons',
            description: 'Search PIE icons by name or category. Returns icons grouped by category with usage examples.',
            inputSchema: {
                query: z.string().optional().describe('Search query (matches icon name)'),
                category: z.string().optional().describe('Filter by category'),
            },
            annotations: {
                readOnlyHint: true,
                destructiveHint: false,
                idempotentHint: true,
                openWorldHint: false,
            },
        },
        async ({ query, category: categoryFilter }) => {
            const q = (query || '').toLowerCase();
            const cat = (categoryFilter || '').toLowerCase();

            const grouped: Record<string, Array<{ name: string; displayName: string }>> = {};
            let totalCount = 0;

            for (const category of pieData.icons.categories) {
                if (cat && !category.name.toLowerCase().includes(cat) &&
                    !category.displayName.toLowerCase().includes(cat)) {
                    continue;
                }

                const matchingIcons = category.icons.filter((icon) => !q || icon.name.toLowerCase().includes(q) || icon.displayName.toLowerCase().includes(q));

                if (matchingIcons.length > 0) {
                    grouped[category.displayName] = matchingIcons;
                    totalCount += matchingIcons.length;
                }
            }

            if (totalCount === 0) {
                return {
                    content: [{
                        type: 'text' as const,
                        text: `No icons found${q ? ` matching "${query}"` : ''}${cat ? ` in category "${categoryFilter}"` : ''}. Try a broader search term.`,
                    }],
                };
            }

            const sections: string[] = [
                `Found **${totalCount}** icon${totalCount !== 1 ? 's' : ''}:`,
                '',
            ];

            let shownCount = 0;
            for (const [categoryName, icons] of Object.entries(grouped)) {
                if (shownCount >= MAX_ICON_RESULTS) {
                    sections.push(`\n_…and ${totalCount - shownCount} more. Narrow your search for complete results._`);
                    break;
                }

                sections.push(`### ${categoryName}`);
                const iconsToShow = icons.slice(0, MAX_ICON_RESULTS - shownCount);
                sections.push(iconsToShow.map((i) => `- \`${i.name}\` — ${i.displayName}`).join('\n'));
                sections.push('');
                shownCount += iconsToShow.length;
            }

            sections.push(
                '## Usage',
                '',
                '**Web Component:**',
                '```js',
                "import '@justeattakeaway/pie-icons-webc/dist/IconName.js';",
                '```',
                '',
                '**React:**',
                '```js',
                "import { IconName } from '@justeattakeaway/pie-icons-react';",
                '```',
                '',
                '**Vue:**',
                '```js',
                "import { IconName } from '@justeattakeaway/pie-icons-vue';",
                '```',
            );

            return {
                content: [{ type: 'text' as const, text: sections.join('\n') }],
            };
        },
    );
}

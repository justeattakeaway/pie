import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

import { pieData } from '../data.js';
import {
    componentNotFoundError,
    markdownTable,
    normalizeComponentName,
    toPascalCase,
} from '../helpers.js';

export function register (server: McpServer): void {
    server.registerTool(
        'get_component_api',
        {
            title: 'Get PIE Component API',
            description: 'Get the full API documentation for a PIE component including props, slots, events, methods, and usage examples.',
            inputSchema: {
                component: z.string().describe('Component name (e.g., "pie-button" or "button")'),
            },
            annotations: {
                readOnlyHint: true,
                destructiveHint: false,
                idempotentHint: true,
                openWorldHint: false,
            },
        },
        async ({ component: componentInput }) => {
            const componentName = normalizeComponentName(componentInput);
            const component = pieData.components[componentName];

            if (!component) {
                return componentNotFoundError(componentInput, pieData);
            }

            const cleanName = componentName.replace('pie-', '');
            const className = component.className || toPascalCase(component.tagName);
            const sections: string[] = [];

            // Overview
            sections.push(
                `# ${component.tagName}`,
                '',
                `${component.description}`,
                '',
                '| | |',
                '| --- | --- |',
                `| **Status** | ${component.status} |`,
                `| **Package** | \`${component.name}\` |`,
                `| **Version** | ${component.version} |`,
                `| **Install** | \`${component.installation}\` |`,
                `| **Docs** | https://pie.design/components/${cleanName}/code/ |`,
            );

            // Quick usage
            sections.push(
                '',
                '## Usage',
                '',
                '**HTML (Web Component):**',
                '```html',
                `<${component.tagName}></${component.tagName}>`,
                '```',
                '',
                '**React:**',
                '```js',
                `import { ${className} } from '@justeattakeaway/pie-webc/react/${cleanName}.js';`,
                '```',
            );

            // Properties table
            if (component.properties.length > 0) {
                const propRows = component.properties.map((p) => [
                    `\`${p.name}\``,
                    `\`${p.type}\``,
                    p.default ? `\`${p.default}\`` : '—',
                    p.description || '—',
                ]);

                sections.push(
                    '',
                    '## Properties',
                    '',
                    markdownTable(['Name', 'Type', 'Default', 'Description'], propRows),
                );
            }

            // Events table
            if (component.events.length > 0) {
                const eventRows = component.events.map((e) => [
                    `\`${e.name}\``,
                    `\`${e.type}\``,
                    e.description || '—',
                ]);

                sections.push(
                    '',
                    '## Events',
                    '',
                    markdownTable(['Name', 'Type', 'Description'], eventRows),
                );
            }

            // Slots table
            if (component.slots.length > 0) {
                const slotRows = component.slots.map((s) => [
                    s.name ? `\`${s.name}\`` : '(default)',
                    s.description || '—',
                ]);

                sections.push(
                    '',
                    '## Slots',
                    '',
                    markdownTable(['Name', 'Description'], slotRows),
                );
            }

            // Methods table
            if (component.methods.length > 0) {
                const methodRows = component.methods.map((m) => {
                    const params = m.parameters.map((p) => `${p.name}: ${p.type}`).join(', ');
                    return [
                        `\`${m.name}(${params})\``,
                        `\`${m.returnType}\``,
                        m.description || '—',
                    ];
                });

                sections.push(
                    '',
                    '## Methods',
                    '',
                    markdownTable(['Signature', 'Returns', 'Description'], methodRows),
                );
            }

            // Valid values
            const validValueEntries = Object.entries(component.validValues);
            if (validValueEntries.length > 0) {
                sections.push('', '## Valid Values', '');
                for (const [prop, values] of validValueEntries) {
                    sections.push(`- **${prop}:** ${values.map((v) => `\`${v}\``).join(', ')}`);
                }
            }

            // Mixins
            if (component.mixins.length > 0) {
                sections.push(
                    '',
                    '## Mixins',
                    '',
                    ...component.mixins.map((m) => `- \`${m.name}\` from \`${m.package}\``),
                );
            }

            return {
                content: [{ type: 'text' as const, text: sections.join('\n') }],
            };
        },
    );
}

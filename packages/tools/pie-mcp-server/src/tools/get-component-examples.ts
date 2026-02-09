import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

import { pieData } from '../data.js';
import { componentNotFoundError, normalizeComponentName } from '../helpers.js';

export function register (server: McpServer): void {
    server.registerTool(
        'get_component_examples',
        {
            title: 'Get PIE Component Examples',
            description: 'Get real, production-ready code examples extracted from PIE Storybook. These are battle-tested examples showing actual usage patterns. Also includes framework-specific examples from pie-aperture (Next.js, Nuxt, Vanilla).',
            inputSchema: {
                component: z.string().describe('Component name (e.g., "pie-button" or "button")'),
                type: z.enum(['all', 'basic', 'variants']).optional()
                    .describe('Type of examples to return. "basic" is the quick-start snippet, "variants" show different prop combinations.'),
            },
            annotations: {
                readOnlyHint: true,
                destructiveHint: false,
                idempotentHint: true,
                openWorldHint: false,
            },
        },
        async ({ component: componentInput, type: exampleType }) => {
            const componentName = normalizeComponentName(componentInput);
            const component = pieData.components[componentName];

            if (!component) {
                return componentNotFoundError(componentInput, pieData);
            }

            const { examples, frameworkExamples } = component;

            if (!examples && !frameworkExamples) {
                return {
                    content: [{
                        type: 'text' as const,
                        text: `No examples found for **${componentName}**. Use \`get_component_api\` to get the component's props and generate code.`,
                    }],
                };
            }

            const cleanName = componentName.replace('pie-', '');
            const requestedType = (exampleType || 'all').toLowerCase();
            const sections: string[] = [
                `# ${componentName} — Examples`,
                '',
            ];

            // Import
            if (examples?.import) {
                sections.push(
                    '## Import',
                    '',
                    '```js',
                    `import '${examples.import}';`,
                    '```',
                    '',
                );
            }

            // Quick Start (aliased as "basic" for backward compat)
            if ((requestedType === 'all' || requestedType === 'basic') && examples?.quickStart) {
                sections.push(
                    '## Quick Start',
                    '',
                    '```html',
                    examples.quickStart,
                    '```',
                    '',
                );
            }

            // Variants
            if ((requestedType === 'all' || requestedType === 'variants') && examples?.variants && examples.variants.length > 0) {
                sections.push('## Variants', '');
                for (const variant of examples.variants) {
                    sections.push(
                        `### ${variant.name}`,
                        '',
                        '```html',
                        variant.code,
                        '```',
                        '',
                    );
                }
            }

            // Slot Examples
            if (requestedType === 'all' && examples?.slots && examples.slots.length > 0) {
                sections.push('## Slot Examples', '');
                for (const slot of examples.slots) {
                    sections.push(`### ${slot.name}`);
                    if (slot.description) sections.push('', slot.description);
                    sections.push(
                        '',
                        '```html',
                        slot.code,
                        '```',
                        '',
                    );
                }
            }

            // Framework examples
            if (frameworkExamples) {
                const frameworks = [
                    { key: 'nextjsV14' as const, label: 'Next.js v14' },
                    { key: 'nextjsV15' as const, label: 'Next.js v15' },
                    { key: 'nuxt' as const, label: 'Nuxt' },
                    { key: 'vanilla' as const, label: 'Vanilla HTML' },
                ];

                const availableFrameworks = frameworks.filter((fw) => frameworkExamples[fw.key]?.available);

                if (availableFrameworks.length > 0) {
                    sections.push('## Framework Examples', '');

                    for (const fw of availableFrameworks) {
                        const example = frameworkExamples[fw.key];
                        sections.push(`### ${fw.label}`);

                        if (example.code) {
                            const ext = fw.key === 'nuxt' ? 'vue' : fw.key.startsWith('nextjs') ? 'tsx' : 'html';
                            sections.push('', `\`\`\`${ext}`, example.code, '```');
                        }

                        sections.push(
                            '',
                            `- [Source](${example.sourceUrl})`,
                            `- [Live demo](${example.liveUrl})`,
                            '',
                        );
                    }
                }
            }

            // Links
            sections.push(
                '## Links',
                '',
                `- [Storybook](https://webc.pie.design/?path=/story/components-${cleanName})`,
                `- [Documentation](https://pie.design/components/${cleanName}/code/)`,
            );

            if (frameworkExamples?.repository) {
                sections.push(`- [Framework examples repo](${frameworkExamples.repository})`);
            }

            return {
                content: [{ type: 'text' as const, text: sections.join('\n') }],
            };
        },
    );
}

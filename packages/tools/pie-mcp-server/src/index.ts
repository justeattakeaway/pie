#!/usr/bin/env node
/**
 * PIE Design System MCP Server
 *
 * Exposes PIE component documentation and icons to AI assistants
 * via the Model Context Protocol (MCP).
 */

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load pre-generated data
const dataPath = join(__dirname, '..', 'generated', 'pie-data.json');
const pieData = JSON.parse(readFileSync(dataPath, 'utf-8')) as PieData;

// Type definitions
interface PieData {
    metadata: {
        version: string;
        generatedAt: string;
        componentCount: number;
        iconCount: number;
    };
    components: Record<string, ComponentData>;
    icons: {
        categories: IconCategory[];
        count: number;
    };
}

interface FrameworkExample {
    available: boolean;
    code: string | null;
    sourceUrl: string;
    liveUrl: string;
    error?: string;
}

interface FrameworkExamples {
    nextjsV14: FrameworkExample;
    nextjsV15: FrameworkExample;
    nuxt: FrameworkExample;
    vanilla: FrameworkExample;
    repository: string;
}

interface ComponentData {
    name: string;
    version: string;
    description: string;
    status: string;
    replaces: Record<string, string[]> | null;
    tagName: string;
    className: string | null;
    slots: Array<{ name: string; description: string }>;
    properties: Array<{
        name: string;
        type: string;
        description: string;
        attribute: string;
        default: string | null;
        reflects: boolean;
        readonly: boolean;
    }>;
    events: Array<{ name: string; type: string; description: string }>;
    methods: Array<{
        name: string;
        description: string;
        parameters: Array<{ name: string; type: string }>;
        returnType: string;
    }>;
    validValues: Record<string, string[]>;
    mixins: Array<{ name: string; package: string }>;
    installation: string;
    examples: ComponentExamples | null;
    frameworkExamples: FrameworkExamples | null;
}

interface ComponentExamples {
    basic: string | null;
    variants: Array<{ name: string; props: Record<string, string> }>;
    patterns: Array<{ name: string; description: string; code: string }>;
    imports: string[];
}

interface IconCategory {
    name: string;
    displayName: string;
    icons: Array<{ name: string; displayName: string }>;
}

// Constants
const MAX_SEARCH_RESULTS = 50;
const MAX_ICON_RESULTS = 50;

// Create MCP server
const server = new McpServer({
    name: 'pie-mcp-server',
    version: pieData.metadata.version,
});

// --- Helper functions ---

function toPascalCase (str: string): string {
    return str
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
}

function normalizeComponentName (name: string): string {
    const lower = name.toLowerCase().trim();
    return lower.startsWith('pie-') ? lower : `pie-${lower}`;
}

function levenshtein (a: string, b: string): number {
    const m = a.length;
    const n = b.length;
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0) as number[]);

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = a[i - 1] === b[j - 1]
                ? dp[i - 1][j - 1]
                : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
    }

    return dp[m][n];
}

function findClosestComponent (name: string): string | null {
    const normalized = normalizeComponentName(name);
    let best: string | null = null;
    let bestDist = Infinity;

    for (const key of Object.keys(pieData.components)) {
        const fullKey = `pie-${key.replace('pie-', '')}`;
        const dist = levenshtein(normalized, fullKey);
        if (dist < bestDist) {
            bestDist = dist;
            best = key;
        }
    }

    // Only suggest if the distance is reasonable (less than half the name length)
    return best && bestDist <= Math.ceil(normalized.length / 2) ? best : null;
}

function componentNotFoundError (name: string): { content: Array<{ type: 'text'; text: string }>; isError: true } {
    const suggestion = findClosestComponent(name);
    let message = `Component "${name}" not found.`;

    if (suggestion) {
        message += ` Did you mean **${suggestion}** (\`${pieData.components[suggestion].tagName}\`)?`;
    } else {
        message += ' Use `search_components` to find available components.';
    }

    return {
        content: [{ type: 'text' as const, text: message }],
        isError: true,
    };
}

function markdownTable (headers: string[], rows: string[][]): string {
    if (rows.length === 0) return '';

    const separator = headers.map(() => '---');
    const lines = [
        `| ${headers.join(' | ')} |`,
        `| ${separator.join(' | ')} |`,
        ...rows.map((row) => `| ${row.map((cell) => cell.replace(/\|/g, '\\|')).join(' | ')} |`),
    ];

    return lines.join('\n');
}

// --- Resource registrations ---

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
            `# PIE Design System`,
            ``,
            `**Version:** ${pieData.metadata.version}`,
            `**Generated:** ${pieData.metadata.generatedAt}`,
            `**Components:** ${pieData.metadata.componentCount} | **Icons:** ${pieData.metadata.iconCount}`,
            ``,
            `## Components`,
            ``,
            componentList,
            ``,
            `## Icon Categories`,
            ``,
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

// --- Tool registrations ---

server.registerTool(
    'search_components',
    {
        description: 'Search PIE components by name, description, or tag name. Use this to find the right component for a use case. Matches against component names, tag names, and descriptions. Returns up to 50 results.',
        inputSchema: {
            query: z.string().describe('Search query (matches component name, description, or tag)'),
            status: z.enum(['alpha', 'beta', 'stable']).optional().describe('Filter by component status'),
        },
        annotations: {
            readOnlyHint: true,
            openWorldHint: false,
        },
    },
    async ({ query, status: statusFilter }) => {
        const q = (query || '').toLowerCase();

        const results = Object.entries(pieData.components)
            .filter(([key, comp]) => {
                const matchesQuery = !q
                    || key.toLowerCase().includes(q)
                    || comp.tagName.toLowerCase().includes(q)
                    || comp.description.toLowerCase().includes(q);

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

        const lines = results.map(([key, comp]) =>
            `- **${key}** (\`${comp.tagName}\`) — ${comp.status}\n  ${comp.description}\n  Install: \`${comp.installation}\``);

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

server.registerTool(
    'get_component_api',
    {
        description: 'Get the full API documentation for a PIE component including props, slots, events, methods, and usage examples.',
        inputSchema: {
            component: z.string().describe('Component name (e.g., "pie-button" or "button")'),
        },
        annotations: {
            readOnlyHint: true,
            openWorldHint: false,
        },
    },
    async ({ component: componentInput }) => {
        const componentName = normalizeComponentName(componentInput);
        const component = pieData.components[componentName];

        if (!component) {
            return componentNotFoundError(componentInput);
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
            `| | |`,
            `| --- | --- |`,
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

server.registerTool(
    'search_icons',
    {
        description: 'Search PIE icons by name or category. Returns icons grouped by category with usage examples.',
        inputSchema: {
            query: z.string().optional().describe('Search query (matches icon name)'),
            category: z.string().optional().describe('Filter by category'),
        },
        annotations: {
            readOnlyHint: true,
            openWorldHint: false,
        },
    },
    async ({ query, category: categoryFilter }) => {
        const q = (query || '').toLowerCase();
        const cat = (categoryFilter || '').toLowerCase();

        const grouped: Record<string, Array<{ name: string; displayName: string }>> = {};
        let totalCount = 0;

        for (const category of pieData.icons.categories) {
            if (cat && !category.name.toLowerCase().includes(cat)
                && !category.displayName.toLowerCase().includes(cat)) {
                continue;
            }

            const matchingIcons = category.icons.filter((icon) =>
                !q || icon.name.toLowerCase().includes(q) || icon.displayName.toLowerCase().includes(q));

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
            "```js",
            "import '@justeattakeaway/pie-icons-webc/dist/IconName.js';",
            "```",
            '',
            '**React:**',
            "```js",
            "import { IconName } from '@justeattakeaway/pie-icons-react';",
            "```",
            '',
            '**Vue:**',
            "```js",
            "import { IconName } from '@justeattakeaway/pie-icons-vue';",
            "```",
        );

        return {
            content: [{ type: 'text' as const, text: sections.join('\n') }],
        };
    },
);

server.registerTool(
    'get_component_examples',
    {
        description: 'Get real, production-ready code examples extracted from PIE Storybook. These are battle-tested examples showing actual usage patterns. Also includes framework-specific examples from pie-aperture (Next.js, Nuxt, Vanilla).',
        inputSchema: {
            component: z.string().describe('Component name (e.g., "pie-button" or "button")'),
            type: z.enum(['all', 'basic', 'patterns', 'variants']).optional()
                .describe('Type of examples to return. "basic" is the main template, "patterns" are complex real-world patterns like forms, "variants" show different prop combinations.'),
        },
        annotations: {
            readOnlyHint: true,
            openWorldHint: false,
        },
    },
    async ({ component: componentInput, type: exampleType }) => {
        const componentName = normalizeComponentName(componentInput);
        const component = pieData.components[componentName];

        if (!component) {
            return componentNotFoundError(componentInput);
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

        // Imports
        if (examples?.imports && examples.imports.length > 0) {
            sections.push(
                '## Imports',
                '',
                '```ts',
                ...examples.imports,
                '```',
                '',
            );
        }

        // Basic example
        if ((requestedType === 'all' || requestedType === 'basic') && examples?.basic) {
            sections.push(
                '## Basic Usage',
                '',
                '```html',
                examples.basic,
                '```',
                '',
            );
        }

        // Variants
        if ((requestedType === 'all' || requestedType === 'variants') && examples?.variants && examples.variants.length > 0) {
            sections.push('## Variants', '');
            for (const variant of examples.variants) {
                const propsStr = Object.entries(variant.props)
                    .map(([k, v]) => `${k}="${v}"`)
                    .join(' ');
                sections.push(`**${variant.name}:** \`${propsStr}\``);
            }
            sections.push('');
        }

        // Patterns
        if ((requestedType === 'all' || requestedType === 'patterns') && examples?.patterns && examples.patterns.length > 0) {
            sections.push('## Patterns', '');
            for (const pattern of examples.patterns) {
                sections.push(`### ${pattern.name}`);
                if (pattern.description) sections.push('', pattern.description);
                sections.push(
                    '',
                    '```html',
                    pattern.code,
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

// Start the server
async function main () {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('PIE MCP Server running on stdio');
}

main().catch(console.error);

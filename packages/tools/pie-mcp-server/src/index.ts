#!/usr/bin/env node
/**
 * PIE Design System MCP Server
 *
 * Exposes PIE component documentation and icons to AI assistants
 * via the Model Context Protocol (MCP).
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
    CallToolRequestSchema,
    ListResourcesRequestSchema,
    ListToolsRequestSchema,
    ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

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

interface ComponentData {
    name: string;
    version: string;
    description: string;
    status: string;
    replaces: Record<string, string[]> | null;
    tagName: string;
    className: string | null;
    slots: Array<{ name: string; description: string }>;
    properties: Array<{ name: string; type: string; description: string; attribute: string }>;
    validValues: Record<string, string[]>;
    mixins: Array<{ name: string; package: string }>;
    installation: string;
    examples: ComponentExamples | null;
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

// Create MCP server
const server = new Server(
    {
        name: 'pie-mcp-server',
        version: pieData.metadata.version,
    },
    {
        capabilities: {
            resources: {},
            tools: {},
        },
    }
);

// Register resources
server.setRequestHandler(ListResourcesRequestSchema, async () => ({
    resources: [
        {
            uri: 'pie://overview',
            name: 'PIE Design System Overview',
            description: 'Overview of the PIE design system including available components and icons',
            mimeType: 'application/json',
        },
        {
            uri: 'pie://icons',
            name: 'PIE Icons',
            description: 'PIE icon library metadata',
            mimeType: 'application/json',
        },
    ],
}));

// Handle resource reads
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const { uri } = request.params;

    if (uri === 'pie://overview') {
        return {
            contents: [
                {
                    uri,
                    mimeType: 'application/json',
                    text: JSON.stringify({
                        version: pieData.metadata.version,
                        generatedAt: pieData.metadata.generatedAt,
                        components: Object.keys(pieData.components).map((key) => ({
                            name: key,
                            tagName: pieData.components[key].tagName,
                            status: pieData.components[key].status,
                            description: pieData.components[key].description,
                        })),
                        iconCategories: pieData.icons.categories.map((c) => c.displayName),
                    }),
                },
            ],
        };
    }

    if (uri === 'pie://icons') {
        return {
            contents: [
                {
                    uri,
                    mimeType: 'application/json',
                    text: JSON.stringify(pieData.icons),
                },
            ],
        };
    }

    throw new Error(`Unknown resource: ${uri}`);
});

// Register tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
        {
            name: 'search_components',
            description: 'Search PIE components by name, description, or tag name. Use this to find the right component for a use case.',
            inputSchema: {
                type: 'object' as const,
                properties: {
                    query: {
                        type: 'string',
                        description: 'Search query (matches component name, description, or tag)',
                    },
                    status: {
                        type: 'string',
                        enum: ['alpha', 'beta', 'stable'],
                        description: 'Filter by component status',
                    },
                },
                required: ['query'],
            },
        },
        {
            name: 'get_component_api',
            description: 'Get the full API documentation for a PIE component including props, slots, and usage examples.',
            inputSchema: {
                type: 'object' as const,
                properties: {
                    component: {
                        type: 'string',
                        description: 'Component name (e.g., "pie-button" or "button")',
                    },
                },
                required: ['component'],
            },
        },
        {
            name: 'search_icons',
            description: 'Search PIE icons by name or category.',
            inputSchema: {
                type: 'object' as const,
                properties: {
                    query: {
                        type: 'string',
                        description: 'Search query (matches icon name)',
                    },
                    category: {
                        type: 'string',
                        description: 'Filter by category',
                    },
                },
                required: [],
            },
        },
        {
            name: 'get_component_examples',
            description: 'Get real, production-ready code examples extracted from PIE Storybook. These are battle-tested examples showing actual usage patterns.',
            inputSchema: {
                type: 'object' as const,
                properties: {
                    component: {
                        type: 'string',
                        description: 'Component name (e.g., "pie-button" or "button")',
                    },
                    type: {
                        type: 'string',
                        enum: ['all', 'basic', 'patterns', 'variants'],
                        description: 'Type of examples to return. "basic" is the main template, "patterns" are complex real-world patterns like forms, "variants" show different prop combinations.',
                    },
                },
                required: ['component'],
            },
        },
    ],
}));

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    switch (name) {
        case 'search_components': {
            const query = (args?.query as string || '').toLowerCase();
            const statusFilter = args?.status as string | undefined;

            const results = Object.entries(pieData.components)
                .filter(([key, comp]) => {
                    const matchesQuery = !query ||
                        key.toLowerCase().includes(query) ||
                        comp.tagName.toLowerCase().includes(query) ||
                        comp.description.toLowerCase().includes(query);

                    const matchesStatus = !statusFilter || comp.status === statusFilter;

                    return matchesQuery && matchesStatus;
                })
                .map(([key, comp]) => ({
                    name: key,
                    tagName: comp.tagName,
                    description: comp.description,
                    status: comp.status,
                    installation: comp.installation,
                }));

            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(results),
                    },
                ],
            };
        }

        case 'get_component_api': {
            const componentName = normalizeComponentName(args?.component as string || '');
            const component = pieData.components[componentName];

            if (!component) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `Component not found: ${componentName}. Available components: ${Object.keys(pieData.components).join(', ')}`,
                        },
                    ],
                };
            }

            // Exclude examples - use get_component_examples for those
            const { examples: _, ...componentWithoutExamples } = component;

            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify({
                            ...componentWithoutExamples,
                            usage: {
                                html: `<${component.tagName}></${component.tagName}>`,
                                react: `import { ${component.className || toPascalCase(component.tagName)} } from '@justeattakeaway/pie-webc/react/${component.tagName.replace('pie-', '')}.js';`,
                                webComponent: `import '${component.name}';`,
                            },
                        }),
                    },
                ],
            };
        }

        case 'search_icons': {
            const query = (args?.query as string || '').toLowerCase();
            const categoryFilter = (args?.category as string || '').toLowerCase();

            const results: Array<{ name: string; displayName: string; category: string }> = [];

            for (const category of pieData.icons.categories) {
                if (categoryFilter && !category.name.toLowerCase().includes(categoryFilter) &&
                    !category.displayName.toLowerCase().includes(categoryFilter)) {
                    continue;
                }

                for (const icon of category.icons) {
                    if (!query || icon.name.toLowerCase().includes(query) ||
                        icon.displayName.toLowerCase().includes(query)) {
                        results.push({
                            name: icon.name,
                            displayName: icon.displayName,
                            category: category.displayName,
                        });
                    }
                }
            }

            // Limit results
            const limitedResults = results.slice(0, 50);

            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify({
                            count: results.length,
                            showing: limitedResults.length,
                            icons: limitedResults,
                            usage: {
                                webComponent: `import '@justeattakeaway/pie-icons-webc/dist/IconName.js';`,
                                react: `import { IconName } from '@justeattakeaway/pie-icons-react';`,
                                vue: `import { IconName } from '@justeattakeaway/pie-icons-vue';`,
                            },
                        }),
                    },
                ],
            };
        }

        case 'get_component_examples': {
            const componentName = normalizeComponentName(args?.component as string || '');
            const exampleType = (args?.type as string || 'all').toLowerCase();
            const component = pieData.components[componentName];

            if (!component) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `Component not found: ${componentName}. Available components: ${Object.keys(pieData.components).join(', ')}`,
                        },
                    ],
                };
            }

            const examples = component.examples;

            if (!examples) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `No Storybook examples found for ${componentName}. You can still use get_component_api to get the component's props and generate code.`,
                        },
                    ],
                };
            }

            // Build response based on requested type
            let response: {
                component: string;
                tagName: string;
                imports: string[];
                basic?: string | null;
                patterns?: Array<{ name: string; description: string; code: string }>;
                variants?: Array<{ name: string; props: Record<string, string> }>;
                storybookUrl: string;
                docsUrl: string;
            } = {
                component: componentName,
                tagName: component.tagName,
                imports: examples.imports || [],
                storybookUrl: `https://webc.pie.design/?path=/story/components-${componentName.replace('pie-', '')}`,
                docsUrl: `https://pie.design/components/${componentName.replace('pie-', '')}/code/`,
            };

            switch (exampleType) {
                case 'basic':
                    response.basic = examples.basic;
                    break;
                case 'patterns':
                    response.patterns = examples.patterns;
                    break;
                case 'variants':
                    response.variants = examples.variants;
                    break;
                case 'all':
                default:
                    response = {
                        ...response,
                        basic: examples.basic,
                        patterns: examples.patterns,
                        variants: examples.variants,
                    };
                    break;
            }

            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(response),
                    },
                ],
            };
        }

        default:
            throw new Error(`Unknown tool: ${name}`);
    }
});

// Helper functions
function toPascalCase(str: string): string {
    return str
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
}

function normalizeComponentName(name: string): string {
    const lower = name.toLowerCase();
    return lower.startsWith('pie-') ? lower : `pie-${lower}`;
}

// Start the server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('PIE MCP Server running on stdio');
}

main().catch(console.error);

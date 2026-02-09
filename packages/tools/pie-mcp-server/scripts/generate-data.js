#!/usr/bin/env node
/**
 * Build-time data aggregation script for PIE MCP Server
 *
 * This script collects data from across the PIE monorepo and aggregates it
 * into a single JSON file that the MCP server can use at runtime.
 *
 * Data sources:
 * - Component custom-elements.json manifests (enriched by cem-plugin-props-enrichment and cem-plugin-defs-enrichment)
 * - Component package.json metadata
 * - Icon metadata from pie-icons
 * - Generated code examples from component API metadata
 * - Framework examples from pie-aperture repository
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateExamples } from './lib/example-generator.js';
import {
    fetchApertureExamplesForComponents,
    shouldSkipApertureFetch,
    createEmptyFrameworkExamples,
} from './lib/aperture-fetcher.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Packages to exclude from component aggregation
const EXCLUDED_PACKAGES = [
    'pie-webc',
    'pie-webc-core',
    'pie-webc-testing'
];

/**
 * Find the monorepo root by looking for packages/components directory
 */
function findMonorepoRoot (startDir) {
    let currentDir = startDir;

    while (currentDir !== path.parse(currentDir).root) {
        const potentialComponentsDir = path.join(currentDir, 'packages', 'components');
        if (fs.existsSync(potentialComponentsDir) && fs.lstatSync(potentialComponentsDir).isDirectory()) {
            return currentDir;
        }
        currentDir = path.dirname(currentDir);
    }

    throw new Error('Could not find the monorepo root.');
}

/**
 * Read and parse JSON file safely
 */
function readJsonFile (filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content);
    } catch {
        return null;
    }
}

/**
 * Extract component class info from custom-elements.json
 * Reads descriptions, defaults, events, and methods from the manifest.
 * Defaults and validValues are pre-resolved by cem-plugin-defs-enrichment.
 */
function extractComponentInfo (manifest) {
    if (!manifest?.modules) return null;

    for (const module of manifest.modules) {
        if (module.declarations) {
            for (const declaration of module.declarations) {
                if (declaration.kind === 'class' && declaration.tagName) {
                    // Get public fields from manifest
                    const publicFields = (declaration.members || [])
                        .filter((m) => m.privacy === 'public' && m.kind === 'field');

                    const properties = publicFields.map((m) => ({
                        name: m.name,
                        type: m.type?.text || m.resolvedType || 'unknown',
                        description: m.description || '',
                        attribute: m.attribute || m.name,
                        default: m.default ?? null,
                        reflects: m.reflects || false,
                        readonly: m.readonly || false,
                    }));

                    // Events from declaration.events
                    const events = (declaration.events || []).map((e) => ({
                        name: e.name,
                        type: e.type?.text || 'CustomEvent',
                        description: e.description || '',
                    }));

                    // Public methods (exclude render* helpers and lifecycle)
                    const methods = (declaration.members || [])
                        .filter((m) => m.kind === 'method' && m.privacy !== 'private' && !m.name.startsWith('render'))
                        .map((m) => ({
                            name: m.name,
                            description: m.description || '',
                            parameters: (m.parameters || []).map((p) => ({
                                name: p.name,
                                type: p.type?.text || 'unknown',
                            })),
                            returnType: m.return?.type?.text || 'void',
                        }));

                    return {
                        tagName: declaration.tagName,
                        className: declaration.name,
                        description: declaration.description || '',
                        slots: declaration.slots || [],
                        properties,
                        events,
                        methods,
                        mixins: declaration.mixins || [],
                        superclass: declaration.superclass || null,
                    };
                }
            }
        }
    }

    return null;
}

/**
 * Extract _pieValidValues from the class declaration in custom-elements.json.
 * These are pre-resolved by cem-plugin-defs-enrichment with keys already
 * mapped to property names.
 */
function extractValidValues (manifest) {
    if (!manifest?.modules) return {};

    for (const module of manifest.modules) {
        for (const declaration of (module.declarations || [])) {
            if (declaration.kind === 'class' && declaration._pieValidValues) {
                return declaration._pieValidValues;
            }
        }
    }

    return {};
}

/**
 * Aggregate all component data
 */
function aggregateComponents (monorepoRoot) {
    const componentsDir = path.join(monorepoRoot, 'packages', 'components');
    const components = {};

    const dirs = fs.readdirSync(componentsDir)
        .filter((dir) => !dir.startsWith('.'))
        .filter((dir) => !EXCLUDED_PACKAGES.includes(dir))
        .filter((dir) => fs.statSync(path.join(componentsDir, dir)).isDirectory());

    for (const dir of dirs) {
        const componentPath = path.join(componentsDir, dir);

        // Read package.json
        const packageJson = readJsonFile(path.join(componentPath, 'package.json'));
        if (!packageJson) continue;

        // Read custom-elements.json
        const manifest = readJsonFile(path.join(componentPath, 'custom-elements.json'));
        const componentInfo = manifest ? extractComponentInfo(manifest) : null;
        const validValues = manifest ? extractValidValues(manifest) : {};

        const componentObj = {
            name: packageJson.name,
            version: packageJson.version,
            description: packageJson.description || '',
            status: packageJson.pieMetadata?.componentStatus || 'unknown',
            replaces: packageJson.pieMetadata?.replaces || null,
            tagName: componentInfo?.tagName || `pie-${dir.replace('pie-', '')}`,
            className: componentInfo?.className || null,
            slots: componentInfo?.slots || [],
            properties: componentInfo?.properties || [],
            events: componentInfo?.events || [],
            methods: componentInfo?.methods || [],
            validValues,
            mixins: componentInfo?.mixins || [],
            installation: `npm install ${packageJson.name}`,
            examples: null,
            // frameworkExamples will be populated asynchronously
            frameworkExamples: null,
        };

        // Generate examples from API metadata
        componentObj.examples = generateExamples(componentObj);

        components[dir] = componentObj;
    }

    return components;
}

/**
 * Fetch framework examples from pie-aperture for all components
 */
async function fetchFrameworkExamples (components) {
    if (shouldSkipApertureFetch()) {
        console.log('  Skipping aperture fetch (SKIP_APERTURE_FETCH=true)\n');
        for (const name of Object.keys(components)) {
            components[name].frameworkExamples = createEmptyFrameworkExamples(name);
        }
        return;
    }

    console.log('  Fetching framework examples from pie-aperture...');

    const componentNames = Object.keys(components);
    const examples = await fetchApertureExamplesForComponents(componentNames);

    let fetchedCount = 0;
    for (const [name, frameworkExamples] of examples) {
        components[name].frameworkExamples = frameworkExamples;

        // Count how many have at least one framework with code
        const hasCode = Object.values(frameworkExamples).some((fw) => fw && typeof fw === 'object' && fw.available && fw.code);
        if (hasCode) fetchedCount++;
    }

    console.log(`  Fetched aperture examples for ${fetchedCount}/${componentNames.length} components\n`);
}

/**
 * Aggregate icon metadata
 */
function aggregateIcons (monorepoRoot) {
    const iconDataPath = path.join(monorepoRoot, 'packages', 'tools', 'pie-icons', 'dist', 'iconData.json');
    const iconData = readJsonFile(iconDataPath);

    if (!iconData) {
        console.warn('Warning: Could not read icon data');
        return { categories: [], count: 0 };
    }

    let totalIcons = 0;
    if (iconData.categories) {
        for (const category of iconData.categories) {
            totalIcons += category.icons?.length || 0;
        }
    }

    return {
        categories: iconData.categories || [],
        count: totalIcons,
    };
}

/**
 * Main aggregation function
 */
async function generateData () {
    console.log('PIE MCP Server - Generating data...\n');

    const monorepoRoot = findMonorepoRoot(__dirname);
    console.log(`Monorepo root: ${monorepoRoot}\n`);

    // Aggregate all data sources
    console.log('Aggregating components...');
    const components = aggregateComponents(monorepoRoot);
    console.log(`  Found ${Object.keys(components).length} components\n`);

    // Fetch framework examples from pie-aperture
    console.log('Fetching framework examples...');
    await fetchFrameworkExamples(components);

    console.log('Aggregating icons...');
    const icons = aggregateIcons(monorepoRoot);
    console.log(`  Found ${icons.count} icons in ${icons.categories.length} categories\n`);

    // Read pie-webc version for metadata
    const webcPackageJson = readJsonFile(path.join(monorepoRoot, 'packages', 'components', 'pie-webc', 'package.json'));

    // Combine into final data structure
    const data = {
        metadata: {
            version: webcPackageJson?.version || 'unknown',
            generatedAt: new Date().toISOString(),
            componentCount: Object.keys(components).length,
            iconCount: icons.count,
        },
        components,
        icons,
    };

    // Write output
    const outputDir = path.join(__dirname, '..', 'generated');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, 'pie-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(data));

    // Count examples
    let generatedExamplesCount = 0;
    let frameworkExamplesCount = 0;
    for (const comp of Object.values(components)) {
        if (comp.examples) {
            if (comp.examples.quickStart) generatedExamplesCount++;
            generatedExamplesCount += comp.examples.variants?.length || 0;
            generatedExamplesCount += comp.examples.slots?.length || 0;
        }
        if (comp.frameworkExamples) {
            const frameworks = ['nextjsV14', 'nextjsV15', 'nuxt', 'vanilla'];
            for (const fw of frameworks) {
                if (comp.frameworkExamples[fw]?.available) {
                    frameworkExamplesCount++;
                }
            }
        }
    }

    // Count events, methods, and enriched descriptions
    let eventsCount = 0;
    let methodsCount = 0;
    let propsWithDescription = 0;
    let totalProps = 0;
    for (const comp of Object.values(components)) {
        eventsCount += comp.events?.length || 0;
        methodsCount += comp.methods?.length || 0;
        for (const prop of (comp.properties || [])) {
            totalProps++;
            if (prop.description) propsWithDescription++;
        }
    }

    // Calculate file size
    const stats = fs.statSync(outputPath);
    const fileSizeKB = (stats.size / 1024).toFixed(1);

    console.log(`Successfully generated data at: ${outputPath}`);
    console.log('\nSummary:');
    console.log(`  - PIE Version: ${data.metadata.version}`);
    console.log(`  - Components: ${data.metadata.componentCount}`);
    console.log(`  - Icons: ${data.metadata.iconCount}`);
    console.log(`  - Events: ${eventsCount}`);
    console.log(`  - Methods: ${methodsCount}`);
    console.log(`  - Generated Examples: ${generatedExamplesCount}`);
    console.log(`  - Framework Examples: ${frameworkExamplesCount}`);
    console.log(`  - Property Descriptions: ${propsWithDescription}/${totalProps}`);
    console.log(`  - Output Size: ${fileSizeKB} KB`);
}

generateData().catch(console.error);

#!/usr/bin/env node
/**
 * Build-time data aggregation script for PIE MCP Server
 *
 * This script collects data from across the PIE monorepo and aggregates it
 * into a single JSON file that the MCP server can use at runtime.
 *
 * Data sources:
 * - Component custom-elements.json manifests (includes JSDoc descriptions via CEM plugin)
 * - Component package.json metadata
 * - Icon metadata from pie-icons
 * - Real examples from Storybook stories
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Packages to exclude from component aggregation
const EXCLUDED_PACKAGES = [
    'pie-webc',
    'pie-webc-core',
    'pie-webc-testing'
];

/**
 * Extract real code examples from Storybook stories
 * These are battle-tested, production-ready examples
 */
function extractStorybookExamples(monorepoRoot, componentName) {
    const storiesPath = path.join(
        monorepoRoot,
        'apps/pie-storybook/stories',
        `${componentName}.stories.ts`
    );

    const content = readFile(storiesPath);
    if (!content) return null;

    const examples = {
        basic: null,
        variants: [],
        patterns: [],
        imports: [],
    };

    // Extract import statements to understand dependencies
    const importMatches = content.matchAll(/import\s+(?:'|")([^'"]+)(?:'|");/g);
    for (const match of importMatches) {
        if (match[1].includes('@justeattakeaway/pie-')) {
            examples.imports.push(match[1]);
        }
    }

    // Extract icon imports
    const iconImportMatches = content.matchAll(/import\s+(?:'|")(@justeattakeaway\/pie-icons-webc\/dist\/[^'"]+)(?:'|");/g);
    for (const match of iconImportMatches) {
        examples.imports.push(match[1]);
    }

    // Remove duplicates
    examples.imports = [...new Set(examples.imports)];

    // Extract the main Template function - this is the primary example
    const templateMatch = content.match(/(?:const|function)\s+Template[^=]*=\s*\([^)]*\)\s*(?:=>)?\s*html`([\s\S]*?)`;/);
    if (templateMatch) {
        examples.basic = cleanHtmlTemplate(templateMatch[1]);
    }

    // Look for named templates that show specific patterns
    const namedTemplateRegex = /const\s+(\w+Template)\s*[^=]*=\s*(?:\([^)]*\)\s*(?:=>)?\s*)?html`([\s\S]*?)`;/g;
    let templateMatch2;
    while ((templateMatch2 = namedTemplateRegex.exec(content)) !== null) {
        const [, name, template] = templateMatch2;
        // Skip the basic Template, include others as patterns
        if (name !== 'Template' && !name.includes('Base')) {
            const cleanName = name
                .replace('Template', '')
                .replace(/([A-Z])/g, ' $1')
                .trim();
            
            const cleanedTemplate = cleanHtmlTemplate(template);
            if (cleanedTemplate && cleanedTemplate.length > 20) {
                examples.patterns.push({
                    name: cleanName,
                    description: getPatternDescription(name),
                    code: cleanedTemplate
                });
            }
        }
    }

    // Extract exported story variants (e.g., export const Primary = ...)
    const storyExportRegex = /export\s+const\s+(\w+)\s*=\s*create\w*Story[^(]*\((?:[^,]+,\s*)?\{([^}]*)\}/g;
    let storyMatch;
    while ((storyMatch = storyExportRegex.exec(content)) !== null) {
        const [, storyName, propsStr] = storyMatch;
        // Parse the props if they exist
        const props = parsePropsString(propsStr);
        if (Object.keys(props).length > 0 || storyName === 'Default') {
            examples.variants.push({
                name: storyName,
                props
            });
        }
    }

    // Limit variants to avoid bloat
    if (examples.variants.length > 10) {
        examples.variants = examples.variants.slice(0, 10);
    }

    // Limit patterns to avoid bloat
    if (examples.patterns.length > 5) {
        examples.patterns = examples.patterns.slice(0, 5);
    }

    return examples;
}

/**
 * Clean up a Lit HTML template to be more readable/usable
 */
function cleanHtmlTemplate(template) {
    if (!template) return null;

    let cleaned = template
        // Remove Lit directives and interpolations that won't make sense outside Storybook
        .replace(/\$\{ifDefined\(([^)]+)\)\}/g, '${$1}')
        .replace(/\$\{sanitizeAndRenderHTML\([^)]+\)\}/g, '<!-- content -->')
        .replace(/\?\s*"\$\{[^}]+\}"/g, '')
        .replace(/\$\{[^}]*nothing[^}]*\}/g, '')
        // Clean up event handlers - show them but simplify
        .replace(/@(\w+)="\$\{[^}]+\}"/g, '@$1="handleEvent"')
        // Clean up conditional rendering
        .replace(/\$\{[^}]*\?\s*html`([^`]*)`\s*:\s*nothing\s*\}/g, '$1')
        // Remove .property bindings syntax explanation
        .replace(/\.(\w+)="\$\{([^}]+)\}"/g, '$1="${$2}"')
        // Clean up boolean attributes
        .replace(/\?"(\w+)"="\$\{([^}]+)\}"/g, '$1')
        // Remove remaining complex interpolations
        .replace(/\$\{[^}]{50,}\}/g, '<!-- dynamic content -->')
        // Clean up whitespace
        .replace(/^\s*\n/gm, '')
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .trim();

    // If still too complex, try to extract just the main component tag
    if (cleaned.includes('${') && cleaned.length > 500) {
        const componentMatch = cleaned.match(/<pie-[^>]+>[\s\S]*?<\/pie-[^>]+>/);
        if (componentMatch) {
            cleaned = componentMatch[0];
        }
    }

    return cleaned;
}

/**
 * Parse a props string from Storybook story definition
 */
function parsePropsString(propsStr) {
    const props = {};
    if (!propsStr) return props;

    // Match key: value or key: 'value' patterns
    const propMatches = propsStr.matchAll(/(\w+):\s*(?:'([^']*)'|"([^"]*)"|(\d+)|(\w+))/g);
    for (const match of propMatches) {
        const [, key, strVal1, strVal2, numVal, otherVal] = match;
        const value = strVal1 || strVal2 || numVal || otherVal;
        if (value && !key.startsWith('_')) {
            props[key] = value;
        }
    }

    return props;
}

/**
 * Get a description for a pattern based on its name
 */
function getPatternDescription(templateName) {
    const descriptions = {
        'FormTemplate': 'Complete form integration example',
        'FormStoryTemplate': 'Form inside modal pattern',
        'ExampleFormTemplate': 'Full form with multiple inputs',
        'WithLabelTemplate': 'Component with associated label',
        'AnchorTemplate': 'Button rendered as anchor element',
        'ScrollablePageStoryTemplate': 'Modal with scroll locking',
        'LoadingStateStoryTemplate': 'Loading state pattern',
        'SlottedImageContentStoryTemplate': 'Using the image slot',
        'SlottedHeaderContentTemplate': 'Custom header content',
        'SlottedFooterContentStoryTemplate': 'Custom footer content',
    };
    return descriptions[templateName] || `${templateName.replace('Template', '')} example`;
}

/**
 * Find the monorepo root by looking for packages/components directory
 */
function findMonorepoRoot(startDir) {
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
function readJsonFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content);
    } catch {
        return null;
    }
}

/**
 * Read file content safely
 */
function readFile(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf-8');
    } catch {
        return null;
    }
}

/**
 * Extract component class info from custom-elements.json
 * Now reads descriptions directly from the manifest (added by cem-plugin-interface-jsdoc)
 */
function extractComponentInfo(manifest) {
    if (!manifest?.modules) return null;

    for (const module of manifest.modules) {
        if (module.declarations) {
            for (const declaration of module.declarations) {
                if (declaration.kind === 'class' && declaration.tagName) {
                    // Get public fields from manifest - descriptions are now included!
                    const publicFields = (declaration.members || [])
                        .filter(m => m.privacy === 'public' && m.kind === 'field');

                    const members = publicFields.map(m => ({
                        name: m.name,
                        type: m.type?.text || m.resolvedType || 'unknown',
                        description: m.description || '',
                        attribute: m.attribute || m.name
                    }));

                    return {
                        tagName: declaration.tagName,
                        className: declaration.name,
                        description: declaration.description || '',
                        slots: declaration.slots || [],
                        members,
                        mixins: declaration.mixins || [],
                        superclass: declaration.superclass || null
                    };
                }
            }
        }
    }

    return null;
}

/**
 * Extract valid values for props from the defs module in custom-elements.json
 * e.g., sizes = ['small', 'medium', 'large']
 */
function extractValidValues(manifest) {
    if (!manifest?.modules) return {};

    const validValues = {};

    for (const module of manifest.modules) {
        if (module.path?.includes('defs') && module.declarations) {
            for (const declaration of module.declarations) {
                // Look for exported const arrays like: export const sizes = ['a', 'b'] as const
                if (declaration.kind === 'variable' && declaration.type?.text?.startsWith('[')) {
                    // Parse the array from the type text: "['small', 'medium', 'large']"
                    const arrayMatch = declaration.type.text.match(/\[(.*)\]/);
                    if (arrayMatch) {
                        const values = arrayMatch[1]
                            .split(',')
                            .map(v => v.trim().replace(/['"]/g, ''))
                            .filter(Boolean);
                        if (values.length > 0) {
                            validValues[declaration.name] = values;
                        }
                    }
                }
            }
        }
    }

    return validValues;
}

/**
 * Aggregate all component data
 */
function aggregateComponents(monorepoRoot) {
    const componentsDir = path.join(monorepoRoot, 'packages', 'components');
    const components = {};

    const dirs = fs.readdirSync(componentsDir)
        .filter(dir => !dir.startsWith('.'))
        .filter(dir => !EXCLUDED_PACKAGES.includes(dir))
        .filter(dir => fs.statSync(path.join(componentsDir, dir)).isDirectory());

    for (const dir of dirs) {
        const componentPath = path.join(componentsDir, dir);

        // Read package.json
        const packageJson = readJsonFile(path.join(componentPath, 'package.json'));
        if (!packageJson) continue;

        // Read custom-elements.json (now includes descriptions from CEM plugin)
        const manifest = readJsonFile(path.join(componentPath, 'custom-elements.json'));
        const componentInfo = manifest ? extractComponentInfo(manifest) : null;
        const validValues = manifest ? extractValidValues(manifest) : {};

        // Extract real examples from Storybook stories
        const examples = extractStorybookExamples(monorepoRoot, dir);

        components[dir] = {
            name: packageJson.name,
            version: packageJson.version,
            description: packageJson.description || '',
            status: packageJson.pieMetadata?.componentStatus || 'unknown',
            replaces: packageJson.pieMetadata?.replaces || null,
            tagName: componentInfo?.tagName || `pie-${dir.replace('pie-', '')}`,
            className: componentInfo?.className || null,
            slots: componentInfo?.slots || [],
            properties: componentInfo?.members || [],
            validValues,
            mixins: componentInfo?.mixins || [],
            installation: `npm install ${packageJson.name}`,
            examples
        };
    }

    return components;
}

/**
 * Aggregate icon metadata
 */
function aggregateIcons(monorepoRoot) {
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
        count: totalIcons
    };
}

/**
 * Main aggregation function
 */
async function generateData() {
    console.log('PIE MCP Server - Generating data...\n');

    const monorepoRoot = findMonorepoRoot(__dirname);
    console.log(`Monorepo root: ${monorepoRoot}\n`);

    // Aggregate all data sources
    console.log('Aggregating components...');
    const components = aggregateComponents(monorepoRoot);
    console.log(`  Found ${Object.keys(components).length} components\n`);

    console.log('Aggregating icons...');
    const icons = aggregateIcons(monorepoRoot);
    console.log(`  Found ${icons.count} icons in ${icons.categories.length} categories\n`);

    // Read pie-webc version for metadata
    const webcPackageJson = readJsonFile(
        path.join(monorepoRoot, 'packages', 'components', 'pie-webc', 'package.json')
    );

    // Combine into final data structure
    const data = {
        metadata: {
            version: webcPackageJson?.version || 'unknown',
            generatedAt: new Date().toISOString(),
            componentCount: Object.keys(components).length,
            iconCount: icons.count
        },
        components,
        icons
    };

    // Write output
    const outputDir = path.join(__dirname, '..', 'generated');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, 'pie-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(data));

    // Count examples
    let examplesCount = 0;
    for (const comp of Object.values(components)) {
        if (comp.examples) {
            if (comp.examples.basic) examplesCount++;
            examplesCount += (comp.examples.patterns?.length || 0);
            examplesCount += (comp.examples.variants?.length || 0);
        }
    }

    console.log(`Successfully generated data at: ${outputPath}`);
    console.log(`\nSummary:`);
    console.log(`  - PIE Version: ${data.metadata.version}`);
    console.log(`  - Components: ${data.metadata.componentCount}`);
    console.log(`  - Icons: ${data.metadata.iconCount}`);
    console.log(`  - Real Examples: ${examplesCount}`);
}

generateData().catch(console.error);

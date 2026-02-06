/**
 * AST-based Storybook story parser using TypeScript Compiler API
 *
 * This module extracts template functions and html`` content from Storybook
 * story files using AST parsing instead of regex, which handles complex
 * patterns like destructuring, computed values, and template composition.
 */

import ts from 'typescript';
import { cleanLitTemplate } from './template-cleaner.js';

/**
 * Parse a Storybook story file and extract templates and examples
 * @param {string} content - The TypeScript/JavaScript content of the story file
 * @param {string} componentName - The name of the component (e.g., 'pie-modal')
 * @returns {object} Extracted examples data
 */
export function parseStorybookFile (content, componentName) {
    const sourceFile = ts.createSourceFile(
        'story.ts',
        content,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TS,
    );

    const examples = {
        basic: null,
        variants: [],
        patterns: [],
        imports: [],
    };

    // Extract imports
    examples.imports = extractImports(sourceFile);

    // Extract all template functions
    const templates = extractTemplates(sourceFile);

    // Find the "base" template - typically named Template or BaseStoryTemplate
    const baseTemplate = findBaseTemplate(templates, componentName);
    if (baseTemplate) {
        examples.basic = cleanLitTemplate(baseTemplate.htmlContent, componentName);
    }

    // Extract named templates as patterns (excluding the base template)
    for (const [name, template] of Object.entries(templates)) {
        if (isPatternTemplate(name, baseTemplate?.name)) {
            const cleanName = formatTemplateName(name);
            const cleanedCode = cleanLitTemplate(template.htmlContent, componentName);

            if (cleanedCode && cleanedCode.length > 20) {
                examples.patterns.push({
                    name: cleanName,
                    description: getPatternDescription(name),
                    code: cleanedCode,
                });
            }
        }
    }

    // Extract exported story variants
    examples.variants = extractStoryVariants(sourceFile);

    // Limit arrays to prevent bloat
    if (examples.variants.length > 10) {
        examples.variants = examples.variants.slice(0, 10);
    }
    if (examples.patterns.length > 5) {
        examples.patterns = examples.patterns.slice(0, 5);
    }

    return examples;
}

/**
 * Extract PIE-related imports from the source file
 */
function extractImports (sourceFile) {
    const imports = new Set();

    ts.forEachChild(sourceFile, (node) => {
        if (ts.isImportDeclaration(node) && node.moduleSpecifier) {
            const modulePath = node.moduleSpecifier.getText(sourceFile).replace(/['"]/g, '');
            if (modulePath.includes('@justeattakeaway/pie-')) {
                imports.add(modulePath);
            }
        }
    });

    return [...imports];
}

/**
 * Extract all template functions from the source file
 * Handles various patterns:
 * - const Template = (props) => html`...`
 * - const Template = ({ size, variant }) => html`...`
 * - const Template = (props) => { return html`...`; }
 * - function Template(props) { return html`...`; }
 */
function extractTemplates (sourceFile) {
    const templates = {};

    function visit (node) {
        // Variable declaration: const Template = ...
        if (ts.isVariableStatement(node)) {
            for (const declaration of node.declarationList.declarations) {
                if (ts.isIdentifier(declaration.name) && declaration.initializer) {
                    const name = declaration.name.text;
                    const htmlContent = extractHtmlFromExpression(declaration.initializer, sourceFile);
                    if (htmlContent) {
                        templates[name] = { name, htmlContent };
                    }
                }
            }
        }

        // Function declaration: function Template(props) { ... }
        if (ts.isFunctionDeclaration(node) && node.name) {
            const name = node.name.text;
            const htmlContent = extractHtmlFromFunctionBody(node.body, sourceFile);
            if (htmlContent) {
                templates[name] = { name, htmlContent };
            }
        }

        ts.forEachChild(node, visit);
    }

    ts.forEachChild(sourceFile, visit);
    return templates;
}

/**
 * Extract html`` template literal content from an expression
 */
function extractHtmlFromExpression (node, sourceFile) {
    if (!node) return null;

    // Arrow function: (props) => html`...` or ({ size }) => html`...`
    if (ts.isArrowFunction(node)) {
        // Direct template literal body: (props) => html`...`
        if (ts.isTaggedTemplateExpression(node.body)) {
            return extractTaggedTemplate(node.body, sourceFile);
        }

        // Block body: (props) => { return html`...`; }
        if (ts.isBlock(node.body)) {
            return extractHtmlFromFunctionBody(node.body, sourceFile);
        }
    }

    // Function expression: function(props) { return html`...`; }
    if (ts.isFunctionExpression(node)) {
        return extractHtmlFromFunctionBody(node.body, sourceFile);
    }

    // Type assertion: (props) => html`...` as TemplateResult
    if (ts.isAsExpression(node)) {
        return extractHtmlFromExpression(node.expression, sourceFile);
    }

    return null;
}

/**
 * Extract html`` from a function body (block)
 */
function extractHtmlFromFunctionBody (body, sourceFile) {
    if (!body || !ts.isBlock(body)) return null;

    let result = null;

    function visit (node) {
        // Return statement: return html`...`
        if (ts.isReturnStatement(node) && node.expression) {
            if (ts.isTaggedTemplateExpression(node.expression)) {
                result = extractTaggedTemplate(node.expression, sourceFile);
            }
        }
        ts.forEachChild(node, visit);
    }

    visit(body);
    return result;
}

/**
 * Extract the template string from a tagged template expression (html`...`)
 */
function extractTaggedTemplate (node, sourceFile) {
    if (!ts.isTaggedTemplateExpression(node)) return null;

    // Check if the tag is 'html'
    const tag = node.tag.getText(sourceFile);
    if (tag !== 'html') return null;

    const { template } = node;

    // Simple template literal: html`<div>...</div>`
    if (ts.isNoSubstitutionTemplateLiteral(template)) {
        return template.text;
    }

    // Template literal with expressions: html`<div>${foo}</div>`
    if (ts.isTemplateExpression(template)) {
        let result = template.head.text;

        for (const span of template.templateSpans) {
            // Get the expression text
            const expressionText = span.expression.getText(sourceFile);
            result += `\${${expressionText}}`;
            result += span.literal.text;
        }

        return result;
    }

    return null;
}

/**
 * Find the base template for the component
 * Priority: Template, BaseStoryTemplate, [ComponentName]Template
 */
function findBaseTemplate (templates, componentName) {
    const cleanName = componentName.replace('pie-', '').replace(/-/g, '');

    // Priority order for base template detection
    const baseNames = [
        'Template',
        'BaseStoryTemplate',
        'BaseTemplate',
        `${toPascalCase(cleanName)}Template`,
    ];

    for (const name of baseNames) {
        if (templates[name]) {
            return templates[name];
        }
    }

    // Fallback: find any template that looks like a base template
    for (const [name, template] of Object.entries(templates)) {
        if (name === 'Template' || name.endsWith('Template') && !name.includes('Story')) {
            // Check if this template contains the component tag
            if (template.htmlContent?.includes(`<${componentName}`)) {
                return template;
            }
        }
    }

    return null;
}

/**
 * Check if a template should be included as a pattern
 */
function isPatternTemplate (name, baseTemplateName) {
    // Skip the base template
    if (name === baseTemplateName) return false;

    // Skip internal/helper templates
    if (name.startsWith('_')) return false;
    if (name.startsWith('create')) return false;
    if (name === 'Template') return false;
    if (name === 'BaseStoryTemplate') return false;
    if (name === 'BaseTemplate') return false;

    // Include templates that contain "Template" in their name
    return name.includes('Template');
}

/**
 * Format a template name for display
 */
function formatTemplateName (name) {
    return name
        .replace('Template', '')
        .replace('Story', '')
        .replace(/([A-Z])/g, ' $1')
        .trim();
}

/**
 * Get a description for a pattern based on its name
 */
function getPatternDescription (templateName) {
    const descriptions = {
        FormTemplate: 'Complete form integration example',
        FormStoryTemplate: 'Form inside modal pattern',
        ExampleFormTemplate: 'Full form with multiple inputs',
        WithLabelTemplate: 'Component with associated label',
        AnchorTemplate: 'Button rendered as anchor element',
        ScrollablePageStoryTemplate: 'Modal with scroll locking',
        LoadingStateStoryTemplate: 'Loading state pattern',
        SlottedImageContentStoryTemplate: 'Using the image slot',
        SlottedHeaderContentTemplate: 'Custom header content',
        SlottedFooterContentStoryTemplate: 'Custom footer content',
    };
    return descriptions[templateName] || `${formatTemplateName(templateName)} example`;
}

/**
 * Extract story variants from exported story definitions
 */
function extractStoryVariants (sourceFile) {
    const variants = [];

    function visit (node) {
        // Look for: export const Primary = createStory(...)({ ... })
        if (ts.isVariableStatement(node)) {
            const isExported = node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);

            if (isExported) {
                for (const declaration of node.declarationList.declarations) {
                    if (ts.isIdentifier(declaration.name) && declaration.initializer) {
                        const storyName = declaration.name.text;
                        const props = extractStoryProps(declaration.initializer, sourceFile);

                        if (props || storyName === 'Default') {
                            variants.push({
                                name: storyName,
                                props: props || {},
                            });
                        }
                    }
                }
            }
        }

        ts.forEachChild(node, visit);
    }

    ts.forEachChild(sourceFile, visit);
    return variants;
}

/**
 * Extract props from a story definition
 * Handles: createStory(Template, defaultArgs)({ size: 'large' })
 */
function extractStoryProps (node, sourceFile) {
    // Handle call expression chain: createStory(...)({ ... })
    if (ts.isCallExpression(node)) {
        // Check if first argument is an object literal
        const firstArg = node.arguments[0];
        if (firstArg && ts.isObjectLiteralExpression(firstArg)) {
            return parseObjectLiteral(firstArg, sourceFile);
        }

        // Check if this is a curried call: createStory(...)({ ... })
        if (ts.isCallExpression(node.expression)) {
            const innerArg = node.arguments[0];
            if (innerArg && ts.isObjectLiteralExpression(innerArg)) {
                return parseObjectLiteral(innerArg, sourceFile);
            }
        }
    }

    return null;
}

/**
 * Parse an object literal expression to extract props
 */
function parseObjectLiteral (node, sourceFile) {
    const props = {};

    for (const property of node.properties) {
        if (ts.isPropertyAssignment(property) && ts.isIdentifier(property.name)) {
            const key = property.name.text;
            if (key.startsWith('_')) continue; // Skip private props

            const value = getPropertyValue(property.initializer, sourceFile);
            if (value !== undefined) {
                props[key] = value;
            }
        }
    }

    return Object.keys(props).length > 0 ? props : null;
}

/**
 * Get the value from a property initializer
 */
function getPropertyValue (node, sourceFile) {
    if (ts.isStringLiteral(node)) {
        return node.text;
    }
    if (ts.isNumericLiteral(node)) {
        return node.text;
    }
    if (node.kind === ts.SyntaxKind.TrueKeyword) {
        return 'true';
    }
    if (node.kind === ts.SyntaxKind.FalseKeyword) {
        return 'false';
    }
    if (ts.isIdentifier(node)) {
        return node.text;
    }
    return undefined;
}

/**
 * Convert a string to PascalCase
 */
function toPascalCase (str) {
    return str
        .split(/[-_\s]+/)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join('');
}

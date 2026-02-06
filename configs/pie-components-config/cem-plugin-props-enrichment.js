/**
 * CEM Plugin: Props Interface Enrichment
 *
 * Enriches class field members in the Custom Elements Manifest with
 * descriptions and types extracted from the component's Props interface
 * in defs.ts.
 *
 * PIE components define their public API in a Props interface (e.g., ButtonProps)
 * with rich JSDoc descriptions and TypeScript types. However, the CEM analyzer
 * doesn't transfer this metadata to the class field members because PIE uses
 * custom decorators (@safeCustomElement) and mixin chains that the analyzer
 * doesn't fully understand.
 *
 * This plugin bridges that gap by:
 * 1. Collecting JSDoc descriptions and types from exported Props interfaces
 *    during the collectPhase (runs for all modules first)
 * 2. Applying them to class field members during the packageLinkPhase
 *    (runs once after all modules are processed)
 *
 * @see https://custom-elements-manifest.open-wc.org/analyzer/plugins/authoring/
 */

/**
 * Extract JSDoc description from an AST node's leading comments.
 *
 * @param {import('typescript').Node} node - The AST node
 * @param {import('typescript').SourceFile} sourceFile - The source file
 * @returns {string} The cleaned JSDoc description, or empty string
 */
function extractJsDocDescription (node, sourceFile) {
    const fullText = sourceFile.getFullText();
    const start = node.getFullStart();
    const declarationStart = node.getStart(sourceFile);
    const leadingText = fullText.substring(start, declarationStart);

    // Match JSDoc comment block: /** ... */ (must be double-asterisk)
    const jsdocMatch = leadingText.match(/\/\*\*\s*([\s\S]*?)\s*\*\//);
    if (!jsdocMatch) return '';

    const rawComment = jsdocMatch[1];

    // Clean up the JSDoc:
    // - Remove leading * on each line
    // - Skip @tags (like @default)
    // - Join lines and trim
    return rawComment
        .split('\n')
        .map((line) => line.replace(/^\s*\*\s?/, '').trim())
        .filter((line) => !line.startsWith('@'))
        .join(' ')
        .trim();
}

/**
 * Extract the type text from a property signature's type annotation,
 * simplifying common patterns to primitive types.
 *
 * @param {import('typescript')} ts - TypeScript instance from the analyzer
 * @param {import('typescript').PropertySignature} member - The property signature node
 * @param {import('typescript').SourceFile} sourceFile - The source file
 * @returns {string} The resolved type string, or empty string
 */
function extractPropertyType (ts, member, sourceFile) {
    if (!member.type) return '';

    const typeText = member.type.getText(sourceFile);

    // typeof sizes[number] → string (the valid values are captured separately)
    if (typeText.startsWith('typeof ') && typeText.endsWith('[number]')) {
        return 'string';
    }

    return typeText;
}

export default function propsEnrichmentPlugin () {
    return {
        name: 'cem-plugin-props-enrichment',

        collectPhase ({ ts, node, context }) {
            // Initialize storage on first call
            if (!context._propsEnrichment) {
                context._propsEnrichment = {
                    // Map of interface name → Map of prop name → { description, type }
                    interfaces: new Map(),
                    // The Props interface name referenced by DefaultProps
                    defaultPropsTarget: null,
                };
            }

            const sourceFile = node.getSourceFile();
            const filePath = sourceFile.fileName;

            // Only process defs files
            if (!filePath.includes('/defs')) return;

            // Look for interfaces and type aliases
            const isInterface = ts.isInterfaceDeclaration(node);
            const isTypeAlias = ts.isTypeAliasDeclaration(node);

            if (!isInterface && !isTypeAlias) return;

            const nodeName = node.name.getText(sourceFile);

            // Check for DefaultProps type alias:
            //   export type DefaultProps = ComponentDefaultProps<FooProps, ...>
            // This tells us which interface is the main component Props
            if (isTypeAlias && nodeName === 'DefaultProps') {
                const typeNode = node.type;
                if (typeNode && ts.isTypeReferenceNode(typeNode) && typeNode.typeArguments?.length > 0) {
                    const firstArg = typeNode.typeArguments[0];
                    if (ts.isTypeReferenceNode(firstArg) && ts.isIdentifier(firstArg.typeName)) {
                        context._propsEnrichment.defaultPropsTarget = firstArg.typeName.getText(sourceFile);
                    }
                }
                return;
            }

            const isExported = node.modifiers?.some(
                (m) => m.kind === ts.SyntaxKind.ExportKeyword,
            );
            if (!isExported) return;

            if (!nodeName.endsWith('Props') || nodeName === 'DefaultProps') return;

            // Get property members from the declaration
            let members = [];
            if (isInterface) {
                members = node.members || [];
            } else if (isTypeAlias && node.type && ts.isTypeLiteralNode(node.type)) {
                // export type FooProps = { ... }
                members = node.type.members || [];
            }

            if (members.length === 0) return;

            // Extract property metadata from the members
            const propsMap = new Map();

            for (const member of members) {
                if (!ts.isPropertySignature(member)) continue;

                const name = member.name?.getText(sourceFile)?.replace(/\?$/, '');
                if (!name) continue;

                const description = extractJsDocDescription(member, sourceFile);
                const type = extractPropertyType(ts, member, sourceFile);

                propsMap.set(name, { description, type });
            }

            if (propsMap.size > 0) {
                context._propsEnrichment.interfaces.set(nodeName, propsMap);
            }
        },

        packageLinkPhase ({ customElementsManifest, context }) {
            if (!context._propsEnrichment) return;

            const { interfaces, defaultPropsTarget } = context._propsEnrichment;
            if (interfaces.size === 0) return;

            // Find the best Props interface to use for enrichment
            let propsData = null;

            // Strategy 1: Use the interface referenced by DefaultProps
            if (defaultPropsTarget && interfaces.has(defaultPropsTarget)) {
                propsData = interfaces.get(defaultPropsTarget);
            }

            // Strategy 2: Pick the exported interface with the most members,
            // skipping Extended*/Base*/Internal* prefixed helper interfaces
            if (!propsData) {
                let bestName = null;
                let bestSize = 0;

                for (const [name, data] of interfaces) {
                    if (name.startsWith('Extended') || name.startsWith('Base') || name.startsWith('Internal')) continue;
                    if (data.size > bestSize) {
                        bestSize = data.size;
                        bestName = name;
                    }
                }

                if (bestName) {
                    propsData = interfaces.get(bestName);
                }
            }

            if (!propsData) return;

            // Enrich class field members across all modules in the manifest
            for (const mod of (customElementsManifest.modules || [])) {
                for (const declaration of (mod.declarations || [])) {
                    if (declaration.kind !== 'class') continue;

                    for (const member of (declaration.members || [])) {
                        if (member.kind !== 'field' || member.privacy !== 'public') continue;

                        const enrichment = propsData.get(member.name);
                        if (!enrichment) continue;

                        // Only fill in missing data — don't overwrite existing values
                        if (!member.description && enrichment.description) {
                            member.description = enrichment.description;
                        }

                        if ((!member.type || !member.type.text) && enrichment.type) {
                            member.type = { text: enrichment.type };
                        }
                    }
                }
            }
        },
    };
}

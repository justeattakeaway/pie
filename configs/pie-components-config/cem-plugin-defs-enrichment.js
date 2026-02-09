/**
 * CEM Plugin: Defs Enrichment
 *
 * Enriches the Custom Elements Manifest with structured validValues arrays
 * and resolved default property values, extracted from the component's
 * defs.ts file using the TypeScript AST.
 *
 * PIE components define their valid values as `export const X = [...] as const`
 * and their defaults as `export const defaultProps = { ... }`. The standard CEM
 * analyzer serialises these as raw strings which are fragile to parse (multiline
 * arrays, comments, template expressions all break regex-based parsing).
 *
 * This plugin bridges that gap by:
 * 1. Collecting validValues arrays and defaultProps key-value pairs from the
 *    AST during collectPhase (runs for every module)
 * 2. Writing `_pieValidValues` on the class declaration and applying defaults
 *    to class field members during packageLinkPhase (runs once after all
 *    modules are processed)
 *
 * @see https://custom-elements-manifest.open-wc.org/analyzer/plugins/authoring/
 */

export default function defsEnrichmentPlugin () {
    return {
        name: 'cem-plugin-defs-enrichment',

        collectPhase ({ ts, node, context }) {
            // Initialize storage on first call
            if (!context._defsEnrichment) {
                context._defsEnrichment = {
                    // Map of array name → string[] values
                    // e.g. { sizes: ['small', 'medium', 'large'] }
                    validValues: new Map(),
                    // Map of prop name → string value
                    // e.g. { size: 'medium', disabled: 'false' }
                    defaultProps: new Map(),
                };
            }

            const sourceFile = node.getSourceFile();
            const filePath = sourceFile.fileName;

            // Only process defs files
            if (!filePath.includes('/defs')) return;

            // We only care about variable declarations
            if (!ts.isVariableStatement(node)) return;

            const isExported = node.modifiers?.some(
                (m) => m.kind === ts.SyntaxKind.ExportKeyword,
            );
            if (!isExported) return;

            for (const declaration of node.declarationList.declarations) {
                if (!ts.isIdentifier(declaration.name)) continue;

                const varName = declaration.name.getText(sourceFile);

                // ── Extract validValues arrays ──────────────────────────
                // Pattern: export const X = [...] as const
                if (varName !== 'defaultProps') {
                    const values = extractArrayValues(ts, declaration, sourceFile);
                    if (values && values.length > 0) {
                        context._defsEnrichment.validValues.set(varName, values);
                    }
                    continue;
                }

                // ── Extract defaultProps ────────────────────────────────
                // Pattern: export const defaultProps = { key: value, ... }
                const defaults = extractDefaultPropsValues(ts, declaration, sourceFile);
                if (defaults) {
                    for (const [key, value] of defaults) {
                        context._defsEnrichment.defaultProps.set(key, value);
                    }
                }
            }
        },

        packageLinkPhase ({ customElementsManifest, context }) {
            if (!context._defsEnrichment) return;

            const { validValues, defaultProps } = context._defsEnrichment;

            for (const mod of (customElementsManifest.modules || [])) {
                for (const declaration of (mod.declarations || [])) {
                    if (declaration.kind !== 'class') continue;

                    const members = declaration.members || [];
                    const publicFields = members.filter(
                        (m) => m.kind === 'field' && m.privacy === 'public',
                    );

                    // ── Apply defaults to class field members ───────────
                    for (const member of publicFields) {
                        if (member.default == null && defaultProps.has(member.name)) {
                            member.default = defaultProps.get(member.name);
                        }
                    }

                    // ── Build _pieValidValues (mapped to property names) ─
                    if (validValues.size > 0) {
                        const propsByName = new Map(
                            publicFields.map((m) => [m.name, m]),
                        );

                        const mapped = {};
                        for (const [arrayName, values] of validValues) {
                            const propName = resolvePropertyName(arrayName, propsByName);
                            if (propName) {
                                mapped[propName] = values;
                            }
                        }

                        if (Object.keys(mapped).length > 0) {
                            declaration._pieValidValues = mapped;
                        }
                    }
                }
            }
        },
    };
}

/**
 * Extract string literal values from an `as const` array expression.
 *
 * Handles:
 *   export const sizes = ['small', 'medium', 'large'] as const;
 *
 * AST shape: VariableDeclaration → AsExpression → ArrayLiteralExpression → StringLiteral[]
 *
 * @param {import('typescript')} ts
 * @param {import('typescript').VariableDeclaration} declaration
 * @param {import('typescript').SourceFile} sourceFile
 * @returns {string[] | null}
 */
function extractArrayValues (ts, declaration, sourceFile) {
    if (!declaration.initializer) return null;

    // Unwrap `[...] as const` → the array is inside an AsExpression
    let arrayExpr = declaration.initializer;
    if (ts.isAsExpression(arrayExpr)) {
        arrayExpr = arrayExpr.expression;
    }

    if (!ts.isArrayLiteralExpression(arrayExpr)) return null;

    const values = [];
    for (const element of arrayExpr.elements) {
        if (ts.isStringLiteral(element)) {
            values.push(element.text);
        } else {
            // Non-string element (numeric, identifier, etc.) — skip this array
            return null;
        }
    }

    return values;
}

/**
 * Extract key-value pairs from a `defaultProps` object literal.
 *
 * Handles simple literal values (string, number, boolean) and skips
 * identifier references (e.g. `leadingAction: defaultActionButtonProps`).
 *
 * @param {import('typescript')} ts
 * @param {import('typescript').VariableDeclaration} declaration
 * @param {import('typescript').SourceFile} sourceFile
 * @returns {Map<string, string> | null}
 */
function extractDefaultPropsValues (ts, declaration, sourceFile) {
    if (!declaration.initializer) return null;

    let objectExpr = declaration.initializer;

    // Handle `{ ... } as Type` or `{ ... } satisfies Type`
    if (ts.isAsExpression(objectExpr) || ts.isSatisfiesExpression?.(objectExpr)) {
        objectExpr = objectExpr.expression;
    }

    if (!ts.isObjectLiteralExpression(objectExpr)) return null;

    const defaults = new Map();

    for (const prop of objectExpr.properties) {
        if (!ts.isPropertyAssignment(prop)) continue;

        const key = prop.name?.getText(sourceFile);
        if (!key) continue;

        const value = extractLiteralValue(ts, prop.initializer);
        if (value !== undefined) {
            defaults.set(key, value);
        }
        // Skip identifier references (e.g. defaultActionButtonProps) — they
        // point to complex objects that can't be represented as simple strings.
    }

    return defaults;
}

/**
 * Extract a simple literal value from an AST node, returning it as a string.
 *
 * @param {import('typescript')} ts
 * @param {import('typescript').Expression} node
 * @returns {string | undefined}
 */
function extractLiteralValue (ts, node) {
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
    // PrefixUnaryExpression for negative numbers (e.g. -1)
    if (ts.isPrefixUnaryExpression(node)
        && node.operator === ts.SyntaxKind.MinusToken
        && ts.isNumericLiteral(node.operand)) {
        return `-${node.operand.text}`;
    }

    // Identifier, object literal, template expression, etc. — skip
    return undefined;
}

/**
 * Map a validValues array name (e.g. "sizes", "statusTypes") to a property
 * name on the class (e.g. "size", "status").
 *
 * Resolution order:
 *  1. Direct match
 *  2. Remove "Types" suffix → check match
 *  3. Remove "Modes" suffix → check match
 *  4. Remove trailing "s"  → check match
 *  5. Case-insensitive fallback (after removing trailing "s")
 *
 * @param {string} arrayName
 * @param {Map<string, object>} propsByName
 * @returns {string | null}
 */
function resolvePropertyName (arrayName, propsByName) {
    // 0. Direct match
    if (propsByName.has(arrayName)) return arrayName;

    // 1. Remove "Types" suffix
    const withoutTypes = arrayName.replace(/Types$/, '');
    if (withoutTypes !== arrayName && propsByName.has(withoutTypes)) return withoutTypes;

    // 2. Remove "Modes" suffix
    const withoutModes = arrayName.replace(/Modes$/, '');
    if (withoutModes !== arrayName && propsByName.has(withoutModes)) return withoutModes;

    // 3. Remove trailing "s"
    const singular = arrayName.replace(/s$/, '');
    if (propsByName.has(singular)) return singular;

    // 4. Case-insensitive fallback
    const lower = singular.toLowerCase();
    for (const propName of propsByName.keys()) {
        if (propName.toLowerCase() === lower) return propName;
    }

    return null;
}

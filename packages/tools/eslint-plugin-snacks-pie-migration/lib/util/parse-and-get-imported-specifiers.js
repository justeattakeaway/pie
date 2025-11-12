const parseAst = require('./parse-ast');
const getImportSpecifiers = require('./get-import-specifiers');

/**
 * Parse string as AST and get imported items
 * @param {string} fileContent File content as string
 * @param {string} packageName The package name to look for
 * @returns An array of imported items
 */
function parseAndGetImportedSpecifiers (fileContent, packageName = 'snacks-design-system') {
    const components = [];

    // Bypass AST parsing when the file is empty
    if (fileContent === '') return components;

    parseAst(fileContent, {
        // Performs action for every import declaration
        ImportDeclaration (node) {
            const foundComponents = getImportSpecifiers(node, packageName);

            if (foundComponents && foundComponents.length) {
                components.push(...foundComponents);
            }
        },
    });

    return components;
}

module.exports = parseAndGetImportedSpecifiers;

const parseAst = require('./parse-ast');
const getImportSpecifiers = require('./get-import-specifiers');

function parseAndGetImportedSpecifiers(fileContent, packageName='snacks-design-system') {
    const components = [];

    parseAst(fileContent, {
        // Performs action for every import declaration
        ImportDeclaration (node) {
            const foundComponents = getImportSpecifiers(node, packageName)

            components.push(...foundComponents);
        },
    });

    return components;
}

module.exports = parseAndGetImportedSpecifiers;

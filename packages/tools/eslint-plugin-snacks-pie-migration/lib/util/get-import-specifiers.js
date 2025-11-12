/**
 * From an import line, get each imported item from the parsed AST node
 * @returns Array of imported items
 */
function getImportSpecifiers (node, packageName = 'snacks-design-system') {
    if (node.source.value !== packageName) return null;
    if (!node.specifiers) return null;

    return node.specifiers.map((specifier) => specifier.imported.name);
}

module.exports = getImportSpecifiers;

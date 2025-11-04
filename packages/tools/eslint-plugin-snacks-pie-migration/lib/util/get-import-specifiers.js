function getImportSpecifiers (node, packageName = 'snacks-design-system') {
    if (node.source.value !== packageName) return null;

    return node.specifiers.map((specifier) => specifier.imported.name);
}

module.exports = getImportSpecifiers;

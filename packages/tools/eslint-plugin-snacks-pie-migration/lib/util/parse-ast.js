const parser = require('@typescript-eslint/parser');

function traverseAst (node, visitor) {
    if (!node || typeof node.type !== 'string' || !visitor) {
        return;
    }

    const handler = visitor[node.type];
    if (typeof handler === 'function') {
        handler(node);
    }

    Object.entries(node).forEach(([key, value]) => {
        if (key === 'parent' || value == null) {
            return;
        }

        if (Array.isArray(value)) {
            value.forEach((child) => {
                if (child && typeof child.type === 'string') {
                    traverseAst(child, visitor);
                }
            });
        } else if (typeof value === 'object' && typeof value.type === 'string') {
            traverseAst(value, visitor);
        }
    });
}

function parseAst (fileContent, visitor) {
    // Parse the current file state into an AST
    const currentAST = parser.parse(fileContent, {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    });

    traverseAst(currentAST, visitor);

    return currentAST;
}

parseAst.traverseAst = traverseAst;

module.exports = parseAst;

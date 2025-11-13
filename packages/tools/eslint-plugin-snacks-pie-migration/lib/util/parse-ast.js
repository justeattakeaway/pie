const parser = require('@typescript-eslint/parser');
const { parserOptions } = require('../config');

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

/**
 * Parse AST from a string, enabling to have a custom visitor function for extracting tree nodes
 * @param {string} fileContent String for the file content
 * @param {object} visitor Object with visitor function
 * @returns AST object
 */
function parseAst (fileContent, visitor) {
    // Parse the current file state into an AST
    const currentAST = parser.parse(fileContent, parserOptions);

    traverseAst(currentAST, visitor);

    return currentAST;
}

parseAst.traverseAst = traverseAst;

module.exports = { parseAst };

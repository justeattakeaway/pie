const stylelint = require('stylelint');
const extractCSSShorthandValues = require('./extract-css-shorthand-values');

const { report, ruleMessages, validateOptions } = stylelint.utils;

const ruleName = '@justeattakeaway/stylelint-no-logical-props-shorthands';
const messages = ruleMessages(ruleName, {
    rejected: (unfixed) => `Disallowed usage of CSS logical property shorthand "${unfixed}"`,
});

const disallowedShorthands = [
    'padding-block',
    'padding-inline',
    'margin-block',
    'margin-inline',
    'inset-block',
    'inset-inline',
];

/**
 * This function takes a Stylelint declaration node and returns an array of two new nodes with modified
 * properties and values, replacing the shorthand with the long syntax
 * @param node - The `node` parameter represents a CSS declaration node. It contains information about
 * the CSS property (`prop`) and its value (`value`).
 * @returns an array containing two nodes: `nodeStart` and `nodeEnd`.
 */
function getReplacementNodes (node) {
    const [value1, value2] = extractCSSShorthandValues(node.prop, node.value);

    // Create distinct declarations for start and end
    const nodeStart = node.clone({
        prop: `${node.prop}-start`,
        value: value1,
    });

    const nodeEnd = node.clone({
        prop: `${node.prop}-end`,
        value: value2 || value1,
        raws: {
            ...node.raws,
            before: '', // This prevents the duplication of prior line breaks
        },
    });

    return [nodeStart, nodeEnd];
}

/**
 * This ESLint plugin prevents the utilization of shorthand declarations for Logical Props and replaces them with the long syntax declaration
 * @param {Boolean} primaryOption - Enables the plugin
 * @param {*} secondaryOption - Unused parameter, kept to follow Stylelint standard
 * @param {*} context - Stylelint context
 * @returns
 */
function ruleFunction (primaryOption, secondaryOption, context) {
    return function lint (root, result) {
        const validOptions = validateOptions(result, ruleName, { actual: primaryOption });

        if (!validOptions) return;

        const isAutoFixing = Boolean(context.fix);

        // Iterate over CSS declarations
        root.walkDecls((decl) => {
            const hasDisallowedShorthand = disallowedShorthands.includes(decl.prop);

            // The expectation is met, there's nothing to be done
            if (!hasDisallowedShorthand) return;

            if (isAutoFixing) {
                // Replace shorthand declarations with the long syntax equivalent declarations
                const nodes = getReplacementNodes(decl);

                decl.replaceWith(...[nodes]);
            } else {
                report({
                    ruleName,
                    result,
                    message: messages.rejected(decl.prop),
                    node: decl,
                    word: decl.prop, // The exact word caused the error
                });
            }
        });
    };
}

module.exports.ruleName = ruleName;
module.exports.messages = messages;
module.exports = stylelint.createPlugin(ruleName, ruleFunction);

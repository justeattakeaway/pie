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
];

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
            before: '', // prevent line break duplication
        },
    });

    return [nodeStart, nodeEnd];
}

// TODO: Add documentation or readme
function ruleFunction (primaryOption, secondaryOption, context) {
    return function lint (root, result) {
        // Validate options
        const validOptions = validateOptions(
            result,
            ruleName,
            {
                // TODO: Provide options schema
            },
        );
        if (!validOptions) return;

        const isAutoFixing = Boolean(context.fix);

        // Iterate over CSS declarations
        root.walkDecls((decl) => {
            const hasDisallowedShorthand = disallowedShorthands.includes(decl.prop);

            // The expectation is met, there's nothing to be done
            if (!hasDisallowedShorthand) return;

            if (isAutoFixing) {
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

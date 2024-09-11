import stylelint from 'stylelint';

const ruleName = '@justeattakeaway/stylelint-full-nested-class-modifiers';
const messages = stylelint.utils.ruleMessages(ruleName, {
    rejected: (selector, suggestedSelector) => `Nested class modifier "${selector}" does not use the full class name. Use "${suggestedSelector}" instead.`,
});

export const fullNestedClassModifiers = stylelint.createPlugin(ruleName, (primaryOption, secondaryOption, context) => (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, { actual: primaryOption });

    if (!validOptions) return;

    const isAutoFixing = Boolean(context.fix); // Check if autofixing is enabled

    root.walkRules((rule) => {
        // Match selectors like `&--modifier`
        const nestedModifierRegex = /&--([a-zA-Z0-9-_]+)/;

        if (nestedModifierRegex.test(rule.selector)) {
            // Capture the parent selector (e.g., '.foo') from the parent rule
            const parentRule = rule.parent;
            const parentSelector = parentRule.selector;

            if (parentSelector) {
                // Ensure parentSelector starts with a valid class name and doesn't include '&'
                const normalizedParentSelector = parentSelector.replace(/^&/, '').replace(/^(\.)*/, '.');

                // Suggest the corrected syntax (e.g., '&.foo--modifier')
                const suggestedSelector = `&${normalizedParentSelector}--${rule.selector.replace(/^&--/, '')}`;

                if (isAutoFixing) {
                    // Apply the fix by replacing the rule with the corrected selector
                    const fixedRule = rule.clone({
                        selector: suggestedSelector,
                    });

                    rule.replaceWith(fixedRule); // Replace the original rule with the fixed one
                } else {
                    // Report the error without fixing if autofix is not enabled
                    stylelint.utils.report({
                        message: messages.rejected(rule.selector, suggestedSelector),
                        node: rule,
                        result,
                        ruleName,
                    });
                }
            }
        }
    });
});

export const rule = {
    ruleName,
    messages,
    fullNestedClassModifiers,
};

export default fullNestedClassModifiers;

const snacksComponentsData = require('../../snacks-components-data.json');
const deprecatedComponents = require('../../snacks-deprecated-components');
const { getImportSpecifiers } = require('../util/get-import-specifiers');

function isReplacedByAnotherComponent (componentName) {
    const replacementData = snacksComponentsData[componentName];
    const piePackage = replacementData && replacementData.status && replacementData.status === 'stable' ? replacementData.piePackage : false;
    return piePackage;
}

function isDeprecated (componentName) {
    if (deprecatedComponents[componentName] === undefined) return false;

    const { reason, solution } = deprecatedComponents[componentName] || {};
    if (!reason || !solution) { return false; }

    return { reason, solution };
}

/**
 * Checks for imports of deprecated Snacks components
 */
module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Checks imports to prevent reintroducing deprecated Snacks components',
        },
        schema: [
            // First option - allows bypassing components by their names, receives an array of strings
            // This is referred below as "bypassedComponents"
            {
                type: 'array',
                items: {
                    type: 'string',
                },
                uniqueItems: true,
            }
        ],
        defaultOptions: [
            // First option default value
            [],
        ],
    },
    create (context) {
        return {
            // Checks every import declaration
            ImportDeclaration (node) {
                if (node.source.value !== 'snacks-design-system') return;

                const [bypassedComponents] = context.options;

                getImportSpecifiers(node).forEach((componentName) => {
                    // Specific components can be bypassed if an array of names are provided
                    const isBypassedInOptions = bypassedComponents && bypassedComponents.includes(componentName);

                    if (!isBypassedInOptions) {
                        if (isReplacedByAnotherComponent(componentName)) {
                            const replacementComponent = isReplacedByAnotherComponent(componentName);
                            context.report({
                                node,
                                message: `The Snacks component "${componentName}" is being deprecated and can be replaced by "${replacementComponent}".`,
                            });
                        } else if (isDeprecated(componentName)) {
                            const { reason, solution } = isDeprecated(componentName);
                            context.report({
                                node,
                                message: `${reason}\n${solution}`,
                            });
                        }
                    }
                });
            },
        };
    },
};

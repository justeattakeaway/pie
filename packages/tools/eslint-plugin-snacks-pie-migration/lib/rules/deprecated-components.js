const snacksComponentsData = require('../../snacks-components-data.json');
const { getImportSpecifiers } = require('../util/get-import-specifiers');

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
                    const replacementData = snacksComponentsData[componentName];
                    // Specific components can be bypassed if an array of names are provided
                    const isBypassedInOptions = bypassedComponents && bypassedComponents.includes(componentName);
                    const isDeprecated = replacementData && replacementData.status && replacementData.status === 'stable';

                    if (!isBypassedInOptions && isDeprecated) {
                        context.report({
                            node,
                            message: `The Snacks component "${componentName}" is being deprecated and can be replaced by "${replacementData.piePackage}".`,
                        });
                    }
                });
            },
        };
    },
};

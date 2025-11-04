const snacksComponentsData = require('../../snacks-components-data.json');
const getImportSpecifiers = require('../util/get-import-specifiers');

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Checks imports to prevent reintroducing deprecated Snacks components',
        },
        fixable: 'code',
        schema: [],
    },
    create (context) {
        return {
            // Performs action for every import declaration
            ImportDeclaration (node) {
                if (node.source.value !== 'snacks-design-system') return;

                getImportSpecifiers(node).forEach((componentName) => {
                    const replacementData = snacksComponentsData[componentName];

                    if (replacementData) {
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

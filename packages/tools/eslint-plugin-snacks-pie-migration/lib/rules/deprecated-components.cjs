const snacksPackageName = 'snacks-design-system';
const snacksComponentsData = require('../../snacks-components-data.json');

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
                if (node.source.value !== snacksPackageName) return;

                node.specifiers.forEach((specifier) => {
                    const importedSpecifier = specifier.imported.name;
                    const replacementData = snacksComponentsData[importedSpecifier];

                    if (replacementData) {
                        context.report({
                            node,
                            message: `The Snacks component "${importedSpecifier}" is being deprecated and can be replaced by "${replacementData.piePackage}".`,
                        });
                    }
                });
            },
        };
    },
};

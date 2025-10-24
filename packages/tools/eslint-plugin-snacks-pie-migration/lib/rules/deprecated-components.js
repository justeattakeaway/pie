const snacksPackageName = 'snacks-design-system';

module.exports = {
	meta: {
		type: "problem",
		docs: {
			description: "Checks imports to prevent reintroducing deprecated Snacks components",
		},
		fixable: "code",
		schema: [],
	},
	create(context) {
		return {
            // Performs action for every import declaration
            ImportDeclaration(node) {
                if (node.source.value!==snacksPackageName) return

                node.specifiers.forEach((specifier) => {
                    const importedSpecifier = specifier.imported.name;

                    if (importedSpecifier==='Button') {
                        context.report({
                            node,
                            message: `The Snacks component "${importedSpecifier}" is deprecated, it's advised to replace it with the PIE component "".`,
                        });
                    }
                })
            }
		};
	},
};

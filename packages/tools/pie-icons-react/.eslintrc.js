module.exports = {
    extends: [require.resolve('@justeattakeaway/pie-eslint-config/strict')],
    rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
};

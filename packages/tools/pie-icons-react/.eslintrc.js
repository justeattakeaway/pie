module.exports = {
    extends: [require.resolve('@justeattakeaway/eslint-config-pie/strict')],
    rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
};

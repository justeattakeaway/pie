module.exports = {
    extends: [
        require.resolve('@justeattakeaway/eslint-config-pie/strict'),
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
};

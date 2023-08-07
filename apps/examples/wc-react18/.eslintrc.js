module.exports = {
    root: true,
    extends: [
        require.resolve('@justeattakeaway/eslint-config-pie/strict'),
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
};

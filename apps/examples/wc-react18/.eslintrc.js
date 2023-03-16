module.exports = {
    extends: [
        require.resolve('@justeattakeaway/pie-eslint-config/strict'),
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
};

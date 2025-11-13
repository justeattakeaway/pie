module.exports = {
    extends: [
        require.resolve('@justeattakeaway/eslint-config-pie/strict'),
        'plugin:eslint-plugin/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
};

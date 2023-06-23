module.exports = {
    extends: [require.resolve('@justeattakeaway/eslint-config-pie/strict')],
    rules: {
        'no-console': 'off',
        'no-param-reassign': 'off',
        'no-shadow': 'off',
        'no-use-before-define': 'off',
        'vue/sort-keys': 'off',
    },
    parserOptions: {
        ecmaVersion: 2020,
    },
};

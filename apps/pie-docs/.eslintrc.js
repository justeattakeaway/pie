module.exports = {
    extends: [require.resolve('@justeattakeaway/eslint-config-pie/strict')],
    parserOptions:
    {
        ecmaVersion: 2020,
    },
    globals: {
        browser: 'readonly',
    },
    rules: {
        'no-param-reassign': 'off',
        'no-shadow': 'off',
        'no-use-before-define': 'off',
        'vue/sort-keys': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
};

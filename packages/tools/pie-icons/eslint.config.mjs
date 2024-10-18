import eslintConfigPie from '@justeattakeaway/eslint-config-pie/strict';

export default [
    ...eslintConfigPie,
    {
        rules: {
            'no-console': 'off',
            'no-param-reassign': 'off',
            'no-shadow': 'off',
            'no-use-before-define': 'off',
            'vue/sort-keys': 'off',
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2020,
            },
        },
    },
];

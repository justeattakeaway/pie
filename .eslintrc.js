module.exports = {
    extends: [
        require.resolve('@justeattakeaway/eslint-config-pie/strict'),
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: [
        'json-format',
        '@typescript-eslint'
    ],
    root: true,
    settings: {
        'json/sort-package-json': false,
    },
    rules: {
        'class-methods-use-this': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-shadow': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: `${__dirname}/tsconfig.json`,
            },
        }
    ],
};

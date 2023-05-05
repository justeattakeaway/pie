module.exports = {
    extends: [
        require.resolve('@justeattakeaway/pie-eslint-config/strict'),
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
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json'
            }
        }
    ]
};

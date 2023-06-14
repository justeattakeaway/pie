module.exports = {
    rules: {
        'import/no-import-module-exports': 'off',
        'import/no-named-export': 'off',

        'import/no-relative-packages': 'error',
        'import/no-relative-parent-imports': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': ['error', 'ignorePackages', {
            ts: 'never',
            js: 'never',
        }],

        'import/no-unresolved': [
            'error',
            {
                caseSensitive: false,
                commonjs: true,
            }
        ],

        'import/no-unused-modules': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};

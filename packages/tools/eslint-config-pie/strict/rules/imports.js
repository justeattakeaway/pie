import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default [
    {
        plugins: {
            import: importPlugin,
            '@typescript-eslint': tseslint,
        },
        rules: {
            'import/prefer-default-export': 'off',
            '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', fixStyle: 'inline-type-imports' }],
        },
    },
];

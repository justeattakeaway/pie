import eslintConfigPie from '@justeattakeaway/eslint-config-pie/strict';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
// import jsonPlugin from 'eslint-plugin-json-format';

export default tseslint.config(
    eslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...eslintConfigPie,
    {
        plugins: {
            import: importPlugin,
            // json: jsonPlugin,
        },
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
            'typescript-eslint/no-var-requires': 'off',
        },
        overrides: [
            // {
            //     files: ['**/*.ts', '**/*.tsx'],
            //     parser: '@typescript-eslint/parser',
            //     parserOptions: {
            //         project: `${__dirname}/tsconfig.json`,
            //     },
            // },
            {
                files: ['**/components/**/visual/*.spec.ts'],
                rules: {
                    // ForOfStatement is allowed in Visual tests
                    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
                    'no-await-in-loop': 'off',
                },
            }
        ],
    },
);

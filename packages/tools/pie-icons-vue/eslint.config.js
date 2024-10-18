// import { vue, vue3 } from '@justeattakeaway/eslint-config-pie/frameworks';
import eslintConfigPie from '@justeattakeaway/eslint-config-pie/strict';
import importPlugin from 'eslint-plugin-import';

export default [
    // importPlugin.flatConfigs.recommended,
    ...eslintConfigPie,
    // ...vue,
    // ...vue3,
    {
        plugins: {
            import: importPlugin,
        },
        // extends: [
        //     'plugin:vue/vue3-recommended',
        // ],
        rules: {
            // ...vue.rules,
            // ...vue3.rules,
            'vue/sort-keys': 'off',
            'import/no-extraneous-dependencies': 'off',
            'import/no-unresolved': 'off',
        },
        languageOptions: {
            parserOptions: {
                parser: '@babel/eslint-parser',
                requireConfigFile: false,
                ecmaVersion: 2017,
                sourceType: 'module',
            },
        },
    },
];

// eslint-disable-next-line import/no-extraneous-dependencies
const { vue, vue3 } = require('@justeattakeaway/pie-eslint-config/frameworks');

module.exports = {
    extends: [
        require.resolve('@justeattakeaway/pie-eslint-config/strict'),
        'plugin:vue/vue3-recommended'
    ],
    rules: {
        ...vue.rules,
        ...vue3.rules,
        'vue/sort-keys': 'off',
        '@typescript-eslint/no-empty-function': 'off', // this is already covered by vue/require-render-return
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaVersion: 2017,
        sourceType: 'module',
    },
};

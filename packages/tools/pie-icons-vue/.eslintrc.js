const { vue, vue3 } = require('@justeattakeaway/eslint-config-pie/frameworks');

module.exports = {
    extends: [
        require.resolve('@justeattakeaway/eslint-config-pie/strict'),
        'plugin:vue/vue3-recommended'
    ],
    rules: {
        ...vue.rules,
        ...vue3.rules,
        'vue/sort-keys': 'off',
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaVersion: 2017,
        sourceType: 'module',
    },
};

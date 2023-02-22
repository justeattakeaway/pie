const { vue, vue3 } = require('@justeattakeaway/pie-eslint-config/base-rules');

module.exports = {
    extends: [
        require.resolve('@justeattakeaway/pie-eslint-config'),
        'plugin:vue/vue3-recommended'
    ],
    rules: {
        ...vue.rules, ...vue3.rules, 'vue/sort-keys': 'off'
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaVersion: 2017,
        sourceType: 'module'
    }
};

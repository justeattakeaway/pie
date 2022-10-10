module.exports = {
    root: true,
    extends: [
        '@justeat/eslint-config-fozzie'
    ],
    rules: {
        'vue/sort-keys': 'off'
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaVersion: 2017,
        sourceType: 'module'
    }
};

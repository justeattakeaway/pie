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
        ecmaVersion: 2017,
        sourceType: 'module'
    }
};
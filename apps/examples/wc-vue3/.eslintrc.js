// eslint-disable-next-line import/no-extraneous-dependencies
const { vue, vue3 } = require('@justeattakeaway/eslint-config-pie/frameworks');

module.exports = {
    root: true,
    extends: [
        require.resolve('@justeattakeaway/eslint-config-pie/strict'),
        'plugin:vue/vue3-recommended'
    ],
    rules: {
        ...vue.rules, ...vue3.rules, 'vue/sort-keys': 'off',
    },
};

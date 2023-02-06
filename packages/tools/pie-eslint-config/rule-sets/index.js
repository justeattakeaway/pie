const base = require('./base');

const standard = [
    'eslint-config-airbnb-base'
];

module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true
    },
    extends: [...standard, ...base.extends],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        strict: 'error'
    }
};

const rules = [
    '../rules/best-practices',
    '../rules/classes',
    '../rules/errors',
    '../rules/node',
    '../rules/style',
    '../rules/es6',
    '../rules/imports'
].map(require.resolve);

module.exports = {
    extends: rules
};

const rules = [
    '../rules/strict/style.js',
].map(require.resolve);

module.exports = {
    extends: rules,
};

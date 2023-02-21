const rules = [
    '../rules/strict/best-practices.js',
    '../rules/strict/style.js',
].map(require.resolve);

module.exports = {
    extends: rules,
};

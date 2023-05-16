const base = require('../base/index');

const strict = [
    './rules/best-practices',
    './rules/style',
    './rules/imports'
].map(require.resolve);

module.exports = {
    ...base,
    extends: [...base.extends, ...strict],
};

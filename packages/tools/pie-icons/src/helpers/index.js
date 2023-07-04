/**
 * Normalizes a component name by removing any hyphens
 * directly before digits in the passed string
 * For example: over-18-filled-large
 * Without this normlization the PascalCase generation would return Over-16Filled
 * @param {string} name - a string, for example an icon name
 * @returns {string}
 */
function normalizeIconName (name) {
    return name.replace(/\-(\d+)/, '$1'); // eslint-disable-line no-useless-escape
}

module.exports = {
    normalizeIconName,
};

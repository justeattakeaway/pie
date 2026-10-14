/**
 * Converts a kebab-case string to PascalCase.
 * @param {string} name - The kebab-case string to convert.
 * @returns {string} The PascalCase version of the input string.
 */
function toPascalCase (name) {
    return name.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

module.exports = toPascalCase;

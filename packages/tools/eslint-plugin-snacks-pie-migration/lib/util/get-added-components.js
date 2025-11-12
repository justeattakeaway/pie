const parseAndGetImportedSpecifiers = require('./parse-and-get-imported-specifiers');

/**
 * Compares the imported items from before and current state
 * @param {string} filePreviousState string representing the file previous content
 * @param {string} fileCurrentState string representing the file current content
 * @returns Returns only items that weren't present beforehand
 */
function getAddedComponents (filePreviousState, fileCurrentState) {
    const previousStateComponents = parseAndGetImportedSpecifiers(filePreviousState);

    const currentStateComponents = parseAndGetImportedSpecifiers(fileCurrentState);

    return currentStateComponents.filter((component) => !previousStateComponents.includes(component));
}

module.exports = getAddedComponents;

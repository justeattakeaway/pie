const parseAndGetImportedSpecifiers = require('./parse-and-get-imported-specifiers');

function getAddedComponents (filePreviousState, fileCurrentState) {
    const previousStateComponents = parseAndGetImportedSpecifiers(filePreviousState);

    const currentStateComponents = parseAndGetImportedSpecifiers(fileCurrentState);

    return currentStateComponents.filter((component) => !previousStateComponents.includes(component));
}

module.exports = getAddedComponents;

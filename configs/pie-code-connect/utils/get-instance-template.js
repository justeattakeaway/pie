/**
 * Creates a `getInstanceTemplate` helper bound to the given Figma Code Connect context.
 *
 * @param {object} figma - The Figma Code Connect context object (provides `selectedInstance`).
 * @returns {function} `getInstanceTemplate(path)` - resolves a nested instance by traversing
 *   `path` (array of instance names) and returns the result of `executeTemplate()`, or `null`
 *   if the instance cannot be found or is in an error state.
 */
function createGetInstanceTemplate (figma) {
    return function getInstanceTemplate (path) {
        const instance = path.reduce((current, name) => {
            if (!current || current.type === 'ERROR') return null;
            return current.findInstance(name);
        }, figma.selectedInstance);

        if (!instance || instance.type === 'ERROR') return null;

        return instance?.executeTemplate().example;
    };
}

module.exports = createGetInstanceTemplate;

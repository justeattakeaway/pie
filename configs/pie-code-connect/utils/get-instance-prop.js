/**
 * Creates a `getInstanceProp` helper bound to the given Figma Code Connect context.
 *
 * @param {object} figma - The Figma Code Connect context object (provides `selectedInstance`).
 * @returns {function} `getInstanceProp(pathOrMethod, methodOrFirstArg, ...rest)` - reads a
 *   property from the selected instance (or a nested child instance).
 *
 * **Signatures:**
 * - `getInstanceProp(method, propName, ...args)` - calls `selectedInstance[method](propName, ...args)`.
 * - `getInstanceProp(path, method, propName, ...args)` - resolves a nested instance by traversing
 *   `path` (array of instance names), then calls `instance[method](propName, ...args)`.
 *
 * Returns `null` when the instance cannot be found, the traversal hits an error, or the property
 * does not exist on the resolved instance.
 */
function createGetInstanceProp (figma) {
    return function getInstanceProp (pathOrMethod, methodOrFirstArg, ...rest) {
        const hasPath = Array.isArray(pathOrMethod);
        const path = hasPath ? pathOrMethod : null;
        const method = hasPath ? methodOrFirstArg : pathOrMethod;
        const args = hasPath ? rest : [methodOrFirstArg, ...rest];

        let current = figma.selectedInstance;

        if (path) {
            const found = path.reduce((instance, name) => {
                if (!instance || instance.type === 'ERROR') return null;
                return instance.findInstance(name);
            }, current);

            if (!found || found.type === 'ERROR') return null;

            current = found;
        }

        // Checks if the property exists otherwise the returned object is not useful
        if (!current.properties[args[0]]) return null;

        return current[method](...args);
    };
}

module.exports = createGetInstanceProp;

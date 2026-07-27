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

        // Checks if the property exists otherwise it returns an object
        if (!current.properties[args[0]]) return null;

        return current[method](...args);
    };
}

module.exports = createGetInstanceProp;

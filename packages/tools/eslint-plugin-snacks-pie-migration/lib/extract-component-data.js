const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const { globSync } = require('glob');

function listFiles (startPath, globSyncImpl) {
    return globSyncImpl('**/package.json', {
        ignore: 'node_modules/**',
        cwd: startPath,
        absolute: true,
    });
}

/**
 * Reads package files from a specified path, extracts component data based on certain criteria,
 * and returns a sorted object of components with their package name and status.
 * @param startPath - directory path from which you want to start searching for package files
 * containing component data.
 * @param [deps] - object that can contain optional dependencies for `fs` and `globSync` modules.
 * These dependencies are used to provide flexibility in testing and mocking these modules when needed.
 * If not provided, the function will default to using the actual `fs` and `globSync` modules.
 * @returns Returns an object containing component data, where the keys are component names and the
 * values are objects with `piePackage` and `status` properties. The components are sorted alphabetically
 * by their names.
 */
function extractComponentData (startPath, deps = {}) {
    const fsImpl = deps.fs || fs;
    const globSyncImpl = deps.globSync || globSync;
    const packageFiles = listFiles(startPath, globSyncImpl);
    const components = {};

    packageFiles.forEach((filePath) => {
        const fileContent = fsImpl.readFileSync(filePath, 'utf8');
        const parsedPackage = JSON.parse(fileContent);

        if (!parsedPackage.pieMetadata) return;
        const { pieMetadata } = parsedPackage;

        const hasStatus = pieMetadata?.componentStatus === 'beta' || pieMetadata?.componentStatus === 'stable';
        const isReplacement = pieMetadata?.replaces?.snacks?.length > 0;

        if (hasStatus && isReplacement) {
            pieMetadata.replaces.snacks.forEach((snacksComponentName) => {
                components[snacksComponentName] = {
                    piePackage: parsedPackage.name,
                    status: pieMetadata.componentStatus,
                };
            });
        }
    });

    if (Object.keys(components).length === 0) {
        throw new Error('extractComponentData() failed. No components could be found.');
    }

    return Object.keys(components)
        .sort()
        .reduce((acc, key) => {
            acc[key] = components[key];
            return acc;
        }, {});
}

module.exports = { extractComponentData };

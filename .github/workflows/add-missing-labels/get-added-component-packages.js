const scriptPrefix = 'check-added-packages:';

/**
 * Gets the file content from a specific Git reference
 * @param {string} ref git ref
 * @param {string} filePath path to the desired file
 * @returns string with the file content
 */
async function getPackageJsonAtRef (ref, filePath, execa) {
    try {
        const { stdout: fileContent } = await execa.command(`git show ${ref}:${filePath}`);

        return JSON.parse(fileContent);
    } catch (err) {
        throw new Error(`${scriptPrefix} Failed to fetch package.json from ${ref}:`, {cause: err})
    }
}

/**
 * Compares the entries of two objects and returns the added keys
 * @param {object} baseObj dependencies at base brach
 * @param {object} currentObj dependencies at current branch
 * @returns Array with the names of added dependencies
 */
function getNewDependencies (baseObj = {}, currentObj = {}) {
    const newDeps = [];

    Object.keys(currentObj).forEach((key) => {
        if (!baseObj[key]) newDeps.push(key);
    });

    return newDeps;
}

/**
 * Checks if the current branch adds new dependencies
 * @param {string} filePath Path to the file that will be compared
 * @returns Array with the names of added dependencies, or empty array if none are found
 */
async function getAddedComponentPackages (filePath, packagePrefix = '@justeattakeaway/', execa) {
    // Get package.json from the base branch (main)
    const basePackageJson = await getPackageJsonAtRef('main', filePath, execa);
    if (!basePackageJson) {
        throw new Error(`${scriptPrefix} Failed to retrieve package.json from main branch.`, {cause: err})
    }

    // Get package.json from the current branch (HEAD)
    const currentPackageJson = await getPackageJsonAtRef('HEAD', filePath, execa);
    if (!currentPackageJson) {
        throw new Error(`${scriptPrefix} Failed to retrieve package.json from the current branch.`, {cause: err})
    }

    // Compare dependencies
    const baseDependencies = basePackageJson.dependencies;
    const currentDependencies = currentPackageJson.dependencies;
    const newDependencies = getNewDependencies(baseDependencies, currentDependencies)
        .filter((item) => item.startsWith(packagePrefix));

    return newDependencies;
}

module.exports = {
    scriptPrefix,
    getAddedComponentPackages,
}

const dree = require('dree');

/*
// Use the 'dree' library to scan the directory of our built pages
*/
exports.getNavigationRoutes = () => {
    const children = dree.scan('./dist');

    const expectedRoutes = readChildren(children);

    return expectedRoutes;
};

/*
// This function gets called recursively so that subdirectories are included as part of our expected routes.
*/
const readChildren = (childDirectories, result = []) => {
    // folders in the dist we want to ignore
    const ignores = ['assets', "node_modules"];

    // Files we want to specifically include
    const includes = ['404.html'];

    if (includes.includes(childDirectories.name) && !childDirectories.children) {
        result.push(childDirectories.relativePath);
        return;
    }

    // Ignore directories that don't have subdirectories / files, as these aren't valid routes
    if (ignores.includes(childDirectories.name) || !childDirectories.children) {
        return;
    }

    if (childDirectories.children.length === 1) {
        if (process.platform === 'win32') {
            childDirectories.relativePath = childDirectories.relativePath.replaceAll('\\', '/');
        }
        result.push(childDirectories.relativePath);

        return;
    }

    // Recursively call readChildren() so that subdirectories are added to the array.
    childDirectories.children.forEach((child) => {
        readChildren(child, result);
    });

    // eslint-disable-next-line consistent-return
    return result;
};

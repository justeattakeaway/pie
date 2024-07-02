const dree = require('dree');

// Use the 'dree' library to scan the directory of our built pages
exports.getNavigationRoutes = () => {
    const children = dree.scan('./dist');
    return readChildren(children);
};

// This function gets called recursively so that subdirectories are included as part of our expected routes.
const readChildren = (childDirectories, result = []) => {
    // folders in the dist we want to ignore
    const ignores = ['assets', 'node_modules'];

    // Files we want to specifically include
    const includes = ['404.html'];

    if (includes.includes(childDirectories.name) && !childDirectories.children) {
        result.push(childDirectories.relativePath);
        return result;
    }

    // Ignore directories that don't have subdirectories / files, as these aren't valid routes
    if (ignores.includes(childDirectories.name) || !childDirectories.children) {
        return result;
    }

    if (childDirectories.children.length === 1 && childDirectories.children[0].name === 'index.html') {
        if (process.platform === 'win32') {
            childDirectories.relativePath = childDirectories.relativePath.replace(/\\/g, '/');
        }

        result.push(childDirectories.relativePath);

        return result;
    }

    // This allows us to include urls such as /foundations, /foundations/typography, etc.
    // Some of these pages should display a 404 page but we still want to include them in our routes as they technically exist.
    const hasIndexHtmlChild = childDirectories.children.some((child) => child.name === 'index.html');
    const directoriesToInclude = ['accessibility', 'all-about-pie', 'foundations', 'components', 'designers', 'engineers', 'patterns', 'support'];
    const shouldInclude = directoriesToInclude.some((dir) => childDirectories.relativePath.includes(dir));

    if (hasIndexHtmlChild && shouldInclude) {
        if (process.platform === 'win32') {
            childDirectories.relativePath = childDirectories.relativePath.replace(/\\/g, '/');
        }

        result.push(childDirectories.relativePath);
    }

    // Recursively call readChildren() so that subdirectories are added to the array.
    childDirectories.children.forEach((child) => readChildren(child, result));

    return result;
};

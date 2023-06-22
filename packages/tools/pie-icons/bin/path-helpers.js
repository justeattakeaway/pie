/**
 * If the path passed contains a subdirectory of the assets/ folder
 * it returns the name of that subdirectory
 * For example, a path of '/assets/social' will return '/social'
 *
 * @param {String} fullPath – Full string path to a file
 * @returns {String} – the subdirectory name inside assets (or an empty string, if the file isn't in a subdirectory)
 */
function getAssetDirectoryName(fullPath) {
    let index = fullPath.lastIndexOf('/');
    if (index === -1) {
        index = fullPath.lastIndexOf('\\');
    }
    const pathsParentFolder = fullPath.substring(index + 1);

    if (pathsParentFolder === 'assets' || pathsParentFolder === '_optimised') {
        return '';
    }
    return `/${pathsParentFolder}`;
}

export default {
    getAssetDirectoryName,
};

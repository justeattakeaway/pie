const dree = require('dree');

exports.getNavigationRoutes = () => {
    const children = dree.scan('./dist/content/pages');

    const expectedRoutes = readChildren(children);

    return expectedRoutes;
};

const readChildren = (childDirectories, result = []) => {
    if (!childDirectories.children) {
        return;
    }

    if (childDirectories.children.length === 1) {
        if (process.platform === 'win32') {
            childDirectories.relativePath = childDirectories.relativePath.replaceAll('\\', '/');
        }
        result.push(childDirectories.relativePath);

        return;
    }

    childDirectories.children.forEach(child => {
        readChildren(child, result);
    });

    // eslint-disable-next-line consistent-return
    return result;
};

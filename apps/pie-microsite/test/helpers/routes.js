const dree = require('dree');
const fs = require('fs');

const snapshotNavigationRoutes = () => {
    const children = dree.scan('./dist/content/pages');

    const expectedRoutes = readChildren(children);

    fs.writeFile('./test/snapshots/expected-routes.json', JSON.stringify(expectedRoutes), err => {
        if (err) {
            throw new Error('Unable to write to file.');
        }
    });

    return expectedRoutes;
};

const readChildren = (childDirectories, result = []) => {
    if (!childDirectories.children) {
        return;
    }

    if (childDirectories.children.length === 1) {
        result.push(childDirectories.relativePath);

        return;
    }

    childDirectories.children.forEach(child => {
        readChildren(child, result);
    });

    // eslint-disable-next-line consistent-return
    return result;
};

module.exports = { snapshotNavigationRoutes };

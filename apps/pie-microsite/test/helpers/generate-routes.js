const fs = require('fs');
const routesHelper = require('./routes-helper');

const filePath = './test/snapshots/expected-routes.snapshot.json';

const navigationRoutes = routesHelper.getNavigationRoutes();

fs.writeFile(filePath, JSON.stringify(navigationRoutes), err => {
    if (err) {
        throw new Error(`Unable to update: ${filePath}`);
    }
});

/*
// This function gets called when running 'yarn test:generate-routes'
// It's responsible for writing all of the valid PIE routes to a snapshot JSON file.
// This snapshot is used as the source of truth for navigation related Unit / System / Visual tests.
*/

const fs = require('fs');
const routesHelper = require('./routes-helper');

const filePath = './test/snapshots/expected-routes.snapshot.json';

const navigationRoutes = routesHelper.getNavigationRoutes();

fs.writeFile(filePath, JSON.stringify(navigationRoutes, null, 4), err => {
    if (err) {
        throw new Error(`Unable to update: ${filePath}`);
    }
});

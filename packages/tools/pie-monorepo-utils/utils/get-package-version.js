const fs = require('fs');
const path = require('path');

const getPackageVersion = (dirname) => {
    const pkg = JSON.parse(fs.readFileSync(path.resolve(dirname, 'package.json'), 'utf-8'));

    return pkg.version || '0.0.0';
};

module.exports = getPackageVersion;

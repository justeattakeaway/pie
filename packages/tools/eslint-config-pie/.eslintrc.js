const path = require('path');

module.exports = {
    extends: [
        // This allows eslint-config-pie to lint itself
        path.join(__dirname, 'base'),
    ],
};

const path = require('path');

module.exports = {
    extends: [
        // This allows pie-eslint-config to lint itself
        path.join(__dirname, 'base'),
    ],
};

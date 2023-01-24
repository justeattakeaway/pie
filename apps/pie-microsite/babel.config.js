// Babel config to allow import/export syntax in WDIO tests.

// New babel feature for pie-microsite
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current'
            }
        }]
    ]
};

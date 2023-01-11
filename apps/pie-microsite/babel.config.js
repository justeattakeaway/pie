// Babel config to allow import/export syntax in WDIO tests.
// Test comment
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current'
            }
        }]
    ]
};

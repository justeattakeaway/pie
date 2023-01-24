// Babel config to allow import/export syntax in WDIO tests.
module.exports = {
    // this is a feature change
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current'
            }
        }]
    ]
};

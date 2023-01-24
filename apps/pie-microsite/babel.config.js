// Babel config to allow import/export syntax in WDIO tests.

//this is a new feature
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current'
            }
        }]
    ]
};

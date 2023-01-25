// Babel config to allow import/export syntax in WDIO tests.


// this is a minor change - stable release
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current'
            }
        }]
    ]
};

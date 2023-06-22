const path = require('path');

module.exports = [
    {
        entry: path.resolve(__dirname, './src/index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: 'umd',
            library: 'pie-icons',
            // Prevents webpack from referencing `window` in the UMD build
            // Source: https://git.io/vppgU
            globalObject: "typeof self !== 'undefined' ? self : this",
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
            ],
        },
    },
];

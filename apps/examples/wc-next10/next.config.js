// /* eslint-disable global-require */
// /* eslint-disable no-param-reassign */

// // List ES2015 compatible modules

// const flow = require('lodash.flow');

const transpileModules = [
    '@justeattakeaway/pie-button',
    '@lit-labs/react',
    '@lit',
    'lit'
];

// const getCssConfig = {
//     // css-loader
//     cssModules: true,
//     postcssLoaderOptions: {
//         syntax: 'postcss-scss',
//     },
// };

// const nextConfig = {
//     ...getCssConfig,
// };

const withTM = require('next-transpile-modules')(transpileModules);

module.exports = withTM;

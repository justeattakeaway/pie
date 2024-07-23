const path = require('path');

const transpileModules = [
    '@justeattakeaway/pie-button',
    '@justeattakeaway/pie-webc',
    '@justeattakeaway/pie-cookie-banner',
    '@lit/react',
    'lit'
];

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(transpileModules);

const nextConfig = {
    // Required for Lit 3 support with Webpack 4 - https://lit.dev/docs/releases/upgrade/#using-lit-3-with-webpack-4
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.js$/,
            include: ['@lit', 'lit-element', 'lit-html'].map((p) => path.resolve(__dirname, `../../../node_modules/${p}`)),
            use: [
                options.defaultLoaders.babel,
                {
                    loader: 'babel-loader',
                },
            ],
        });

        return config;
    },
};

module.exports = withTM(nextConfig);

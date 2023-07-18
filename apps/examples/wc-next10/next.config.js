const transpileModules = [
    '@justeattakeaway/pie-button',
    '@lit-labs/react',
    'lit'
];

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(transpileModules);

module.exports = withTM();

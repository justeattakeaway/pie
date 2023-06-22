const { deindentHTML } = require('../../shortcode-utilities');
const pieDesignTokenColours = require('../../../filters/pieDesignTokenColours');

/**
 * Builds the example elevation box-shadows to show on the token list item
 * @param {string} token - the token value
 * @param {*} tokenMetadata - the metadata for the token. data such as descriptions
 * @param {path} path - the categorised token path (light or dark)
 * @returns {string} - the elevation swatch example HTML string
 */
const buildElevationExample = (token, tokenMetadata, path) => {
    const isDefaultElevation = tokenMetadata.category === 'defaultElevation';
    const theme = path.includes('default') ? 'default' : 'dark';
    const tokenPath = ['alias', 'default'];

    const styling = {
        default: {
            elevationContainer: isDefaultElevation ? 'background-subtle' : 'disabled-01-inverse',
            elevationBox: isDefaultElevation ? 'container-default' : 'border-inverse',
        },
        dark: {
            elevationContainer: isDefaultElevation ? 'disabled-01-inverse' : 'background-subtle',
            elevationBox: isDefaultElevation ? 'border-inverse' : 'container-default',
        },
    };

    const elevationContainer = `--example-container: ${pieDesignTokenColours({
        tokenName: styling[theme].elevationContainer,
        tokenPath,
    })};`;
    const elevationBox = `--example-elevation: ${pieDesignTokenColours({
        tokenName: styling[theme].elevationBox,
        tokenPath,
    })};`;

    const boxShadowValues = token.shadows.map(
        ({ x, y, blur, spread, r, g, b, opacity }) =>
            `${x}px ${y}px ${blur}px ${spread}px rgba(${r}, ${g}, ${b}, ${opacity})`,
    );

    const elevationBoxShadow = `--example-shadow: ${boxShadowValues};`;

    return deindentHTML(`
    <div class="c-tokensTable-example-container--elevation" style="${elevationContainer}">
        <div class="c-tokensTable-example--elevation" style="${elevationBox} ${elevationBoxShadow}"></div>
    </div>`);
};

module.exports = {
    buildElevationExample,
};

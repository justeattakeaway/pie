const { deindentHTML } = require('../../shortcode-utilities');

/**
 * Builds the example elevation box-shadows to show on the token list item
 * @param {string} token - the token value
 * @param {*} tokenMetadata - the metadata for the token. data such as descriptions
 * @param {path} path - the categorised token path (light or dark)
 * @returns {string} - the elevation swatch example HTML string
 */
const buildElevationExample = (token, tokenMetadata, path) => {
    const boxShadowValues = token.shadows.map(({
        x,
        y,
        blur,
        spread,
        r,
        g,
        b,
        opacity
    }) => `${x}px ${y}px ${blur}px ${spread}px rgba(${r}, ${g}, ${b}, ${opacity})`);

    const isDefaultElevation = tokenMetadata.category === 'defaultElevation';
    const theme = path.includes('light') ? 'light' : 'dark';

    const styling = {
        light: {
            elevationContainer: isDefaultElevation ? '#f5f3f1' : '#3B3A39',
            elevationBox: isDefaultElevation ? '#fff' : '#575655'
        },
        dark: {
            elevationContainer: isDefaultElevation ? '#3B3A39' : '#f5f3f1',
            elevationBox: isDefaultElevation ? '#575655' : '#fff'
        }
    };

    const elevationContainer = `--example-container: ${styling[theme].elevationContainer};`;
    const elevationBox = `--example-elevation: ${styling[theme].elevationBox};`;
    const elevationBoxShadow = `--example-shadow: ${boxShadowValues};`;

    const elevationExample = `<div class="c-tokensTable-example-container--elevation" style="${elevationContainer}"><div class="c-tokensTable-example--elevation" style="${elevationBox} ${elevationBoxShadow}"></div></></div>`;

    return deindentHTML(elevationExample);
};

module.exports = {
    buildElevationExample
};

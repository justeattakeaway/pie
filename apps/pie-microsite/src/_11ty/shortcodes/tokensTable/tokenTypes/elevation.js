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

    const exampleContainer = `--elevation-container: ${styling[theme].container};`;
    const elevationBox = `--example-elevation: ${styling[theme].elevationBox};`;
    const elevationBoxShadow = `--example-shadow: ${boxShadowValues};`;

    return (`<div class="c-tokensTable-example-container--elevation" style="${exampleContainer}"><div class="c-tokensTable-example--elevation" style="${elevationBox} ${elevationBoxShadow}"></div></></div>`);
};

/**
 * Builds the overall token description element for global and alias Elevation tokens.
 * @param {*} tokenMetadata the metadata for the token. data such as descriptions
 * @returns {string} - the description HTML string
 */
const buildElevationDescription = tokenMetadata => {
    let description = '';

    // Alias tokens have a globalToken property that references the global token used by the alias
    if (tokenMetadata.globalToken) {
        description = `
        <span class="c-tokensTable-tokenDescription u-spacing-b--bottom">
            ${tokenMetadata.description}
        </span>`;
    }

    return deindentHTML(description);
};

module.exports = {
    buildElevationExample,
    buildElevationDescription
};

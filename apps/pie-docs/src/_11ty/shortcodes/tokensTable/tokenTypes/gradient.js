const {
    convertHexcodeToRBG,
    splitColorToken,
} = require('../../../../_utilities/colors');

/**
 * Converts a hex color with optional pipe-separated opacity (e.g. "#fff|0" or "#ff9933|0.5")
 * into a valid CSS rgba() string.
 * @param {string} color - raw color string from token data
 * @returns {string} - valid CSS color string
 */
const resolveColor = (color) => {
    const tokenValues = splitColorToken(color);

    if (tokenValues.opacity) {
        const { red, green, blue } = convertHexcodeToRBG(tokenValues.hexcode);
        return `rgba(${red}, ${green}, ${blue}, ${tokenValues.opacity})`;
    }

    return tokenValues.hexcode;
};

/**
 * Builds a CSS linear-gradient value from a gradient token object.
 * @param {object} token - the gradient token value with colors, type, and angle
 * @returns {string} - CSS gradient string e.g. "linear-gradient(140deg, #ff9933 0%, #f75e28 100%)"
 */
const buildCssGradient = (token) => {
    const stops = token.colors.map(({ color, stop }) => `${resolveColor(color)} ${stop}%`).join(', ');

    return `${token.type}-gradient(${token.angle}deg, ${stops})`;
};

/**
 * Builds the example gradient swatch to show on the token list item
 * @param {object} token - the gradient token value with colors, type, and angle
 * @returns {string} - the gradient swatch example HTML string
 */
const buildGradientExample = (token) => {
    const gradient = buildCssGradient(token);

    return `<div class="c-tokensTable-example" style="background: ${gradient};"></div>`;
};

module.exports = {
    buildGradientExample,
};

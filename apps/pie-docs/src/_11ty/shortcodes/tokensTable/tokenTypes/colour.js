const { isColorDark } = require('../../../../_utilities/colors');

/**
 * Splits a color token into it's hexcode and opacity value (if one is provided)
 * @param {string} token - the token value i.e. #000, #ffffff, #000|0.85 or #000000|0.85
 * @returns {object} an object containing a hexcode and opacity value (if opacity was provided)
 */
const splitColorToken = (token) => {
    const [hexcode, opacity] = token.split('|');

    return {
        hexcode,
        opacity,
    };
};

/**
 * Builds the example color swatch to show on the token list item
 * @param {string} token - the token value i.e. #000, #ffffff, #000|0.85 or #000000|0.85
 * @returns {string} - the color swatch example HTML string
 */
const buildColorExample = (token) => {
    const tokenValues = splitColorToken(token);
    const classes = ['c-tokensTable-example'];

    if (tokenValues.opacity) {
        classes.push('c-tokensTable-example--checked');
    }

    if (!isColorDark(tokenValues.hexcode)) {
        classes.push('c-tokensTable-example--bordered');
    }

    const cssVariables = [
        ...tokenValues.opacity ? [`--example-checked-opacity: ${tokenValues.opacity}`] : [],
        ...tokenValues.hexcode ? [`--example-background-color: ${tokenValues.hexcode}`] : []
    ];

    return `<div class="${classes.join(' ')}" style="${cssVariables.join('; ')}";></div>`;
};

module.exports = {
    buildColorExample,
};

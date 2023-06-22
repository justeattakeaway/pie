/**
 * Builds the example spacing swatch to show on the token list item
 * @param {string} token - the token value i.e. 24, 80
 * @returns {string} - the spacing swatch example HTML string
 */
const buildSpacingExample = (token) => {
    const cssVariable = `--example-spacing: ${token}px`;

    return `<div class="c-tokensTable-example-container c-tokensTable-example-container--spacing"><div class="c-tokensTable-example--spacing" style="${cssVariable}";></div></div>`;
};

module.exports = {
    buildSpacingExample,
};

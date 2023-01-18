
/**
 * Builds the example radius swatch to show on the token list item
 * @param {string} token - the token value in pixels
 * @returns {string} - the radius swatch example HTML string
 */
const buildRadiusExample = token => {
    const classes = ['c-tokensTable-example-radius'];
    const style = `--example-radius: ${token}px`;

    return `
        <div class="c-tokensTable-example-radius-container">
            <div class="${classes.join(' ')}" style="${style}"></div>
        </div>
    `;
};

module.exports = {
    buildRadiusExample
};

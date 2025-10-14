/**
 * Builds the example blur container to show on the token list item
 * @param {string} tokenValue - the token value in pixels
 * @returns {string} - the blur container example HTML string
 */
const buildBlurExample = (tokenValue) => {
    const containerTokensMapping = {
        9: 'dt-color-container-neutral',
        12.5: 'dt-color-container-prominent',
        24: 'dt-color-container-base',
    };
    const style = `--example-blur: ${tokenValue}px; --example-blur-background-color: var(--${containerTokensMapping[tokenValue]});`;

    return `
        <div class="c-tokensTable-example-container c-tokensTable-example-container--blur">
            <div class="c-tokensTable-example--blur" style="${style}"></div>
            <img src="/assets/img/foundations/blur/blur-illustration-example.svg" alt="" />
        </div>
    `;
};

module.exports = {
    buildBlurExample,
};

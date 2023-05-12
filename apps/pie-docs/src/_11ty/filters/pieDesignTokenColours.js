const pieDesignTokens = require('@justeat/pie-design-tokens/dist/tokens.json');

const pieDesignTokenColours = pieDesignTokens.theme.jet.color;

const getDesignTokenColour = (tokenName, tokenPath) => {
    let colourPath = pieDesignTokenColours;

    for (let i = 0; i < tokenPath.length; i++) {
        colourPath = colourPath[tokenPath[i]];
    }

    return colourPath[tokenName];
};

/**
 * Retrieves the colour value of a given PIE design token, if it exists
 * @param {*} options
 * @param {string} options.tokenName - the name of the design token. i.e. 'interactive-primary'
 * @param {string[]} options.tokenPath - an array of path segments to find the token. i.e. ['alias', 'default']
 * @returns
 */
// eslint-disable-next-line func-names, consistent-return
module.exports = function (options = {
    tokenName: '',
    tokenPath: [],
}) {
    const colourValue = getDesignTokenColour(options.tokenName, options.tokenPath);

    if (!colourValue || colourValue === '') {
        throw new Error(`No colour value found for design token ${options.tokenName}`);
    }

    return colourValue;
};

const pieDesignTokens = require('@justeat/pie-design-tokens/dist/tokens.json');

const pieDesignTokenColours = pieDesignTokens.theme.jet.color;

const getDesignTokenColor = (tokenName, tokenPath) => {
  let colourPath = pieDesignTokenColours;

  for (let i = 0; i < tokenPath.length; i++) {
      colourPath = colourPath[tokenPath[i]]
  }

  return colourPath[tokenName];
}

/**
 * Retrieves the colour value of a given PIE design token, if it exists
 * @param {*} options 
 * @param {string} options.tokenName - the name of the design token. i.e. 'interactive-primary'
 * @param {string[]} options.tokenPath - an array of path segments to find the token. i.e. ['alias', 'default']
 * @returns 
 */
module.exports = function(options = {
  tokenName: '',
  tokenPath: []
}) {
    try {
      return getDesignTokenColor(options.tokenName, options.tokenPath);
    } catch (error) {
      console.error(`Could not find design token color of name: ${options.tokenName}. Error: ${error}`);
    }
}

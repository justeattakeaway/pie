const pieDesignTokens = require('@justeat/pie-design-tokens/dist/tokens.json');
const { objectHelpers } = require('../../utilities');

/**
 * A Design Tokens table component
 * @param {object} config - the design token table configuration
 * @param {string} config.path - A dot notation string path to the property you'd like to access
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function (config) {
    const tokens = objectHelpers.getObjectPropertyByPath(pieDesignTokens, config.path);
    const tokenLiElements = Object.keys(tokens).map(key =>
      `<li>
        <span style="display: inline-block; height: 50px; width: 50px; background-color:${tokens[key]};"></span>
        ${key}: ${tokens[key]} 
      </li>`);

    return `<ul>
      ${tokenLiElements.join('')}
    </ul>`;
};

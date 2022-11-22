const pieDesignTokens = require('@justeat/pie-design-tokens/dist/tokens.json');
const { stringHelpers, objectHelpers } = require('../../utilities');

const createTokenDisplayName = tokenKey => {
    const substrs = tokenKey.split('-');
    const capitalizedSubStrs = substrs.map(str => stringHelpers.capitalizeFirstLetter(str));

    return capitalizedSubStrs.join(' ');
};

/**
 * A Design Tokens table component
 * @param {object} config - the design token table configuration
 * @param {string} config.path - A dot notation string path to the property you'd like to access
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function (config) {
    const tokens = objectHelpers.getObjectPropertyByPath(pieDesignTokens, config.path);
    const tokenLiElements = Object.keys(tokens).map(key => `<li>
        <span style="display: inline-block; height: 50px; width: 50px; background-color:${tokens[key]};"></span>
        <p>${createTokenDisplayName(key)}</p>
        <p>${tokens[key]}</p>
        <p>${key}</p>
      </li>`);

    return `<ul>
      ${tokenLiElements.join('')}
    </ul>`;
};

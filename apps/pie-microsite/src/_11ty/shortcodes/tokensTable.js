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
// module.exports = function (config) {
//     const tokens = objectHelpers.getObjectPropertyByPath(pieDesignTokens, config.path);
//     const tokenLiElements = Object.keys(tokens).map(key => {
//         const displayNameSource = config.prefix ? `${config.prefix}-${key}` : key;

//         return `<li class="c-tokensTable-cell">
//           <div class="c-tokensTable-swatch" style="--bg-colour:${tokens[key]};"></div>
//           <div class="c-tokensTable-data">
//             <span class="c-tokensTable-displayName">${createTokenDisplayName(displayNameSource)}</span>
//             <span class="c-tokensTable-tokenKey">${tokens[key]}</span>
//             <span class="c-tokensTable-tokenValue">${key}</span>
//           </div>
//         </li>`;
//     });

//     return `<ul class="c-tokensTable">
//       ${tokenLiElements.join('')}
//     </ul>`;
// };

const createItem = config => `<li class="c-tokensTable-row c-tokensTable-item">
  <div class="c-tokensTable-swatch" style="--bg-colour:${config.bgColour}";></div>
  <div class="c-tokensTable-content">
    <span class="c-tokensTable-displayName">${config.tokenDisplayName}</span>
    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
    <span>global token used: <span>some token</span></span>
  </div>
  <span class="c-tokensTable-token">${config.tokenKey}</span>
</li>`;

const createList = listElements => `<div class="c-tokensTable-row u-spacing-e--top u-hideBelowOrAtWide">
  <span>Example</span>
  <span>Description</span>
  <span>Token name</span>
</div>
<ul class="c-tokensTable">
  ${listElements.join('')}
</ul>`;

// eslint-disable-next-line func-names
module.exports = function (config) {
    const tokens = objectHelpers.getObjectPropertyByPath(pieDesignTokens, config.path);
    const tokenItemElements = Object.keys(tokens).map(key => createItem({
        bgColour: tokens[key],
        copy: 'Hello, Clarice',
        tokenKey: key,
        tokenDisplayName: createTokenDisplayName(key)
    }));

    return `<div>${createList(tokenItemElements)}</div>`;
};

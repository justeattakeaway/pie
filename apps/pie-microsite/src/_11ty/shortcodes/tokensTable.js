const pieDesignTokens = require('@justeat/pie-design-tokens/dist/tokens.json');
const pieTokensMetadata = require('../../utilities/metadata.json');
const { stringHelpers, objectHelpers } = require('../../utilities/helpers');
const tokenTypes = require('../../_data/tokenTypes');
const { isColorDark } = require('../../utilities/colors');

/**
 * Takes the token key and token type and
 * Creates a SCSS token name such as '$color-black'
 * @param {string} tokenKey - the token key i.e. 'support-positive-02'
 * @param {string} tokenType - the type of token such as color, spacing or radius
 * @returns {string} the SCSS variable name
 */
const createScssTokenName = (tokenKey, tokenType) => `$${tokenType}-${tokenKey}`;

/**
 * Creates a display name of the provided token. 'system-purple' would become 'System Purple'
 * @param {string} tokenKey - the token key i.e. 'support-positive-02'
 * @param {string} tokenType - the type of token such as color, spacing or radius
 * @returns {string} the display name of the token
 */
const createTokenDisplayName = (tokenKey, tokenType) => {
    // Some tokens don't require a prefix in front of their display names
    const prefixExcludes = [tokenTypes.COLOR];
    const shouldShowPrefix = tokenType && !prefixExcludes.includes(tokenType);
    const tokenNameSegments = tokenKey.split('-');
    const capitalisedNameSegments = tokenNameSegments.map(nameSegment => stringHelpers.capitaliseFirstLetter(nameSegment));

    return shouldShowPrefix
        ? `${stringHelpers.capitaliseFirstLetter(tokenType)} ${capitalisedNameSegments.join(' ')}`
        : capitalisedNameSegments.join(' ');
};

/**
 * Splits a color token into it's hexcode and opacity value (if one is provided)
 * @param {string} token - the color token to split
 * @returns {object} an object containing a hexcode and opacity value (if opacity was provided)
 */
const splitColorToken = token => {
    const [hexcode, opacity] = token.split('|');

    return {
        hexcode,
        opacity
    };
};

/**
 * Creates the example color swatch to show on the token list item
 * @param {string} token - the token value i.e. #000, #ffffff, #000|0.85 or #000000|0.85
 * @returns {string} the color swatch example HTML string
 */
const createColorExample = token => {
    const tokenValues = splitColorToken(token);
    let cssVariable = `--example-background-color: ${tokenValues.hexcode}`;
    const classes = ['c-tokensTable-example'];

    if (tokenValues.opacity) {
        cssVariable = `--example-checked-opacity: ${tokenValues.opacity}`;
        classes.push('c-tokensTable-example--checked');
    }

    if (!isColorDark(tokenValues.hexcode)) {
        classes.push('c-tokensTable-example--bordered');
    }

    return `<div class="${classes.join(' ')}" style="${cssVariable}";></div>`;
};

/**
 * Creates an example element to display in the token list item.
 * This could be a color swatch, a representation of border radius or spacing etc.
 * @param {string} token - the token value
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @returns {string} the example HTML string
 */
const createTokenExampleElement = (token, tokenType) => {
    switch (tokenType) {
        case tokenTypes.COLOR:
            return createColorExample(token);
        default:
            throw new Error(`token type not recognised: ${tokenType}. Token:${token}`);
    }
};

/**
 * Creates a token pill element to display the SCSS token name in the token list item.
 * @param {string} tokenScssName - the text to display
 * @returns {string} the token pill HTML string
 */
const createTokenPill = tokenScssName => `<span class="c-tokensTable-token">${tokenScssName}</span>`;

/**
 * Creates a token list item element to add to the tokens list.
 * @param {object} config
 * @param {string} config.token - the design token value
 * @param {string} config.tokenType - the type of design token i.e. color, spacing, radius
 * @param {string} config.tokenScssName - the design token SCSS name i.e. '$color-black'
 * @param {string} config.tokenDisplayName - the display name of the token i.e. 'Black'
 * @returns {string} the list item HTML string
 */
const createTokenListItem = ({
    token,
    tokenType,
    tokenScssName,
    tokenDisplayName
}) => {
    const tokenPill = createTokenPill(tokenScssName);
    const tokenExampleElement = createTokenExampleElement(token, tokenType);

    return `<li class="c-tokensTable-row c-tokensTable-item">
      ${tokenExampleElement}
      <div class="c-tokensTable-content">
        <span class="c-tokensTable-displayName">${tokenDisplayName}</span>
      </div>
      ${tokenPill}
    </li>`;
};

/**
 * Takes a list of design token list items and outputs these with appropriate column headers to be displayed above them
 * @param {string[]} listElements - the list items to render within the list
 * @returns {string} the tokens list HTML elements
 */
const createTokensList = listElements => `<div class="c-tokensTable-row u-spacing-e--top u-showAboveWide c-tokensTable-heading">
  <span>Example</span>
  <span>Description</span>
  <span>Token name</span>
</div>
<ul class="c-tokensTable-list">
  ${listElements.join('')}
</ul>`;

/**
 * Throws an error listing which configuration properties are missing (if any)
 * @param {object} config - the configuration object to validate
 */
const validateConfiguration = ({ path, tokenType }) => {
    const invalidParameters = [];

    if (!path) {
        invalidParameters.push('path');
    }

    if (!tokenType) {
        invalidParameters.push('tokenType');
    }

    if (invalidParameters.length) {
        throw new Error(`Missing configuration parameters: ${invalidParameters.join(', ')}`);
    }
};

const createGroupedTokenList = (path, tokenType) => {
    const categories = pieTokensMetadata.categoryTypes[tokenType].global;
    const tokens = objectHelpers.getObjectPropertyByPath(pieDesignTokens, path);
    console.log(tokens);
    // for each category, create an h2 and a tokensList
    const lists = Object.keys(categories).map((category, index, arr) => {
        console.log(category);
        const heading = `<h2>${categories[category]}</h2>`;
        // filter tokens by category
        const tokensForCategory = Object.keys(pieTokensMetadata.global.color).filter(token => pieTokensMetadata.global.color[token].category === category);
        console.log(tokensForCategory);
        tokensForCategory.forEach(token => console.log(tokens[token]));
        const tokenListItems = tokensForCategory.map(key => createTokenListItem({
            token: tokens[key],
            tokenScssName: createScssTokenName(key, tokenType),
            tokenDisplayName: createTokenDisplayName(key, tokenType),
            tokenType
        }));

        const tokensList = createTokensList(tokenListItems);
        const isLastItem = index === arr.length - 1;
        return `${heading}${tokensList}${!isLastItem ? '<hr />' : ''}`;
    });

    return lists.join('');
};

// eslint-disable-next-line func-names
module.exports = function ({ path, tokenType }) {
    validateConfiguration({ path, tokenType });
    const lists = createGroupedTokenList(path, tokenType);

    return `<div class="c-tokensTable">${lists}</div>`;
};

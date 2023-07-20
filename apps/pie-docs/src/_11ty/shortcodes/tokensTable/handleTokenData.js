const pieTokensMetadata = require('../../../tokensMetadata.json');
const { objectHelpers, stringHelpers } = require('../../../_utilities/helpers');
const tokenTypes = require('../../../_data/tokenTypes');
const { buildColorName } = require('./tokenTypes/colour');

/**
 * Gets the correct column size for each example based on token type.
 * @param {string} tokenType - - the type of token i.e. color, spacing, radius
 * @returns {string} - css variable containing correct column size
 */
const getExampleColumnSize = (tokenType) => {
    const tokenColumnHandler = {
        [tokenTypes.COLOR]: '240px',
        [tokenTypes.FONT]: '240px',
        default: '152px',
    };

    return `--template-columns: ${(tokenColumnHandler[tokenType] || tokenColumnHandler.default)}`;
};

/**
 * Gets all the metadata associated with tokens of a given type such as colour.
 * @param {string} path - path to the category i.e. 'path:color.alias.default' / 'path:color.alias.dark'
 * @returns {object} - object of tokens and the category they are sorted by i.e. white: { category: 'whiteBlack' }
 */
const getTokenTypeMetadata = (path) => objectHelpers.getObjectPropertyByPath(pieTokensMetadata, path);

/**
 * Gets all tokens for a given category such as 'orange'
 * @param {string} category - category that pie tokens are grouped by i.e.  'containerBackgrounds' / 'borders'
 * @param {string} tokenTypeMetadata - the type of token i.e. color, spacing, radius
 * @returns {string[]} - i.e. an array of tokens in each category [ 'divider-default', 'divider-inverse' ]
 */
const getTokensForCategory = (category, tokenTypeMetadata) => Object
    .keys(tokenTypeMetadata)
    .filter((token) => tokenTypeMetadata[token].category === category);

/**
 * Gets all subcategory keys for a given parent category
 * @param {object} tokenTypeCategories - object of token category information
 * @param {string} parentCategoryKey - token category name i.e. 'reactive'
 * @returns - list of subcategory keys for a given parent category
 */
const getSubcategoriesForParentCategory = (tokenTypeCategories, parentCategoryKey) => Object
          .keys(tokenTypeCategories)
          .filter((categoryKey) => tokenTypeCategories[categoryKey].parentCategory === parentCategoryKey);

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

/**
 * Takes the token key and token type and
 * Creates a SCSS token name such as '$color-black'
 * @param {string} tokenKey - the token key i.e. 'support-positive-02'
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @returns {string} the SCSS variable name
 */
const createScssTokenName = (tokenKey, tokenType, path) => {
    // TODO: This is a little hacky and we should revisit it as part of a wider refactor
    // of how token information is generated for the docs site
    const isDarkToken = path.includes('dark');

    return `$${tokenType}-${isDarkToken ? 'dark-' : ''}${tokenKey}`;
};

/**
 * Creates a display name of the provided token. 'system-purple' would become 'System Purple'
 * @param {string} tokenKey - the token key i.e. 'support-positive-02'
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @returns {string} the display name of the token
 */
const createTokenDisplayName = (tokenKey, tokenType) => {
    // Some tokens don't require a prefix in front of their display names
    const prefixExcludes = [tokenTypes.COLOR];
    const shouldShowPrefix = tokenType && !prefixExcludes.includes(tokenType);
    const tokenNameSegments = tokenKey.split('-');
    const tokenName = tokenNameSegments.join(' ');

    return shouldShowPrefix
        ? `${stringHelpers.capitaliseFirstLetter(tokenType)} ${tokenName}`
        : stringHelpers.capitaliseFirstLetter(buildColorName(tokenName));
};

/**
 * Creates a tokens list for a given category
 * @param {object} tokens
 * @param {string} path - path to the category i.e.  'path:color.alias.default' / 'path:color.alias.dark'
 * @param {string} category - category that pie tokens are grouped by i.e.  'containerBackgrounds' / 'borders'
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @returns - a list of HTML token components separated by a <hr />
 */
const createListForCategory = (tokens, path, category, tokenType) => {
    const tokenTypeMetadata = getTokenTypeMetadata(path);
    const tokensForCategory = getTokensForCategory(category, tokenTypeMetadata);

    const tokenList = tokensForCategory || tokens;

    // create a list item for the current token
    const tokenListElements = tokenList.map((key) => ({
        token: tokens[key],
        tokenScssName: createScssTokenName(key, tokenType, path),
        tokenDisplayName: tokenTypeMetadata[key].displayName ?? createTokenDisplayName(key, tokenType),
        tokenType,
        tokenMetadata: tokenTypeMetadata[key],
        tokenDescription: tokenTypeMetadata[key].description,
        path,
    }));

    return tokenListElements;
};

// eslint-disable-next-line func-names
module.exports = {
    createListForCategory,
    createScssTokenName,
    createTokenDisplayName,
    getExampleColumnSize,
    getSubcategoriesForParentCategory,
    getTokensForCategory,
    getTokenTypeMetadata,
    validateConfiguration,
};

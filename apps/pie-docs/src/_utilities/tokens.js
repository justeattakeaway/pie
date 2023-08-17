const pieTokenCategories = require('@justeat/pie-design-tokens/metadata/tokenCategories.json');
const pieTokensMetadata = require('@justeat/pie-design-tokens/metadata/tokensMetadata.json');
const { objectHelpers, numberHelpers, stringHelpers } = require('./helpers');
const normalisedPieDesignTokens = require('../_data/normaliseTokens');
const tokenTypes = require('../_data/tokenTypes');

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

// TODO: can all of these be moved somewhere just for names?

const createHighContrastName = (tokenName) => {
    const highContrast = '(High Contrast)';
    const hasShade = tokenName.includes('Light') || tokenName.includes('Dark');

    if (hasShade) {
        const tokenNameArray = tokenName.split(' ');
        const shade = tokenNameArray.pop();

        return `${shade} ${tokenNameArray.join(' ')} ${highContrast}`;
    }

    return `${tokenName} ${highContrast}`;
};

const buildColorName = (tokenName) => {
    const highContrastSuffix = ' hc';

    if (tokenName.includes(highContrastSuffix)) {
        return createHighContrastName(tokenName.replace(highContrastSuffix, ''));
    }

    return tokenName;
};

/**
 * Creates a display name of the provided token. 'system-purple' would become 'System Purple'
 * @param { string; } tokenKey - the token key i.e. 'support-positive-02'
 * @param { string; } tokenType - the type of token i.e.color, spacing, radius
 * @returns { string; } the display name of the token
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
 * If tokens are numbers (spacing / radius), sort and return tokens in ascending order
 * @param {object} tokens
 * @returns { object; }
 */
const sortTokenList = (tokens) => {
    const sortedTokens = Object.keys(tokens).every(numberHelpers.isNumber)
        ? Object.entries(tokens).sort((a, b) => a[1] - b[1]) // [[key, value]]
        : Object.entries(tokens);

    return sortedTokens.map((token) => token[0]);
};

/**
 * Creates an object of token data
 * @param {object} tokens
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @param {string} path - path to the category i.e.  'path:color.alias.default' / 'path:color.alias.dark'
 * @param {string} category - category that pie tokens are grouped by i.e.  'containerBackgrounds' / 'borders'
 * @returns { object; }
 */
const getTokenData = (tokens, tokenType, path, category) => {
    const tokenTypeMetadata = getTokenTypeMetadata(path);
    const tokenList = category
        ? getTokensForCategory(category, tokenTypeMetadata)
        : sortTokenList(tokens);

    return tokenList.map((token) => ({
        token: tokens[token],
        tokenScssName: tokenTypeMetadata[token]?.scssName ?? createScssTokenName(token, tokenType, path),
        tokenDisplayName: tokenTypeMetadata[token]?.displayName ?? createTokenDisplayName(token, tokenType),
        tokenType,
        tokenMetadata: tokenTypeMetadata[token],
        tokenDescription: tokenTypeMetadata[token]?.description,
        path,
    }));
};

/**
 * Creates an object of token data for  SimpleTable
 * @param { string; } tokenType - the type of token i.e.color, spacing, radius
 * @param { string; } path - path to the category i.e.  'path:color.alias.default' / 'path:color.alias.dark'
 * @returns { object; }
 */
const getTokenCategories = (path, tokenType) => {
    const isGlobal = path.includes('global');
    const tokens = objectHelpers.getObjectPropertyByPath(normalisedPieDesignTokens, `theme.jet.${path}`);
    const parentCategories = objectHelpers.getObjectPropertyByPath(pieTokenCategories, `${tokenType}.${isGlobal ? 'global' : 'alias'}.parentCategories`);
    const categories = objectHelpers.getObjectPropertyByPath(pieTokenCategories, path);

    return { tokens, parentCategories, categories };
};

module.exports = {
    getTokenData,
    getTokenCategories,
};


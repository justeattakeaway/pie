const pieTokensMetadata = require('../../../tokensMetadata.json');
const pieTokenCategories = require('../../../tokenCategories.json');
const { objectHelpers } = require('../../../utilities/helpers');

/**
 * Gets all the metadata associated with tokens of a given type such as colour.
 * @param {string} path - path to the category i.e. 'path:color.alias.default' / 'path:color.alias.dark'
 * @returns {object} - object of tokens and the category they are sorted by i.e. white: { category: 'whiteBlack' }
 */
const getTokenTypeMetadata = path => objectHelpers.getObjectPropertyByPath(pieTokensMetadata, path);

/**
 * Gets all tokens for a given category such as 'orange'
 * @param {string} category - category that pie tokens are grouped by i.e.  'containerBackgrounds' / 'borders'
 * @param {string} tokenTypeMetadata - the type of token i.e. color, spacing, radius
 * @returns {string[]} - i.e. an array of tokens in each category [ 'divider-default', 'divider-inverse' ]
 */
const getTokensForCategory = (category, tokenTypeMetadata) => Object
    .keys(tokenTypeMetadata)
    .filter(token => tokenTypeMetadata[token].category === category);


/**
 * Gets all subcategory keys for a given parent category
 * @param {object} tokenTypeCategories - object of token category information
 * @param {string} parentCategoryKey - token category name i.e. 'reactive'
 * @returns - list of subcategory keys for a given parent category
 */
const getSubcategoriesForParentCategory = (tokenTypeCategories, parentCategoryKey) => Object
          .keys(tokenTypeCategories)
          .filter(categoryKey => tokenTypeCategories[categoryKey].parentCategory === parentCategoryKey);

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
 * Gets any parent categories for a token type such as colour, spacing
 * @param {string} parentCategoryPath
 * @returns - any parent categories for a token type
 */
const getParentCategoriesForTokenType = parentCategoryPath => objectHelpers.getObjectPropertyByPath(pieTokenCategories, parentCategoryPath);

// eslint-disable-next-line func-names
module.exports = {
    getParentCategoriesForTokenType,
    getSubcategoriesForParentCategory,
    getTokensForCategory,
    getTokenTypeMetadata,
    validateConfiguration
};

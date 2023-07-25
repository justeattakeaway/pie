const tokenTypes = require('../../../_data/tokenTypes');

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

// eslint-disable-next-line func-names
module.exports = {
    getExampleColumnSize,
    getSubcategoriesForParentCategory,
    validateConfiguration,
};

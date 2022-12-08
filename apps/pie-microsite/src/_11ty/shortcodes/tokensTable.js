/* eslint-disable no-trailing-spaces */
const pieDesignTokens = require('@justeat/pie-design-tokens/dist/tokens.json');
const pieTokensMetadata = require('../../pieDesignTokensMetadata.json');
const pieTokenCategories = require('../../pieDesignTokenCategories.json');
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
 * Builds the example color swatch to show on the token list item
 * @param {string} token - the token value i.e. #000, #ffffff, #000|0.85 or #000000|0.85
 * @returns {string} the color swatch example HTML string
 */
const buildColorExample = token => {
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

const tokenExampleElementHandler = {
    [tokenTypes.COLOR]: buildColorExample
};

/**
 * Builds an example element to display in the token list item.
 * This could be a color swatch, a representation of border radius or spacing etc.
 * @param {string} token - the token value
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @returns {string} the example HTML string
 */
const buildTokenExampleElement = (token, tokenType) => {
    try {
        return tokenExampleElementHandler[tokenType](token);
    } catch {
        throw new Error(`token type not recognised: ${tokenType}. Token:${token}`);
    }
};

/**
 * Builds a token pill element to display the SCSS token name in the token list item.
 * @param {string} tokenScssName - the text to display
 * @returns {string} the token pill HTML string
 */
const buildTokenPill = tokenScssName => `<span class="c-tokensTable-token">${tokenScssName}</span>`;

/**
 * Builds a token list item element to add to the tokens list.
 * @param {object} config
 * @param {string} config.token - the design token value
 * @param {string} config.tokenType - the type of design token i.e. color, spacing, radius
 * @param {string} config.tokenScssName - the design token SCSS name i.e. '$color-black'
 * @param {string} config.tokenDisplayName - the display name of the token i.e. 'Black'
 * @param {object} config.tokenMetadata - the metadata for the token. data such as descriptions
 * @returns {string} the list item HTML string
 */
const buildTokenListElements = ({
    token,
    tokenType,
    tokenScssName,
    tokenDisplayName,
    tokenMetadata
}) => {
    const tokenPill = buildTokenPill(tokenScssName);
    const tokenExampleElement = buildTokenExampleElement(token, tokenType);

    // TODO - description is just an example of how we might use the metadata
    // We would likely wanted to move them into a colour specific handler similar to how we build
    // the colour token example. Please consider them placeholder for now.
    const tokenDescription = tokenMetadata.description
        ? `<span class="c-tokensTable-tokenDescription">${tokenMetadata.description}</span>`
        : '';

    return `<li class="c-tokensTable-row c-tokensTable-item">
      ${tokenExampleElement}
      <div class="c-tokensTable-content">
        <span class="c-tokensTable-displayName">${tokenDisplayName}</span>${tokenDescription}
      </div>
      ${tokenPill}
    </li>`;
};

/**
 * Takes a list of design token list items and outputs these with appropriate column headers to be displayed above them
 * @param {string[]} listElements - the list items to render within the list
 * @returns {string} the tokens list HTML elements
 */
const buildTokensList = listElements => `<div class="c-tokensTable-row u-spacing-e--top u-showAboveWide c-tokensTable-heading">
  <span>Example</span>
  <span>Description</span>
  <span>Token name</span>
</div>
<ul class="c-tokensTable-list">
  ${listElements.join('')}
</ul>`;

/**
 * Creates a tokens list for a given category
 * @param {*} tokens 
 * @param {*} path 
 * @param {*} category 
 * @param {*} isGlobal 
 * @param {*} tokenType 
 * @returns 
 */
const buildTokensListForCategory = (tokens, path, category, isGlobal, tokenType) => {
    const tokensForCategory = getTokensForCategory(path, category, isGlobal, tokenType);
    const tokensMetadata = getTokenTypeMetadata(path, isGlobal, tokenType);

    // create a list item for the current token
    const tokenListElements = tokensForCategory.map(key => buildTokenListElements({
        token: tokens[key],
        tokenScssName: createScssTokenName(key, tokenType),
        tokenDisplayName: createTokenDisplayName(key, tokenType),
        tokenType,
        tokenMetadata: tokensMetadata[key]
    }));

    return buildTokensList(tokenListElements);
};

/**
 * Returns all categories for a token type such as colour
 * @param {*} tokenType 
 * @param {*} isGlobal 
 * @returns 
 */
const getCategoriesForTokenType = (tokenType, isGlobal) => {
    const categoriesPath = isGlobal
        ? `${tokenType}.global`
        : `${tokenType}.alias`;

    const categories = objectHelpers.getObjectPropertyByPath(pieTokenCategories, categoriesPath);

    return categories;
};

const buildCategoryLists = ({
    path, tokenType, isGlobal, tokens 
}) => {
    const categories = getCategoriesForTokenType(tokenType, isGlobal);

    // for each category, create an h2 and a list of token elements to render
    const lists = Object.keys(categories).map(category => {
        const heading = `<h2>${categories[category].displayName}</h2>`;
        const tokensList = buildTokensListForCategory(tokens, path, category, isGlobal, tokenType);

        // returns a 'chunk' of the tokens table page (a heading, the column headers, list of tokens and an option HR element)
        return `${heading}${tokensList}`;
    });

    // all 'chunks' of the tokens table page HTML in a single string
    return lists.join('<hr />');
};

/**
 * Gets all the metadata associated with tokens of a given type such as colour.
 * @param {*} path 
 * @param {*} isGlobal 
 * @param {*} tokenType 
 * @returns {object}
 */
const getTokenTypeMetadata = (path, isGlobal, tokenType) => {
    const tokensMetadataPath = isGlobal
        ? `${tokenType}.global`
        : `${tokenType}.alias.${path.includes('default') ? 'default' : 'dark'}`;

    const tokensMetadata = objectHelpers.getObjectPropertyByPath(pieTokensMetadata, tokensMetadataPath);

    return tokensMetadata;
};

/**
 * Gets all tokens for a given category such as 'orange'
 * @param {*} path 
 * @param {*} category 
 * @param {*} isGlobal 
 * @param {*} tokenType 
 * @returns {string[]}
 */
const getTokensForCategory = (path, category, isGlobal, tokenType) => {
    // filter tokens by the current category
    const tokenTypeMetadata = getTokenTypeMetadata(path, isGlobal, tokenType);
    const tokensForCategory = Object
      .keys(tokenTypeMetadata)
      .filter(token => tokenTypeMetadata[token].category === category);

    return tokensForCategory;
};

const getSubCategoriesForParentCategory = (tokenTypeCategories, parentCategoryKey) => {
    const subCategoryKeys = Object
            .keys(tokenTypeCategories)
            .filter(categoryKey => tokenTypeCategories[categoryKey].parentCategory === parentCategoryKey);

    return subCategoryKeys;
};

const buildCategoryListsWithParents = ({
    parentCategories, path, tokenType, isGlobal, tokens 
}) => {
    const parentCategoryKeys = Object.keys(parentCategories);
    // for each parent categorey
    const result = parentCategoryKeys.map(parentCategoryKey => {
        // go find any global or alias category types that have a parentCategory of the current category
        const tokenTypeCategories = isGlobal
            ? pieTokenCategories[tokenType].global
            : pieTokenCategories[tokenType].alias;

        const subCategoryKeys = getSubCategoriesForParentCategory(tokenTypeCategories, parentCategoryKey);

        // for each category belonging to the current parentCategory
        const subCategoryTokenLists = subCategoryKeys.map(categoryKey => {
            // create a sub heading for the category
            const subHeading = `<h3 class="c-tokensTable-sectionSubheading">${tokenTypeCategories[categoryKey].displayName}</h3>`;
            // get all tokens belonging to the category
            const tokensList = buildTokensListForCategory(tokens, path, categoryKey, isGlobal, tokenType);

            // create the tokens list
            return `${subHeading}${tokensList}`;
        });

        // create a heading for parent category
        const { displayName, description } = parentCategories[parentCategoryKey];

        const heading = `<h2 class="c-tokensTable-sectionHeading">${displayName}</h2>`;
        const descriptionMarkup = `<p class="c-tokensTable-sectionDescription">${description}</p>`;

        // combine all headings + lists
        const combinedMarkup = `${heading}${descriptionMarkup}${subCategoryTokenLists.join('')}`;

        // return parentCategory heading + sub headings and lists
        return combinedMarkup;
    });

    // combine and return all parentCategory lists
    return result.join('<hr />');
};

const buildTokenLists = (pathToTokens, path, tokenType) => {
    const isGlobal = path.includes('global');
    const parentCategories = getParentCategoriesForTokenType(tokenType, isGlobal);
    const tokens = objectHelpers.getObjectPropertyByPath(pieDesignTokens, pathToTokens);

    const config = {
        parentCategories,
        pathToTokens,
        path,
        tokenType,
        isGlobal,
        tokens
    };

    if (parentCategories) {
        return buildCategoryListsWithParents(config);
    }

    return buildCategoryLists(config);
};

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
 * @param {*} tokenType 
 * @param {*} isGlobalToken 
 * @returns 
 */
const getParentCategoriesForTokenType = (tokenType, isGlobalToken) => {
    const parentCategoryPath = `${tokenType}.${isGlobalToken ? 'global' : 'alias'}.parentCategories`;
    return objectHelpers.getObjectPropertyByPath(pieTokenCategories, parentCategoryPath);
};

// eslint-disable-next-line func-names
module.exports = function ({ path, tokenType }) {
    validateConfiguration({ path, tokenType });
    const pathToTokens = `theme.jet.${path}`;
    const lists = buildTokenLists(pathToTokens, path, tokenType);

    return `<div class="c-tokensTable">${lists}</div>`;
};

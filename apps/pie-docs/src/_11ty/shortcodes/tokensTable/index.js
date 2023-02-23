/* eslint-disable no-trailing-spaces */
const normalisedPieDesignTokens = require('../../../_data/normaliseTokens');
const pieTokenCategories = require('../../../tokenCategories.json');
const { stringHelpers, objectHelpers, numberHelpers } = require('../../../_utilities/helpers');
const tokenTypes = require('../../../_data/tokenTypes');
const { buildColorName, buildColorExample } = require('./tokenTypes/colour');
const { buildElevationExample } = require('./tokenTypes/elevation');
const { buildSpacingExample } = require('./tokenTypes/spacing');
const { buildFontExample } = require('./tokenTypes/font');
const { buildRadiusExample } = require('./tokenTypes/radius');
const { deindentHTML } = require('../shortcode-utilities');

const {
    getSubcategoriesForParentCategory,
    getExampleColumnSize,
    getTokensForCategory,
    getTokenTypeMetadata,
    validateConfiguration
} = require('./handleTokenData');

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
 * Builds an example element to display in the token list item.
 * This could be a color swatch, a representation of border radius or spacing etc.
 * @param {string} token - the token value i.e. #000, #ffffff, #000|0.85 or #000000|0.85
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @param {string} tokenMetadata - the metadata for the token. data such as descriptions
 * @param {string} path - path to the category i.e.  'path:color.alias.default' / 'path:color.alias.dark'
 * @returns {string} - the example HTML string
 */
const buildTokenExampleElement = (token, tokenType, tokenMetadata, path = {}) => {
    const tokenExampleElementHandler = {
        [tokenTypes.COLOR]: buildColorExample,
        [tokenTypes.ELEVATION]: buildElevationExample,
        [tokenTypes.FONT]: buildFontExample,
        [tokenTypes.RADIUS]: buildRadiusExample,
        [tokenTypes.SPACING]: buildSpacingExample
    };

    if (!tokenExampleElementHandler[tokenType]) {
        throw new Error(`token type not recognised: ${tokenType}. Token:${token}`);
    }

    return tokenExampleElementHandler[tokenType](token, tokenMetadata, path);
};

/**
 * Builds the global token used element displayed primarily by alias tokens
 * @param {string} globalToken the global token referenced by this alias token
 * @returns a <span> HTML string containing the global token used
 */
const buildGlobalTokenUsedElement = globalToken => deindentHTML(`
    <span class="c-tokensTable-tokenDescription">
        <span class="u-font-bold u-showAboveWide">Global token used:</span>
        <span class="c-tokensTable-token c-tokensTable-token--light">${globalToken}</span>
    </span>`);

/**
 * Builds the overall token description element for each type of token. The description content differs based on the type of token.
 * @param {*} tokenMetadata the metadata for the token. data such as descriptions
 * @returns {string} - the description HTML string
 */
const buildTokenDescriptionElement = tokenMetadata => {
    let description = tokenMetadata.description
        ? `<span class="c-tokensTable-tokenDescription ${tokenMetadata.globalToken ? 'u-spacing-b--bottom' : ''}">
            ${tokenMetadata.description}
           </span>`
        : '';

    if (tokenMetadata.globalToken) {
        description += buildGlobalTokenUsedElement(tokenMetadata.globalToken);
    }

    return description;
};


/**
 * Builds a token pill element to display the SCSS token name in the token list item.
 * @param {string} tokenScssName - the design token SCSS name i.e. '$color-black'
 * @returns {string} - the token pill HTML string
 */
const buildTokenPill = tokenScssName => `<span class="c-tokensTable-token">${tokenScssName}</span>`;

/**
 * Builds a token list item element to add to the tokens list.
 * @param {object} config
 * @param {string} config.token - the token value i.e. #000, #ffffff, #000|0.85 or #000000|0.85
 * @param {string} config.tokenType - the type of design token i.e. color, spacing, radius
 * @param {string} config.tokenScssName - the design token SCSS name i.e. '$color-black'
 * @param {string} config.tokenDisplayName - the display name of the token i.e. 'Black'
 * @param {object} config.tokenMetadata - the metadata for the token. data such as descriptions
 * @param {object} config.path - path to the category i.e.  'path:color.alias.default' / 'path:color.alias.dark'
 * @returns {string} - the list item HTML string
 */
const buildTokenListElements = ({
    token,
    tokenType,
    tokenScssName,
    tokenDisplayName,
    tokenMetadata = {},
    path = {}
}) => {
    const tokenPill = buildTokenPill(tokenScssName);
    const tokenExampleElement = buildTokenExampleElement(token, tokenType, tokenMetadata, path);

    // TODO - description is just an example of how we might use the metadata
    // We would likely wanted to move them into a colour specific handler similar to how we build
    // the colour token example. Please consider them placeholder for now.
    const tokenDescription = buildTokenDescriptionElement(tokenMetadata);

    return deindentHTML(`
    <li class="c-tokensTable-row c-tokensTable-item" style="${getExampleColumnSize(tokenType)}">
        ${tokenExampleElement}
        <div class="c-tokensTable-content">
            <span class="c-tokensTable-displayName">${tokenDisplayName}</span>
            ${tokenDescription}
        </div>
        ${tokenPill}
    </li>`);
};

/**
 * Takes a list of design token list items and outputs these with appropriate column headers to be displayed above them
 * @param {string[]} listElements - the list items to render within the list
 * @returns {string} - the tokens list HTML elements
 */
const buildTokensList = (listElements, tokenType) => deindentHTML(`
    <div class="c-tokensTable-row u-spacing-e--top u-showAboveWide c-tokensTable-heading" style="${getExampleColumnSize(tokenType)}">
        <span>Example</span>
        <span>Description</span>
        <span>Token name</span>
    </div>
    <ul class="c-tokensTable-list">
        ${listElements.join('')}
    </ul>`);


/**
 * Creates a tokens list for a given category
 * @param {object} tokens
 * @param {string} path - path to the category i.e.  'path:color.alias.default' / 'path:color.alias.dark'
 * @param {string} category - category that pie tokens are grouped by i.e.  'containerBackgrounds' / 'borders'
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @returns - a list of HTML token components separated by a <hr />
 */
const buildTokensListForCategory = (tokens, path, category, tokenType) => {
    const tokenTypeMetadata = getTokenTypeMetadata(path);
    const tokensForCategory = getTokensForCategory(category, tokenTypeMetadata);

    // create a list item for the current token
    const tokenListElements = tokensForCategory.map(key => buildTokenListElements({
        token: tokens[key],
        tokenScssName: createScssTokenName(key, tokenType, path),
        tokenDisplayName: tokenTypeMetadata[key].displayName ?? createTokenDisplayName(key, tokenType),
        tokenType,
        tokenMetadata: tokenTypeMetadata[key],
        path
    }));

    return buildTokensList(tokenListElements, tokenType);
};

/**
 * Builds uncategorised list of tokens
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @param {object} tokens
 * @param {object} path - path to the category i.e.  'path:color.alias.default' / 'path:color.alias.dark'
 * @returns - a string of html containing the list of tokens - with example, description and token name
 */
const buildUncategorisedLists = ({
    tokens, path, tokenType
}) => {
    const tokenTypeMetadata = getTokenTypeMetadata(path);

    // if tokens are numbers (spacing / radius), sort in ascending order
    const sortedTokens = Object.keys(tokens).every(numberHelpers.isNumber)
        ? Object.entries(tokens).sort((a, b) => a[1] - b[1]) // [[key, value]]
        : Object.entries(tokens);

    const tokenListElements = sortedTokens.map(token => buildTokenListElements({
        token: tokens[token[0]],
        tokenScssName: tokenTypeMetadata[token[0]]?.scssName ?? createScssTokenName(token[0], tokenType, path),
        tokenDisplayName: tokenTypeMetadata[token[0]]?.displayName ?? createTokenDisplayName(token[0], tokenType),
        tokenType,
        tokenMetadata: tokenTypeMetadata[token[0]],
        path
    }));

    return buildTokensList(tokenListElements, tokenType);
};

/**
 * Builds a categorised list of tokens
 * @param {string} path - path to the category i.e.  'path:color.alias.default' / 'path:color.alias.dark'
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @param {object} tokens
 * @returns - - a string of html containing the list of tokens - with category, example, description and token name
 */
const buildCategorisedLists = ({
    path, tokenType, tokens
}) => {
    const categories = objectHelpers.getObjectPropertyByPath(pieTokenCategories, path);

    // for each category, create an h2 and a list of token elements to render
    const categoryTokenLists = Object.keys(categories).map(category => {
        const heading = `<h2 class="c-tokensTable-title">${categories[category].displayName}</h2>`;
        const tokensList = buildTokensListForCategory(tokens, path, category, tokenType);

        // returns a 'chunk' of the tokens table page (a heading, the column headers, list of tokens and an option HR element)
        return `${heading}${tokensList}`;
    });

    // all 'chunks' of the tokens table page HTML in a single string
    return categoryTokenLists.join('<hr />');
};

/**
 * Builds a list of tokens that are categorised by parent and subcategory
 * @param {object} config
 * @returns {string} - list of tokens categorised by parent and subcategory
 */
const buildCategoryListsWithParents = ({
    parentCategories, path, tokenType, isGlobal, tokens
}) => {
    const subcategories = isGlobal
        ? pieTokenCategories[tokenType].global
        : pieTokenCategories[tokenType].alias;

    // for each parent category, create a list of tokens with a heading and description
    const parentCategoryLists = Object.keys(parentCategories).map(parentCategoryKey => {
        const subcategoryKeys = getSubcategoriesForParentCategory(subcategories, parentCategoryKey);

        // for each subCategory, create a list of tokens with a subheading
        const subcategoryTokenLists = subcategoryKeys.map(categoryKey => {
            const subHeading = `<h3 class="c-tokensTable-sectionSubheading">${subcategories[categoryKey].displayName}</h3>`;
            const tokensList = buildTokensListForCategory(tokens, path, categoryKey, tokenType);

            return `${subHeading}${tokensList}`;
        });

        // create heading and description for parent category
        const { displayName, description } = parentCategories[parentCategoryKey];
        const heading = `<h2 class="c-tokensTable-title c-tokensTable-sectionHeading">${displayName}</h2>`;
        const descriptionMarkup = `<p class="c-tokensTable-sectionDescription">${description}</p>`;

        // return heading, description and lists
        return `${heading}${descriptionMarkup}${subcategoryTokenLists.join('')}`;
    });

    // Add a divider to the bottom of the list
    return parentCategoryLists.join('<hr />');
};

/**
 * Builds all of the token lists for a given token type
 * @param {string} path - path to the category i.e.  'path:color.alias.default' / 'path:color.alias.dark'
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @returns {string} - HTML list of tokens
 */
const buildTokenLists = (path, tokenType) => {
    const isGlobal = path.includes('global');
    const tokens = objectHelpers.getObjectPropertyByPath(normalisedPieDesignTokens, `theme.jet.${path}`);
    const parentCategories = objectHelpers.getObjectPropertyByPath(pieTokenCategories, `${tokenType}.${isGlobal ? 'global' : 'alias'}.parentCategories`);
    const regularCategories = objectHelpers.getObjectPropertyByPath(pieTokenCategories, path);

    const config = {
        parentCategories,
        path,
        tokenType,
        isGlobal,
        tokens
    };

    if (!parentCategories && !regularCategories) {
        return buildUncategorisedLists(config);
    }

    return parentCategories
        ? buildCategoryListsWithParents(config)
        : buildCategorisedLists(config);
};

// eslint-disable-next-line func-names
module.exports = function ({ path, tokenType }) {
    validateConfiguration({ path, tokenType });
    const lists = buildTokenLists(path, tokenType);

    return `<div class="c-tokensTable">${lists}</div>`;
};

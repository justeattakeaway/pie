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

const tokenExampleElementHandler = {
    [tokenTypes.COLOR]: createColorExample
};

/**
 * Creates an example element to display in the token list item.
 * This could be a color swatch, a representation of border radius or spacing etc.
 * @param {string} token - the token value
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @returns {string} the example HTML string
 */
const createTokenExampleElement = (token, tokenType) => {
    try {
        return tokenExampleElementHandler[tokenType](token);
    } catch {
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
 * @param {object} config.tokenMetadata - the metadata for the token. data such as descriptions
 * @returns {string} the list item HTML string
 */
const createTokenListItem = ({
    token,
    tokenType,
    tokenScssName,
    tokenDisplayName,
    tokenMetadata
}) => {
    const tokenPill = createTokenPill(tokenScssName);
    const tokenExampleElement = createTokenExampleElement(token, tokenType);

    // TODO - description and global token are just examples of how we might use the metadata
    // We would likely wanted to move them into a colour specific handler similar to how we build
    // the colour token example. Please consider them placeholder for now.
    const tokenDescription = tokenMetadata.description
        ? `<span class="c-tokensTable-tokenDescription">${tokenMetadata.description}</span>`
        : '';
    const globalTokenUsed = tokenMetadata.globalToken
        ? `<span class="c-tokensTable-globalToken">Global token used: ${tokenMetadata.globalToken}</span>`
        : '';

    return `<li class="c-tokensTable-row c-tokensTable-item">
      ${tokenExampleElement}
      <div class="c-tokensTable-content">
        <span class="c-tokensTable-displayName">${tokenDisplayName}</span>${tokenDescription}${globalTokenUsed}
      </div>
      ${tokenPill}
    </li>`;
};

/**
 * Takes a list of design token list items and outputs these with appropriate column headers to be displayed above them
 * @param {string[]} listElements - the list items to render within the list
 * @returns {string} the tokens list HTML elements
 */
const createTokensListSection = listElements => `<div class="c-tokensTable-row u-spacing-e--top u-showAboveWide c-tokensTable-heading">
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

// gets the metadata for all tokens of a given type i.e. all global colors, alias colors
const getTokenTypeMetadata = (path, isGlobal, tokenType) => {
    const tokensMetadataPath = isGlobal
        ? `${tokenType}.global`
        : `${tokenType}.alias.${path.includes('default') ? 'default' : 'dark'}`;

    const tokensMetadata = objectHelpers.getObjectPropertyByPath(pieTokensMetadata, tokensMetadataPath);

    return tokensMetadata;
};

// gets the category data for a token type i.e. color, spacing
const getTokenTypeCategoryMetadata = (isGlobal, tokenType) => {
    const categoriesPath = isGlobal
        ? `${tokenType}.global`
        : `${tokenType}.alias`;

    const categories = objectHelpers.getObjectPropertyByPath(pieTokenCategories, categoriesPath);

    return categories;
};

const getTokensByCategory = (path, category, isGlobal, tokenType) => {
    // filter tokens by the current category
    const tokenTypeMetadata = getTokenTypeMetadata(path, isGlobal, tokenType);
    const tokensForCategory = Object
      .keys(tokenTypeMetadata)
      .filter(token => tokenTypeMetadata[token].category === category);

    return tokensForCategory;
};

const createListOfTokenItems = (tokens, path, category, isGlobal, tokenType) => {
    const tokensForCategory = getTokensByCategory(path, category, isGlobal, tokenType);
    const tokensMetadata = objectHelpers.getObjectPropertyByPath(pieTokensMetadata, path);
    // create a list item for the current token
    const tokenListItems = tokensForCategory.map(key => createTokenListItem({
        token: tokens[key],
        tokenScssName: createScssTokenName(key, tokenType),
        tokenDisplayName: createTokenDisplayName(key, tokenType),
        tokenType,
        tokenMetadata: tokensMetadata[key]
    }));

    return createTokensListSection(tokenListItems);
};

const createCategorisedTokenLists = (pathToTokens, path, tokenType, isGlobal) => {
    const categories = getTokenTypeCategoryMetadata(isGlobal, tokenType);
    const tokens = objectHelpers.getObjectPropertyByPath(pieDesignTokens, pathToTokens);

    // for each category, create an h2 and a list of token elements to render
    const lists = Object.keys(categories).map((category, index, arr) => {
        const heading = `<h2>${categories[category].displayName}</h2>`;
        const tokensList = createListOfTokenItems(tokens, path, category, isGlobal, tokenType);

        const isLastItem = index === arr.length - 1;

        // returns a 'chunk' of the tokens table page (a heading, the column headers, list of tokens and an option HR element)
        return `${heading}${tokensList}${!isLastItem ? '<hr />' : ''}`;
    });

    // all 'chunks' of the tokens table page HTML in a single string
    return lists.join('');
};

const buildPage = (pathToTokens, path, tokenType) => {
    const isGlobal = path.includes('global');
    const parentCategoryPath = `${tokenType}.${isGlobal ? 'global' : 'alias'}.parentCategories`;

    // get all parent categories for global or alias
    const parentCategories = objectHelpers.getObjectPropertyByPath(pieTokenCategories, parentCategoryPath);

    // if any parent categories
    if (parentCategories) {
        const parentCategoryKeys = Object.keys(parentCategories);
        const tokens = objectHelpers.getObjectPropertyByPath(pieDesignTokens, pathToTokens);
        // for each parent categorey
        const result = parentCategoryKeys.map(parentCategoryKey => {
            const { displayName, description } = parentCategories[parentCategoryKey];
            // create a heading for parent category
            const heading = `<h2 class="c-tokensTable-sectionHeading">${displayName}</h2>`;
            const descriptionMarkup = `<p class="c-tokensTable-sectionDescription">${description}</p>`;

            // go find any global or alias category types that have a parentCategory of the current category
            const tokenTypeCategories = isGlobal
                ? pieTokenCategories[tokenType].global
                : pieTokenCategories[tokenType].alias;

            const childCategoryKeys = Object
                .keys(tokenTypeCategories)
                .filter(categoryKey => tokenTypeCategories[categoryKey].parentCategory === parentCategoryKey);

            // for each category belonging to the current parentCategory
            const innerResult = childCategoryKeys.map(categoryKey => {
                // create a sub heading for the category
                const subHeading = `<h3 class="c-tokensTable-sectionSubheading">${tokenTypeCategories[categoryKey].displayName}</h3>`;
                // get all tokens belonging to the category
                const tokensList = createListOfTokenItems(tokens, path, categoryKey, isGlobal, tokenType);

                // create the tokens list
                return `${subHeading}${tokensList}`;
            });

            // combine all headings + lists
            const combinedMarkup = `${heading}${descriptionMarkup}${innerResult.join('')}`;

            // return parentCategory heading + sub headings and lists
            return combinedMarkup;
        });

        // combine and return all parentCategory lists
        return result.join('<hr />');
    }

    // if no parent categories
    // proceed as normal
    return createCategorisedTokenLists(pathToTokens, path, tokenType, isGlobal);
};

// eslint-disable-next-line func-names
module.exports = function ({ path, tokenType }) {
    validateConfiguration({ path, tokenType });
    const pathToTokens = `theme.jet.${path}`;
    const lists = buildPage(pathToTokens, path, tokenType);

    return `<div class="c-tokensTable">${lists}</div>`;
};

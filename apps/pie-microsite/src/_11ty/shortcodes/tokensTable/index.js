/* eslint-disable no-trailing-spaces */
const normalizedPieDesignTokens = require('../../../_data/normalizeTokens');
const pieTokenCategories = require('../../../tokenCategories.json');
const { stringHelpers, objectHelpers, numberHelpers } = require('../../../utilities/helpers');
const tokenTypes = require('../../../_data/tokenTypes');
const { isColorDark } = require('../../../utilities/colors');
const {
    getParentCategoriesForTokenType,
    getSubcategoriesForParentCategory,
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
const createScssTokenName = (tokenKey, tokenType) => `$${tokenType}-${tokenKey}`;

const createHighContrastName = tokenName => {
    const highContrast = '(High Contrast)';
    const hasShade = tokenName.includes('Light') || tokenName.includes('Dark');

    if (hasShade) {
        const tokenNameArray = tokenName.split(' ');
        const shade = tokenNameArray.pop();

        return `${shade} ${tokenNameArray.join(' ')} ${highContrast}`;
    }

    return `${tokenName} ${highContrast}`;
};

const buildColorName = tokenName => {
    const highContrastSuffix = ' Hc';

    if (tokenName.includes(highContrastSuffix)) {
        return createHighContrastName(tokenName.replace(highContrastSuffix, ''));
    }

    return tokenName;
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
    const capitalisedNameSegments = tokenNameSegments.map(stringHelpers.capitaliseFirstLetter);
    const tokenName = capitalisedNameSegments.join(' ');

    return shouldShowPrefix 
        ? `${stringHelpers.capitaliseFirstLetter(tokenType)} ${tokenName}`
        : buildColorName(tokenName);
};

/**
 * Splits a font/typography token into a parsable css value
 * @param {object|string} token - the token value i.e. {"size": "48|56","weight": "ExtraBold","text-decoration": "underline", ...fontProperties} or
 * size/weight values as string such as "12|16" "Regular"
 * @param {object} tokenMetadata - the metadata for the token. data such as descriptions
 * @returns {object} an object containing the font styles of the token.
 */
const splitFontAliasToken = (token, tokenMetadata) => {
    const isGlobal = typeof token === 'string';
    const { category } = tokenMetadata;
    const fontWeightMap = {
        Regular: 400,
        Bold: 700,
        ExtraBold: 800
    };

    if (isGlobal) {
        return {
            fontFamily: category === 'fontFamily' && token,
            fontSize: category === 'fontSize' && token.split('|')[0],
            lineHeight: category === 'fontSize' && token.split('|')[1],
            fontWeight: category === 'fontWeight' && fontWeightMap[token],
            textDecoration: category === 'fontStyle' && token,
            letterSpacing: category === 'letterSpacing' && token,
            paragraphSpacing: category === 'paragraphSpacing' && token
        }; 
    }

    return {
        fontFamily: token.family,
        fontSize: token.size.split('|')[0], 
        lineHeight: token.size.split('|')[1],
        fontWeight: fontWeightMap[token.weight],
        textDecoration: token['text-decoration'],
        letterSpacing: token['letter-spacing']
    };
};

/**
 * Splits a color token into it's hexcode and opacity value (if one is provided)
 * @param {string} token - the token value i.e. #000, #ffffff, #000|0.85 or #000000|0.85
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
 * @returns {string} - the color swatch example HTML string
 */
const buildColorExample = token => {
    const tokenValues = splitColorToken(token);
    const classes = ['c-tokensTable-example'];

    if (tokenValues.opacity) {
        classes.push('c-tokensTable-example--checked');
    }

    if (!isColorDark(tokenValues.hexcode)) {
        classes.push('c-tokensTable-example--bordered');
    }

    const cssVariable = tokenValues.opacity
        ? `--example-checked-opacity: ${tokenValues.opacity}`
        : `--example-background-color: ${tokenValues.hexcode}`;

    return `<div class="${classes.join(' ')}" style="${cssVariable}";></div>`;
};

/**
 * Builds the example radius swatch to show on the token list item
 * @param {string} token - the token value in pixels
 * @returns {string} - the radius swatch example HTML string
 */
const buildRadiusExample = token => {
    const classes = ['c-tokensTable-example-radius'];
    const style = `--example-radius: ${token}px`;

    return `
        <div class="c-tokensTable-example-radius-container">
            <div class="${classes.join(' ')}" style="${style}"></div>
        </div>
    `;
};

/**
 * Builds the example spacing swatch to show on the token list item
 * @param {string} token - the token value i.e. 24, 80
 * @returns {string} - the spacing swatch example HTML string
 */
const buildSpacingExample = token => {
    const cssVariable = `--example-spacing: ${token}px`;

    return `<div class="c-tokensTable-example-spacing-container"><div class="c-tokensTable-example--spacing" style="${cssVariable}";></div></div>`;
};

/**
* Builds an example font/typography element to show on the token list item
 * @param {object|string} token - the token value i.e. {"size": "48|56","weight": "ExtraBold","text-decoration": "underline", ...fontProperties} or
 * size/weight values as string such as "12|16" "Regular"
 * @param {object} tokenMetadata - the metadata for the token. data such as descriptions
 * @returns {string} - the typography example HTML string
 */
const buildFontExample = (token, tokenMetadata) => { 
    const {
        fontFamily, fontSize, lineHeight, fontWeight,
        textDecoration, letterSpacing, paragraphSpacing 
    } = splitFontAliasToken(token, tokenMetadata);
    const classes = ['c-tokensTable-example--font'];
    const cssVariables = [
        fontFamily && `--example-font-family: ${fontFamily}`,    
        fontSize && `--example-font-size: ${fontSize}px`,
        lineHeight && `--example-font-line-height: ${lineHeight}px`,
        fontWeight && `--example-font-weight: ${fontWeight}`,
        textDecoration && `--example-font-text-decoration: ${textDecoration}`,
        letterSpacing && `--example-font-letter-spacing: ${letterSpacing}`,
        paragraphSpacing && `--example-font-paragraph-spacing: ${paragraphSpacing}px`
    ].filter(Boolean);
    
    if (paragraphSpacing) classes.push('c-tokenTable-example-paragraph--font');

    const content = paragraphSpacing ? '<p>Paragraph</p><p>Paragraph</p>' : 'String';

    return `<div class="${classes.join(' ')}" style="${cssVariables.join('; ')}">${content}</div>`;
};
/**
 * Builds an example element to display in the token list item.
 * This could be a color swatch, a representation of border radius or spacing etc.
 * @param {string} token - the token value i.e. #000, #ffffff, #000|0.85 or #000000|0.85
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @returns {string} - the example HTML string
 */
const buildTokenExampleElement = (token, tokenType, tokenMetadata) => {
    const tokenExampleElementHandler = {
        [tokenTypes.COLOR]: buildColorExample,
        [tokenTypes.FONT]: buildFontExample,
        [tokenTypes.RADIUS]: buildRadiusExample,
        [tokenTypes.SPACING]: buildSpacingExample
    };

    if (!tokenExampleElementHandler[tokenType]) {
        throw new Error(`token type not recognised: ${tokenType}. Token:${token}`);
    }

    return tokenExampleElementHandler[tokenType](token, tokenMetadata);
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
 * @returns {string} - the list item HTML string
 */
const buildTokenListElements = ({
    token,
    tokenType,
    tokenScssName,
    tokenDisplayName,
    tokenMetadata = {}
}) => {
    const tokenPill = buildTokenPill(tokenScssName);
    const tokenExampleElement = buildTokenExampleElement(token, tokenType, tokenMetadata);

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
 * @returns {string} - the tokens list HTML elements
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
        tokenScssName: createScssTokenName(key, tokenType),
        tokenDisplayName: tokenTypeMetadata[key].displayName ?? createTokenDisplayName(key, tokenType),
        tokenType,
        tokenMetadata: tokenTypeMetadata[key]
    }));

    return buildTokensList(tokenListElements);
};

/**
 * Builds uncategorised list of tokens
 * @param {string} tokenType - the type of token i.e. color, spacing, radius
 * @param {object} tokens
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
        tokenScssName: tokenTypeMetadata[token[0]]?.scssName ?? createScssTokenName(token[0], tokenType),
        tokenDisplayName: tokenTypeMetadata[token[0]]?.displayName ?? createTokenDisplayName(token[0], tokenType),
        tokenType,
        tokenMetadata: tokenTypeMetadata[token[0]]
    }));

    return buildTokensList(tokenListElements);
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
        const heading = `<h2>${categories[category].displayName}</h2>`;
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
        const heading = `<h2 class="c-tokensTable-sectionHeading">${displayName}</h2>`;
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
    const tokens = objectHelpers.getObjectPropertyByPath(normalizedPieDesignTokens, `theme.jet.${path}`);
    const parentCategories = getParentCategoriesForTokenType(`${tokenType}.${isGlobal ? 'global' : 'alias'}.parentCategories`);
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

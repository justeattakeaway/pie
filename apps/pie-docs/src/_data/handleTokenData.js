const { objectHelpers, numberHelpers } = require('../_utilities/helpers');
const normalisedPieDesignTokens = require('./normaliseTokens');
const pieTokenCategories = require('../tokenCategories.json');
const {
    createListForCategory,
    createScssTokenName,
    getTokenTypeMetadata,
} = require('../_11ty/shortcodes/tokensTable/handleTokenData');

const getCategorisedList = (categories, tokens, tokenType, path) => {
    const categorisedTokenLists = Object.keys(categories).map((category) => {
        const categoryHtml = `<h2>${categories[category].displayName}</h2>`;
        const listItems = createListForCategory(tokens, path, category, tokenType);
        const rows = listItems.map((item) => [item.tokenScssName, item.tokenDescription]);

        return { category: categoryHtml, data: { rows } };
    });

    return categorisedTokenLists;
};

const getTokenList = (tokens, tokenType, path, tokenTypeMetadata) => {
    // if tokens are numbers (spacing / radius), sort in ascending order
    const sortedTokens = Object.keys(tokens).every(numberHelpers.isNumber)
        ? Object.entries(tokens).sort((a, b) => a[1] - b[1]) // [[key, value]]
        : tokens;

    const tokenListElements = sortedTokens.map((token) => ({
        tokenScssName: createScssTokenName(token[0], tokenType, path),
        description: tokenTypeMetadata[token[0]].description,
    }));

    return tokenListElements.map((item) => [item.tokenScssName, item.description]);
};

const getTokenData = (tokenData) => {
    const { tokenType, path } = tokenData;
    const tokens = objectHelpers.getObjectPropertyByPath(normalisedPieDesignTokens, `theme.jet.${path}`);
    const tokenTypeMetadata = getTokenTypeMetadata(path);

    const categories = objectHelpers.getObjectPropertyByPath(pieTokenCategories, path);

    if (categories) {
        return getCategorisedList(categories, tokens, tokenType, path);
    }

    const rows = getTokenList(tokens, tokenType, path, tokenTypeMetadata);

    return { rows };
};

module.exports = {
    getTokenData,
};

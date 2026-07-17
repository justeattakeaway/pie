const { CONSTANTS, writeToFile } = require('./helpers');

const { GLOBAL_TOKEN_KEY, ALIAS_TOKEN_KEY } = CONSTANTS;

/**
 * Returns a token value using the specified category and name properties passed in.
 *
 * @param {object} themeTokens - An object containing all of the theme tokens – this is needed when converting the aliases as it holds th global token values
 * @param {string} category – Object key referencing the category of global token to access (i.e. color, font, radius)
 * @param {string} name – Object key referencing the property name to access
 * @returns {string} – Value of the global token referenced using the category and name specified
 */
const convertAliasToValue = (themeTokens, category, name) => {
    const [baseCategory] = category.split('-'); // ignore sub-categories

    // If the category is a color and it includes a pipe character, then it'll be in the format `ALIAS_NAME|OPACITY` or `ALIAS_NAME,PERCENTAGE%`
    // So we need to replace the ALIAS_NAME with the global value (for JSON compilation, we leave the opacity separated by a pipe)
    // if not, then we can just convert the alias using the global values we have
    if (baseCategory === 'color' && name.includes('|')) {
        const nameParts = name.split('|'); // nameParts is just the name split by the `|` character
        return `${themeTokens[baseCategory][GLOBAL_TOKEN_KEY][nameParts[0]]}|${nameParts[1]}`;
    } else if (baseCategory === 'color' && name.includes('%')) {
        const nameParts = name.split(','); // nameParts is just the name split by the `,` character
        const percentage = parseFloat(nameParts[1]) / 100.0;
        return `${themeTokens[baseCategory][GLOBAL_TOKEN_KEY][nameParts[0]]}|${percentage}`;
    } else if (baseCategory === 'color' && name === 'transparent') {
        return `${themeTokens[baseCategory][GLOBAL_TOKEN_KEY].white}|0`;
    }

    // link to global
    return themeTokens[baseCategory][GLOBAL_TOKEN_KEY][name];
};

/**
 * Takes a given set of tokens, and then loops down into the alias tokens to parse them into values based on their link to the declared globals
 * If the token references an object, then it will recurse down into that token object.
 * This recursion is necessary when tokens have theme subsets (such as light/dark theme subsets)
 *
 * @param {object} themeTokens - An object containing all of the theme tokens – this is needed when converting the aliases as it holds th global token values
 * @param {string} category - Category name describing the current tokens
 * @param {object} aliasTokens - An object containing a subset of tokens to drill down into
 * @returns {object} – A valid, parsed JSON object with converted alias tokens
 */
const parseTokens = (themeTokens, category, aliasTokens) => {
    // Grab all of the alias keys
    const categoryAliases = Object.entries(aliasTokens);

    categoryAliases.forEach(([tokenName, tokenValue]) => {
        if (tokenValue === null) return; // continue

        if (typeof tokenValue === 'string') {
            aliasTokens[tokenName] = convertAliasToValue(themeTokens, category, tokenValue);
        } if (category.includes('gradient')) {
            Object.values(tokenValue).forEach((gradient) => {
                gradient.colors = gradient.colors.map((c) => ({ ...c, color: convertAliasToValue(themeTokens, 'color', c.color) }));
            });
        } else if (typeof tokenValue === 'object') {
            const updatedCategoryName = tokenName === 'default' ? category : `${category}-${tokenName}`;
            aliasTokens[tokenName] = parseTokens(themeTokens, updatedCategoryName, tokenValue);
        }
    });

    return aliasTokens;
};

/**
 * Loops through the defined themes in the design tokens and parses them so that alias values are replaced where necessary
 *
 * @param {object} tokens – Object for which we will loop through each defined theme (for example, the jet theme object or skip theme object)
 * @returns {string} – A valid JSON Object, with alias tokens replaced by global tokens
 */
const parseThemes = (tokens) => {
    // first get the theme keys to loop through
    const themeKeys = Object.keys(tokens.theme).filter((key) => key !== 'global');
    if (themeKeys.length < 1) return false;

    // then loop through them
    themeKeys.forEach((themeKey) => {
        const themeTokens = tokens.theme[themeKey];
        const categoryKeys = Object.keys(themeTokens);

        // Loop through the categories e.g. color/font/spacing
        categoryKeys.forEach((category) => {
            // Loop through alias tokens in this category and convert them
            if (typeof themeTokens[category][ALIAS_TOKEN_KEY] !== 'undefined') {
                tokens.theme[themeKey][category][ALIAS_TOKEN_KEY] = parseTokens(themeTokens, category, themeTokens[category][ALIAS_TOKEN_KEY]);
            }
        });
    });
    return tokens;
};

/**
 * Default export. Called with the whole set of design tokens and handles calls out to other functions.
 *
 * (1) Parses the tokens into a new JSON object.
 * (2) Sends the output of (1) to a function that saves the data to a JSON file.
 * @param {*object} tokens – set of tokens to convert into SCSS variables
 * @returns {boolean} - indicates success or failure when processing themes
 */
const compileToJson = (tokens, version) => {
    if (!tokens || !tokens.theme) return false;

    const parsedTokens = parseThemes(tokens);
    parsedTokens.version = version;

    const jsonData = JSON.stringify(parsedTokens, null, 2);
    writeToFile('tokens', 'json', jsonData);
    return true;
};

module.exports = compileToJson;

const { CONSTANTS, writeToFile } = require('./helpers');

const { GLOBAL_TOKEN_KEY } = CONSTANTS;
const PROLOG = '<?xml version="1.0" encoding="utf-8"?>';
const compiledCategories = ['color']; // Current allowed list of categories

/**
 * Creates a colour variable from the parameters passed in
 *
 * @param {string} theme – Name of the theme being parsed
 * @param {string} category - Category name describing the current tokens
 * @param {string} name – Object key referencing the property name to access
 * @param {string} value – Value of the global token referenced using the category and name specified
 * @returns
 */
const createColorVariable = (theme, category, name, value) => {
    let xmlVariable = '';

    const resName = (category.includes('-') ? `${category.split('-')[1]}-${name}` : name).replace(/-/g, '_');
    xmlVariable = `    <color name="${theme}_${resName}">${value}</color>\n`;

    return xmlVariable;
};

/**
 * Takes a given set of tokens and loops through the key/value pairs creating valid SCSS variables
 * If the token references an object, then it recurses down into that object to create variable tokens from this object.
 * This recursion is necessary when tokens have theme subsets (such as light/dark theme subsets)
 *
 * @param {string} theme -  Name of the theme being parsed
 * @param {string} category - Category name describing the current tokens
 * @param {object} tokens - An object containing a subset of tokens to drill down into
 * @returns {string} – A valid XML string, compiled from the `tokens` object
 */
const parseTokens = (theme, category, tokens) => {
    let xmlOutput = '';

    tokens.forEach(([name, value]) => {
        if (value === null) return; // continue

        if (typeof value === 'string') {
            // currently only converts colours, but will need to extend this to convert other tokens
            xmlOutput += createColorVariable(theme, category, name, value);
        } else if (typeof value === 'object') {
            const updatedCategoryName = (name === 'default' ? category : `${category}-${name}`);
            xmlOutput += parseTokens(theme, updatedCategoryName, Object.entries(value));
        }
    });

    return xmlOutput;
};

/**
 * Loops through the defined theme categories in the design tokens and parses them into valid XML
 *
 * @param {string} theme – Name of the theme being parsed
 * @param {object} themeTokens – Theme object subset of the entire design token object (for example, the jet theme object or skip theme object)
 * @returns {string} – A valid XML string, compiled from the `themeTokens` object
 */
const createXmlFromTheme = (theme, themeTokens) => {
    let xmlOutput = '';

    const categoryKeys = Object.keys(themeTokens); // List of category keys (e.g. color/font/spacing)
    categoryKeys.forEach((category) => {
        // Currently only compiling colours (as that's the output format for the variables atm)
        if (compiledCategories.includes(category)) {
            // loop through global colours
            if (typeof themeTokens[category][GLOBAL_TOKEN_KEY] !== 'undefined') { // Check we have some globals defined at root level
                const categoryGlobals = Object.entries(themeTokens[category][GLOBAL_TOKEN_KEY]);
                xmlOutput += parseTokens(theme, category, categoryGlobals);
            }

            // TODO - Confirm with Android devs how they want these values compiled (can then uncomment)
            // const categoryAliases = Object.entries(themeTokens[category][CONSTANTS.ALIAS_TOKEN_KEY]);
            // xmlOutput += parseTokens(theme, category, categoryAliases);
        }
    });
    return xmlOutput;
};

/**
 * Default export. Called with the whole set of design tokens and handles calls to other functions.
 *
 * (1) Parses the tokens into XML via other functions.
 * (2) Sends the output of (1)) to a function that saves the data to an XML file.
 *
 * @param {object} tokens
 * @returns {boolean} - indicates success or failure when processing themes
 */
const compileToXml = (tokens) => {
    if (!tokens || !tokens.theme || typeof tokens.theme !== 'object') {
        return false;
    }

    const themeKeys = Object.keys(tokens.theme).filter((key) => key !== 'global');
    if (themeKeys.length < 1) return false;

    const xmlBody = themeKeys.reduce((body, themeKey) => body + createXmlFromTheme(themeKey, tokens.theme[themeKey]), '');

    const xmlString = `${PROLOG}\n<resources>\n${xmlBody}</resources>`;
    writeToFile('colors', 'xml', xmlString); // Could this be just one big designTokens.xml file eventually?
    return true;
};

module.exports = compileToXml;

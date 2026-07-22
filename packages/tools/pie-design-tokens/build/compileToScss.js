const {
    CONSTANTS,
    convertGlobalTokenValueToStylesValue,
    convertHexValueToRGB,
    convertWordToPascalCase,
    createRulesForDark,
    getConvertedShadowsToBoxShadowValues,
    formatLine,
    filterAndTransformWebTokens,
    variableGetterFactory,
    writeToFile,
} = require('./helpers');

const getScssVarValue = variableGetterFactory('scss');

const {
    ADD_REM_TO_VALUE,
    ALIAS_TOKEN_KEY,
    APPLY_QUOTES_TO_VALUE,
    CATEGORIES_WITH_UNITS,
    CATEGORY_WITH_TIMING,
    GLOBAL_TOKEN_KEY,
} = CONSTANTS;

let currentThemeTokens = {};

// Variable used to keep track of the current nesting depth for proper indentation
let nesting = 0;

/**
 * Returns a token value using the specified category and name properties passed in.
 * Also handles some special cases (such as rgb format with opacity for colour aliases).
 *
 * @param {string} category – Object key referencing the category of global token to access (i.e. color, font, radius)
 * @param {string} name – Object key referencing the property name to access
 * @returns {string} – Value of the global token referenced using the category and name specified
 */
const convertAliasToValue = (category, name) => {
    const [baseCategory] = category.split('-'); // ignore sub-categories
    let varName = `${baseCategory}-${name}`;

    // If the category is a color and it includes a pipe character, then it'll be in the format `ALIAS_NAME|OPACITY` or `ALIAS_NAME,PERCENTAGE%`
    // So we need to replace the ALIAS_NAME with the global token value and then convert that hex value to RGB
    // if not, then we can just convert the alias using the global values we have
    if (baseCategory === 'color' && name.includes('|')) {
        const nameParts = name.split('|');
        varName = `${baseCategory}-${nameParts[0]}`;
        const globalColorTokens = currentThemeTokens.color[GLOBAL_TOKEN_KEY];
        const hexValue = globalColorTokens[nameParts[0]];

        return convertHexValueToRGB(hexValue, nameParts[1]);
    } else if (baseCategory === 'color' && name.includes('%')) {
        // If the category is a color and it includes %, then it'll be in the format `ALIAS_NAME,PERCENTAGE%`
        // So we return the object with hexValue and percentage to be able to separate it later into 2 tokens
        const [aliasName, percentage] = name.split(',');
        const globalColorTokens = currentThemeTokens.color[GLOBAL_TOKEN_KEY];
        const hexValue = globalColorTokens[aliasName];

        return { hexValue, percentage };
    }

    // link to global variable name
    return getScssVarValue(varName);
};

/**
 * Creates an SCSS variable string from the defined properties passed in.
 * If passed category is in CATEGORIES_WITH_UNITS it will add rem/px to the end of the value if the value is not a global token
 * If passed category is 'font' and name is in the APPLY_QUOTES_TO_VALUE const, it will wrap the value into quotes
 *
 * @param {string} category – String referencing the category name of the variable (i.e. color, font, radius)
 * @param {string} name – String defining the property name to be used when producing the SCSS variable
 * @param {string} value – The value to be used as the SCSS property definition (RHS)
 * @returns {string} – Returns a complete, valid SCSS variable as a string
 */
const createScssVariable = (category, name, value) => {
    const varName = `${category}-${name}`;
    let compiledValue = value;
    if (CATEGORIES_WITH_UNITS.includes(category) && !value.startsWith('$') && value !== '0') {
        if (category === 'radius' && ADD_REM_TO_VALUE.includes(name)) {
            compiledValue = `${value}rem`;
        } else {
            compiledValue = `${value}px`;
        }
    }

    if (category === 'motion' && name.includes(CATEGORY_WITH_TIMING)) {
        compiledValue = `${value}ms`;
    }

    if (category === 'elevation' && !value.length) {
        compiledValue = '\'none\'';
    }

    if (category === 'font' && APPLY_QUOTES_TO_VALUE.includes(name)) {
        compiledValue = `'${value}'`;
    }

    // shortens scss variable name i.e. `font-size-12-font-size` becomes `font-size-12`
    const shortenedVar = varName.replace('-font-size', '');

    return formatLine(`${getScssVarValue(shortenedVar)}: ${compiledValue};`, 'variable', nesting);
};

/**
 * Creates a SCSS gradient value from a gradient token object
 *
 * @param {object} gradientValue - The gradient token object with colors, type, and angle
 * @returns {string} - A valid SCSS gradient value
 */
const createGradientValue = ({ colors, type, angle }) => `${type}-gradient(${angle}deg, ${colors.map(({ color, stop }) => `${getScssVarValue(`color-${color}`)} ${stop}%`).join(', ')})`;

/**
 * Takes a given set of tokens and loops through the key/value pairs creating valid SCSS variables
 * If the token references an object, then it will recurse down into that object to create variable tokens from this object.
 * This recursion is necessary when tokens have theme subsets (such as light/dark theme subsets)
 *
 * @param {string} theme -  Name of the theme being parsed
 * @param {string} category - Category name describing the current tokens
 * @param {object} tokens - An object containing a subset of tokens to drill down into
 * @param {boolean} isAliasToken - If true, the alias value should be replaced by a reference to the global value when compiled.
 * @returns {string} – A valid SCSS string, compiled from the `tokens` object
 */
const parseTokens = (theme, category, tokens, isAliasToken = false) => {
    let scssOutput = '';
    // Loop through tokens in this object
    // When we look inside the object, if we find key/value pairs, then turn into variables
    // If we find another object, then we send that object back into this function to be parsed

    filterAndTransformWebTokens(tokens).forEach(([name, value]) => {
        if (value === null) return; // continue

        // Skip high contrast color tokens
        if (category === 'color' && isAliasToken && (name === 'highcontrast' || name === 'highcontrast-dark')) {
            return; // continue
        }

        if (typeof value === 'string') {
            // If we're parsing an alias, we need to do some replacement based on its global value
            const compiledValue = isAliasToken
                ? convertAliasToValue(category, value)
                : convertGlobalTokenValueToStylesValue(category, value);
            // Separate background color and opacity percentage into two separate SCSS variables
            if (
                typeof compiledValue === 'object' &&
                compiledValue !== null &&
                'hexValue' in compiledValue &&
                'percentage' in compiledValue
            ) {
                const bgVarName = `${name}-bg`;

                scssOutput += createScssVariable(category, bgVarName, compiledValue.hexValue);
                scssOutput += createScssVariable(category, name, compiledValue.percentage);
            } else {
                scssOutput += createScssVariable(category, name, compiledValue);
            }
        } else if (category === 'gradient' && Array.isArray(value.colors)) {
            scssOutput += createScssVariable(category, name, createGradientValue(value));
        } else if (typeof value === 'object') {
            if (value.shadows) {
                const shadows = getConvertedShadowsToBoxShadowValues(value);

                scssOutput += createScssVariable(category, name, shadows);
            }

            if (!category.includes('elevation')) {
                scssOutput += `// ${convertWordToPascalCase(name)} ${category} theme\n`;
            }

            const [cssRule, mediaQuery] = createRulesForDark(name);

            // Add data attribute rules (always present)
            if (cssRule.length) {
                scssOutput += formatLine(cssRule, 'rule', nesting);
                nesting++;
            }

            const updatedCategoryName = ['default', 'dark'].includes(name) ? category : `${category}-${name}`;
            scssOutput += parseTokens(theme, updatedCategoryName, Object.entries(value), isAliasToken);

            // Close data attribute rules
            if (cssRule.length) {
                nesting--;
                scssOutput += formatLine('', 'closingLine', nesting);
            }

            // Add media query fallback rules (when no data attributes are present)
            if (mediaQuery.length) {
                // Split the mediaQuery into media query and html selector parts
                const [mediaQueryPart, htmlSelectorPart] = mediaQuery.split('\n');

                // Add media query with proper indentation (already includes opening brace)
                scssOutput += formatLine(mediaQueryPart, 'variable', nesting);
                nesting++;

                // Add html selector (nested inside media query)
                scssOutput += formatLine(htmlSelectorPart, 'rule', nesting);
                nesting++;

                // Process tokens again for media query fallback
                scssOutput += parseTokens(theme, updatedCategoryName, Object.entries(value), isAliasToken);

                // Close media query fallback rules - need to close both html selector and media query
                nesting--;
                scssOutput += formatLine('', 'closingLine', nesting); // Close html selector
                nesting--;
                scssOutput += formatLine('', 'closingLine', nesting); // Close media query
            }
        }
    });
    return scssOutput;
};

/**
 * Loops through the defined theme categories in the design tokens and parses them into valid SCSS
 *
 * @param {string} theme – Name of the theme being parsed
 * @param {object} themeTokens – Theme object subset of the entire design token object (for example, the jet theme object or skip theme object)
 * @returns {string} – A valid SCSS string, compiled from the `themeTokens` object
 */
const createScssFromTheme = (theme, themeTokens) => {
    const categoryKeys = Object.keys(themeTokens);
    let scssOutput = '';

    currentThemeTokens = themeTokens;

    // e.g. color/font/spacing
    categoryKeys.forEach((category) => {
        const categoryName = convertWordToPascalCase(category);

        // Loop through the global tokens for this category (these have already been merged with the base globals)
        if (typeof themeTokens[category][GLOBAL_TOKEN_KEY] !== 'undefined') {
            const categoryGlobals = Object.entries(themeTokens[category][GLOBAL_TOKEN_KEY]);
            scssOutput += `// Global tokens - ${categoryName}\n`;
            scssOutput += parseTokens(theme, category, categoryGlobals);
        }

        // Loop through alias tokens in this category and convert them
        if (typeof themeTokens[category][ALIAS_TOKEN_KEY] !== 'undefined') {
            const categoryAliases = Object.entries(themeTokens[category][ALIAS_TOKEN_KEY]);
            scssOutput += `// Alias tokens - ${categoryName}\n`;
            scssOutput += parseTokens(theme, category, categoryAliases, true);
        }
    });
    return scssOutput;
};

/**
 * Default export. Called with the whole set of design tokens and handles calls to other functions.
 *
 * (1) Parses the tokens into SCSS (via other functions).
 * (2) Saves the output data to an SCSS file.
 *
 * @param {object} tokens – set of tokens to convert into SCSS variables
 * @returns {boolean} - indicates success or failure when processing themes
 */
const compileToScss = (tokens) => {
    if (!tokens || !tokens.theme || typeof tokens.theme !== 'object') {
        return false;
    }

    const themeKeys = Object.keys(tokens.theme).filter((key) => key !== 'global');
    if (themeKeys.length < 1) return false;

    themeKeys.forEach((themeKey) => {
        const scssString = createScssFromTheme(themeKey, tokens.theme[themeKey]);
        writeToFile(themeKey, 'scss', scssString);
    });
    return true;
};

module.exports = compileToScss;

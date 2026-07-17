const {
    CONSTANTS,
    convertGlobalTokenValueToStylesValue,
    convertHexValueToHSL,
    convertHexValueToRGB,
    convertWordToPascalCase,
    createRulesForDark,
    formatLine,
    filterAndTransformWebTokens,
    getConvertedShadowsToBoxShadowValues,
    variableGetterFactory,
    writeToFile,
} = require('./helpers');

const getCssVarName = variableGetterFactory('css');

const {
    ADD_REM_TO_VALUE,
    ALIAS_TOKEN_KEY,
    ALTERNATE_MODES,
    APPLY_QUOTES_TO_VALUE,
    CATEGORIES_WITH_ALTERNATE_MODES,
    CATEGORIES_WITH_UNITS,
    GLOBAL_TOKEN_KEY,
    CATEGORY_WITH_TIMING,
} = CONSTANTS;

let currentThemeTokens = {};

// This `nesting` variable is used to keep track of the current nesting depth for proper indentation
// More specifically, it is used for adding extra indentation to the 'alternative' modes (e.g. dark) in css and hslColor
let nesting = 0;

const hslColor = {
    default: ':root {\n',
    // alternate modes are input here (e.g dark)
    alternative: '',
};

/**
 * Builds up a String of HSL colour values (as CSS Custom properties)
 * so that they can be output as a separate CSS file.
 *
 * This function will be a temporary addition until native color conversion
 * is supported by browsers (see https://caniuse.com/?search=relative%20color)
 *
 * @param {string} value – Color value (e.g. `#ff1111`) or alias token reference
 * @param {string} varName – Token Variable Name to be used as part of the CSS Custom Property name
 * @returns {string} - A CSS string containing the HSL values to be written to a file.
 */
const createHslString = (value, varName) => {
    if (typeof value !== 'string') {
        return '';
    }

    let hslString = '';
    const cssVarName = getCssVarName(varName);

    if (value.startsWith('#')) {
        // if hexcode, it's a global token - convert to hsl
        const { h, s, l } = convertHexValueToHSL(value);
        hslString += `${cssVarName}-h: ${h};\n`;
        hslString += formatLine(`${cssVarName}-s: ${s}%;`, 'variable', (nesting || 1)); // Nesting will probably be 0 in the `:root` but we want to indent these lines regardless
        hslString += formatLine(`${cssVarName}-l: ${l}%;`, 'variable', (nesting || 1)); // Nesting will probably be 0 in the `:root` but we want to indent these lines regardless
    } else if (!value.endsWith('%') && !value.startsWith('rgb')) {
        // this is an alias token, so point to the correct global token hsl fragments
        const valueArr = value.split(')');
        const h = `${valueArr[0]}-h)`;
        const s = `${valueArr[0]}-s)`;
        const l = `${valueArr[0]}-l)`;

        hslString += `${cssVarName}-h: ${h};\n`;
        hslString += formatLine(`${cssVarName}-s: ${s};`, 'variable', (nesting || 1)); // Nesting will probably be 0 in the `:root` but we want to indent these lines regardless
        hslString += formatLine(`${cssVarName}-l: ${l};`, 'variable', (nesting || 1)); // Nesting will probably be 0 in the `:root` but we want to indent these lines regardless
    }
    return hslString;
};

/**
 * Creates a CSS gradient value from a gradient token object
 *
 * @param {object} gradientValue - The gradient token object with colors, type, and angle
 * @returns {string} - A valid CSS gradient value
 */
const createGradientValue = ({ colors, type, angle }) => `${type}-gradient(${angle}deg, ${colors.map(({ color, stop }) => `var(--dt-color-${color}) ${stop}%`).join(', ')})`;

/**
 * Formats and saves the given `value` to the specified output (css or hslColor and default or alternative).
 *
 * @param {string} mode - refers to the different modes i.e. default and alternative
 * @param {string} value - the value to be formatted and output
 * @param {string} output - the object the variables will be output to i.e. 'hslColor' or 'css'
 * @returns {string} - formatted string added to it's corresponding output
 *
 */
const writeToObject = (mode, value, output) => {
    const writtenOutput = ALTERNATE_MODES.includes(mode)
        ? output.alternative += formatLine(value, 'variable', nesting, false)
        : output.default += formatLine(value, 'variable', 1, false);

    return writtenOutput;
};

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

    // If the category is a color and it includes a pipe character, then it'll be in the format `ALIAS_NAME|OPACITY`
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
    return getCssVarName(varName, true);
};

/**
 * Creates an CSS variable string from the defined properties passed in.
 * If passed category is in CATEGORIES_WITH_UNITS it will add rem/px to the end of the value if the value is not a global token
 * If passed category is 'font' and name is in the APPLY_QUOTES_TO_VALUE const, it will wrap the value into quotes
 *
 * @param {string} category – String referencing the category name of the variable (i.e. color, font, radius)
 * @param {string} name – String defining the property name to be used when producing the CSS variable
 * @param {string} value – The value to be used as the CSS property definition (RHS)
 * @returns {string} – Returns a complete, valid CSS variable as a string
 */
const createCssVariable = (category, name, value) => {
    const varName = `${category}-${name}`;
    let compiledValue = value;

    if (CATEGORIES_WITH_UNITS.includes(category) && !value.startsWith('var(') && value !== '0') {
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

    // shortens css variable name i.e. `font-size-12-font-size` becomes `font-size-12`
    const shortenedVar = varName.replace('-font-size', '');

    return `${getCssVarName(shortenedVar)}: ${compiledValue};\n`;
};

/**
 * Creates Shadow Values and outputs them in the correct format
 *
 * @param {string} value – token value i.e 'style-underline'
 * @param {string} category – token category i.e. 'font-caption-link'
 * @param {string} name – token name i.e. 'text-decoration'
 * @param {string} mode – refers to the different modes i.e. default / dark
 * @param {string} output – refers to the different output objects i.e. hslColor / css
 */
const outputShadowValues = (value, category, name, mode, output) => {
    // Box shadow definitions
    const shadows = getConvertedShadowsToBoxShadowValues(value);
    const cssVariable = createCssVariable(category, name, shadows);
    writeToObject(mode, cssVariable, output);
};

/**
 * Creates and outputs gradient values to their corresponding object
 *
 * @param {object} gradientValue - The gradient token object with colors, type, and angle
 * @param {string} category - Token category i.e. 'gradient-jetplus-brand-01'
 * @param {string} name - Token name
 * @param {string} mode - Refers to the different modes i.e. default / dark
 * @param {object} output - Refers to the different output objects i.e. css
 */
const outputGradientValues = (gradientValue, category, name, mode, output) => {
    const cssValue = createGradientValue(gradientValue);
    const cssVariable = createCssVariable(category, name, cssValue);
    writeToObject(mode, cssVariable, output);
};

/**
 * Creates String Values and outputs them to their corresponding object
 *
 * @param {boolean} isAliasToken - checks if token is alias or global
 * @param {string} category – token category i.e. 'font-caption-link'
 * @param {string} value – token value i.e 'style-underline'
 * @param {string} name – token name i.e. 'text-decoration'
 * @param {string} mode – refers to the different modes i.e. default / dark
 * @param {string} output – refers to the different output objects i.e. hslColor / css
 * @return {string} compiledValue based on if token is alias or global
 */
const outputStringValue = (isAliasToken, category, value, name, mode, output) => {
    // If we're parsing an alias, we need to do some replacement based on its global value
    const compiledValue = isAliasToken
        ? convertAliasToValue(category, value)
        : convertGlobalTokenValueToStylesValue(category, value);

    // Separate background color and opacity percentage into two separate CSS variables
    if (typeof compiledValue === 'object' && compiledValue.hexValue && compiledValue.percentage) {
        const bgVarName = `${name}-bg`;

        writeToObject(mode, createCssVariable(category, bgVarName, compiledValue.hexValue), output);
        writeToObject(mode, createCssVariable(category, name, compiledValue.percentage), output);
    } else {
        const cssVariable = createCssVariable(category, name, compiledValue);
        writeToObject(mode, cssVariable, output);
    }

    return compiledValue;
};

/**
 * Takes a given set of tokens and loops through the key/value pairs creating valid CSS variables
 * If the token value is an object, then this function will be called recursively until a string value is found.
 * This happens for elevation tokens and also for the objects describing the dark mode tokens.
 * Once found, the string values will be converted into the appropriate CSS strings.
 *
 * @param {string} theme -  Name of the theme being parsed
 * @param {string} category - Category name describing the current tokens
 * @param {object} tokens - An object containing a subset of tokens to drill down into
 * @param {object} output - The object that all css tokens, headings and rules will be output to
 * @param {boolean} isAliasToken - If true, the alias value should be replaced by a reference to the global value when compiled.
 * @param {string} mode - Used when calling the function recursively. If the current token's value is an object, pass the token's name here.
 * If that name matches an alternate display mode (e.g., `'dark'`), then the token will be written separately
 * under a custom CSS rule and/or `@media` query.
 * @returns {object} – An updated css `output` object containing all the compiled tokens, separated by `default` and `alternative`.
 */
const parseTokens = (theme, category, tokens, output, isAliasToken = false, mode = 'default') => {
    filterAndTransformWebTokens(tokens).forEach(([name, value]) => {
        if (value === null) return; // continue

        // Skip high contrast color tokens
        if (category === 'color' && isAliasToken && (name === 'highcontrast' || name === 'highcontrast-dark')) {
            return; // continue
        }

        if (typeof value === 'string') {
            const compiledValue = outputStringValue(isAliasToken, category, value, name, mode, output);

            // HSL output
            if (category === 'color') {
                const cssVariableHsl = createHslString(compiledValue, `${category}-${name}`);
                if (cssVariableHsl.length) {
                    writeToObject(mode, cssVariableHsl, hslColor);
                }
            }
        } else if (category === 'gradient' && Array.isArray(value.colors)) {
            outputGradientValues(value, category, name, mode, output);
        } else if (typeof value === 'object') {
            if (value.shadows) {
                outputShadowValues(value, category, name, mode, output);
            }

            // Add category names as heading-like comments, ignoring elevation tokens
            // but making an exception for the (alias) tokens in alternate modes
            if (!category.includes('elevation') || ALTERNATE_MODES.includes(name)) {
                const heading = `${convertWordToPascalCase(name)} ${category} theme`;
                if (ALTERNATE_MODES.includes(mode) || ALTERNATE_MODES.includes(name)) {
                    // Write CSS for alternate modes to a different object
                    output.alternative += formatLine(heading, 'heading', nesting);
                } else {
                    output.default += formatLine(heading, 'heading');
                }
            }

            if (CATEGORIES_WITH_ALTERNATE_MODES.includes(category)) {
                const [cssRule, mediaQuery] = createRulesForDark(name);

                // Add data attribute rules (always present)
                if (cssRule.length) {
                    output.alternative += formatLine(cssRule, 'rule', nesting);
                    if (category === 'color') {
                        hslColor.alternative += formatLine(cssRule, 'rule', nesting);
                    }
                    nesting++;
                }

                // When processing the different modes, the category shouldn't have the mode name appended
                // because we don't want the variable names to be unique
                const updatedCategoryName = ['default', ...ALTERNATE_MODES].includes(name) ? category : `${category}-${name}`;
                parseTokens(theme, updatedCategoryName, Object.entries(value), output, isAliasToken, name);

                // Close data attribute rules
                if (cssRule.length) {
                    nesting--;
                    output.alternative += formatLine('', 'closingLine', nesting);
                    if (category === 'color') {
                        hslColor.alternative += formatLine('', 'closingLine', nesting);
                    }
                }

                // Add media query fallback rules (when no data attributes are present)
                if (mediaQuery.length) {
                    // Split the mediaQuery into media query and html selector parts
                    const [mediaQueryPart, htmlSelectorPart] = mediaQuery.split('\n');

                    // Add media query with proper indentation (already includes opening brace)
                    output.alternative += formatLine(mediaQueryPart, 'variable', nesting);
                    if (category === 'color') {
                        hslColor.alternative += formatLine(mediaQueryPart, 'variable', nesting);
                    }
                    nesting++;

                    // Add html selector (nested inside media query)
                    output.alternative += formatLine(htmlSelectorPart, 'rule', nesting);
                    if (category === 'color') {
                        hslColor.alternative += formatLine(htmlSelectorPart, 'rule', nesting);
                    }
                    nesting++;

                    // Process tokens again for media query fallback
                    parseTokens(theme, updatedCategoryName, Object.entries(value), output, isAliasToken, name);

                    // Close media query fallback rules - need to close both html selector and media query
                    nesting--;
                    output.alternative += formatLine('', 'closingLine', nesting); // Close html selector
                    nesting--;
                    output.alternative += formatLine('', 'closingLine', nesting); // Close media query
                    if (category === 'color') {
                        hslColor.alternative += formatLine('', 'closingLine', nesting + 1); // Close html selector
                        hslColor.alternative += formatLine('', 'closingLine', nesting); // Close media query
                    }
                }
                return; // Exit early to avoid duplicate processing
            }

            // When processing the different modes, the category shouldn't have the mode name appended
            // because we don't want the variable names to be unique
            const updatedCategoryName = ['default', ...ALTERNATE_MODES].includes(name) ? category : `${category}-${name}`;
            parseTokens(theme, updatedCategoryName, Object.entries(value), output, isAliasToken, name);

            // Close any unclosed curly braces
            while (nesting > 0) {
                nesting--;
                output.alternative += formatLine('', 'closingLine', nesting);
                if (category === 'color') {
                    hslColor.alternative += formatLine('', 'closingLine', nesting);
                }
            }
        }
    });

    return output;
};

/**
 * Loops through the defined theme categories in the design tokens and parses them into valid CSS
 *
 * @param {string} theme – Name of the theme being parsed
 * @param {object} themeTokens – Theme object subset of the entire design token object (for example, the jet theme object or skip theme object)
 * @returns {object} – A valid css object, compiled from the `themeTokens` object
 */
const createCssFromTheme = (theme, themeTokens) => {
    const categoryKeys = Object.keys(themeTokens);
    const css = {
        default: ':root {\n',
        // alternate modes are input here (e.g dark mode)
        alternative: '',
    };
    currentThemeTokens = themeTokens;

    // e.g. color/font/spacing
    categoryKeys.forEach((category) => {
        const categoryName = convertWordToPascalCase(category);

        // Loop through the global tokens for this category (these have already been merged with the base globals)
        if (typeof themeTokens[category][GLOBAL_TOKEN_KEY] !== 'undefined') {
            const categoryGlobals = Object.entries(themeTokens[category][GLOBAL_TOKEN_KEY]);
            css.default += formatLine(`Global tokens - ${categoryName}`, 'heading');
            parseTokens(theme, category, categoryGlobals, css, false, 'default');
        }

        // Loop through alias tokens in this category and convert them
        if (typeof themeTokens[category][ALIAS_TOKEN_KEY] !== 'undefined') {
            const categoryAliases = Object.entries(themeTokens[category][ALIAS_TOKEN_KEY]);
            css.default += formatLine(`Alias tokens - ${categoryName}`, 'heading');
            parseTokens(theme, category, categoryAliases, css, true, 'default');
        }
    });

    return css;
};

/**
 * Default export. Called with the whole set of design tokens and handles calls to other functions.
 *
 * (1) Parses the tokens into CSS (via other functions).
 * (2) Saves the output data to a CSS file.
 *
 * @param {object} tokens – set of tokens to convert into CSS variables
 * @returns {boolean} - indicates success or failure when processing themes
 */
const compileToCss = (tokens) => {
    if (!tokens || !tokens.theme || typeof tokens.theme !== 'object') {
        return false;
    }

    const themeKeys = Object.keys(tokens.theme).filter((key) => key !== 'global');
    if (themeKeys.length < 1) return false;

    themeKeys.forEach((themeKey) => {
        // Reset hslColor object for each theme to prevent accumulation across themes
        hslColor.default = ':root {\n';
        hslColor.alternative = '';

        const css = createCssFromTheme(themeKey, tokens.theme[themeKey]);
        writeToFile(themeKey, 'css', `${css.default}}\n${css.alternative}`);
        writeToFile(`${themeKey}-hsl-colors`, 'css', `${hslColor.default}}\n${hslColor.alternative}`);
    });
    return true;
};

module.exports = compileToCss;

const fs = require('fs');
const jsonc = require('jsonc-parser');
const merge = require('lodash.merge');

const CONSTANTS = {
    ADD_REM_TO_VALUE: ['round'], // list of properties that should have rem added after the value when compiled
    ALIAS_TOKEN_KEY: 'alias',
    ALTERNATE_MODES: ['dark'],
    APPLY_QUOTES_TO_VALUE: ['family-primary', 'family-secondary', 'family-code', 'family-alternative'], // list of properties that should have quotes applied when compiled
    CATEGORIES_WITH_UNITS: ['radius', 'spacing', 'breakpoint', 'blur'], // list of categories that needs units to be added to the values
    CATEGORIES_WITH_ALTERNATE_MODES: ['color', 'elevation', 'gradient'],
    CATEGORY_WITH_TIMING: 'timing',
    DESTINATION_DIR: 'dist',
    GLOBAL_TOKEN_KEY: 'global',
    PLATFORM_KEYS: {
        ANDROID: 'android',
        IOS: 'ios',
        WEB: 'web',
    },
    SPECIAL_VALUES: ['$platform'],
    VARIABLE_PREFIX_CSS: '--dt-', // design token
    VARIABLE_PREFIX_SCSS: '$',
};

// Parse over the raw platform specific tokens and store them
const rawPlatformTokens = {
    android: jsonc.parse(fs.readFileSync(`platform/${CONSTANTS.PLATFORM_KEYS.ANDROID}.jsonc`).toString()),
    ios: jsonc.parse(fs.readFileSync(`platform/${CONSTANTS.PLATFORM_KEYS.IOS}.jsonc`).toString()),
    web: jsonc.parse(fs.readFileSync(`platform/${CONSTANTS.PLATFORM_KEYS.WEB}.jsonc`).toString()),
};

/**
 * Establishes a pattern for our line formats i.e. headings / values / rules with clear indentation
 * so if patterns are needed, they can be formed more easily.
 *
 * @param {string} value – the content displayed by the line
 * @param {string} textType – the type of text i.e. 'heading', 'variable'
 * @param {number} nestAmount – how much nesting is required - defaults to 1
 * @param {boolean} newLine – specifies whether a new line is needed
 * @param {boolean} indent – the indent for each line
 * @returns {string} - formatted line
*/
const formatLine = (value = '', textType, nestAmount = 1, newLine = true, indent = '    ') => {
    const text = {
        heading: `${indent.repeat(nestAmount)}/* ${value} */`,
        variable: `${indent.repeat(nestAmount)}${value}`,
        rule: `${indent.repeat(nestAmount)}${value} {`,
        closingLine: `${indent.repeat(nestAmount)}}`,
    };

    if (!(textType in text)) return ('Please specify textType');

    return `${text[textType]}${newLine ? '\n' : ''}`;
};

/**
 * Loops through each theme and adds the tokens found in `tokens.global` to each individual theme object.
 *
 * @param {object} tokens – Design token object
 * @param {string} platform – Can be one of ['ios', 'android', 'web']. Will replace the $platform value with the value found in the relevant platform jsonc file
 * @returns
 */
const buildGlobalTokensIntoThemes = (tokens, platform) => {
    const compiledJson = {
        theme: {},
    };
    const globalBaseTokens = tokens[CONSTANTS.GLOBAL_TOKEN_KEY];
    const themeKeys = Object.keys(tokens.theme).filter((key) => key !== CONSTANTS.GLOBAL_TOKEN_KEY);

    // loop through each theme
    themeKeys.forEach((themeKey) => {
        const themeTokens = tokens.theme[themeKey];
        const categoryKeys = Object.keys(themeTokens);

        compiledJson.theme[themeKey] = {};

        // Loop through categories (e.g. color/font/spacing)
        categoryKeys.forEach((category) => {
            const categoryGlobals = globalBaseTokens[category];

            // Set up new object with the relevant keys
            compiledJson.theme[themeKey][category] = {};
            compiledJson.theme[themeKey][category][CONSTANTS.GLOBAL_TOKEN_KEY] = {};

            // save the category global and alias tokens into the new JSON object
            merge(compiledJson.theme[themeKey][category][CONSTANTS.GLOBAL_TOKEN_KEY], categoryGlobals); // first the global tokens
            merge(compiledJson.theme[themeKey], themeTokens); // …and then the theme specific tokens (which take precedence over any defined globals

            // After merge, order the tokens so that the read order is a bit nicer when compiled out
            const orderedCategoryTokens = {};
            const unorderedCategoryTokens = compiledJson.theme[themeKey][category][CONSTANTS.GLOBAL_TOKEN_KEY];
            Object.keys(unorderedCategoryTokens).sort().forEach((key) => {
                let tokenValue = unorderedCategoryTokens[key];

                if (tokenValue === '$platform') {
                    tokenValue = rawPlatformTokens[platform][category][key];
                }

                orderedCategoryTokens[key] = tokenValue;
            });
            compiledJson.theme[themeKey][category][CONSTANTS.GLOBAL_TOKEN_KEY] = orderedCategoryTokens;
        });
    });

    return compiledJson;
};

/**
 * Saves the given `data` string to a file with the specified `name` and `extension`.
 *
 * @param {string} name - The name of the file
 * @param {string} extension - The file extension, e.g. 'xml'
 * @param {string} data - The contents of the file
 * @param {string} dir - The folder to write the file to. Defaults to 'dist'.
 */
const writeToFile = (name, extension, data, dir = CONSTANTS.DESTINATION_DIR) => {
    const filename = `${dir}/${name}.${extension}`;
    fs.writeFile(filename, data, ((err) => {
        if (err) throw err;
        console.log(`📝 Data written to file: ${filename}`); // eslint-disable-line no-console
    }));
};

/**
 * Converts the given string from camelCase to PascalCase
 *
 * @param {string} word - A camelCase word to convert to PascalCase
 */
const convertWordToPascalCase = (word) => word.charAt(0).toUpperCase() + word.slice(1);

/**
 * Factory method for getting the variable name to write to the output file.
 *
 * Parameters of return function:
 *
 * `varName` - The name of your variable
 *
 * `insertCssVar` - Whether or not to wrap the variable name in the CSS `var()` function.
 *
 * @param {string} lang - css or scss
 * @returns {{function(varName : string, insertCssVar=true) : string}}
 */
const variableGetterFactory = (lang) => (varName, insertCssVar = false) => {
    const prefix = lang === 'css'
        ? CONSTANTS.VARIABLE_PREFIX_CSS
        : CONSTANTS.VARIABLE_PREFIX_SCSS;

    let fullyQualifiedName = `${prefix}${varName}`;
    if (lang === 'css' && insertCssVar) fullyQualifiedName = `var(${fullyQualifiedName})`;

    return fullyQualifiedName;
};

/**
 * Converts a given token value into a more suitable CSS/SCSS syntax.
 * If no conversion is required, the value itself is returned.
 *
 * @param {string} category – Object key referencing the category of global token to access (i.e. color, font, radius)
 * @param {string} value – Value of the token to be converted (if necessary)
 * @returns {string} – Value of the global token referenced using the category and name specified
 */
const convertGlobalTokenValueToStylesValue = (category, value) => {
    const [baseCategory] = category.split('-'); // ignore sub-categories

    // If the category is a font and it includes a pipe character, then it'll be in the format `FONT_SIZE|LINE_HEIGHT`
    if (baseCategory === 'font' && value.includes('|')) {
        const valueParts = value.split('|');
        return `${valueParts[0]}, ${valueParts[1]}`;
    }

    // link to global variable name
    return value;
};

/**
 * Formats a shadow object into a CSS box-shadow string.
 * @param {object} shadow - The shadow object.
 * @param {boolean} isInset - Prepends the 'inset' keyword if true.
 * @returns {string} The CSS box-shadow value.
 */
const formatShadow = ({
    x, y, blur, spread, r, g, b, opacity,
}, isInset = false) => {
    const prefix = isInset ? 'inset ' : '';
    return `${prefix}${x}px ${y}px ${blur}px ${spread}px rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Returns the elevation (box-shadow) values as an array of strings.
 *
 * e.g: [ '0px 2px 6px 0px rgba(27, 35, 36, 0.04)',
 * '0px 8px 12px -2px rgba(27, 35, 36, 0.06)',
 * '0px 4px 6px 0px rgba(27, 35, 36, 0.04)']
 *
 * @param values
 * @returns {*}
 */
const getConvertedShadowsToBoxShadowValues = ({ shadows = [], insets = [] }) => {
    const extractedShadowValues = shadows.map((shadow) => formatShadow(shadow));
    const extractedInsetsValues = insets.map((shadow) => formatShadow(shadow, true));
    return [...extractedShadowValues, ...extractedInsetsValues];
};

/**
 * Converts a given hex value to rgb value with optional opacity parameter.
 * @param {string} hexCode – hex colour code
 * @param {string} opacity – optional opacity value
 * @returns {string} – rgb value string
 */
const convertHexValueToRGB = (hexCode, opacity = 1) => {
    let hex = hexCode.replace('#', '');

    if (hex.length > 6 || hex.length < 3) {
        return hexCode; // exit early if invalid hex code passed
    }

    if (hex.length === 3) {
        hex = `${hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${r},${g},${b},${opacity})`;
};

/**
 * Converts a hex color value to HSL color value.
 *
 * @param {string} hexcode - The hex color value to convert. E.G. #000 or #000000
 * @throws {Error} Will throw an error if the provided color is not a valid hex color.
 * @returns {Object} An object with properties h, s, l representing the hue, saturation, and lightness.
 */
const convertHexValueToHSL = (hexcode) => {
    if (typeof hexcode !== 'string' || !/^#[0-9A-F]{3}$|^#[0-9A-F]{6}$/i.test(hexcode)) {
        throw new Error('Invalid hex color');
    }

    // Convert hex to RGB first
    let red = 0;
    let green = 0;
    let blue = 0;

    if (hexcode.length === 4) {
        red = `0x${hexcode[1]}${hexcode[1]}`;
        green = `0x${hexcode[2]}${hexcode[2]}`;
        blue = `0x${hexcode[3]}${hexcode[3]}`;
    } else if (hexcode.length === 7) {
        red = `0x${hexcode[1]}${hexcode[2]}`;
        green = `0x${hexcode[3]}${hexcode[4]}`;
        blue = `0x${hexcode[5]}${hexcode[6]}`;
    }

    // Normalize RGB values to the [0, 1] range
    red /= 255;
    green /= 255;
    blue /= 255;

    // Convert RGB to HSL
    const cmin = Math.min(red, green, blue);
    const cmax = Math.max(red, green, blue);
    const delta = cmax - cmin;

    let hue = 0;
    let saturation = 0;
    let lightness = 0;

    if (delta === 0) {
        hue = 0;
    } else if (cmax === red) {
        hue = ((green - blue) / delta) % 6;
    } else if (cmax === green) {
        hue = (blue - red) / delta + 2;
    } else {
        hue = (red - green) / delta + 4;
    }

    hue = Math.round(hue * 60);

    if (hue < 0) {
        hue += 360;
    }

    lightness = (cmax + cmin) / 2;
    saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
    saturation = +(saturation * 100).toFixed(1);
    lightness = +(lightness * 100).toFixed(1);

    return {
        h: hue,
        l: lightness,
        s: saturation,
    };
};

/**
 * Creates the additional CSS and mediaQuery rules needed for dark mode.
 *
 * @param {string} name – name of token
 * @returns {[string, string]} – Two valid strings -
 * The first string contains the cssRule variable (data attributes)
 * The second string contains the media query fallback for when no data attributes are present
 */
const createRulesForDark = (name) => {
    const isDark = name.includes('dark');
    let cssRule = '';
    let mediaQuery = '';

    if (isDark) {
        cssRule = 'html[data-color-mode="dark"]';
        mediaQuery = '@media (prefers-color-scheme: dark) {\nhtml[data-darkmode-system]:not([data-color-mode])';
    }

    return [cssRule, mediaQuery];
};

/**
 * Filters android / ios tokens and removes 'web-' prefix from web tokens
 *
 * @param {Array} tokens - Array of [name, value] token pairs
 * @returns {Array} - Filtered and transformed token pairs
 */
const filterAndTransformWebTokens = (tokens) => tokens.filter(([name]) => !/^ios-|^android-/.test(name))
      .map(([name, value]) => [name.replace(/^web-/, ''), value]);

module.exports = {
    CONSTANTS,
    buildGlobalTokensIntoThemes,
    convertGlobalTokenValueToStylesValue,
    convertHexValueToHSL,
    convertHexValueToRGB,
    convertWordToPascalCase,
    createRulesForDark,
    getConvertedShadowsToBoxShadowValues,
    formatLine,
    filterAndTransformWebTokens,
    variableGetterFactory,
    writeToFile,
};

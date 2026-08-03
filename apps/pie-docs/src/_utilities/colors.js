const sass = require('sass');

/**
 * Converts a hexcode string into an RGB object
 * @param {string} hexcode - the hexcode to convert such as #fff or #ffffff
 * @returns {object} an object containing red, green and blue values
 */
const convertHexcodeToRBG = (hexcode) => {
    let strippedHex = hexcode.replace('#', '');

    if (strippedHex.length === 3) {
        strippedHex += strippedHex; // an input of #000 will become 000000
    }

    const aRgbHex = strippedHex.match(/.{1,2}/g);
    const aRgb = {
        red: parseInt(aRgbHex[0], 16),
        green: parseInt(aRgbHex[1], 16),
        blue: parseInt(aRgbHex[2], 16),
    };

    return aRgb;
};

const convertRGBToSassColour = (rgb) => new sass.SassColor(rgb);

/**
 * Returns a boolean representing whether or not a color counts as a dark shade
 * @param {string} hexCode - a hexcode value such as #fff or #ffffff
 * @returns {boolean} true for dark, false for light
 */
const isColorDark = (hexCode) => {
    const rgb = convertHexcodeToRBG(hexCode);
    const color = convertRGBToSassColour(rgb);
    const lightnessThreshold = 40;

    return color.channel('lightness', { space: 'hsl' }) < lightnessThreshold;
};

/**
 * Splits a color token into it's hexcode and opacity value (if one is provided)
 * @param {string} token - the token value i.e. #000, #ffffff, #000|0.85 or #000000|0.85
 * @returns {object} an object containing a hexcode and opacity value (if opacity was provided)
 */
const splitColorToken = (token) => {
    const [hexcode, opacity] = token.split('|');

    return {
        hexcode,
        opacity,
    };
};

module.exports = {
    convertHexcodeToRBG,
    isColorDark,
    splitColorToken,
};

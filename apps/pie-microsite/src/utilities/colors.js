const sass = require('sass');

const convertHexcodeToRBG = hexcode => {
    // token formats are '#000', '#000000', '#000|0.85' and '#000000|0.04'
    const [hexWithoutOpacity] = hexcode.split('|');
    let strippedHex = hexWithoutOpacity.replace('#', '');

    if (strippedHex.length === 3) {
        strippedHex += strippedHex; // an input of #000 will become 000000
    }

    const aRgbHex = strippedHex.match(/.{1,2}/g);
    const aRgb = {
        red: parseInt(aRgbHex[0], 16),
        green: parseInt(aRgbHex[1], 16),
        blue: parseInt(aRgbHex[2], 16)
    };

    return aRgb;
};

const convertRGBToSassColour = rgb => new sass.SassColor(rgb);

const isColorDark = hexCode => {
    const rgb = convertHexcodeToRBG(hexCode);
    const color = convertRGBToSassColour(rgb);
    const lightnessThreshold = 40;

    return color.lightness < lightnessThreshold;
};

module.exports = {
    convertHexcodeToRBG,
    isColorDark
};

const contentPageImage = require('./contentPageImage');
const notification = require('./notification');
const tokensTable = require('./tokensTable');

const { deindentHTML } = require('./shortcode-utilities');

/**
 * Adds all 11ty shortcodes
 * @param {object} eleventyConfig
 */
const addAllShortCodes = eleventyConfig => {
    eleventyConfig.addShortcode('contentPageImage', shortcodeArgs => deindentHTML(contentPageImage(shortcodeArgs)));
    eleventyConfig.addShortcode('notification', shortcodeArgs => deindentHTML(notification(shortcodeArgs)));
    eleventyConfig.addShortcode('tokensTable', shortcodeArgs => deindentHTML(tokensTable(shortcodeArgs)));
};

module.exports = {
    addAllShortCodes
};

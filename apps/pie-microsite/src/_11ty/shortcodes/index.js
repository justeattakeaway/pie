const contentPageImage = require('./contentPageImage');
const list = require('./list');
const notification = require('./notification');
const tokensTable = require('./tokensTable');
const table = require('./table');

const { deindentHTML } = require('./shortcode-utilities');

/**
 * Adds all 11ty shortcodes
 * @param {object} eleventyConfig
 */
const addAllShortCodes = eleventyConfig => {
    eleventyConfig.addShortcode('contentPageImage', shortcodeArgs => deindentHTML(contentPageImage(shortcodeArgs)));
    eleventyConfig.addShortcode('list', shortcodeArgs => deindentHTML(list(shortcodeArgs)));
    eleventyConfig.addShortcode('notification', shortcodeArgs => deindentHTML(notification(shortcodeArgs)));
    eleventyConfig.addShortcode('tokensTable', shortcodeArgs => deindentHTML(tokensTable(shortcodeArgs)));
    eleventyConfig.addShortcode('table', shortcodeArgs => deindentHTML(table(shortcodeArgs)));
};

module.exports = {
    addAllShortCodes
};

const contentPageImage = require('./contentPageImage');
const notification = require('./notification');
const tokensTable = require('./tokensTable');

/**
 * Removes any whitespace created by indenting template strings inside shortcode functions.
 * Without doing this, indentation can accidentally escape code when the markdown/nunjucks engine tries to render the code.
 * Example of issue: https://github.com/11ty/eleventy/issues/402
 * @param {String} htmlString - the HTML string returned from a shortcode
 * @returns {String} the HTML string with indentation whitespace removed
 */
const deindentHTML = htmlString => htmlString.replace(/\n|\t/g, '').trim();

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

const contentPageImage = require('./contentPageImage');
const orderedList = require('./orderedList');
const pillList = require('./pillList');
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
    eleventyConfig.addShortcode('orderedList', shortcodeArgs => deindentHTML(orderedList(shortcodeArgs))));
    eleventyConfig.addShortcode('pillList', shortcodeArgs => deindentHTML(pillList(shortcodeArgs))));
    eleventyConfig.addShortcode('storybook', storybook);
    eleventyConfig.addShortcode('codesandbox', codesandbox);
};

module.exports = {
    addAllShortCodes
};

const card = require('./card');
const contentPageImage = require('./contentPageImage');
const iconList = require('./iconList');
const list = require('./list');
const mediaElement = require('./mediaElementList');
const notification = require('./notification');
const tokensTable = require('./tokensTable');
const simpleTable = require('./simpleTable');
const globalTokensWarning = require('./notifications/globalTokensWarning');

const { deindentHTML } = require('./shortcode-utilities');

/**
 * Adds all 11ty shortcodes
 * @param {object} eleventyConfig
 */
const addAllShortCodes = (eleventyConfig) => {
    eleventyConfig.addShortcode('card', (shortcodeArgs) => deindentHTML(card(shortcodeArgs)));
    eleventyConfig.addShortcode('contentPageImage', (shortcodeArgs) => deindentHTML(contentPageImage(shortcodeArgs)));
    eleventyConfig.addShortcode('iconList', (shortcodeArgs) => deindentHTML(iconList(shortcodeArgs)));
    eleventyConfig.addShortcode('list', (shortcodeArgs) => deindentHTML(list(shortcodeArgs)));
    eleventyConfig.addShortcode('mediaElementList', (shortcodeArgs) => deindentHTML(mediaElement(shortcodeArgs)));
    eleventyConfig.addShortcode('notification', (shortcodeArgs) => deindentHTML(notification(shortcodeArgs)));
    eleventyConfig.addShortcode('tokensTable', (shortcodeArgs) => deindentHTML(tokensTable(shortcodeArgs)));
    eleventyConfig.addShortcode('simpleTable', (shortcodeArgs) => deindentHTML(simpleTable(shortcodeArgs)));
    eleventyConfig.addShortcode('globalTokensWarning', () => deindentHTML(globalTokensWarning()));
};

module.exports = {
    addAllShortCodes,
};

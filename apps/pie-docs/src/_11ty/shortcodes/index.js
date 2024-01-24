const card = require('./card');
const categorisedIconList = require('./categorisedIconList');
const componentDetailsTable = require('./componentDetailsTable');
const componentStatusTable = require('./componentStatusTable');
const contentPageImage = require('./contentPageImage');
const { contentLayout, contentItem } = require('./contentLayout');
const globalTokensWarning = require('./notifications/globalTokensWarning');
const link = require('./link');
const list = require('./list');
const mediaElement = require('./mediaElementList');
const notification = require('./notification');
const resourceTable = require('./resourceTable');
const simpleTable = require('./simpleTable');
const termsAndDescriptions = require('./termsAndDescriptions');
const tokensTable = require('./tokensTable');
const usage = require('./usage');

const { deindentHTML } = require('./shortcode-utilities');

/**
 * Adds all 11ty shortcodes
 * @param {object} eleventyConfig
 */
const addAllShortCodes = (eleventyConfig) => {
    eleventyConfig.addShortcode('card', (shortcodeArgs) => deindentHTML(card(shortcodeArgs)));
    eleventyConfig.addShortcode('categorisedIconList', (shortcodeArgs) => deindentHTML(categorisedIconList(shortcodeArgs)));
    eleventyConfig.addShortcode('componentDetailsTable', (shortcodeArgs) => deindentHTML(componentDetailsTable(shortcodeArgs)));
    eleventyConfig.addShortcode('componentStatusTable', (shortcodeArgs) => deindentHTML(componentStatusTable(shortcodeArgs)));
    eleventyConfig.addShortcode('contentPageImage', (shortcodeArgs) => deindentHTML(contentPageImage(shortcodeArgs)));
    eleventyConfig.addPairedShortcode('contentLayout', (shortcodeArgs) => deindentHTML(contentLayout(shortcodeArgs)));
    eleventyConfig.addPairedShortcode('contentItem', (shortcodeArgs) => deindentHTML(contentItem(shortcodeArgs)));
    eleventyConfig.addShortcode('globalTokensWarning', (shortcodeArgs) => deindentHTML(globalTokensWarning(shortcodeArgs)));
    eleventyConfig.addShortcode('link', (shortcodeArgs) => deindentHTML(link(shortcodeArgs)));
    eleventyConfig.addShortcode('list', (shortcodeArgs) => deindentHTML(list(shortcodeArgs)));
    eleventyConfig.addShortcode('mediaElementList', (shortcodeArgs) => deindentHTML(mediaElement(shortcodeArgs)));
    eleventyConfig.addShortcode('notification', (shortcodeArgs) => deindentHTML(notification(shortcodeArgs)));
    eleventyConfig.addShortcode('resourceTable', (shortcodeArgs) => deindentHTML(resourceTable(shortcodeArgs)));
    eleventyConfig.addShortcode('simpleTable', (shortcodeArgs) => deindentHTML(simpleTable(shortcodeArgs)));
    eleventyConfig.addShortcode('tokensTable', (shortcodeArgs) => deindentHTML(tokensTable(shortcodeArgs)));
    eleventyConfig.addShortcode('termsAndDescriptions', (shortcodeArgs) => deindentHTML(termsAndDescriptions(shortcodeArgs)));
    eleventyConfig.addShortcode('usage', (shortcodeArgs) => deindentHTML(usage(shortcodeArgs)));
};

module.exports = {
    addAllShortCodes,
};

const storybook = require('./storybook');
const codesandbox = require('./codesandbox');
const contentPageImage = require('./contentPageImage');
const notification = require('./notification');

/**
 * Adds all 11ty shortcodes
 * @param {object} eleventyConfig 
 */
const addAllShortCodes = eleventyConfig => {
  eleventyConfig.addShortcode("storybook", storybook);
  eleventyConfig.addShortcode("codesandbox", codesandbox);
  eleventyConfig.addShortcode("contentPageImage", contentPageImage);
  eleventyConfig.addShortcode("notification", notification);
};

module.exports = {
  addAllShortCodes
};

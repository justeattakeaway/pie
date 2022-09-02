const storybook = require('./storybook');
const codesandbox = require('./codesandbox');
const contentPageImage = require('./contentPageImage');

const addAllShortCodes = eleventyConfig => {
  eleventyConfig.addShortcode("storybook", storybook);
  eleventyConfig.addShortcode("codesandbox", codesandbox);
  eleventyConfig.addShortcode("contentPageImage", contentPageImage);
};

module.exports = {
  addAllShortCodes
}

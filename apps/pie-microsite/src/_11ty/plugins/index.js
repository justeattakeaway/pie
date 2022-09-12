const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

/**
 * Adds all 11ty plugins
 * @param {object} eleventyConfig 
 */
const addAllPlugins = eleventyConfig => {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};

module.exports = {
  addAllPlugins
};

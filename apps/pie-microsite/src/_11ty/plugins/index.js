const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const eleventySass = require('eleventy-sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

/**
 * Adds all 11ty plugins
 * @param {object} eleventyConfig
 */
const addAllPlugins = eleventyConfig => {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventySass, {
    sass: {
      loadPaths: [
        '../../node_modules/'
      ],
      sourceMap: true
    },
    postcss: postcss([
      autoprefixer,
      cssnano
    ])
  });
};

module.exports = {
  addAllPlugins
};


const {
  filters,
  shortcodes,
  plugins
} = require('./src/_11ty');

module.exports = eleventyConfig => {
  // Watch target scss folder for all changes.
  eleventyConfig.addWatchTarget('src/assets/styles/');

  // Copy over img directory to dist directory.
  eleventyConfig.addPassthroughCopy({ 'src/assets/img': 'assets/img' });

  // Plugins
  plugins.addAllPlugins(eleventyConfig);
  
  // Filters
  filters.addAllFilters(eleventyConfig);

  // Shortcodes
  shortcodes.addAllShortCodes(eleventyConfig);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk"
  };
};

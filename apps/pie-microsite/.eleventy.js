
const {
  filters,
  shortcodes,
  plugins
} = require('./src/_11ty');

module.exports = eleventyConfig => {
  // Watch target scss folder for all changes.
  eleventyConfig.addWatchTarget('src/assets/styles/');

  // Give other task runners a chance to complete before page reload
  eleventyConfig.setWatchThrottleWaitTime(500); // in milliseconds

  // Copy over img directory to dist directory.
  eleventyConfig.addPassthroughCopy({ 'src/assets/img': 'assets/img' });

  // Plugins
  plugins.addAllPlugins(eleventyConfig);
  
  // Filters
  filters.addAllFilters(eleventyConfig);

  // Shortcodes
  shortcodes.addAllShortCodes(eleventyConfig);

  // Pass CNAME file into dist output (needed for domain to work correctly)
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk"
  };
};

const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

const {
  filters,
  shortcodes
} = require('./src/_11ty');

module.exports = eleventyConfig => {
  // Watch target scss folder for all changes.
  eleventyConfig.addWatchTarget('src/assets/styles/');

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Custom Filter registrations
  eleventyConfig.addFilter("pieIconsSvg", filters.pieIconsSvg);
  eleventyConfig.addFilter("pieDesignTokenColours", filters.pieDesignTokenColours);

  // Copy over img directory to dist directory.
  eleventyConfig.addPassthroughCopy({ 'src/assets/img': 'assets/img' });

  // Custom shortcodes
  shortcodes.addAllShortCodes(eleventyConfig);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk"
  };
};

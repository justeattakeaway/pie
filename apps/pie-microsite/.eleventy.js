const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

const {
  filters,
  shortcodes,
  templateHandlers
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

  // Custom File Extension handling
  templateHandlers.scss(eleventyConfig);

  // Custom shortcodes
  eleventyConfig.addShortcode("storybook", shortcodes.storybook);
  eleventyConfig.addShortcode("codesandbox", shortcodes.codesandbox);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk"
  };
};

const { 
  collections, 
  filters, 
  shortcodes, 
  templateHandlers 
} = require('./src/_11ty');

module.exports = function (eleventyConfig) {
  // Custom Filter registrations
  eleventyConfig.addFilter("pieIconsSvg", filters.pieIconsSvg);

  // Custom Collection registrations
  eleventyConfig.addCollection("pageCategories", collections.allPageCategories);
  
  // Custom File Extension handling
  templateHandlers.scss(eleventyConfig);

  // Custom shortcodes
  eleventyConfig.addShortcode("storybook", shortcodes.storybook)
  eleventyConfig.addShortcode("codesandbox", shortcodes.codesandbox)

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk"
  };
};

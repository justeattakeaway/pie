const templateHandlers = require('./src/_11ty/template-handlers');
const filters = require('./src/_11ty/filters');
const collections = require('./src/_11ty/collections');

module.exports = function (eleventyConfig) {
  // Custom Filter registrations
  eleventyConfig.addFilter("pieIconsSvg", filters.pieIconsSvg);

  // Custom Collection registrations
  eleventyConfig.addCollection("pageCategories", collections.allPageCategories);
  
  // Custom File Extension handling
  templateHandlers.scss(eleventyConfig);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

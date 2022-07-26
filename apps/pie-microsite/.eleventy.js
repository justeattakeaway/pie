const addScssTemplateSupport = require('./template-handlers/scss');
const pieIconsSvgFilter = require('./filters/pieIconsSvg');
const getAllPageCategories = require('./collections/allPageCategories');

module.exports = function (eleventyConfig) {
  // Custom Filter registations
  eleventyConfig.addFilter("pieIconsSvg", pieIconsSvgFilter);

  // Custom Collection registrations
  eleventyConfig.addCollection("pageCategories", getAllPageCategories);
  
  // Custom File Extension handling
  addScssTemplateSupport(eleventyConfig);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

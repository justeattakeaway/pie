const addScssTemplateSupport = require('./template-handlers/scss');
const pieIconsSvgFilter = require('./filters/pieIconsSvg');

/**
 * Returns a collection of all unique page category tag strings (excluding the 'pages' tag)
 * @param {*} collectionApi 
 * @returns {Set<string>}
 */
const getAllPageCategories = collectionApi => {
  const tagsToIgnore = ["pages"];
  const tagsList = new Set();

  collectionApi.getAll().map((item) => {
    if (item.data.tags) {
      // handle pages that don't have tags
      item.data.tags.map((tag) => {
        if (!tagsToIgnore.includes(tag)) {
          tagsList.add(tag);
        }
      });
    }
  });

  return tagsList;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("pieIconsSvg", pieIconsSvgFilter);
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

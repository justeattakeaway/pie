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
  eleventyConfig.addCollection("pageCategories", getAllPageCategories);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};

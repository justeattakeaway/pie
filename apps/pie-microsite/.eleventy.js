// const eleventyVue = require("@11ty/eleventy-plugin-vue");

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPlugin(eleventyVue);
  eleventyConfig.addCollection("pageCategories", function (collectionApi) {
    // pages tag is just used for providing a common template
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
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

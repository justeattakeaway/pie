// const eleventyVue = require("@11ty/eleventy-plugin-vue");
const sass = require("sass");
const path = require("node:path");

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
  // eleventyConfig.addPlugin(eleventyVue);
  eleventyConfig.addCollection("pageCategories", getAllPageCategories);
  // add as a valid template language to process, e.g. this adds to --formats
  eleventyConfig.addTemplateFormats("scss");

  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css", // optional, default: "html"

    // can be an async function
    compile: function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);

      let result = sass.compileString(inputContent, {
        loadPaths: [
          parsed.dir || ".",
          this.config.dir.includes,
          '../../node_modules/'
        ]
      });

      return (data) => {
        return result.css;
      };
    }
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

// const eleventyVue = require("@11ty/eleventy-plugin-vue");

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPlugin(eleventyVue);
  
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

const sass = require("sass");
const path = require("node:path");

/**
 * Tells Eleventy how to compile SCSS files into CSS when building the project
 * @param {*} eleventyConfig 
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    compile: function (inputContent, inputPath) {
      const parsed = path.parse(inputPath);

      // avoid compiling SCSS partials into their own CSS files
      if(parsed.name.startsWith("_")) {
        return;
      }

      let result = sass.compileString(inputContent, {
        loadPaths: [
          parsed.dir || ".",
          this.config.dir.includes,
          "../../node_modules/", // Turborepo keeps dependencies at the project root. This allows SCSS files to reference extenal packages in node_modules
        ],
      });

      return () => {
        return result.css;
      };
    },
  });
};

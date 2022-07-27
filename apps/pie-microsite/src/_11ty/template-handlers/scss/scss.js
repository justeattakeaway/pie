const sass = require("sass");
const path = require("node:path");
const postCSSProcessor = require("./postcss");

const TEMPLATE_EXTENSION = "scss";
const OUTPUT_EXTENSION = "css";
const PATH_TO_NODE_MODULES = "../../node_modules/"; // Turborepo keeps dependencies at the project root. This allows SCSS files to reference extenal packages in node_modules

/**
 * Tells Eleventy how to compile SCSS files into CSS when building the project
 * @param {*} eleventyConfig 
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats(TEMPLATE_EXTENSION);
  eleventyConfig.addExtension(TEMPLATE_EXTENSION, {
    outputFileExtension: OUTPUT_EXTENSION,

    compile: function (inputContent, inputPath) {
      const parsed = path.parse(inputPath);

      // avoid compiling SCSS partials into their own CSS files
      if(parsed.name.startsWith("_")) {
        return;
      }

      const result = sass.compileString(inputContent, {
        loadPaths: [
          parsed.dir || ".",
          this.config.dir.includes,
          PATH_TO_NODE_MODULES,
        ],
      });

      const processedResult = postCSSProcessor(result.css);

      return () => {
        return processedResult.css;
      };
    },
  });
};

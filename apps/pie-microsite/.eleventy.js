const sass = require('sass');

module.exports = function (eleventyConfig) {

  eleventyConfig.addTemplateFormats('scss');

  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css',

    compile: async function(inputContent) {
      let result = sass.compileString(inputContent, {
        includePaths: ['node_modules']
      });

      return async () => {
        return result.css;
      };
    }
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};

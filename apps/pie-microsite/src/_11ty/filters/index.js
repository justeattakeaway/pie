const pieIconsSvg = require('./pieIconsSvg');
const pieDesignTokenColours = require('./pieDesignTokenColours');

/**
 * Adds all 11ty filters
 * @param {object} eleventyConfig 
 */
const addAllFilters = eleventyConfig => {
  eleventyConfig.addFilter("pieIconsSvg", pieIconsSvg);
  eleventyConfig.addFilter("pieDesignTokenColours", pieDesignTokenColours);
};

module.exports = {
  addAllFilters
};

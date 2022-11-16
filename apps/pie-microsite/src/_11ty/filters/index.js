const pieIconsSvg = require('./pieIconsSvg');
const pieDesignTokenColours = require('./pieDesignTokenColours');
const removeUrlSlug = require('./removeUrlSlug');

/**
 * Adds all 11ty filters
 * @param {object} eleventyConfig
 */
const addAllFilters = eleventyConfig => {
    eleventyConfig.addFilter('pieIconsSvg', pieIconsSvg);
    eleventyConfig.addFilter('pieDesignTokenColours', pieDesignTokenColours);
    eleventyConfig.addFilter('removeUrlSlug', removeUrlSlug);
};

module.exports = {
    addAllFilters
};

const pieIconsSvg = require('./pieIconsSvg');
const pieDesignTokenColours = require('./pieDesignTokenColours');
const removeUrlSlug = require('./removeUrlSlug');
const markdown = require('./markdown');

/**
 * Adds all 11ty filters
 * @param {object} eleventyConfig
 */
const addAllFilters = (eleventyConfig) => {
    eleventyConfig.addFilter('pieIconsSvg', pieIconsSvg);
    eleventyConfig.addFilter('pieDesignTokenColours', pieDesignTokenColours);
    eleventyConfig.addFilter('removeUrlSlug', removeUrlSlug);
    eleventyConfig.addFilter('markdown', markdown);
};

module.exports = {
    addAllFilters,
};

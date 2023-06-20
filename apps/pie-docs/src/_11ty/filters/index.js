const pieIconsSvg = require('./pieIconsSvg');
const pieDesignTokenColours = require('./pieDesignTokenColours');
const removeUrlSlug = require('./removeUrlSlug');
const markdown = require('./markdown');
const headingAnchor = require('./headingAnchor');

/**
 * Adds all 11ty filters
 * @param {object} eleventyConfig
 */
const addAllFilters = (eleventyConfig) => {
    eleventyConfig.addFilter('pieIconsSvg', pieIconsSvg);
    eleventyConfig.addFilter('pieDesignTokenColours', pieDesignTokenColours);
    eleventyConfig.addFilter('removeUrlSlug', removeUrlSlug);
    eleventyConfig.addFilter('markdown', markdown);
    eleventyConfig.addFilter('headingAnchor', headingAnchor);
};

module.exports = {
    addAllFilters,
};

const md = require('../../_utilities/markdown');

/**
 * Adds all 11ty libraries
 * @param {object} eleventyConfig
 */
const amendAllLibraries = (eleventyConfig) => {
    eleventyConfig.setLibrary('md', md);
};

module.exports = {
    amendAllLibraries,
};

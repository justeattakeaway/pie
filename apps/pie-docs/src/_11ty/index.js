const collections = require('./collections');
const filters = require('./filters');
const libraries = require('./libraries');
const shortcodes = require('./shortcodes');
const plugins = require('./plugins');

/**
 * All resources needed for the .eleventy.js file should be exported from here
 * such as custom collections, filters, template handlers and shortcodes
 */
module.exports = {
    collections,
    filters,
    libraries,
    shortcodes,
    plugins,
};

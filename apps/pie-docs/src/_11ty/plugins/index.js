const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

const eleventySass = require('eleventy-sass');
const eleventyPluginRev = require('eleventy-plugin-rev');

const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

/**
 * Adds all 11ty plugins
 * @param {object} eleventyConfig
 */
const addAllPlugins = (eleventyConfig) => {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(eleventyPluginRev);
    eleventyConfig.addPlugin(eleventySass, {
        postcss: postcss([
            autoprefixer,
            cssnano
        ]),
        rev: true,
        sass: {
            loadPaths: [
                '../../node_modules/',
                'node_modules/',
            ],
            sourceMap: true,
        },
    });
};

module.exports = {
    addAllPlugins,
};

const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

const eleventySass = require('eleventy-sass');
const eleventyPluginRev = require('eleventy-plugin-rev');

const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const pluginTOC = require('eleventy-plugin-toc');

const litPlugin = require('@lit-labs/eleventy-plugin-lit');
const sitemapPlugin = require('@quasibit/eleventy-plugin-sitemap');
const markdownPagesPlugin = require('./markdown-pages');

/**
 * Adds all 11ty plugins
 * @param {object} eleventyConfig
 */
const addAllPlugins = (eleventyConfig) => {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(eleventyPluginRev);
    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2'],
        wrapperClass: 'c-content-list',
    });
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
    eleventyConfig.addPlugin(litPlugin, {
        mode: 'worker',
        componentModules: [
            'src/assets/js/pie-components-imports.js',
        ],
    });
    eleventyConfig.addPlugin(markdownPagesPlugin);
    eleventyConfig.addPlugin(sitemapPlugin, {
        sitemap: {
            hostname: 'https://pie.design',
        },
    });
};

module.exports = {
    addAllPlugins,
};

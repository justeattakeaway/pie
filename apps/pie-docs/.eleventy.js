const litPlugin = require('@lit-labs/eleventy-plugin-lit');

const {
    filters,
    libraries,
    shortcodes,
    plugins
} = require('./src/_11ty');

module.exports = eleventyConfig => {
    // Copy over img directory to dist directory.
    eleventyConfig.addPassthroughCopy({ 'src/assets/img': 'assets/img' });

    // Plugins
    plugins.addAllPlugins(eleventyConfig);

    eleventyConfig.addPlugin(litPlugin, {
        mode: 'worker',
        componentModules: [
            '../../node_modules/@justeattakeaway/pie-webc/components/button.js',
            '../../node_modules/@justeattakeaway/pie-webc/components/notification.js',
            '../../node_modules/@justeattakeaway/pie-webc/components/select.js',
            '../../node_modules/@justeattakeaway/pie-webc/components/divider.js',
            '../../node_modules/@justeattakeaway/pie-webc/components/text-input.js'
        ],
    });

    // Filters
    filters.addAllFilters(eleventyConfig);

    // Libraries to amend the used library instances
    libraries.amendAllLibraries(eleventyConfig);

    // Shortcodes
    shortcodes.addAllShortCodes(eleventyConfig);

    // Pass CNAME file into dist output (needed for domain to work correctly)
    eleventyConfig.addPassthroughCopy("CNAME");

    // Pass favicon files into dist output
    eleventyConfig.addPassthroughCopy("android-chrome-192x192.png");
    eleventyConfig.addPassthroughCopy("android-chrome-256x256.png");
    eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
    eleventyConfig.addPassthroughCopy("browserconfig.xml");
    eleventyConfig.addPassthroughCopy("favicon-16x16.png");
    eleventyConfig.addPassthroughCopy("favicon-32x32.png");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("mstile-150x150.png");
    eleventyConfig.addPassthroughCopy("safari-pinned-tab.svg");
    eleventyConfig.addPassthroughCopy("site.webmanifest");

    // Allow JS to pass through (can add a bundling step in future if needed)
    eleventyConfig.addPassthroughCopy("./src/assets/js");

    // This allows us to reference JS from node_modules in <script> tags.
    // However it can work with any kind of type and any location!
    eleventyConfig.addPassthroughCopy({
        "./node_modules/@docsearch/css/dist/style.css": "assets/styles/docsearch.css"
    });

    eleventyConfig.addPassthroughCopy({
        "./node_modules/@docsearch/js/dist/umd/index.js": "assets/js/docsearch.js"
    });

    return {
        dir: {
            input: "src",
            output: "dist",
        },
        markdownTemplateEngine: "njk",
    };
};

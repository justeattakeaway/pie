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

    return {
        dir: {
        input: "src",
        output: "dist",
        },
        markdownTemplateEngine: "njk",
        pathPrefix: process.env.GITHUB_REF_NAME === 'main' ? '/' : process.env.PIE_URL_PREFIX
    };
};

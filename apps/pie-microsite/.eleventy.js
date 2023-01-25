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

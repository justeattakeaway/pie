const projectSettings = require('./_data/projectSettings');

// Only build drafts when site is in development mode
const shouldBuildDrafts = projectSettings().environment === 'development';

module.exports = {
    eleventyComputed: {
        // If no permalink is returned 1tty will ignore the page/section during build
        permalink(data) {
            // If the page is in `draft:true` and the site is not in 'development' mode, do not build page.
            if (data.draft && !shouldBuildDrafts) {
                return false;
            }
            // Return the original value (which could be `false`, or a custom value,
            // or default empty string).
            return data.permalink;
        },
    },
};

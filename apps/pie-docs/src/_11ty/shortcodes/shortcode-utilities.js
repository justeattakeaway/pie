/**
 * Removes any whitespace created by indenting template strings inside shortcode functions.
 * Without doing this, indentation can accidentally escape code when the markdown/nunjucks engine tries to render the code.
 * Example of issue: https://github.com/11ty/eleventy/issues/402
 * @param {String} htmlString - the HTML string returned from a shortcode
 * @returns {String} the HTML string with indentation whitespace removed
 */
const deindentHTML = htmlString => htmlString.replace(/\n|\t/g, '').trim();

module.exports = {
    deindentHTML
};

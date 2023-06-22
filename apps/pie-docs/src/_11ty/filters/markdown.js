const md = require('../../_utilities/markdown');
/**
 * Converts markdown to HTML
 * @param {string} content - The content to be converted.
 * @param {boolean} inline - if true will return content in <p></p> tags. If false will return content without enclosing tags.
 * @returns {string}
 */
module.exports = (content, inline = false) =>
    inline ? `<span>${md.renderInline(content)}</span>` : md.render(content);

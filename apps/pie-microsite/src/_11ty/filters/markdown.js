const MarkdownIt = require('markdown-it');

const md = new MarkdownIt({
    html: true
});

/**
 * A List HTML component
 * @param {string} content - Type of list: orderd, pill
 * @param {boolean} inline - if true will return content in <p></p> tags. if false will return content without enclosing tags.
 * @returns {string}
 */
module.exports = (content, inline = false) => (inline ? md.renderInline(content) : md.render(content));

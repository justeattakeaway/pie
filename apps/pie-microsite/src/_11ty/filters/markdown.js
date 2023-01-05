const MarkdownIt = require('markdown-it');

const md = new MarkdownIt({
    html: true
});

module.exports = (content, inline = false) => (inline ? md.renderInline(content) : md.render(content));

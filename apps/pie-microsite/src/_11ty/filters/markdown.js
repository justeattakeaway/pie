const MarkdownIt = require('markdown-it');

const md = new MarkdownIt({
    html: true
});

module.exports = content => md.render(content);

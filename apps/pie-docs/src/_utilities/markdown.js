const MarkdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

const md = new MarkdownIt({
    html: true,
}).use(markdownItAttrs);

module.exports = md;

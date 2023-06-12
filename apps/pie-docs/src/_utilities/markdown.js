const MarkdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const slugify = require('slugify');
const pieIconsSvg = require('../_11ty/filters/pieIconsSvg');

const anchor = pieIconsSvg({
    name: 'link',
    attrs: {
        'aria-hidden': 'true',
        height: 16,
        width: 16,
    },
});

const md = new MarkdownIt({
    html: true,
})
    .use(require('markdown-it-anchor'), {
        level: [2, 3, 4],
        permalink: true,
        permalinkClass: 'c-heading-anchor',
        permalinkSymbol: anchor,
        slugify: (s) => slugify(s, { lower: true, remove: /[$*_+~.()'"!/\-:@?]+/g }),
    })
    .use(markdownItAttrs);

module.exports = md;

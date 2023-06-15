const MarkdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const slugify = require('slugify');
const anchor = require('markdown-it-anchor');
const pieIconsSvg = require('../_11ty/filters/pieIconsSvg');

const anchorIcon = pieIconsSvg({
    name: 'link',
    attrs: {
        'aria-hidden': 'true',
        height: 16,
        width: 16,
        fill: 'interactive-brand',
    },
});

const md = new MarkdownIt({
    html: true,
}).use(markdownItAttrs)
    .use(anchor, {
        level: [2, 3, 4],
        permalink: [
            anchor.permalink.ariaHidden({
                placement: 'before',
            }),
        ],
        permalinkClass: 'c-anchor-icon',
        permalinkSymbol: anchorIcon,
        permalinkBefore: true,
        slugify: (s) => slugify(s, { lower: true, remove: /[$*_+~.()'"!/\-:@?]+/g }),
    });

module.exports = md;

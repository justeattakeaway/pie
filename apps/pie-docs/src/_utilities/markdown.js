const MarkdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const slugify = require('slugify');
const anchor = require('markdown-it-anchor');
const pieIconsSvg = require('../_11ty/filters/pieIconsSvg');

const AnchorIcon = pieIconsSvg({
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
        // permalink: anchor.permalink.headerLink({
        //     safariReaderFix: true,
        //     permalinkClass: 'c-anchor-icon',
        //     permalinkSymbol: anchorIcon,
        // }),
        // permalinkClass: 'c-anchor-icon',
        // permalinkSymbol: anchorIcon,
        // permalinkBefore: true,
        permalink: anchor.permalink.linkInsideHeader({
            symbol: `
                <span class="is-visuallyHidden">Jump to heading</span>
                ${AnchorIcon}
            `,
            placement: 'after',
        }),
        slugify: (s) => slugify(s, { lower: true, remove: /[$*_+~.()'"!/\-:@?]+/g }),
    });

module.exports = md;

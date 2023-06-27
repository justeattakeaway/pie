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
        renderPermalink: (slug, opts, state, idx) => {
            const headingText = state.tokens[idx + 1].children[0].content;

            const textTokens = [
                Object.assign(new state.Token('link_open', 'span', 1), {
                    attrs: [
                        ['class', 'c-anchor-text']
                    ],
                }),
                Object.assign(new state.Token('html_block', '', 0), {
                    content: headingText,
                }),
                new state.Token('link_close', 'span', -1)
            ];

            const linkTokens = [
                Object.assign(new state.Token('link_open', 'a', 1), {
                    attrs: [
                        ['class', 'c-anchor-icon'],
                        ['href', opts.permalinkHref(slug, state)],
                        ...Object.entries(opts.permalinkAttrs(slug, state))
                    ],
                }),
                Object.assign(new state.Token('html_block', '', 0), {
                    content:  AnchorIcon,
                }),
                new state.Token('link_close', 'a', -1)
            ];

            state.tokens[idx + 1].children = textTokens;
            state.tokens[idx + 1].children.push(...linkTokens);
        },
        slugify: (s) => slugify(s, { lower: true, remove: /[$*_+~.()'"!/\-:@?]+/g }),
    });

module.exports = md;

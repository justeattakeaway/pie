/* eslint-disable camelcase */
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
        class: 'c-anchorIcon',
    },
});

const md = new MarkdownIt({
    html: true,
}).use(markdownItAttrs)
    .use(anchor, {
        level: [2, 3, 4],
        permalink: anchor.permalink.linkInsideHeader({
            symbol: AnchorIcon,
            placement: 'after',
            space: false,
        }),
        slugify: (s) => slugify(s, { lower: true, remove: /[$*_+~.()'"!/\-:@?]+/g }),
    });

// render <pie-divider> tags instead of <hr> tags
md.renderer.rules.hr = (tokens, idx, options, env, self) => '<pie-divider></pie-divider>';

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const hrefIndex = token.attrIndex('href');
    const href = token.attrs[hrefIndex][1];
    const titleIndex = token.attrIndex('title');
    const title = titleIndex > -1 ? token.attrs[titleIndex][1] : null;
    const targetIndex = token.attrIndex('target');
    const target = targetIndex > -1 ? token.attrs[targetIndex][1] : null;
    const relIndex = token.attrIndex('rel');
    const rel = relIndex > -1 ? token.attrs[relIndex][1] : null;
    const link = `<pie-link href="${href}" title="${title}" target="${target}" rel="${rel}">`;
    return link;
};

md.renderer.rules.link_close = (tokens, idx, options, env, self) => '</pie-link>';

module.exports = md;

const slugify = require('slugify');
const { parse } = require('node-html-parser');
const pieIconsSvg = require('./pieIconsSvg');

const AnchorIcon = pieIconsSvg({
    name: 'link',
    attrs: {
        'aria-hidden': 'true',
        height: 16,
        width: 16,
        fill: 'interactive-brand',
    },
});

function addAnchor (element) {
    const slug = element.getAttribute('id') || slugify(element.textContent);
    element.setAttribute('id', slug);
    element.innerHTML += `<a class="c-anchorIcon" href="#${slug}">${AnchorIcon}</a>`;
}

/**
 * Adds heading anchors to HTML string
 * @param {string} content - The content to be converted.
 */
module.exports = (content) => {
    const contentHtml = parse(content);
    const headings = contentHtml.querySelectorAll('h2, h3, h4');

    headings.forEach(addAnchor);
    return contentHtml.toString();
};


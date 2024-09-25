const markdownFilter = require('../filters/markdown');

const mediaElementList = ({ data }) => {
    const listItems = JSON.parse(data).items;
    const imgBreakpoint = '600px';

    return `<div class="c-mediaElementList">
    ${listItems.map(({
        headingLevel = 3, headingText, imgSrc, imgSrcNarrow, text, alt = '',
    }) => {
        const hx = `h${headingLevel}`;
        return `<div class="c-mediaElement">
            <picture>
                <source srcset="${imgSrc}" media="(min-width: ${imgBreakpoint})">
                <img src="${imgSrcNarrow}" alt="${alt}" />
            </picture>
            <div class="c-mediaElement-text">
                <${hx}>${headingText}</${hx}>
                ${markdownFilter(text)}
            </div>
        </div>`;
    }).join('<hr>')}
    </div>`;
};

module.exports = mediaElementList;

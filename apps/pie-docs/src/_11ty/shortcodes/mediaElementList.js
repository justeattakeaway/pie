const markdownFilter = require('../filters/markdown');

module.exports = ({ data }) => {
    const listItems = JSON.parse(data).items;
    const imgBreakpoint = '600px';

    return `<div class="c-mediaElementList">
    ${listItems
        .map(({ headingLevel = 3, headingText, imgSrc, imgSrcNarrow, text }) => {
            const hx = `h${headingLevel}`;
            return `<div class="c-mediaElement">
            <picture>
                <source srcset="${imgSrc}" media="(min-width: ${imgBreakpoint})">
                <img src="${imgSrcNarrow}" alt="" />
            </picture>
            <div class="c-mediaElement-text">
                <${hx}>${headingText}</${hx}>
                ${markdownFilter(text)}
            </div>
        </div>`;
        })
        .join('<hr>')}
    </div>`;
};

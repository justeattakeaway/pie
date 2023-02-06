module.exports = ({ data }) => {
    const listItems = JSON.parse(data).items;

    return `<div class="c-mediaElementList">
    ${listItems.map(({
        headingLevel = 3, headingText, imgSrc, imgSrcNarrow, text
    }) => {
        const hx = `h${headingLevel}`;
        return `<div class="c-mediaElement">
            <picture>
                <source srcset="${imgSrcNarrow}" media="(max-width: 600px)">
                <img src="${imgSrc}" alt="" />
            </picture>
            <div class="c-mediaElement-text">
                <${hx}>${headingText}</${hx}>
                <p>${text}</p>
            </div>
        </div>`;
    }).join('<hr>')}
    </div>`;
};

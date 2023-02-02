module.exports = ({ data }) => {
    const listItems = JSON.parse(data).items;

    return `<div class="c-mediaElementList">
    ${listItems.map(({
        headingLevel = 3, headingText, imgSrc, text
    }) => {
        const hx = `h${headingLevel}`;
        return `<div class="c-mediaElement">
            <img src="${imgSrc}" alt="" />
            <div>
                <${hx}>${headingText}</${hx}>
                <p>${text}</p>
            </div>
        </div>`;
    }).join('<hr>')}
    </div>`;
};

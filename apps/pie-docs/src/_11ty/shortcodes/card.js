const pieIconsSvg = require('../filters/pieIconsSvg');

/**
 * A Card HTML component – takes an array of list items and turns them into a list of cards
 * @param {string[]} items - An array of card items
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function ({ items }) {
    const iconLink = pieIconsSvg({
        name: 'link-external',
        attrs: {
            'aria-hidden': 'true',
            height: 21,
            width: 21,
        },
    });

    const buildCard = ({
        label, href, src, shouldOpenInNewTab = false,
    }) => {
        const target = shouldOpenInNewTab ? 'target="_blank"' : '';

        const labelClasses = [
            'c-card-labelContainer',
            src && 'c-card-labelContainer--hasImage'
        ].filter(Boolean).join(' ');

        return `<article class="c-card">
            ${src ? `<img class="c-card-image" src="${src}" role="presentation" alt="">` : ''}
            <div class="${labelClasses}">
                <p class="c-card-label">
                    <a href=${href} ${target}>${label}</a>
                </p>
                ${iconLink}
            </div>
        </article>`;
    };

    if (items.length > 1) {
        return `<div class="c-card-wrapper">
            <ul class="c-card-list">
                ${Object.values(items).map((card) => `<li>${buildCard(card)}</li>`).join('')}
            </ul>
        </div>`;
    }

    return `${buildCard(items[0])}`;
};

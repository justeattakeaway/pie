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
            height: 21,
            width: 21
        }
    });

    const buildCard = ({
        label, href, src, mobileSrc, shouldOpenInNewTab = false
    }) => {
        const target = shouldOpenInNewTab ? 'target="_blank"' : '';

        const labelClasses = [
            'c-card-labelContainer',
            src && 'c-card-labelContainer--hasImage'
        ].filter(Boolean).join(' ');

        return `<a href=${href} ${target} >
            ${src ? `<img class="c-card-image" src="${src}" >` : ''}
            <div class="${labelClasses}">
                <p class="c-card-label">${label}</p>
                ${iconLink}
            </div>
        </a>`;
    };

    if (items.length > 1) {
        return `<div class="c-card-wrapper">
            <ul class="c-card-list">
                ${Object.values(items).map(card => `<li class="c-card">${buildCard(card)}</li>`).join('')}
            </ul>
        </div>`;
    }

    return `<div class="c-card">${buildCard(items[0])}`;
};

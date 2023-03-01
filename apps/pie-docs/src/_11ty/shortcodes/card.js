const pieIconsSvg = require('../filters/pieIconsSvg');
const pageWidths = require('../../_data/pageWidths');

/**
 * A Card HTML component – takes an array of list items and turns them into a list of cards
 * @param {string[]} items - An array of card items
 * @returns {string}
 */
module.exports = function ({ items }) {
    const iconLink = pieIconsSvg({
        name: 'link-external',
        attrs: {
            height: 21,
            width: 21,
        },
    });

    const buildCard = ({
        label, href, src, mobileSrc, shouldOpenInNewTab = false,
    }) => {
        const target = shouldOpenInNewTab ? 'target="_blank"' : '';
        const hasImage = href && mobileSrc;

        const labelClasses = [
            'c-card-labelContainer',
            hasImage && 'c-card-labelContainer--hasImage'
        ].filter(Boolean).join(' ');

        return `<a href=${href} ${target} >
            ${hasImage
            ? `<picture>
                    ${mobileSrc ? `<source srcset="${mobileSrc}" media="(max-width: ${pageWidths.mobileImageMaxWidth})" >` : ''}
                    <img class="c-card-image" src="${src}" >
                </picture>`
            : ''}
            <div class="${labelClasses}">
                <p class="c-card-label">${label}</p>
                ${iconLink}
            </div>
        </a>`;
    };

    if (items.length > 1) {
        return `<ul class="c-card-wrapper">
            ${Object.values(items).map((card) => `<li class="c-card">${buildCard(card)}</li>`).join('')}
        </ul>`;
    }

    return `<div class="c-card">${buildCard(items[0])}`;
};

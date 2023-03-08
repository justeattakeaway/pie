const pieIconsSvg = require('../filters/pieIconsSvg');
const pieDesignTokenColours = require('../filters/pieDesignTokenColours');

/**
 * A Card HTML component – takes an array of list items and turns them into a list of cards
 * @param {string[]} items - An array of card items
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function ({ items, shouldFillContainer = false }) {
    const buildLinkIcon = (isInternalLink) => {
        const internalLinkIcon = pieIconsSvg({
            name: 'arrow-right',
            attrs: {
                'aria-hidden': 'true',
                height: 16,
                width: 16,
            },
        });

        const externalLinkIcon = pieIconsSvg({
            name: 'link-external',
            attrs: {
                'aria-hidden': 'true',
                height: 21,
                width: 21,
            },
        });

        return isInternalLink ? internalLinkIcon : externalLinkIcon;
    };

    const buildCardContent = ({
        icon, iconColour, heading, content,
    }) => {
        const iconStyles = iconColour ? `style="--icon-container-colour: ${pieDesignTokenColours({ tokenName: iconColour, tokenPath: ['alias', 'default'] })};"` : '';

        const cardIcon = icon && pieIconsSvg({
            name: icon,
            attrs: {
                'aria-hidden': 'true',
                height: 32,
                width: 32,
            },
        });

        return `<div class="c-card-container">
                    ${cardIcon ? `<div class="c-card-icon" ${iconStyles}>${cardIcon}</div>` : ''}
                    ${heading ? `<h2 class="c-card-heading">${heading}</h2>` : ''}
                    ${content ? `<p class="c-card-content">${content}</p>` : ''}
                </div>`;
    };

    const buildCard = ({
        content,
        heading,
        href,
        icon,
        iconColour,
        isInternalLink,
        linkText,
        shouldOpenInNewTab = false,
        src,
    }) => {
        const target = shouldOpenInNewTab ? 'target="_blank"' : '';

        const labelClasses = [
            'c-card-labelContainer',
            src && 'c-card-labelContainer--hasImage',
            isInternalLink && 'c-card-labelContainer--internalLink'
        ].filter(Boolean).join(' ');

        const cardHasContent = (!!icon && !!iconColour) || !!heading || !!content;

        return `<article class="c-card">
                    ${cardHasContent ? `${buildCardContent({
            icon, iconColour, heading, content,
        })}` : ''}
                    ${src ? `<img class="c-card-image" src="${src}" role="presentation" alt="">` : ''}
                    <div class="${labelClasses}">
                        <p class="c-card-label">
                            <a href="${href}" ${target}><span>${linkText}</span></a>
                        </p>
                        ${href ? `${buildLinkIcon(isInternalLink)}` : ''}
                    </div>
                </article>`;
    };

    if (items.length > 1) {
        const listClasses = [
            'c-card-list',
            shouldFillContainer && 'c-card-list--fillContainer'
        ].filter(Boolean).join(' ');

        return `<div class="c-card-wrapper">
                    <ul class="${listClasses}">
                        ${Object.values(items).map((card) => `<li>${buildCard(card)}</li>`).join('')}
                    </ul>
                </div>`;
    }

    return `${buildCard(items[0])}`;
};

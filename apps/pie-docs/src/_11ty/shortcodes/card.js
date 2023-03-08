const pieIconsSvg = require('../filters/pieIconsSvg');
const pieDesignTokenColours = require('../filters/pieDesignTokenColours');

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

const buildCardLabel = (linkText, cardHasImage, href, shouldOpenInNewTab, isInternalLink) => {
    const labelClasses = [
        'c-card-labelContainer',
        cardHasImage && 'c-card-labelContainer--hasImage',
        isInternalLink && 'c-card-labelContainer--internalLink'
    ].filter(Boolean).join(' ');

    const target = shouldOpenInNewTab ? 'target="_blank"' : '';

    return `<div class="${labelClasses}">
                ${href
        ? `<a class="c-card-label" href="${href}" ${target}><span>${linkText}</span></a>
                        ${buildLinkIcon(isInternalLink)}`
        : `<p class="c-card-label"><span>${linkText}</span></p>`
                }
            </div>`;
};

const buildCardIcon = (icon, iconColour) => {
    const iconContainerColour = pieDesignTokenColours({ tokenName: iconColour, tokenPath: ['alias', 'default'] });
    const iconStyles = `style="--icon-container-colour: ${iconContainerColour};"`;

    const cardIcon = pieIconsSvg({
        name: icon,
        attrs: {
            'aria-hidden': 'true',
            height: 32,
            width: 32,
        },
    });

    return `<div class="c-card-icon" ${iconStyles}>${cardIcon}</div>`;
};

const buildCardContent = ({
    icon, iconColour, heading, headingLevel = '2', content,
}) => `<div class="c-card-container">
            ${icon && iconColour ? `${buildCardIcon(icon, iconColour)}` : ''}
            ${heading ? `<h${headingLevel} class="c-card-heading">${heading}</h${headingLevel}>` : ''}
            ${content ? `<p class="c-card-content">${content}</p>` : ''}
        </div>`;

/**
 * A Card HTML component – takes an array of list items and turns them into a list of cards
 * @param {object[]} items - An array of card items
 * @param {string} items.content - card content text
 * @param {string} items.heading - card heading
 * @param {string} items.headingLevel - level of heading e.g. "1" - `<h1></h1>`, "2" - `<h2></h2>`
 * @param {string} items.href - card link path
 * @param {string} items.icon - icon to be displayed at top of card
 * @param {string} items.iconColour - background colour for icon
 * @param {boolean} items.isInternalLink - should be true if card links to another docs site page
 * @param {string} items.linkText - text for card link
 * @param {boolean} items.shouldOpenInNewTab - should be true if card link is Okta secured
 * @param {string} items.src - card image src
 * @param {boolean} shouldFillContainer - If true cards will fill container width when wrapped
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function ({ items, shouldFillContainer = false }) {
    const buildCard = ({
        content,
        heading,
        headingLevel,
        href,
        icon,
        iconColour,
        isInternalLink,
        linkText,
        shouldOpenInNewTab = false,
        src,
    }) => {
        const cardHasImage = !!src;
        const cardHasContent = (!!icon && !!iconColour) || !!heading || !!content;

        return `<article class="c-card">
                    ${cardHasContent ? `${buildCardContent({
            icon, iconColour, heading, headingLevel, content,
        })}` : ''}
                    ${src ? `<img class="c-card-image" src="${src}" role="presentation" alt="">` : ''}
                    ${buildCardLabel(linkText, cardHasImage, href, shouldOpenInNewTab, isInternalLink)}
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

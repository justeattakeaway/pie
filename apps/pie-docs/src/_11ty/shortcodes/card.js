const pieIconsSvg = require('../filters/pieIconsSvg');

const buildLinkIcon = (isInternalLink) =>
    isInternalLink
        ? pieIconsSvg({
              name: 'arrow-right',
              attrs: {
                  'aria-hidden': 'true',
                  height: 16,
                  width: 16,
              },
          })
        : pieIconsSvg({
              name: 'link-external',
              attrs: {
                  'aria-hidden': 'true',
                  height: 21,
                  width: 21,
              },
          });

const buildCardLabel = (linkText, href, shouldOpenInNewTab, isInternalLink) => {
    const labelClasses = [
        'c-card-labelContainer',
        isInternalLink && 'c-card-labelContainer--internalLink',
    ]
        .filter(Boolean)
        .join(' ');

    const labelTag = href ? 'a' : 'p';

    const labelAttributes = [
        href && `href="${href}"`,
        href && shouldOpenInNewTab && 'target="_blank"',
    ]
        .filter(Boolean)
        .join(' ');

    return `<div class="${labelClasses}">
                <${labelTag} class="c-card-label" ${labelAttributes}><span>${linkText}</span></${labelTag}>
                ${href ? buildLinkIcon(isInternalLink) : ''}
            </div>`;
};

const buildCardIcon = (icon, iconColour) =>
    pieIconsSvg({
        name: icon,
        attrs: {
            class: `c-card-icon c-card-icon--${iconColour}`,
            'aria-hidden': 'true',
            height: 48,
            width: 48,
        },
    });

const buildCardContent = ({
    icon,
    iconColour,
    heading,
    headingLevel = '2',
    content,
}) => `<div class="c-card-container">
            ${icon && iconColour ? `${buildCardIcon(icon, iconColour)}` : ''}
            ${
                heading
                    ? `<h${headingLevel} class="c-card-heading">${heading}</h${headingLevel}>`
                    : ''
            }
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
 * @param {boolean} shouldFillContainer - If true card wrapper will fill the container width and cards will expand to fill container when wrapped
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

        const cardClasses = ['c-card', cardHasImage && 'c-card--hasImage']
            .filter(Boolean)
            .join(' ');

        return `<article class="${cardClasses}">
                    ${
                        cardHasContent
                            ? `${buildCardContent({
                                  icon,
                                  iconColour,
                                  heading,
                                  headingLevel,
                                  content,
                              })}`
                            : ''
                    }
                    ${
                        src
                            ? `<img class="c-card-image" src="${src}" role="presentation" alt="">`
                            : ''
                    }
                    ${buildCardLabel(linkText, href, shouldOpenInNewTab, isInternalLink)}
                </article>`;
    };

    if (items.length > 1) {
        const listClasses = ['c-card-list', shouldFillContainer && 'c-card-list--fillContainer']
            .filter(Boolean)
            .join(' ');

        return `<div class="c-card-wrapper">
                    <ul class="${listClasses}">
                        ${Object.values(items)
                            .map((card) => `<li>${buildCard(card)}</li>`)
                            .join('')}
                    </ul>
                </div>`;
    }

    return `${buildCard(items[0])}`;
};

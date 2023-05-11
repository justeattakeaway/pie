const iconData = require('../../iconData.json');
const pieIcons = require('../filters/pieIconsSvg')();

/**
 *
 * @param {*} icon - An object representing the icon to be displayed in the card.
 * @param {String} icon.name - The name of the icon, this should map directly to icon name from pie-icons.
 * @param {String} icon.displayName - The text to be displayed on the icon card, usually the icon name.
 * @param {Boolean} [icon.oneSize=false] - Defaults to `false` and hence the card will attempt to also render `${icon.name}-large`.
 * @returns
 */
const buildIconCard = (icon) => {
    const pieIcon = pieIcons.find((x) => x.name === icon.name).icon;

    let largeIcon;
    if (!icon.oneSize) {
        largeIcon = pieIcons.find((x) => x.name === `${icon.name}-large`).icon;
    }

    // If there is only one size of icon then make the regular one larger
    const regularSizeClass = icon.oneSize
        ? 'c-categorisedIconList-icon-large'
        : 'c-categorisedIconList-icon';

    return `<div class="c-categorisedIconList-iconCard">
        <div class="c-categorisedIconList-iconCard-iconContainer">
            ${largeIcon ? `<div class="c-categorisedIconList-icon-large" aria-hidden="true">
                ${largeIcon}
            </div>` : ''}
            ${pieIcon ? `<div class="${regularSizeClass}" aria-hidden="true">
                ${pieIcon}
            </div>` : ''}
        </div>
        <span class="c-categorisedIconList-iconCard-separator"></span>
        <p>${icon.displayName}</p>
    </div>`;
};

/**
 * An HTML component that takes in a list of icon categories
 * and renders a list of icons (with subheadings) for each category.
 *
 * Icons are assumed to have regular and `-large` variants
 * unless specified with `"oneSize": true`.
 * @returns {string}
 */
const categorisedIconList = () => `<div>
    ${iconData.categories.map((cat) => `
        <h3 class="c-categorisedIconList-heading">
            ${cat.displayName}
        </h3>

        <div class="c-categorisedIconList-iconList">
            ${cat.icons.map((i) => buildIconCard(i)).join('')}
        </div>`).join('')}
    </div>`;

module.exports = categorisedIconList;

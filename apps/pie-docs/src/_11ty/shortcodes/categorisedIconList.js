const iconData = require('@justeattakeaway/pie-icons/dist/iconData.json');
const pieIcons = require('../filters/pieIconsSvg')();
const headingAnchor = require('../filters/headingAnchor');
/**
 *
 * @param {*} icon - An object representing the icon to be displayed in the card.
 * @param {String} icon.name - The name of the icon, this should map directly to icon name from pie-icons.
 * @param {String} icon.displayName - The text to be displayed on the icon card, usually the icon name.
 * @param {Boolean} [icon.oneSize=false] - Defaults to `false` and hence the card will attempt to also render `${icon.name}-large`.
 * @returns
 */
const buildIconCard = (icon) => {
    const pieIcon = pieIcons.find((x) => x.name === icon.name)?.icon;

    if (!pieIcon) {
        throw new Error(`Could not find icon with name "${icon.name}".`);
    }

    let largeIcon;

    if (!icon.oneSize) {
        largeIcon = pieIcons.find((x) => x.name === `${icon.name}-large`)?.icon;

        if (!largeIcon) {
            throw new Error(`Could not find icon with name "${icon.name}-large".`);
        }
    }

    // If there is only one size of icon then make the regular one larger
    const regularSizeClass = icon.oneSize
        ? 'c-categorisedIconList-icon-large'
        : 'c-categorisedIconList-icon';

    return `<li class="c-categorisedIconList-iconCard">
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
    </li>`;
};

/**
 * An HTML component that takes in a list of icon categories
 * and renders a list of icons (with subheadings) for each category.
 *
 * Icons are assumed to have regular and `-large` variants
 * unless specified with `"oneSize": true`.
 * @returns {string}
 */
const categorisedIconList = () => headingAnchor(`<div>
        <ul class="c-categorisedIconList">
            ${iconData.categories.filter(({ name }) => name !== 'payment').map((cat) => `
                <li>
                    <h3 class="c-categorisedIconList-heading" id="category-${cat.name}">
                        ${cat.displayName}
                    </h3>

                    <ul class="c-categorisedIconList-iconList" aria-labelledby="category-${cat.name}">
                        ${cat.icons.map((i) => buildIconCard(i)).join('')}
                    </ul>`).join('')}
                </li>
            </ul>
        </div>`);

module.exports = categorisedIconList;

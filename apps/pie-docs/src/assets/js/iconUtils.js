// Shared icon utilities for both server-side (11ty) and client-side usage

const iconUtils = {
    /**
     * Builds an icon card HTML
     * @param {Object} icon - An object representing the icon to be displayed in the card
     * @param {String} icon.name - The name of the icon, this should map directly to icon name from pie-icons
     * @param {String} icon.displayName - The text to be displayed on the icon card, usually the icon name
     * @param {Boolean} [icon.oneSize=false] - Defaults to `false` and hence the card will attempt to also render `${icon.name}-large`
     * @param {Array} pieIcons - Array of available pie icons
     * @returns {String} HTML string for the icon card
     */
    buildIconCard: (icon, pieIcons) => {
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
    },

    /**
     * Generates HTML for a categorized icon list
     * @param {Array} categories - Array of icon categories
     * @param {Array} pieIcons - Array of available pie icons
     * @param {String|null} filterCategory - Optional category to filter by
     * @returns {String} HTML string for the categorized icon list
     */
    generateCategorisedIconList: (categories, pieIcons, filterCategory = null) => {
        const filteredCategories = categories
            .filter(({ name }) => name !== 'payment')
            .filter(({ name }) => !filterCategory || name === filterCategory);

        return filteredCategories.map((cat) => `
            <li>
                <h3 class="c-categorisedIconList-heading" id="category-${cat.name}">
                    ${cat.displayName}
                </h3>

                <ul class="c-categorisedIconList-iconList" aria-labelledby="category-${cat.name}">
                    ${cat.icons.map((i) => iconUtils.buildIconCard(i, pieIcons)).join('')}
                </ul>
            </li>`).join('');
    },
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = iconUtils;
} else if (typeof window !== 'undefined') {
    window.iconUtils = iconUtils;
}

const categorisedIconListHelpers = {
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
     * @param {String|null} filterCategory - Optional search term to filter by
     * @returns {String} HTML string for the categorized icon list
     */
    generateCategorisedIconList: (categories, pieIcons, filterCategory = null, searchTerm = '') => {
        let filteredCategories = categories
            .filter(({ name }) => ((!filterCategory && name !== 'payment') || name === filterCategory));
        if (searchTerm && searchTerm !== '') {
            filteredCategories = filteredCategories.map((cat) => {
                const filteredIcons = cat.icons.filter((icon) => icon.displayName.toLowerCase().includes(searchTerm.toLowerCase()));
                return { ...cat, icons: filteredIcons };
            }).filter((cat) => cat.icons.length > 0);
        }
        return filteredCategories.map((cat) => `
                <li>
                    <h3 class="c-categorisedIconList-heading" id="category-${cat.name}">
                        ${cat.displayName}
                    </h3>

                    <ul class="c-categorisedIconList-iconList" aria-labelledby="category-${cat.name}">
                        ${cat.icons.map((i) => categorisedIconListHelpers.buildIconCard(i, pieIcons)).join('')}
                    </ul>
                </li>`).join('');
    },
};

// Export the helpers differently based on the environment:
// - If running in a Node.js environment (during 11ty build time), export via `module.exports`
// - If running in the browser (client-side), attach to the global `window` object
// This allows the same code to be reused both during server-side generation and in the client

if (typeof module !== 'undefined' && module.exports) {
    module.exports = categorisedIconListHelpers;
} else if (typeof window !== 'undefined') {
    window.categorisedIconListHelpers = categorisedIconListHelpers;
}

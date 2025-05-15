/**
 * An HTML component that takes in a list of icon categories
 * and renders a list of icons (with subheadings) for each category.
 *
 * Icons are assumed to have regular and `-large` variants
 * unless specified with `"oneSize": true`.
 * @returns {string}
 */

window.buildIconCard = (icon) => {
    const pieIcon = window.pieIcons.find((x) => x.name === icon.name)?.icon;

    if (!pieIcon) {
        throw new Error(`Could not find icon with name "${icon.name}".`);
    }

    let largeIcon;

    if (!icon.oneSize) {
        largeIcon = window.pieIcons.find((x) => x.name === `${icon.name}-large`)?.icon;

        if (!largeIcon) {
            throw new Error(`Could not find icon with name "${icon.name}-large".`);
        }
    }

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
 * Generates an HTML list of categorized icons based on a selected filter.
 *
 * Icons are grouped by their category and rendered as list items with
 * subheadings. If no filter is provided, all categories are included
 * except for the "payment" category.
 * @param {string} filterCategory - The name of the category to filter by (optional).
 * @returns {string}
 */

window.generateIconsList = (filterCategory) => {
    const filteredCategories = window.iconData.categories.filter((category) => {
        if (!filterCategory) {
            return category.name !== 'payment';
        }
        return category.name !== 'payment' && category.name === filterCategory;
    });

    return filteredCategories.map((cat) => `
        <li>
            <h3 class="c-categorisedIconList-heading" id="category-${cat.name}">
                ${cat.displayName}
            </h3>

            <ul class="c-categorisedIconList-iconList" aria-labelledby="category-${cat.name}">
                ${cat.icons.map((i) => window.buildIconCard(i)).join('')}
            </ul>`).join('');
};

// Sets up the icon list and category filter interaction once the DOM is fully loaded.

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('categoryFilter');
    const iconListContainer = document.getElementById('categorisedIconListContainer');
    iconListContainer.innerHTML = window.generateIconsList(); // generates the unflitered list of icons
    if (selectElement) {
        selectElement.addEventListener('change', (event) => {
            const selectedCategory = event.detail.sourceEvent.target.value;
            iconListContainer.innerHTML = window.generateIconsList(selectedCategory);
        });
    }
});

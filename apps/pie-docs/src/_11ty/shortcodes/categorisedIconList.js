const iconData = require('@justeattakeaway/pie-icons/dist/iconData.json');
const pieIcons = require('../filters/pieIconsSvg')();
const headingAnchor = require('../filters/headingAnchor');
const { generateCategorisedIconList } = require('../../assets/js/categorised-icon-list-helpers');

const categoryDropdown = () => {
    const categoryNames = iconData.categories.filter(({ name }) => name !== 'payment');
    const formattedOptions = [
        { tag: 'option', text: 'All icons', value: '' },
        ...categoryNames.map((category) => ({
            tag: 'option',
            text: category.displayName,
            value: category.name,
        })),
    ];
    const jsonOptions = JSON.stringify(formattedOptions).replace(/"/g, '&quot;');

    return `<pie-select id="categoryFilter" options="${jsonOptions}" class="c-categorisedIconList-select"></pie-select>`;
};

/**
 * An HTML component that takes in a list of icon categories
 * and renders a list of icons (with subheadings) for each category.
 *
 * Icons are assumed to have regular and `-large` variants
 * unless specified with `"oneSize": true`.
 * @returns {string}
 */
const categorisedIconList = () => headingAnchor(`
        <div class="c-categorisedIconList-filters-and-icons-container"> 
            <div class="c-categorisedIconList-filters-container">
            <pie-text-input name="searchBar" id="searchBar" class="c-categorisedIconList-search" placeholder="Search icons"></pie-text-input>
            ${categoryDropdown()}
            <pie-notification variant='info' class='c-categorisedIconList-notification'> Different platforms have different naming conventions when using the icons in code, for more details please visit the “Code” page.  </pie-notification>
            </div>
            <ul class="c-categorisedIconList" id="categorisedIconListContainer">
                ${generateCategorisedIconList(iconData.categories, pieIcons)}
            </ul>
            <script>
                window.iconData = ${JSON.stringify(iconData)};
                window.pieIcons = ${JSON.stringify(pieIcons)};
            </script>
            <script src="/assets/js/categorised-icon-list-helpers.js"></script>
            <script src="/assets/js/categorised-icon-list-filter.js"></script>
        </div>
    `);

module.exports = categorisedIconList;

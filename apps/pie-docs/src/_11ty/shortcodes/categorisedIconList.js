const iconData = require('@justeattakeaway/pie-icons/dist/iconData.json');
const pieIcons = require('../filters/pieIconsSvg')();
const headingAnchor = require('../filters/headingAnchor');

const categoryNames = iconData.categories.filter(({ name }) => name !== 'payment');

const categoryDropdown = () => {
    const formattedOptions = [
        { tag: 'option', text: 'All categories', value: '' },
        ...categoryNames.map((category) => ({
            tag: 'option',
            text: category.displayName,
            value: category.name,
        })),
    ];
    const jsonOptions = JSON.stringify(formattedOptions).replace(/"/g, '&quot;');

    return `<pie-select id="categoryFilter" options="${jsonOptions}"></pie-select>`;
};

const categorisedIconList = () => headingAnchor(`<div>
    ${categoryDropdown()}
    <ul class="c-categorisedIconList" id="categorisedIconListContainer"></ul>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired');
    window.iconData = ${JSON.stringify(iconData)};
    window.pieIcons = ${JSON.stringify(pieIcons)};
    const container = document.getElementById('categorisedIconListContainer');
    container.innerHTML = window.generateIconsList();
  });
</script>
<script src="/assets/js/categorisedIconList.js"></script>
</div>`);

module.exports = categorisedIconList;

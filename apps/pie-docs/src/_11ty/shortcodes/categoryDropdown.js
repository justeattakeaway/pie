const iconData = require('@justeattakeaway/pie-icons/dist/iconData.json');

const categoryNames = iconData.categories.filter(({ displayName }) => displayName !== 'payment');

const categoryDropdown = () => {
    const formattedOptions = [
        { tag: 'option', text: 'All categories', value: 'all' },
        ...categoryNames.map((category) => ({
            tag: 'option',
            text: category.displayName,
            value: category.name,
        }))
    ];

    return `<pie-select
        name="category-select"
      options="${JSON.stringify(formattedOptions)}"
 ></pie - select > `;
};
module.exports = categoryDropdown;

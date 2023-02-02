const markdownFilter = require('../filters/markdown');
const listTypes = require('../../_data/listTypes');
const pieIconsSvg = require('../filters/pieIconsSvg');
const pieDesignTokenColours = require('../filters/pieDesignTokenColours');

/**
 * A List HTML component – takes an array of list items and turns them into a marked-up list
 * @param {string} type - Type of list: ordered, pill, icon
 * @param {string[] | {iconName: 'string', iconFill?: "string", content: 'string'}[]} items - An array of list items
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function ({ type, items }) {
    if (!type || !listTypes[type]) {
        throw new Error(`List 'type = ${type}' not recognised. Try ${Object.values(listTypes).join(', ')}`);
    }

    const isIconType = type === listTypes.icon;
    const listItems = items.map(item => {
        if (isIconType) {
            if (!item.content || !item.iconName) throw new Error(`List item for 'type = ${listTypes.icon}' must have at least content and iconName`);
            const icon = pieIconsSvg({
                name: item.iconName,
                attrs: {
                    height: 20,
                    width: 20,
                    fill: item.iconFill && pieDesignTokenColours({ tokenName: item.iconFill, tokenPath: ['alias', 'default'] })
                }
            });
            return `<li class="c-list-item">${icon} ${markdownFilter(item.content, true)}</li>`;
        }
        return `<li class="c-list-item">${markdownFilter(item, true)}</li>`;
    }).join('');
    const listTag = type === listTypes.ordered ? 'ol' : 'ul';
    const listClasses = [
        'c-list',
        `c-list--${type}`
    ];

    return `<${listTag} class="${listClasses.join(' ')}">
        ${listItems}
    </${listTag}>`;
};

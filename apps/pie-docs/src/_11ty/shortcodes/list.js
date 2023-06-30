const markdownFilter = require('../filters/markdown');
const listTypes = require('../../_data/listTypes');
const pieIconsSvg = require('../filters/pieIconsSvg');
const pieDesignTokenColours = require('../filters/pieDesignTokenColours');

const getIconSvg = (iconName, iconFill) => {
    if (!iconName) throw new Error(`List item for 'type = ${listTypes.icon}' must have iconName`);
    return pieIconsSvg({
        name: iconName,
        attrs: {
            height: 20,
            width: 20,
            fill: iconFill,
            class: iconFill && 'u-iconFilled',
            'aria-hidden': 'true',
        },
    });
};

/**
 * A List HTML component – takes an array of list items and turns them into a marked-up list
 * @param {string} type - Type of list: ordered, pill, icon
 * @param {string} iconName - icon name such as "close-circle-filled" if type is icon
 * @param {string} iconFill - fill token name such as "support-positive" if type is icon
 * @param {string[] items - An array of list items
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function ({
    type, items, iconName, iconFill,
}) {
    if (!type || !listTypes[type]) {
        throw new Error(`List 'type = ${type}' not recognised. Try ${Object.values(listTypes).join(', ')}`);
    }

    const isIconType = type === listTypes.icon;
    const iconFillHexcode = iconFill ? pieDesignTokenColours({ tokenName: iconFill, tokenPath: ['alias', 'default'] }) : null;
    const listItems = items.map((item) => `<li class="c-list-item">
        ${isIconType ? getIconSvg(iconName, iconFill) : ''}
        ${markdownFilter(item, true)}
        </li>`).join('');
    const listTag = type === listTypes.ordered ? 'ol' : 'ul';
    const listClasses = [
        'c-list',
        `c-list--${type}`
    ];

    return `<${listTag} class="${listClasses.join(' ')}"  ${isIconType ? `style="--icon-fill: ${iconFillHexcode}";` : ''}>
        ${listItems}
    </${listTag}>`;
};

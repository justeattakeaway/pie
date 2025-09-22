const markdownFilter = require('../filters/markdown');
const listTypes = require('../../_data/listTypes');
const pieIconsSvg = require('../filters/pieIconsSvg');
const pieDesignTokenColours = require('../filters/pieDesignTokenColours');

const getTokenByName = (tokenName) => pieDesignTokenColours({ tokenName, tokenPath: ['alias', 'default'] });

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

const getHighlightIndicator = (highlightColour, index) => {
    const highlightColourHexcode = highlightColour?.[index]
        ? getTokenByName(highlightColour[index])
        : getTokenByName('support-brand-03');

    return `<span class="c-list--highlight-indicator" style="background-color: ${highlightColourHexcode};"></span>`;
};

/**
 * A List HTML component – takes an array of list items and turns them into a marked-up list
 * @param {string} type - Type of list: ordered, pill, icon
 * @param {string} iconName - icon name such as "close-circle-filled" if type is icon
 * @param {string} iconFill - fill token name such as "support-positive" if type is icon
 * @param {boolean} isCompact - boolean to indicate if the list is compact
 * @param {string[]} items - An array of list items
 * @returns {string}
 */
const list = ({
    type, items, iconName, iconFill, highlightColour, isCompact,
}) => {
    if (!type || !listTypes[type]) {
        throw new Error(`List 'type = ${type}' not recognised. Try ${Object.values(listTypes).join(', ')}`);
    }

    const isIconType = type === listTypes.icon;
    const iconFillHexcode = iconFill ? getTokenByName(iconFill) : null;
    const isHighlightType = type === listTypes.highlight;

    const listItems = items.map((item, index) => `<li class="c-list-item">
        ${isIconType ? getIconSvg(iconName, iconFill) : ''}
        ${isHighlightType ? getHighlightIndicator(highlightColour, index) : ''}
        ${markdownFilter(item, true)}
        </li>`).join('');

    const listTag = type === listTypes.ordered ? 'ol' : 'ul';
    const listClasses = [
        'c-list',
        `c-list--${type}`,
        isCompact ? 'c-list--compact' : '',
    ];

    return `<${listTag} class="${listClasses.join(' ')}"  ${isIconType ? `style="--icon-fill: ${iconFillHexcode}";` : ''}>
        ${listItems}
    </${listTag}>`;
};

module.exports = list;

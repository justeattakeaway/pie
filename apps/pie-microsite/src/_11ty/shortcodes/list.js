const markdownFilter = require('../filters/markdown');
const listTypes = require('../../_data/listTypes');

/**
 * A List HTML component
 * @param {string} type - Type of list: ordered, pill
 * @param {string[]} items - An array of list items
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function ({ type, items }) {
    if (!type || !listTypes[type]) {
        throw new Error(`List 'type = ${type}' not recognised. Try 'ordered' or 'pill'`);
    }

    const listItems = items.map(item => `<li class="c-list-item"><span>${markdownFilter(item, true)}</span></li>`).join('');
    const listTag = type === listTypes.ordered ? 'ol' : 'ul';
    const listClasses = [
        'c-list',
        `c-list--${type}`
    ];

    return `<${listTag} class="${listClasses.join(' ')}">
        ${listItems}
    </${listTag}>`;
};

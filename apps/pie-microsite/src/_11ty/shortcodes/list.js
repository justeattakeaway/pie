const markdownFilter = require('../filters/markdown');

/**
 * A List HTML component
 * @param {string} type - Type of list: orderd, pill
 * @param {string} items - An array of list items
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function ({ type, items }) {
    const listItems = items.map(item => `<li class="c-list-item"}><span>${markdownFilter(item, true)}</span></li>`).join('');
    const listClasses = [
        'c-list',
        `c-list--${type}`
    ];

    return `<ul class="${listClasses.join(' ')}">
        ${listItems}
    </ul>`;
};

const md = require('../../_utilities/markdown');

/**
 * Build a row of a table based on cell data.
 *
 * @param {object[]} cells - An array of cell objects.
 * @returns {string} - The HTML representation of a table row.
 */
const buildRow = (cells) => cells.map((cell) => {
    if (cell === null) {
        return '<td></td>';
    }

    let content = cell;

    if (cell.type === 'token') {
        content = `<span class="c-componentDetailsTable-token">${cell.item}</span>`;
    } else if (cell.type === 'image') {
        const { src, alt } = cell.item;
        content = `<img src=${src} alt=${alt}>`;
    } else if (cell.type === 'code') {
        content = cell.item.map((element) => `<code>${element}</code><br>`).join('');
    } else if (typeof cell === 'string') {
        content = md.renderInline(cell);
    }
    return `<td>${content}</td>`;
}).join('');

/**
 * Generate an HTML table component.
 * @example
 *
 * const tableData = `{
 *   "headings": [
 *     "Element",
 *     "token",
 *     "image"
 *   ],
 *   "rows": [
 *     [
 *       "Element name",
 *       {
 *         "type": "token",
 *         "item": "$token"
 *       },
 *       {
 *         "type": "image",
 *         "item": {
 *            src: '',
 *            alt: ''
 *         }
 *       },
 *       {
 *         "type": "code",
 *         "item": [
*             "primary",
*             "secondary"
 *          ]
 *       },
 *     ],
 * }`;
 * @param {string} tableData - JSON string containing table data.
 * @returns {string} - The HTML representation of the table component.
 */
module.exports = ({
    tableData,
}) => {
    const { headings, rows } = JSON.parse(tableData);
    const hasWidePadding = headings?.length <= 3;

    return `<div class="c-componentDetailsTable-backdrop">
    <table class="c-componentDetailsTable ${hasWidePadding ? 'c-componentDetailsTable-hasWidePadding' : ''}">
    ${headings
        ? `<tr>${headings.map((heading, index) => `<th>${heading}</th>`).join('')}</tr>`
        : ''
    }
    ${rows.map((row) => {
        const shouldHideTopBorder = row[0] === '';

        return `<tr class="${shouldHideTopBorder ? 'c-componentDetailsTable-row--hideTopBorder' : ''}">${buildRow(row)}</tr>`;
    }).join('')}
    </table>
</div>`;
};

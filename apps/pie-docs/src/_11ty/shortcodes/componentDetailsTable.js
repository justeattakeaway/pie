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
    let hasMinWidth = cell.item?.length > 30;

    if (cell.type === 'token') {
        content = `<div style="display: flex; flex-direction: column; gap: var(--dt-spacing-c);">${cell.item.map((element) => `<pie-tag isStrong>${element}</pie-tag><br>`).join('')}</div>`;
    } else if (cell.type === 'image') {
        const { src, alt } = cell.item;
        content = `<img src=${src} alt=${alt}>`;
    } else if (cell.type === 'code') {
        content = cell.item.map((element) => `<code>${element}</code><br>`).join('');
    } else if (typeof cell === 'string') {
        hasMinWidth = cell.length > 30;
        content = md.renderInline(cell);
    }

    return `<td ${hasMinWidth ? "class='c-componentDetailsTable-cellHasMinWidth'" : ''}>${content}</td>`;
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
 *         "item": ["$token"]
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
const componentDetailsTable = ({
    tableData,
}) => {
    const { headings, rows } = JSON.parse(tableData);
    const hasWidePadding = headings?.length <= 3;

    return `<div class="c-componentDetailsTable-backdrop">
    <table class="c-componentDetailsTable ${hasWidePadding ? 'c-componentDetailsTable-hasWidePadding' : ''}">
    ${headings
        ? `<tr>${headings.map((heading) => `<th>${heading}</th>`).join('')}</tr>`
        : ''
    }
    ${rows.map((row) => {
        const shouldHideTopBorder = row[0] === '';

        return `<tr class="${shouldHideTopBorder ? 'c-componentDetailsTable-row--hideTopBorder' : ''}">${buildRow(row)}</tr>`;
    }).join('')}
    </table>
</div>`;
};

module.exports = componentDetailsTable;

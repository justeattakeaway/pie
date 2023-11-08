/**
 * Build a row of a table based on cell data.
 *
 * @param {object[]} cells - An array of cell objects.
 * @returns {string} - The HTML representation of a table row.
 */
const buildRow = (cells) => cells.map((cell) => {
    let content = cell;
    if (cell.type === 'token') {
        content = `<span class="c-componentDetailsTable-token">${cell.item}</span>`;
    } else if (cell.type === 'image') {
        const { src, alt } = cell.item;
        content = `<img src=${src} alt=${alt}>`;
    } else if (cell.type === 'code') {
        return content = cell.item.map(element => {
            return `<code>${element}</code><br>`
        }).join('')
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
 *       }
 *     ],
 * }`;
 * @param {string} tableData - JSON string containing table data.
 * @returns {string} - The HTML representation of the table component.
 */
module.exports = ({
    tableData,
}) => {
    const { headings, rows } = JSON.parse(tableData);

    return `<div class="c-componentDetailsTable-backdrop">
    <table class="c-componentDetailsTable">
    ${headings ? `<tr>${headings.map((heading) => `
        <th>${heading}</th>`).join('')}
    </tr>` : ''}
    ${rows.map((row) => `<tr>${buildRow(row)}`).join('')}</tr>
    </table>
</div>`;
};

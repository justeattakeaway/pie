const md = require('../../_utilities/markdown');

const statusTypes = require('../../_data/statusTypes');
const pieDesignTokenColours = require('../filters/pieDesignTokenColours');

const getStatusColour = (tokenName) => {
    const tokenPath = ['alias', 'default'];

    return pieDesignTokenColours({ tokenName, tokenPath });
};

const statusColours = {
    active: getStatusColour('support-positive-02'),
    planned: getStatusColour('support-info-02'),
    next: getStatusColour('support-warning-02'),
    done: getStatusColour('support-error-02'),
    other: getStatusColour('container-strong'),
};

const statusSettings = {
    [statusTypes.AVAILABLE]: {
        bgColor: statusColours.active,
        status: 'Available',
    },
    [statusTypes.PLANNED]: {
        bgColor: statusColours.planned,
        status: 'Planned',
    },
    [statusTypes.ALPHA]: {
        bgColor: statusColours.next,
        status: 'Alpha',
    },
    [statusTypes.BETA]: {
        bgColor: statusColours.next,
        status: 'Beta',
    },
    [statusTypes.PRE_RELEASE]: {
        bgColor: statusColours.next,
        status: 'Pre-release',
    },
    [statusTypes.REMOVED]: {
        bgColor: statusColours.done,
        status: 'Removed',
    },
    [statusTypes.DEPRECATED]: {
        bgColor: statusColours.done,
        status: 'Deprecated',
    },
    [statusTypes.NOT_APPLICABLE]: {
        bgColor: statusColours.other,
        status: 'N/A',
    },
    [statusTypes.TBC]: {
        bgColor: statusColours.other,
        status: 'TBC',
    },
};

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
        content = `<span class="c-componentDetailsTable-token">${cell.item}</span>`;
    } else if (cell.type === 'image') {
        const { src, alt } = cell.item;
        content = `<img src=${src} alt=${alt}>`;
    } else if (cell.type === 'code') {
        content = cell.item.map((element) => `<code>${element}</code><br>`).join('');
    } else if (typeof cell === 'string') {
        hasMinWidth = cell.length > 30;
        content = md.renderInline(cell);
    } else if ('status' in cell) {
        console.log(cell.status)
        const { bgColor, status } = statusSettings[cell.status];
        content = `<span class="c-resourceTable-status" style="--bg-colour: ${bgColor}">${status}</span>`;
    } 
    
    // else if (cell.toUpperCase() in statusTypes) {
    //     console.log(cell.status)
    //     const { bgColor, status } = statusSettings[cell.status];
    //     content = `<span class="c-resourceTable-status" style="--bg-colour: ${bgColor}">${status}</span>`;
    // }

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
        ? `<tr>${headings.map((heading) => `<th>
        ${typeof heading == 'object' && 'image' in heading ? 
            `<div class="c-resourceTable-resource"><img src="${heading.image}"></img>${heading.title}</div>`
            : heading
        }
            </th>`).join('')}</tr>`
        : ''
    }
    ${rows.map((row) => {
        const shouldHideTopBorder = row[0] === '';

        return `<tr class="${shouldHideTopBorder ? 'c-componentDetailsTable-row--hideTopBorder' : ''}">${buildRow(row)}</tr>`;
    }).join('')}
    </table>
</div>`;
};

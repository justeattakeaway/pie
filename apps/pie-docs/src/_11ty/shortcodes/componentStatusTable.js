const statusSettings = require('../../_data/statusSettings');
const { rows, appHeadings, webHeadings } = require('../../componentStatusData');
/**
 * Build a row of a table based on cell data.
 *
 * @param {object[]} cells - An array of cell objects.
 * @param {object[]} headings - An array of heading objects.
 * @returns {string} - The HTML representation of a table row.
 */
const buildRow = (cells, headings) => cells.map((cell) => {
    let content;

    headings.map((heading) => {
        if ('componentName' in cell) {
            content = `<a class="c-componentStatus-link" href="/components/${cell.componentName.toLowerCase().replace(' ', '-')}">${cell.componentName}</a>`;
        } else

        if (heading.title === cell.resource) {
            const { bgColor, status } = statusSettings[cell.status];
            content = `<span class="c-componentStatus-status" style="--bg-colour: ${bgColor}; margin-inline-start: 30px;">${status}</span>`;
        }

        return content;
    });

    return content !== undefined ? `<td>${content}</td>` : '';
}).join('');

/**
 * Generate an HTML table component.
 * @param {string} dataType - string containing 'web' or 'app' depending on status table
 * @returns {string} - The HTML representation of the table component.
 */
module.exports = ({
    dataType,
}) => {
    const headings = dataType === 'app' ? appHeadings : webHeadings;

    return `<div class="c-componentStatus">
    <table class="c-componentStatus-table" data-js="${dataType}-table" data-test-id="${dataType}-table">
    ${`<tr>${headings.map((heading) => `<th> ${'icon' in heading ? `
            <div class="c-componentStatus-resource"><img src="${heading.icon}"></img>${heading.title}</div>` : heading.title}
            </th>`).join('')}</tr>`
    }

    ${rows.map((row) => `<tr>${buildRow(row, headings)}</tr>`).join('')
    }
    </table>
</div>`;
};

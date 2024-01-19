const statusSettings = require('../../_data/statusSettings');

const buildDescription = (row) => {
    const { bgColor, status } = statusSettings[row.term];

    const statusComponent = `<span class="c-resourceTable-status" style="--bg-colour: ${bgColor}">${status}</span>`;

    return `
        <tr>
            <td>
                ${statusComponent}
            </td>
            <td>
                ${row.description}
            </td>
        </tr>`;
};

/**
 * A HTML table component
 * @param {object[]} rows - An array of row objects. Row contains a `term` (e.g. the status 'available') followed by a description of the term.
 */
module.exports = ({
    rows,
}) => `<div class="c-termsAndDescriptions-backdrop"><table class="c-termsAndDescriptions">
${rows.map((row) => `${buildDescription(row)}`).join('')}
</table></div>`;

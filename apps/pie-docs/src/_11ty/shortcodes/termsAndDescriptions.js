const statusSettings = require('../../_data/statusSettings');

const buildDescription = (row) => {
    const { variant, status } = statusSettings[row.term];

    const statusComponent = `<pie-tag variant="${variant}">${status}</pie-tag>`;

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
const termsAndDescriptions = ({
    rows,
}) => `<div class="c-termsAndDescriptions-backdrop"><table class="c-termsAndDescriptions">
${rows.map((row) => `${buildDescription(row)}`).join('')}
</table></div>`;

module.exports = termsAndDescriptions;

const statusSettings = require('../../_data/statusSettings');

const buildDescription = (row) => {
    const { bgColor, status } = statusSettings[row.status];

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
 * @param {object[]} rows - An array of row objects. Row contains a `resource` (e.g. documnentation/vue/ios) a status (e.g. planned/beta/n/a) an optional link and an optional note
 */
module.exports = ({
    rows,
}) => `<div class="c-termsAndDescriptions-backdrop"><table class="c-termsAndDescriptions">
${rows.map((row) => `${buildDescription(row)}`).join('')}
</table></div>`;

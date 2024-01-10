const resourceSettings = require('../../_data/resourceSettings');
const statusSettings = require('../../_data/statusSettings');
const { rows } = require('../../componentStatusData');

const buildRow = (row) => {
        if ('componentName' in row) {
            return ''
        }

        const { icon, resource } = resourceSettings[row.resource];
        const { bgColor, status } = statusSettings[row.status];
    
        const resourceText = row.link ? `<a href="${row.link}">${resource}</a>` : `<span>${resource}</span>`;
        const resourceComponent = `<div class="c-resourceTable-resource"><img src="${icon}"></img>${resourceText}</div>`;
        const statusComponent = `<span class="c-resourceTable-status" style="--bg-colour: ${bgColor}">${row.note ? `${status}: ${row.note}` : status}</span>`;
    
        return `<tr>
                    <td>
                        ${resourceComponent}
                    </td>
                    <td>
                        ${statusComponent}
                    </td>
                </tr>`
};

/**
 * A HTML table component
 * @param {string} heading - The heading for the resource table (Web/Apps) - can be left empty
 * @param {object[]} rows - An array of row objects. Row contains a `resource` (e.g. documnentation/vue/ios) a status (e.g. planned/beta/n/a) an optional link and an optional note
 */
module.exports = ({
    componentName,
}) => `<table class="c-resourceTable">
        ${rows.map((row) => `${row[0].componentName.includes(componentName) ?  row.map((r) => buildRow(r)).join('') : ''}`).join('')}
    </table>`;

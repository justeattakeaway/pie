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
}) => `<table class="c-resourceTable">
${rows.map((row) => `${buildDescription(row)}`).join('')}
</table>`;

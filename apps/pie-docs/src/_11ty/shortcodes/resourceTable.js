const resourceTypes = require('../../_data/resourceTypes');
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
    [statusTypes.REMOVED]: {
        bgColor: statusColours.done,
        status: 'Removed',
    },
    [statusTypes.DEPRECATED]: {
        bgColor: statusColours.done,
        status: 'Deprecated',
    },
    [statusTypes.NOT_APPLICABLE]: {
        bgColor: statusColours.done,
        status: 'N/A',
    },
    [statusTypes.TBC]: {
        bgColor: statusColours.done,
        status: 'TBC',
    },
};

const resourceSettings = {
    [resourceTypes.COMPONENT]: {
        icon: '/assets/img/components/icons/figma.svg',
        resource: 'Figma Component',
    },
    [resourceTypes.DOCUMENTATION]: {
        icon: '/assets/img/components/icons/figma.svg',
        resource: 'Figma Documentation',
    },
    [resourceTypes.WEB_COMPONENTS]: {
        icon: '/assets/img/components/icons/web-component.svg',
        resource: 'Web Components',
    },
    [resourceTypes.VUE]: {
        icon: '/assets/img/components/icons/vue.svg',
        resource: 'Vue [Fozzie]',
    },
    [resourceTypes.REACT]: {
        icon: '/assets/img/components/icons/react.svg',
        resource: 'React [Snacks]',
    },
    [resourceTypes.IOS]: {
        icon: '/assets/img/components/icons/apple.svg',
        resource: 'iOS',
    },
    [resourceTypes.ANDROID]: {
        icon: '/assets/img/components/icons/android.svg',
        resource: 'Android',
    },
};

const buildRow = (row) => {
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
            </tr>`;
};

/**
 * A HTML table component
 * @param {string} heading - The heading for the resource table (Web/Apps) - can be left empty
 * @param {object[]} rows - An array of row objects. Row contains a `resource` (e.g. documnentation/vue/ios) a status (e.g. planned/beta/n/a) an optional link and an optional note
 */
module.exports = ({
    heading,
    rows,
}) => `<table class="c-resourceTable">
            ${heading ? `<tr>
                <th colspan="2">${heading}</th>
            </tr>` : ''}
            ${rows.map((row) => `${buildRow(row)}`).join('')}
        </table>`;

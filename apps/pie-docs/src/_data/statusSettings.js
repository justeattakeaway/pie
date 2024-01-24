const statusTypes = require('./statusTypes');
const pieDesignTokenColours = require('../_11ty/filters/pieDesignTokenColours');

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

module.exports = {
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

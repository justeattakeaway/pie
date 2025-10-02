const statusTypes = require('./statusTypes');

const statusVariants = {
    active: 'success',
    planned: 'information',
    next: 'brand-05',
    done: 'error',
    other: 'neutral',
};

module.exports = {
    [statusTypes.STABLE]: {
        variant: statusVariants.active,
        status: 'Stable',
    },
    [statusTypes.PLANNED]: {
        variant: statusVariants.planned,
        status: 'Planned',
    },
    [statusTypes.ALPHA]: {
        variant: statusVariants.next,
        status: 'Alpha',
    },
    [statusTypes.BETA]: {
        variant: statusVariants.next,
        status: 'Beta',
    },
    [statusTypes.PRE_RELEASE]: {
        variant: statusVariants.next,
        status: 'Pre-release',
    },
    [statusTypes.REMOVED]: {
        variant: statusVariants.done,
        status: 'Removed',
    },
    [statusTypes.DEPRECATED]: {
        variant: statusVariants.done,
        status: 'Deprecated',
    },
    [statusTypes.NOT_APPLICABLE]: {
        variant: statusVariants.other,
        status: 'N/A',
    },
    [statusTypes.TBC]: {
        variant: statusVariants.other,
        status: 'TBC',
    },
};

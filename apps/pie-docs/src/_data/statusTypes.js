/**
 * Defines all types of component status i.e. avaiable, planned.
 * Prevents duplicate uses of magic strings across the project
 * @returns {Object} - an option of string values
 */
module.exports = {
    AVAILABLE: 'available',
    PLANNED: 'planned',
    ALPHA: 'alpha',
    BETA: 'beta',
    REMOVED: 'removed',
    DEPRECATED: 'deprecated',
    NOT_APPLICABLE: 'notApplicable',
};

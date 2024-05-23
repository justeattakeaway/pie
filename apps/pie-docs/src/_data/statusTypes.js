/**
 * Defines all types of component status i.e. stable, planned.
 * Prevents duplicate uses of magic strings across the project
 * @returns {Object} - an option of string values
 */
module.exports = {
    STABLE: 'stable',
    PLANNED: 'planned',
    ALPHA: 'alpha',
    BETA: 'beta',
    PRE_RELEASE: 'preRelease',
    REMOVED: 'removed',
    DEPRECATED: 'deprecated',
    NOT_APPLICABLE: 'notApplicable',
    TBC: 'tbc',
};

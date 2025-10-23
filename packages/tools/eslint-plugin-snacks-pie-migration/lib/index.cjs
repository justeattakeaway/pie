/**
 * @fileoverview his plugin helps developers to identify deprecated Snacks components and provides suggestions of replacement PIE components
 * @author Just Eat Takeaway.com - Design System Team
 */

const packageData = require('../package.json');
const snacksPieMigration = require('./rules/snacks-pie-migration.cjs');
const deprecatedComponents = require('./rules/deprecated-components.cjs');
const wasLineModified = require('./util/was-line-modified.cjs');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        name: packageData.name,
        version: packageData.version,
        namespace: packageData.name,
    },
    rules: {
        'snacks-pie-migration': snacksPieMigration,
        'deprecated-components': deprecatedComponents,
    },
    configs: {
        recommended: {
            plugins: ['@justeattakeaway/snacks-pie-migration'],
            rules: {
                '@justeattakeaway/snacks-pie-migration/snacks-pie-migration': 'error',
                '@justeattakeaway/snacks-pie-migration/deprecated-components': 'error',
            },
            processor: '@justeattakeaway/snacks-pie-migration/changed-lines',
        },
        // Alternative: less aggressive enforcement
        warn: {
            plugins: ['@justeattakeaway/snacks-pie-migration'],
            rules: {
                '@justeattakeaway/snacks-pie-migration/snacks-pie-migration': 'warn',
                '@justeattakeaway/snacks-pie-migration/deprecated-components': 'warn',
            },
            processor: '@justeattakeaway/snacks-pie-migration/changed-lines',
        },
    },
    processors: {
        'changed-lines': {
            // Filter out errors for lines that weren't modified
            postprocess (messages, filename) {
                // Ensure to flat the array as it's the expected output of a processor
                return messages.flat()
                    .filter(({ ruleId, line, endLine }) => {
                        // Check if the message has the id from the plugin
                        if (ruleId === '@justeattakeaway/snacks-pie-migration/deprecated-components') {
                            // Ignore message if the line wasn't modified
                            return wasLineModified(filename, line, endLine);
                        }
                        return true;
                    });
            },
        },
    },
};

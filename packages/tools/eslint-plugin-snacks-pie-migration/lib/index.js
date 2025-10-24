/**
 * @fileoverview his plugin helps developers to identify deprecated Snacks components and provides suggestions of replacement PIE components
 * @author Just Eat Takeaway.com - Design System Team
 */
"use strict";

const packageData = require('../package.json');
const snacksPieMigration = require('./rules/snacks-pie-migration');
const deprecatedComponents = require('./rules/deprecated-components');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
		name: packageData.name,
		version: packageData.version,
		namespace: packageData.name,
	},
    rules : {
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
        },
        // Alternative: less aggressive enforcement
        warn: {
            plugins: ['@justeattakeaway/snacks-pie-migration'],
            rules: {
                '@justeattakeaway/snacks-pie-migration/snacks-pie-migration': 'warn',
                '@justeattakeaway/snacks-pie-migration/deprecated-components': 'warn',
            },
        },
    },
    processors: {
       // add your processors here
    }
}

/**
 * @fileoverview his plugin helps developers to identify deprecated Snacks components and provides suggestions of replacement PIE components
 * @author Just Eat Takeaway.com - Design System Team
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// const requireIndex = require("requireindex");

const packageData = require('../package.json');
const snacksPieMigration = require('./rules/snacks-pie-migration');

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
    },
    processors: {
       // add your processors here
    }
}

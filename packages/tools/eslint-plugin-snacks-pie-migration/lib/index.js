/**
 * @fileoverview his plugin helps developers to identify deprecated Snacks components and provides suggestions of replacement PIE components
 * @author Just Eat Takeaway.com - Design System Team
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");


// import processors
module.exports.processors = {
  // add your processors here
};


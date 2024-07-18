const percySnapshot = require('@percy/playwright');
const PERCY_BREAKPOINTS = require('../visual/percy-breakpoints');

const percyBreakpoints = Object.values(PERCY_BREAKPOINTS);

exports.percySnapshot = async (page, screenshotName, widths = percyBreakpoints) => {
    await percySnapshot(page, screenshotName, { widths });
};

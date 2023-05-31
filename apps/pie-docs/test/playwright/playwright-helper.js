const percySnapshot = require('@percy/playwright');
const COOKIE_NAMES = require('../../../../configs/constants/cookies');
const PERCY_BREAKPOINTS = require('../visual/percy-breakpoints');

const percyBreakpoints = Object.values(PERCY_BREAKPOINTS);

exports.disableCookieBanner = async (page, context, shouldReload = true) => {
    const url = new URL(process.env.BASE_URL);
    const hostName = url.hostname;
    const pathName = '/';

    await context.addCookies([
        {
            name: COOKIE_NAMES.JE_COOKIE_CONSENT,
            value: 'full',
            domain: hostName,
            path: pathName,
        }, {
            name: COOKIE_NAMES.JE_BANNER_COOKIE,
            value: '130315',
            domain: hostName,
            path: pathName,
        }
    ]);

    if (shouldReload) {
        await page.reload();
    }
};

exports.percySnapshot = async (page, screenshotName, widths = percyBreakpoints) => {
    await percySnapshot(page, screenshotName, { widths });
};

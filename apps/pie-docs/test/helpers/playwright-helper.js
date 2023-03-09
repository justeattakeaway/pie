const COOKIE_NAMES = require('../../../../constants/cookies');

exports.disableCookieBanner = async (page, context) => {
    await context.addCookies([
        {
            name: COOKIE_NAMES.JE_COOKIE_CONSENT,
            value: 'full',
            url: process.env.BASE_URL,
        }, {
            name: COOKIE_NAMES.JE_BANNER_COOKIE,
            value: '130315',
            url: process.env.BASE_URL,
        }
    ]);
    await page.reload();
};

const COOKIE_NAMES = require('../../../../constants/cookies');

exports.disableCookieBanner = async (page, context) => {
    const url = new URL(process.env.BASE_URL);
    const hostName = url.hostname;
    const pathName = url.pathname;

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
    await page.reload();
};

const COOKIE_NAMES = require('../../../../constants/cookies');

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

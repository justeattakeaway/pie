import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

const { test, expect } = require('../playwright/fixtures');
const { disableCookieBanner } = require('../playwright/playwright-helper');

test.beforeEach(async ({ page, context }) => {
    await page.goto(process.env.BASE_URL);
    await disableCookieBanner(page, context);
});

expectedRoutesJson.forEach((route) => {
    test(`should test page content WCAG compliance for route - ${route}`, async ({ page, makeAxeBuilder }) => {
        const selector = 'site_content';

        await page.goto(`${process.env.BASE_URL}/${route}`);
        await page.getByTestId(selector).waitFor();

        const results = await makeAxeBuilder()
        .include(`[data-test-id=${selector}]`)
            .analyze();

        expect(results.violations).toEqual([]);
    });
});

const sharedComponents = [
    'site_nav',
    'site_header',
    'site_footer'
];

sharedComponents.forEach((component) => {
    test(`should test ${component} WCAG compliance`, async ({ page, makeAxeBuilder }) => {
        await page.getByTestId(component).waitFor();

        const results = await makeAxeBuilder()
            .include(`[data-test-id=${component}]`)
            .analyze();

        expect(results.violations).toEqual([]);
    });
});

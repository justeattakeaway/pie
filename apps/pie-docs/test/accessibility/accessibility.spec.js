import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures';

import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';
const { disableCookieBanner } = require('../playwright/playwright-helper');

test.beforeEach(async ({ page, context, baseURL }) => {
    await page.goto(baseURL);
    await disableCookieBanner(page, context);
});

expectedRoutesJson.forEach((route) => {
    test(`should test page content WCAG compliance for route - ${route}`, async ({ page, makeAxeBuilder }) => {
        const selector = 'site_content';

        await page.goto(route);
        await page.getByTestId(selector).waitFor();

        const results = await makeAxeBuilder()
            .include(`[data-test-id=${selector}]`)
            .analyze();

        expect(results.violations).toEqual([]);
    });
});

test('should test page content WCAG compliance for home page', async ({ page, baseURL, makeAxeBuilder }) => {
    const selector = 'site_content';

    await page.goto(baseURL);
    await page.getByTestId(selector).waitFor();

    const results = await makeAxeBuilder()
        .include(`[data-test-id=${selector}]`)
        .analyze();

    expect(results.violations).toEqual([]);
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

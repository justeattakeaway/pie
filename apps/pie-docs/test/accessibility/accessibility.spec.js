import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures';

import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL);
});

expectedRoutesJson.forEach((route) => {
    test(`should test page content WCAG compliance for route - ${route}`, async ({ page, makeAxeBuilder }) => {
        const selector = 'site_content';

        await page.goto(route);
        await page.getByTestId(selector).waitFor();

        const results = await makeAxeBuilder()
            .include(`[data-test-id=${selector}]`)
            .exclude('iframe')
            // TODO: Remove once DSW-3955 is resolved
            .disableRules(['landmark-unique', 'color-contrast-enhanced', 'heading-order', 'empty-heading', 'landmark-main-is-top-level', 'empty-table-header'])
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
        // TODO: Remove once DSW-3955 is resolved
        .disableRules(['heading-order', 'color-contrast-enhanced'])
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
            // TODO: Remove once DSW-3955 is resolved
            .disableRules(['landmark-main-is-top-level', 'landmark-no-duplicate-main'])
            .analyze();

        expect(results.violations).toEqual([]);
    });
});

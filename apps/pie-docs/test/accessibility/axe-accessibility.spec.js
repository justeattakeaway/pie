import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

const AxeReports = require('axe-reports');
const AxeBuilder = require('@axe-core/webdriverio').default;

describe('PIE - Accessibility Tests', () => {
    const getAxeResults = async (selector) => {
        const builder = new AxeBuilder({ client: browser }).include(selector)
            .withTags(['wcag21a', 'wcag21aa', 'wcag143', 'cat.color', 'cat.aria'])
            .disableRules(['color-contrast', 'color-contrast-enhanced']);
        try {
            const results = builder.analyze();

            return results;
        } catch (e) {
            throw new Error('Unable to get accessibility test results.');
        }
    };

    expectedRoutesJson.forEach((route) => {
        it('a11y - should test page content WCAG compliance', async () => {
            const puppeteer = await browser.getPuppeteer();
            const [page] = await puppeteer.pages();
            const url = `${browser.options.baseUrl}/${route}`;
            await page.goto(url);
            const contentSelector = ('[data-test-id="site_content"]');

            const results = await getAxeResults(contentSelector);

            console.log('Creating .CSV artifact for Axe violations');
            const filePath = './test/accessibility/violations/content-a11y-violations';

            AxeReports.processResults(results, 'csv', filePath, false);

            // Assert
            expect(results.violations.length).toBe(0);
        });
    });

    it('a11y - should test nav bar WCAG compliance', async () => {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();
        const url = `${browser.options.baseUrl}`;
        await page.goto(url);
        const navSelector = ('[data-test-id="site_nav"]');

        const results = await getAxeResults(navSelector);
        console.log('Creating .CSV artifact for Axe violations');
        const filePath = './test/accessibility/violations/navSelector-a11y-violations';

        AxeReports.processResults(results, 'csv', filePath, false);

        // Assert
        expect(results.violations.length).toBe(0);
    });

    it('a11y - should test header WCAG compliance', async () => {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();
        const url = `${browser.options.baseUrl}`;
        await page.goto(url);
        const headerSelector = ('[data-test-id="site_header"]');

        const results = await getAxeResults(headerSelector);
        console.log('Creating .CSV artifact for Axe violations');
        const filePath = './test/accessibility/violations/headerSelector-a11y-violations';

        AxeReports.processResults(results, 'csv', filePath, false);

        // Assert
        expect(results.violations.length).toBe(0);
    });

    it('a11y - should test footer WCAG compliance', async () => {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();
        const url = `${browser.options.baseUrl}`;
        await page.goto(url);
        const footerSelector = ('[data-test-id="site_footer"]');

        const results = await getAxeResults(footerSelector);
        console.log('Creating .CSV artifact for Axe violations');
        const filePath = './test/accessibility/violations/footerSelector-a11y-violations';

        AxeReports.processResults(results, 'csv', filePath, false);

        // Assert
        expect(results.violations.length).toBe(0);
    });
});

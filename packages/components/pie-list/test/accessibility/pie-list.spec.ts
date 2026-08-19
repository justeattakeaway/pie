import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieList - Accessibility tests', () => {
    test('a11y - should test the PieList component WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'list--leading-and-trailing');

        await basePage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });

    test('a11y - should test a switch selection list for WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'list--switch-selection');

        await basePage.load();

        // Act
        // `item-3` is a disabled row, so its text is muted. Axe reports that as a `color-contrast` violation, but WCAG 2.1
        // SC 1.4.3 (Contrast Minimum) exempts inactive user interface components, so the row is
        // conformant as authored and the exclusion below is deliberate rather than a workaround.
        // Source: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
        const results = await makeAxeBuilder()
            .exclude('pie-list-item[data-test-id="item-3"]')
            .analyze();

        expect(results.violations).toEqual([]);
    });

    test('a11y - should test a link list for WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'list--link-list');

        await basePage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });

    test('a11y - should test a button list for WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'list--button-list');

        await basePage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});

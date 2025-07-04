import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieAvatar - Accessibility tests', () => {
    test('a11y - should test the PieAvatar component WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'avatar--default');

        basePage.load();
        await page.waitForTimeout(2500);

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});

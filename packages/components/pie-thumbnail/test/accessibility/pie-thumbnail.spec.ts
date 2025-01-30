import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { thumbnail } from '../helpers/selectors.ts';

test.describe('PieThumbnail - Accessibility tests', () => {
    test('a11y - should test the PieThumbnail component WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'thumbnail--default');
        await basePage.load();
        await expect.soft(page.getByTestId(thumbnail.selectors.container.dataTestId)).toBeVisible();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});

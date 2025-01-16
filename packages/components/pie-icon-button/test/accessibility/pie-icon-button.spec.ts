import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { variants } from '../../src/defs.ts';

variants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ makeAxeBuilder, page }) => {
    // Arrange
    const iconButtonPage = new BasePage(page, `icon-button--${variant}--variations`);
    await iconButtonPage.load();

    // Act
    const results = await makeAxeBuilder().analyze();

    // Assert
    expect(results.violations).toEqual([]);
}));

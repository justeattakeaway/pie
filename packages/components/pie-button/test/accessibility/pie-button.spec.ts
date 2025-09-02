import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ButtonComponent } from '../helpers/page-object/pie-button.component.ts';
import { variants } from '../../src/defs.ts';

// primary is excluded due to a11y issues
variants.filter((variant) => variant !== 'primary').forEach((variant) => {
    test(`should test a11y for Variant: ${variant}`, async ({ makeAxeBuilder, page }) => {
        // Arrange
        const buttonPage = new BasePage(page, `button--${variant}-variations`);
        const buttonComponent = new ButtonComponent(page);

        await buttonPage.load();
        await expect.soft(buttonComponent.componentLocator.first()).toBeVisible();

        // Act
        const results = await makeAxeBuilder().analyze();

        // Assert
        expect(results.violations).toEqual([]);
    });
});

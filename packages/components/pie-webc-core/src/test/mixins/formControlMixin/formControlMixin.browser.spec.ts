import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('FormControlMixin', () => {
    test.describe('form property', () => {
        test('should not have an associated form when no form exists', async ({ page }) => {
            // Arrange
            const mockComponentPage = new BasePage(page, 'webc-core--form-control-mixin-mock');
            await mockComponentPage.load();

            const isFormAssociated = await page.evaluate(() => {
                const component = document.querySelector('form-control-mixin-mock');
                return component?.form !== null;
            });

            // Assert
            expect(isFormAssociated).toBe(false);
        });

        test('should return the associated form when inside a form', async ({ page }) => {
            // Arrange
            const mockComponentPage = new BasePage(page, 'webc-core--form-control-mixin-in-form');
            await mockComponentPage.load();

            const formId = await page.evaluate(() => {
                const component = document.querySelector('form-control-mixin-mock');
                return component?.form?.id;
            });

            // Assert
            expect(formId).toBe('testForm');
        });

        test('should not have an associated form when outside a form', async ({ page }) => {
            // Arrange
            const mockComponentPage = new BasePage(page, 'webc-core--form-control-mixin-outside-form');
            await mockComponentPage.load();

            const isFormAssociated = await page.evaluate(() => {
                const component = document.querySelector('form-control-mixin-mock');
                return component?.form !== null;
            });

            // Assert
            expect(isFormAssociated).toBe(false);
        });
    });
});

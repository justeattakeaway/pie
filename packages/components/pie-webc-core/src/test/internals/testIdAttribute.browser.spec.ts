import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('Configurable test-id attribute', () => {
    test('renames internal data-test-id to the configured attribute in the live browser', async ({ page }) => {
        // Arrange
        const mockPage = new BasePage(page, 'webc-core--test-id-attribute-override');
        await mockPage.load();

        // Assert — configured attribute is present (CSS locators pierce shadow DOM)
        await expect(page.locator('[data-qa="test-id-mock-root"]')).toBeAttached();
        await expect(page.locator('[data-qa="test-id-mock-label"]')).toBeAttached();

        // Assert — the original data-test-id has been removed (replace semantics)
        await expect(page.locator('[data-test-id="test-id-mock-root"]')).toHaveCount(0);
        await expect(page.locator('[data-test-id="test-id-mock-label"]')).toHaveCount(0);
    });

    test('exposes the configured attribute on the upgraded custom element host and internals', async ({ page }) => {
        // This does not mount a React/Vue wrapper directly. The wrappers (via
        // @lit/react createComponent) mount this same <test-id-mock> custom element,
        // so verifying the upgraded element + renamed internals here is representative
        // of the wrapped case; a true framework-integration test is tracked separately.
        const mockPage = new BasePage(page, 'webc-core--test-id-attribute-override');
        await mockPage.load();

        await expect(page.locator('test-id-mock')).toBeAttached();
        await expect(page.locator('[data-qa="test-id-mock-root"]')).toBeAttached();
    });
});

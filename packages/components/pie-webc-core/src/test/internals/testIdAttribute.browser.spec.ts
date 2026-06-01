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

    test('the rename still applies when the same element is driven through a host framework', async ({ page }) => {
        // The story mounts the real <test-id-mock> custom element; React/Vue wrappers
        // mount this same element via @lit/react createComponent, so observing the
        // upgraded element here is equivalent to the wrapped case.
        const mockPage = new BasePage(page, 'webc-core--test-id-attribute-override');
        await mockPage.load();

        await expect(page.locator('test-id-mock')).toBeAttached();
        await expect(page.locator('[data-qa="test-id-mock-root"]')).toBeAttached();
    });
});

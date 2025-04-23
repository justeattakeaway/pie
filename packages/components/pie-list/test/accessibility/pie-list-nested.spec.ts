import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { ListPage } from '../helpers/page-object/pie-list.page.ts';

test.describe('PieList - Nested Shadow DOM Tests', () => {
    test('should maintain proper ARIA roles across shadow DOM boundaries', async ({ page, makeAxeBuilder }) => {
        // Arrange - create a test page with nested shadow DOM structure
        const listPage = new ListPage(page, 'list--with-list-items');
        await listPage.load();

        // Run axe analysis on the loaded story
        const results = await makeAxeBuilder().analyze();
        expect(results.violations).toEqual([]);

        // Check that the list has the correct role using DOM APIs
        const listRole = await page.evaluate(() => {
            const list = document.querySelector('pie-list');
            const shadowRoot = list?.shadowRoot;
            const ulElement = shadowRoot?.querySelector('ul');
            return ulElement?.getAttribute('role');
        });

        expect(listRole).toBe('list');

        // Check list items are properly exposed
        const listItemCount = await page.evaluate(() => document.querySelectorAll('pie-list-item').length);
        expect(listItemCount).toBeGreaterThan(0);
    });

    test('should allow proper keyboard navigation through nested shadow DOM', async ({ page }) => {
        // Load the interactive list story
        const listPage = new ListPage(page, 'list--interactive');
        await listPage.load();

        // Tab to the first interactive element
        await page.keyboard.press('Tab');

        // Get information about the first focused element
        const firstFocusInfo = await page.evaluate(() => {
            const element = document.activeElement;
            return {
                tagName: element?.tagName.toLowerCase(),
                textContent: element?.textContent?.trim(),
                isListRelated: element?.tagName.toLowerCase() === 'pie-list' ||
                    element?.tagName.toLowerCase() === 'pie-list-item' ||
                    element?.tagName.toLowerCase() === 'li' ||
                    element?.closest('pie-list-item') !== null ||
                    element?.closest('li') !== null,
            };
        });

        // First focus should be on a list-related element
        expect(firstFocusInfo.isListRelated).toBe(true);

        // Arrow down to navigate through the list
        await page.keyboard.press('ArrowDown');

        // Get information about the second focused element
        const secondFocusInfo = await page.evaluate(() => {
            const element = document.activeElement;
            return {
                tagName: element?.tagName.toLowerCase(),
                textContent: element?.textContent?.trim(),
                isListRelated: element?.tagName.toLowerCase() === 'pie-list' ||
                    element?.tagName.toLowerCase() === 'pie-list-item' ||
                    element?.tagName.toLowerCase() === 'li' ||
                    element?.closest('pie-list-item') !== null ||
                    element?.closest('li') !== null,
            };
        });

        // Second focus should also be on a list-related element
        expect(secondFocusInfo.isListRelated).toBe(true);

        // And it should be a different element than the first one
        expect(firstFocusInfo.tagName !== secondFocusInfo.tagName ||
            firstFocusInfo.textContent !== secondFocusInfo.textContent).toBe(true);
    });

    test('should handle RTL direction properly for lists', async ({ page }) => {
        // Arrange - load the list with RTL direction
        const listPage = new ListPage(page, 'list--default');
        await listPage.load({}, { writingDirection: 'rtl' });

        // Check if the list has the RTL class/attribute
        const hasRtlClass = await page.evaluate(() => {
            const list = document.querySelector('pie-list');
            return list?.hasAttribute('dir') && list?.getAttribute('dir') === 'rtl';
        });

        expect(hasRtlClass).toBe(true);

        // Check if the shadow DOM reflects RTL
        const shadowDomHasRtl = await page.evaluate(() => {
            const list = document.querySelector('pie-list');
            const shadowRoot = list?.shadowRoot;
            const ulElement = shadowRoot?.querySelector('ul');

            // Check for specific RTL class in the shadow DOM
            // This depends on the actual implementation
            return ulElement?.classList.contains('c-list--rtl');
        });

        expect(shadowDomHasRtl).toBe(true);
    });

    test('should correctly forward event delegation for interactive lists', async ({ page }) => {
        // Arrange
        const listPage = new ListPage(page, 'list--interactive');
        await listPage.load();

        // Click on a list item and check for custom event
        const wasEventDispatched = await page.evaluate(() => {
            let eventWasDispatched = false;

            // Add event listener for the custom event
            document.addEventListener('pie-list-item-click', () => {
                eventWasDispatched = true;
            });

            // Click the first list item
            const listItem = document.querySelector('pie-list-item');
            listItem?.click();

            return eventWasDispatched;
        });

        // Check if the event was dispatched
        expect(wasEventDispatched).toBeTruthy();

        // Also verify the list is interactive as a secondary check
        const isInteractive = await page.evaluate(() => document.querySelector('pie-list')?.hasAttribute('interactive'));
        expect(isInteractive).toBe(true);
    });
});

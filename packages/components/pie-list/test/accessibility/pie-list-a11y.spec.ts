import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { ListPage } from '../helpers/page-object/pie-list.page.ts';

test.describe('PieList - Accessibility tests', () => {
    test('a11y - should test the default PieList component WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const listPage = new ListPage(page, 'list--default');
        await listPage.load();

        // Act & Assert
        const results = await makeAxeBuilder().analyze();
        expect(results.violations).toEqual([]);
    });

    test('a11y - should test the interactive PieList component WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const listPage = new ListPage(page, 'list--interactive');
        await listPage.load();

        // Act & Assert
        const results = await makeAxeBuilder().analyze();
        expect(results.violations).toEqual([]);
    });

    test('a11y - should test PieList with many items WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const listPage = new ListPage(page, 'list--many-items');
        await listPage.load();

        // Act & Assert
        const results = await makeAxeBuilder().analyze();
        expect(results.violations).toEqual([]);
    });

    test('a11y - should verify list has correct ARIA role', async ({ page }) => {
        // Arrange
        const listPage = new ListPage(page, 'list--default');
        await listPage.load();

        // Check ARIA role using DOM method
        const listRole = await page.evaluate(() => {
            const list = document.querySelector('pie-list');
            const shadowRoot = list?.shadowRoot;
            const ulElement = shadowRoot?.querySelector('ul');
            return ulElement?.getAttribute('role');
        });

        expect(listRole).toBe('list');
    });

    test('a11y - should have correct keyboard navigation structure for interactive lists', async ({ page }) => {
        // Arrange
        const listPage = new ListPage(page, 'list--interactive');
        await listPage.load();

        // Tab to the list
        await page.keyboard.press('Tab');

        // Check if the first list item received focus
        const isSomethingFocused = await page.evaluate(() => document.activeElement !== document.body);

        // Something should be focused
        expect(isSomethingFocused).toBe(true);

        // Test arrow key navigation
        // Press down arrow and check if focus moves to next item
        await page.keyboard.press('ArrowDown');

        // We want to check if focus moved correctly, this would need to be implemented
        // based on the component's actual keyboard navigation behavior
        const secondItemFocused = await page.evaluate(() => {
            const { activeElement } = document;
            // This depends on how the items are structured, adjust as needed
            const items = Array.from(document.querySelectorAll('pie-list-item'));
            return items.indexOf(activeElement as Element) === 1; // second item (index 1)
        });

        expect(secondItemFocused).toBe(true);
    });

    test('a11y - should properly manage focus with roving tabindex', async ({ page }) => {
        // Arrange
        const listPage = new ListPage(page, 'list--interactive');
        await listPage.load();

        // Evaluate if the roving tabindex pattern is implemented correctly
        const rovingTabindexImplemented = await page.evaluate(() => {
            const list = document.querySelector('pie-list');
            return list?.hasAttribute('roving-tabindex-enabled') === true;
        });

        expect(rovingTabindexImplemented).toBe(true);

        // Check if only one item has tabindex="0"
        const itemsWithTabindexZero = await page.evaluate(() => {
            const items = Array.from(document.querySelectorAll('pie-list-item'));
            return items.filter((item) => item.getAttribute('tabindex') === '0').length;
        });

        expect(itemsWithTabindexZero).toBe(1);
    });

    test('a11y - should verify list items have correct role', async ({ page }) => {
        // Arrange
        const listPage = new ListPage(page, 'list--default');
        await listPage.load();

        // Check if list items have the right role
        const listItemsHaveCorrectRole = await page.evaluate(() => {
            const listItems = Array.from(document.querySelectorAll('pie-list-item'));

            // For custom elements, we need to check the shadow DOM
            const allHaveCorrectRole = listItems.every((item) => {
                const { shadowRoot } = item;
                const liElement = shadowRoot?.querySelector('li');
                return liElement?.getAttribute('role') === 'listitem' ||
                    item.getAttribute('role') === 'listitem';
            });

            return allHaveCorrectRole;
        });

        expect(listItemsHaveCorrectRole).toBe(true);
    });
});

import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieDropdown - Accessibility tests', () => {
    test('a11y - should test the closed single-select dropdown WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'dropdown--single-select');

        await basePage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });

    test('a11y - should test the open single-select dropdown WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'dropdown--single-select');

        await basePage.load();
        await basePage.page.getByTestId('pie-dropdown-trigger').click();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });

    test('a11y - should test the open multi-select dropdown WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'dropdown--multi-select');

        await basePage.load();
        // Click near the start of the field: the count chip's close button
        // sits in the middle and clears the selection instead.
        await basePage.page.getByTestId('pie-dropdown-field').click({ position: { x: 10, y: 24 } });

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });

    test('a11y - should test the searchable dropdown WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'dropdown--single-select-searchable');

        await basePage.load();
        await basePage.page.getByTestId('pie-dropdown-input').click();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});

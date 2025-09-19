import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieList - Accessibility tests', () => {
    test('a11y - should test the PieList component WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'list--default');

        await basePage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });

    test('a11y - should test PieList with dividers WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'list--with-dividers');

        await basePage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });

    test('a11y - should test compact PieList WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'list--compact');

        await basePage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });

    test('a11y - should test all prop variations WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'list--variants');

        await basePage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});

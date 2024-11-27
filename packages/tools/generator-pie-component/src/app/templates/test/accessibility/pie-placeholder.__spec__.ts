import { test, expect } from '@playwright/test';
import { Pie<%= componentName %> } from '../../src/index.ts';

test.describe('Pie<%= componentName %> - Accessibility tests', () => {
    test('a11y - should test the Pie<%= componentName %> component WCAG compliance', async ({ makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, '<%= fileName %>--default');

        basePage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
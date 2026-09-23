import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

import { variants } from '../../src/defs.ts';
import { tooltip } from '../helpers/page-object/selectors.ts';

const storyIds = [
    'tooltip--default',
    'tooltip--with-heading',
    'tooltip--with-action',
    'tooltip--with-action-and-no-heading',
    'tooltip--dismissible',
    'tooltip--dismissible-with-action',
    'tooltip--dismissible-no-heading',
    'tooltip--fit-to-content',
    'tooltip--fill-container',
    'tooltip--placement-grid',
    'tooltip--icon-default',
    'tooltip--icon-inverse',
    'tooltip--icon-placement-grid',
];

test.describe('PieTooltip - Accessibility tests', () => {
    storyIds.forEach((storyId) => {
        test(`a11y - should test the ${storyId} story for WCAG compliance`, async ({ page, makeAxeBuilder }) => {
            // Arrange
            const basePage = new BasePage(page, storyId);

            await basePage.load();
            await expect(page.getByTestId(tooltip.selectors.panel.dataTestId).first()).toBeVisible();

            // Act
            const results = await makeAxeBuilder().analyze();

            // Assert
            expect(results.violations).toEqual([]);
        });
    });

    // The close button takes its own colour treatment from the panel's, so the dismissible panel
    // is checked in both variants for contrast.
    variants.forEach((variant) => {
        test(`a11y - should test the dismissible panel for WCAG compliance when variant is ${variant}`, async ({ page, makeAxeBuilder }) => {
            // Arrange
            const basePage = new BasePage(page, 'tooltip--default');

            await basePage.load({ variant, isDismissible: true, heading: 'Delivery times' });
            await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

            // Act
            const results = await makeAxeBuilder().analyze();

            // Assert
            expect(results.violations).toEqual([]);
        });
    });
});

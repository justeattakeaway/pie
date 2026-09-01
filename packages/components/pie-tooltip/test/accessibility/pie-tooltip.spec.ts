import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

import {
    positions, sizes, types, variants,
} from '../../src/defs.ts';
import { tooltip } from '../helpers/page-object/selectors.ts';

const storyIds = [
    'tooltip--default',
    'tooltip--with-heading',
    'tooltip--with-action',
    'tooltip--with-action-and-no-heading',
    'tooltip--dismissible',
    'tooltip--dismissible-with-action',
    'tooltip--fit-to-content',
    'tooltip--fill-container',
    'tooltip--placement-grid',
    'tooltip--presentation-grid',
    'tooltip--size-grid',
    'tooltip--enlarged-offset',
    'tooltip--rtl-placement',
    'tooltip--anchor-widths',
    'tooltip--scrollable-page',
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

    positions.forEach((position) => {
        test(`a11y - should test the panel for WCAG compliance when position is ${position}`, async ({ page, makeAxeBuilder }) => {
            // Arrange
            const basePage = new BasePage(page, 'tooltip--default');

            await basePage.load({ position });
            await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

            // Act
            const results = await makeAxeBuilder().analyze();

            // Assert
            expect(results.violations).toEqual([]);
        });
    });

    variants.forEach((variant) => {
        types.forEach((type) => {
            test(`a11y - should test the panel for WCAG compliance when variant is ${variant} and type is ${type}`, async ({ page, makeAxeBuilder }) => {
                // Arrange
                const basePage = new BasePage(page, 'tooltip--default');

                await basePage.load({
                    variant, type, isDismissible: true, heading: 'Delivery times',
                });
                await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

                // Act
                const results = await makeAxeBuilder().analyze();

                // Assert
                expect(results.violations).toEqual([]);
            });
        });
    });

    sizes.forEach((size) => {
        test(`a11y - should test the panel for WCAG compliance when size is ${size}`, async ({ page, makeAxeBuilder }) => {
            // Arrange
            const basePage = new BasePage(page, 'tooltip--default');

            await basePage.load({ size });
            await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

            // Act
            const results = await makeAxeBuilder().analyze();

            // Assert
            expect(results.violations).toEqual([]);
        });
    });

    test('a11y - should test the panel for WCAG compliance at a 320px viewport', async ({ page, makeAxeBuilder }) => {
        // Arrange
        await page.setViewportSize({ width: 320, height: 640 });

        const basePage = new BasePage(page, 'tooltip--default');

        await basePage.load({ containerInlineSize: '280px', triggerInlineSize: '120px' });
        await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

        // Act
        const results = await makeAxeBuilder().analyze();

        // Assert
        expect(results.violations).toEqual([]);
    });
});

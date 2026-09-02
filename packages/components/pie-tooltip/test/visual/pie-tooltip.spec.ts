import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

import { tooltip } from '../helpers/page-object/selectors.ts';

const stories: Array<{ id: string; name: string }> = [
    { id: 'tooltip--default', name: 'PieTooltip - Default' },
    { id: 'tooltip--with-heading', name: 'PieTooltip - With heading' },
    { id: 'tooltip--with-action', name: 'PieTooltip - With action' },
    { id: 'tooltip--dismissible', name: 'PieTooltip - Dismissible' },
    { id: 'tooltip--dismissible-with-action', name: 'PieTooltip - Dismissible with action' },
    { id: 'tooltip--dismissible-no-heading', name: 'PieTooltip - Dismissible no heading' },
    { id: 'tooltip--placement-grid', name: 'PieTooltip - Placement grid' },
    { id: 'tooltip--enlarged-offset', name: 'PieTooltip - Enlarged offset' },
    { id: 'tooltip--inverse', name: 'PieTooltip - Inverse' },
    { id: 'tooltip--icon-default', name: 'PieTooltip - Icon default' },
    { id: 'tooltip--icon-inverse', name: 'PieTooltip - Icon inverse' },
    { id: 'tooltip--icon-placement-grid', name: 'PieTooltip - Icon placement grid' },
];

test.describe('PieTooltip - Visual tests', () => {
    stories.forEach(({ id, name }) => {
        test(`should display the ${name} story successfully`, async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, id);

            await basePage.load();
            await expect(page.getByTestId(tooltip.selectors.panel.dataTestId).first()).toBeVisible();

            // Act & Assert
            await percySnapshot(page, name);
        });
    });

    // Placement mirrors in RTL, so the grid is snapshotted in both directions. The RTL snapshot
    // should be a mirror image of the LTR one.
    test('should display the Placement grid story successfully in RTL', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'tooltip--placement-grid');

        await basePage.load({}, { writingDirection: 'rtl' });
        await expect(page.getByTestId(tooltip.selectors.panel.dataTestId).first()).toBeVisible();

        // Act & Assert
        await percySnapshot(page, 'PieTooltip - Placement grid RTL');
    });

    test('should display the Icon placement grid story successfully in RTL', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'tooltip--icon-placement-grid');

        await basePage.load({}, { writingDirection: 'rtl' });
        await expect(page.getByTestId(tooltip.selectors.panel.dataTestId).first()).toBeVisible();

        // Act & Assert
        await percySnapshot(page, 'PieTooltip - Icon placement grid RTL');
    });

    test('should display the panel successfully at a 320px viewport', async ({ page }) => {
        // Arrange
        await page.setViewportSize({ width: 320, height: 640 });

        const basePage = new BasePage(page, 'tooltip--default');

        await basePage.load({
            containerInlineSize: '280px',
            triggerInlineSize: '120px',
            heading: 'Delivery times',
            isDismissible: true,
            content: 'Orders placed before 6pm arrive today. Orders placed after 6pm arrive the next working day, including at weekends.',
        });
        await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

        // Act & Assert
        await percySnapshot(page, 'PieTooltip - Narrow viewport', { widths: [320] });
    });
});

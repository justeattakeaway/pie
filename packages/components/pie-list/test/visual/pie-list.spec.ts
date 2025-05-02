import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { ListPage } from '../helpers/page-object/pie-list.page.ts';

test.describe('PieList - Visual tests', () => {
    test('should display the PieList component successfully', async ({ page }) => {
        const listPage = new ListPage(page, 'list--default');

        await listPage.load();
        await page.waitForTimeout(1000); // Allow time for component to render

        await percySnapshot(page, 'PieList - Default Variant', percyWidths);
    });

    test('should display the compact variant correctly', async ({ page }) => {
        const listPage = new ListPage(page, 'list--compact-variant');

        await listPage.load();
        await page.waitForTimeout(1000); // Allow time for component to render

        await percySnapshot(page, 'PieList - Compact Variant', percyWidths);
    });

    test('should display dividers correctly', async ({ page }) => {
        const listPage = new ListPage(page, 'list--with-dividers');

        await listPage.load();
        await page.waitForTimeout(1000); // Allow time for component to render

        await percySnapshot(page, 'PieList - With Dividers', percyWidths);
    });

    test('should display interactive list correctly', async ({ page }) => {
        const listPage = new ListPage(page, 'list--interactive');

        await listPage.load();
        await page.waitForTimeout(1000); // Allow time for component to render

        await percySnapshot(page, 'PieList - Interactive', percyWidths);
    });

    // Test all combinations
    test('should display full-featured list correctly (interactive + compact + dividers)', async ({ page }) => {
        const listPage = new ListPage(page, 'list--full-featured');

        await listPage.load();
        await page.waitForTimeout(1000); // Allow time for component to render

        await percySnapshot(page, 'PieList - Full Featured', percyWidths);
    });

    test('should display long text content list correctly', async ({ page }) => {
        const listPage = new ListPage(page, 'list--long-text-content');

        await listPage.load();
        await page.waitForTimeout(1000); // Allow time for component to render

        await percySnapshot(page, 'PieList - Long Text Content', percyWidths);
    });

    test('should display a list with many items correctly', async ({ page }) => {
        const listPage = new ListPage(page, 'list--many-items');

        await listPage.load();
        await page.waitForTimeout(1000); // Allow time for component to render

        await percySnapshot(page, 'PieList - Many Items', percyWidths);
    });

    // Test RTL support
    const directions = ['ltr', 'rtl'];

    directions.forEach((direction) => {
        test(`should render correctly with direction: ${direction}`, async ({ page }) => {
            const listPage = new ListPage(page, 'list--default');

            await listPage.load({}, { writingDirection: direction });
            await page.waitForTimeout(1000); // Allow time for component to render

            await percySnapshot(page, `PieList - Direction: ${direction}`, percyWidths);
        });
    });
});

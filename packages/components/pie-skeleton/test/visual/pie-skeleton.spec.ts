import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { skeleton } from '../helpers/selectors.ts';

// The testing stories that make up the visual regression coverage, with a readable snapshot name.
const visualStories: Array<[string, string]> = [
    ['skeleton--default', 'Default'],
    ['skeleton--variants', 'Variants'],
    ['skeleton--background-colors', 'Background colors'],
    ['skeleton--text-heights', 'Text heights'],
    ['skeleton--text-lines', 'Text lines'],
    ['skeleton--spacing-heights', 'Spacing heights'],
    ['skeleton--widths', 'Widths'],
    ['skeleton--pill-button-heights', 'Pill button heights'],
    ['skeleton--star-sizes', 'Star sizes'],
    ['skeleton--border-radii', 'Border radii'],
    ['skeleton--aspect-ratios', 'Aspect ratios'],
    ['skeleton--clamped-lines', 'Clamped lines'],
    ['skeleton--clamped-stars', 'Clamped stars'],
    ['skeleton--list-items', 'List items'],
];

test.describe('PieSkeleton - Visual tests', () => {
    visualStories.forEach(([storyId, name]) => {
        test(`should display the ${name} story`, async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, storyId);
            await basePage.load();

            // Assert
            await expect.soft(page.getByTestId(skeleton.selectors.container.dataTestId).first()).toBeVisible();

            await percySnapshot(page, `PIE Skeleton - ${name}`, { widths: [1280] });
        });
    });

    test('should display the Text lines story in RTL', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'skeleton--text-lines');
        await basePage.load({}, { writingDirection: 'rtl' });

        // Assert
        await expect.soft(page.getByTestId(skeleton.selectors.container.dataTestId).first()).toBeVisible();

        await percySnapshot(page, 'PIE Skeleton - Text lines (RTL)', { widths: [1280] });
    });
});

import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { skeleton } from '../helpers/selectors.ts';

const storyId = 'skeleton--default';
const { container, line, star } = skeleton.selectors;

/**
 * Loads the skeleton story with the given args and returns the root element locator.
 */
const loadSkeleton = async (page: Page, args: Record<string, unknown> = {}) => {
    const basePage = new BasePage(page, storyId);
    await basePage.load(args);
    return page.getByTestId(container.dataTestId);
};

test.describe('PieSkeleton - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        await loadSkeleton(page, { width: '200px' });

        // Assert
        await expect(page.getByTestId(container.dataTestId)).toBeVisible();
    });

    test.describe('variants', () => {
        const variants = ['box', 'circle', 'pill', 'text', 'star'];

        variants.forEach((variant) => {
            test(`should render the ${variant} variant`, async ({ page }) => {
                // Arrange
                await loadSkeleton(page, { variant, width: '200px', height: '48px' });

                // Assert
                await expect(page.getByTestId(container.dataTestId)).toHaveClass(new RegExp(`c-skeleton--${variant}`));
            });
        });
    });

    test.describe('background colours', () => {
        const backgroundColours: Record<string, string> = {
            default: 'c-skeleton--backgroundDefault',
            strong: 'c-skeleton--backgroundStrong',
            subtle: 'c-skeleton--backgroundSubtle',
        };

        Object.entries(backgroundColours).forEach(([value, className]) => {
            test(`should apply the ${value} background colour`, async ({ page }) => {
                // Arrange
                await loadSkeleton(page, { width: '200px', backgroundColor: value });

                // Assert
                await expect(page.getByTestId(container.dataTestId)).toHaveClass(new RegExp(className));
            });
        });
    });

    test.describe('text variant', () => {
        test('should render the requested number of lines', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, {
                variant: 'text', width: '200px', height: 'font-body-l', lines: 4,
            });

            // Assert
            await expect(page.getByTestId(container.dataTestId).locator(line.css)).toHaveCount(4);
        });

        test('should render the last line at half width when there is more than one line', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, {
                variant: 'text', width: '200px', height: 'font-body-l', lines: 2,
            });
            const lines = page.getByTestId(container.dataTestId).locator(line.css);

            // Assert
            await expect(lines.first()).not.toHaveClass(/is-last/);
            await expect(lines.last()).toHaveClass(/is-last/);
        });

        test('should not mark a single line as the last line', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, {
                variant: 'text', width: '200px', height: 'font-body-l', lines: 1,
            });

            // Assert
            await expect(page.getByTestId(container.dataTestId).locator(line.css)).not.toHaveClass(/is-last/);
        });

        test('should clamp lines above the maximum to 10', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, {
                variant: 'text', width: '200px', height: 'font-body-l', lines: 12,
            });

            // Assert
            await expect(page.getByTestId(container.dataTestId).locator(line.css)).toHaveCount(10);
        });

        test('should clamp lines below the minimum to 1', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, {
                variant: 'text', width: '200px', height: 'font-body-l', lines: 0,
            });

            // Assert
            await expect(page.getByTestId(container.dataTestId).locator(line.css)).toHaveCount(1);
        });

        test('should fall back to 1 line when lines is not a number', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, {
                variant: 'text', width: '200px', height: 'font-body-l', lines: 'not-a-number',
            });

            // Assert
            await expect(page.getByTestId(container.dataTestId).locator(line.css)).toHaveCount(1);
        });
    });

    test.describe('star variant', () => {
        test('should render the requested number of stars', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, { variant: 'star', stars: 5 });

            // Assert
            await expect(page.getByTestId(container.dataTestId).locator(star.css)).toHaveCount(5);
        });

        test('should clamp stars above the maximum to 10', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, { variant: 'star', stars: 12 });

            // Assert
            await expect(page.getByTestId(container.dataTestId).locator(star.css)).toHaveCount(10);
        });

        test('should clamp stars below the minimum to 1', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, { variant: 'star', stars: 0 });

            // Assert
            await expect(page.getByTestId(container.dataTestId).locator(star.css)).toHaveCount(1);
        });
    });

    test.describe('height resolution', () => {
        test('should set an absolute height', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, { variant: 'box', width: '200px', height: '40px' });

            // Assert
            const box = await page.getByTestId(container.dataTestId).boundingBox();
            expect(box?.height).toBe(40);
        });

        test('should set a spacing identifier height', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, { variant: 'box', width: '200px', height: 'spacing-e' });

            // Assert
            const box = await page.getByTestId(container.dataTestId).boundingBox();
            expect(box?.height).toBe(24);
        });

        const pillHeights: Array<[string, number]> = [
            ['button-xsmall', 32],
            ['button-small-productive', 40],
            ['button-small-expressive', 40],
            ['button-medium', 48],
            ['button-large', 56],
        ];

        pillHeights.forEach(([height, expectedHeight]) => {
            test(`should give a pill the ${height} height`, async ({ page }) => {
                // Arrange
                await loadSkeleton(page, { variant: 'pill', width: '200px', height });

                // Assert
                const box = await page.getByTestId(container.dataTestId).boundingBox();
                expect(box?.height).toBe(expectedHeight);
            });
        });

        test('should use the wide button height for a responsive pill above the md breakpoint', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, {
                variant: 'pill', width: '200px', height: 'button-medium', isResponsive: true,
            });

            // Assert - the default viewport is wider than md, so button-medium becomes 56px
            const box = await page.getByTestId(container.dataTestId).boundingBox();
            expect(box?.height).toBe(56);
        });
    });

    test.describe('circle variant', () => {
        test('should size a circle by its height and ignore width', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, { variant: 'circle', width: '200px', height: '80px' });

            // Assert
            const box = await page.getByTestId(container.dataTestId).boundingBox();
            expect(box?.width).toBe(80);
            expect(box?.height).toBe(80);
        });
    });

    test.describe('star variant sizing', () => {
        test('should size the row from the star size and number of stars, ignoring width', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, {
                variant: 'star', width: '500px', height: '20px', stars: 2,
            });

            // Assert - 2 stars of 20px, so the row is 40px wide regardless of the width prop
            const box = await page.getByTestId(container.dataTestId).boundingBox();
            expect(box?.width).toBe(40);
            expect(box?.height).toBe(20);
        });
    });

    test.describe('box variant', () => {
        test('should apply the default 1by1 aspect ratio', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, { variant: 'box', width: '200px' });

            // Assert
            const box = await page.getByTestId(container.dataTestId).boundingBox();
            expect(box?.height).toBe(200);
        });

        test('should apply the requested aspect ratio', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, { variant: 'box', width: '200px', aspectRatio: '4by3' });

            // Assert
            const box = await page.getByTestId(container.dataTestId).boundingBox();
            expect(box?.height).toBe(150);
        });

        test('should prioritise an explicit height over the aspect ratio', async ({ page }) => {
            // Arrange
            await loadSkeleton(page, {
                variant: 'box', width: '200px', height: '100px', aspectRatio: '4by3',
            });

            // Assert
            const box = await page.getByTestId(container.dataTestId).boundingBox();
            expect(box?.height).toBe(100);
        });
    });
});

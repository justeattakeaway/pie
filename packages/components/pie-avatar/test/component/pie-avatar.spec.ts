import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const avatarInitialsTestCases = [
    { input: 'Alice Johnson', expectedVisual: 'AJ', expectedScreenReader: 'A, J' },
    { input: 'John Davis Smith', expectedVisual: 'JS', expectedScreenReader: 'J, S' },
    { input: 'John Davis-Smith', expectedVisual: 'JD', expectedScreenReader: 'J, D' },
    { input: 'Jean-Luc Picard', expectedVisual: 'JP', expectedScreenReader: 'J, P' },
    { input: '  Mary   Anne  ', expectedVisual: 'MA', expectedScreenReader: 'M, A' },
    { input: 'Madonna', expectedVisual: 'M', expectedScreenReader: 'M' },
    { input: 'John 123', expectedVisual: 'J1', expectedScreenReader: 'J, 1' },
    { input: "D'Angelo Russell", expectedVisual: 'DR', expectedScreenReader: 'D, R' },
    { input: '-*Mary Bell', expectedVisual: 'MB', expectedScreenReader: 'M, B' },
    { input: 'John **// Bell', expectedVisual: 'JB', expectedScreenReader: 'J, B' },
    { input: '!! John Bell !!', expectedVisual: 'JB', expectedScreenReader: 'J, B' },
    { input: 'Óleg Łukaszewicz', expectedVisual: 'ÓŁ', expectedScreenReader: 'Ó, Ł' },
    { input: 'anne johnson', expectedVisual: 'AJ', expectedScreenReader: 'A, J' },

];
const avatarEdgeTestCases = [
    { input: '' },
    { input: null },
    { input: undefined },
];

test.describe('PieAvatar - Component tests', () => {
    test('should render as image when src is provided', async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--with-image');
        await avatarPage.load();

        // Act
        const avatarComponentImg = page.getByTestId('pie-avatar-image');

        // Assert
        await expect(avatarComponentImg).toHaveAttribute('src');
        await expect(avatarComponentImg).toHaveAttribute('alt', '');
    });

    test('should render as a div when tag is not provided', async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--default');
        await avatarPage.load();

        // Act
        const avatarComponentDiv = page.getByTestId('pie-avatar-div');

        // Assert
        await expect(avatarComponentDiv).toBeVisible();
    });

    test('should render as a div when tag is div', async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--default');
        await avatarPage.load({ tag: 'div' });

        // Act
        const avatarComponentDiv = page.getByTestId('pie-avatar-div');

        // Assert
        await expect(avatarComponentDiv).toBeVisible();
    });

    avatarEdgeTestCases.forEach(({ input }) => {
        test(`should render user icon when label is ${input}`, async ({ page }) => {
            // Arrange
            const avatarPage = new BasePage(page, 'avatar--default');
            avatarPage.args = ''; // don't set label
            await avatarPage.load();

            // Act
            const avatarComponentIcon = page.getByTestId('pie-avatar-icon');

            // Assert
            await expect(avatarComponentIcon).toBeVisible();
        });

        test(`should be ommitted by screenreaders when label is ${input}`, async ({ page }) => {
            // Arrange
            const avatarPage = new BasePage(page, 'avatar--default');
            avatarPage.args = ''; // don't set label
            await avatarPage.load();

            // Act
            const avatarComponentIcon = page.getByTestId('pie-avatar-icon');

            // Assert
            await expect(avatarComponentIcon).toHaveAttribute('aria-hidden');
        });
    });

    test.describe('PieAvatar - Image error fallback', () => {
        test('should render the fallback icon when the image fails to load', async ({ page }) => {
            // Arrange
            const avatarPage = new BasePage(page, 'avatar--with-image-error');
            await avatarPage.load();

            // Act
            const avatarComponentIcon = page.getByTestId('pie-avatar-icon');
            const avatarComponentImg = page.getByTestId('pie-avatar-image');

            // Assert
            await expect(avatarComponentIcon).toBeVisible();
            await expect(avatarComponentImg).toHaveCount(0);
        });

        test('should retry loading the image when src changes after a failure', async ({ page }) => {
            // Arrange
            const avatarPage = new BasePage(page, 'avatar--with-image-error');
            await avatarPage.load();

            const avatarComponentIcon = page.getByTestId('pie-avatar-icon');
            const avatarComponentImg = page.getByTestId('pie-avatar-image');
            await expect(avatarComponentIcon).toBeVisible();
            await expect(avatarComponentImg).toHaveCount(0);

            // Act - point the avatar at an image that loads
            await page.evaluate(() => {
                document.querySelector('pie-avatar')?.setAttribute('src', './static/images/pie-avatar--static-image.jpg');
            });

            // Assert
            await expect(avatarComponentImg).toBeVisible();
            await expect(avatarComponentImg).toHaveAttribute('src', './static/images/pie-avatar--static-image.jpg');
            await expect(avatarComponentIcon).toHaveCount(0);
            await expect.poll(() => avatarComponentImg.evaluate((img) => (img as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
        });

        test('should render the fallback icon again when the updated image also fails', async ({ page }) => {
            // Arrange
            const avatarPage = new BasePage(page, 'avatar--with-image-error');
            await avatarPage.load();

            const avatarComponentIcon = page.getByTestId('pie-avatar-icon');
            const avatarComponentImg = page.getByTestId('pie-avatar-image');
            await expect(avatarComponentIcon).toBeVisible();

            // Act - recover with a valid image, then fail again
            await page.evaluate(() => {
                document.querySelector('pie-avatar')?.setAttribute('src', './static/images/pie-avatar--static-image.jpg');
            });
            await expect(avatarComponentImg).toBeVisible();

            await page.evaluate(() => {
                document.querySelector('pie-avatar')?.setAttribute('src', './static/images/does-not-exist.jpg');
            });

            // Assert
            await expect(avatarComponentIcon).toBeVisible();
            await expect(avatarComponentImg).toHaveCount(0);
        });
    });
});

test.describe('PieAvatar - Label with no letters or numbers', () => {
    test('should render user icon when label contains no letters or numbers', async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--default');
        await avatarPage.load();

        await page.locator('pie-avatar').waitFor({ state: 'visible' });

        // Act
        await page.evaluate(async () => {
            const avatarComponent = document.querySelector('pie-avatar');
            avatarComponent?.setAttribute('label', '***');
        });

        // Assert
        await expect(page.getByTestId('pie-avatar-icon')).toBeVisible();
        await expect(page.getByTestId('pie-avatar-initials-visual')).toHaveCount(0);
    });
});

avatarInitialsTestCases.forEach(({ input, expectedVisual, expectedScreenReader }) => {
    test(`should render ${expectedVisual} initials visually and ${expectedScreenReader} for screenreaders when label is ${input}`, async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--default');
        await avatarPage.load();

        // Wait for the component to be ready before using page.evaluate
        await page.locator('pie-avatar').waitFor({ state: 'visible' });

        // Act - Have to manually set the label as Storybook doesn't support certain characters when passed via query params
        await page.evaluate(async (input) => {
            const avatarComponent = document.querySelector('pie-avatar');
            avatarComponent?.setAttribute('label', `${input}`);
        }, input);
        const avatarComponentVisual = page.getByTestId('pie-avatar-initials-visual');
        const avatarComponentScreenreader = page.getByTestId('pie-avatar-initials-screenreader');

        // Assert
        await expect(avatarComponentVisual).toHaveText(expectedVisual);
        await expect(avatarComponentVisual).toHaveAttribute('aria-hidden');
        await expect(avatarComponentScreenreader).toHaveText(expectedScreenReader);
        await expect(avatarComponentScreenreader).not.toHaveAttribute('aria-hidden');
    });
});

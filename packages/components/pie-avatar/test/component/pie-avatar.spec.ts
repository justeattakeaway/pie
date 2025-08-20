import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { avatar } from '../helpers/selectors';

const avatarInitialsTestCases = [
    { input: 'Alice Johnson', expectedVisual: 'AJ', expectedScreenReader: 'A, J' },
    { input: 'John Davis Smith', expectedVisual: 'JD', expectedScreenReader: 'J, D' },
    { input: 'John Davis-Smith', expectedVisual: 'JD', expectedScreenReader: 'J, D' },
    { input: 'Jean-Luc Picard', expectedVisual: 'JL', expectedScreenReader: 'J, L' },
    { input: '  Mary   Anne  ', expectedVisual: 'MA', expectedScreenReader: 'M, A' },
    { input: 'Madonna', expectedVisual: 'M', expectedScreenReader: 'M' },
    { input: 'John 123', expectedVisual: 'J1', expectedScreenReader: 'J, 1' },
    { input: "D'Angelo Russell", expectedVisual: 'DR', expectedScreenReader: 'D, R' }

];
const avatarEdgeTestCases = [
    { input: '' },
    { input: null },
    { input: undefined }
];

test.describe('PieAvatar - Component tests', () => {
    test('should render as image when src is provided', async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--src-provided');
        await avatarPage.load();

        // Act
        const avatarCustomElement = page.locator(avatar.selectors.container.dataTestId); // getting the custom pie-avatar element
        const avatarImg = page.getByTestId('pie-avatar-image');
        const avatarComponentDiv = avatarCustomElement.locator('div');

        // Assert
        await expect(avatarCustomElement).toHaveAttribute('tag');
        await expect(avatarComponentDiv).toBeVisible();
        await expect(avatarImg).toHaveAttribute('src', './static/images/pie-logo.svg');
        await expect(avatarImg).toHaveAttribute('alt');
    });

    test('should render as a div when tag is not provided', async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--default');
        await avatarPage.load();

        // Act
        const avatarCustomElement = page.locator(avatar.selectors.container.dataTestId); // getting the custom pie-avatar element
        const avatarComponentDiv = avatarCustomElement.locator('div');

        // Assert
        await expect(avatarCustomElement).not.toHaveAttribute('tag');
        await expect(avatarComponentDiv).toBeVisible();
    });

    test('should render as a div when tag is div', async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--default');
        avatarPage.args = 'tag:div';

        await avatarPage.load();

        // Act
        const avatarCustomElement = page.locator(avatar.selectors.container.dataTestId);
        const avatarComponentDiv = avatarCustomElement.locator('div');

        // Assert
        await expect(avatarCustomElement).toHaveAttribute('tag');
        await expect(avatarComponentDiv).toBeVisible();
    });

    avatarEdgeTestCases.forEach(({ input }) => {
        test(`should render user icon when label is ${input}`, async ({ page }) => {
            // Arrange
            const avatarPage = new BasePage(page, 'avatar--default');
            avatarPage.args = ''; // don't set label
            await avatarPage.load();

            // Act
            const avatarComponentVisual = page.getByTestId('pie-avatar-icon');

            // Assert
            await expect(avatarComponentVisual).toBeVisible();
        });
        test(`should  be ommitted by screenreaders when label is ${input}`, async ({ page }) => {
            // Arrange
            const avatarPage = new BasePage(page, 'avatar--default');
            avatarPage.args = ''; // don't set label
            await avatarPage.load();

            // Act
            const avatarComponentVisual = page.getByTestId('pie-avatar-icon');

            // Assert
            await expect(avatarComponentVisual).toHaveAttribute('aria-hidden');
        });
    });
});

avatarInitialsTestCases.forEach(({ input, expectedVisual, expectedScreenReader }) => {
    test(`should render ${expectedVisual} initials visually and ${expectedScreenReader} for screenreaders when label is ${input}`, async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--default');
        await avatarPage.load();

        // Act - Have to manually set the label as Storybook doesn't support certain characters when passed via query params
        await page.evaluate(async (input) => {
            const avatar = document.querySelector('pie-avatar');
            avatar?.setAttribute('label', `${input}`);
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


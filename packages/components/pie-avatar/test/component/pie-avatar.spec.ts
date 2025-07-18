import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type AvatarProps, tags } from '../../src/defs.ts';
import { avatar } from '../helpers/selectors';

// update to have expected visual and expected screen reader.
const avatarInitialsTestCases = [
    { input: 'Alice Johnson', expected: 'AJ' },
    { input: 'John Davis Smith', expected: 'JD' },
    { input: 'John Davis-Smith', expected: 'JD' },
    { input: 'Jean-Luc Picard', expected: 'JP' },
    { input: '  Mary   Anne  ', expected: 'MA' },
    { input: 'D’Angelo Russell', expected: 'DR' },
    { input: 'Madonna', expected: 'M' },
    { input: 'John 123', expected: 'J1' },
    { input: '', expected: 'Icon Placeholder' },
    { input: null, expected: 'Icon Placeholder' },
    { input: undefined, expected: 'Icon Placeholder' }
];

test.describe('PieAvatar - Component tests', () => {
    test('should render as a div when tag is not provided', async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--default');
        await avatarPage.load();

        // Act
        const avatarCustomElement = page.locator(avatar.selectors.container.dataTestId); // getting the custom pie-avatar el
        const avatarComponentDiv = avatarCustomElement.locator('div'); // gives pie-avatar custom el

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
        const avatarCustomElement = page.locator(avatar.selectors.container.dataTestId); // getting the custom pie-avatar el
        const avatarComponentDiv = avatarCustomElement.locator('div'); // gives pie-avatar custom el

        // Assert
        await expect(avatarCustomElement).toHaveAttribute('tag'); // find a way to check that tag attribute is div
        await expect(avatarComponentDiv).toBeVisible();
    });

    test('should render initials `AJ` visually and `A, J` for screenreaders when label is Alice Johnson', async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--default');
        avatarPage.args = 'label:Alice Johnson'; // /story/avatar--default&args=tag:button;label:Josh

        await avatarPage.load();

        // Act
        const avatarComponentVisual = page.getByTestId('pie-avatar-initials-visual');
        const avatarComponentScreenreader = page.getByTestId('pie-avatar-initials-screenreader');

        // Assert
        await expect(avatarComponentVisual).toHaveText('AJ');
        await expect(avatarComponentVisual).toHaveAttribute('aria-hidden');
        await expect(avatarComponentScreenreader).toHaveText('A, J');
        await expect(avatarComponentScreenreader).not.toHaveAttribute('aria-hidden');
    });

    test('should render `Icon Placeholder` when label is undefined', async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--default');
        avatarPage.args = ''; // /story/avatar--default&args=tag:button;label:Josh

        await avatarPage.load();

        // Act
        const avatarCustomElement = page.locator(avatar.selectors.container.dataTestId);

        // Assert
        await expect(avatarCustomElement).toHaveText('Icon Placeholder');
    });

    test('should render initials `JD` visually and `J, D`  when label is John Davis-Smith', async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--default');
        avatarPage.args = 'label:John Davis-Smith';

        await avatarPage.load();

        // Act
        const avatarComponentVisual = page.getByTestId('pie-avatar-initials-visual');
        const avatarComponentScreenreader = page.getByTestId('pie-avatar-initials-screenreader');

        // Assert
        await expect(avatarComponentVisual).toHaveText('JD');
        await expect(avatarComponentVisual).toHaveAttribute('aria-hidden');
        await expect(avatarComponentScreenreader).toHaveText('J, D');
        await expect(avatarComponentScreenreader).not.toHaveAttribute('aria-hidden');
    });
});

/*
1.Check the aria-hide visual initials 'JM' for the ones not visible to screen readers
2.Check that the other ones are not aria-hidden (no aria-hidden attribute).
3. Test the other label combinations with Icon Placeholder fallback
4. WILL NEED HELP: Create a story where controls are enabled (if you have controls enabled you can pass labels as url parameters into storybook)
5. Ask Josh how you can pass labels (controls) as URL params */

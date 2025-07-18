import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type AvatarProps, tags } from '../../src/defs.ts';
import { avatar } from '../helpers/selectors';

const avatarInitialsTestCases = [
    { input: 'Alice Johnson', expected: 'AJ' },
    { input: 'Jamie Cornwall Maguire', expected: 'JC' },
    { input: 'Jamie Cornwall-Maguire', expected: 'JC' },
    { input: 'Jean-Luc Picard', expected: 'JP' },
    { input: '  Mary   Anne  ', expected: 'MA' },
    { input: 'Élodie Dubois', expected: 'ÉD' },
    { input: '张 伟', expected: '张伟' },
    { input: 'محمد علي', expected: 'مع' },
    { input: 'Иван Иванов', expected: 'ИИ' },
    { input: 'D’Angelo Russell', expected: 'DR' },
    { input: 'johnSmith', expected: 'JS' },
    { input: 'Madonna', expected: 'M' },
    { input: '@@ ##', expected: 'Icon Placeholder' },
    { input: 'John 123', expected: 'J1' },
    { input: '', expected: 'Icon Placeholder' },
    { input: null, expected: 'Icon Placeholder' },
    { input: undefined, expected: 'Icon Placeholder' }
];

test.describe('PieAvatar - Component tests', () => {
    test('should render as a div when tag is not provided', async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--no-tag-provided');
        await avatarPage.load();

        // Act
        const avatarCustomElement = page.locator(avatar.selectors.container.dataTestId); // getting the custom pie-avatar el
        const avatarComponentDiv = avatarCustomElement.locator('div'); // gives pie-avatar custom el

        // Assert
        await expect(avatarCustomElement).not.toHaveAttribute('tag');
        await expect(avatarComponentDiv).toBeVisible();
    });

    test('should render as a div with initials AJ when tag is div and label is Alice Johnson', async ({ page }) => {
        // Arrange
        const avatarPage = new BasePage(page, 'avatar--div-as-tag-provided');
        await avatarPage.load();

        // Act
        const avatarCustomElement = page.locator(avatar.selectors.container.dataTestId); // getting the custom pie-avatar el
        const avatarComponentDiv = avatarCustomElement.locator('div'); // gives pie-avatar custom el

        // Assert
        await expect(avatarCustomElement).toHaveAttribute('tag');
        await expect(avatarComponentDiv).toContainText('AJ');
    });
});


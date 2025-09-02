import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { avatar } from '../helpers/selectors';

test.describe('PieAvatar - Visual tests`', () => {
    test('should display the PieAvatar default variant successfully', async ({ page }) => {
        const avatarPage = new BasePage(page, 'avatar--default');
        const avatarComponent = page.locator(avatar.selectors.container.dataTestId);
        await avatarPage.load();

        await expect.soft(avatarComponent).toBeVisible();
        await percySnapshot(page, 'PieAvatar - Default Test');
    });

    test('should display the PieAvatar component when label is provided', async ({ page }) => {
        const avatarPage = new BasePage(page, 'avatar--default');
        avatarPage.args = 'label:Alice Johnson';
        const avatarComponent = page.locator(avatar.selectors.container.dataTestId);
        await avatarPage.load();

        await expect.soft(avatarComponent).toBeVisible();
        await percySnapshot(page, 'PieAvatar - Label Provided Test');
    });

    test('should display the PieAvatar component when src is provided', async ({ page }) => {
        const avatarPage = new BasePage(page, 'avatar--with-image');
        const avatarComponent = page.locator(avatar.selectors.container.dataTestId);
        const avatarImg = page.getByTestId(avatar.selectors.image.dataTestId);
        await avatarPage.load();

        await expect.soft(avatarComponent).toBeVisible();
        await expect.soft(avatarImg).toBeVisible();
        await percySnapshot(page, 'PieAvatar - Src Provided Test');
    });
});


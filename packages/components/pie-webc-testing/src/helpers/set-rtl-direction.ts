import { type Page } from '@playwright/test';

export const setRTL = async (page: Page) => {
    await page.evaluate(() => {
        document.documentElement.setAttribute('dir', 'rtl');
    });
};

import { type Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    async clickButtonWithText (buttonText: string) {
        await this.page.locator('pie-button', { hasText: buttonText }).click();
    }
}

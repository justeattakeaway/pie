import type { Locator, Page } from '@playwright/test';

export class ButtonComponent {
    readonly componentLocator: Locator;

    constructor (page: Page) {
        this.componentLocator = page.locator('pie-button');
    }
}

import type { Locator, Page } from '@playwright/test';

export class ListComponent {
    readonly componentLocator: Locator;

    constructor (page: Page) {
        this.componentLocator = page.locator('pie-list');
    }

    /**
     * Gets all list items within the component
     */
    listItems () {
        // Get by selector
        return this.componentLocator.locator('pie-list-item, li');
    }

    /**
     * Gets a specific list item by index
     */
    getItemAtIndex (index: number) {
        return this.listItems().nth(index);
    }

    /**
     * Gets a specific list item by text content
     */
    getItemByText (text: string) {
        return this.listItems().filter({ hasText: text });
    }
}

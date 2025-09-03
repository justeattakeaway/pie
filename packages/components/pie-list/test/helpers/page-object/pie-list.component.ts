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

    /**
     * Checks if the list has the specified attribute
     */
    async hasAttribute (page: Page, attribute: string): Promise<boolean> {
        return page.evaluate(
            ([selector, attr]) => {
                const element = document.querySelector(selector);
                return element?.hasAttribute(attr) ?? false;
            },
            ['pie-list', attribute],
        );
    }
}

import type { Locator, Page } from '@playwright/test';

export class PaginationComponent {
    readonly componentLocator: Locator;
    readonly previousButtonLocator: Locator;
    readonly nextButtonLocator: Locator;
    readonly pageButtonLocator: Locator;
    readonly ellipsisLocator: Locator;

    constructor (page: Page) {
        this.componentLocator = page.locator('pie-pagination');
        // pie-icon-button renders a native <button> in its shadow DOM and does not
        // reflect `disabled` to the host, so assertions target the inner button.
        this.previousButtonLocator = this.componentLocator.locator('[data-test-id="pie-pagination-previous"] button');
        this.nextButtonLocator = this.componentLocator.locator('[data-test-id="pie-pagination-next"] button');
        this.pageButtonLocator = this.componentLocator.locator('[data-test-id="pie-pagination-page"]');
        this.ellipsisLocator = this.componentLocator.locator('[data-test-id="pie-pagination-ellipsis"]');
    }

    /**
     * Returns the page-number button matching the given page number.
     * Uses an exact text match (tolerating template whitespace) so e.g. page 1
     * does not also match page 10.
     */
    getPageButton (page: number): Locator {
        return this.pageButtonLocator.filter({ hasText: new RegExp(`^\\s*${page}\\s*$`) });
    }
}

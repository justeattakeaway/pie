import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { divider } from './selectors';

export class DividerComponent extends BasePage {
    private readonly componentLocator: Locator;

    constructor (page: Page) {
        super(page, 'divider');
        this.componentLocator = page.getByTestId(divider.selectors.container.dataTestId);
    }

    /**
     * Checks whether the cookie banner is currently visible on the page.
     *
     * @returns {Promise<boolean>} A Promise that resolves to a boolean value indicating
     *                             whether the cookie banner is visible (`true`) or not (`false`).
     */
    async isDividerVisible () : Promise<boolean> {
        return this.componentLocator.isVisible();
    }
}

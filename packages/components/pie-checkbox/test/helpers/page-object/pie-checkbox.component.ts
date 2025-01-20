import type { Locator, Page } from '@playwright/test';
import { checkbox } from './selectors.ts';

export class CheckboxComponent {
    readonly componentLocator: Locator;
    readonly inputLocator: Locator;
    readonly labelLocator: Locator;
    readonly assistiveTextLocator: Locator;
    readonly page: Page;
    constructor (page: Page) {
        this.page = page;
        this.componentLocator = page.locator(checkbox.selectors.container.dataTestId);
        this.inputLocator = this.componentLocator.getByTestId(checkbox.selectors.input.dataTestId);
        this.labelLocator = this.componentLocator.getByTestId(checkbox.selectors.label.dataTestId);
        this.assistiveTextLocator = this.componentLocator.getByTestId(checkbox.selectors.assistiveText.dataTestId);
    }

    async isValid () {
        return this.page.evaluate(() => {
            const element = document.querySelector('pie-checkbox')?.shadowRoot?.querySelector('input') as HTMLInputElement;
            return element ? element.validity.valid : false;
        });
    }
}

import type { Locator, Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { getShadowElementStylePropValues } from '@justeattakeaway/pie-webc-testing/src/helpers/get-shadow-element-style-prop-values.ts';

export class ButtonComponent extends BasePage {
    readonly componentLocator: Locator;

    constructor (page: Page, componentName: string) {
        super(page, componentName);
        this.componentLocator = page.locator('pie-button');
    }

    /**
     * Clicks the "Necessary Only" button.
     *
     * @returns {Promise<void>} A Promise that resolves once the PIE button
     *                          has been successfully clicked.
     */
    async click () : Promise<void> {
        await this.componentLocator.click();
    }

    /**
     * Checks if the button is responsive.
     *
     * @returns {Promise<void>} A Promise that resolves once the button is responsive.
     */
    async isResponsive () : Promise<boolean> {
        const hasIsResponsiveAttribute = await this.componentLocator.getAttribute('isresponsive') !== null;
        const buttonClasses = await this.componentLocator.locator('button').getAttribute('class') || '';

        return hasIsResponsiveAttribute || buttonClasses.includes('o-btn--responsive');
    }

    async getShadowElementStylePropValues (props: Array<string>): Promise<Array<string>> {
        return getShadowElementStylePropValues(this.componentLocator, 'button', props);
    }
}

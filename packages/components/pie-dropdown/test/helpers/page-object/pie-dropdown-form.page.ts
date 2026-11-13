import { type Page, type Locator } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

export class DropdownFormPage extends BasePage {
    readonly resetButton: Locator;
    readonly submitButton: Locator;
    readonly formData: Locator;

    constructor (page: Page, storyName = 'dropdown--example-form') {
        super(page, storyName);
        this.resetButton = page.locator('button[type="reset"]');
        this.submitButton = page.locator('button[type="submit"]');
        this.formData = page.locator('#output');
    }
}

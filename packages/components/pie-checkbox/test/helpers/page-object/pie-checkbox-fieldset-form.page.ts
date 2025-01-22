import { type Page, type Locator } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { CheckboxComponent } from './pie-checkbox.component.ts';

export class CheckboxFieldsetFormPage extends BasePage {
    readonly checkboxComponent: CheckboxComponent;
    readonly resetButton: Locator;
    readonly submitButton: Locator;
    readonly formData: Locator;

    constructor (page: Page) {
        super(page, 'checkbox--example-fieldset-form');
        this.checkboxComponent = new CheckboxComponent(page);
        this.resetButton = page.locator('button[type="reset"]');
        this.submitButton = page.locator('button[type="submit"]');
        this.formData = page.locator('#output');
    }
}

import { type Page, type Locator } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { CheckboxComponent } from './pie-checkbox.component.ts';

export class CheckboxNativeLabelForElementChildrenPage extends BasePage {
    readonly checkboxComponent: CheckboxComponent;
    readonly nativeLabel: Locator;
    readonly submitButton: Locator;
    readonly formData: Locator;

    constructor (page: Page) {
        super(page, 'checkbox--native-label-for-element-children');
        this.checkboxComponent = new CheckboxComponent(page);
        this.nativeLabel = page.getByTestId('native-label');
        this.submitButton = page.locator('button[type="submit"]');
        this.formData = page.locator('#output');
    }
}

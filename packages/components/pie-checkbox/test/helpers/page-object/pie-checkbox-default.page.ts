import { type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { CheckboxComponent } from './pie-checkbox.component.ts';

export class CheckboxDefaultPage extends BasePage {
    readonly checkboxComponent: CheckboxComponent;
    constructor (page: Page) {
        super(page, 'checkbox--default');
        this.checkboxComponent = new CheckboxComponent(page);
    }
}

import { type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ButtonComponent } from './pie-button.component.ts';

export class ButtonAnchorPage extends BasePage {
    readonly buttonComponent: ButtonComponent;

    constructor (page: Page) {
        super(page, 'button--anchor');
        this.buttonComponent = new ButtonComponent(page);
    }
}

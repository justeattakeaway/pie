import { type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ButtonComponent } from './pie-button.component.ts';

export class ButtonAnchorWithDownloadFilenamePage extends BasePage {
    readonly buttonComponent: ButtonComponent;

    constructor (page: Page) {
        super(page, 'button--anchor-with-download-filename');
        this.buttonComponent = new ButtonComponent(page);
    }
}

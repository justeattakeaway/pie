import { type Page, type Locator } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

export class ModalMissingDialogSimulationPage extends BasePage {
    readonly runTestButton: Locator;
    readonly topOfPageCopy: Locator;
    readonly bottomOfPageCopy: Locator;

    constructor (page: Page) {
        super(page, 'modal--missing-dialog-simulation');
        this.runTestButton = page.getByTestId('run-test-button');
        this.topOfPageCopy = page.getByText('Top of page copy');
        this.bottomOfPageCopy = page.getByText('Bottom of page copy');
    }
}

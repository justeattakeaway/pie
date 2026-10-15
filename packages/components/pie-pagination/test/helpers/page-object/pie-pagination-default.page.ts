import { type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { PaginationComponent } from './pie-pagination.component.ts';

export class PaginationDefaultPage extends BasePage {
    readonly paginationComponent: PaginationComponent;

    constructor (page: Page) {
        super(page, 'pagination--default');
        this.paginationComponent = new PaginationComponent(page);
    }
}

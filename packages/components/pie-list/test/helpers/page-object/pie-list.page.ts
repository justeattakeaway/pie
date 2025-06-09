import type { Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ListComponent } from './pie-list.component.ts';
import { type ListProps } from '../../../src';

export class ListPage extends BasePage {
    readonly listComponent: ListComponent;

    constructor (page: Page, storyId = 'list--default') {
        super(page, storyId);
        this.listComponent = new ListComponent(page);
    }

    /**
     * Load a specific list story with optional props
     */
    async loadWithProps (props?: Partial<ListProps>, additionalOptions = {}) {
        await this.load({ ...props }, additionalOptions);
        return this;
    }
}

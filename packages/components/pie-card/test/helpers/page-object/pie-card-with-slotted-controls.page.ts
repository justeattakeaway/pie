import { type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { CardComponent } from './pie-card.component.ts';

export class CardWithSlottedControlsPage extends BasePage {
    readonly cardComponent: CardComponent;
    constructor (page: Page) {
        super(page, 'card--with-slotted-controls');
        this.cardComponent = new CardComponent(page);
    }
}

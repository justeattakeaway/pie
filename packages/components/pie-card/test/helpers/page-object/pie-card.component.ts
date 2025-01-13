import { type Locator, type Page } from '@playwright/test';
import {
    card,
} from './selectors.ts';

export class CardComponent {
    readonly componentLocator: Locator;
    readonly linkLocator: Locator;
    readonly buttonLocator: Locator;

    constructor (page: Page) {
        this.componentLocator = page.getByTestId(card.selectors.container.dataTestId);
        this.linkLocator = this.componentLocator.getByTestId(card.selectors.link.dataTestId);
        this.buttonLocator = this.componentLocator.getByTestId(card.selectors.button.dataTestId);
    }
}

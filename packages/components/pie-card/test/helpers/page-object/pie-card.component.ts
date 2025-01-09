import { type Locator, type Page } from '@playwright/test';
import {
  card,
} from './selectors.ts';

export class CardComponent {
  readonly componentLocator: Locator;

  constructor(page: Page) {
    this.componentLocator = page.getByTestId(card.selectors.container.dataTestId);
  }
}

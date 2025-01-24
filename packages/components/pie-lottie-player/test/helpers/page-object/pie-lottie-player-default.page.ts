import { type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { LottiePlayerComponent } from './pie-lottie-player.component.ts';

export class LottiePlayerDefaultPage extends BasePage {
    readonly lottiePlayerComponent: LottiePlayerComponent;
    constructor (page: Page) {
        super(page, 'lottie-player--default');
        this.lottiePlayerComponent = new LottiePlayerComponent(page);
    }
}

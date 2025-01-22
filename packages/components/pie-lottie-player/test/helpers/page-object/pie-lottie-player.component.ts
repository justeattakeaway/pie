import { type Locator, type Page } from '@playwright/test';
import { lottiePlayer } from './selectors.ts';
import type { PieLottiePlayer } from '../../../src/index.ts';

export class LottiePlayerComponent {
    readonly componentLocator: Locator;

    constructor (page: Page) {
        this.componentLocator = page.locator(lottiePlayer.selectors.container.dataTestId);
    }

    /**
  * Helper function to set the animation source on a pie-lottie-player element
  * due to Storybook limitations - https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
  * @param page - The Playwright page object
  * @param animationSrc - The URL/path of the animation source to set - relative to pie-lottie-player.test.stories.ts
  */
    async setAnimationSource (page: Page, animationSrc: string) {
        await page.evaluate((src: string) => {
            const lottiePlayer = document.querySelector('pie-lottie-player') as PieLottiePlayer;
            lottiePlayer.animationSrc = src;
        }, animationSrc);
    }
}

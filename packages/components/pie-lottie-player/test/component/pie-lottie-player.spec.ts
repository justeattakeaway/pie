import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type LottiePlayerProps, type PieLottiePlayer } from '../../src/index.ts';
import { lottiePlayer } from '../helpers/page-object/selectors.ts';

/**
 * Helper function to set the animation source on a pie-lottie-player element
 * due to Storybook limitations - https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
 * @param page - The Playwright page object
 * @param animationSrc - The URL/path of the animation source to set - relative to pie-lottie-player.test.stories.ts
 */

async function setAnimationSource (page: any, animationSrc: string) {
    await page.evaluate((src: string) => {
        const lottiePlayer = document.querySelector('pie-lottie-player') as PieLottiePlayer;
        lottiePlayer.animationSrc = src;
    }, animationSrc);
}

test.describe('PieLottiePlayer - Component tests', () => {
    test('should render successfully', async ({ page }) => {
    // Arrange
        const lottiePlayerPage = new BasePage(page, 'lottie-player--default');
        await lottiePlayerPage.load();

        await setAnimationSource(page, './static/animations/order-confirmed.json');

        // Assert
        const lottiePlayerComponent = page.locator(lottiePlayer.selectors.container.dataTestId);
        await expect(lottiePlayerComponent).toBeVisible();
    });

    test.describe('when props are not provided"', () => {
        test('should render the expected default props', async ({ page }) => {
            // Arrange
            const lottiePlayerPage = new BasePage(page, 'lottie-player--default');
            await lottiePlayerPage.load();

            await setAnimationSource(page, './static/animations/order-confirmed.json');

            const lottiePlayerComponent = page.locator(lottiePlayer.selectors.container.dataTestId);

            // Assert
            await expect(lottiePlayerComponent).toHaveAttribute('speed', '1');
            await expect(lottiePlayerComponent).toHaveAttribute('direction', 'forward');
        });

        test('should not render more props than expected', async ({ page }) => {
            // Arrange
            const lottiePlayerPage = new BasePage(page, 'lottie-player--default');
            await lottiePlayerPage.load();

            await setAnimationSource(page, './static/animations/order-confirmed.json');

            // Act
            const lottierPlayerComponent = page.locator(lottiePlayer.selectors.container.dataTestId);

            // Assert
            await expect(lottierPlayerComponent).not.toHaveAttribute('autoPlayDisabled');
            await expect(lottierPlayerComponent).not.toHaveAttribute('loopDisabled');
        });
    });

    test.describe('when extra props are provided"', () => {
        test('should render the extra default props', async ({ page }) => {
            // Arrange
            const props: LottiePlayerProps = {
                autoPlayDisabled: true,
                loopDisabled: true,
            };

            const lottiePlayerPage = new BasePage(page, 'lottie-player--default');
            await lottiePlayerPage.load({ ...props });

            await setAnimationSource(page, './static/animations/order-confirmed.json');

            const lottiePlayerComponent = page.locator(lottiePlayer.selectors.container.dataTestId);

            // Assert
            await expect(lottiePlayerComponent).toHaveAttribute('autoPlayDisabled');
            await expect(lottiePlayerComponent).toHaveAttribute('loopDisabled');
        });
    });
});

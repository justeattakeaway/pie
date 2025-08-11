import { test, expect } from '@playwright/test';
import { LottiePlayerDefaultPage } from '../helpers/page-object/pie-lottie-player-default.page.ts';
import { type LottiePlayerProps } from '../../src/defs.ts';

test.describe('PieLottiePlayer - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const lottiePlayerPage = new LottiePlayerDefaultPage(page);
        await lottiePlayerPage.load();

        await lottiePlayerPage.lottiePlayerComponent.setAnimationSource(page, './static/animations/order-confirmed.json');

        // Assert
        const lottiePlayerComponent = lottiePlayerPage.lottiePlayerComponent.componentLocator;
        await expect(lottiePlayerComponent).toBeVisible();
    });

    test.describe('when props are not provided', () => {
        test('should render the expected default props', async ({ page }) => {
            // Arrange
            const lottiePlayerPage = new LottiePlayerDefaultPage(page);
            await lottiePlayerPage.load();

            await lottiePlayerPage.lottiePlayerComponent.setAnimationSource(page, './static/animations/order-confirmed.json');

            // Assert
            const lottiePlayerComponent = lottiePlayerPage.lottiePlayerComponent.componentLocator;
            await expect(lottiePlayerComponent).toHaveAttribute('speed', '1');
            await expect(lottiePlayerComponent).toHaveAttribute('direction', 'forward');
        });

        test('should not render more props than expected', async ({ page }) => {
            // Arrange
            const lottiePlayerPage = new LottiePlayerDefaultPage(page);
            await lottiePlayerPage.load();

            await lottiePlayerPage.lottiePlayerComponent.setAnimationSource(page, './static/animations/order-confirmed.json');

            // Assert
            const lottierPlayerComponent = lottiePlayerPage.lottiePlayerComponent.componentLocator;
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

            const lottiePlayerPage = new LottiePlayerDefaultPage(page);
            await lottiePlayerPage.load({ ...props });

            await lottiePlayerPage.lottiePlayerComponent.setAnimationSource(page, './static/animations/order-confirmed.json');

            // Assert
            const lottiePlayerComponent = lottiePlayerPage.lottiePlayerComponent.componentLocator;
            await expect(lottiePlayerComponent).toHaveAttribute('autoPlayDisabled');
            await expect(lottiePlayerComponent).toHaveAttribute('loopDisabled');
        });
    });
});

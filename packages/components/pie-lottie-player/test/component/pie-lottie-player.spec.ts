
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieLottiePlayer, LottiePlayerProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-lottie-player"]';

test.describe('PieLottiePlayer - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieLottiePlayer, {
            props: {} as LottiePlayerProps,
        });

        // Act
        const lottiePlayer = page.locator(componentSelector);

        // Assert
        expect(lottiePlayer).toBeVisible();
    });
});

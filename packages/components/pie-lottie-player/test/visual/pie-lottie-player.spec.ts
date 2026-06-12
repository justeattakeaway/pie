import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { LottiePlayerDefaultPage } from 'test/helpers/page-object/pie-lottie-player-default.page.ts';
import { type LottiePlayerProps } from '../../src/defs.ts';

test.describe('PieLottiePlayer - Visual tests', () => {
    test('should display the PieLottiePlayer component successfully', async ({ page }) => {
        // Arrange
        const props: LottiePlayerProps = {
            autoPlayDisabled: true,
        };

        const lottiePlayerPage = new LottiePlayerDefaultPage(page);
        await lottiePlayerPage.load({ ...props });

        // Assert
        await percySnapshot(page, 'PieLottiePlayer - Visual Test');
    });
});

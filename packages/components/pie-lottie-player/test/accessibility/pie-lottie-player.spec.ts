import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { LottiePlayerDefaultPage } from 'test/helpers/page-object/pie-lottie-player-default.page.ts';

test.describe('PieLottiePlayer - Component tests', () => {
    test('should render successfully', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const lottiePlayerPage = new LottiePlayerDefaultPage(page);
        await lottiePlayerPage.load();

        // Assert
        const lottiePlayerComponent = lottiePlayerPage.lottiePlayerComponent.componentLocator;
        await expect.soft(lottiePlayerComponent).toBeVisible();

        const results = await makeAxeBuilder().analyze();
        expect(results.violations).toEqual([]);
    });
});

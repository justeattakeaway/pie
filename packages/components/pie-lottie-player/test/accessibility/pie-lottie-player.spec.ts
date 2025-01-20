import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { lottiePlayer } from '../helpers/page-object/selectors.ts';

test.describe('PieLottiePlayer - Component tests', () => {
    test('should render successfully', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const lottiePlayerPage = new BasePage(page, 'lottie-player--default');
        await lottiePlayerPage.load();

        // Assert
        const lottiePlayerComponent = page.locator(lottiePlayer.selectors.container.dataTestId);
        await expect.soft(lottiePlayerComponent).toBeVisible();

        const results = await makeAxeBuilder().analyze();
        expect(results.violations).toEqual([]);
    });
});

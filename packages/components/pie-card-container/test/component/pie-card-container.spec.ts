
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieCardContainer, CardContainerProps } from '@/index';

const componentSelector = '[data-test-id="pie-card-container"]';

test.describe('PieCardContainer - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieCardContainer, {
            props: {} as CardContainerProps,
        });

        // Act
        const cardContainer = page.locator(componentSelector);

        // Assert
        expect(cardContainer).toBeVisible();
    });
});

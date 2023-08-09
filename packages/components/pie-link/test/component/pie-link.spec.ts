
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieLink, LinkProps } from '@/index';

const componentSelector = '[data-test-id="pie-link"]';

test.describe('PieLink - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieLink, {
            props: {} as LinkProps,
        });

        // Act
        const link = page.locator(componentSelector);

        // Assert
        expect(link).toBeVisible();
    });
});

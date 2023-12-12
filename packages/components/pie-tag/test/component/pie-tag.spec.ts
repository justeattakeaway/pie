
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieTag, TagProps } from '@/index';

const componentSelector = '[data-test-id="pie-tag"]';

test.describe('PieTag - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieTag, {
            props: {} as TagProps,
        });

        // Act
        const tag = page.locator(componentSelector);

        // Assert
        expect(tag).toBeVisible();
    });
});

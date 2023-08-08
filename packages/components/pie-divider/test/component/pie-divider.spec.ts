
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieDivider, DividerProps } from '@/index';

const componentSelector = '[data-test-id="pie-divider"]';

test.describe('PieDivider - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieDivider, {
            props: {} as DividerProps,
        });

        // Act
        const divider = page.locator(componentSelector);

        // Assert
        expect(divider).toBeVisible();
    });
});


import { test, expect } from '@sand4rt/experimental-ct-web';
import { IconClose, IconsWebcProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-icons-webc"]';

test.describe('PieIconsWebc - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(IconClose, {
            props: {} as IconsWebcProps,
        });

        // Act
        const iconsWebc = page.locator(componentSelector);

        // Assert
        expect(iconsWebc).toBeVisible();
    });
});

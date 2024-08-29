
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieDivider } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-divider"]';

const slotContent = 'Label';

test.describe('PieDivider - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieDivider);

        // Act
        const divider = page.locator(componentSelector);

        // Assert
        expect(divider).toBeVisible();
    });

    test('should render successfully with slotContent', async ({ mount, page }) => {
        // Arrange
        await mount(PieDivider, {
            slots: { default: slotContent },
        });

        // Act
        const divider = page.locator(componentSelector);

        // Assert
        expect(divider).toBeVisible();
    });
});


import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieRadio, type RadioProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-radio"]';

test.describe('PieRadio - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieRadio, {
            props: {} as RadioProps,
        });

        // Act
        const radio = page.locator(componentSelector);

        // Assert
        expect(radio).toBeVisible();
    });
});

import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieBarFoo } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-bar-foo"]';

test.describe('PieBarFoo - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieBarFoo);

        // Act
        const barFoo = page.locator(componentSelector);

        // Assert
        expect(barFoo).toBeVisible();
    });
});

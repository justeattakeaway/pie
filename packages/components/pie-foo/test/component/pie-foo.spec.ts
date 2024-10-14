import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieFoo } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-foo"]';

test.describe('PieFoo - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieFoo);

        // Act
        const foo = page.locator(componentSelector);

        // Assert
        expect(foo).toBeVisible();
    });
});

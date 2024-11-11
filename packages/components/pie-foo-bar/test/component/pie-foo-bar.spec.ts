import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieFooBar } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-foo-bar"]';

test.describe('PieFooBar - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieFooBar);

        // Act
        const fooBar = page.locator(componentSelector);

        // Assert
        expect(fooBar).toBeVisible();
    });
});


import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieTestComponent, TestComponentProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-test-component"]';

test.describe('PieTestComponent - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieTestComponent, {
            props: {} as TestComponentProps,
        });

        // Act
        const testComponent = page.locator(componentSelector);

        // Assert
        expect(testComponent).toBeVisible();
    });
});


import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieCheckbox, CheckboxProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-checkbox"]';

test.describe('PieCheckbox - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieCheckbox, {
            props: {} as CheckboxProps,
        });

        // Act
        const checkbox = page.locator(componentSelector);

        // Assert
        expect(checkbox).toBeVisible();
    });
});

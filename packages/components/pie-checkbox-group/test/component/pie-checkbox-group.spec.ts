
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieCheckboxGroup, CheckboxGroupProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-checkbox-group"]';

test.describe('PieCheckboxGroup - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieCheckboxGroup, {
            props: {} as CheckboxGroupProps,
        });

        // Act
        const checkboxGroup = page.locator(componentSelector);

        // Assert
        expect(checkboxGroup).toBeVisible();
    });
});

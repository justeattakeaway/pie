import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieRadioGroup } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-radio-group"]';

test.describe('PieRadioGroup - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieRadioGroup);

        // Act
        const radioGroup = page.locator(componentSelector);

        // Assert
        expect(radioGroup).toBeVisible();
    });
});

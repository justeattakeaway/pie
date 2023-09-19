
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieFormLabel, FormLabelProps } from '@/index';

const componentSelector = '[data-test-id="pie-form-label"]';

test.describe('PieFormLabel - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieFormLabel, {
            props: {} as FormLabelProps,
        });

        // Act
        const formLabel = page.locator(componentSelector);

        // Assert
        expect(formLabel).toBeVisible();
    });
});


import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieFormLabel, FormLabelProps } from '@/index';

const componentSelector = '[data-test-id="pie-form-label"]';

test.describe('PieFormLabel - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieFormLabel, {
            // Note: the props ts issue should be fixed with https://github.com/sand4rt/playwright-ct-web/issues/27
            props: {
                for: 'form-label',
                optional: 'Optional',
                trailing: 'X out X',
            } as FormLabelProps,
            slots: {
                default: 'Label',
            },
        });

        // Act
        const formLabel = page.locator(componentSelector);

        // Assert
        expect(formLabel).toBeVisible();
    });
});

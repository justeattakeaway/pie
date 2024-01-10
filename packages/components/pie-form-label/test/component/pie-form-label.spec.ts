
import { test, expect, MountOptions } from '@sand4rt/experimental-ct-web';
import { PieFormLabel, FormLabelProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-form-label"]';

test.describe('PieFormLabel - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieFormLabel, {
            props: {
                for: 'form-label',
                optional: 'Optional',
                trailing: 'X out X',
            } as MountOptions<Record<string, never>, PieFormLabel>['props'] & FormLabelProps,
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

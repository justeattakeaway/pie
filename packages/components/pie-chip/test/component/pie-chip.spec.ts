
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieChip, ChipProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-chip"]';

const props: Partial<ChipProps> = {
    variant: 'default',
    isSelected: false,
    isDismissible: false,
    disabled: false,
};

test.describe('PieChip - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieChip, {
            props,
            slots: {
                default: 'Label',
            },
        });

        // Act
        const chip = page.locator(componentSelector);

        // Assert
        expect(chip).toBeVisible();
    });
});

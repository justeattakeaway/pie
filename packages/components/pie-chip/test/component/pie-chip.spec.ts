
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieChip, ChipProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-chip"]';

test.describe('PieChip - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieChip, {
            props: {} as ChipProps,
        });

        // Act
        const chip = page.locator(componentSelector);

        // Assert
        expect(chip).toBeVisible();
    });
});

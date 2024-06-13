
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieTextarea, TextareaProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-textarea"]';

test.describe('PieTextarea - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieTextarea, {
            props: {} as TextareaProps,
        });

        // Act
        const textarea = page.locator(componentSelector);

        // Assert
        expect(textarea).toBeVisible();
    });
});

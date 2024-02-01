import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieAssistiveText } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-assistive-text"]';

test.describe('PieAssistiveText - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieAssistiveText);

        // Act
        const assistiveText = page.locator(componentSelector);

        // Assert
        expect(assistiveText).toBeVisible();
    });

    test('should set `variant` to `default` by default', async ({ mount }) => {
        // Arrange
        const component = await mount(PieAssistiveText);

        // Act
        const assistiveTextComponent = component.locator(componentSelector);

        // Assert
        expect(assistiveTextComponent).toHaveAttribute('variant', 'default');
    });
});

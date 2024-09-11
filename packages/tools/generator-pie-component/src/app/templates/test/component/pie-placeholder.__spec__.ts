import { test, expect } from '@sand4rt/experimental-ct-web';
import { Pie<%= componentName %> } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-<%= fileName %>"]';

test.describe('Pie<%= componentName %> - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(Pie<%= componentName %>);

        // Act
        const <%= componentNameCamelCase %> = page.locator(componentSelector);

        // Assert
        expect(<%= componentNameCamelCase %>).toBeVisible();
    });
});

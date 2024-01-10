
import { test, expect } from '@sand4rt/experimental-ct-web';
import { Pie<%= componentName %>, <%= componentName %>Props } from '../../src/index';

const componentSelector = '[data-test-id="pie-<%= fileName %>"]';

test.describe('Pie<%= componentName %> - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(Pie<%= componentName %>, {
            props: {} as <%= componentName %>Props,
        });

        // Act
        const <%= componentNameCamelCase %> = page.locator(componentSelector);

        // Assert
        expect(<%= componentNameCamelCase %>).toBeVisible();
    });
});

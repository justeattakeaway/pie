/*
import { test, expect } from '@sand4rt/experimental-ct-web';
import { Pie<%= componentName %>, <%= componentName %>Props } from '@/index';

const props: <%= componentName %>Props = {

};

const componentSelector = '[data-test-id="pie-<%= fileName %>"]';

test.describe('%= componentName %>', () => {
    test('should render successfully ', async ({ mount, page }) => {
        // Arrange
        await mount(Pie<%= componentName %>, {
            props: {

            },
        });

        // Act
        const <%= componentNameCamelCase %> = page.locator(componentSelector);

        // Assert
        expect(instance).toBeVisible();
    });
});
*/

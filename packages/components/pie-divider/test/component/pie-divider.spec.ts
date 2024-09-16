import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieDivider, type DividerProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-divider"]';

test.describe('PieDivider - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieDivider);

        // Act
        const divider = page.locator(componentSelector);

        // Assert
        expect(divider).toBeVisible();
    });

    test('should render the `label` if it is provided', async ({ mount }) => {
        // Arrange
        const component = await mount(PieDivider, {
            props: {
                label: 'foo label',
                orientation: 'horizontal',
            } as DividerProps,
        });

        // Act
        const label = component.getByText('foo label');

        // Assert
        expect(label).toBeVisible();
    });

    test('should NOT render the `label` if divider orientation is vertical', async ({ mount }) => {
        // Arrange
        const component = await mount(PieDivider, {
            props: {
                label: 'foo label',
                orientation: 'vertical',
            } as DividerProps,
        });

        // Act
        const label = component.getByText('foo label');

        // Assert
        expect(label).not.toBeVisible();
    });
});
